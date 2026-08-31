// Kommunikationsguide – wie begegne ich diesem Subtyp im Alltag, in Beziehung und Führung?
// Quellen: "Die Sprache unserer Beziehungen", "Führung mit Fundament", "Enneagramm Zoo",
// ergänzt um app-eigene Subtyp-Profile (Wunde/Leidenschaft) und Verbindungstexte.
const KOMMUNIKATIONSGUIDE = {
  SO1: {
    tier: "Gans",
    erkennung: `Die soziale Eins trägt ihre Ordnung nicht nur ins eigene Leben, sondern ins Kollektiv: Sie glaubt, nur wenn sich alle an die Regeln halten, funktioniert Gemeinschaft – und fühlt sich verantwortlich, Standards zu sichern, ob jemand sie darum bittet oder nicht. In meinem Buch <em>Enneagramm Zoo</em> beschreibe ich das Bild der <strong>Gans</strong>, die mit erhobenem Megafon am Ententeich entlangläuft: "Ordnung, bitte!" Ihr Blick gilt nicht sich selbst, sondern dem Ganzen.<br><br>Anders als die selbsterhaltende Eins, deren Strenge sich zuerst am eigenen Verhalten zeigt, richtet sich die SO1 nach außen: Sie wird zur Hüterin von Fairness und Standards für die Gruppe – mit dem Risiko, dass Regel wichtiger wird als Mensch. Wenn sie erkennt, dass Ordnung aus Verständnis wächst statt aus Druck, verwandelt sich Pflicht in Würde, Moral in Mitgefühl.`,
    wunde: {
      titel: "Die Wunde dahinter",
      text: `Wie bei jeder Eins liegt dahinter die <strong>Wunde der Unvollkommenheit</strong>: das tiefe Gefühl, dass die Wirklichkeit niemals ganz dem inneren Ideal entsprechen kann. Bei der SO1 verschiebt sich das ins Kollektive: "Die Gemeinschaft sollte besser sein – und ich bin dafür verantwortlich, dass sich alle daran halten." Die Leidenschaft Zorn zeigt sich hier als moralischer Eifer, der sich selten offen entlädt, sondern in Kritik, Korrektur und dem Bedürfnis übersetzt, andere zu belehren. Wer das versteht, liest ihre Regeltreue nicht als Kontrollsucht, sondern als Versuch, eine geteilte Ordnung zu schaffen, die sie selbst als sicher erlebt.`,
    },
    fluegel: {
      titel: "Flügel-Nuance: SO1w9 und SO1w2",
      w1: { code: "SO1w9", route: "beruehmte-friedrich-merz", name: "Friedrich Merz", text: `die moralische Klarheit wird ruhiger, sachlicher vorgetragen – weniger Kampagne, mehr feste, unbeirrbare Haltung. Reagiert gut auf sachliche Auseinandersetzung mit der Sache selbst; direkte persönliche Konfrontation lässt ihn eher aushärten als nachgeben.` },
      w2: { code: "SO1w2", route: "beruehmte-juergen-klopp", name: "Jürgen Klopp", text: `die Regeltreue bekommt eine warme, einbindende Note – Ordnung wird zum gemeinsamen Projekt, getragen von echter Zuneigung zur Gruppe. Reagiert gut auf persönliche Wertschätzung neben der Sachebene, weniger gut auf rein formale, unpersönliche Korrektur.` },
    },
    stressWachstum: {
      stress: `Unter Stress bewegt sich die SO1 wie jede Eins Richtung <strong>Typ 4</strong>: Die sonst sachliche Klarheit kippt in Selbstmitleid oder das Gefühl, als Einzige die Last der Verantwortung für die Gemeinschaft zu tragen. Erkennst du dieses Muster, ist das ein Signal für erhöhten inneren Druck – kein guter Moment für weitere moralische Appelle, ein guter Moment für persönliche Anteilnahme.`,
      wachstum: `Im Wachstum bewegt sie sich Richtung <strong>Typ 7</strong>: leichter, humorvoller, weniger verbissen – die Sorge um Ordnung bleibt, aber ohne die ständige Anspannung, alles korrigieren zu müssen.`,
    },
    ankommt: [
      `<strong>Anerkennung für Verantwortungsübernahme im Kollektiv.</strong> Die SO1 investiert oft unbezahlte, unsichtbare Energie in Fairness und Struktur – das beim Namen zu nennen, wirkt mehr als allgemeines Lob.`,
      `<strong>Sachliche Auseinandersetzung mit der Sache, nicht mit der Person.</strong> Wer ihre Position inhaltlich ernst nimmt und diskutiert, statt sie als "zu streng" abzutun, bekommt eher Gehör.`,
      `<strong>Verlässlichkeit und eingehaltene Absprachen.</strong> Genau wie bei der SE1 ist das die eigentliche Vertrauenswährung – Regeln, die andere ernst nehmen, bestätigen ihr Grundvertrauen in Gemeinschaft.`,
    ],
    trigger: [
      { trigger: `Regeln oder Vereinbarungen öffentlich vor der Gruppe brechen, ohne es anzusprechen`, warum: `Wird als Angriff auf die gemeinsame Ordnung erlebt, nicht nur als persönliche Enttäuschung`, alternative: `Abweichungen offen benennen und gemeinsam eine Lösung finden, bevor sie unbemerkt bleiben` },
      { trigger: `Ihre Regeltreue als übertrieben oder kleinlich abtun`, warum: `Trifft den moralischen Kern – die SO1 erlebt sich dann als allein verantwortlich und unverstanden`, alternative: `Nach dem Anliegen hinter der Regel fragen, statt die Regel selbst zu belächeln` },
      { trigger: `Bei Fehlern sofort in Rechtfertigung statt Verantwortung gehen`, warum: `Bestätigt ihr Bild, dass niemand außer ihr die Standards ernst nimmt`, alternative: `Fehler offen benennen, ohne Ausflüchte – das entspannt die Situation eher als jede Erklärung` },
      { trigger: `Lange Grundsatzdiskussionen über "richtiges Verhalten" laufen lassen, statt zu priorisieren`, warum: `Kann echten Fortschritt blockieren, weil jede Abweichung zur moralischen Frage wird`, alternative: `Explizit "gut genug" erlauben: Das Ziel benennen, nicht die Perfektion` },
    ],
    fuehrung: {
      titel: "Aus der Führungspraxis: wenn die Regel wichtiger wird als der Mensch",
      text: `In unserem Buch <em>Führung mit Fundament</em> (das ich gemeinsam mit meinem Sohn David L. Rathmer geschrieben habe) beschreiben wir einen Bereichsleiter, der in einer Projektbesprechung wiederholt die unpräzise Sprache eines Kollegen kritisiert. Obwohl das Projekt im Zeitplan liegt, entwickelt sich daraus eine lange Diskussion über "professionelles Arbeiten" – der eigentliche Fortschritt stockt, das Team wird defensiv. Erst als die Führung klar priorisiert ("Das Ziel ist Fortschritt, nicht Perfektion"), entspannt sich die Situation.<br><br>Für die SO1 heißt das übersetzt: Moral aus der Situation nehmen, pragmatisch priorisieren, "gut genug" explizit erlauben – und körperliche Entspannung fördern, denn die Anspannung sitzt oft zuerst im Körper, bevor sie sich in Worten zeigt.`,
      hinweis: `Im Buch beschreiben wir diesen Fall auf Ebene des Grundtyps 1, nicht subtypspezifisch. Die soziale Färbung – die Regel wird zur Angelegenheit der ganzen Gruppe, nicht nur zur eigenen Sache – ist eine Ergänzung auf Basis der übrigen Quellen, kein wörtliches Zitat.`,
    },
    beziehung: {
      titel: `Beziehungsrisiko & heilende Bewegung`,
      risiko: `Die Tendenz zur Kritik und zum Perfektionismus kann Beziehungen belasten – Partner spüren oft, dass sie "nie genügen", weil der Maßstab nicht nur privat, sondern auch gesellschaftlich hoch angesetzt ist.`,
      leitfragen: `Vertrete ich diesen Standard, weil er wirklich nötig ist – oder weil ich vor mir selbst und anderen als integer gelten will?`,
      hilfreich: `Milde vorleben statt einfordern: zeigen, dass Zugehörigkeit nicht an perfektes Verhalten geknüpft ist.`,
    },
    pairing: [
      { partner: "SE1", dynamik: "Prinzip vs. Gemeinschaft", gefahr: "Moralische Kritik", hilfreich: "Regeln und Beziehung im Gleichgewicht halten" },
      { partner: "SO1", dynamik: "Rolle trifft Rolle (Norm, Vorbild)", gefahr: "Konformismus, gegenseitige Kritik", hilfreich: "Regeln prüfen, nicht nur befolgen" },
      { partner: "SX1", dynamik: "Rolle vs. Exklusivität", gefahr: "Kontrolle vs. Vereinnahmung", hilfreich: "Privates schützen, Bühne dosieren" },
      { partner: "SE2", dynamik: "Rolle vs. Fürsorge (praktisch)", gefahr: "Pflichtgefühl erdrückt Spontaneität", hilfreich: "Aufgaben teilen, Dank zeigen" },
      { partner: "SO2", dynamik: "Rolle trifft Rolle (Helfen, sichtbar)", gefahr: "Überforderung durch Pflicht-Altruismus", hilfreich: "Aufgaben klar verteilen, Erschöpfung vorbeugen" },
      { partner: "SX2", dynamik: "Rolle vs. Nähe-Intensität", gefahr: "Eifersucht oder Bühne als Druckmittel", hilfreich: "Öffentlichkeit begrenzen, Privates wahren" },
      { partner: "SE3", dynamik: "Rolle vs. Leistung (praktisch)", gefahr: "Statuskollision, Konkurrenz", hilfreich: "Effizienz und Ordnung vereinen" },
      { partner: "SO3", dynamik: "Rolle trifft Rolle (Erfolg)", gefahr: "Überidentifikation mit Rolle bzw. Image", hilfreich: "Echtheit pflegen, Pausen einplanen" },
      { partner: "SX3", dynamik: "Rolle vs. exklusiver Glanz", gefahr: "Inszenierung statt Nähe", hilfreich: "Gefühlsebene nicht überspielen" },
      { partner: "SE4", dynamik: "Rolle vs. Besonderheit (praktisch)", gefahr: "Kritik vs. Empfindlichkeit", hilfreich: "Tiefe anerkennen, Regeln lockern" },
      { partner: "SO4", dynamik: "Rolle trifft Rolle (Ausdruck)", gefahr: "Vergleich, Minderwert vs. Normdruck", hilfreich: "Gefühle spiegeln, nicht normieren" },
      { partner: "SX4", dynamik: "Rolle vs. Exklusivität (Tiefe)", gefahr: "Pflichtgefühl vs. Drama", hilfreich: "Tiefe dosieren, Pflicht nicht verabsolutieren" },
      { partner: "SE5", dynamik: "Rolle vs. Rückzug (praktisch)", gefahr: "Kälte, Isolation", hilfreich: "Privatheit respektieren, Dialog öffnen" },
      { partner: "SO5", dynamik: "Rolle trifft Rolle (Denken)", gefahr: "Starre Regeln, Distanz", hilfreich: "Regeln erklären, Wärme zeigen" },
      { partner: "SX5", dynamik: "Rolle vs. exklusives Wissen", gefahr: "Kontrolle vs. Geheimhaltung", hilfreich: "Privates schützen, Intimität langsam aufbauen" },
      { partner: "SE6", dynamik: "Rolle vs. Absicherung (praktisch)", gefahr: "Überkontrolle, Misstrauen", hilfreich: "Sicherheit benennen, Vertrauen wagen" },
      { partner: "SO6", dynamik: "Rolle trifft Rolle (Loyalität)", gefahr: "Angst vor Fehlern, Strenge", hilfreich: "Fehlerfreundlichkeit einüben" },
      { partner: "SX6", dynamik: "Rolle vs. exklusives Commitment", gefahr: "Klammern, Eifersucht", hilfreich: "Misstrauen aussprechen, Nähe halten" },
      { partner: "SE7", dynamik: "Rolle vs. Vielfalt (praktisch)", gefahr: "Disziplin vs. Unruhe", hilfreich: "Flexibilität üben, Freude zulassen" },
      { partner: "SO7", dynamik: "Rolle trifft Rolle (Optimismus)", gefahr: "Oberflächlichkeit statt Tiefe", hilfreich: "Substanz und Leichtigkeit verbinden" },
      { partner: "SX7", dynamik: "Rolle vs. exklusives Abenteuer", gefahr: "Pflicht vs. Flucht", hilfreich: "Abenteuer planen, Pflicht lockern" },
      { partner: "SE8", dynamik: "Rolle vs. Macht (praktisch)", gefahr: "Kontrolle vs. Dominanz", hilfreich: "Respekt zeigen, Macht teilen" },
      { partner: "SO8", dynamik: "Rolle trifft Rolle (Führung)", gefahr: "Autoritätenduell", hilfreich: "Transparenz wahren, Machtmissbrauch vermeiden" },
      { partner: "SX8", dynamik: "Rolle vs. exklusive Kraft", gefahr: "Besitzergreifend, hart", hilfreich: "Wärme zeigen, nicht nur Macht" },
      { partner: "SE9", dynamik: "Rolle vs. Harmonie (praktisch)", gefahr: "Starrheit vs. Passivität", hilfreich: "Ruhe würdigen, Aktivität fördern" },
      { partner: "SO9", dynamik: "Rolle trifft Rolle (Gemeinschaftsfrieden)", gefahr: "Stillstand, Harmoniesucht", hilfreich: "Konflikte ansprechen, statt sie zu glätten" },
      { partner: "SX9", dynamik: "Rolle vs. exklusive Harmonie", gefahr: "Passivität, Abhängigkeit", hilfreich: "Impulse setzen, Nähe genießen" },
    ],
    kurzfassung: `Würdige ihren Einsatz für die Gemeinschaft konkret. Diskutiere mit der Sache, nicht gegen die Person. Erlaube "gut genug" explizit – und nimm ihr damit einen Teil der Last, alles allein tragen zu müssen.`,
  },
  SE1: {
    tier: "Adler",
    erkennung: `Die selbsterhaltende Eins richtet ihre Strenge weniger nach außen als nach innen: Sie will selbst "richtig" sein, tadellos, kontrolliert. In meinem Buch <em>Enneagramm Zoo</em> beschreibe ich das Bild des <strong>Adlers</strong>, der über seinen Unterlagen sitzt, Rotstift in der Kralle – jedes Detail wird geprüft, kein Fehler bleibt zufällig. Ordnung ist für ihn Pflicht, nicht Meinung. Der Adler lebt mit dem Blick für das Ganze und für das Wesentliche; sein innerer Antrieb ist, Ordnung zu schaffen – nicht aus Starrheit, sondern aus dem tiefen Bedürfnis nach Klarheit und Richtigkeit.<br><br>Anders als die soziale oder sexuelle Eins zeigt sich diese Strenge zuerst am eigenen Verhalten: Bevor die SE1 andere korrigiert, hat sie sich selbst längst korrigiert. Wer das versteht, liest ihre Kritik nicht als Angriff, sondern als denselben Maßstab, den sie zuerst an sich selbst anlegt.`,
    wunde: {
      titel: "Die Wunde dahinter",
      text: `Was diese Strenge antreibt, ist die <strong>Wunde der Unvollkommenheit</strong>: das tiefe Gefühl, dass die Wirklichkeit niemals ganz dem inneren Ideal entsprechen kann. Der Glaubenssatz dahinter: "Die Welt sollte besser sein – und ich bin dafür verantwortlich" und darunter: "Wenn ich nicht alles kontrolliere, geht es schief." Die Leidenschaft Zorn zeigt sich bei der SE1 als verhaltener, nach innen gerichteter Groll – kaum ausagiert, aber ständig spürbar. Wer das versteht, liest ihre Korrekturen nicht als Rechthaberei, sondern als den Versuch, eine innere Daueranspannung durch Ordnung zu beruhigen.`,
    },
    fluegel: {
      titel: "Flügel-Nuance: SE1w9 und SE1w2",
      w1: { code: "SE1w9", route: "beruehmte-konrad-adenauer", name: "Konrad Adenauer", text: `die Strenge wird ruhiger, geduldiger, langfristiger ausgetragen – weniger Eruption, mehr stille Beharrlichkeit über Jahre. Reagiert gut auf Verlässlichkeit und klar eingehaltene Absprachen; Konfrontation sollte sachlich und ohne Zeitdruck erfolgen.` },
      w2: { code: "SE1w2", route: "beruehmte-marie-kondo", name: "Marie Kondo", text: `die Ordnung bekommt eine wärmere, dienende Note – Korrektheit wird zum Geschenk an andere, nicht nur zum Selbstzweck. Reagiert gut auf Dank und sichtbare Wertschätzung für die investierte Sorgfalt, weniger gut auf reine Sachlichkeit ohne persönliche Note.` },
    },
    stressWachstum: {
      stress: `Unter Stress bewegt sich die SE1 Richtung <strong>Typ 4</strong>: Die sonst kontrollierte Stimmung kippt in Selbstmitleid, Launenhaftigkeit oder das Gefühl, unverstanden und allein mit der ganzen Verantwortung zu sein. Erkennst du dieses Muster, ist das ein Signal für erhöhten inneren Druck – kein guter Moment für weitere Sachargumente, ein guter Moment für emotionale Anteilnahme.`,
      wachstum: `Im Wachstum bewegt sie sich Richtung <strong>Typ 7</strong>: leichter, spontaner, humorvoller – die Strenge lockert sich, ohne die eigenen Werte aufzugeben, weil ein größeres Grundvertrauen entsteht.`,
    },
    ankommt: [
      `<strong>Konkrete Anerkennung für Sorgfalt und Verantwortung.</strong> Ein beiläufiges "passt schon" wirkt entwertend. Was wirkt, ist die genaue Benennung dessen, was gut gemacht wurde – die SE1 merkt sofort, ob Lob echt gemeint oder nur höflich ist.`,
      `<strong>Verlässlichkeit zeigen, nicht nur versprechen.</strong> Eingehaltene Absprachen sind für die SE1 die eigentliche Vertrauenswährung – mehr als große Worte.`,
      `<strong>Sachlich beginnen, aber Raum für Gefühl öffnen.</strong> Ein ruhiger, klarer Einstieg baut Sicherheit auf; die eigentliche Tiefe entsteht erst, wenn auch Emotionales einen Platz bekommt, ohne als "nicht relevant" abgewiesen zu werden.`,
    ],
    trigger: [
      { trigger: `Unordnung oder Nachlässigkeit herunterspielen ("ist doch nicht so schlimm")`, warum: `Verstärkt den inneren Druck, es allein regeln zu müssen, und wirkt wie Verantwortungslosigkeit`, alternative: `Das Problem sachlich anerkennen und gemeinsam einen nächsten Schritt festlegen` },
      { trigger: `Die Strenge der SE1 direkt kritisieren ("du bist zu streng/pedantisch")`, warum: `Trifft den moralischen Kern und wird als Angriff auf die eigene Integrität erlebt`, alternative: `Die Wirkung beschreiben statt die Person zu bewerten – "das fühlt sich für mich eng an"` },
      { trigger: `Spontane Planänderungen ohne Vorwarnung`, warum: `Löst Kontrollverlust-Angst aus, auch wenn die Änderung objektiv harmlos ist`, alternative: `Wo möglich, Vorlauf geben – auch kurzfristig ist besser als gar keiner` },
      { trigger: `Gefühle als "nicht relevant" abtun (sachlich bleiben um jeden Preis)`, warum: `Genau dieses Muster hält die SE1 selbst am längsten von echter Verbindung fern – gespiegelt verstärkt es die Isolation`, alternative: `Aktiv nach der emotionalen Seite fragen, auch wenn die SE1 sie nicht von selbst anspricht` },
    ],
    fuehrung: {
      titel: "Aus der Führungspraxis: wenn Richtigkeit Verantwortung überlagert",
      text: `In unserem Buch <em>Führung mit Fundament</em> (das ich gemeinsam mit meinem Sohn David L. Rathmer geschrieben habe) beschreiben wir den Fall eines Bereichsleiters, dessen Team zunehmend weniger eigene Vorschläge einbringt, defensiver fragt, mehr nach oben delegiert – während er selbst denkt: "Die Leute sind nicht mehr so sorgfältig wie früher, ich muss ständig nachschärfen." Der Wendepunkt kommt durch eine einfache Coaching-Frage: "Wie ist die Atmosphäre in Ihren Meetings – und emotional?" Seine erste Antwort: "Das ist hier nicht relevant."<br><br>Für die SE1 heißt das übersetzt: Der Anspruch, alles richtig zu machen, kann unbemerkt Beziehung der Korrektheit unterordnen. Nicht jede Abweichung vom Standard ist ein Fehler, der korrigiert werden muss. Wer mit einer SE1 arbeitet oder sie führt, hilft ihr mehr mit der Frage <strong>"Erklären Sie mir bitte, was der Gedanke dahinter ist"</strong> als mit sofortiger Korrektur.`,
      hinweis: `Im Buch beschreiben wir diesen Fall auf Ebene des Grundtyps 1, nicht subtypspezifisch. Die selbsterhaltende Färbung – Kontrolle zeigt sich zuerst am eigenen Verhalten, dann erst am Umfeld – ist eine Ergänzung auf Basis der übrigen Quellen, kein wörtliches Zitat.`,
    },
    beziehung: {
      titel: `Beziehungsrisiko & heilende Bewegung`,
      risiko: `Die Tendenz zur Kritik und zum Perfektionismus belastet Beziehungen – Partner spüren oft, dass sie "nie genügen", auch wenn das nie so gemeint war.`,
      leitfragen: `Korrigiere ich, weil es wirklich nötig ist – oder weil Unvollkommenheit mich selbst unruhig macht?`,
      hilfreich: `Milde vorleben, nicht einfordern: Zeigen, dass auch Fehler beim Gegenüber Raum haben dürfen, ohne dass die Beziehung dadurch weniger sicher wird.`,
    },
    pairing: [
      { partner: "SE1", dynamik: "Prinzip trifft Prinzip (Ordnung, Disziplin)", gefahr: "Starrheit, Rechthaberei, Mikrokritik", hilfreich: "Imperfektion zulassen, Humor einladen" },
      { partner: "SO1", dynamik: "Prinzip vs. Gemeinschaft", gefahr: "Moralische Kritik", hilfreich: "Regeln und Beziehung im Gleichgewicht halten" },
      { partner: "SX1", dynamik: "Ordnung vs. Intensität", gefahr: "Strenge trifft Dramatik", hilfreich: "Struktur nicht gegen Leidenschaft stellen" },
      { partner: "SE2", dynamik: "Pflicht vs. Fürsorge", gefahr: "Überlastung", hilfreich: "Arbeit gerecht teilen" },
      { partner: "SO2", dynamik: "Prinzip vs. Helfen im Feld", gefahr: "Erdrücken durch Moral und Fürsorge", hilfreich: "Anerkennung statt Kritik" },
      { partner: "SX2", dynamik: "Strenge vs. exklusive Fürsorge", gefahr: "Besitzanspruch", hilfreich: "Grenzen und Nähe klar benennen" },
      { partner: "SE3", dynamik: "Prinzip vs. Leistung", gefahr: "Härte gegen Effekt", hilfreich: "Echtheit vor Tempo" },
      { partner: "SO3", dynamik: "Ordnung vs. Status", gefahr: "Imagekampf", hilfreich: "Inhalte betonen statt Fassade" },
      { partner: "SX3", dynamik: "Prinzip vs. Glanz", gefahr: "Täuschung", hilfreich: "Gefühle nicht unterdrücken" },
      { partner: "SE4", dynamik: "Prinzip vs. Besonderheit", gefahr: "Kritik vs. Drama", hilfreich: "Raum für Emotion geben" },
      { partner: "SO4", dynamik: "Moral vs. Selbstdarstellung", gefahr: "Schuldzuweisung", hilfreich: "Emotionen wertschätzen" },
      { partner: "SX4", dynamik: "Prinzip vs. Sehnsucht", gefahr: "Strenge gegen Ideal", hilfreich: "Balance zwischen Ordnung und Gefühl" },
      { partner: "SE5", dynamik: "Grenzen sichern vs. Rückzug in Wissen", gefahr: "SE1 drängt, SE5 zieht sich zurück", hilfreich: "Dosierte Nähe, Raum lassen" },
      { partner: "SO5", dynamik: "Ordnung vs. Distanz mit Beobachtung", gefahr: "SO5 bleibt außen vor, SE1 fühlt sich allein", hilfreich: "Verbindliche, kleine Absprachen" },
      { partner: "SX5", dynamik: "Intensität vs. Bedürfnis nach Rückzug", gefahr: "SE1 erpresst Nähe, SX5 überfordert", hilfreich: "Nähe terminieren, Pausen einplanen" },
      { partner: "SE6", dynamik: "Ordnung vs. Loyalitätsprüfung", gefahr: "SE1 fühlt sich misstraut, SE6 unsicher", hilfreich: "Verbindliche Routinen schaffen" },
      { partner: "SO6", dynamik: "Sicherheit durch Regeln vs. soziale Loyalität", gefahr: "Überbetonung von Sicherheit blockiert Spontaneität", hilfreich: "Sorgen teilen, nicht verstecken" },
      { partner: "SX6", dynamik: "Struktur vs. Bindungstests", gefahr: "Kontrolle gegen Kontrolle", hilfreich: "Transparenz vor Entscheidungen" },
      { partner: "SE7", dynamik: "Ordnung vs. Lust auf Vielfalt", gefahr: "SE1 fühlt Chaos, SE7 Langeweile", hilfreich: "Abwechslung planen, Regeln locker halten" },
      { partner: "SO7", dynamik: "Normen vs. Gruppenabenteuer", gefahr: "SO7 wirkt flatterhaft, SE1 streng", hilfreich: "Projekte gemeinsam gestalten" },
      { partner: "SX7", dynamik: "Struktur vs. intensive Leichtigkeit", gefahr: "SE1 kritisiert, SX7 flieht", hilfreich: "Fehler freundlich ansprechen" },
      { partner: "SE8", dynamik: "Kontrolle vs. Machtanspruch", gefahr: "Konflikt um Dominanz", hilfreich: "Feste Regeln, Respekt wahren" },
      { partner: "SO8", dynamik: "Regeln vs. Statuskraft", gefahr: "Machtspiele, Statuskämpfe", hilfreich: "Klare Grenzen vereinbaren" },
      { partner: "SX8", dynamik: "Intensität vs. Prinzip", gefahr: "Harte Kämpfe möglich", hilfreich: "Zorn kanalisieren, Rituale schaffen" },
      { partner: "SE9", dynamik: "Ordnung vs. Harmonie", gefahr: "SE1 kritisiert, SE9 weicht aus", hilfreich: "Geduld mit Klarheit verbinden" },
      { partner: "SO9", dynamik: "Prinzip vs. Anpassung", gefahr: "SE1 drängt, SO9 verliert sich", hilfreich: "Kleine Schritte absprechen" },
      { partner: "SX9", dynamik: "Struktur vs. Verschmelzung", gefahr: "SE1 klagt, SX9 zieht sich zurück", hilfreich: "Nähe klar strukturieren" },
    ],
    kurzfassung: `Würdige ihre Sorgfalt konkret, nicht nur beiläufig. Halte Absprachen ein – das ist ihre eigentliche Vertrauenswährung. Beginne sachlich, aber lass auch Gefühl zu, statt es als "nicht relevant" abzutun.`,
  },
  SO4: {
    tier: "Gürteltier",
    erkennung: `Die soziale Vier trägt ihre Tiefe nicht versteckt wie die SE4, sondern sichtbar in die Gruppe hinein – sie engagiert sich stark für ein Projekt, einen Freundeskreis, ein Anliegen, und dahinter steht ein leiser, oft unausgesprochener Wunsch: gesehen zu werden, gerade in dem, was sie einzigartig macht. Bleibt die Resonanz aus, kippt das schnell in Enttäuschung – "immer die anderen", ein Gefühl, übersehen zu werden, obwohl man sich sichtbar eingebracht hat.<br><br>Das Bild aus meinem Buch <em>Enneagramm Zoo</em> trifft den Kern: das <strong>Gürteltier</strong> – gepanzert, aber empfindsam darunter. Es vergleicht sich ständig ("Wo stehe ich? Bin ich genug?"), sucht Resonanz, zeigt aber aus Angst vor Zurückweisung oft nur die glänzende Außenseite seiner Rüstung. Anders als die Taube (SE4), die sich nach innen zurückzieht, rollt sich das Gürteltier nach außen – dieselbe Vierer-Sehnsucht, nur lauter, sozialer, sichtbarer.`,
    wunde: {
      titel: "Die Wunde dahinter",
      text: `Was diese Verhaltensweisen antreibt, ist die <strong>Wunde der Trennung</strong>: das tiefe Gefühl, von Zugehörigkeit und sozialer Anerkennung abgeschnitten zu sein – nicht wegen äußerer Umstände, sondern wegen eines empfundenen inneren Mangels. Der Glaubenssatz dahinter: "Andere haben etwas, das mir fehlt – mein Anderssein trennt mich." Die Leidenschaft Neid zeigt sich bei der SO4 speziell als schmerzhafter Vergleich im sozialen Raum: Andere scheinen leichter dazuzugehören. Wer das versteht, liest ihr Verhalten nicht mehr als Eitelkeit, sondern als das, was es ist – ein Versuch, eine gefühlte Trennung durch Sichtbarkeit zu heilen.`,
    },
    fluegel: {
      titel: "Flügel-Nuance: SO4w3 und SO4w5",
      w1: { code: "SO4w3", route: "beruehmte-michael-jackson", name: "Michael Jackson", text: `die Sehnsucht wird ehrgeizig nach außen getragen. Bedeutung soll nicht nur gefühlt, sondern sichtbar <em>erreicht</em> werden. Reagiert gut auf konkrete, öffentlich wirksame Würdigung ihrer Einzigartigkeit – Bühne ist hier kein Widerspruch zu Echtheit, sondern ihr bevorzugtes Ausdrucksmittel.` },
      w2: { code: "SO4w5", route: "beruehmte-john-lennon", name: "John Lennon", text: `introspektiver, beobachtender. Kränkung führt eher zu Rückzug als zu Auftritt. Reagiert besser auf stillen, unaufgeregten Raum als auf große Gesten – zu viel Bühne wirkt hier schnell aufdringlich statt bestätigend.` },
    },
    stressWachstum: {
      stress: `Unter Stress bewegt sich die SO4 Richtung <strong>Typ 2</strong>: Sie wird bedürftiger, anklammernder, beginnt subtil Vorwürfe zu machen oder unaufgefordert zu helfen, um sich Zugehörigkeit zu "verdienen". Erkennst du dieses Muster, ist das ein Signal für erhöhten inneren Druck – kein guter Moment für Kritik, ein guter Moment für ungefragte, ruhige Zuwendung.`,
      wachstum: `Im Wachstum bewegt sie sich Richtung <strong>Typ 1</strong>: geerdeter, disziplinierter, prinzipientreuer – die Bedeutung wird weniger dringlich gesucht, weil ein stabilerer innerer Maßstab entsteht.`,
    },
    ankommt: [
      `<strong>Anerkennung, die sich auf das Besondere bezieht – nicht auf Funktion.</strong> Ein generisches "gut gemacht" verpufft. Was wirkt, ist konkrete Würdigung dessen, was diese Person einzigartig eingebracht hat – ihre Perspektive, ihr Gespür, ihr Beitrag, der so von niemand anderem gekommen wäre.`,
      `<strong>Echte Aufmerksamkeit, nicht Floskeln.</strong> Die SO4 spürt sehr genau den Unterschied zwischen höflicher Routine-Anerkennung und tatsächlichem Gesehenwerden. Lieber selten, aber echt.`,
      `<strong>Raum für Tiefe zulassen – ohne sich selbst darin zu verlieren.</strong> Ein Gespräch, das an der Oberfläche bleibt, wird als unbefriedigend erlebt. Gleichzeitig muss nicht jedes Gespräch tief werden.`,
    ],
    trigger: [
      { trigger: `Vergleich mit anderen ziehen ("X macht das doch auch so")`, warum: `Bestätigt die innere Angst, nicht genug/nicht besonders zu sein`, alternative: `Die Leistung/Idee für sich würdigen, ohne Vergleichsrahmen` },
      { trigger: `Anerkennung nur öffentlich/vor der Gruppe geben, nie im Vieraugengespräch`, warum: `SO4 kann öffentliche Resonanz mit echter Zuneigung verwechseln – das befriedigt kurzfristig, nährt aber nicht wirklich`, alternative: `Zusätzlich stille, persönliche Wertschätzung geben` },
      { trigger: `Sachlich-knapp bleiben, wenn eigentlich ein Konflikt/eine Verstimmung im Raum steht`, warum: `Wird als Vermeidung/Kälte erlebt, verstärkt Rückzug`, alternative: `Die Verstimmung benennen, auch wenn es unbequem ist` },
      { trigger: `Kritik ohne jede emotionale Einordnung äußern`, warum: `Trifft nicht nur die Sache, sondern das Selbstbild`, alternative: `Kritik mit einem Satz einbetten, der die Person als Ganzes würdigt` },
    ],
    fuehrung: {
      titel: "Aus der Führungspraxis: die Gürteltier-Falle bei zu viel Tiefe",
      text: `In unserem Buch <em>Führung mit Fundament</em> (das ich gemeinsam mit meinem Sohn David L. Rathmer geschrieben habe) beschreiben wir (auf Typ-4-Ebene, nicht speziell SO4) den Fall einer Bereichsleiterin, die aus Tiefe und Bedeutung führt – und dabei übersieht, dass ihr Team irgendwann nur noch erschöpft reagiert, weil jede Kleinigkeit zur bedeutungsschweren Grundsatzfrage wird. Der entscheidende Satz einer Kollegin: <em>"Deine Tiefe ist beeindruckend. Aber sie lässt kaum Raum zum Atmen."</em><br><br>Für die SO4 heißt das übersetzt: Der Wunsch, dass alles authentisch und bedeutsam sein soll, kann das Gegenüber überfordern. Nicht jede Rückmeldung, nicht jedes Meeting muss zur Sinnfrage werden. Wer mit einer SO4 arbeitet oder sie führt, hilft ihr mehr mit dem Satz <strong>"Das ist gut so, wie es ist"</strong> als mit ständiger Vertiefung.`,
      hinweis: `Im Buch beschreiben wir diesen Fall auf Ebene des Grundtyps 4, nicht subtypspezifisch. Die soziale Färbung – Bedeutung wird besonders im Gruppenkontext gesucht – ist eine Ergänzung auf Basis der übrigen Quellen, kein wörtliches Zitat.`,
    },
    beziehung: {
      titel: `Beziehungsrisiko & heilende Bewegung`,
      risiko: `Verdeckter Vergleich, unterschwellige Vorwürfe, wenn Resonanz ausbleibt.`,
      leitfragen: `Verknüpfe ich Liebe/Wertschätzung mit Bühne? Verwechsle ich Resonanz mit echter Zuneigung?`,
      hilfreich: `Zweisamkeit/Einzelgespräche bewusst von der Gruppen-Situation entkoppeln – nicht nur in der großen Runde würdigen, sondern auch außerhalb der Bühne.`,
    },
    pairing: [
      { partner: "SE1", dynamik: "Moral vs. Selbstdarstellung", gefahr: "Schuldzuweisung", hilfreich: "Emotionen wertschätzen" },
      { partner: "SO1", dynamik: "Rolle vs. Ausdruck", gefahr: "Vergleich, Minderwert vs. Normdruck", hilfreich: "Gefühle spiegeln, nicht normieren" },
      { partner: "SX1", dynamik: "Intensität vs. Selbstausdruck", gefahr: "Konkurrenz um Wahrnehmung", hilfreich: "Gegenseitig Ausdruck würdigen" },
      { partner: "SE2", dynamik: "Fürsorge trifft Sehnsucht nach Anerkennung", gefahr: "Kränkbarkeit und verdeckte Vorwürfe", hilfreich: "Empfindlichkeiten respektvoll spiegeln" },
      { partner: "SO2", dynamik: "beidseitige Suche nach Anerkennung im sozialen Feld", gefahr: "Dramen oder Überbetonung des Außenbildes", hilfreich: "Emotionale Ehrlichkeit kultivieren" },
      { partner: "SX2", dynamik: "Zuwendung sucht Ausdruck", gefahr: "Kränkbarkeit und verdeckte Erwartungen", hilfreich: "Erwartungen offen ansprechen statt still rechnen" },
      { partner: "SE3", dynamik: "Erfolg vor Publikum vs. Sehnsucht nach Echtheit", gefahr: "SO4 empfindet SE3 als oberflächlich", hilfreich: "Anerkennung und Resonanz ausbalancieren" },
      { partner: "SO3", dynamik: "Selbstbild und Anerkennung im sozialen Feld", gefahr: "Dramatisierung, Imagefixierung", hilfreich: `Substanz vor Inszenierung – "weniger Bühne, mehr Echt"` },
      { partner: "SX3", dynamik: "Intensität + Bühne", gefahr: "Konkurrenz in Aufmerksamkeit", hilfreich: "Rollen abwechseln, nicht gegeneinander spielen" },
      { partner: "SE4", dynamik: "Rückzug vs. Bühne", gefahr: "SE4 fühlt sich übersehen, SO4 fühlt sich eingeengt", hilfreich: "Räume schaffen für Privatheit und Sichtbarkeit im Wechsel" },
      { partner: "SO4", dynamik: "Resonanz und Authentizität", gefahr: "wechselseitige Kränkbarkeit", hilfreich: "Unterschied zwischen Projektion und Realität klären" },
      { partner: "SX4", dynamik: "Intensität und Exklusivität", gefahr: "dramatische Schwankungen", hilfreich: "Zeiten von Ruhe bewusst einplanen" },
      { partner: "SE5", dynamik: "Gefühl trifft auf Distanz", gefahr: "Rückzug als Kränkung erlebt", hilfreich: "Klare Balance von Nähe und Rückzug besprechen" },
      { partner: "SO5", dynamik: "Resonanzbedürfnis vs. Zurückhaltung", gefahr: "Unsichtbarkeit als Ablehnung gedeutet", hilfreich: "Kleine Zeichen der Verbundenheit einüben" },
      { partner: "SX5", dynamik: "Intensität vs. Rückzug", gefahr: "Überforderung", hilfreich: "Langsames Tempo akzeptieren" },
      { partner: "SE6", dynamik: "Gefühl vs. Absicherung", gefahr: "Zu viel Skepsis", hilfreich: "Gefühle benennen statt nur Verhalten prüfen" },
      { partner: "SO6", dynamik: "Resonanz vs. Loyalität", gefahr: "Zu viel Kontrolle", hilfreich: "Unterschied zwischen Loyalität und Kontrolle anerkennen" },
      { partner: "SX6", dynamik: "Gefühl vs. Exklusivität", gefahr: "Eifersucht", hilfreich: "Sicherheit durch Transparenz schaffen" },
      { partner: "SE7", dynamik: "Gefühl vs. Ablenkung", gefahr: "SO4 fühlt sich nicht ernst genommen", hilfreich: "Feste Zeiten für Ernsthaftigkeit vereinbaren" },
      { partner: "SO7", dynamik: "Sehnsucht vs. Bühne", gefahr: "Oberflächlichkeit", hilfreich: "Balance zwischen Tiefe und Spaß suchen" },
      { partner: "SX7", dynamik: "Intensität vs. Abenteuer", gefahr: "Sprunghaftigkeit verletzt Sehnsucht", hilfreich: "Klare Absprachen treffen" },
      { partner: "SE8", dynamik: "Gefühl vs. Macht", gefahr: "SO4 fühlt sich überrollt", hilfreich: "Gefühle mutig äußern" },
      { partner: "SO8", dynamik: "Resonanz vs. Einfluss", gefahr: "Dominanz", hilfreich: "Wechselseitig Grenzen achten" },
      { partner: "SX8", dynamik: "Sehnsucht vs. Intensität", gefahr: "Explosive Konflikte", hilfreich: "Pausen im Streit bewusst setzen" },
      { partner: "SE9", dynamik: "Gefühl vs. Harmonie", gefahr: "Konflikte werden verschleppt", hilfreich: "Gefühle rechtzeitig ansprechen" },
      { partner: "SO9", dynamik: "Resonanz vs. Frieden", gefahr: "Verdrängung", hilfreich: "Aktives Nachfragen üben" },
      { partner: "SX9", dynamik: "Sehnsucht vs. Verschmelzung", gefahr: "Abhängigkeit", hilfreich: "Eigenständigkeit bewahren" },
    ],
    kurzfassung: `Sprich das Besondere an ihr an, nicht nur die Leistung. Gib Anerkennung auch dann, wenn niemand zuschaut. Nimm ihre Tiefe ernst – aber lass ihr auch die Erlaubnis, dass nicht alles bedeutungsschwer sein muss.`,
  },
  SX1: {
    tier: "Schwarze Mamba",
    erkennung: `Die sexuelle Eins trägt ihre Strenge weder still nach innen wie die SE1 noch als Anliegen der Gruppe wie die SO1 – sie bündelt sie wie einen Laserstrahl auf das eine, das ihr am wichtigsten ist: die eine Beziehung, das eine Projekt, den einen Menschen, den sie perfektionieren will. In meinem Buch <em>Enneagramm Zoo</em> beschreibe ich das Bild der <strong>Schwarzen Mamba</strong>, die mit funkelnden Augen und entblößtem Giftzahn keine Ausreden duldet – "Es muss stimmen, sonst ist es falsch." Ihr Blick prüft, ihr Urteil trifft. Wo die Gans (SO1) sagt "So ist es richtig", zischt die Mamba: "So muss es sein."<br><br>Diese Intensität ist keine Kälte, sondern umgekehrte Nähe: Die SX1 investiert ihre ganze Reformkraft dort, wo sie am meisten liebt. Wer das versteht, liest ihre Härte nicht als Ablehnung, sondern als eine – oft zu hoch dosierte – Form von Hingabe.`,
    wunde: {
      titel: "Die Wunde dahinter",
      text: `Wie bei jeder Eins liegt dahinter die <strong>Wunde der Unvollkommenheit</strong>: das tiefe Gefühl, dass die Wirklichkeit niemals ganz dem inneren Ideal entsprechen kann. Bei der SX1 verdichtet sich das auf einen einzigen Brennpunkt: "Diese eine Beziehung, dieser eine Mensch – sie müssen stimmen, sonst ist alles falsch." Die Leidenschaft Zorn zeigt sich hier am direktesten von allen drei Varianten: nicht verhaltener innerer Groll wie bei der SE1, nicht moralischer Eifer wie bei der SO1, sondern unmittelbare, fordernde Reaktion genau dort, wo es am meisten wehtut – in der Nähe. Kleine Enttäuschungen werden schnell zu Beweisen mangelnder Hingabe. Wer das versteht, liest ihre Schärfe nicht als Kontrollsucht, sondern als eine Leidenschaft für Wahrheit, die sich nicht anders auszudrücken weiß als über Konfrontation.`,
    },
    fluegel: {
      titel: "Flügel-Nuance: SX1w9 und SX1w2",
      w1: { code: "SX1w9", route: "beruehmte-klaus-kinski", name: "Klaus Kinski", text: `die Intensität wird noch kompromissloser, roher, weniger sozial abgefedert – ein Furor, der kaum Rücksicht auf Konventionen nimmt. Reagiert kaum auf sanfte Appelle; braucht eine ebenso direkte, unerschrockene Gegenüber-Präsenz, die standhält, ohne selbst zu eskalieren.` },
      w2: { code: "SX1w2", route: "beruehmte-jamie-lee-curtis", name: "Jamie Lee Curtis", text: `die Strenge bekommt eine wärmere, fürsorglichere Note – Perfektionismus wird zum Wunsch, den geliebten Menschen wirklich gut zu behandeln, nicht nur zu korrigieren. Reagiert gut auf persönliche Nähe und sichtbare Zuwendung, weniger gut auf distanzierte Sachlichkeit ohne emotionalen Bezug.` },
    },
    stressWachstum: {
      stress: `Unter Stress bewegt sich die SX1 wie jede Eins Richtung <strong>Typ 4</strong>: Die sonst kanalisierte Schärfe kippt in Dramatik, Selbstmitleid oder das Gefühl, mit ihrer ganzen Hingabe unverstanden zu bleiben. Erkennst du dieses Muster, ist das ein Signal für erhöhten inneren Druck – kein guter Moment für weitere Konfrontation, ein guter Moment für ruhige, verlässliche Nähe.`,
      wachstum: `Im Wachstum bewegt sie sich Richtung <strong>Typ 7</strong>: leichter, spielerischer – die Intensität bleibt, verliert aber die Verbissenheit, weil ein größeres Grundvertrauen in die Beziehung entsteht.`,
    },
    ankommt: [
      `<strong>Volle, ungeteilte Präsenz.</strong> Die SX1 spürt sofort, ob Aufmerksamkeit echt oder nur höflich ist – halbe Zuwendung wirkt schlimmer als offene Distanz.`,
      `<strong>Ehrlichkeit statt Ausweichen.</strong> Wer klar sagt, was ist, wird respektiert. Diplomatisches Drumherumreden liest die SX1 als Vertuschung und reagiert darauf schärfer als auf unbequeme Wahrheit.`,
      `<strong>Anerkennung der Intensität selbst, nicht nur ihrer Ergebnisse.</strong> Die Leidenschaft, mit der sie sich einer Sache oder einem Menschen widmet, ist für sie selbst wertvoll – das beim Namen zu nennen, statt nur das fertige Resultat zu loben, wirkt tiefer.`,
    ],
    trigger: [
      { trigger: `Zusagen zur Beziehung oder gemeinsamen Vorhaben halbherzig behandeln`, warum: `Wird nicht als Kleinigkeit erlebt, sondern als Beweis mangelnder Hingabe – genau der wunde Punkt`, alternative: `Kleine Abweichungen aktiv ansprechen, bevor sie zum stillen Vorwurf werden` },
      { trigger: `Ihre Intensität als "zu viel" oder "übertrieben" abtun`, warum: `Trifft den moralischen Kern – die SX1 erlebt sich dann als allein kämpfend für etwas, das eigentlich beiden wichtig sein sollte`, alternative: `Die Sorge hinter der Schärfe benennen, bevor man die Schärfe selbst kommentiert` },
      { trigger: `Kritik ausweichend oder gar nicht äußern, wenn tatsächlich etwas störte`, warum: `Wird als Unaufrichtigkeit gelesen – die SX1 misstraut geglätteter Harmonie mehr als offenem Konflikt`, alternative: `Unmittelbar und klar sagen, was ist – auch wenn es unbequem ist` },
      { trigger: `Auf einen scharfen Ausbruch sofort mit Gegenangriff reagieren`, warum: `Verstärkt die Eskalationsspirale, obwohl hinter dem Zorn meist Verletzung steckt`, alternative: `Kurz aussteigen, dann mit "Was hat dich so getroffen?" statt mit Verteidigung antworten` },
    ],
    fuehrung: {
      titel: "Aus der Führungspraxis: wenn Perfektion das Team erdrückt",
      text: `In unserem Buch <em>Führung mit Fundament</em> (das ich gemeinsam mit meinem Sohn David L. Rathmer geschrieben habe) beschreiben wir eine Typ-1-Teamleiterin, die jedes Detail korrigiert – das Team fühlt sich zunehmend entmündigt, sie selbst zunehmend überlastet, weil niemand mehr eigenständig entscheidet. Ihr blinder Fleck: Sie erkennt nicht, dass ihre eigenen Standards die Verantwortungsübernahme der anderen blockieren.<br><br>Für die SX1 heißt das übersetzt: Die Intensität, mit der sie ihren Anspruch auf den einen Menschen oder das eine Projekt richtet, kann diesen genau dort lähmen, wo eigentlich Vertrauen wachsen sollte. Innere Erlaubnis zu "gut genug", Delegation als Vertrauensübung, Fehler als Lernfeld statt als moralische Frage – das sind die Hebel, die im Buch für Typ 1 allgemein beschrieben werden.`,
      hinweis: `Im Buch beschreiben wir diesen Fall auf Ebene des Grundtyps 1, nicht subtypspezifisch. Die sexuelle Färbung – die Konzentration der gesamten Intensität auf eine einzige Beziehung statt auf ein System oder eine Gruppe – ist eine Ergänzung auf Basis der übrigen Quellen, kein wörtliches Zitat.`,
    },
    beziehung: {
      titel: `Beziehungsrisiko & heilende Bewegung`,
      risiko: `Die konzentrierte Intensität kann den Partner in einen dauerhaften Prüfstand verwandeln – jede Enttäuschung wiegt schwer, weil sie an der einen Beziehung entlang gemessen wird, in der eigentlich am meisten Sicherheit erwartet wird.`,
      leitfragen: `Fordere ich Vollkommenheit von dieser Beziehung, weil sie wirklich fehlt – oder weil Unvollkommenheit hier mich selbst am meisten verunsichert?`,
      hilfreich: `Die eigene Schärfe erst nach einer Pause aussprechen, dann Anerkennung vor Wunsch formulieren – Härte in Klarheit übersetzen, nicht unterdrücken.`,
    },
    pairing: [
      { partner: "SE1", dynamik: "Ordnung vs. Intensität", gefahr: "Strenge trifft Dramatik", hilfreich: "Struktur nicht gegen Leidenschaft stellen" },
      { partner: "SO1", dynamik: "Rolle × Exklusivität", gefahr: "Kontrolle vs. Vereinnahmung", hilfreich: "Privates schützen, Bühne dosieren" },
      { partner: "SX1", dynamik: "Intensität trifft Intensität", gefahr: "Überforderung, Verschmelzungsdruck", hilfreich: "Pausen und Alleinzeit einplanen" },
      { partner: "SE2", dynamik: "Intensität vs. Fürsorge", gefahr: "Klammern, gegenseitige Vereinnahmung", hilfreich: "Bedürfnis klar benennen, Grenzen respektieren" },
      { partner: "SO2", dynamik: "Intensität vs. Gemeinschaftspflege", gefahr: "Eifersucht auf Außenkontakte", hilfreich: "Balance zwischen Zweisamkeit und Öffentlichkeit" },
      { partner: "SX2", dynamik: "Intensität trifft Fürsorge", gefahr: "Überbezug, Abhängigkeit", hilfreich: "Eigenständigkeit wahren" },
      { partner: "SE3", dynamik: "Intensität vs. Leistung", gefahr: "Nähe wird Zweck, Überhitzung", hilfreich: "Raum für echte Gefühle lassen" },
      { partner: "SO3", dynamik: "Intensität vs. Wirkung nach außen", gefahr: "Konkurrenz zwischen Bühne und Intimität", hilfreich: "Exklusivzeiten ohne Publikum schaffen" },
      { partner: "SX3", dynamik: "Intensität × Glanz", gefahr: "Dramatische Szenen, Selbstdarstellung", hilfreich: "Authentizität statt Show pflegen" },
      { partner: "SE4", dynamik: "Intensität × Einzigartigkeit", gefahr: "Dramatische Verschmelzung, Schmerzfokus", hilfreich: "Dosis an Intensität steuern" },
      { partner: "SO4", dynamik: "Intensität × Selbstausdruck", gefahr: "Konkurrenz um Wahrnehmung", hilfreich: "Gegenseitig Ausdruck würdigen" },
      { partner: "SX4", dynamik: "Intensität × Sehnsucht", gefahr: "Überflutung, Drama", hilfreich: "Klare Grenzen, emotionale Erdung" },
      { partner: "SE5", dynamik: "Intensität vs. Rückzug", gefahr: "Nähe-Distanz-Spirale", hilfreich: "Nähe dosieren, Freiräume achten" },
      { partner: "SO5", dynamik: "Intensität vs. Beobachtung", gefahr: "Missverständnis Nähe vs. Distanz", hilfreich: "Nähe klar ansprechen, nicht erzwingen" },
      { partner: "SX5", dynamik: "Intensität × Distanz", gefahr: "Rückzug + Vereinnahmung", hilfreich: "Fixe Zeiten für Austausch vereinbaren" },
      { partner: "SE6", dynamik: "Intensität vs. Loyalität", gefahr: "Misstrauen, Überprüfung", hilfreich: "Sicherheit durch Verlässlichkeit zeigen" },
      { partner: "SO6", dynamik: "Intensität vs. Absicherung", gefahr: "Kontrolle, Eifersucht", hilfreich: "Vertrauen Schritt für Schritt aufbauen" },
      { partner: "SX6", dynamik: "Intensität × Zweifel", gefahr: "Kontrolle + Unsicherheit", hilfreich: "Ängste offen ansprechen, nicht verstecken" },
      { partner: "SE7", dynamik: "Intensität vs. Abenteuer", gefahr: "Flucht vor Schmerz, Reizüberflutung", hilfreich: "Momente der Ruhe bewusst setzen" },
      { partner: "SO7", dynamik: "Intensität vs. Enthusiasmus nach außen", gefahr: "Überdreht, oberflächlich", hilfreich: "Tiefe in Dosen pflegen" },
      { partner: "SX7", dynamik: "Intensität × Leichtigkeit", gefahr: "Unruhe, Nähefflucht", hilfreich: "Balance aus Abenteuer + Verlässlichkeit suchen" },
      { partner: "SE8", dynamik: "Intensität × Kraft", gefahr: "Machtkampf, Dominanz", hilfreich: "Macht teilen, Zärtlichkeit üben" },
      { partner: "SO8", dynamik: "Intensität × Einfluss", gefahr: "Kontrolle, Konkurrenz", hilfreich: "Führungsrolle teilen, Nähe wertschätzen" },
      { partner: "SX8", dynamik: "Intensität × Dominanz", gefahr: "Eskalation, Verschmelzung", hilfreich: "Grenzen klar setzen" },
      { partner: "SE9", dynamik: "Intensität × Frieden", gefahr: "Rückzug, Übersehen", hilfreich: "Initiative abwechselnd übernehmen" },
      { partner: "SO9", dynamik: "Intensität × Harmonie", gefahr: "Konfliktvermeidung", hilfreich: "Spannungen offen besprechen" },
      { partner: "SX9", dynamik: "Intensität × Gelassenheit", gefahr: "Verschmelzung + Passivität", hilfreich: "Aktivität + Rückzug balancieren" },
    ],
    kurzfassung: `Gib ihr volle, ungeteilte Präsenz statt halber Aufmerksamkeit. Sag klar, was ist, statt geglätteter Harmonie – Ausweichen liest sie als Unaufrichtigkeit. Würdige die Intensität selbst als Form der Hingabe, nicht nur das fertige Ergebnis.`,
  },
  SE2: {
    tier: "Flusspferd",
    erkennung: `Die selbsterhaltende Zwei sichert Nähe über das Konkrete: Essen, Wärme, praktische Hilfe. In meinem Buch <em>Enneagramm Zoo</em> beschreibe ich das Bild des <strong>Flusspferds</strong>, das mit Schürze und Kochlöffel am Herd steht, während der Tisch schon reich gedeckt ist – kaum hustet jemand, erscheint es mit Suppe, Wärmflasche und Rat. Sein Motto: "Ich sorge dafür, dass du versorgt bist." Fülle ist für das Flusspferd Trost, Überschuss sein Schutz vor Mangel.<br><br>Anders als die soziale oder sexuelle Zwei zeigt sich die Fürsorge hier körperlich, alltäglich, fast mütterlich – nicht als große Geste, sondern als tausend kleine, praktische Handreichungen. Wer das versteht, liest ihr ständiges Geben nicht als Aufdringlichkeit, sondern als ihre Sprache der Liebe: Wo sie schweigt, handelt sie stattdessen.`,
    wunde: {
      titel: "Die Wunde dahinter",
      text: `Dahinter liegt die <strong>Wunde der verbotenen Bedürftigkeit</strong>: das tiefe Gefühl, dass die eigenen Bedürfnisse nicht zählen oder nicht erlaubt sind – nur die Bedürfnisse der anderen dürfen offen gezeigt werden. Der Glaubenssatz: "Ich werde geliebt, wenn ich gebraucht werde." Die Leidenschaft Stolz zeigt sich bei der SE2 als die stille Überzeugung, unentbehrlich zu sein – konkret, praktisch, körperlich spürbar in Suppe und Wärmflasche statt in Worten. Wer das versteht, liest ihre Fürsorge nicht als Kontrolle, sondern als einzigen Weg, den sie kennt, um Nähe sicherzustellen, ohne die eigene Bedürftigkeit eingestehen zu müssen.`,
    },
    fluegel: {
      titel: "Flügel-Nuance: SE2w1 und SE2w3",
      w1: { code: "SE2w1", route: "beruehmte-greta-thunberg", name: "Greta Thunberg", text: `die Fürsorge bekommt eine prinzipielle, fast missionarische Note – Geben wird mit einem klaren Anspruch an Richtigkeit verbunden, weniger diffus-warm, mehr fokussiert und konsequent. Reagiert gut auf Ernsthaftigkeit und klare Zusagen, schlecht auf Beliebigkeit oder halbherzige Versprechen.` },
      w2: { code: "SE2w3", route: "beruehmte-oprah-winfrey", name: "Oprah Winfrey", text: `die Fürsorge wird energiegeladener, sichtbarer, mit einem Schuss Ehrgeiz verbunden – Helfen wird auch zur Leistung, die anerkannt werden darf. Reagiert gut auf begeisterte, öffentlich sichtbare Wertschätzung, weniger gut auf stille, unausgesprochene Dankbarkeit.` },
    },
    stressWachstum: {
      stress: `Unter Stress bewegt sich die SE2 Richtung <strong>Typ 8</strong>: Aus stiller Fürsorge wird plötzlich Anspruch, Kontrolle oder offene Aggression – "Nach allem, was ich getan habe!" Erkennst du dieses Muster, ist das ein Signal für erhöhten inneren Druck – kein guter Moment, um weitere Hilfe anzunehmen, ein guter Moment, um die eigene Erschöpfung der SE2 offen anzusprechen.`,
      wachstum: `Im Wachstum bewegt sie sich Richtung <strong>Typ 4</strong>: Sie erlaubt sich, eigene Gefühle und Bedürfnisse wahrzunehmen und auszudrücken, statt sie ständig hinter dem Geben zu verstecken – Fürsorge wird echter, weil sie nicht mehr die einzige Existenzberechtigung ist.`,
    },
    ankommt: [
      `<strong>Fürsorge aktiv wahrnehmen und konkret benennen.</strong> Ein beiläufiges "danke" reicht der SE2 nicht – sie merkt genau, ob die investierte Mühe wirklich gesehen wird oder nur höflich quittiert.`,
      `<strong>Von sich aus fragen, was sie selbst braucht.</strong> Die SE2 wird von allein selten danach fragen – wer aktiv nachfragt, gibt ihr eine seltene Erlaubnis, eigene Bedürfnisse zu äußern.`,
      `<strong>Hilfe auch mal annehmen, ohne sie sofort zu revanchieren.</strong> Der Reflex, jede Zuwendung sofort auszugleichen, entwertet ungewollt das Geschenk – echtes Annehmen ist für die SE2 oft wertvoller als schnelle Gegenleistung.`,
    ],
    trigger: [
      { trigger: `Hilfe pauschal ablehnen, ohne die Geste selbst zu würdigen`, warum: `Trifft ihre Art, Liebe auszudrücken, direkt ins Herz – wird als Zurückweisung ihrer Person erlebt, nicht nur der Handlung`, alternative: `Die Geste anerkennen, auch wenn man die konkrete Hilfe gerade nicht braucht: "Das ist lieb, aber gerade brauche ich das nicht"` },
      { trigger: `Fürsorge und investierte Mühe als selbstverständlich hinnehmen`, warum: `Verstärkt das Gefühl, nur über Nützlichkeit Wert zu haben, nie um der eigenen Person willen`, alternative: `Regelmäßig unaufgefordert Dank und Anerkennung aussprechen – auch für Kleines` },
      { trigger: `Ihre eigenen Bedürfnisse nie von sich aus erfragen`, warum: `Die SE2 wird sie selbst kaum benennen – Schweigen wird dann als Desinteresse gedeutet, auch wenn es nur Zurückhaltung ist`, alternative: `Aktiv und konkret nachfragen: "Was brauchst du gerade eigentlich selbst?"` },
      { trigger: `Grenzen setzen, wenn die Fürsorge übergriffig wird, statt es direkt zu benennen`, warum: `Rückzug ohne Erklärung wird als Liebesentzug erlebt und verstärkt die Verlustangst`, alternative: `Freundlich, aber klar sagen: "Ich schätze das, aber ich brauche gerade Raum"` },
    ],
    fuehrung: {
      titel: "Aus der Führungspraxis: Helfen als Kontrolle",
      text: `In unserem Buch <em>Führung mit Fundament</em> (das ich gemeinsam mit meinem Sohn David L. Rathmer geschrieben habe) beschreiben wir, wie Typ 2 unter Druck reagiert: verletzt, indirekt, überfürsorglich – das Ziel ist, die Beziehung zu sichern, nicht die Sache zu klären. Wer eine SE2 führt, hilft ihr mehr mit ruhiger Begrenzung, klarer Benennung der Sache und Anerkennung, die nicht an Anpassung geknüpft ist, als mit noch mehr emotionalem Eingehen auf jede investierte Fürsorge. Typ 2 beruhigt sich, wenn Beziehung nicht an Anpassung gekoppelt ist – wenn also klar wird, dass Zugehörigkeit nicht erst verdient werden muss.<br><br>Für die SE2 heißt das übersetzt: Die praktische, körperliche Fürsorge kann unbemerkt zur stillen Rechnung werden – "ich habe doch so viel für dich getan." Kontakt braucht hier Raum, ohne subtile Beziehungsschulden aufzubauen.`,
      hinweis: `Im Buch beschreiben wir diese Dynamik auf Ebene des Grundtyps 2, nicht subtypspezifisch. Die selbsterhaltende Färbung – Fürsorge zeigt sich vor allem konkret-praktisch, im Alltäglichen – ist eine Ergänzung auf Basis der übrigen Quellen, kein wörtliches Zitat.`,
    },
    beziehung: {
      titel: `Beziehungsrisiko & heilende Bewegung`,
      risiko: `Ständiges, oft ungefragtes Geben kann den Partner überfordern oder vereinnahmen – verdeckt schwingt die Erwartung mit, dass so viel Fürsorge irgendwann erwidert werden muss.`,
      leitfragen: `Helfe ich, weil es wirklich gebraucht wird – oder weil ich mich sonst nicht sicher fühle, geliebt zu werden?`,
      hilfreich: `Vor dem Helfen fragen, ob Unterstützung überhaupt gewünscht ist – und üben, eigene Bedürfnisse auszusprechen, statt sie hinter Geben zu verstecken.`,
    },
    pairing: [
      { partner: "SE1", dynamik: "Pflicht vs. Fürsorge", gefahr: "Überlastung", hilfreich: "Arbeit gerecht teilen" },
      { partner: "SO1", dynamik: "Rolle × Fürsorge (praktisch)", gefahr: "Pflichtgefühl erdrückt Spontaneität", hilfreich: "Aufgaben teilen, Dank zeigen" },
      { partner: "SX1", dynamik: "Intensität vs. Fürsorge", gefahr: "Klammern, gegenseitige Vereinnahmung", hilfreich: "Bedürfnis klar benennen, Grenzen respektieren" },
      { partner: "SE2", dynamik: "Helfen trifft Helfen – Nähe über Fürsorge", gefahr: "Überfürsorgung, verdeckte Erwartungen", hilfreich: "Eigene Wünsche klar benennen" },
      { partner: "SO2", dynamik: "Praktische Hilfe trifft soziale Vernetzung", gefahr: "Einer fühlt sich im Hintergrund", hilfreich: "Rollen bewusst absprechen" },
      { partner: "SX2", dynamik: "Fürsorge im Alltag trifft Intensität in Zweisamkeit", gefahr: "Klammern oder Verlustangst", hilfreich: "Balance zwischen Nähe und Eigenraum halten" },
      { partner: "SE3", dynamik: "Helfende Fürsorge trifft Leistung im Alltag", gefahr: "Wert nur über Nützlichkeit/Erfolg", hilfreich: "Echtes Gefühl neben Funktion sichtbar machen" },
      { partner: "SO3", dynamik: "Helfen im Privaten trifft Wirkung im Sozialen", gefahr: "Einer bleibt unsichtbar", hilfreich: "Dankbarkeit beidseitig ausdrücken" },
      { partner: "SX3", dynamik: "Fürsorge trifft Glanz in der Exklusivbeziehung", gefahr: "Abhängigkeit von Anerkennung", hilfreich: "Echtheit höher gewichten als Image" },
      { partner: "SE4", dynamik: "Praktische Fürsorge trifft emotionale Tiefe", gefahr: "Missverständnis zwischen Helfen und Erleben", hilfreich: "Zuhören vor Lösungen setzen" },
      { partner: "SO4", dynamik: "Fürsorge trifft Sehnsucht nach Anerkennung im Feld", gefahr: "Kränkbarkeit und verdeckte Vorwürfe", hilfreich: "Empfindlichkeiten respektvoll spiegeln" },
      { partner: "SX4", dynamik: "Fürsorge trifft Intensität in der Tiefe", gefahr: "Verschmelzungswunsch, Überforderung", hilfreich: "Eigene Grenze klar benennen" },
      { partner: "SE5", dynamik: "Helfende Fürsorge trifft Rückzug ins Wissen", gefahr: "Vereinnahmung vs. Rückzug", hilfreich: "Nähe dosiert anbieten" },
      { partner: "SO5", dynamik: "Fürsorge trifft soziale Beobachtung", gefahr: "Distanz vs. Hilfsbereitschaft", hilfreich: "Kombination aus kluger Analyse und praktischer Hilfe" },
      { partner: "SX5", dynamik: "Fürsorge trifft exklusive Distanz", gefahr: "Nähebedürfnis kollidiert mit Freiheitsdrang", hilfreich: "Rückzug nicht persönlich nehmen" },
      { partner: "SE6", dynamik: "Helfende Fürsorge trifft Absicherung im Alltag", gefahr: "Überverantwortung und Sorgen", hilfreich: "Verantwortungen fair teilen" },
      { partner: "SO6", dynamik: "Fürsorge trifft Loyalität im Sozialen", gefahr: "Überkontrolle, unterschwellige Ängste", hilfreich: "Misstrauen offen ansprechen" },
      { partner: "SX6", dynamik: "Helfen trifft exklusive Loyalität", gefahr: "Vereinnahmung oder Abhängigkeit", hilfreich: "Eigenständigkeit fördern" },
      { partner: "SE7", dynamik: "Fürsorge trifft Optimismus im Alltag", gefahr: "Helfen wird übergangen von Leichtigkeit", hilfreich: "Humor und Ernst abwechseln" },
      { partner: "SO7", dynamik: "Fürsorge trifft Begeisterung im Sozialen", gefahr: "Überforderung durch Aktivität", hilfreich: "Tempo gemeinsam abstimmen" },
      { partner: "SX7", dynamik: "Helfen trifft exklusive Begeisterung", gefahr: "Klammern vs. Flucht", hilfreich: "Grenzen früh absprechen" },
      { partner: "SE8", dynamik: "Helfen trifft Stärke und Kontrolle", gefahr: "Dominanz vs. Überfürsorge", hilfreich: "Respekt vor Stärke zeigen" },
      { partner: "SO8", dynamik: "Fürsorge trifft Führung im Feld", gefahr: "Hierarchie und Abhängigkeit", hilfreich: "Gleichwertigkeit betonen" },
      { partner: "SX8", dynamik: "Helfen trifft exklusive Macht", gefahr: "Verschmelzung oder Dominanz", hilfreich: "Eigene Grenzen wahren" },
      { partner: "SE9", dynamik: "Fürsorge trifft Harmonie", gefahr: "Konfliktvermeidung, verdeckte Erwartungen", hilfreich: "Konflikte ansprechen" },
      { partner: "SO9", dynamik: "Helfen trifft soziale Vermittlung", gefahr: "Auflösung in Anpassung", hilfreich: "Eigene Bedürfnisse sichtbar machen" },
      { partner: "SX9", dynamik: "Fürsorge trifft exklusive Harmonie", gefahr: "Verschmelzung ohne Eigenständigkeit", hilfreich: "Selbststand wahren" },
    ],
    kurzfassung: `Nimm Hilfe an, ohne sie sofort auszugleichen, und würdige die investierte Fürsorge konkret. Frag aktiv nach, was sie selbst braucht – sie wird es kaum von sich aus sagen. Setz Grenzen freundlich, aber klar, statt dich wortlos zurückzuziehen.`,
  },
  SO2: {
    tier: "Golden Retriever",
    erkennung: `Die soziale Zwei sichert Zugehörigkeit über Beliebtheit: Sie will gemocht werden, indem sie es allen recht macht. In meinem Buch <em>Enneagramm Zoo</em> beschreibe ich das Bild des <strong>Golden Retrievers</strong>, der am Zootor überschwänglich jedes Tier begrüßt, Herzchen schweben förmlich in der Luft. Sein Motto: "Ich mache es allen schön – dann mögen sie mich." Er wedelt geradezu durchs Leben, verteilt Aufmerksamkeit, organisiert, verbindet – und merkt oft selbst nicht, dass er sich dabei hintenanstellt.<br><br>Anders als die selbsterhaltende Zwei, deren Fürsorge sich im Konkreten zeigt, sucht die SO2 Bedeutung im ganzen sozialen Feld: Sie will nicht nur einer Person, sondern der Gemeinschaft unentbehrlich sein. Wer das versteht, liest ihr ständiges Vernetzen und Organisieren nicht als Geltungssucht, sondern als ihren Weg, sich einen festen Platz in der Gruppe zu sichern.`,
    wunde: {
      titel: "Die Wunde dahinter",
      text: `Dahinter liegt die <strong>Wunde der verbotenen Bedürftigkeit</strong>: das tiefe Gefühl, dass eigene Bedürfnisse im sozialen Raum keinen Platz haben – dass nur Geben Zugehörigkeit sichert. Der Glaubenssatz: "Ich bin nur wichtig, wenn ich für andere da bin und gebraucht werde" – und darunter: "Wenn ich aufhöre zu geben, verliere ich meinen Platz in der Gemeinschaft." Die Leidenschaft Stolz zeigt sich bei der SO2 als das Bedürfnis, im sozialen Feld bedeutsam und unverzichtbar zu sein – sie gibt, engagiert sich, verbindet, und erwartet dafür Anerkennung, die ihren sozialen Wert bestätigt. Wer das versteht, liest ihr Organisieren und Vernetzen nicht als Kontrollbedürfnis, sondern als einzigen Weg, den sie kennt, um sich ihrer Zugehörigkeit zu vergewissern.`,
    },
    fluegel: {
      titel: "Flügel-Nuance: SO2w1 und SO2w3",
      w1: { code: "SO2w1", route: "beruehmte-barack-obama", name: "Barack Obama", text: `die Fürsorge bekommt eine prinzipielle, verantwortungsbewusste Note – Beliebtheit wird mit einem klaren moralischen Kompass verbunden, weniger diffus, mehr auf gemeinsame Werte ausgerichtet. Reagiert gut auf ernsthafte, wertegetragene Anerkennung, weniger gut auf oberflächliches Lob.` },
      w2: { code: "SO2w3", route: "beruehmte-will-smith", name: "Will Smith", text: `die Fürsorge wird energiegeladener, charismatischer, mit sichtbarem Ehrgeiz verbunden – Beliebtheit wird auch zur Bühne, auf der sie gezeigt werden darf. Reagiert gut auf begeisterte, öffentlich sichtbare Wertschätzung, weniger gut auf stille, unausgesprochene Zustimmung.` },
    },
    stressWachstum: {
      stress: `Unter Stress bewegt sich die SO2 Richtung <strong>Typ 8</strong>: Aus warmer Fürsorge wird plötzlich Anspruch und offene Konfrontation – "Nach allem, was ich für diese Gemeinschaft getan habe!" Erkennst du dieses Muster, ist das ein Signal für erhöhten inneren Druck – kein guter Moment, um noch mehr Einsatz von ihr einzufordern, ein guter Moment, um ihre eigene Erschöpfung offen anzusprechen.`,
      wachstum: `Im Wachstum bewegt sie sich Richtung <strong>Typ 4</strong>: Sie erlaubt sich, eigene Gefühle und Bedürfnisse wahrzunehmen und auch dann sichtbar zu machen, wenn sie unbequem sind – Zugehörigkeit wird echter, weil sie nicht mehr ständig neu verdient werden muss.`,
    },
    ankommt: [
      `<strong>Ihr Engagement für die Gemeinschaft konkret würdigen.</strong> Die SO2 investiert oft unsichtbare Energie ins Vernetzen und Organisieren – das beim Namen zu nennen, wirkt mehr als allgemeines Lob für "nette Art".`,
      `<strong>Von sich aus fragen, was sie selbst braucht.</strong> Die SO2 wird das selbst kaum ansprechen, aus Angst, als bedürftig zu gelten – aktives Nachfragen gibt ihr eine seltene Erlaubnis.`,
      `<strong>Anerkennung auch im Vieraugengespräch geben, nicht nur vor der Gruppe.</strong> Öffentliches Lob bestätigt ihren sozialen Wert, ersetzt aber nicht das Gefühl, als Person – nicht nur als hilfreiche Kraft – gesehen zu werden.`,
    ],
    trigger: [
      { trigger: `Ihr Engagement für die Gruppe als selbstverständlich hinnehmen`, warum: `Verstärkt das Gefühl, nur über Nützlichkeit für das Kollektiv einen Platz zu haben, nie um der eigenen Person willen`, alternative: `Regelmäßig unaufgefordert Dank und konkrete Anerkennung aussprechen` },
      { trigger: `Sie mit Verantwortung überhäufen, weil sie ohnehin nie Nein sagt`, warum: `Nutzt genau das Muster aus, das die SO2 selbst am meisten erschöpft, ohne es je offen anzusprechen`, alternative: `Aktiv fragen, ob eine zusätzliche Aufgabe wirklich tragbar ist, statt es als gegeben vorauszusetzen` },
      { trigger: `Ihre eigenen Bedürfnisse nie von sich aus erfragen`, warum: `Die SO2 wird sie selbst kaum benennen – Schweigen wird dann fälschlich als Zufriedenheit gedeutet`, alternative: `Konkret nachfragen: "Was brauchst du eigentlich gerade selbst – nicht die Gruppe, du?"` },
      { trigger: `Grenzen einfordern, ohne die dahinterstehende Erschöpfung anzuerkennen`, warum: `Wird als Zurückweisung erlebt, nicht nur als Bitte – die SO2 hört "du bist zu viel", nicht "ich brauche Raum"`, alternative: `Die Grenze mit Wertschätzung einbetten: "Ich schätze, was du gibst – und gerade brauche ich trotzdem Abstand"` },
    ],
    fuehrung: {
      titel: "Aus der Führungspraxis: wenn Nähe Verantwortung verdrängt",
      text: `In unserem Buch <em>Führung mit Fundament</em> (das ich gemeinsam mit meinem Sohn David L. Rathmer geschrieben habe) beschreiben wir den Fall einer Bereichsleiterin, die ihr Team so intensiv unterstützt, dass Mitarbeitende zunehmend nicht mehr mit Lösungsvorschlägen kommen, sondern mit Belastungen – Entscheidungen werden nicht mehr vorbereitet, sondern abgegeben. Sie spürt die wachsende Last, deutet sie aber als Zeichen ihrer Bedeutung: "Wenn ich nicht helfe, bricht es auseinander." Der Wendepunkt kommt in einem Coachinggespräch, als der Coach fragt: "Was passiert im System, wenn Sie einmal nicht helfen?" Ihre erste Antwort: "Dann fühlen sich Menschen allein gelassen." Der Coach: "Oder sie lernen, Verantwortung selbst zu tragen – ohne dass Sie sie ihnen abnehmen."<br><br>Für die SO2 heißt das übersetzt: Fürsorge, die zur ständigen Übernahme wird, verhindert langfristig, dass Verantwortung dort entsteht, wo sie eigentlich hingehört. Grenzen sind hier kein Gegensatz zu Fürsorge, sondern selbst ein Akt davon.`,
      hinweis: `Im Buch beschreiben wir diesen Fall auf Ebene des Grundtyps 2, nicht subtypspezifisch. Die soziale Färbung – die Fürsorge gilt dem ganzen System, nicht nur Einzelnen – ist eine Ergänzung auf Basis der übrigen Quellen, kein wörtliches Zitat.`,
    },
    beziehung: {
      titel: `Beziehungsrisiko & heilende Bewegung`,
      risiko: `Die ständige Ausrichtung auf das soziale Umfeld kann den Partner das Gefühl geben, nur einer von vielen zu sein, für die die SO2 da ist – während die eigenen Bedürfnisse der SO2 selbst kaum sichtbar werden.`,
      leitfragen: `Engagiere ich mich, weil es wirklich gebraucht wird – oder weil ich mich sonst nicht sicher fühle, dazuzugehören?`,
      hilfreich: `Bewusst Zeit und Aufmerksamkeit außerhalb der Gruppe reservieren – und üben, auch dort eigene Bedürfnisse auszusprechen, statt sie hinter Organisieren und Helfen zu verstecken.`,
    },
    pairing: [
      { partner: "SE1", dynamik: "Prinzip vs. Helfen im Feld", gefahr: "Erdrücken durch Moral + Fürsorge", hilfreich: "Anerkennung statt Kritik" },
      { partner: "SO1", dynamik: "Rolle × Rolle (Helfen sichtbar)", gefahr: "Überforderung durch Pflicht-Altruismus", hilfreich: "Aufgaben klar verteilen, Erschöpfung vorbeugen" },
      { partner: "SX1", dynamik: "Intensität vs. Gemeinschaftspflege", gefahr: "Eifersucht auf Außenkontakte", hilfreich: "Balance zwischen Zweisamkeit und Öffentlichkeit" },
      { partner: "SE2", dynamik: "Praktische Hilfe trifft soziale Vernetzung", gefahr: "Einer fühlt sich im Hintergrund", hilfreich: "Rollen bewusst absprechen" },
      { partner: "SO2", dynamik: "Spiegelung von Fürsorge und Gemeinschaftsbedürfnis", gefahr: "Gegenseitige Vereinnahmung, Helfer-Überlastung", hilfreich: "Grenzen setzen, Selbstfürsorge nicht vergessen" },
      { partner: "SX2", dynamik: "Gemeinschaft trifft Exklusivität", gefahr: "Spannungen zwischen öffentlicher Rolle und privatem Anspruch", hilfreich: "Öffentliche und private Räume klar trennen" },
      { partner: "SE3", dynamik: "Gemeinschaftspflege verbindet sich mit Leistung", gefahr: "Erschöpfung durch Überengagement nach außen", hilfreich: "Erfolge privat würdigen, nicht nur öffentlich" },
      { partner: "SO3", dynamik: "Doppelte Ausrichtung auf Wirkung im sozialen Raum", gefahr: "Konkurrenz um Anerkennung, Vernachlässigung innerer Bedürfnisse", hilfreich: "Echtheit wichtiger nehmen als Image" },
      { partner: "SX3", dynamik: "Gemeinschaftssinn trifft Exklusivitätsdrang", gefahr: "Eifersucht oder Spannungen zwischen Wir-Gruppe und Wir-zwei", hilfreich: "Räume für beides schaffen – Intimität und Öffentlichkeit" },
      { partner: "SE4", dynamik: "Gemeinschaftspflege trifft auf Suche nach Einzigartigkeit", gefahr: "Überforderung durch unterschiedliche Beziehungslogiken", hilfreich: "Unterschiedliche Bedürfnisse würdigen, nicht gegeneinander stellen" },
      { partner: "SO4", dynamik: "Beidseitige Suche nach Anerkennung im sozialen Feld", gefahr: "Dramen oder Überbetonung des Außenbildes", hilfreich: "Emotionale Ehrlichkeit kultivieren" },
      { partner: "SX4", dynamik: "Gemeinschaft trifft Sehnsucht nach Exklusivität", gefahr: "Unausgeglichene Aufmerksamkeit – Gruppe vs. Zweisamkeit", hilfreich: "Zeiträume klar vereinbaren, um Balance zu halten" },
      { partner: "SE5", dynamik: "Gemeinschaftssinn trifft Rückzug", gefahr: "SO2 fühlt sich vernachlässigt, SE5 überfordert von Nähe", hilfreich: "Bereicherung durch soziales Netzwerk plus Tiefe" },
      { partner: "SO5", dynamik: "Gemeinschaft trifft auf distanzierte soziale Analyse", gefahr: "SO2 empfindet Kühle, SO5 fühlt sich vereinnahmt", hilfreich: "Klarheit im sozialen Feld, reflektierte Verbindungen" },
      { partner: "SX5", dynamik: "Gemeinschaftssinn und exklusive Tiefe", gefahr: "Spannungen durch Bedürfnisunterschiede nach Gruppe vs. Rückzug", hilfreich: "Grenzen für Kontaktqualität benennen" },
      { partner: "SE6", dynamik: "Gemeinschaftspflege trifft Sicherheitsbedürfnis", gefahr: "Überanpassung und Unsicherheit verstärken sich", hilfreich: "Vertrauen aktiv fördern, nicht nur kontrollieren" },
      { partner: "SO6", dynamik: "Gemeinsamer Fokus auf Zugehörigkeit und Absicherung", gefahr: "Überängstlichkeit oder Abhängigkeit vom sozialen Feld", hilfreich: "Mut zu Eigenständigkeit stärken" },
      { partner: "SX6", dynamik: "Gemeinschaftssinn verbindet sich mit exklusiver Loyalität", gefahr: "Eifersucht oder Gruppendruck", hilfreich: "Exklusivität und Gruppe bewusst trennen" },
      { partner: "SE7", dynamik: "Gemeinschaft trifft Freiheitsdrang", gefahr: "SO2 fühlt sich vernachlässigt, SE7 eingeengt", hilfreich: "Vereinbarungen über Freiräume treffen" },
      { partner: "SO7", dynamik: "Beide lieben soziale Weite und Inspiration", gefahr: "Oberflächlichkeit, fehlende Tiefe", hilfreich: "Regelmäßig in Tiefe und Verbindlichkeit gehen" },
      { partner: "SX7", dynamik: "Gemeinschaft trifft Intensitätssuche", gefahr: "SO2 überrollt SX7 mit Gemeinschaftsprojekten", hilfreich: "Freiräume klar respektieren" },
      { partner: "SE8", dynamik: "Gemeinschaft trifft Kraft und Schutz", gefahr: "Dominanzkonflikte oder Gefühl der Vereinnahmung", hilfreich: "Machtfragen früh klären, Respekt betonen" },
      { partner: "SO8", dynamik: "Gemeinschaft und Einfluss bündeln sich", gefahr: "Gruppendruck, Kontrolltendenzen", hilfreich: "Machtbalance aushandeln" },
      { partner: "SX8", dynamik: "Gemeinschaft trifft exklusive Intensität", gefahr: "Konflikt zwischen Öffentlichkeit und Zweisamkeit", hilfreich: "Abwechslung zwischen Privatheit und Gemeinschaft" },
      { partner: "SE9", dynamik: "Gemeinschaft trifft Harmoniebedürfnis", gefahr: "Konfliktvermeidung blockiert Entwicklung", hilfreich: "Konflikte aktiv ansprechen" },
      { partner: "SO9", dynamik: "Gemeinschaftspflege verstärkt sich gegenseitig", gefahr: "Trägheit, Anpassung an die Gruppe ohne Eigenprofil", hilfreich: "Eigenständigkeit fördern" },
      { partner: "SX9", dynamik: "Gemeinschaft trifft Exklusivität und Harmonie", gefahr: "Übersehen eigener Bedürfnisse zugunsten anderer", hilfreich: "Eigene Stimme wahren, nicht nur anpassen" },
    ],
    kurzfassung: `Würdige ihr Engagement für die Gemeinschaft konkret, nicht nur als "nette Art". Frag aktiv nach, was sie selbst braucht – sie wird es kaum von sich aus sagen. Gib Anerkennung auch im Vieraugengespräch, nicht nur vor der Gruppe.`,
  },
  SX2: {
    tier: "Kamel",
    erkennung: `Die sexuelle Zwei sucht Nähe nicht diffus im Umfeld wie die SO2, sondern konzentriert sie ganz auf die eine wichtige Beziehung: Sie will für diesen einen Menschen unersetzbar sein. In meinem Buch <em>Enneagramm Zoo</em> beschreibe ich das Bild des <strong>Kamels</strong>, das sich vor dem Theaterspiegel mit Parfüm übergießt, reichlich, übermäßig, umgeben von Glanz – dahinter die stille Hoffnung: "Wenn ich genug gebe, werde ich geliebt." Sein Motto: "Ich gebe dir alles – also gib mir auch dein Herz."<br><br>Anders als das Flusspferd, das durch praktische Fürsorge sichert, und der Golden Retriever, der Beliebtheit im ganzen Feld sucht, konzentriert das Kamel seine ganze Hingabe auf die eine Person. Wer das versteht, liest ihre Intensität, ihre Eifersucht, ihr Verlangen nach Bestätigung nicht als Anhänglichkeit, sondern als tiefe Sehnsucht nach echter, exklusiver Verschmelzung.`,
    wunde: {
      titel: "Die Wunde dahinter",
      text: `Dahinter liegt die <strong>Wunde der verbotenen Bedürftigkeit</strong>: das tiefe Gefühl, dass eigene Bedürfnisse in einer intensiven Bindung keinen Platz haben – dass nur Geben und Hingabe die Verbindung sichert. Der Glaubenssatz: "Ich bin nur liebenswert, wenn ich für diesen einen Menschen unentbehrlich bin" – und darunter: "Wenn ich nicht die Bedeutsamste bin, werde ich ersetzt." Die Leidenschaft Stolz zeigt sich bei der SX2 als der intensive Wunsch, für eine bestimmte Person einzigartig zu sein – sie gibt sich voll hin und erwartet dafür, als die Wichtigste erlebt zu werden. Wer das versteht, liest ihr Klammern nicht als Kontrollsucht, sondern als Angst, in genau der Beziehung ersetzt zu werden, in die sie am meisten investiert hat.`,
    },
    fluegel: {
      titel: "Flügel-Nuance: SX2w1 und SX2w3",
      w1: { code: "SX2w1", route: "beruehmte-matthias-schweighoefer", name: "Matthias Schweighöfer", text: `die Hingabe bekommt eine prinzipielle, verantwortungsbewusste Note – Liebe wird mit einem klaren Anspruch an Richtigkeit verbunden, weniger diffus, mehr fokussiert auf "es richtig machen" für den geliebten Menschen. Reagiert gut auf Ernsthaftigkeit und verlässliche Zusagen, schlecht auf Beliebigkeit oder halbherzige Gesten.` },
      w2: { code: "SX2w3", route: "beruehmte-elvis-presley", name: "Elvis Presley", text: `die Hingabe wird energiegeladener, ausdrucksstärker, mit sichtbarem Charisma verbunden – Liebe wird auch zur Bühne, auf der sie gezeigt und gefeiert werden darf. Reagiert gut auf begeisterte, sichtbare Bestätigung, weniger gut auf stille, unausgesprochene Zuneigung.` },
    },
    stressWachstum: {
      stress: `Unter Stress bewegt sich die SX2 Richtung <strong>Typ 8</strong>: Aus leidenschaftlicher Hingabe wird plötzlich Anspruch, Kontrolle oder offene Konfrontation – "Nach allem, was ich für dich getan habe!" Erkennst du dieses Muster, ist das ein Signal für erhöhten inneren Druck – kein guter Moment, um noch mehr Beweise der Zuneigung einzufordern, ein guter Moment, um ihre Angst vor Verlust offen anzusprechen.`,
      wachstum: `Im Wachstum bewegt sie sich Richtung <strong>Typ 4</strong>: Sie erlaubt sich, eigene Gefühle wahrzunehmen und auszudrücken, statt sie ständig hinter Geben und Verführen zu verstecken – Nähe wird echter, weil sie nicht mehr ständig neu bewiesen werden muss.`,
    },
    ankommt: [
      `<strong>Ungeteilte, spürbare Aufmerksamkeit.</strong> Die SX2 merkt sofort, ob sie wirklich im Mittelpunkt steht oder nur nebenbei mitläuft – halbe Präsenz wirkt schlimmer als offene Distanz.`,
      `<strong>Die Beziehung aktiv als besonders benennen.</strong> Ein beiläufiges "du bist mir wichtig" reicht selten – was wirkt, ist die konkrete Bestätigung, dass diese eine Verbindung wirklich einzigartig ist.`,
      `<strong>Von sich aus fragen, was sie selbst braucht.</strong> Die SX2 gibt leichter, als sie nimmt – aktives Nachfragen gibt ihr eine seltene Erlaubnis, eigene Bedürfnisse zu äußern, ohne sie als Bedürftigkeit tarnen zu müssen.`,
    ],
    trigger: [
      { trigger: `Zuneigung oder Aufmerksamkeit anderen genauso schenken wie ihr`, warum: `Wird nicht als Kleinigkeit erlebt, sondern als Beweis, nicht mehr die Wichtigste zu sein – trifft den wunden Punkt direkt`, alternative: `Die Besonderheit der Beziehung aktiv und regelmäßig benennen, auch ohne Anlass` },
      { trigger: `Ihre Intensität als "zu viel" oder "anhänglich" abtun`, warum: `Verstärkt die Angst, ersetzt zu werden, und führt oft zu noch mehr statt weniger Klammern`, alternative: `Die Sehnsucht dahinter benennen, bevor man die Intensität selbst kommentiert: "Ich sehe, wie wichtig dir das ist"` },
      { trigger: `Auf Nachrichten oder Signale der SX2 nur verzögert oder knapp reagieren`, warum: `Schweigen wird schnell als Rückzug oder nachlassende Zuneigung gedeutet, nicht als Beschäftigtsein`, alternative: `Kurz, aber zeitnah antworten – auch ein knappes "bin da, melde mich später" beruhigt spürbar` },
      { trigger: `Eifersucht oder Verlustangst pauschal als unbegründet abtun`, warum: `Übergeht das eigentliche Bedürfnis nach Sicherheit in der Beziehung`, alternative: `Die Angst ernst nehmen und konkret Sicherheit geben, statt sie nur zu widerlegen` },
    ],
    fuehrung: {
      titel: "Aus der Führungspraxis: wenn Grenzen zur Fürsorge werden",
      text: `In unserem Buch <em>Führung mit Fundament</em> (das ich gemeinsam mit meinem Sohn David L. Rathmer geschrieben habe) beschreiben wir eine Typ-2-Führungskraft, die gebeten wird, am Wochenende ein Projekt zu übernehmen. Sie spürt ihre Erschöpfung – und sagt, statt wie gewohnt zuzusagen, ruhig und klar: "Nein, das geht nicht. Ich brauche Erholung." Der Transformationsweg führt hier von Selbstaufgabe zu Selbstfürsorge: eigene Bedürfnisse ernst nehmen, Nein sagen lernen ohne Rechtfertigung, Hilfe von Übergriffigkeit unterscheiden – und den eigenen Wert nicht länger an Nützlichkeit koppeln.<br><br>Für die SX2 heißt das übersetzt: Echte Hilfe kommt aus Fülle, nicht aus der Angst, sonst nicht mehr gebraucht zu werden. Grenzen sind kein Gegensatz zur Hingabe, sondern selbst ein Akt der Fürsorge – auch der Fürsorge für die eine Beziehung, die sonst unter der Erschöpfung leidet.`,
      hinweis: `Im Buch beschreiben wir diesen Fall auf Ebene des Grundtyps 2, nicht subtypspezifisch. Die sexuelle Färbung – die Erschöpfung entsteht durch die Konzentration aller Energie auf eine einzige, besonders intensive Bindung – ist eine Ergänzung auf Basis der übrigen Quellen, kein wörtliches Zitat.`,
    },
    beziehung: {
      titel: `Beziehungsrisiko & heilende Bewegung`,
      risiko: `Die konzentrierte Intensität kann den Partner in einen dauerhaften Beweisdruck bringen – jede Aufmerksamkeit für andere wird leicht als Bedrohung der Exklusivität erlebt, was zu Klammern oder emotionaler Erpressung führen kann.`,
      leitfragen: `Gebe ich mich hin, weil es wirklich stimmt – oder weil ich sonst fürchte, ersetzt zu werden?`,
      hilfreich: `Liebe nicht als Tauschgeschäft leben, sondern üben, sie frei zu schenken – und die eigene Bedürftigkeit direkt aussprechen, statt sie hinter noch mehr Geben zu verstecken.`,
    },
    pairing: [
      { partner: "SE1", dynamik: "Strenge vs. exklusive Fürsorge", gefahr: "Besitzanspruch", hilfreich: "Grenzen und Nähe klar benennen" },
      { partner: "SO1", dynamik: "Rolle × Nähe-Intensität", gefahr: "Eifersucht oder Bühne als Druckmittel", hilfreich: "Öffentlichkeit begrenzen, Privates wahren" },
      { partner: "SX1", dynamik: "Intensität trifft Fürsorge", gefahr: "Überbezug, Abhängigkeit", hilfreich: "Eigenständigkeit wahren" },
      { partner: "SE2", dynamik: "Fürsorge im Alltag trifft Intensität in Zweisamkeit", gefahr: "Klammern oder Verlustangst", hilfreich: "Balance zwischen Nähe und Eigenraum halten" },
      { partner: "SO2", dynamik: "Gemeinschaft trifft Exklusivität", gefahr: "Spannungen zwischen öffentlicher Rolle und privatem Anspruch", hilfreich: "Öffentliche und private Räume klar trennen" },
      { partner: "SX2", dynamik: "Intensität trifft Intensität", gefahr: "Vereinnahmung, Verschmelzung ohne Grenze", hilfreich: "Grenzen bewusst setzen, um Freiheit zu wahren" },
      { partner: "SE3", dynamik: "Fürsorge und Leistung im Duett", gefahr: "Helfen kippt in Kontrolle, Erfolg wird Pflicht", hilfreich: "Zuwendung klar benennen, nicht voraussetzen" },
      { partner: "SO3", dynamik: "Nähe und Bühne", gefahr: "Überforderung durch Außenwirkung, Konkurrenz um Anerkennung", hilfreich: "Balance aus Intimität und öffentlichem Wir pflegen" },
      { partner: "SX3", dynamik: "Intensiv lieben, intensiv wirken", gefahr: "Beziehung wird Projekt", hilfreich: "Echtheit höher werten als Wirkung" },
      { partner: "SE4", dynamik: "Fürsorge und Tiefe", gefahr: "Helfen überrollt Bedürfnis nach Rückzug", hilfreich: "Erst spiegeln, dann fragen, ob Hilfe gewünscht ist" },
      { partner: "SO4", dynamik: "Zuwendung sucht Ausdruck", gefahr: "Kränkbarkeit und verdeckte Erwartungen", hilfreich: "Erwartungen offen ansprechen statt still rechnen" },
      { partner: "SX4", dynamik: "Zwei Intensitäten", gefahr: "Drama und Abhängigkeit", hilfreich: "Rückzug als Pausenrahmen vereinbaren" },
      { partner: "SE5", dynamik: "Nähe vs. Rückzug", gefahr: "Vereinnahmung trifft Distanz", hilfreich: "Nähe dosieren, Rückzug nicht persönlich nehmen" },
      { partner: "SO5", dynamik: "Bindung trifft Abstraktion", gefahr: "SX2 fühlt sich übersehen, SO5 überfordert", hilfreich: "Kontaktzeit terminieren und begrenzen" },
      { partner: "SX5", dynamik: "Nähebedürfnis vs. Exklusivität im Rückzug", gefahr: "Isolation als Paar", hilfreich: "Verlässliche kleine Oasen der Intimität" },
      { partner: "SE6", dynamik: "Helfen und Absichern", gefahr: "Überbehütung, gegenseitige Kontrolle", hilfreich: "Verantwortung teilen, nicht einseitig schultern" },
      { partner: "SO6", dynamik: "Nähe und Loyalität", gefahr: "Misstrauen verstärkt Hilfsdrang", hilfreich: "Klarheit durch offene Absprachen sichern" },
      { partner: "SX6", dynamik: "Exklusivität plus Loyalität", gefahr: "Abhängigkeit, Angst vor Verlust", hilfreich: "Freiräume einbauen, um Vertrauen zu stärken" },
      { partner: "SE7", dynamik: "Zuwendung trifft Abenteuerlust", gefahr: "SE7 fühlt sich gebremst, SX2 vernachlässigt", hilfreich: "Gemeinsame Rituale als Anker setzen" },
      { partner: "SO7", dynamik: "Bindung und Begeisterung in der Gruppe", gefahr: "Helfen kippt ins Zuviel, SO7 entzieht sich", hilfreich: "Klare Zeiten für Intimität reservieren" },
      { partner: "SX7", dynamik: "Intensität und Spontaneität", gefahr: "Überhitzung, Erschöpfung", hilfreich: "Pausen bewusst einplanen" },
      { partner: "SE8", dynamik: "Fürsorge und Kraft", gefahr: "Kontrolle vs. Vereinnahmung", hilfreich: "Hilfe nur geben, wenn sie gewünscht ist" },
      { partner: "SO8", dynamik: "Nähe sucht Stärke im Feld", gefahr: "Dominanzkonflikte", hilfreich: "Grenzen respektieren, Fürsorge dosieren" },
      { partner: "SX8", dynamik: "Intensität und Macht", gefahr: "Leidenschaftliche Kämpfe", hilfreich: "Machtspiele vermeiden, Verwundbarkeit zulassen" },
      { partner: "SE9", dynamik: "Nähe und Harmonie", gefahr: "Vereinnahmung trifft Rückzug", hilfreich: "Rückzug respektieren, ohne beleidigt zu sein" },
      { partner: "SO9", dynamik: "Fürsorge und Gruppeneinbindung", gefahr: "Zuwendung verpufft in Weite", hilfreich: "Intimität klar einfordern" },
      { partner: "SX9", dynamik: "Exklusivität trifft Harmoniebedürfnis", gefahr: "Verschmelzung bis zur Unsichtbarkeit", hilfreich: "Eigene Bedürfnisse klar aussprechen" },
    ],
    kurzfassung: `Gib ihr ungeteilte Aufmerksamkeit und benenne die Beziehung aktiv als besonders. Reagiere zeitnah auf ihre Signale – Schweigen liest sie schnell als nachlassende Zuneigung. Frag aktiv nach, was sie selbst braucht, statt nur ihr Geben entgegenzunehmen.`,
  },
  SE3: {
    tier: "Waschbär",
    erkennung: `Die selbsterhaltende Drei zeigt ihren Wert nicht über die große Bühne, sondern über praktische Tüchtigkeit: Sie will unentbehrlich sein, weil sie liefert, organisiert, funktioniert. In meinem Buch <em>Enneagramm Zoo</em> beschreibe ich das Bild des <strong>Waschbären</strong>, der beschriftete Vorratsgläser stolz präsentiert und mit Werkzeuggurt tropfende Wasserhähne repariert – Effizienz wird zur Tugend, Perfektion zum Schutz. Selbst auf der Sonnenliege hängt der Werkzeuggürtel noch an ihm: Die Arbeit lässt ihn nicht los.<br><br>Anders als die soziale oder sexuelle Drei, deren Erfolg sich vor Publikum zeigt, beweist sich die SE3 zuerst sich selbst: durch Vorräte, Ordnung, Unabhängigkeit von Zufall. Wer das versteht, liest ihren Aktivismus nicht als Eitelkeit, sondern als den Versuch, sich gegen jede denkbare Eventualität abzusichern – und dabei zu beweisen, dass sie nützlich, fleißig und unverzichtbar ist.`,
    wunde: {
      titel: "Die Wunde dahinter",
      text: `Dahinter liegt die <strong>Wunde der Wertlosigkeit</strong>: das tiefe Gefühl, dass das eigene Sein ohne Leistung, Erfolg oder Anerkennung nicht genug ist. Der Glaubenssatz: "Mein Wert hängt von meiner Leistung ab" – und darunter: "Wer ich wirklich bin, reicht nicht aus, ich muss zeigen, was ich kann." Die Leidenschaft Täuschung zeigt sich bei der SE3 nicht als bewusste Lüge, sondern als das Angleichen des eigenen Selbstbildes an das, was praktischen Nutzen und Sicherheit bringt – sie leistet, optimiert, sichert ab, und die Frage "Reicht es schon?" verstummt selten. Wer das versteht, liest ihre ständige Betriebsamkeit nicht als Kontrollzwang, sondern als die Sehnsucht, endlich einfach geliebt zu werden – nicht für das, was sie tut, sondern für das, was sie ist.`,
    },
    fluegel: {
      titel: "Flügel-Nuance: SE3w2 und SE3w4",
      w1: { code: "SE3w2", route: "beruehmte-wolodymyr-selenskyj", name: "Wolodymyr Selenskyj", text: `die Tüchtigkeit bekommt eine wärmere, beziehungsorientierte Note – Leisten wird auch zum Dienst an anderen, nicht nur zur eigenen Absicherung. Reagiert gut auf persönliche Anerkennung neben der Sachebene, weniger gut auf rein funktionale, unpersönliche Rückmeldung.` },
      w2: { code: "SE3w4", route: "beruehmte-judit-polgar", name: "Judit Polgár", text: `die Tüchtigkeit wird introspektiver, mit einem Gespür für Tiefe verbunden – Leistung soll auch etwas Eigenes, Bedeutsames ausdrücken, nicht nur funktionieren. Reagiert gut auf Anerkennung, die auf ihre individuelle Handschrift eingeht, weniger gut auf austauschbares Standardlob.` },
    },
    stressWachstum: {
      stress: `Unter Stress bewegt sich die SE3 Richtung <strong>Typ 9</strong>: Aus rastloser Betriebsamkeit wird plötzlich Rückzug, Zerstreuung, ein dumpfes Weitermachen ohne echten Antrieb. Erkennst du dieses Muster, ist das ein Signal für erhöhten inneren Druck – kein guter Moment für weitere Aufgaben, ein guter Moment, um Raum ohne Erwartungen zu schaffen.`,
      wachstum: `Im Wachstum bewegt sie sich Richtung <strong>Typ 6</strong>: loyaler, kooperativer, verantwortungsbewusster – der Wert wird weniger über Einzelleistung gesucht, weil ein stabileres Zugehörigkeitsgefühl zum Team entsteht.`,
    },
    ankommt: [
      `<strong>Konkrete Anerkennung für die investierte Tüchtigkeit.</strong> Die SE3 merkt genau, ob Lob echt gemeint ist oder nur höflich – ein beiläufiges "gut gemacht" wirkt entwertend im Vergleich zu einer präzisen Würdigung dessen, was tatsächlich geleistet wurde.`,
      `<strong>Anerkennung auch für das Sein, nicht nur für das Tun.</strong> Ein Gespräch, das sich nicht um Aufgaben oder Ergebnisse dreht, sondern einfach um sie als Person, ist selten – und genau deshalb besonders wirksam.`,
      `<strong>Ruhephasen aktiv einräumen, statt sie als Leerlauf zu werten.</strong> Die SE3 nimmt sich selbst kaum Pausen – wer ihr ausdrücklich signalisiert, dass Nichtstun in Ordnung ist, nimmt ihr einen Teil des inneren Drucks.`,
    ],
    trigger: [
      { trigger: `Ihre Leistung als selbstverständlich hinnehmen, ohne sie zu benennen`, warum: `Bestätigt die tiefe Angst, nur über Nützlichkeit einen Wert zu haben`, alternative: `Konkret benennen, was genau gut gemacht wurde, statt pauschal zu loben` },
      { trigger: `Vorschlagen, eine Aufgabe "auch mal liegen zu lassen"`, warum: `Wird oft als Angriff auf ihre Verlässlichkeit erlebt, nicht als wohlwollender Rat`, alternative: `Konkrete, kleine Ruhepausen aktiv mit ihr vereinbaren, statt es ihr allein zu überlassen` },
      { trigger: `Nachfragen, wie es ihr wirklich geht, mit einem Achselzucken abtun`, warum: `Verstärkt das Muster, Gefühle hinter Funktion zu verstecken – gespiegelt vertieft es die innere Isolation`, alternative: `Geduldig nachhaken, ohne Druck aufzubauen – auch eine kurze, ehrliche Antwort zählt` },
      { trigger: `Unsicherheit oder Zweifel bei ihr als Schwäche werten`, warum: `Verstärkt den Zwang, immer kompetent und "auf Zack" wirken zu müssen`, alternative: `Unsicherheit ausdrücklich als normal und willkommen benennen, bevor sie überspielt wird` },
    ],
    fuehrung: {
      titel: "Aus der Führungspraxis: wenn Tempo die Leere überdeckt",
      text: `In unserem Buch <em>Führung mit Fundament</em> (das ich gemeinsam mit meinem Sohn David L. Rathmer geschrieben habe) beschreiben wir den Fall eines Bereichsleiters, dessen Präsentationen vor dem Vorstand brillant und überzeugend sind – während intern Schnittstellen unklar bleiben und benannte Risiken nicht bearbeitet werden. Auf einen vorsichtigen Hinweis reagiert er: "Das klären wir später. Jetzt müssen wir erst Momentum aufbauen." Das Momentum kommt, die Umsetzung nicht – er reagiert wie gewohnt mit noch mehr Tempo, mehr Meetings, mehr Druck. Der Wendepunkt kommt erst, als eine externe Beraterin fragt: "Wo darf etwas unfertig sein? Wo darf etwas scheitern, ohne dass es sofort gut aussehen muss?"<br><br>Für die SE3 heißt das übersetzt: Tempo und Betriebsamkeit können unbemerkt zum Schutz vor der eigenen inneren Leere werden. Wer mit einer SE3 arbeitet oder sie führt, hilft ihr mehr mit der Erlaubnis, auch mal unfertig oder unsicher sein zu dürfen, als mit weiterem Antrieb.`,
      hinweis: `Im Buch beschreiben wir diesen Fall auf Ebene des Grundtyps 3, nicht subtypspezifisch. Die selbsterhaltende Färbung – die Betriebsamkeit zeigt sich vor allem in praktischer, konkreter Absicherung statt in großer Bühnenwirkung – ist eine Ergänzung auf Basis der übrigen Quellen, kein wörtliches Zitat.`,
    },
    beziehung: {
      titel: `Beziehungsrisiko & heilende Bewegung`,
      risiko: `Die ständige Betriebsamkeit kann den Partner das Gefühl geben, immer nur die "funktionierende" Seite zu erleben, nie die verletzliche – Nähe entsteht schwer, wenn Ruhe wie Kontrollverlust wirkt.`,
      leitfragen: `Tue ich das, weil es mir wirklich wichtig ist – oder weil ich mich nur über Leistung sicher fühle?`,
      hilfreich: `Bewusst Zeiten ohne Aufgabe einplanen und aushalten – und üben, sich auch dann zeigen zu lassen, wenn gerade nichts "geleistet" wird.`,
    },
    pairing: [
      { partner: "SE1", dynamik: "Prinzip vs. Leistung", gefahr: "Härte gegen Effekt", hilfreich: "Echtheit vor Tempo" },
      { partner: "SO1", dynamik: "Rolle × Leistung (praktisch)", gefahr: "Statuskollision, Konkurrenz", hilfreich: "Effizienz und Ordnung vereinen" },
      { partner: "SX1", dynamik: "Intensität vs. Leistung", gefahr: "Nähe wird Zweck, Überhitzung", hilfreich: "Raum für echte Gefühle lassen" },
      { partner: "SE2", dynamik: "Helfende Fürsorge trifft Leistung im Alltag", gefahr: "Wert nur über Nützlichkeit/Erfolg", hilfreich: "Echtes Gefühl neben Funktion sichtbar machen" },
      { partner: "SO2", dynamik: "Gemeinschaftspflege verbindet sich mit Leistung", gefahr: "Erschöpfung durch Überengagement nach außen", hilfreich: "Erfolge privat würdigen, nicht nur öffentlich" },
      { partner: "SX2", dynamik: "Fürsorge und Leistung im Duett", gefahr: "Helfen kippt in Kontrolle, Erfolg wird Pflicht", hilfreich: "Zuwendung klar benennen, nicht voraussetzen" },
      { partner: "SE3", dynamik: "Zwei Leistungsorientierte, stark auf Wirkung fokussiert", gefahr: "Konkurrenz oder Verlust echter Nähe", hilfreich: "Echtheit üben, nicht nur Glanz teilen" },
      { partner: "SO3", dynamik: "Leistung trifft Bühne", gefahr: "Image wichtiger als Beziehung", hilfreich: "Private Echtheit pflegen, nicht alles teilen" },
      { partner: "SX3", dynamik: "Erfolg trifft Intensität", gefahr: "Burnout durch zu viel Druck", hilfreich: "Balance von Arbeit und Nähe suchen" },
      { partner: "SE4", dynamik: "Leistung trifft Sehnsucht", gefahr: "Vier fühlt sich übergangen", hilfreich: "Raum für Emotion und Pragmatismus" },
      { partner: "SO4", dynamik: "Erfolg vor Publikum, Sehnsucht nach Echtheit", gefahr: "Vier empfindet Drei als oberflächlich", hilfreich: "Tiefe mit Glanz verbinden" },
      { partner: "SX4", dynamik: "Zielorientierung mit Leidenschaft", gefahr: "Drama vs. Fassade", hilfreich: "Gefühle benennen, nicht nur zeigen" },
      { partner: "SE5", dynamik: "Tatkraft mit Analyse", gefahr: "Fünf fühlt sich überfahren", hilfreich: "Planung und Umsetzung in Balance" },
      { partner: "SO5", dynamik: "Leistung mit Systemdenken", gefahr: "Drei zu schnell, Fünf zu zurückhaltend", hilfreich: "Drei teilt, Fünf öffnet sich" },
      { partner: "SX5", dynamik: "Zielorientierung und Exklusivität", gefahr: "Nähe überfordert Fünf, scheue Tiefe überfordert Drei", hilfreich: "Schrittweise Annäherung" },
      { partner: "SE6", dynamik: "Antrieb mit Loyalität", gefahr: "Sechs bremst, Drei fühlt sich behindert", hilfreich: "Zweifel ernst nehmen, ohne aufzugeben" },
      { partner: "SO6", dynamik: "Leistung trifft Pflichtbewusstsein", gefahr: "Überlastung durch Verantwortung", hilfreich: "Aufgaben klar teilen" },
      { partner: "SX6", dynamik: "Dynamik mit Bindung", gefahr: "Kontrolle statt Vertrauen", hilfreich: "Ängste offen teilen" },
      { partner: "SE7", dynamik: "Tempo mit Enthusiasmus", gefahr: "Oberflächlichkeit, wenig Tiefe", hilfreich: "Pausen einplanen" },
      { partner: "SO7", dynamik: "Leistung mit sozialem Optimismus", gefahr: "Verzettelung, keine Tiefe", hilfreich: "Fokussierung trainieren" },
      { partner: "SX7", dynamik: "Vision mit Abenteuerlust", gefahr: "Rastlosigkeit", hilfreich: "Verbindlichkeit üben" },
      { partner: "SE8", dynamik: "Leistung plus Macht", gefahr: "Dominanzkämpfe", hilfreich: "Macht teilen, nicht gegeneinander nutzen" },
      { partner: "SO8", dynamik: "Wirkung und Status", gefahr: "Kälte und Machtspiele", hilfreich: "Menschlichkeit bewahren" },
      { partner: "SX8", dynamik: "Zielorientierung plus Intensität", gefahr: "Konflikte eskalieren schnell", hilfreich: "Streitrituale klären" },
      { partner: "SE9", dynamik: "Leistung plus Harmonie", gefahr: "Neun bremst, Drei zieht", hilfreich: "Geduld und Klarheit mischen" },
      { partner: "SO9", dynamik: "Wirkung plus Einfühlung", gefahr: "Trägheit bremst Projekte", hilfreich: "Motivation durch klare Ziele" },
      { partner: "SX9", dynamik: "Dynamik mit Hingabe", gefahr: "Abhängigkeit oder Selbstverlust", hilfreich: "Eigenständigkeit wahren" },
    ],
    kurzfassung: `Würdige konkret, was sie leistet – und ebenso, wer sie jenseits davon ist. Räume ihr aktiv Ruhephasen ein, statt sie als Leerlauf zu werten. Nimm Unsicherheit bei ihr ernst, statt sie als Schwäche zu deuten.`,
  },
  SO3: {
    tier: "Gepard",
    erkennung: `Die soziale Drei zeigt ihren Wert nicht im Stillen wie die SE3, sondern ausdrücklich vor Publikum: Sie will glänzen, beeindrucken, an der Spitze stehen. In meinem Buch <em>Enneagramm Zoo</em> beschreibe ich das Bild des <strong>Geparden</strong>, der durchs Zoogehege sprintet, während das Publikum jubelt – für ihn zählt nur der Applaus. Sein Motto: "Erfolg ist kein Zufall, Erfolg ist Pflicht." Er präsentiert am Podium, hält Vorträge, coacht andere im Erfolgreichsein – und merkt oft selbst nicht, wie sehr er dabei von der Anerkennung anderer abhängig wird.<br><br>Anders als die selbsterhaltende Drei, die sich durch praktische Tüchtigkeit beweist, braucht die SO3 die Bühne, das sichtbare Ergebnis, das Publikum, das applaudiert. Wer das versteht, liest ihre Selbstinszenierung nicht als Eitelkeit, sondern als den Versuch, im sozialen Feld einen Platz zu sichern, der sich sonst nicht sicher anfühlt.`,
    wunde: {
      titel: "Die Wunde dahinter",
      text: `Dahinter liegt die <strong>Wunde der Wertlosigkeit</strong>: das tiefe Gefühl, dass das eigene Sein – ohne sichtbaren Erfolg, Status oder Bewunderung im sozialen Raum – nicht genug ist. Der Glaubenssatz: "Mein Wert zeigt sich darin, wie erfolgreich und anerkannt ich in der Gruppe bin" – und darunter: "Wenn niemand meinen Erfolg sieht, zähle ich nicht." Die Leidenschaft Täuschung zeigt sich bei der SO3 als das Angleichen des eigenen Bildes an das, was im jeweiligen Umfeld als erfolgreich gilt – kaum ist eine Leistung gesehen, entsteht das Bedürfnis nach der nächsten. Wer das versteht, liest ihr ständiges Streben nach Sichtbarkeit nicht als Geltungssucht, sondern als den einzigen Weg, den sie kennt, um sich ihres Wertes zu vergewissern.`,
    },
    fluegel: {
      titel: "Flügel-Nuance: SO3w2 und SO3w4",
      w1: { code: "SO3w2", route: "beruehmte-cristiano-ronaldo", name: "Cristiano Ronaldo", text: `der Erfolgswille bekommt eine wärmere, publikumszugewandte Note – Wirkung wird auch als Verbindung zu Fans und Team erlebt, nicht nur als Statussymbol. Reagiert gut auf persönliche Bewunderung neben der reinen Leistungsanerkennung, weniger gut auf nüchterne, distanzierte Kritik.` },
      w2: { code: "SO3w4", route: "beruehmte-karl-lagerfeld", name: "Karl Lagerfeld", text: `der Erfolgswille wird stilbewusster, mit einem Gespür für Originalität verbunden – Erfolg soll auch unverwechselbar aussehen, nicht nur messbar sein. Reagiert gut auf Anerkennung für das Besondere ihres Auftritts, weniger gut auf austauschbares Standardlob.` },
    },
    stressWachstum: {
      stress: `Unter Stress bewegt sich die SO3 Richtung <strong>Typ 9</strong>: Aus rastlosem Streben wird plötzlich Rückzug, Erschöpfung, ein Weiterlaufen ohne echte Richtung – "Geschwindigkeit ersetzt Richtung." Erkennst du dieses Muster, ist das ein Signal für erhöhten inneren Druck – kein guter Moment für weitere Anerkennungsforderungen, ein guter Moment für Raum ohne Erwartungen.`,
      wachstum: `Im Wachstum bewegt sie sich Richtung <strong>Typ 6</strong>: loyaler, kooperativer, verantwortungsbewusster – der Wert wird weniger über die eigene Bühnenwirkung gesucht, weil ein stabileres Zugehörigkeitsgefühl entsteht.`,
    },
    ankommt: [
      `<strong>Anerkennung, die auch außerhalb der Bühne gegeben wird.</strong> Die SO3 spürt genau den Unterschied zwischen öffentlichem Applaus und echter, stiller Wertschätzung im Vieraugengespräch – Letzteres wirkt tiefer.`,
      `<strong>Erfolge konkret benennen, nicht nur pauschal loben.</strong> Ein beiläufiges "toll gemacht" verpufft. Was wirkt, ist die genaue Würdigung dessen, was tatsächlich erreicht wurde.`,
      `<strong>Interesse auch dann zeigen, wenn gerade nichts geleistet wird.</strong> Ein Gespräch, das sich nicht um Erfolge oder Pläne dreht, sondern einfach um sie als Person, ist selten – und genau deshalb besonders wirksam.`,
    ],
    trigger: [
      { trigger: `Ihren Erfolg vor der Gruppe kleinreden oder relativieren`, warum: `Trifft den wunden Punkt direkt – die SO3 erlebt das nicht als Kritik an der Sache, sondern als Angriff auf ihren Wert`, alternative: `Kritik im Vieraugengespräch üben, öffentlich vor allem die Substanz würdigen` },
      { trigger: `Ihre Selbstdarstellung als "zu viel" oder "eitel" abtun`, warum: `Verstärkt die Angst, ohne Applaus nicht genug zu sein, statt das dahinterliegende Bedürfnis zu erreichen`, alternative: `Die Leistung selbst würdigen, bevor man die Art der Präsentation kommentiert` },
      { trigger: `Fragen, wie es ihr "wirklich" geht, gleich mit dem nächsten Ziel beantworten lassen`, warum: `Bestätigt das Muster, Gefühle hinter der nächsten Leistung zu verstecken, statt sie zuzulassen`, alternative: `Geduldig nachhaken und aushalten, wenn die Antwort zunächst ausweichend bleibt` },
      { trigger: `Sie mit anderen erfolgreichen Personen öffentlich vergleichen`, warum: `Wird sofort als Konkurrenzsituation erlebt, in der sie nicht verlieren darf`, alternative: `Ihre eigene, spezifische Stärke benennen, ohne Vergleichsrahmen` },
    ],
    fuehrung: {
      titel: "Aus der Führungspraxis: wenn Wirkung Substanz ersetzt",
      text: `In unserem Buch <em>Führung mit Fundament</em> (das ich gemeinsam mit meinem Sohn David L. Rathmer geschrieben habe) beschreiben wir eine Geschäftsführerin, die eine gut präsentierbare Strategie forciert, die operativ jedoch kaum tragfähig ist – ihr Team folgt irritiert, weil die Entscheidungsfrage lautet: "Bringt mich das nach vorn? Sieht das erfolgreich aus?" statt "Ist das tragfähig?" Ihr blinder Fleck: Sichtbarkeit wird mit Wert verwechselt, Außenwirkung geht unter Druck vor Substanz.<br><br>Für die SO3 heißt das übersetzt: Der Drang, jederzeit erfolgreich zu wirken, kann unbemerkt wichtigere Fragen nach Tragfähigkeit verdrängen. Wer mit einer SO3 arbeitet oder sie führt, hilft ihr mehr mit der Frage "Ist das tragfähig – unabhängig davon, wie es aussieht?" als mit weiterer Bewunderung für die Präsentation.`,
      hinweis: `Im Buch beschreiben wir diesen Fall auf Ebene des Grundtyps 3, nicht subtypspezifisch. Die soziale Färbung – die Wirkung wird ausdrücklich vor Publikum gesucht, nicht nur intern erreicht – ist eine Ergänzung auf Basis der übrigen Quellen, kein wörtliches Zitat.`,
    },
    beziehung: {
      titel: `Beziehungsrisiko & heilende Bewegung`,
      risiko: `Die ständige Ausrichtung auf Außenwirkung kann den Partner das Gefühl geben, nur ein weiteres Zeugnis des Erfolgs zu sein – echte, verletzliche Nähe wird schwer erreichbar, wenn auch die Beziehung Teil der Inszenierung wird.`,
      leitfragen: `Handle ich, weil es mir wirklich wichtig ist – oder weil es gut aussieht?`,
      hilfreich: `Bewusst Momente ohne Publikum und ohne Erfolgsdruck einplanen – und üben, sich auch dort zeigen zu lassen, wo nichts zu gewinnen ist.`,
    },
    pairing: [
      { partner: "SE1", dynamik: "Ordnung vs. Status", gefahr: "Imagekampf", hilfreich: "Inhalte betonen statt Fassade" },
      { partner: "SO1", dynamik: "Rolle × Rolle (Erfolg)", gefahr: "Überidentifikation mit Rolle bzw. Image", hilfreich: "Starke Wirkung nach außen" },
      { partner: "SX1", dynamik: "Intensität vs. Wirkung nach außen", gefahr: "Konkurrenz zwischen Bühne und Intimität", hilfreich: "Strahlkraft + Tiefe" },
      { partner: "SE2", dynamik: "Helfen im Privaten trifft Wirkung im Sozialen", gefahr: "Einer bleibt unsichtbar", hilfreich: "Ausgleich zwischen Bühne und Hintergrund" },
      { partner: "SO2", dynamik: "Doppelte Ausrichtung auf Wirkung im sozialen Raum", gefahr: "Konkurrenz um Anerkennung, Vernachlässigung innerer Bedürfnisse", hilfreich: "Echtheit wichtiger nehmen als Image" },
      { partner: "SX2", dynamik: "Nähe und Bühne", gefahr: "Überforderung durch Außenwirkung, Konkurrenz um Anerkennung", hilfreich: "Balance aus Intimität und öffentlichem Wir pflegen" },
      { partner: "SE3", dynamik: "Leistung trifft Bühne", gefahr: "Image wichtiger als Beziehung", hilfreich: "Private Echtheit pflegen, nicht alles teilen" },
      { partner: "SO3", dynamik: "Zwei auf Wirkung und Anerkennung ausgerichtete Partner", gefahr: "Konkurrenz um Aufmerksamkeit, Rollenfixierung", hilfreich: "Regelmäßig private Zeiten ohne Publikum einplanen" },
      { partner: "SX3", dynamik: "Bühnenpräsenz trifft Exklusivitätsdrang", gefahr: "Show statt Echtheit, wechselseitiger Druck", hilfreich: "Intimitätsfenster fest verabreden – ohne Außenwirkung" },
      { partner: "SE4", dynamik: "Leistung/Wirkung trifft Sehnsucht/Tiefe", gefahr: "Vier erlebt Drei als oberflächlich, Drei erlebt Vier als bremsend", hilfreich: "Resonanz zuerst, dann Struktur/Plan" },
      { partner: "SO4", dynamik: "Selbstbild und Anerkennung im sozialen Feld", gefahr: "Dramatisierung, Imagefixierung", hilfreich: "Authentische Sichtbarkeit" },
      { partner: "SX4", dynamik: "Wirkung nach außen trifft intensive Exklusivität", gefahr: "Öffentlichkeit vs. Rückzug kollidieren", hilfreich: "Zeiten für Bühne und Zeiten für Tiefe klar trennen" },
      { partner: "SE5", dynamik: "Sichtbarkeit vs. Rückzug ins Wissen", gefahr: "Entfremdung; Fünf fühlt sich überfahren, Drei unverstanden", hilfreich: "Rückzugszeiten respektieren und Ergebnisse gemeinsam präsentieren" },
      { partner: "SO5", dynamik: "Öffentliche Wirkung + distanzierte Beobachtung", gefahr: "Zu viel Kopf, zu wenig Herz", hilfreich: "Gefühlsebene regelmäßig einladen (kurzes Check-in)" },
      { partner: "SX5", dynamik: "Ausstrahlung trifft exklusive, dosierte Nähe", gefahr: "Isolation oder Kontaktabriss", hilfreich: "Verbindliche, kurze Qualitätszeiten festlegen" },
      { partner: "SE6", dynamik: "Wirkung trifft Sicherheitsbedürfnis", gefahr: "Misstrauen vs. Tempo; Prüfung statt Vertrauen", hilfreich: "Transparenz über Pläne + kleine, gehaltene Zusagen" },
      { partner: "SO6", dynamik: "Anerkennung im Feld + Loyalität zur Gruppe", gefahr: "Anpassung aus Angst, Imageabhängigkeit", hilfreich: "Verlässliches Team mit guter Reputation" },
      { partner: "SX6", dynamik: "Strahlkraft + exklusive Bindung", gefahr: "Eifersucht/Prüfungen untergraben Nähe", hilfreich: "Prüfbedürfnisse offen benennen, Rituale der Zusage pflegen" },
      { partner: "SE7", dynamik: "Leistung + Optimismus", gefahr: "Verzettelung, zu wenig Tiefe", hilfreich: "Fokusfenster (ein Ziel, klare Zeitbox)" },
      { partner: "SO7", dynamik: "Bühne + Ideenfeuerwerk", gefahr: "Viel Show, wenig Verbindlichkeit", hilfreich: "Verbindliche Meilensteine definieren" },
      { partner: "SX7", dynamik: "Ausstrahlung + Abenteuerlust", gefahr: "Unruhe, Tiefe wird gemieden", hilfreich: "Tiefe Gespräche als Fixpunkt einplanen" },
      { partner: "SE8", dynamik: "Wirkung + Durchsetzung", gefahr: "Machtkampf, Härte", hilfreich: "Macht teilen, Anerkennung geben" },
      { partner: "SO8", dynamik: "Einfluss im Feld + Führung", gefahr: "Dominanz, Konkurrenz", hilfreich: "Starkes Leuchtturmpaar, Respektregeln vereinbaren" },
      { partner: "SX8", dynamik: "Wirkung + Intensität", gefahr: "Eskalierende Konflikte, Vereinnahmung", hilfreich: "Streit- und Erholungsrituale definieren" },
      { partner: "SE9", dynamik: "Sichtbarkeit + Ruhe", gefahr: "Passiv werden vs. treiben", hilfreich: "Tempoabgleich und klare, kleine Aufgaben" },
      { partner: "SO9", dynamik: "Anerkennung + Harmoniebedürfnis", gefahr: "Konflikte werden zugedeckt", hilfreich: "Probleme früh und freundlich ansprechen" },
      { partner: "SX9", dynamik: "Bühne + Verschmelzungssehnsucht", gefahr: "Grenzen verwischen, Überanpassung", hilfreich: "Eigene Bedürfnisse klar formulieren" },
    ],
    kurzfassung: `Würdige Erfolge konkret, aber gib Anerkennung auch abseits der Bühne. Kritisiere nur unter vier Augen, nicht vor der Gruppe. Zeig Interesse an ihr auch dann, wenn gerade nichts zu leisten ist.`,
  },
  SX3: {
    tier: "Pfau",
    erkennung: `Die sexuelle Drei sucht ihren Wert nicht über Status im ganzen Feld wie die SO3, sondern über Ausstrahlung im direkten Kontakt: Sie will faszinieren, begehrt sein, strahlen. In meinem Buch <em>Enneagramm Zoo</em> beschreibe ich das Bild des <strong>Pfaus</strong>, der stolz sein Rad schlägt, während das Publikum zuschaut – "Wenn ihr mich anschaut, sehe ich, dass ich existiere." Sein Blick verspricht Nähe, doch im Kern sucht er Bewunderung.<br><br>Anders als die selbsterhaltende oder soziale Drei, deren Erfolg sich über Tüchtigkeit oder Status zeigt, braucht die SX3 die unmittelbare Resonanz einer Person, die ihn anschaut und begehrt. Wer das versteht, liest ihre Verführung nicht als Oberflächlichkeit, sondern als den Versuch, sich über die Wirkung auf einen einzelnen Menschen ihres Wertes zu vergewissern – oft mit echter Wärme dahinter, die die Inszenierung selbst kaum zeigen darf.`,
    wunde: {
      titel: "Die Wunde dahinter",
      text: `Dahinter liegt die <strong>Wunde der Wertlosigkeit</strong>: das tiefe Gefühl, dass das eigene Sein – ohne persönliche Ausstrahlung, Bewunderung und Resonanz im direkten Kontakt – nicht genug ist. Der Glaubenssatz: "Mein Wert zeigt sich darin, wie sehr ich auf andere wirke und begehrt werde" – und darunter: "Wenn ich nicht strahle und fasziniere, bin ich nichts Besonderes." Die Leidenschaft Täuschung zeigt sich bei der SX3 als die enge Verknüpfung von persönlicher Ausstrahlung und Selbstwert: Kaum ist Bewunderung da, meldet sich die Frage "Sehe ich wirklich etwas Besonderes, oder spielte ich nur eine Rolle?" Wer das versteht, liest ihre Selbstinszenierung nicht als Eitelkeit, sondern als die Sehnsucht, einmal wirklich erkannt zu werden, nicht nur bewundert.`,
    },
    fluegel: {
      titel: "Flügel-Nuance: SX3w2 und SX3w4",
      w1: { code: "SX3w2", route: "beruehmte-lena-meyer-landrut", name: "Lena Meyer-Landrut", text: `die Ausstrahlung bekommt eine wärmere, zugewandtere Note – Faszinieren wird auch zum Geben, zur Verbindung mit dem Publikum, nicht nur zur Selbstdarstellung. Reagiert gut auf persönliche, herzliche Bewunderung, weniger gut auf distanzierte, rein sachliche Anerkennung.` },
      w2: { code: "SX3w4", route: "beruehmte-marilyn-monroe", name: "Marilyn Monroe", text: `die Ausstrahlung wird verletzlicher, mit einer tiefen Sehnsucht nach echter Erkennung verbunden – Glanz und Schmerz liegen dicht beieinander. Reagiert gut auf Anerkennung, die auf das Besondere hinter der Fassade eingeht, sehr empfindlich auf jede Bestätigung, die nur der Oberfläche gilt.` },
    },
    stressWachstum: {
      stress: `Unter Stress bewegt sich die SX3 Richtung <strong>Typ 9</strong>: Aus glänzender Präsenz wird plötzlich Rückzug, Erschöpfung, das Gefühl, wenn niemand hinschaut, gar nicht mehr zu existieren. Erkennst du dieses Muster, ist das ein Signal für erhöhten inneren Druck – kein guter Moment für weitere Bewunderungsforderungen, ein guter Moment für ruhige, bedingungslose Präsenz.`,
      wachstum: `Im Wachstum bewegt sie sich Richtung <strong>Typ 6</strong>: loyaler, verbindlicher, weniger auf ständige Bestätigung angewiesen – der Wert wird weniger über Wirkung gesucht, weil ein stabileres inneres Zugehörigkeitsgefühl entsteht.`,
    },
    ankommt: [
      `<strong>Anerkennung, die auf die Person zielt, nicht nur auf die Wirkung.</strong> Die SX3 spürt genau den Unterschied zwischen "du bist beeindruckend" und "ich sehe dich" – Letzteres trifft tiefer und hält länger.`,
      `<strong>Ungeteilte Aufmerksamkeit im direkten Kontakt.</strong> Ein flüchtiges Kompliment reicht selten – was wirkt, ist echtes, konzentriertes Interesse an ihr als Person, nicht an der Show.`,
      `<strong>Interesse auch dann zeigen, wenn gerade nicht "geglänzt" wird.</strong> Ein Moment ohne Inszenierung, in dem sie trotzdem gesehen wird, ist selten – und deshalb besonders wirksam.`,
    ],
    trigger: [
      { trigger: `Ihre Ausstrahlung oder ihr Auftreten öffentlich belächeln`, warum: `Trifft den wunden Punkt direkt – die SX3 erlebt das nicht als harmlose Neckerei, sondern als Angriff auf ihren Wert`, alternative: `Kritik im Vieraugengespräch üben, nie vor Publikum` },
      { trigger: `Ihre Verführung oder Inszenierung als "unecht" abtun`, warum: `Verstärkt die tiefste Angst, nie wirklich erkannt, sondern nur für die Rolle geliebt zu werden`, alternative: `Nach der Person hinter der Präsentation fragen, statt die Präsentation selbst zu bewerten` },
      { trigger: `Auf Nachrichten oder Signale zeitverzögert oder knapp reagieren`, warum: `Wird schnell als nachlassendes Interesse gedeutet, trifft die Angst, an Wirkung zu verlieren`, alternative: `Zeitnah, auch kurz, aber wertschätzend antworten` },
      { trigger: `Erfolge oder Misserfolge öffentlich kommentieren, ohne Rücksicht auf ihre Verletzlichkeit`, warum: `Statusverlust vor Publikum trifft sie besonders hart, weil ihr Wert daran zu hängen scheint`, alternative: `Rückmeldung ruhig, direkt und privat geben, mit Substanz statt Effekt` },
    ],
    fuehrung: {
      titel: "Aus der Führungspraxis: wenn Glanz die Substanz verdeckt",
      text: `In unserem Buch <em>Führung mit Fundament</em> (das ich gemeinsam mit meinem Sohn David L. Rathmer geschrieben habe) beschreiben wir einen Abteilungsleiter, der unter Druck gerät, weil ein Projekt hinter den Erwartungen bleibt. In Meetings präsentiert er geschönte Kennzahlen und vermeidet klare Aussagen zu Risiken – das Team spürt die Diskrepanz und verliert an Vertrauen, obwohl die Kommunikation nach außen professionell wirkt. Was hier hilft: Substanz vor Wirkung stellen, direkte Rückmeldung geben, das Tempo reduzieren, Fehlertragfähigkeit aktiv einfordern.<br><br>Für die SX3 heißt das übersetzt: Die Einsicht, dass Glaubwürdigkeit im direkten Kontakt durch Wahrhaftigkeit entsteht, nicht durch Glanz – und dass echte Nähe gerade dort beginnt, wo die Inszenierung aufhört.`,
      hinweis: `Im Buch beschreiben wir diesen Fall auf Ebene des Grundtyps 3, nicht subtypspezifisch. Die sexuelle Färbung – die Wirkung wird vor allem im direkten, persönlichen Kontakt gesucht, nicht vor der ganzen Gruppe – ist eine Ergänzung auf Basis der übrigen Quellen, kein wörtliches Zitat.`,
    },
    beziehung: {
      titel: `Beziehungsrisiko & heilende Bewegung`,
      risiko: `Die ständige Inszenierung kann den Partner das Gefühl geben, nur das Publikum einer Show zu sein, nie den Menschen dahinter wirklich zu erreichen – echte, verletzliche Nähe wird schwer, solange die Rolle wichtiger bleibt als das Sein.`,
      leitfragen: `Zeige ich mich, weil es echt ist – oder weil es wirkt?`,
      hilfreich: `Bewusst Momente ohne Bühne, ohne Spiegel, ohne Publikum suchen – und aushalten, dass Nähe auch dann trägt, wenn gerade nichts "geglänzt" wird.`,
    },
    pairing: [
      { partner: "SE1", dynamik: "Prinzip vs. Glanz", gefahr: "Täuschung", hilfreich: "Tiefe mit Authentizität" },
      { partner: "SO1", dynamik: "Rolle × Exklusiver Glanz", gefahr: "Inszenierung statt Nähe", hilfreich: "Attraktive Außenwirkung, Bindung" },
      { partner: "SX1", dynamik: "Intensität × Glanz", gefahr: "Dramatische Szenen, Selbstdarstellung", hilfreich: "Magnetische Beziehung" },
      { partner: "SE2", dynamik: "Fürsorge trifft Glanz in der Exklusivbeziehung", gefahr: "Abhängigkeit von Anerkennung", hilfreich: "Strahlkraft und Halt" },
      { partner: "SO2", dynamik: "Gemeinschaftssinn trifft Exklusivitätsdrang", gefahr: "Eifersucht oder Spannungen zwischen Wir-Gruppe und Wir-zwei", hilfreich: "Räume für beides schaffen – Intimität und Öffentlichkeit" },
      { partner: "SX2", dynamik: "Intensiv lieben, intensiv wirken", gefahr: "Beziehung wird Projekt", hilfreich: "Echtheit höher werten als Wirkung" },
      { partner: "SE3", dynamik: "Erfolg trifft Intensität", gefahr: "Burnout durch zu viel Druck", hilfreich: "Balance von Arbeit und Nähe suchen" },
      { partner: "SO3", dynamik: "Bühnenpräsenz trifft Exklusivitätsdrang", gefahr: "Show statt Echtheit, wechselseitiger Druck", hilfreich: "Intimitätsfenster fest verabreden – ohne Außenwirkung" },
      { partner: "SX3", dynamik: "Intensität trifft Intensität", gefahr: "Drama und Übersteigerung", hilfreich: "Räume für Ruhe bewusst schaffen" },
      { partner: "SE4", dynamik: "Intensität + Prinzipien", gefahr: "Moralische Zuspitzung", hilfreich: "Unterschiede als Bereicherung sehen" },
      { partner: "SO4", dynamik: "Intensität + Bühne", gefahr: "Konkurrenz in Aufmerksamkeit", hilfreich: "Rollen abwechseln, nicht gegeneinander spielen" },
      { partner: "SX4", dynamik: "Leidenschaft × Sehnsucht", gefahr: "Melodramatik", hilfreich: "Bodenhaftung einbauen" },
      { partner: "SE5", dynamik: "Intensität + Rückzug", gefahr: "Überforderung des Fünfers", hilfreich: "Balance zwischen Nähe und Distanz" },
      { partner: "SO5", dynamik: "Intensität + Analyse", gefahr: "Zu viel Kopf gegen zu viel Herz", hilfreich: "Kopf und Bauch gleichwertig zulassen" },
      { partner: "SX5", dynamik: "Intensität × Distanz", gefahr: "Ungleichgewicht Nähe vs. Rückzug", hilfreich: "Geduld als Schlüssel" },
      { partner: "SE6", dynamik: "Intensität + Loyalität", gefahr: "Kontrolle vs. Zweifel", hilfreich: "Stabile, leidenschaftliche Bindung" },
      { partner: "SO6", dynamik: "Intensität + Gemeinschaft", gefahr: "Vereinnahmung", hilfreich: "Zusammenhalt in Außenwirkung, Grenzen und Autonomie klären" },
      { partner: "SX6", dynamik: "Intensität × Zweifel", gefahr: "Wechselbad aus Nähe und Misstrauen", hilfreich: "Verbindliche Zusagen pflegen" },
      { partner: "SE7", dynamik: "Intensität + Optimismus", gefahr: "Zerstreuung, Überdrehen", hilfreich: "Pausen und Ruhe einbauen" },
      { partner: "SO7", dynamik: "Intensität + Netzwerke", gefahr: "Außenorientierung überlagert Nähe", hilfreich: "Private Räume schützen" },
      { partner: "SX7", dynamik: "Intensität × Begeisterung", gefahr: "Überhitzung, Haltlosigkeit", hilfreich: "Erdung einplanen" },
      { partner: "SE8", dynamik: "Intensität + Macht", gefahr: "Dominanzkämpfe", hilfreich: "Macht teilen, nicht gegeneinander richten" },
      { partner: "SO8", dynamik: "Intensität + Führung", gefahr: "Kontrolle im Außen", hilfreich: "Innenraum pflegen, nicht nur Außenwirkung" },
      { partner: "SX8", dynamik: "Intensität × Intensität", gefahr: "Eskalation", hilfreich: "Gemeinsame Ausrichtung festlegen" },
      { partner: "SE9", dynamik: "Intensität + Harmonie", gefahr: "Passiv vs. aktiv", hilfreich: "Neun aktiv einbeziehen" },
      { partner: "SO9", dynamik: "Intensität + Frieden im Außen", gefahr: "Konfliktvermeidung", hilfreich: "Unterschiede klar ansprechen" },
      { partner: "SX9", dynamik: "Intensität × Harmoniebedürfnis", gefahr: "Rückzug des Neuners", hilfreich: "Neun Raum geben, ohne Intensität zu überfordern" },
    ],
    kurzfassung: `Sieh die Person hinter der Inszenierung, nicht nur ihre Wirkung. Kritisiere nie öffentlich, immer unter vier Augen. Schenk ihr ungeteilte Aufmerksamkeit auch dann, wenn gerade nichts geglänzt wird.`,
  },
  SE4: {
    tier: "Taube",
    erkennung: `Die selbsterhaltende Vier trägt ihre Sehnsucht nicht nach außen wie die SO4 oder SX4, sondern hält sie still in einem geschützten Rückzugsraum: Sie sucht Sicherheit in Einfachheit, in kleinen Ritualen, im eigenen Nest. In meinem Buch <em>Enneagramm Zoo</em> beschreibe ich das Bild der <strong>Taube</strong>, die fast unsichtbar in ihrem winzigen Häuschen sitzt – Bescheidenheit und Selbstbegrenzung geben ihr Sicherheit, auch wenn es eng wird. Ihr Motto: "Ich halte mein kleines Nest warm."<br><br>Anders als die soziale oder sexuelle Vier zeigt die SE4 ihre Melancholie selten offen – sie trägt sie leise, fast stoisch, während sie gleichzeitig ein feines Gespür für Stimmungen und kleine Veränderungen behält. Wer das versteht, liest ihren Rückzug nicht als Ablehnung, sondern als den Versuch, in einer als unsicher erlebten Welt einen eigenen, geschützten Raum zu bewahren.`,
    wunde: {
      titel: "Die Wunde dahinter",
      text: `Dahinter liegt die <strong>Wunde der Trennung</strong>: das tiefe Gefühl, von etwas Wesentlichem abgetrennt zu sein – von sich selbst, von anderen oder vom Leben. Bei der SE4 wird dieser Schmerz nicht dramatisch ausgedrückt, sondern still und zäh getragen. Der Glaubenssatz: "Ich muss aushalten, was mir fehlt, ohne zu klagen" – und darunter: "Wenn ich meinen Mangel zeige, werde ich noch weniger geliebt." Die Leidenschaft Neid zeigt sich bei der SE4 als das schmerzhafte, nach innen gerichtete Gefühl, dass anderen etwas zukommt, das ihr selbst fehlt – ohne dass sie es je offen zeigen würde. Wer das versteht, liest ihre Zurückhaltung nicht als Kälte, sondern als eine stille, diszipliniert ertragene Sehnsucht.`,
    },
    fluegel: {
      titel: "Flügel-Nuance: SE4w3 und SE4w5",
      w1: { code: "SE4w3", route: "beruehmte-adele", name: "Adele", text: `die Melancholie bekommt eine ausdrucksstärkere, sichtbarere Note – Gefühl wird auch zu Leistung geformt, ohne dass die Tiefe verloren geht. Reagiert gut auf Anerkennung, die sowohl das Gefühl als auch das Können würdigt, weniger gut auf reine Sachlichkeit ohne emotionalen Bezug.` },
      w2: { code: "SE4w5", route: "beruehmte-charlotte-wells", name: "Charlotte Wells", text: `die Melancholie wird introspektiver, mit einem Hang zu Rückzug und geistiger Vertiefung verbunden – Sehnsucht sucht Ausdruck eher im stillen Denken als im offenen Gefühl. Reagiert gut auf Raum und Zeit für sich, schlecht auf Drängen oder ungebetene Nähe.` },
    },
    stressWachstum: {
      stress: `Unter Stress bewegt sich die SE4 Richtung <strong>Typ 2</strong>: Die sonst stille Zurückhaltung kippt in anhängliches, forderndes Klammern – die stille Sehnsucht wird plötzlich laut. Erkennst du dieses Muster, ist das ein Signal für erhöhten inneren Druck – kein guter Moment, um Distanz zu fordern, ein guter Moment für ruhige, verlässliche Nähe.`,
      wachstum: `Im Wachstum bewegt sie sich Richtung <strong>Typ 1</strong>: geerdeter, klarer, disziplinierter – die Sehnsucht bleibt, verliert aber die lähmende Schwere, weil ein stabilerer innerer Halt entsteht.`,
    },
    ankommt: [
      `<strong>Geduldiges, ungedrängtes Interesse.</strong> Die SE4 öffnet sich selten auf Anfrage – sie braucht Zeit und einen Raum, der sich sicher genug anfühlt, um ihre eigentliche Tiefe zu zeigen.`,
      `<strong>Kleine Rituale und ihren Rückzugsraum respektieren.</strong> Was von außen wie Unwichtiges wirkt – ein bestimmter Platz, eine feste Gewohnheit – ist für die SE4 oft die eigentliche Quelle von Sicherheit.`,
      `<strong>Ihre Kreativität würdigen, auch wenn sie unfertig oder klein wirkt.</strong> Der Versuch selbst zählt für sie oft mehr als das Ergebnis – Anerkennung dafür wirkt tiefer als für ein perfektes Resultat.`,
    ],
    trigger: [
      { trigger: `Ihren Rückzug als Ablehnung oder Beleidigtsein deuten`, warum: `Verkennt, dass Rückzug für die SE4 der primäre Weg ist, mit Überforderung umzugehen, nicht ein Statement gegen die andere Person`, alternative: `Raum geben, ohne sich zu entfernen – z. B. "Ich bin da, wenn du bereit bist"` },
      { trigger: `Vergleiche mit anderen ziehen ("X schafft das doch auch")`, warum: `Bestätigt die innere Neid-Dynamik und das Gefühl, grundsätzlich zu fehlen`, alternative: `Die eigene Situation der SE4 für sich würdigen, ohne Vergleichsrahmen` },
      { trigger: `Auf ihre stille Zurückhaltung mit noch mehr Druck oder Drängen reagieren`, warum: `Verstärkt das Bedürfnis, sich weiter zurückzuziehen und zu schützen`, alternative: `Geduldig bleiben und kleine, sichere Schritte der Öffnung anerkennen` },
      { trigger: `Ihre Sparsamkeit oder Genügsamkeit belächeln`, warum: `Trifft ihre Strategie, Sicherheit durch Einfachheit zu schaffen, direkt im Kern`, alternative: `Nach dem Bedürfnis nach Sicherheit dahinter fragen, statt das Verhalten zu bewerten` },
    ],
    fuehrung: {
      titel: "Aus der Führungspraxis: wenn Stimmigkeit vor Strategie geht",
      text: `In unserem Buch <em>Führung mit Fundament</em> (das ich gemeinsam mit meinem Sohn David L. Rathmer geschrieben habe) beschreiben wir einen Teamleiter, der eine strategisch sinnvolle Kooperation ablehnt, weil sie sich innerlich nicht stimmig anfühlt. Sein Entscheidungsfilter lautet nicht "Ist das sinnvoll?", sondern "Ist das stimmig? Fühlt sich das echt an?" – unter Stress kann das zu emotionaler Verzerrung führen: Entscheidungen folgen der Stimmung, nicht der Lage. Sein blinder Fleck ist die Pragmatik: Nicht alles Sinnvolle fühlt sich sofort stimmig an.<br><br>Für die SE4 heißt das übersetzt: Das innere Gespür für Echtheit ist eine echte Stärke – hilfreich wird sie erst, wenn sie nicht zur alleinigen Entscheidungsgrundlage wird. Wer mit einer SE4 arbeitet oder sie führt, hilft ihr mehr mit der Frage "Was würde es brauchen, damit sich das auch stimmig anfühlt?" als mit reinem Sachdruck.`,
      hinweis: `Im Buch beschreiben wir diesen Fall auf Ebene des Grundtyps 4, nicht subtypspezifisch. Die selbsterhaltende Färbung – die Stimmigkeit wird vor allem im eigenen, geschützten Rahmen gesucht, nicht öffentlich verhandelt – ist eine Ergänzung auf Basis der übrigen Quellen, kein wörtliches Zitat.`,
    },
    beziehung: {
      titel: `Beziehungsrisiko & heilende Bewegung`,
      risiko: `Der stille Rückzug kann beim Partner das Gefühl erzeugen, nicht wirklich hereingelassen zu werden – die Beziehung bleibt an der Oberfläche, solange die eigentliche Sehnsucht nie offen geteilt wird.`,
      leitfragen: `Halte ich das aus, weil es wirklich reicht – oder weil ich Angst habe, mit meiner Sehnsucht abgelehnt zu werden?`,
      hilfreich: `Den stillen Schmerz aktiv teilen, statt ihn allein zu tragen – kleine Schritte der Öffnung wagen, auch wenn sie unfertig oder unperfekt wirken.`,
    },
    pairing: [
      { partner: "SE1", dynamik: "Prinzip vs. Besonderheit", gefahr: "Kritik vs. Drama", hilfreich: "Raum für Emotion geben" },
      { partner: "SO1", dynamik: "Rolle × Besonderheit (praktisch)", gefahr: "Kritik vs. Empfindlichkeit", hilfreich: "Tiefe anerkennen, Regeln lockern" },
      { partner: "SX1", dynamik: "Intensität × Einzigartigkeit", gefahr: "Dramatische Verschmelzung, Schmerzfokus", hilfreich: "Dosis an Intensität steuern" },
      { partner: "SE2", dynamik: "Praktische Fürsorge trifft emotionale Tiefe", gefahr: "Missverständnis zwischen Helfen und Erleben", hilfreich: "Zuhören vor Lösungen setzen" },
      { partner: "SO2", dynamik: "Gemeinschaftspflege trifft auf Suche nach Einzigartigkeit", gefahr: "Überforderung durch unterschiedliche Beziehungslogiken", hilfreich: "Unterschiedliche Bedürfnisse würdigen, nicht gegeneinander stellen" },
      { partner: "SX2", dynamik: "Fürsorge und Tiefe", gefahr: "Helfen überrollt Bedürfnis nach Rückzug", hilfreich: "Erst spiegeln, dann fragen, ob Hilfe gewünscht ist" },
      { partner: "SE3", dynamik: "Leistung trifft Sehnsucht", gefahr: "Vier fühlt sich übergangen", hilfreich: "Raum für Emotion und Pragmatismus" },
      { partner: "SO3", dynamik: "Leistung/Wirkung trifft Sehnsucht/Tiefe", gefahr: "Vier erlebt Drei als oberflächlich, Drei erlebt Vier als bremsend", hilfreich: "Resonanz zuerst, dann Struktur/Plan" },
      { partner: "SX3", dynamik: "Intensität + Prinzipien", gefahr: "Moralische Zuspitzung", hilfreich: "Unterschiede als Bereicherung sehen" },
      { partner: "SE4", dynamik: "Stabilität trifft Stabilität, Rückzug ins Private", gefahr: "Erstarrung im Alltag, fehlende Impulse", hilfreich: "Gemeinsame Rituale bewusst mit neuen Impulsen beleben" },
      { partner: "SO4", dynamik: "Rückzug vs. Bühne", gefahr: "SE4 fühlt sich übersehen, SO4 fühlt sich eingeengt", hilfreich: "Räume schaffen für Privatheit und Sichtbarkeit im Wechsel" },
      { partner: "SX4", dynamik: "Stabilität vs. Intensität", gefahr: "SE4 überfordert, SX4 gelangweilt von Routine", hilfreich: "Sicherheit als Basis für leidenschaftliche Momente" },
      { partner: "SE5", dynamik: "Rückzug + Rückzug", gefahr: "Vereinzelung, Isolation", hilfreich: "Geplante Begegnungszeiten vereinbaren" },
      { partner: "SO5", dynamik: "SE4 privat, SO5 sucht Rolle im Gefüge", gefahr: "SE4 fühlt sich verlassen, SO5 distanziert", hilfreich: "Privates und Soziales bewusst austauschen" },
      { partner: "SX5", dynamik: "SE4 sucht Nähe über Alltag, SX5 über exklusive Tiefe", gefahr: "SE4 klammert, SX5 zieht sich zurück", hilfreich: "Sicherheit und Tiefe klar absprechen" },
      { partner: "SE6", dynamik: "Beide sicherheitsorientiert, SE4 durch Alltag, SE6 durch Prüfung", gefahr: "Angstverstärkung, misstrauische Routinen", hilfreich: "Vertrauen üben, statt nur Kontrolle" },
      { partner: "SO6", dynamik: "SE4 nach innen, SO6 nach Gruppe", gefahr: "SE4 fühlt sich allein, SO6 überfordert SE4 mit Pflichten", hilfreich: "Privates und Kollektiv klar balancieren" },
      { partner: "SX6", dynamik: "SE4 braucht Sicherheit, SX6 sucht exklusive Bindung", gefahr: "Verlustängste verstärken sich", hilfreich: "Ängste benennen, statt sie auszuleben" },
      { partner: "SE7", dynamik: "SE4 Rückzug, SE7 Expansion", gefahr: "SE4 fühlt sich überrannt, SE7 fühlt sich gebremst", hilfreich: "Planbare Abenteuer schaffen" },
      { partner: "SO7", dynamik: "SE4 heimisch, SO7 gruppenorientiert", gefahr: "SE4 erlebt Oberflächlichkeit, SO7 Langeweile", hilfreich: "Heimisches Umfeld mit gemeinsamen Projekten verbinden" },
      { partner: "SX7", dynamik: "SE4 Geborgenheit, SX7 Intensität und Ablenkung", gefahr: "SE4 klammert, SX7 sucht Abwechslung", hilfreich: "Exklusivität mit Spiel kombinieren" },
      { partner: "SE8", dynamik: "SE4 Sicherheit, SE8 Durchsetzung", gefahr: "SE4 fühlt sich überrollt, SE8 genervt von Rückzug", hilfreich: "Grenzen klarstellen, Stärken anerkennen" },
      { partner: "SO8", dynamik: "SE4 Rückzug, SO8 Machtausdruck im Außen", gefahr: "SE4 fühlt sich unsichtbar, SO8 dominiert", hilfreich: "Gleichwertigkeit betonen" },
      { partner: "SX8", dynamik: "SE4 Stabilität, SX8 Intensität", gefahr: "SE4 überfordert, SX8 unzufrieden mit Routine", hilfreich: "Balance zwischen Nähe und Freiraum suchen" },
      { partner: "SE9", dynamik: "SE4 Geborgenheit, SE9 Harmonie", gefahr: "Stagnation, Konfliktvermeidung", hilfreich: "Kleine Veränderungen bewusst einbauen" },
      { partner: "SO9", dynamik: "SE4 häuslich, SO9 sozial verbindend", gefahr: "SE4 fühlt sich vereinnahmt, SO9 zerstreut", hilfreich: "Klare Zeitfenster für innen/außen absprechen" },
      { partner: "SX9", dynamik: "SE4 Sicherheit, SX9 Exklusivität", gefahr: "Passivität, Abhängigkeit", hilfreich: "Gemeinsame Initiative fördern" },
    ],
    kurzfassung: `Gib ihr Zeit und Raum, ohne zu drängen – Öffnung geschieht bei ihr nie auf Kommando. Respektiere ihre kleinen Rituale und ihren Rückzugsraum als echte Sicherheitsquelle. Würdige ihre Kreativität auch unfertig, nicht erst als perfektes Ergebnis.`,
  },
  SX4: {
    tier: "Chihuahua",
    erkennung: `Die sexuelle Vier trägt ihre Sehnsucht weder still nach innen wie die SE4 noch als Suche nach Resonanz im Feld wie die SO4 – sie lebt sie ungefiltert, laut und intensiv aus. In meinem Buch <em>Enneagramm Zoo</em> beschreibe ich das Bild des <strong>Chihuahuas</strong>, der dramatisch auf dem Arm des Zoopflegers winselt – Bedürftigkeit wird zur Bühne. Sein Motto: "Spür mich – ganz oder gar nicht." Zwischen Glanz und Zusammenbruch, zwischen Hingabe und Trotz schwankt er, immer auf der Suche nach dem Gefühl, wirklich lebendig zu sein.<br><br>Anders als die anderen Vierer-Varianten zeigt die SX4 ihre Intensität direkt im Kontakt: laut, dramatisch, manchmal überwältigend. Wer das versteht, liest ihre Dramatik nicht als Theater, sondern – wie es im Buch heißt – als Überleben: die verzweifelte, oft übersehene Sehnsucht, wirklich erkannt zu werden.`,
    wunde: {
      titel: "Die Wunde dahinter",
      text: `Dahinter liegt die <strong>Wunde der Trennung</strong>: das tiefe Gefühl, von echter emotionaler Verbindung und Authentizität abgetrennt zu sein – und diesen Mangel durch immer intensivere Erfahrungen ausgleichen zu müssen. Der Glaubenssatz: "Ich sehne mich nach echter Tiefe – und fühle, dass sie mir fehlt" – und darunter: "Meine Intensität ist mein Wert, aber auch mein Gefängnis." Die Leidenschaft Neid zeigt sich bei der SX4 als leidenschaftliche Sehnsucht nach dem, was andere an Verbindung zu haben scheinen – verbunden mit dem Drang, Gefühle direkt und sichtbar zu zeigen, in der Hoffnung, echte Begegnung zu erzeugen. Wer das versteht, liest ihre Eskalationen nicht als Manipulation, sondern als den verzweifelten Versuch, eine gefühlte Trennung durch Intensität zu überbrücken.`,
    },
    fluegel: {
      titel: "Flügel-Nuance: SX4w3 und SX4w5",
      w1: { code: "SX4w3", route: "beruehmte-freddie-mercury", name: "Freddie Mercury", text: `die Intensität bekommt eine bühnenhaftere, ausdrucksstärkere Note – Gefühl wird zur Performance, ohne dabei unecht zu werden. Reagiert gut auf Publikum und sichtbare Anerkennung seiner Ausdruckskraft, weniger gut auf Zurückhaltung oder emotionale Kargheit.` },
      w2: { code: "SX4w5", route: "beruehmte-ana-de-armas", name: "Ana de Armas", text: `die Intensität wird introspektiver, mit einem Hang zu Rückzug zwischen den emotionalen Ausbrüchen verbunden – Tiefe sucht auch stillen Raum, nicht nur Bühne. Reagiert gut auf Raum für Ambivalenz, schlecht auf Drängen zur sofortigen Klarheit.` },
    },
    stressWachstum: {
      stress: `Unter Stress bewegt sich die SX4 Richtung <strong>Typ 2</strong>: Aus intensivem Selbstausdruck wird plötzlich forderndes, anhängliches Klammern – "Wenn du mich wirklich liebst, musst du das spüren." Erkennst du dieses Muster, ist das ein Signal für erhöhten inneren Druck – kein guter Moment für weitere Distanz, ein guter Moment für ruhige, verlässliche Präsenz.`,
      wachstum: `Im Wachstum bewegt sie sich Richtung <strong>Typ 1</strong>: geerdeter, disziplinierter, klarer – die Intensität bleibt, verliert aber die Dramatik, weil ein stabilerer innerer Halt entsteht.`,
    },
    ankommt: [
      `<strong>Volle, ungeteilte Präsenz in intensiven Momenten.</strong> Die SX4 spürt sofort, ob jemand wirklich bei ihr ist oder nur höflich zuhört – halbe Aufmerksamkeit wirkt schlimmer als offene Distanz.`,
      `<strong>Emotionen als real anerkennen, auch wenn sie groß wirken.</strong> "Das ist jetzt aber ein bisschen viel" verletzt tiefer, als es gemeint ist – wirksamer ist, das Gefühl selbst zu würdigen, auch ohne jeder Eskalation zuzustimmen.`,
      `<strong>Kreativen Ausdruck aktiv würdigen.</strong> Musik, Schreiben, Bewegung – die SX4 verwandelt Intensität oft in Kunst; diesen Prozess zu sehen und ernst zu nehmen, wirkt tiefer als bloßes Trösten.`,
    ],
    trigger: [
      { trigger: `Ihre Intensität als "Drama" oder "übertrieben" abtun`, warum: `Trifft den wunden Punkt direkt – die SX4 erlebt das nicht als sachliche Beobachtung, sondern als Beweis, nicht wirklich gesehen zu werden`, alternative: `Das Gefühl dahinter benennen, bevor man die Ausdrucksform kommentiert` },
      { trigger: `Auf einen emotionalen Ausbruch sofort mit Sachlichkeit oder Rückzug reagieren`, warum: `Verstärkt die Angst vor Trennung, die genau die Eskalation ausgelöst hat`, alternative: `Kurz präsent bleiben, auch schweigend, bevor man zur Sachebene zurückkehrt` },
      { trigger: `Vergleiche mit anderen ziehen, die "ruhiger" oder "einfacher" sind`, warum: `Bestätigt die innere Neid-Dynamik und das Gefühl, grundsätzlich falsch zu sein`, alternative: `Die eigene Art der SX4 würdigen, ohne Vergleichsrahmen` },
      { trigger: `Nach einem Streit sofort zur Tagesordnung übergehen, ohne die emotionale Tiefe anzuerkennen`, warum: `Wird als Bagatellisierung von etwas erlebt, das für die SX4 existenziell war`, alternative: `Kurz zurückkommen und benennen, was emotional wichtig war, bevor man weitergeht` },
    ],
    fuehrung: {
      titel: "Aus der Führungspraxis: wenn Intensität zur Reaktion wird",
      text: `In unserem Buch <em>Führung mit Fundament</em> (das ich gemeinsam mit meinem Sohn David L. Rathmer geschrieben habe) beschreiben wir eine Typ-4-Führungskraft, die nach einer Kritik keine emotionale E-Mail schreibt, sondern spazieren geht und erst am nächsten Tag ruhig und sachlich antwortet. Der Weg dorthin: Fakten prüfen statt Interpretationen glauben, den Körper spüren – Füße, Atem –, nicht alles als bedeutsam werten, Struktur als Halt nutzen und trotz innerer Unklarheit handeln.<br><br>Für die SX4 heißt das übersetzt: Boden ist wichtiger als Intensität, Struktur ermöglicht Freiheit. Die erste Reaktion muss nicht die letzte sein – eine Pause zwischen Gefühl und Ausdruck schafft Raum, in dem echte statt reaktiver Kommunikation entstehen kann.`,
      hinweis: `Im Buch beschreiben wir diesen Fall auf Ebene des Grundtyps 4, nicht subtypspezifisch. Die sexuelle Färbung – die Intensität zeigt sich unmittelbar und direkt im Kontakt, statt sich zu einer Sinnfrage im ganzen System auszuweiten – ist eine Ergänzung auf Basis der übrigen Quellen, kein wörtliches Zitat.`,
    },
    beziehung: {
      titel: `Beziehungsrisiko & heilende Bewegung`,
      risiko: `Die Intensität kann den Partner überfordern oder erschöpfen – jede Meinungsverschiedenheit droht, existenziell zu werden, weil die eigentliche Angst vor Trennung mitschwingt.`,
      leitfragen: `Fühle ich das wirklich so stark – oder brauche ich die Intensität, um sicherzugehen, gesehen zu werden?`,
      hilfreich: `Eine bewusste Pause zwischen Gefühl und Ausdruck einbauen – und üben, dass auch ruhige, unspektakuläre Nähe echt und tragfähig sein kann.`,
    },
    pairing: [
      { partner: "SE1", dynamik: "Prinzip vs. Sehnsucht", gefahr: "Strenge gegen Ideal", hilfreich: "Balance zwischen Ordnung und Gefühl" },
      { partner: "SO1", dynamik: "Rolle × Exklusivität (Tiefe)", gefahr: "Pflichtgefühl vs. Drama", hilfreich: "Tiefe dosieren, Pflicht nicht verabsolutieren" },
      { partner: "SX1", dynamik: "Intensität × Sehnsucht", gefahr: "Überflutung, Drama", hilfreich: "Klare Grenzen, emotionale Erdung" },
      { partner: "SE2", dynamik: "Fürsorge trifft Intensität in der Tiefe", gefahr: "Verschmelzungswunsch, Überforderung", hilfreich: "Eigene Grenze klar benennen" },
      { partner: "SO2", dynamik: "Gemeinschaft trifft Sehnsucht nach Exklusivität", gefahr: "Unausgeglichene Aufmerksamkeit – Gruppe vs. Zweisamkeit", hilfreich: "Zeiträume klar vereinbaren, um Balance zu halten" },
      { partner: "SX2", dynamik: "Zwei Intensitäten", gefahr: "Drama und Abhängigkeit", hilfreich: "Rückzug als Pausenrahmen vereinbaren" },
      { partner: "SE3", dynamik: "Zielorientierung mit Leidenschaft", gefahr: "Drama vs. Fassade", hilfreich: "Gefühle benennen, nicht nur zeigen" },
      { partner: "SO3", dynamik: "Wirkung nach außen trifft intensive Exklusivität", gefahr: "Öffentlichkeit vs. Rückzug kollidieren", hilfreich: "Zeiten für Bühne und Zeiten für Tiefe klar trennen" },
      { partner: "SX3", dynamik: "Leidenschaft × Sehnsucht", gefahr: "Melodramatik", hilfreich: "Bodenhaftung einbauen" },
      { partner: "SE4", dynamik: "Stabilität vs. Intensität", gefahr: "SE4 überfordert, SX4 gelangweilt von Routine", hilfreich: "Sicherheit als Basis für leidenschaftliche Momente" },
      { partner: "SO4", dynamik: "Intensität und Exklusivität", gefahr: "Dramatische Schwankungen", hilfreich: "Zeiten von Ruhe bewusst einplanen" },
      { partner: "SX4", dynamik: "Intensität trifft Intensität", gefahr: "Dramatisierung", hilfreich: "Pausen einplanen" },
      { partner: "SE5", dynamik: "Gefühl vs. Rückzug", gefahr: "Kältegefühl", hilfreich: "Balance von Nähe und Distanz" },
      { partner: "SO5", dynamik: "Tiefe vs. Zurückhaltung", gefahr: "Unausgesprochene Spannungen", hilfreich: "Vertrauen wächst langsam, Offenheit üben" },
      { partner: "SX5", dynamik: "Exklusivität vs. Abgrenzung", gefahr: "Rückzugsschleifen", hilfreich: "Raum geben und nehmen" },
      { partner: "SE6", dynamik: "Intensität vs. Zweifel", gefahr: "Misstrauen", hilfreich: "Sicherheit aktiv bestätigen" },
      { partner: "SO6", dynamik: "Sehnsucht vs. Absicherung", gefahr: "Überforderung", hilfreich: "Verbindliche Zusagen machen" },
      { partner: "SX6", dynamik: "Dramatik vs. Skepsis", gefahr: "Eskalation", hilfreich: "Ängste benennen statt testen" },
      { partner: "SE7", dynamik: "Tiefe vs. Ablenkung", gefahr: "Enttäuschung", hilfreich: "Ergänzung von Ernst und Leichtigkeit" },
      { partner: "SO7", dynamik: "Intensität vs. Vielfalt", gefahr: "Zerrissenheit", hilfreich: "Inspiration durch Gegensätze, gemeinsame Projekte" },
      { partner: "SX7", dynamik: "Leidenschaft vs. Abenteuer", gefahr: "Unruhe", hilfreich: "Klarheit über Grenzen" },
      { partner: "SE8", dynamik: "Tiefe vs. Macht", gefahr: "Dominanzkämpfe", hilfreich: "Leidenschaft mit Stärke, Grenzen respektieren" },
      { partner: "SO8", dynamik: "Gefühl vs. Kontrolle", gefahr: "Manipulationsverdacht", hilfreich: "Schutz durch Stärke, ehrlich bleiben" },
      { partner: "SX8", dynamik: "Intensität vs. Intensität", gefahr: "Machtspiele", hilfreich: "Verschmelzung in Stärke, Macht teilen" },
      { partner: "SE9", dynamik: "Gefühlstiefe vs. Harmoniebedürfnis", gefahr: "Verdrängung", hilfreich: "Sanfte Balance, Konflikte ansprechen" },
      { partner: "SO9", dynamik: "Sehnsucht vs. Anpassung", gefahr: "Unsichtbarkeit", hilfreich: "Geborgene Nähe, eigene Stimme nutzen" },
      { partner: "SX9", dynamik: "Intensität vs. Verschmelzung", gefahr: "Verlust der Eigenständigkeit", hilfreich: "Tiefe Geborgenheit, Eigenräume sichern" },
    ],
    kurzfassung: `Sei ganz präsent in intensiven Momenten, nicht nur sachlich. Nimm ihre Gefühle als real, auch wenn sie groß wirken, statt sie zu relativieren. Würdige ihren kreativen Ausdruck aktiv – er ist ihr Weg, Intensität in etwas Bleibendes zu verwandeln.`,
  },
  SE5: {
    tier: "Eule",
    erkennung: `Die selbsterhaltende Fünf schützt ihre Energie so konsequent, wie andere ihren Besitz schützen: Sie zieht sich zurück, beobachtet, sammelt Wissen wie Vorräte – nicht aus Geiz, sondern aus dem Wunsch, unabhängig zu bleiben. In meinem Buch <em>Enneagramm Zoo</em> beschreibe ich das Bild der <strong>Eule</strong>, die in ihrer Baumhöhle mit dicker Brille im Lexikon vertieft sitzt – Stille und Konzentration umgeben sie, Wissen wird zum Schutzraum. Für sie bedeutet Nähe nicht Wärme, sondern das Risiko, ausgesogen zu werden.<br><br>Anders als die soziale oder sexuelle Fünf zeigt die SE5 ihren Rückzug körperlich und alltäglich: reduzierte Bedürfnisse, ein geschützter Raum, minimaler Energieverbrauch. Wer das versteht, liest ihre Distanz nicht als Desinteresse, sondern als Selbstschutz eines Menschen, der glaubt, seine Ressourcen könnten jederzeit zur Neige gehen – und der, wenn er Vertrauen fasst, seine Klugheit in leisen, präzisen Worten teilt.`,
    wunde: {
      titel: "Die Wunde dahinter",
      text: `Dahinter liegt die <strong>Wunde des Mangels</strong>: das tiefe Gefühl "Ich habe nicht genug" – nicht genug Kraft, Energie, Wissen oder Kompetenz, um den Anforderungen des Lebens gewachsen zu sein. Bei der SE5 ist dieser Mangel am stillsten und am tiefsten vergraben. Der Glaubenssatz: "Wenn ich mich zeige oder gebe, werde ich leer" – darunter die Überzeugung, dass die eigenen Ressourcen begrenzt sind und das Leben mehr abzieht, als es je regenerieren kann. Die Leidenschaft Geiz zeigt sich bei der SE5 als vollständige Selbstgenügsamkeit: Rückzug wird zur Lebensform, nicht nur zur Strategie. Wer das versteht, liest ihr Zurückhalten nicht als Kälte, sondern als den Versuch, einen inneren Vorrat zu bewahren, der sich schon zu oft erschöpft angefühlt hat.`,
    },
    fluegel: {
      titel: "Flügel-Nuance: SE5w4 und SE5w6",
      w1: { code: "SE5w4", route: "beruehmte-franz-kafka", name: "Franz Kafka", text: `der Rückzug bekommt eine introspektivere, melancholischere Note – Wissen und Beobachtung dienen auch dem Ausdruck einer inneren, oft schmerzhaften Einzigartigkeit. Reagiert gut auf Raum für Ambivalenz und Tiefe, schlecht auf forsche, oberflächliche Kontaktaufnahme.` },
      w2: { code: "SE5w6", route: "beruehmte-charles-darwin", name: "Charles Darwin", text: `der Rückzug wird systematischer, mit einem Hang zu methodischer, langfristiger Absicherung verbunden – Wissen soll auch verlässlich und überprüfbar sein. Reagiert gut auf klare, verbindliche Absprachen, schlecht auf Spontaneität ohne Vorlauf.` },
    },
    stressWachstum: {
      stress: `Unter Stress bewegt sich die SE5 Richtung <strong>Typ 7</strong>: Aus ruhiger Zurückgezogenheit wird plötzlich fahrige Zerstreuung, sprunghafte Gedanken, das Gefühl, nirgends mehr Ruhe zu finden. Erkennst du dieses Muster, ist das ein Signal für erhöhten inneren Druck – kein guter Moment für weitere Anforderungen, ein guter Moment für geschützten Rückzugsraum ohne Erwartungen.`,
      wachstum: `Im Wachstum bewegt sie sich Richtung <strong>Typ 8</strong>: präsenter, handlungsfähiger, direkter – der Rückzug bleibt möglich, verliert aber die Angst, weil ein stabileres Vertrauen in die eigene Kraft entsteht.`,
    },
    ankommt: [
      `<strong>Privatheit und Rückzugsräume respektieren, ohne sie zu werten.</strong> Die SE5 lädt niemanden ungefragt in ihren geschützten Raum – wer das akzeptiert statt zu drängen, gewinnt eher Vertrauen als jeder gute Vorsatz.`,
      `<strong>Zeit geben, bevor eine Antwort erwartet wird.</strong> Spontane emotionale Reaktionen sind selten ihre Stärke – Vorlauf und die Möglichkeit, sich zurückzuziehen und nachzudenken, ermöglichen tiefere Antworten.`,
      `<strong>Ihr Wissen aktiv würdigen, auch wenn es zurückhaltend geteilt wird.</strong> Die SE5 teilt selten ungefragt – wer echtes Interesse zeigt und geduldig zuhört, bekommt oft mehr Tiefe, als erwartet.`,
    ],
    trigger: [
      { trigger: `Unangemeldet in ihren Rückzugsraum eindringen – zeitlich oder emotional`, warum: `Wird als Angriff auf die letzte Ressource erlebt, die noch geschützt scheint`, alternative: `Vorher ankündigen und um Erlaubnis fragen, auch bei scheinbar kleinen Dingen` },
      { trigger: `Sofortige emotionale Reaktionen einfordern`, warum: `Die SE5 braucht Zeit, um Gefühle zu verarbeiten – Druck verstärkt nur den Rückzug`, alternative: `Raum und Zeit geben, mit der klaren Zusicherung, dass die Antwort später kommen darf` },
      { trigger: `Ihre Zurückgezogenheit als Ablehnung oder Desinteresse deuten`, warum: `Verkennt, dass Rückzug für die SE5 der primäre Weg ist, mit Überforderung umzugehen`, alternative: `Direkt nachfragen: "Brauchst du gerade Raum, oder ist etwas anderes los?"` },
      { trigger: `Wissen oder Kompetenz der SE5 öffentlich infrage stellen`, warum: `Trifft die tiefste Angst, nicht genug zu wissen oder zu können, um den Anforderungen gewachsen zu sein`, alternative: `Fragen und Kritik im Vieraugengespräch klären, sachlich und ohne Publikum` },
    ],
    fuehrung: {
      titel: "Aus der Führungspraxis: wenn Analyse Beziehung ersetzt",
      text: `In unserem Buch <em>Führung mit Fundament</em> (das ich gemeinsam mit meinem Sohn David L. Rathmer geschrieben habe) beschreiben wir einen Institutsleiter, der auf den Hinweis "Wir verlieren Zeit, Entscheidungen bleiben liegen" ruhig antwortet: "Wir haben noch nicht alle Daten. Es wäre unseriös, uns bereits jetzt festzulegen." Der Satz ist sachlich gemeint, wirkt im Raum aber wie eine Grenze – aus Widerspruch wird Rückzug im ganzen Team. Der Wendepunkt kommt durch eine Mitarbeiter-Rückmeldung: "Ich weiß, dass er viel weiß. Aber ich weiß nicht, wo ich bei ihm stehe." Erst dieser Satz lässt ihn über Beziehung statt über Prozesse nachdenken.<br><br>Für die SE5 heißt das übersetzt: Verstehen als Sicherheit, Distanz als Energieschutz, Analyse als Kontrolle – das sind echte Stärken, die aber Führung nicht ersetzen können. Ein einfacher, unperfekter Satz wie "Ich merke, dass ich oft auf Abstand bleibe. Das hilft mir, aber vielleicht Ihnen nicht immer" öffnet oft mehr, als jede weitere Analyse.`,
      hinweis: `Im Buch beschreiben wir diesen Fall auf Ebene des Grundtyps 5, nicht subtypspezifisch. Die selbsterhaltende Färbung – der Rückzug zeigt sich als körperlicher, alltäglicher Energieschutz, nicht nur als intellektuelle Distanz – ist eine Ergänzung auf Basis der übrigen Quellen, kein wörtliches Zitat.`,
    },
    beziehung: {
      titel: `Beziehungsrisiko & heilende Bewegung`,
      risiko: `Der konsequente Rückzug kann den Partner das Gefühl geben, nie wirklich hereingelassen zu werden – Nähe bleibt rationiert, solange jede Öffnung als Energieverlust erlebt wird.`,
      leitfragen: `Ziehe ich mich zurück, weil ich wirklich erschöpft bin – oder aus einer alten Angst heraus, dass Nähe mich aussaugen wird?`,
      hilfreich: `Sich zeigen, bevor sich alles sicher anfühlt – und die Erfahrung zulassen, dass geteilte Energie oft nährt, statt nur zu erschöpfen.`,
    },
    pairing: [
      { partner: "SE1", dynamik: "Grenzen sichern vs. Rückzug in Wissen", gefahr: "SE1 drängt, SE5 zieht sich zurück", hilfreich: "Dosierte Nähe, Raum lassen" },
      { partner: "SO1", dynamik: "Rolle × Rückzug (praktisch)", gefahr: "Kälte, Isolation", hilfreich: "Privatheit respektieren, Dialog öffnen" },
      { partner: "SX1", dynamik: "Intensität vs. Rückzug", gefahr: "Nähe-Distanz-Spirale", hilfreich: "Nähe dosieren, Freiräume achten" },
      { partner: "SE2", dynamik: "Helfende Fürsorge trifft Rückzug ins Wissen", gefahr: "Vereinnahmung vs. Rückzug", hilfreich: "Nähe dosiert anbieten" },
      { partner: "SO2", dynamik: "Gemeinschaftssinn trifft Rückzug", gefahr: "SO2 fühlt sich vernachlässigt, SE5 überfordert von Nähe", hilfreich: "Nähe dosieren, Rückzugszeiten respektieren" },
      { partner: "SX2", dynamik: "Nähe vs. Rückzug", gefahr: "Vereinnahmung trifft Distanz", hilfreich: "Wissen trifft Wärme" },
      { partner: "SE3", dynamik: "Tatkraft mit Analyse", gefahr: "Fünf fühlt sich überfahren", hilfreich: "Tempo anpassen, Raum lassen" },
      { partner: "SO3", dynamik: "Sichtbarkeit vs. Rückzug ins Wissen", gefahr: "Entfremdung; Fünf fühlt sich überfahren, Drei unverstanden", hilfreich: "Rückzugszeiten respektieren und Ergebnisse gemeinsam präsentieren" },
      { partner: "SX3", dynamik: "Intensität + Rückzug", gefahr: "Überforderung des Fünfers", hilfreich: "Dosierte Begegnungen vereinbaren" },
      { partner: "SE4", dynamik: "Rückzug + Rückzug", gefahr: "Vereinzelung, Isolation", hilfreich: "Geplante Begegnungszeiten vereinbaren" },
      { partner: "SO4", dynamik: "Gefühl trifft auf Distanz", gefahr: "Rückzug als Kränkung erlebt", hilfreich: "Klare Balance von Nähe und Rückzug besprechen" },
      { partner: "SX4", dynamik: "Gefühl vs. Rückzug", gefahr: "Kältegefühl", hilfreich: "Balance von Nähe und Distanz" },
      { partner: "SE5", dynamik: "Rückzug trifft Rückzug", gefahr: "Distanz wird Isolation", hilfreich: "Regelmäßige Austauschrituale" },
      { partner: "SO5", dynamik: "Wissen vs. Netzwerk", gefahr: "Abwertung der sozialen Seite", hilfreich: "Balance aus Tiefe und Weite, Wissen teilen, nicht horten" },
      { partner: "SX5", dynamik: "Distanz vs. Intensität", gefahr: "Nähe wirkt überfordernd", hilfreich: "Tiefe Begegnung, Tempo offen besprechen" },
      { partner: "SE6", dynamik: "Analyse vs. Sicherheit", gefahr: "Misstrauen verstärkt Grübeln", hilfreich: "Fakten bündeln, dann entscheiden" },
      { partner: "SO6", dynamik: "Rückzug vs. Loyalität", gefahr: "Abhängigkeit oder Skepsis", hilfreich: "Sorgen früh ansprechen" },
      { partner: "SX6", dynamik: "Distanz vs. Bindung", gefahr: "Vereinnahmung oder Flucht", hilfreich: "Grenzen klar markieren" },
      { partner: "SE7", dynamik: "Rückzug vs. Vielfalt", gefahr: "Konflikt aus Tempo und Tiefe", hilfreich: "Vielfalt mit Ruhe kombinieren" },
      { partner: "SO7", dynamik: "Wissen vs. Abenteuer", gefahr: "Vernachlässigung des Tiefgangs", hilfreich: "Lernen und Erleben abwechseln" },
      { partner: "SX7", dynamik: "Distanz vs. Intensität", gefahr: "Überforderung durch Wechsel", hilfreich: "Zeitpuffer einplanen" },
      { partner: "SE8", dynamik: "Ruhe vs. Kraft", gefahr: "Dominanz überrollt Rückzug", hilfreich: "Eigene Grenzen klar halten" },
      { partner: "SO8", dynamik: "Rückzug vs. Einfluss", gefahr: "Machtkämpfe um Sichtbarkeit", hilfreich: "Balance von Präsenz und Tiefe, Machtfragen benennen" },
      { partner: "SX8", dynamik: "Distanz vs. Intensität", gefahr: "Nähe wird als Bedrohung erlebt", hilfreich: "Vertrauen langsam aufbauen" },
      { partner: "SE9", dynamik: "Ruhe trifft Ruhe", gefahr: "Stillstand", hilfreich: "Ziele konkretisieren" },
      { partner: "SO9", dynamik: "Rückzug vs. Harmonie", gefahr: "Konflikte werden vermieden", hilfreich: "Unterschiede klar aussprechen" },
      { partner: "SX9", dynamik: "Distanz vs. Verschmelzung", gefahr: "Selbstverlust oder Rückzug", hilfreich: "Eigenständigkeit wahren" },
    ],
    kurzfassung: `Respektiere ihre Privatheit, ohne sie zu werten – und dräng nicht in ihren Rückzugsraum. Gib ihr Zeit vor einer Antwort, statt sofortige Reaktion zu erwarten. Würdige ihr Wissen aktiv, auch wenn es nur zurückhaltend geteilt wird.`,
  },
  SO5: {
    tier: "Oktopus",
    erkennung: `Die soziale Fünf will dazugehören, ohne sich zu verlieren: Sie sucht Sicherheit nicht im praktischen Rückzug wie die SE5, sondern über Wissen, Systeme und Zusammenhänge, die ihr einen legitimen Platz in der Gruppe verschaffen. In meinem Buch <em>Enneagramm Zoo</em> beschreibe ich das Bild des <strong>Oktopus</strong>, der mit allen acht Armen Bücher jongliert – Wissen wird zum Spiel, Bewegung zum Denken. Er tastet die Welt vorsichtig, intelligent, kontrolliert ab und beobachtet genau, wer Energie gibt und wer sie zieht.<br><br>Anders als die selbsterhaltende Fünf, die sich körperlich zurückzieht, bleibt die SO5 im sozialen Feld präsent – aber auf Distanz, wie unter Wasser: ruhig, fast unsichtbar, mit wachem Gespür für jede Strömung. Wer das versteht, liest ihre analytische Zurückhaltung nicht als Desinteresse, sondern als den Versuch, sich über Verstehen einen sicheren Platz in der Gemeinschaft zu verdienen.`,
    wunde: {
      titel: "Die Wunde dahinter",
      text: `Dahinter liegt die <strong>Wunde des Mangels</strong>: das tiefe Gefühl "Ich habe nicht genug" – nicht genug Wissen, Kompetenz oder Überblick, um wirklich teilhaben zu dürfen. Das soziale Feld erscheint der SO5 als Ort, an dem man nur bestehen kann, wenn man mehr weiß als andere. Der Glaubenssatz: "Ich muss erst genug wissen und verstehen, bevor ich dazugehören darf" – darunter die Überzeugung, dass Nähe nur über intellektuelle Brücken entstehen kann. Die Leidenschaft Geiz zeigt sich bei der SO5 als intellektueller Geiz: Sicherheit wird über Wissen und Systeme aufgebaut, aus sicherer Distanz beobachtet, ohne emotional wirklich präsent zu werden. Wer das versteht, liest ihr Zurückhalten von Gefühlen nicht als Kälte, sondern als die Angst, ohne genug Wissen nicht dazuzugehören.`,
    },
    fluegel: {
      titel: "Flügel-Nuance: SO5w4 und SO5w6",
      w1: { code: "SO5w4", route: "beruehmte-albert-einstein", name: "Albert Einstein", text: `die Distanz bekommt eine introspektivere, originellere Note – Wissen soll auch etwas Eigenes, Bedeutsames ausdrücken, nicht nur Zugehörigkeit sichern. Reagiert gut auf Anerkennung für die eigene, unverwechselbare Denkweise, weniger gut auf konventionellen Erwartungsdruck.` },
      w2: { code: "SO5w6", route: "beruehmte-guenther-jauch", name: "Günther Jauch", text: `die Distanz wird systematischer, mit einem Hang zu verlässlichen Strukturen und langfristiger Planung verbunden – Wissen soll auch praktisch verwertbar und absicherbar sein. Reagiert gut auf klare, verbindliche Zusagen, schlecht auf vage, unverbindliche Absprachen.` },
    },
    stressWachstum: {
      stress: `Unter Stress bewegt sich die SO5 Richtung <strong>Typ 7</strong>: Aus konzentrierter Analyse wird plötzlich fahrige Zerstreuung, sprunghaftes Denken zwischen zu vielen Themen. Erkennst du dieses Muster, ist das ein Signal für erhöhten inneren Druck – kein guter Moment für weitere Informationsflut, ein guter Moment für ruhigen, klar begrenzten Austausch.`,
      wachstum: `Im Wachstum bewegt sie sich Richtung <strong>Typ 8</strong>: präsenter, handlungsfähiger, direkter – die analytische Distanz bleibt möglich, verliert aber die Angst, weil ein stabileres Vertrauen in die eigene Kompetenz entsteht.`,
    },
    ankommt: [
      `<strong>Ihr Wissen aktiv würdigen, nicht nur passiv entgegennehmen.</strong> Die SO5 investiert oft unsichtbare Energie ins Verstehen von Zusammenhängen – das konkret anzuerkennen, wirkt mehr als allgemeine Zustimmung.`,
      `<strong>Klar begrenzten Rahmen für Austausch anbieten.</strong> Ein Gespräch mit erkennbarem Anfang und Ende ist ihr lieber als offene, endlose soziale Verpflichtung.`,
      `<strong>Nach Gefühlen fragen, nicht nur nach Analysen.</strong> Die SO5 wird selten von sich aus über Emotionales sprechen – aktives, geduldiges Nachfragen öffnet oft mehr, als erwartet.`,
    ],
    trigger: [
      { trigger: `Ihr Wissen oder ihre Kompetenz öffentlich infrage stellen`, warum: `Trifft die tiefste Angst, nicht genug zu wissen, um legitim dazuzugehören`, alternative: `Fragen und Widerspruch sachlich und im Vieraugengespräch klären` },
      { trigger: `Spontane, unangekündigte soziale Verpflichtungen einfordern`, warum: `Überfordert ihre begrenzte soziale Energie und verstärkt den Rückzug`, alternative: `Vorlauf geben und klare zeitliche Grenzen für den Austausch anbieten` },
      { trigger: `Ihre analytische Distanz als Gefühllosigkeit deuten`, warum: `Übersieht, dass die SO5 Gefühle oft genauso intensiv erlebt, sie aber seltener zeigt`, alternative: `Direkt und ohne Druck nach dem Gefühl hinter der Analyse fragen` },
      { trigger: `Rückzug nach einem kontroversen Gespräch als Desinteresse werten`, warum: `Verkennt, dass Rückzug meist Überforderung bedeutet, nicht fehlendes Engagement`, alternative: `Nach einer angemessenen Pause aktiv, aber ohne Druck wieder Kontakt aufnehmen` },
    ],
    fuehrung: {
      titel: "Aus der Führungspraxis: wenn Rückzug als Desinteresse missverstanden wird",
      text: `In unserem Buch <em>Führung mit Fundament</em> (das ich gemeinsam mit meinem Sohn David L. Rathmer geschrieben habe) beschreiben wir eine Typ-5-Expertin, die sich nach einem kontroversen Meeting vollständig zurückzieht – wochenlang bleiben Rückmeldungen aus, Entscheidungen werden vertagt. Das Team interpretiert den Rückzug als Desinteresse, obwohl es sich um Überforderung handelt. Was hier hilft: Raum geben, aber zeitlich begrenzen, klare und überschaubare Fragen stellen, Verbindlichkeit herstellen.<br><br>Für die SO5 heißt das übersetzt: Die Einsicht, dass Kontakt trotz Unsicherheit notwendig und zumutbar ist. Ein reifes System braucht nicht nur ihre brillante Analyse, sondern auch menschliche Präsenz – Kompetenz allein erzeugt hohe Qualität, aber geringe Bindung.`,
      hinweis: `Im Buch beschreiben wir diesen Fall auf Ebene des Grundtyps 5, nicht subtypspezifisch. Die soziale Färbung – der Rückzug geschieht innerhalb des sozialen Feldes, nicht als vollständige Distanz davon – ist eine Ergänzung auf Basis der übrigen Quellen, kein wörtliches Zitat.`,
    },
    beziehung: {
      titel: `Beziehungsrisiko & heilende Bewegung`,
      risiko: `Die analytische Distanz kann den Partner das Gefühl geben, nie wirklich emotional erreicht zu werden – Nähe bleibt intellektuell vermittelt, solange echte Gefühlsäußerung als riskant erlebt wird.`,
      leitfragen: `Verstehe ich, um zu verstehen – oder um mir Zugehörigkeit zu verdienen, die ich sonst nicht für sicher halte?`,
      hilfreich: `Wissen teilen, auch wenn noch nicht alles vollständig durchdacht ist – und erfahren, dass echte Verbindung nicht aus Überblick entsteht, sondern aus lebendiger Teilnahme.`,
    },
    pairing: [
      { partner: "SE1", dynamik: "Ordnung vs. Distanz mit Beobachtung", gefahr: "SO5 bleibt außen vor, SE1 fühlt sich allein", hilfreich: "Verbindliche, kleine Absprachen" },
      { partner: "SO1", dynamik: "Rolle × Rolle (Denken)", gefahr: "Starre Regeln, Distanz", hilfreich: "Regeln erklären, Wärme zeigen" },
      { partner: "SX1", dynamik: "Intensität vs. Beobachtung", gefahr: "Missverständnis Nähe vs. Distanz", hilfreich: "Nähe klar ansprechen, nicht erzwingen" },
      { partner: "SE2", dynamik: "Fürsorge trifft soziale Beobachtung", gefahr: "Distanz vs. Hilfsbereitschaft", hilfreich: "Kombination aus kluger Analyse und praktischer Hilfe" },
      { partner: "SO2", dynamik: "Gemeinschaft trifft auf distanzierte soziale Analyse", gefahr: "SO2 empfindet Kühle, SO5 fühlt sich vereinnahmt", hilfreich: "Klarheit im sozialen Feld, reflektierte Verbindungen" },
      { partner: "SX2", dynamik: "Bindung trifft Abstraktion", gefahr: "SX2 fühlt sich übersehen, SO5 überfordert", hilfreich: "Kontaktzeit terminieren und begrenzen" },
      { partner: "SE3", dynamik: "Leistung mit Systemdenken", gefahr: "Drei zu schnell, Fünf zu zurückhaltend", hilfreich: "Drei teilt, Fünf öffnet sich" },
      { partner: "SO3", dynamik: "Öffentliche Wirkung + distanzierte Beobachtung", gefahr: "Zu viel Kopf, zu wenig Herz", hilfreich: "Gefühlsebene regelmäßig einladen (kurzes Check-in)" },
      { partner: "SX3", dynamik: "Intensität + Analyse", gefahr: "Zu viel Kopf gegen zu viel Herz", hilfreich: "Kopf und Bauch gleichwertig zulassen" },
      { partner: "SE4", dynamik: "SE4 privat, SO5 sucht Rolle im Gefüge", gefahr: "SE4 fühlt sich verlassen, SO5 distanziert", hilfreich: "Privates und Soziales bewusst austauschen" },
      { partner: "SO4", dynamik: "Resonanzbedürfnis vs. Zurückhaltung", gefahr: "Unsichtbarkeit als Ablehnung gedeutet", hilfreich: "Kleine Zeichen der Verbundenheit einüben" },
      { partner: "SX4", dynamik: "Tiefe vs. Zurückhaltung", gefahr: "Unausgesprochene Spannungen", hilfreich: "Vertrauen wächst langsam, Offenheit üben" },
      { partner: "SE5", dynamik: "Wissen vs. Netzwerk", gefahr: "Abwertung der sozialen Seite", hilfreich: "Balance aus Tiefe und Weite, Wissen teilen, nicht horten" },
      { partner: "SO5", dynamik: "Gemeinschaft prüft Gemeinschaft", gefahr: "Zu viel Zurückhaltung", hilfreich: "Klare Worte fördern Nähe" },
      { partner: "SX5", dynamik: "Gemeinschaft trifft Rückzug", gefahr: "Unsicherheit in Intimität", hilfreich: "Nähe Schritt für Schritt zulassen" },
      { partner: "SE6", dynamik: "Gemeinschaft sucht Sicherheit", gefahr: "Gegenseitige Skepsis", hilfreich: "Absprachen klar halten" },
      { partner: "SO6", dynamik: "Gemeinschaft verstärkt Loyalität", gefahr: "Angstspirale", hilfreich: "Vertrauen aktiv betonen" },
      { partner: "SX6", dynamik: "Gemeinschaft trifft Bindungssuche", gefahr: "Abhängigkeit", hilfreich: "Balance aus Nähe und Abstand" },
      { partner: "SE7", dynamik: "Gemeinschaft vs. Möglichkeiten", gefahr: "Flucht vor Tiefe", hilfreich: "Spaß planen statt spontan" },
      { partner: "SO7", dynamik: "Gemeinschaft und Bühne", gefahr: "Überforderung", hilfreich: "Pausen einplanen" },
      { partner: "SX7", dynamik: "Gemeinschaft trifft Begeisterung", gefahr: "Unruhe", hilfreich: "Einen Fokus setzen" },
      { partner: "SE8", dynamik: "Gemeinschaft vs. Kontrolle", gefahr: "Machtgefälle", hilfreich: "Respekt klären" },
      { partner: "SO8", dynamik: "Gemeinschaft + Dominanz", gefahr: "Anpassungsdruck", hilfreich: "Eigene Stimme nutzen" },
      { partner: "SX8", dynamik: "Gemeinschaft vs. Intensität", gefahr: "Vereinnahmung", hilfreich: "Tiefe Verlässlichkeit, Grenzen achten" },
      { partner: "SE9", dynamik: "Gemeinschaft und Harmonie", gefahr: "Konfliktmeidung", hilfreich: "Stabiles Miteinander, Bedürfnisse klar aussprechen" },
      { partner: "SO9", dynamik: "Gemeinschaft + Anpassung", gefahr: "Stillstand", hilfreich: "Ruhepol, Initiativen setzen" },
      { partner: "SX9", dynamik: "Gemeinschaft vs. Verschmelzung", gefahr: "Verlust von Eigenständigkeit", hilfreich: "Innige Partnerschaft, eigene Räume pflegen" },
    ],
    kurzfassung: `Würdige ihr Wissen aktiv, statt es nur entgegenzunehmen. Biete klar begrenzten Rahmen für Austausch statt offener sozialer Verpflichtungen. Frag geduldig nach Gefühlen, nicht nur nach Analysen – sie zeigt sie selten von sich aus.`,
  },
  SX5: {
    tier: "Igel",
    erkennung: `Die sexuelle Fünf ist der intensivste, leidenschaftlichste Fünfer: zurückgezogen, aber wenn sie Nähe zulässt, dann ganz. In meinem Buch <em>Enneagramm Zoo</em> beschreibe ich das Bild des <strong>Igels</strong>, der sich bei Gefahr oder emotionaler Überforderung sofort zur Kugel einrollt – geschützt in der sicheren Enge seiner Hülle, und zugleich dort gefangen. Seine Stacheln sind kein Angriff, sondern Schutz vor dem Gefühl, überwältigt zu werden.<br><br>Anders als die selbsterhaltende oder soziale Fünf, deren Rückzug eher praktisch oder intellektuell motiviert ist, sucht die SX5 eine tiefe, exklusive Verschmelzung – oft nur in der Fantasie erlaubt. Wer das versteht, liest ihren ersten Reflex des Rückzugs nicht als Ablehnung, sondern als den Versuch, eine stille Sehnsucht nach Nähe vor der Angst zu schützen, von ihr überwältigt zu werden.`,
    wunde: {
      titel: "Die Wunde dahinter",
      text: `Dahinter liegt die <strong>Wunde des Mangels</strong>: das tiefe Gefühl "Ich habe nicht genug" – nicht genug innere Substanz, um in Nähe bestehen zu können, ohne sich selbst zu verlieren. Die Sehnsucht nach Tiefe ist bei der SX5 real; die Angst, darin zu verschwinden, ebenso. Der Glaubenssatz: "Wenn ich mich wirklich zeige, verliere ich mich – oder werde verletzt" – darunter die Überzeugung, dass intensive Verbindung ein Risiko ist, das sorgfältig geprüft werden muss. Die Leidenschaft Geiz zeigt sich bei der SX5 als kontrollierte Scheu: Tiefe Verbindung wird leidenschaftlich ersehnt und gleichzeitig auf Abstand gehalten. Wer das versteht, liest ihr Schwanken zwischen Annäherung und Rückzug nicht als Unentschlossenheit, sondern als einen echten inneren Konflikt zwischen Sehnsucht und Angst.`,
    },
    fluegel: {
      titel: "Flügel-Nuance: SX5w4 und SX5w6",
      w1: { code: "SX5w4", route: "beruehmte-taylor-swift", name: "Taylor Swift", text: `die Scheu bekommt eine ausdrucksstärkere, künstlerischere Note – Rückzug wird zum kreativen Prozess, aus dem heraus sich später sehr persönlich mitgeteilt wird. Reagiert gut auf Anerkennung für die eigene, unverwechselbare emotionale Tiefe, weniger gut auf oberflächliche, unpersönliche Nähe.` },
      w2: { code: "SX5w6", route: "beruehmte-edward-snowden", name: "Edward Snowden", text: `die Scheu wird prinzipientreuer, mit einem Hang zu klaren, gut durchdachten Positionen verbunden – Nähe soll auch verlässlich und vertrauenswürdig sein. Reagiert gut auf konsequente, verbindliche Zusagen, schlecht auf Beliebigkeit oder Vertrauensbrüche.` },
    },
    stressWachstum: {
      stress: `Unter Stress bewegt sich die SX5 Richtung <strong>Typ 7</strong>: Aus konzentrierter Zurückgezogenheit wird plötzlich fahrige Rastlosigkeit, das Gefühl, nirgends mehr Ruhe zu finden. Erkennst du dieses Muster, ist das ein Signal für erhöhten inneren Druck – kein guter Moment, um weitere Nähe einzufordern, ein guter Moment für geschützten, ungestörten Rückzugsraum.`,
      wachstum: `Im Wachstum bewegt sie sich Richtung <strong>Typ 8</strong>: präsenter, direkter, handlungsfähiger – die Intensität bleibt, verliert aber die Angst vor Überwältigung, weil ein stabileres Vertrauen in die eigene Kraft entsteht.`,
    },
    ankommt: [
      `<strong>Nähe in kleinen, sicheren Schritten anbieten.</strong> Die SX5 öffnet sich selten auf einmal – wer Tempo und Nähe gemeinsam bestimmen lässt, gewinnt eher Vertrauen als jedes Drängen.`,
      `<strong>Ihre Grenzen respektieren, ohne sie als Ablehnung zu deuten.</strong> Rückzug ist für die SX5 der erste Reflex bei Überforderung, kein Statement gegen die Beziehung.`,
      `<strong>Ihre Intensität würdigen, wenn sie sich zeigt.</strong> Wenn die SX5 sich öffnet, ist das ein bedeutsamer Schritt – konkrete Anerkennung dafür stärkt das Vertrauen, weiter zu gehen.`,
    ],
    trigger: [
      { trigger: `Zu schnell zu viel Nähe einfordern`, warum: `Löst den Reflex aus, sich sofort zur Kugel einzurollen – aus Schutz, nicht aus Ablehnung`, alternative: `Nähe in kleinen, überschaubaren Dosen anbieten und Tempo gemeinsam bestimmen` },
      { trigger: `Ihre Zurückgezogenheit als Desinteresse oder Kälte deuten`, warum: `Verkennt, dass hinter dem Rückzug oft eine intensive, aber geschützte Sehnsucht steckt`, alternative: `Direkt und ohne Druck fragen: "Brauchst du gerade Raum, oder ist dir etwas zu viel geworden?"` },
      { trigger: `Verletzlichkeit, die die SX5 zeigt, beiläufig übergehen`, warum: `Ein gezeigtes Gefühl ist für die SX5 ein bedeutsamer Vertrauensschritt – Übergehen wirkt wie Zurückweisung`, alternative: `Das Gezeigte bewusst würdigen, bevor das Gespräch weitergeht` },
      { trigger: `Bei einem Konflikt sofort auf Klärung drängen`, warum: `Überfordert die SX5, die Zeit braucht, um innere Reaktionen zu sortieren, bevor sie sprechen kann`, alternative: `Eine Pause anbieten, mit der klaren Zusage, später wieder ins Gespräch zu kommen` },
    ],
    fuehrung: {
      titel: "Aus der Führungspraxis: wenn Analyse das Handeln verdrängt",
      text: `In unserem Buch <em>Führung mit Fundament</em> (das ich gemeinsam mit meinem Sohn David L. Rathmer geschrieben habe) beschreiben wir einen Geschäftsführer, der den Markt monatelang analysiert, während Wettbewerber längst Fakten schaffen. In Komplexität entsteht Erkenntnis nicht im Kopf allein, sondern im lebendigen Prozess – iterative Schritte und Kontakt halten sind hier wichtiger als vollständige Gewissheit vor dem ersten Schritt.<br><br>Für die SX5 heißt das übersetzt: Die tiefe, gründliche Auseinandersetzung mit einer Sache oder einem Menschen ist eine echte Stärke – hilfreich wird sie erst, wenn sie nicht zum Vorwand wird, sich dem eigentlichen Kontakt oder Handeln länger zu entziehen, als nötig.`,
      hinweis: `Im Buch beschreiben wir diesen Fall auf Ebene des Grundtyps 5, nicht subtypspezifisch. Die sexuelle Färbung – die Zurückhaltung zeigt sich vor allem in der einen, besonders bedeutsamen Beziehung oder Fragestellung, nicht diffus im ganzen Umfeld – ist eine Ergänzung auf Basis der übrigen Quellen, kein wörtliches Zitat.`,
    },
    beziehung: {
      titel: `Beziehungsrisiko & heilende Bewegung`,
      risiko: `Das Schwanken zwischen intensiver Sehnsucht und plötzlichem Rückzug kann den Partner verunsichern – Nähe fühlt sich nie ganz verlässlich an, solange die Angst vor Überwältigung das letzte Wort behält.`,
      leitfragen: `Ziehe ich mich zurück, weil ich wirklich erschöpft bin – oder aus der alten Angst, mich in der Nähe zu verlieren?`,
      hilfreich: `Sich zeigen, auch wenn noch nicht alles sicher ist – und die Erfahrung zulassen, dass Nähe nicht auflöst, sondern trägt.`,
    },
    pairing: [
      { partner: "SE1", dynamik: "Intensität vs. Bedürfnis nach Rückzug", gefahr: "SE1 erpresst Nähe, SX5 überfordert", hilfreich: "Nähe terminieren, Pausen einplanen" },
      { partner: "SO1", dynamik: "Rolle × Exklusives Wissen", gefahr: "Kontrolle vs. Geheimhaltung", hilfreich: "Privates schützen, Intimität langsam aufbauen" },
      { partner: "SX1", dynamik: "Intensität × Distanz", gefahr: "Rückzug + Vereinnahmung", hilfreich: "Balance von Nähe und Eigenraum" },
      { partner: "SE2", dynamik: "Fürsorge trifft exklusive Distanz", gefahr: "Nähebedürfnis kollidiert mit Freiheitsdrang", hilfreich: "Rückzug nicht persönlich nehmen" },
      { partner: "SO2", dynamik: "Gemeinschaftssinn und exklusive Tiefe", gefahr: "Spannungen durch Bedürfnisunterschiede nach Gruppe vs. Rückzug", hilfreich: "Grenzen für Kontaktqualität benennen" },
      { partner: "SX2", dynamik: "Nähebedürfnis vs. Exklusivität im Rückzug", gefahr: "Isolation als Paar", hilfreich: "Verlässliche kleine Oasen der Intimität" },
      { partner: "SE3", dynamik: "Zielorientierung und Exklusivität", gefahr: "Nähe überfordert Fünf, scheue Tiefe überfordert Drei", hilfreich: "Schrittweise Annäherung" },
      { partner: "SO3", dynamik: "Ausstrahlung trifft exklusive, dosierte Nähe", gefahr: "Isolation oder Kontaktabriss", hilfreich: "Verbindliche, kurze Qualitätszeiten festlegen" },
      { partner: "SX3", dynamik: "Intensität × Distanz", gefahr: "Ungleichgewicht Nähe vs. Rückzug", hilfreich: "Geduld als Schlüssel" },
      { partner: "SE4", dynamik: "SE4 sucht Nähe über Alltag, SX5 über exklusive Tiefe", gefahr: "SE4 klammert, SX5 zieht sich zurück", hilfreich: "Alltägliche Sicherheit öffnet Raum für Exklusivität" },
      { partner: "SO4", dynamik: "Intensität vs. Rückzug", gefahr: "Überforderung", hilfreich: "Tiefe durch Ehrlichkeit, langsames Tempo akzeptieren" },
      { partner: "SX4", dynamik: "Exklusivität vs. Abgrenzung", gefahr: "Rückzugsschleifen", hilfreich: "Raum geben und nehmen" },
      { partner: "SE5", dynamik: "Distanz vs. Intensität", gefahr: "Nähe wirkt überfordernd", hilfreich: "Tiefe Begegnung, Tempo offen besprechen" },
      { partner: "SO5", dynamik: "Gemeinschaft trifft Rückzug", gefahr: "Unsicherheit in Intimität", hilfreich: "Nähe Schritt für Schritt zulassen" },
      { partner: "SX5", dynamik: "Rückzug + Exklusivität", gefahr: "Isolation", hilfreich: "Offene Welt einladen" },
      { partner: "SE6", dynamik: "Wissen + Absicherung", gefahr: "Paralyse durch Zweifel", hilfreich: "Entscheidungen klein halten" },
      { partner: "SO6", dynamik: "Distanz + Loyalität", gefahr: "Misstrauen verstärkt Distanz", hilfreich: "Vertrauen benennen" },
      { partner: "SX6", dynamik: "Exklusivität + Prüfung", gefahr: "Überprüfung wird Kontrolle", hilfreich: "Vertrauen üben, nicht prüfen" },
      { partner: "SE7", dynamik: "Rückzug + Möglichkeiten", gefahr: "Nähe-Flucht", hilfreich: "Balance von Rückzug und Spiel" },
      { partner: "SO7", dynamik: "Wissen + Bühne", gefahr: "Ungleichgewicht in Präsenz", hilfreich: "Raum für beide Rollen lassen" },
      { partner: "SX7", dynamik: "Tiefe + Vielfalt", gefahr: "Zerrissenheit", hilfreich: "Fokusfenster vereinbaren" },
      { partner: "SE8", dynamik: "Rückzug + Macht", gefahr: "Dominanz und Schweigen", hilfreich: "Grenzen offenlegen" },
      { partner: "SO8", dynamik: "Wissen + Einfluss", gefahr: "Machtspiel", hilfreich: "Führung mit Substanz, Rollen klären" },
      { partner: "SX8", dynamik: "Distanz + Intensität", gefahr: "Überwältigung", hilfreich: "Tempo anpassen, tiefe Hingabe möglich" },
      { partner: "SE9", dynamik: "Rückzug + Harmonie", gefahr: "Vermeidung", hilfreich: "Themen klar benennen" },
      { partner: "SO9", dynamik: "Wissen + Gemeinschaft", gefahr: "Unsichtbarkeit im Feld", hilfreich: "Sichtbarkeit üben, sanftes Einbinden" },
      { partner: "SX9", dynamik: "Exklusivität + Frieden", gefahr: "Rückzug ins Unsichtbare", hilfreich: "Aktivität dosiert einbauen" },
    ],
    kurzfassung: `Biete Nähe in kleinen, sicheren Schritten an, statt sie einzufordern. Respektiere Rückzug als Schutz, nicht als Ablehnung. Würdige es aktiv, wenn sie sich zeigt – das ist für sie ein bedeutsamer Vertrauensschritt.`,
  },
  SE6: {
    tier: "Kaninchen",
    erkennung: `Die selbsterhaltende Sechs sichert sich nicht durch Gruppenzugehörigkeit wie die SO6 ab, sondern durch praktische Vorsorge: Notfallpläne, Routinen, geprüfte Fluchtwege. In meinem Buch <em>Enneagramm Zoo</em> beschreibe ich das Bild des <strong>Kaninchens</strong>, das mit gespitzten Ohren ängstlich aus dem Bau späht – es wittert frühzeitig mögliche Gefahren. Sein Motto könnte lauten: "Ich bleibe vorsichtig." In seiner Welt ist Vorsicht kein Misstrauen, sondern Lebenskunst.<br><br>Anders als die anderen Sechser-Varianten zeigt sich die Angst der SE6 körperlich und alltagsnah: durchdachte Notfallkoffer, wiederholt geprüfte Türschlösser, Regenmantel bei Sonnenschein. Wer das versteht, liest ihre Übervorsicht nicht als Schwäche, sondern als den ernsthaften Versuch, in einer als unsicher erlebten Welt handlungsfähig zu bleiben – und erkennt hinter der ständigen Alarmbereitschaft ein tiefes Bedürfnis nach Ruhe.`,
    wunde: {
      titel: "Die Wunde dahinter",
      text: `Dahinter liegt die <strong>Wunde des verlorenen Vertrauens</strong>: das Gefühl, dass die innere Gewissheit, vom Leben getragen zu sein, brüchig ist. Bei der SE6 zeigt sich das als tiefes Bedürfnis nach Schutz und die Angst, schutzlos zu sein. Der Glaubenssatz: "Die Welt ist gefährlich, und ich darf nicht allein dastehen" – darunter: "Nur wenn ich verlässliche Verbündete habe und vorsichtig bleibe, bin ich sicher." Die Leidenschaft Angst wendet sich bei der SE6 nach innen: Sie sucht nicht den Kampf, sondern Wärme, Bindung und Verbündete, die Schutz versprechen. Wer das versteht, liest ihr ständiges Prüfen nicht als Kontrollzwang, sondern als den Versuch, sich einer Sicherheit zu vergewissern, die sich nie ganz endgültig anfühlt.`,
    },
    fluegel: {
      titel: "Flügel-Nuance: SE6w5 und SE6w7",
      w1: { code: "SE6w5", route: "beruehmte-sundar-pichai", name: "Sundar Pichai", text: `die Vorsicht bekommt eine analytischere, zurückhaltendere Note – Sicherheit wird über gründliches Verstehen gesucht, weniger über sichtbares Handeln. Reagiert gut auf fundierte, gut durchdachte Informationen, weniger gut auf Druck zu schnellen, unvorbereiteten Entscheidungen.` },
      w2: { code: "SE6w7", route: "beruehmte-woody-allen", name: "Woody Allen", text: `die Vorsicht wird humorvoller und ausdrucksstärker, mit einem Hang, die eigene Sorge sofort in Sprache und Pointen zu übersetzen – Sicherheit entsteht durch das ständige Neuerzählen der eigenen Angst, nicht durch Schweigen. Reagiert gut auf Humor und Gesprächsraum, schlecht auf erzwungene Zurückhaltung.` },
    },
    stressWachstum: {
      stress: `Unter Stress bewegt sich die SE6 Richtung <strong>Typ 3</strong>: Aus vorsichtigem Prüfen wird plötzlich hektischer Aktionismus, das Bedürfnis, durch sichtbare Leistung Sicherheit zu beweisen. Erkennst du dieses Muster, ist das ein Signal für erhöhten inneren Druck – kein guter Moment für weitere Forderungen, ein guter Moment für ruhige, verlässliche Präsenz.`,
      wachstum: `Im Wachstum bewegt sie sich Richtung <strong>Typ 9</strong>: gelassener, vertrauensvoller, weniger grüblerisch – die Vorsicht bleibt möglich, verliert aber die ständige Alarmbereitschaft, weil ein stabileres inneres Vertrauen entsteht.`,
    },
    ankommt: [
      `<strong>Verlässlichkeit durch gehaltene Zusagen zeigen, nicht nur durch Worte.</strong> Die SE6 vertraut Handlungen mehr als Versprechen – jede eingehaltene Kleinigkeit baut Sicherheit auf.`,
      `<strong>Ihre Vorsicht als Fürsorge würdigen, nicht als Übertreibung abtun.</strong> Ihre Notfallpläne und Bedenken kommen oft aus echter Sorge um andere, nicht nur um sich selbst.`,
      `<strong>Transparenz über Pläne und Entscheidungen geben.</strong> Unklarheit erzeugt bei der SE6 mehr Angst als eine unbequeme, aber klare Information.`,
    ],
    trigger: [
      { trigger: `Pläne oder Entscheidungen ohne Vorwarnung plötzlich ändern`, warum: `Löst massive Verunsicherung aus, weil die vertraute Struktur, die Sicherheit gab, plötzlich wegbricht`, alternative: `Änderungen so früh wie möglich ankündigen und Gründe transparent erklären` },
      { trigger: `Ihre Sorgen oder Bedenken pauschal als übertrieben abtun`, warum: `Verstärkt das Gefühl, mit der eigenen Wachsamkeit allein und unverstanden zu sein`, alternative: `Die Sorge ernst nehmen und gemeinsam prüfen, was davon berechtigt ist` },
      { trigger: `Vage, unverbindliche Zusagen machen`, warum: `Erzeugt genau die Unsicherheit, vor der die SE6 sich eigentlich schützen will`, alternative: `Konkret und verbindlich sagen, was zugesagt wird – und es dann auch einhalten` },
      { trigger: `Spontane Risiken ohne Vorbereitung einfordern`, warum: `Überfordert das Bedürfnis nach durchdachter Vorsorge und löst Widerstand oder Rückzug aus`, alternative: `Risiken gemeinsam in kleinen, überschaubaren Schritten angehen` },
    ],
    fuehrung: {
      titel: "Aus der Führungspraxis: wenn Vorsicht das System lähmt",
      text: `In unserem Buch <em>Führung mit Fundament</em> (das ich gemeinsam mit meinem Sohn David L. Rathmer geschrieben habe) beschreiben wir eine Bereichsleiterin, die in einer 48-Stunden-Krise immer weiter nachfragt – "Wie belastbar sind die Zahlen? Was sagt die Rechtsabteilung? Gibt es Erfahrungswerte?" – während ein Kollege drängt: "Wir müssen jetzt entscheiden." Am Ende entscheidet die Geschäftsführung ohne sie. Sie denkt: "Gut, dass ich vorsichtig war" – und übersieht, dass ihre Vorsicht das System gelähmt hat. Der Wendepunkt kommt durch ein anonymes Feedback: "Wir wissen, dass sie es gut meint. Aber wir wissen nie, wann wir entscheiden dürfen."<br><br>Für die SE6 heißt das übersetzt: Zweifel als Schutz, Absicherung als Loyalität, Kontrolle als Sicherheitsgefühl – das sind echte Stärken, die aber Führung nicht ersetzen können. Der Satz "Ich habe nicht alle Antworten, aber ich entscheide jetzt – und stehe dafür ein" kostet sichtbar Überwindung, bringt aber oft mehr Bewegung als jede weitere Prüfung.`,
      hinweis: `Im Buch beschreiben wir diesen Fall auf Ebene des Grundtyps 6, nicht subtypspezifisch. Die selbsterhaltende Färbung – die Absicherung zeigt sich vor allem im konkreten, alltäglichen Vorsorgen, nicht in Gruppenloyalität oder exklusiver Bindung – ist eine Ergänzung auf Basis der übrigen Quellen, kein wörtliches Zitat.`,
    },
    beziehung: {
      titel: `Beziehungsrisiko & heilende Bewegung`,
      risiko: `Die ständige Absicherung kann den Partner unter Kontrolle oder Misstrauen erleben lassen – Nähe wird schwer, solange jede Unsicherheit sofort geprüft und abgesichert werden muss.`,
      leitfragen: `Sichere ich das ab, weil es wirklich nötig ist – oder weil Unsicherheit selbst für mich kaum auszuhalten ist?`,
      hilfreich: `Kleine Risiken bewusst üben, ohne vollständige Absicherung – und erfahren, dass Vertrauen nicht durch Kontrolle entsteht, sondern durch die Erfahrung, auch ohne sie zu bestehen.`,
    },
    pairing: [
      { partner: "SE1", dynamik: "Ordnung vs. Loyalitätsprüfung", gefahr: "SE1 fühlt sich misstraut, SE6 unsicher", hilfreich: "Verbindliche Routinen schaffen" },
      { partner: "SO1", dynamik: "Rolle × Absicherung (praktisch)", gefahr: "Überkontrolle, Misstrauen", hilfreich: "Sicherheit benennen, Vertrauen wagen" },
      { partner: "SX1", dynamik: "Intensität vs. Loyalität", gefahr: "Misstrauen, Überprüfung", hilfreich: "Sicherheit durch Verlässlichkeit zeigen" },
      { partner: "SE2", dynamik: "Helfende Fürsorge trifft Absicherung im Alltag", gefahr: "Überverantwortung und Sorgen", hilfreich: "Verantwortungen fair teilen" },
      { partner: "SO2", dynamik: "Gemeinschaftspflege trifft Sicherheitsbedürfnis", gefahr: "Überanpassung und Unsicherheit verstärken sich", hilfreich: "Vertrauen aktiv fördern, nicht nur kontrollieren" },
      { partner: "SX2", dynamik: "Helfen und Absichern", gefahr: "Überbehütung, gegenseitige Kontrolle", hilfreich: "Verantwortung teilen, nicht einseitig schultern" },
      { partner: "SE3", dynamik: "Antrieb mit Loyalität", gefahr: "Sechs bremst, Drei fühlt sich behindert", hilfreich: "Zweifel ernst nehmen, ohne aufzugeben" },
      { partner: "SO3", dynamik: "Wirkung trifft Sicherheitsbedürfnis", gefahr: "Misstrauen vs. Tempo; Prüfung statt Vertrauen", hilfreich: "Transparenz über Pläne + kleine, gehaltene Zusagen" },
      { partner: "SX3", dynamik: "Intensität + Loyalität", gefahr: "Kontrolle vs. Zweifel", hilfreich: "Stabile, leidenschaftliche Bindung" },
      { partner: "SE4", dynamik: "Beide sicherheitsorientiert, SE4 durch Alltag, SE6 durch Prüfung", gefahr: "Angstverstärkung, misstrauische Routinen", hilfreich: "Vertrauen üben, statt nur Kontrolle" },
      { partner: "SO4", dynamik: "Gefühl vs. Absicherung", gefahr: "Zu viel Skepsis", hilfreich: "Vertrauen durch emotionale Ehrlichkeit" },
      { partner: "SX4", dynamik: "Intensität vs. Zweifel", gefahr: "Misstrauen", hilfreich: "Sicherheit aktiv bestätigen" },
      { partner: "SE5", dynamik: "Analyse vs. Sicherheit", gefahr: "Misstrauen verstärkt Grübeln", hilfreich: "Fakten bündeln, dann entscheiden" },
      { partner: "SO5", dynamik: "Gemeinschaft sucht Sicherheit", gefahr: "Gegenseitige Skepsis", hilfreich: "Absprachen klar halten" },
      { partner: "SX5", dynamik: "Wissen + Absicherung", gefahr: "Paralyse durch Zweifel", hilfreich: "Entscheidungen klein halten" },
      { partner: "SE6", dynamik: "Loyalität trifft Loyalität", gefahr: "Überkontrolle und Misstrauen", hilfreich: "Vertrauen auch ohne ständige Absicherung" },
      { partner: "SO6", dynamik: "Pflichtbewusstsein und Gemeinschaft", gefahr: "Überangepasstheit", hilfreich: "Eigene Bedürfnisse klar äußern" },
      { partner: "SX6", dynamik: "Loyalität und Exklusivität", gefahr: "Vereinnahmung", hilfreich: "Raum für Individualität lassen" },
      { partner: "SE7", dynamik: "Absicherung trifft Optimismus", gefahr: "Misstrauen gegen Leichtigkeit", hilfreich: "Gemeinsame Ziele spielerisch angehen" },
      { partner: "SO7", dynamik: "Sicherheit im sozialen Feld", gefahr: "Zerstreuung", hilfreich: "Kreative Zusammenarbeit, klare Strukturen für Projekte" },
      { partner: "SX7", dynamik: "Kontrolle und Abenteuerlust", gefahr: "Unsicherheit in Bindung", hilfreich: "Verbindliche Absprachen machen" },
      { partner: "SE8", dynamik: "Sicherheit und Durchsetzung", gefahr: "Unterordnung", hilfreich: "Grenzen klar setzen" },
      { partner: "SO8", dynamik: "Loyalität und Machtbewusstsein", gefahr: "Abhängigkeit", hilfreich: "Führung mit Rückhalt, gegenseitige Anerkennung betonen" },
      { partner: "SX8", dynamik: "Sicherheit trifft Intensität", gefahr: "Kontrollkämpfe", hilfreich: "Offenheit statt Argwohn" },
      { partner: "SE9", dynamik: "Loyalität und Harmonie", gefahr: "Konfliktvermeidung", hilfreich: "Probleme früh ansprechen" },
      { partner: "SO9", dynamik: "Gemeinschaftsorientierung", gefahr: "Trägheit", hilfreich: "Gemeinsame Projekte aktivieren" },
      { partner: "SX9", dynamik: "Loyalität und Verschmelzung", gefahr: "Abhängigkeit", hilfreich: "Eigenständigkeit bewahren" },
    ],
    kurzfassung: `Zeig Verlässlichkeit durch gehaltene Zusagen, nicht nur durch Worte. Nimm ihre Sorgen ernst, statt sie als übertrieben abzutun. Gib Transparenz über Pläne – Unklarheit erzeugt bei ihr mehr Angst als eine unbequeme, aber klare Information.`,
  },
  SO6: {
    tier: "Erdmännchen",
    erkennung: `Die soziale Sechs sichert sich nicht durch individuelle Vorsorge wie die SE6 ab, sondern durch Zugehörigkeit zu einer verlässlichen Gruppe: Sicherheit entsteht durch Zusammenarbeit und klare Regeln. In meinem Buch <em>Enneagramm Zoo</em> beschreibe ich das Bild des <strong>Erdmännchens</strong>, das aufrecht auf einem Erdhügel Wache steht, die Augen wachsam in alle Richtungen schweifend – während hinter ihm die Artgenossen spielen. Es fühlt sich auf dem Wachposten allein verantwortlich für alle.<br><br>Anders als die selbsterhaltende Sechs, die vor allem für sich selbst vorsorgt, gilt die Wachsamkeit der SO6 der ganzen Gruppe: Sie warnt, organisiert, verteilt Pläne, hält Versammlungen ab. Wer das versteht, liest ihr Bedürfnis nach Regeln und klaren Autoritäten nicht als Unterwürfigkeit, sondern als den Versuch, gemeinsam mit anderen Sicherheit zu schaffen – verbunden mit der stillen Frage: "Wer hält Wache, wenn ich müde bin?"`,
    wunde: {
      titel: "Die Wunde dahinter",
      text: `Dahinter liegt die <strong>Wunde des verlorenen Vertrauens</strong>: das Gefühl, dass die innere Gewissheit, vom Leben getragen zu sein, brüchig ist. Bei der SO6 zeigt sich das als Misstrauen gegenüber der eigenen inneren Autorität – sie wird an Regeln und Gruppen abgegeben. Der Glaubenssatz: "Die Welt ist gefährlich, und ich muss wissen, was gilt und wem ich trauen kann" – darunter: "Nur wenn ich das Richtige tue und dazugehöre, bin ich sicher." Die Leidenschaft Angst richtet sich bei der SO6 auf das Verhältnis zur Gruppe: Sie sucht Sicherheit in Pflicht, Regeln und Zugehörigkeit. Wer das versteht, liest ihr Festhalten an Regeln nicht als Starrheit, sondern als den Versuch, eine eigene innere Stimme zu ersetzen, der sie noch nicht ganz traut.`,
    },
    fluegel: {
      titel: "Flügel-Nuance: SO6w5 und SO6w7",
      w1: { code: "SO6w5", route: "beruehmte-sigmund-freud", name: "Sigmund Freud", text: `die Loyalität bekommt eine analytischere, systematischere Note – Sicherheit wird über durchdachte Theorien und klare Systeme gesucht, weniger über sichtbares Handeln. Reagiert gut auf fundierte, gut begründete Argumente, weniger gut auf Appelle ohne nachvollziehbare Logik.` },
      w2: { code: "SO6w7", route: "beruehmte-herbert-groenemeyer", name: "Herbert Grönemeyer", text: `die Loyalität wird wärmer, ausdrucksstärker, mit einem Hang zu emotionaler Offenheit verbunden – Zugehörigkeit soll sich auch lebendig und persönlich anfühlen. Reagiert gut auf herzliche, direkte Verbundenheit, weniger gut auf kühle, unpersönliche Formalität.` },
    },
    stressWachstum: {
      stress: `Unter Stress bewegt sich die SO6 Richtung <strong>Typ 3</strong>: Aus loyaler Pflichterfüllung wird plötzlich hektischer Aktionismus, das Bedürfnis, durch sichtbare Leistung Sicherheit und Anerkennung zu beweisen. Erkennst du dieses Muster, ist das ein Signal für erhöhten inneren Druck – kein guter Moment für weitere Forderungen, ein guter Moment für ruhige, verlässliche Präsenz.`,
      wachstum: `Im Wachstum bewegt sie sich Richtung <strong>Typ 9</strong>: gelassener, vertrauensvoller, weniger von äußerer Bestätigung abhängig – die Loyalität bleibt, verliert aber die ständige Prüfung, weil ein stabileres inneres Vertrauen entsteht.`,
    },
    ankommt: [
      `<strong>Konsistenz und Verlässlichkeit über die Zeit zeigen.</strong> Die SO6 vertraut nicht auf einzelne große Gesten, sondern auf wiederholt bewiesene Zuverlässigkeit.`,
      `<strong>Klare, transparente Entscheidungswege kommunizieren.</strong> Unklarheit darüber, wer was entscheidet oder wofür steht, erzeugt bei der SO6 mehr Unruhe als eine unbequeme, aber klare Ansage.`,
      `<strong>Ihre Verantwortungsübernahme für die Gruppe würdigen.</strong> Die SO6 investiert oft unsichtbare Energie in die Sicherheit anderer – das beim Namen zu nennen, wirkt mehr als beiläufiges Lob.`,
    ],
    trigger: [
      { trigger: `Regeln oder Zuständigkeiten plötzlich und ohne Erklärung ändern`, warum: `Untergräbt die Struktur, die der SO6 Sicherheit gibt, und löst Misstrauen aus`, alternative: `Änderungen frühzeitig ankündigen und nachvollziehbar begründen` },
      { trigger: `Ihre Sorgen um die Gruppe als übertrieben oder kleinlich abtun`, warum: `Trifft ihr zentrales Anliegen, Sicherheit für alle zu schaffen, nicht nur für sich selbst`, alternative: `Nach dem Anliegen hinter der Sorge fragen, statt sie zu belächeln` },
      { trigger: `Inkonsistent zwischen verschiedenen Positionen wechseln`, warum: `Verstärkt die Grundangst, niemandem wirklich trauen zu können`, alternative: `Konsistent bei der eigenen Haltung bleiben – das beruhigt mehr als zusätzliche Argumente` },
      { trigger: `Autoritäten oder Regeln der Gruppe öffentlich untergraben`, warum: `Wird als Angriff auf die gemeinsame Sicherheit erlebt, nicht nur als persönliche Meinungsverschiedenheit`, alternative: `Kritik an Regeln konstruktiv und im passenden Rahmen einbringen` },
    ],
    fuehrung: {
      titel: "Aus der Führungspraxis: wenn Absicherung Unsicherheit verstärkt",
      text: `In unserem Buch <em>Führung mit Fundament</em> (das ich gemeinsam mit meinem Sohn David L. Rathmer geschrieben habe) beschreiben wir eine Typ-6-Leiterin, die Entscheidungen durch permanente Sicherheitsabfragen verzögert – und damit ungewollt genau die Unsicherheit im Team verstärkt, vor der sie eigentlich schützen will. Was Typ 6 im Konflikt braucht: Konsistenz, klare Entscheidungswege, transparente Haltung, Verlässlichkeit.<br><br>Für die SO6 heißt das übersetzt: Konsistenz beruhigt mehr als zusätzliche Argumente oder immer neue Absicherungsfragen. Wer mit einer SO6 arbeitet oder sie führt, hilft ihr mehr mit einer klaren, gleichbleibenden Haltung als mit dem Versuch, jede denkbare Unsicherheit vorab zu klären.`,
      hinweis: `Im Buch beschreiben wir diesen Fall auf Ebene des Grundtyps 6, nicht subtypspezifisch. Die soziale Färbung – die Absicherung gilt der ganzen Gruppe, nicht nur der eigenen Person – ist eine Ergänzung auf Basis der übrigen Quellen, kein wörtliches Zitat.`,
    },
    beziehung: {
      titel: `Beziehungsrisiko & heilende Bewegung`,
      risiko: `Das Bedürfnis nach klaren Regeln und Autoritäten kann Beziehungen einengen – Partner spüren oft, dass Vertrauen erst verdient werden muss, statt einfach da zu sein.`,
      leitfragen: `Halte ich an dieser Regel fest, weil sie wirklich nötig ist – oder weil sie mir Sicherheit gibt, die ich sonst in mir selbst suchen müsste?`,
      hilfreich: `Der eigenen inneren Stimme mehr Gewicht geben als äußeren Autoritäten – und üben, Vertrauen auch ohne vollständige Absicherung zu wagen.`,
    },
    pairing: [
      { partner: "SE1", dynamik: "Sicherheit durch Regeln vs. soziale Loyalität", gefahr: "Überbetonung von Sicherheit blockiert Spontaneität", hilfreich: "Sorgen teilen, nicht verstecken" },
      { partner: "SO1", dynamik: "Rolle × Rolle (Loyalität)", gefahr: "Angst vor Fehlern, Strenge", hilfreich: "Fehlerfreundlichkeit einüben" },
      { partner: "SX1", dynamik: "Intensität vs. Absicherung", gefahr: "Kontrolle, Eifersucht", hilfreich: "Vertrauen Schritt für Schritt aufbauen" },
      { partner: "SE2", dynamik: "Fürsorge trifft Loyalität im Sozialen", gefahr: "Überkontrolle, unterschwellige Ängste", hilfreich: "Misstrauen offen ansprechen" },
      { partner: "SO2", dynamik: "Gemeinsamer Fokus auf Zugehörigkeit und Absicherung", gefahr: "Überängstlichkeit oder Abhängigkeit vom sozialen Feld", hilfreich: "Mut zu Eigenständigkeit stärken" },
      { partner: "SX2", dynamik: "Nähe und Loyalität", gefahr: "Misstrauen verstärkt Hilfsdrang", hilfreich: "Klarheit durch offene Absprachen sichern" },
      { partner: "SE3", dynamik: "Leistung trifft Pflichtbewusstsein", gefahr: "Überlastung durch Verantwortung", hilfreich: "Aufgaben klar teilen" },
      { partner: "SO3", dynamik: "Anerkennung im Feld + Loyalität zur Gruppe", gefahr: "Anpassung aus Angst, Imageabhängigkeit", hilfreich: "Mut fördern, nicht nur Absicherung" },
      { partner: "SX3", dynamik: "Intensität + Gemeinschaft", gefahr: "Vereinnahmung", hilfreich: "Zusammenhalt in Außenwirkung, Grenzen und Autonomie klären" },
      { partner: "SE4", dynamik: "SE4 nach innen, SO6 nach Gruppe", gefahr: "SE4 fühlt sich allein, SO6 überfordert SE4 mit Pflichten", hilfreich: "Privates und Kollektiv klar balancieren" },
      { partner: "SO4", dynamik: "Resonanz vs. Loyalität", gefahr: "Zu viel Kontrolle", hilfreich: "Unterschied zwischen Loyalität und Kontrolle anerkennen" },
      { partner: "SX4", dynamik: "Sehnsucht vs. Absicherung", gefahr: "Überforderung", hilfreich: "Verbindliche Zusagen machen" },
      { partner: "SE5", dynamik: "Rückzug vs. Loyalität", gefahr: "Abhängigkeit oder Skepsis", hilfreich: "Sorgen früh ansprechen" },
      { partner: "SO5", dynamik: "Gemeinschaft verstärkt Loyalität", gefahr: "Angstspirale", hilfreich: "Vertrauen aktiv betonen" },
      { partner: "SX5", dynamik: "Distanz + Loyalität", gefahr: "Misstrauen verstärkt Distanz", hilfreich: "Vertrauen benennen" },
      { partner: "SE6", dynamik: "Pflichtbewusstsein und Gemeinschaft", gefahr: "Überangepasstheit", hilfreich: "Eigene Bedürfnisse klar äußern" },
      { partner: "SO6", dynamik: "Loyalität trifft Loyalität", gefahr: "Misstrauen verdoppelt", hilfreich: "Vertrauen bewusst pflegen" },
      { partner: "SX6", dynamik: "Bindung vs. Exklusivität", gefahr: "Eifersucht", hilfreich: "Transparenz halten" },
      { partner: "SE7", dynamik: "Absicherung vs. Spontaneität", gefahr: "Konflikt Planung vs. Freiheit", hilfreich: "Klare Absprachen, Freiräume lassen" },
      { partner: "SO7", dynamik: "Loyalität im sozialen Kontext", gefahr: "Rollenabhängigkeit", hilfreich: "Privatzeit sichern" },
      { partner: "SX7", dynamik: "Absicherung vs. Abenteuerlust", gefahr: "Unsicherheit", hilfreich: "Neues mit Rückhalt, Mut zu kleinen Risiken" },
      { partner: "SE8", dynamik: "Absicherung vs. Macht", gefahr: "Dominanz", hilfreich: "Struktur durch Führung, Respekt gegenseitig klarstellen" },
      { partner: "SO8", dynamik: "Loyalität vs. Einfluss", gefahr: "Machtspiele", hilfreich: "Gemeinsame Stärke, Verantwortung teilen" },
      { partner: "SX8", dynamik: "Sicherheit vs. Intensität", gefahr: "Überforderung", hilfreich: "Kraftvolle Allianz, Pausen einbauen" },
      { partner: "SE9", dynamik: "Loyalität vs. Harmonie", gefahr: "Konfliktvermeidung", hilfreich: "Unterschiede offen ansprechen" },
      { partner: "SO9", dynamik: "Loyalität im Gefüge", gefahr: "Anpassung zu stark", hilfreich: "Selbstbehauptung üben" },
      { partner: "SX9", dynamik: "Sicherheit vs. Nähe", gefahr: "Abhängigkeit", hilfreich: "Geborgene Partnerschaft, Eigenständigkeit bewahren" },
    ],
    kurzfassung: `Zeig Konsistenz und Verlässlichkeit über die Zeit, nicht nur einzelne Gesten. Kommuniziere klare, transparente Entscheidungswege. Würdige ihre Verantwortung für die Gruppe – sie trägt oft unsichtbar mehr, als sichtbar wird.`,
  },
  SX6: {
    tier: "Wolf",
    erkennung: `Die sexuelle Sechs begegnet Angst nicht mit Rückzug wie die SE6 oder mit Regeltreue wie die SO6, sondern gegenphobisch: Sie geht der Bedrohung entgegen, statt ihr auszuweichen. In meinem Buch <em>Enneagramm Zoo</em> beschreibe ich das Bild des <strong>Wolfes</strong>, der einsam den Mond anheult – in seinem Ruf liegt Sehnsucht nach Bindung, nach Antwort, nach jemandem, der ihn hört. Er ist stark gebunden an sein Rudel und doch immer auf der Hut, zwischen Nähe und Misstrauen pendelnd.<br><br>Anders als die anderen Sechser-Varianten zeigt sich die Angst der SX6 als Intensität und Kampfbereitschaft statt als sichtbare Vorsicht: Sie testet Vertrauen, bevor sie es zulässt, will absolute Treue, fürchtet zugleich Verrat. Wer das versteht, liest ihre Härte nicht als Aggression, sondern als einen tiefen Hunger nach Verlässlichkeit, der sich hinter Stärke versteckt, weil Verletzlichkeit zu riskant erscheint.`,
    wunde: {
      titel: "Die Wunde dahinter",
      text: `Dahinter liegt die <strong>Wunde des verlorenen Vertrauens</strong>: das Gefühl, dass die innere Gewissheit, vom Leben getragen zu sein, brüchig ist. Bei der SX6 wird diese Wunde hinter Kampfbereitschaft und Härte besonders tief vergraben. Der Glaubenssatz: "Die Welt ist gefährlich, und Angst zu zeigen wäre tödlich" – darunter: "Nur wenn ich stark, mutig und unangreifbar bin, bin ich sicher." Die Leidenschaft Angst wird bei der SX6 gegenphobisch nach außen gewendet: Statt auszuweichen, geht sie in den Angriff – Stärke und Kampf verdecken die innere Unsicherheit. Wer das versteht, liest ihr Testen und Prüfen nicht als Misstrauen um seiner selbst willen, sondern als den einzigen Weg, den sie kennt, um sich der Verlässlichkeit einer Bindung zu vergewissern, bevor sie sich wirklich öffnet.`,
    },
    fluegel: {
      titel: "Flügel-Nuance: SX6w5 und SX6w7",
      w1: { code: "SX6w5", route: "beruehmte-alice-schwarzer", name: "Alice Schwarzer", text: `die Kampfbereitschaft bekommt eine analytischere, prinzipientreuere Note – Stärke wird auch über klare, gut durchdachte Positionen ausgedrückt, nicht nur über direkte Konfrontation. Reagiert gut auf inhaltliche Auseinandersetzung mit der Sache, schlecht auf vage, ausweichende Antworten.` },
      w2: { code: "SX6w7", route: "beruehmte-michael-schumacher", name: "Michael Schumacher", text: `die Kampfbereitschaft wird disziplinierter, mit einem Hang zu konsequenter Leistung und Fokussierung verbunden – Sicherheit entsteht durch Training und Können, nicht durch Zögern. Reagiert gut auf klare, faire Herausforderungen, schlecht auf willkürliche oder unfaire Behandlung.` },
    },
    stressWachstum: {
      stress: `Unter Stress bewegt sich die SX6 Richtung <strong>Typ 3</strong>: Aus intensiver Loyalität wird plötzlich hektischer Aktionismus, das Bedürfnis, durch sichtbare Leistung Sicherheit zu beweisen. Erkennst du dieses Muster, ist das ein Signal für erhöhten inneren Druck – kein guter Moment für weitere Konfrontation, ein guter Moment für ruhige, verlässliche Präsenz.`,
      wachstum: `Im Wachstum bewegt sie sich Richtung <strong>Typ 9</strong>: gelassener, vertrauensvoller, weniger kampfbereit – die Intensität bleibt möglich, verliert aber die ständige Alarmbereitschaft, weil ein stabileres inneres Vertrauen entsteht.`,
    },
    ankommt: [
      `<strong>Vertrauen durch konsequentes Verhalten verdienen, nicht durch Worte.</strong> Die SX6 testet oft, bevor sie glaubt – wiederholt bewiesene Verlässlichkeit wirkt tiefer als jedes Versprechen.`,
      `<strong>Ehrlich und direkt sein, auch bei unbequemen Themen.</strong> Ausweichen oder Beschönigen löst bei der SX6 mehr Misstrauen aus als eine klare, auch unangenehme Wahrheit.`,
      `<strong>Ihre Loyalität aktiv würdigen.</strong> Wenn sich die SX6 auf jemanden einlässt, ist das ein bedeutsamer Schritt – konkrete Anerkennung dafür stärkt die Bindung.`,
    ],
    trigger: [
      { trigger: `Auf ihre Konfrontation mit Gegenkonfrontation reagieren, statt die Sorge dahinter zu sehen`, warum: `Verstärkt die Eskalationsspirale, obwohl hinter der Kampfbereitschaft meist Unsicherheit steckt`, alternative: `Kurz innehalten und nach dem eigentlichen Anliegen hinter der Schärfe fragen` },
      { trigger: `Vage oder ausweichende Antworten geben`, warum: `Wird als Zeichen von Unzuverlässigkeit gedeutet und verstärkt das Bedürfnis, weiter zu testen`, alternative: `Klar und direkt Position beziehen, auch wenn die Antwort unbequem ist` },
      { trigger: `Ihre Loyalität als selbstverständlich hinnehmen`, warum: `Übersieht, dass Vertrauen für die SX6 hart erarbeitet und mit Risiko verbunden ist`, alternative: `Die investierte Treue konkret benennen und würdigen` },
      { trigger: `Verletzlichkeit oder Zweifel bei der SX6 als Schwäche werten`, warum: `Verstärkt den Zwang, immer stark und unangreifbar wirken zu müssen`, alternative: `Verletzlichkeit ausdrücklich als Stärke und als Vertrauensbeweis würdigen` },
    ],
    fuehrung: {
      titel: "Aus der Führungspraxis: wenn Vorsicht Chancen kostet",
      text: `In unserem Buch <em>Führung mit Fundament</em> (das ich gemeinsam mit meinem Sohn David L. Rathmer geschrieben habe) beschreiben wir eine Typ-6-Führungskraft, die eine Innovation aus Angst vor Unklarheiten verzögert – und dabei den Anschluss verliert. Ihr blinder Fleck: Risiken werden überschätzt, Chancen und die eigene Handlungskompetenz unterschätzt.<br><br>Für die SX6 heißt das übersetzt: Die intensive Wachsamkeit vor Bedrohung ist eine echte Stärke – hilfreich wird sie erst, wenn sie nicht zum Vorwand wird, notwendige Schritte immer weiter aufzuschieben. Mut bedeutet hier nicht, die Angst loszuwerden, sondern trotz ihr zu handeln.`,
      hinweis: `Im Buch beschreiben wir diesen Fall auf Ebene des Grundtyps 6, nicht subtypspezifisch. Die sexuelle Färbung – die Wachsamkeit zeigt sich als direkte, kämpferische Konfrontation statt als sichtbares Zögern – ist eine Ergänzung auf Basis der übrigen Quellen, kein wörtliches Zitat.`,
    },
    beziehung: {
      titel: `Beziehungsrisiko & heilende Bewegung`,
      risiko: `Das ständige Testen von Vertrauen kann den Partner erschöpfen – Nähe fühlt sich nie ganz sicher an, solange jede Geste erst auf Verlässlichkeit geprüft werden muss.`,
      leitfragen: `Teste ich, weil es wirklich nötig ist – oder aus einer alten Angst heraus, dass Vertrauen sich als Fehler erweisen wird?`,
      hilfreich: `Verletzlichkeit bewusst zulassen, statt sie hinter Stärke zu verstecken – und erfahren, dass echte Sicherheit aus innerer Standfestigkeit entsteht, nicht aus Kontrolle.`,
    },
    pairing: [
      { partner: "SE1", dynamik: "Struktur vs. Bindungstests", gefahr: "Kontrolle gegen Kontrolle", hilfreich: "Transparenz vor Entscheidungen" },
      { partner: "SO1", dynamik: "Rolle × Exklusives Commitment", gefahr: "Klammern, Eifersucht", hilfreich: "Misstrauen aussprechen, Nähe halten" },
      { partner: "SX1", dynamik: "Intensität × Zweifel", gefahr: "Kontrolle + Unsicherheit", hilfreich: "Ängste offen ansprechen, nicht verstecken" },
      { partner: "SE2", dynamik: "Helfen trifft exklusive Loyalität", gefahr: "Vereinnahmung oder Abhängigkeit", hilfreich: "Eigenständigkeit fördern" },
      { partner: "SO2", dynamik: "Gemeinschaftssinn verbindet sich mit exklusiver Loyalität", gefahr: "Eifersucht oder Gruppendruck", hilfreich: "Exklusivität und Gruppe bewusst trennen" },
      { partner: "SX2", dynamik: "Exklusivität plus Loyalität", gefahr: "Abhängigkeit, Angst vor Verlust", hilfreich: "Freiräume einbauen, um Vertrauen zu stärken" },
      { partner: "SE3", dynamik: "Dynamik mit Bindung", gefahr: "Kontrolle statt Vertrauen", hilfreich: "Ängste offen teilen" },
      { partner: "SO3", dynamik: "Strahlkraft + exklusive Bindung", gefahr: "Eifersucht/Prüfungen untergraben Nähe", hilfreich: "Prüfbedürfnisse offen benennen, Rituale der Zusage pflegen" },
      { partner: "SX3", dynamik: "Intensität × Zweifel", gefahr: "Wechselbad aus Nähe und Misstrauen", hilfreich: "Verbindliche Zusagen pflegen" },
      { partner: "SE4", dynamik: "SE4 braucht Sicherheit, SX6 sucht exklusive Bindung", gefahr: "Verlustängste verstärken sich", hilfreich: "Ängste benennen, statt sie auszuleben" },
      { partner: "SO4", dynamik: "Gefühl vs. Exklusivität", gefahr: "Eifersucht", hilfreich: "Echte Intimität, Sicherheit durch Transparenz schaffen" },
      { partner: "SX4", dynamik: "Dramatik vs. Skepsis", gefahr: "Eskalation", hilfreich: "Ehrliche Nähe, Ängste benennen statt testen" },
      { partner: "SE5", dynamik: "Exklusivität + Prüfung", gefahr: "Überprüfung wird Kontrolle", hilfreich: "Vertrauen üben, nicht prüfen" },
      { partner: "SO5", dynamik: "Gemeinschaft trifft Bindungssuche", gefahr: "Abhängigkeit", hilfreich: "Balance aus Nähe und Abstand" },
      { partner: "SX5", dynamik: "Exklusivität + Prüfung", gefahr: "Überprüfung wird Kontrolle", hilfreich: "Vertrauen üben, nicht prüfen" },
      { partner: "SE6", dynamik: "Loyalität und Exklusivität", gefahr: "Vereinnahmung", hilfreich: "Raum für Individualität lassen" },
      { partner: "SO6", dynamik: "Bindung vs. Exklusivität", gefahr: "Eifersucht", hilfreich: "Transparenz halten" },
      { partner: "SX6", dynamik: "Gegenseitige Loyalität, starkes Sicherheitsbedürfnis", gefahr: "Überprüfung und Zweifel verstärken sich", hilfreich: "Vertrauen üben, statt permanent testen" },
      { partner: "SE7", dynamik: "Sicherheit sucht Abenteuer", gefahr: "SE7 weicht Unsicherheiten aus, SX6 fühlt sich allein gelassen", hilfreich: "Abenteuer klar strukturieren" },
      { partner: "SO7", dynamik: "Loyalität trifft soziale Bühne", gefahr: "SX6 erlebt die Außenorientierung als Unsicherheit", hilfreich: "Bühne nur nutzen, wenn Rückzug abgesprochen ist" },
      { partner: "SX7", dynamik: "Sicherheit versus Vielfalt", gefahr: "SX7 meidet Tiefe, SX6 klammert", hilfreich: "Verbindlichkeit in kleinen Schritten festigen" },
      { partner: "SE8", dynamik: "Loyalität trifft Stärke", gefahr: "Dominanz der SE8 triggert Zweifel", hilfreich: "Sicherheit klar einfordern, nicht vermuten" },
      { partner: "SO8", dynamik: "Treue trifft Macht im Gefüge", gefahr: "SO8 überrollt mit Einflussdrang", hilfreich: "Rollen früh festlegen" },
      { partner: "SX8", dynamik: "Sicherheit sucht Intensität", gefahr: "SX8 überfordert mit Nähe, SX6 zieht sich zurück", hilfreich: "Nähe dosieren, Freiraum sichern" },
      { partner: "SE9", dynamik: "Loyalität trifft Harmonie", gefahr: "Konflikte werden gemieden, Unsicherheit bleibt ungelöst", hilfreich: "Probleme ansprechen, auch wenn es ungemütlich ist" },
      { partner: "SO9", dynamik: "Treue trifft soziale Anpassung", gefahr: "SO9 verliert sich in Rollen, SX6 bleibt misstrauisch", hilfreich: "Echte Bedürfnisse klar benennen" },
      { partner: "SX9", dynamik: "Sicherheit sucht Nähe, Harmonie verstärkt Bindung", gefahr: "Konflikte werden verdeckt", hilfreich: "Themen offen ansprechen" },
    ],
    kurzfassung: `Verdiene Vertrauen durch konsequentes, verlässliches Handeln – Worte allein reichen nicht. Sei ehrlich und direkt, auch bei unbequemen Themen. Würdige ihre Loyalität aktiv – sie ist für sie ein hart erarbeitetes Risiko.`,
  },
  SE7: {
    tier: "Gorilla",
    erkennung: `Die selbsterhaltende Sieben sucht Lebensfreude nicht sprunghaft und nach außen wie die anderen Siebener-Varianten, sondern geerdet und körperlich: gutes Essen, angenehme Routinen, ein Reich aus Annehmlichkeiten. In meinem Buch <em>Enneagramm Zoo</em> beschreibe ich das Bild des <strong>Gorillas</strong>, der stolz umgeben von Vorräten sitzt – Bananenstauden, Blätter, Früchte, alles geordnet, ein Vorrat für viele Wochen. Er sichert, was ihm Ruhe schenkt.<br><br>Anders als die soziale oder sexuelle Sieben zeigt sich die SE7 bodenständig und sinnlich: Sie liebt Komfort, Geselligkeit, das Gefühl, dass alles seine Ordnung hat. Wer das versteht, liest ihr Horten von Vorräten und Annehmlichkeiten nicht als Gier, sondern als den Versuch, sich gegen die Angst abzusichern, etwas zu verpassen, wenn das Leben einmal still wird.`,
    wunde: {
      titel: "Die Wunde dahinter",
      text: `Dahinter liegt die <strong>Wunde der Schmerzvermeidung</strong>: das Gefühl, dass tiefere Gefühle – besonders Schmerz, Verlust und Begrenztheit – zu bedrohlich sind, um ihnen zu begegnen. Bei der SE7 wird das in das Anhäufen von Genuss und Sicherheit übersetzt. Der Glaubenssatz: "Wenn ich genug angesammelt habe und es mir an nichts fehlt, bin ich sicher" – darunter: "Mangel und Leere sind bedrohlich, ich muss vorsorgen." Die Leidenschaft Maßlosigkeit zeigt sich bei der SE7 als praktische Fülle: Annehmlichkeiten, Verbündete und Vorräte, damit es nie an etwas mangelt. Wer das versteht, liest ihre Rastlosigkeit nach dem nächsten Genuss nicht als Oberflächlichkeit, sondern als eine tief sitzende Flucht vor Stille und Begrenzung.`,
    },
    fluegel: {
      titel: "Flügel-Nuance: SE7w6 und SE7w8",
      w1: { code: "SE7w6", route: "beruehmte-larry-king", name: "Larry King", text: `der Genuss bekommt eine geselligere, verbindlichere Note – Sicherheit wird auch über verlässliche Beziehungen und Loyalität gesucht, nicht nur über Annehmlichkeiten. Reagiert gut auf persönliche Verbindlichkeit, weniger gut auf unpersönliche, distanzierte Kommunikation.` },
      w2: { code: "SE7w8", route: "beruehmte-hans-zimmer", name: "Hans Zimmer", text: `der Genuss wird durchsetzungsstärker, mit einem Hang zu intensiver, kraftvoller Umsetzung verbunden – Fülle soll auch mit sichtbarer Wirkung verbunden sein. Reagiert gut auf direkte, energiegeladene Zusammenarbeit, weniger gut auf zögerliches, unentschlossenes Vorgehen.` },
    },
    stressWachstum: {
      stress: `Unter Stress bewegt sich die SE7 Richtung <strong>Typ 1</strong>: Aus entspanntem Genuss wird plötzlich schroffe Kritik und Perfektionismus, oft gegen sich selbst gerichtet. Erkennst du dieses Muster, ist das ein Signal für erhöhten inneren Druck – kein guter Moment für weitere Anforderungen, ein guter Moment für Entlastung ohne Bewertung.`,
      wachstum: `Im Wachstum bewegt sie sich Richtung <strong>Typ 5</strong>: konzentrierter, tiefer, weniger rastlos – die Lebensfreude bleibt, gewinnt aber an Substanz, weil ein stabileres inneres Genügen entsteht.`,
    },
    ankommt: [
      `<strong>Gemeinsamen Genuss und Geselligkeit anbieten.</strong> Ein gutes Essen, ein entspannter Moment zusammen – die SE7 öffnet sich leichter über geteilte Freude als über ernste Gespräche allein.`,
      `<strong>Ihre Großzügigkeit würdigen.</strong> Wenn die SE7 teilt, statt nur zu sammeln, ist das ein bedeutsamer Schritt – konkrete Anerkennung dafür stärkt diese Bewegung.`,
      `<strong>Struktur als Angebot, nicht als Einschränkung formulieren.</strong> Die SE7 reagiert auf Zwang mit Widerstand, aber auf einladend formulierte Klarheit oft überraschend offen.`,
    ],
    trigger: [
      { trigger: `Ihre Genussfreude oder Vorratshaltung als übertrieben oder egoistisch abtun`, warum: `Trifft den wunden Punkt direkt – die SE7 erlebt Fülle als Sicherheit, nicht als Luxus`, alternative: `Nach dem Bedürfnis nach Sicherheit hinter dem Sammeln fragen, statt das Verhalten zu bewerten` },
      { trigger: `Stille oder Leere ohne Ankündigung erzwingen`, warum: `Löst die tiefste Angst vor unausweichlichem Schmerz oder Begrenzung aus`, alternative: `Ruhephasen behutsam und mit Vorlauf einführen, nicht plötzlich verordnen` },
      { trigger: `Unangenehme Themen dauerhaft mit Humor oder Ablenkung wegwischen lassen`, warum: `Bestätigt das Muster, echten Schmerz zu vermeiden, statt ihn zuzulassen`, alternative: `Freundlich, aber bestimmt beim Thema bleiben, auch wenn Ablenkung versucht wird` },
      { trigger: `Zu viele Projekte oder Möglichkeiten gleichzeitig anbieten`, warum: `Verstärkt die Zerstreuung, die der SE7 ohnehin schwerfällt zu begrenzen`, alternative: `Gemeinsam eine klare, begrenzte Auswahl treffen und dabei bleiben` },
    ],
    fuehrung: {
      titel: "Aus der Führungspraxis: wenn Optionen den Fokus verdrängen",
      text: `In unserem Buch <em>Führung mit Fundament</em> (das ich gemeinsam mit meinem Sohn David L. Rathmer geschrieben habe) beschreiben wir einen Möglichkeitsmenschen, der drei große Innovationsprojekte parallel laufen lässt – alle ambitioniert, alle ressourcenintensiv. Auf den Hinweis "Uns fehlen Fokus und klare Prioritäten" antwortet er: "Wir dürfen uns jetzt nicht einengen. Gerade jetzt müssen wir offen bleiben für alle Möglichkeiten." Am Ende bleibt alles offen, das Team erschöpft zurück. Der Wendepunkt kommt durch die einfache Frage: "Was ist im Moment wirklich das Wichtigste?" – auf die er selbst keine klare Antwort findet.<br><br>Für die SE7 heißt das übersetzt: Flucht vor Begrenzung, Bewegung statt Vertiefung, Optionen statt Bindung – das sind echte Stärken, die aber Systeme ohne Fokus lähmen können. Der Satz "Wir entscheiden heute, was wir nicht mehr tun" kostet sichtbar Überwindung, schafft aber oft mehr Klarheit als jede neue Idee.`,
      hinweis: `Im Buch beschreiben wir diesen Fall auf Ebene des Grundtyps 7, nicht subtypspezifisch. Die selbsterhaltende Färbung – die Fülle zeigt sich vor allem in konkreten, körperlichen Annehmlichkeiten, nicht in sozialer Bühne oder exklusiver Intensität – ist eine Ergänzung auf Basis der übrigen Quellen, kein wörtliches Zitat.`,
    },
    beziehung: {
      titel: `Beziehungsrisiko & heilende Bewegung`,
      risiko: `Das Festhalten an Annehmlichkeiten und die Flucht vor Schmerz können den Partner das Gefühl geben, mit schwierigen Themen allein zu bleiben – echte Tiefe entsteht schwer, solange Unbequemes ausgewichen wird.`,
      leitfragen: `Genieße ich das, weil es mir wirklich guttut – oder um nicht bei dem bleiben zu müssen, was gerade schwer ist?`,
      hilfreich: `Bewusst bei unangenehmen Gefühlen bleiben, statt sofort zur nächsten Ablenkung zu wechseln – und erfahren, dass Begrenzung nicht bedrohlich sein muss, sondern Tiefe ermöglicht.`,
    },
    pairing: [
      { partner: "SE1", dynamik: "Ordnung vs. Lust auf Vielfalt", gefahr: "SE1 fühlt Chaos, SE7 Langeweile", hilfreich: "Abwechslung planen, Regeln locker halten" },
      { partner: "SO1", dynamik: "Rolle × Vielfalt (praktisch)", gefahr: "Disziplin vs. Unruhe", hilfreich: "Flexibilität üben, Freude zulassen" },
      { partner: "SX1", dynamik: "Intensität vs. Abenteuer", gefahr: "Flucht vor Schmerz, Reizüberflutung", hilfreich: "Lebendigkeit, neue Erfahrungen" },
      { partner: "SE2", dynamik: "Fürsorge trifft Optimismus im Alltag", gefahr: "Helfen wird übergangen von Leichtigkeit", hilfreich: "Humor und Ernst abwechseln" },
      { partner: "SO2", dynamik: "Gemeinschaft trifft Freiheitsdrang", gefahr: "SO2 fühlt sich vernachlässigt, SE7 eingeengt", hilfreich: "Vereinbarungen über Freiräume treffen" },
      { partner: "SX2", dynamik: "Zuwendung trifft Abenteuerlust", gefahr: "SE7 fühlt sich gebremst, SX2 vernachlässigt", hilfreich: "Fürsorge bringt Tiefe ins Spiel" },
      { partner: "SE3", dynamik: "Tempo mit Enthusiasmus", gefahr: "Oberflächlichkeit, wenig Tiefe", hilfreich: "Pausen einplanen" },
      { partner: "SO3", dynamik: "Leistung + Optimismus", gefahr: "Verzettelung, zu wenig Tiefe", hilfreich: "Fokusfenster (ein Ziel, klare Zeitbox)" },
      { partner: "SX3", dynamik: "Intensität + Optimismus", gefahr: "Zerstreuung, Überdrehen", hilfreich: "Pausen und Ruhe einbauen" },
      { partner: "SE4", dynamik: "SE4 Rückzug, SE7 Expansion", gefahr: "SE4 fühlt sich überrannt, SE7 fühlt sich gebremst", hilfreich: "Planbare Abenteuer schaffen" },
      { partner: "SO4", dynamik: "Gefühl vs. Ablenkung", gefahr: "SO4 fühlt sich nicht ernst genommen", hilfreich: "Leichtigkeit und Tiefe verbinden, feste Zeiten für Ernsthaftigkeit" },
      { partner: "SX4", dynamik: "Tiefe vs. Ablenkung", gefahr: "Enttäuschung", hilfreich: "Ergänzung von Ernst und Leichtigkeit" },
      { partner: "SE5", dynamik: "Rückzug vs. Vielfalt", gefahr: "Konflikt aus Tempo und Tiefe", hilfreich: "Vielfalt mit Ruhe kombinieren" },
      { partner: "SO5", dynamik: "Gemeinschaft vs. Möglichkeiten", gefahr: "Flucht vor Tiefe", hilfreich: "Spaß planen statt spontan" },
      { partner: "SX5", dynamik: "Rückzug + Möglichkeiten", gefahr: "Nähe-Flucht", hilfreich: "Balance von Rückzug und Spiel" },
      { partner: "SE6", dynamik: "Absicherung trifft Optimismus", gefahr: "Misstrauen gegen Leichtigkeit", hilfreich: "Gemeinsame Ziele spielerisch angehen" },
      { partner: "SO6", dynamik: "Absicherung vs. Spontaneität", gefahr: "Konflikt Planung vs. Freiheit", hilfreich: "Klare Absprachen, Freiräume lassen" },
      { partner: "SX6", dynamik: "Sicherheit sucht Abenteuer", gefahr: "SE7 weicht Unsicherheiten aus, SX6 fühlt sich allein gelassen", hilfreich: "Abenteuer klar strukturieren" },
      { partner: "SE7", dynamik: "Optimismus trifft Optimismus", gefahr: "Realitätsflucht, keine Tiefe", hilfreich: "Bewusst Erdung einbauen" },
      { partner: "SO7", dynamik: "Freiheit trifft Bühne", gefahr: "Zu viel Außenorientierung", hilfreich: "Balance von Publikum und Privatem" },
      { partner: "SX7", dynamik: "Freiheit trifft Intensität", gefahr: "Schnell Überforderung", hilfreich: "Auszeiten klar vereinbaren" },
      { partner: "SE8", dynamik: "Freiheitsdrang trifft Macht", gefahr: "Dominanzkonflikte", hilfreich: "Kraftvolle Projekte, Verantwortung teilen" },
      { partner: "SO8", dynamik: "Optimismus trifft Führungsenergie", gefahr: "Überrollt von Kontrolle", hilfreich: "Visionen praktisch umsetzen, Spielraum klar abgrenzen" },
      { partner: "SX8", dynamik: "Leichtigkeit trifft Intensität", gefahr: "Zu viel Drama oder Chaos", hilfreich: "Konflikten nicht ausweichen" },
      { partner: "SE9", dynamik: "Energie trifft Ruhe", gefahr: "Verflüchtigung in Passivität", hilfreich: "Impulse und Pausen ausgleichen" },
      { partner: "SO9", dynamik: "Abenteuerlust trifft Gemeinschaft", gefahr: "Konflikte werden verdrängt", hilfreich: "Klar über Wünsche sprechen" },
      { partner: "SX9", dynamik: "Freiheit trifft Verschmelzung", gefahr: "Abhängigkeit oder Rastlosigkeit", hilfreich: "Grenzen und Freiräume definieren" },
    ],
    kurzfassung: `Biete gemeinsamen Genuss und Geselligkeit, statt nur Ernsthaftigkeit einzufordern. Würdige ihre Großzügigkeit, wenn sie teilt statt sammelt. Formuliere Struktur als Angebot, nicht als Einschränkung – Zwang löst Widerstand aus, Einladung Offenheit.`,
  },
  SO7: {
    tier: "Biber",
    erkennung: `Die soziale Sieben sucht Sinn nicht im individuellen Genuss wie die SE7, sondern in gemeinsamen Projekten und Visionen: Sie will etwas erschaffen, das alle verbindet. In meinem Buch <em>Enneagramm Zoo</em> beschreibe ich das Bild des <strong>Bibers</strong>, der mit Bauhelm und Bauplänen voller Tatendrang bereitsteht – er baut Dämme, organisiert Strukturen, hält das Wasser des Lebens in Bewegung. Er will Gutes tun, will beitragen, und merkt dabei kaum, wie sehr ihn seine Aktivität erschöpft.<br><br>Anders als die selbsterhaltende Sieben, deren Fülle sich im eigenen Komfort zeigt, sucht die SO7 Erfüllung im gemeinsamen Schaffen und im Dienst an einer Idee. Wer das versteht, liest ihr ständiges Projektestarten nicht als Sprunghaftigkeit um ihrer selbst willen, sondern als den Versuch, Sinn und Zugehörigkeit durch Beitrag zu etwas Größerem zu finden – auch wenn sie dabei kaum spürt, wie sehr sie sich selbst dabei erschöpft.`,
    wunde: {
      titel: "Die Wunde dahinter",
      text: `Dahinter liegt die <strong>Wunde der Schmerzvermeidung</strong>: das Gefühl, dass tiefere Gefühle – besonders Schmerz, Verlust und Begrenztheit – zu bedrohlich sind, um ihnen zu begegnen. Bei der SO7 verbirgt sich diese Vermeidung hinter Idealismus und sozialem Engagement. Der Glaubenssatz: "Wenn ich für etwas Gutes und Größeres lebe, bin ich wertvoll und gehöre dazu" – darunter: "Innehalten und Begrenzung wären ein Eingeständnis von Mangel." Die Leidenschaft Maßlosigkeit wird bei der SO7 für ein Ideal zurückgehalten: Die Flucht geschieht nicht im Genuss, sondern im Dienst an Vision, Gruppe und Zukunft. Wer das versteht, liest ihren scheinbar selbstlosen Einsatz nicht nur als Altruismus, sondern auch als eine edel wirkende Fortsetzung derselben Fluchtbewegung vor Stille und Schmerz.`,
    },
    fluegel: {
      titel: "Flügel-Nuance: SO7w6 und SO7w8",
      w1: { code: "SO7w6", route: "beruehmte-elon-musk", name: "Elon Musk", text: `der Idealismus bekommt eine visionärere, systemischere Note – Engagement wird auch zur großen, langfristigen Mission, nicht nur zum aktuellen Projekt. Reagiert gut auf Anerkennung für die große Vision, weniger gut auf kleinteilige Kritik ohne Bezug zum größeren Ziel.` },
      w2: { code: "SO7w8", route: "beruehmte-drew-barrymore", name: "Drew Barrymore", text: `der Idealismus wird durchsetzungsstärker, mit einem Hang zu sichtbarer, energiegeladener Umsetzung verbunden – Engagement soll auch mit spürbarer Wirkung verbunden sein. Reagiert gut auf direkte, lebendige Zusammenarbeit, weniger gut auf zögerliches, unentschlossenes Vorgehen.` },
    },
    stressWachstum: {
      stress: `Unter Stress bewegt sich die SO7 Richtung <strong>Typ 1</strong>: Aus begeistertem Engagement wird plötzlich schroffe Kritik und moralischer Perfektionismus, oft gegen sich selbst gerichtet. Erkennst du dieses Muster, ist das ein Signal für erhöhten inneren Druck – kein guter Moment für weitere Erwartungen, ein guter Moment für Entlastung ohne Bewertung.`,
      wachstum: `Im Wachstum bewegt sie sich Richtung <strong>Typ 5</strong>: konzentrierter, tiefer, weniger zerstreut – der Idealismus bleibt, gewinnt aber an Substanz, weil ein stabileres inneres Genügen entsteht.`,
    },
    ankommt: [
      `<strong>Ihr Engagement für gemeinsame Projekte konkret würdigen.</strong> Die SO7 investiert oft unsichtbare Erschöpfung in Vorhaben für andere – das beim Namen zu nennen, wirkt tiefer als allgemeines Lob.`,
      `<strong>Gemeinsame Visionen und Ideen aktiv aufgreifen.</strong> Die SO7 blüht auf, wenn ihre Begeisterung geteilt wird, nicht nur toleriert.`,
      `<strong>Nach ihrer eigenen Erschöpfung fragen, nicht nur nach dem nächsten Projekt.</strong> Die SO7 wird selten von sich aus über eigene Grenzen sprechen – aktives Nachfragen öffnet oft mehr, als erwartet.`,
    ],
    trigger: [
      { trigger: `Ihre Projekte oder Ideen pauschal als oberflächlich oder zu viel abtun`, warum: `Trifft den wunden Punkt direkt – die SO7 erlebt ihr Engagement als sinnstiftend, nicht als Ablenkung`, alternative: `Konkret benennen, was an dem Vorhaben trägt, bevor man die Menge oder das Tempo anspricht` },
      { trigger: `Sie zwingen, mitten im Schwung innezuhalten oder Grenzen zu ziehen`, warum: `Löst Widerstand aus, weil Stille für die SO7 mit dem gefürchteten Kontakt zu Schmerz verbunden ist`, alternative: `Pausen als bewussten, gemeinsam gewählten Schritt anbieten, nicht als Zwang` },
      { trigger: `Ihre Erschöpfung übersehen, weil sie nach außen fröhlich wirkt`, warum: `Die SO7 zeigt Erschöpfung selten offen – Übersehen verstärkt das Muster, immer weiterzumachen`, alternative: `Aktiv nachfragen, wie es ihr wirklich geht, auch wenn sie strahlt` },
      { trigger: `Zu viele neue Projekte oder Optionen gleichzeitig anbieten`, warum: `Verstärkt die Zerstreuung, die der SO7 ohnehin schwerfällt zu begrenzen`, alternative: `Gemeinsam eine klare, begrenzte Priorität setzen und ein Projekt bewusst abschließen` },
    ],
    fuehrung: {
      titel: "Aus der Führungspraxis: wenn neue Projekte den Abschluss verhindern",
      text: `In unserem Buch <em>Führung mit Fundament</em> (das ich gemeinsam mit meinem Sohn David L. Rathmer geschrieben habe) beschreiben wir eine Typ-7-Führungskraft, die bewusst kein neues Projekt startet, sondern ein offenes abschließt. Der Weg dorthin: Durchhalten üben, Optionen begrenzen, Unangenehmes aushalten, Tiefe vor Breite wählen.<br><br>Für die SO7 heißt das übersetzt: Freiheit entsteht durch Fokus, nicht durch immer neue Möglichkeiten. Ein begonnenes Projekt zu Ende zu bringen, kann sich zunächst einschränkend anfühlen – schafft aber oft mehr echte Erfüllung als das nächste, ebenso begeisternde Vorhaben.`,
      hinweis: `Im Buch beschreiben wir diesen Fall auf Ebene des Grundtyps 7, nicht subtypspezifisch. Die soziale Färbung – der Einsatz gilt einer gemeinsamen Vision oder Gruppe, nicht dem eigenen Komfort oder einer exklusiven Beziehung – ist eine Ergänzung auf Basis der übrigen Quellen, kein wörtliches Zitat.`,
    },
    beziehung: {
      titel: `Beziehungsrisiko & heilende Bewegung`,
      risiko: `Die ständige Ausrichtung auf Projekte und Gruppen kann den Partner das Gefühl geben, nur einer von vielen Anliegen zu sein – echte, ungeteilte Nähe wird schwer, solange immer das nächste gemeinsame Vorhaben lockt.`,
      leitfragen: `Engagiere ich mich, weil es mir wirklich wichtig ist – oder um nicht bei der eigenen Stille und Begrenzung ankommen zu müssen?`,
      hilfreich: `Bewusst Zeit ohne Projekt und ohne Publikum einplanen – und erfahren, dass Zugehörigkeit nicht erst durch Beitrag verdient werden muss.`,
    },
    pairing: [
      { partner: "SE1", dynamik: "Normen vs. Gruppenabenteuer", gefahr: "SO7 wirkt flatterhaft, SE1 streng", hilfreich: "Projekte gemeinsam gestalten" },
      { partner: "SO1", dynamik: "Rolle × Rolle (Optimismus)", gefahr: "Oberflächlichkeit statt Tiefe", hilfreich: "Substanz und Leichtigkeit verbinden" },
      { partner: "SX1", dynamik: "Intensität vs. Enthusiasmus nach außen", gefahr: "Überdreht, oberflächlich", hilfreich: "Tiefe in Dosen pflegen" },
      { partner: "SE2", dynamik: "Fürsorge trifft Begeisterung im Sozialen", gefahr: "Überforderung durch Aktivität", hilfreich: "Tempo gemeinsam abstimmen" },
      { partner: "SO2", dynamik: "Beide lieben soziale Weite und Inspiration", gefahr: "Oberflächlichkeit, fehlende Tiefe", hilfreich: "Regelmäßig in Tiefe und Verbindlichkeit gehen" },
      { partner: "SX2", dynamik: "Bindung und Begeisterung in der Gruppe", gefahr: "Helfen kippt ins Zuviel, Sieben entzieht sich", hilfreich: "Klare Zeiten für Intimität reservieren" },
      { partner: "SE3", dynamik: "Leistung mit sozialem Optimismus", gefahr: "Verzettelung, keine Tiefe", hilfreich: "Fokussierung trainieren" },
      { partner: "SO3", dynamik: "Bühne + Ideenfeuerwerk", gefahr: "Viel Show, wenig Verbindlichkeit", hilfreich: "Verbindliche Meilensteine definieren" },
      { partner: "SX3", dynamik: "Intensität + Netzwerke", gefahr: "Außenorientierung überlagert Nähe", hilfreich: "Private Räume schützen" },
      { partner: "SE4", dynamik: "SE4 heimisch, SO7 gruppenorientiert", gefahr: "SE4 erlebt Oberflächlichkeit, SO7 Langeweile", hilfreich: "Heimisches Umfeld mit gemeinsamen Projekten verbinden" },
      { partner: "SO4", dynamik: "Sehnsucht vs. Bühne", gefahr: "Oberflächlichkeit", hilfreich: "Kreativität + Inspiration, Balance zwischen Tiefe und Spaß" },
      { partner: "SX4", dynamik: "Intensität vs. Vielfalt", gefahr: "Zerrissenheit", hilfreich: "Inspiration durch Gegensätze" },
      { partner: "SE5", dynamik: "Wissen vs. Abenteuer", gefahr: "Vernachlässigung des Tiefgangs", hilfreich: "Lernen und Erleben abwechseln" },
      { partner: "SO5", dynamik: "Gemeinschaft und Bühne", gefahr: "Überforderung", hilfreich: "Gemeinsame Projekte, Pausen einplanen" },
      { partner: "SX5", dynamik: "Wissen + Bühne", gefahr: "Ungleichgewicht in Präsenz", hilfreich: "Raum für beide Rollen lassen" },
      { partner: "SE6", dynamik: "Sicherheit im sozialen Feld", gefahr: "Zerstreuung", hilfreich: "Kreative Zusammenarbeit, klare Strukturen für Projekte" },
      { partner: "SO6", dynamik: "Loyalität im sozialen Kontext", gefahr: "Rollenabhängigkeit", hilfreich: "Privatzeit sichern" },
      { partner: "SX6", dynamik: "Loyalität trifft soziale Bühne", gefahr: "SX6 erlebt die Außenorientierung als Unsicherheit", hilfreich: "Bühne nur nutzen, wenn Rückzug abgesprochen ist" },
      { partner: "SE7", dynamik: "Freiheit trifft Bühne", gefahr: "Zu viel Außenorientierung", hilfreich: "Balance von Publikum und Privatem" },
      { partner: "SO7", dynamik: "Bühne trifft Bühne", gefahr: "Tiefe weicht Event-Hopping", hilfreich: "Fixe Tiefenfenster ohne Publikum" },
      { partner: "SX7", dynamik: "Bühne vs. Intensität", gefahr: "Eifersucht/Konkurrenz um Aufmerksamkeit", hilfreich: "Öffentliche und private Zeiten strikt abwechseln" },
      { partner: "SE8", dynamik: "Optimismus vs. Macht/Struktur", gefahr: "SO7 fühlt sich reguliert, SE8 von Sprunghaftigkeit genervt", hilfreich: "Visionen werden umgesetzt" },
      { partner: "SO8", dynamik: "Bühne vs. Einfluss", gefahr: "Statusspiele statt Nähe", hilfreich: "Führung teilen, Credits fair vergeben" },
      { partner: "SX8", dynamik: "Bühne vs. Intensität/Kontrolle", gefahr: "Überhitzung und Drama", hilfreich: "Deeskalationspausen vorab vereinbaren" },
      { partner: "SE9", dynamik: "Lebendigkeit vs. Harmonie", gefahr: "SE9 wird überrollt oder Projekte versanden", hilfreich: "Kleine, abgeschlossene Schritte planen" },
      { partner: "SO9", dynamik: "Gemeinschaft + Harmonie", gefahr: "Konflikte unter den Teppich kehren", hilfreich: "Regelmäßige Klarheitsrunden einführen" },
      { partner: "SX9", dynamik: "Bühne vs. Verschmelzung", gefahr: "SX9 verliert Stimme, SO7 Tiefe", hilfreich: "Eigenräume und Exklusivzeiten definieren" },
    ],
    kurzfassung: `Würdige ihr Engagement für gemeinsame Projekte konkret. Greif ihre Visionen und Ideen aktiv auf, statt sie nur zu tolerieren. Frag nach ihrer eigenen Erschöpfung – sie zeigt sie selten von sich aus, so fröhlich sie auch wirkt.`,
  },
  SX7: {
    tier: "Schimpanse",
    erkennung: `Die sexuelle Sieben ist die impulsivste, leidenschaftlichste Variante der Sieben: Sie lebt von Abenteuer, Spaß und intensiven Begegnungen. In meinem Buch <em>Enneagramm Zoo</em> beschreibe ich das Bild des <strong>Schimpansen</strong>, der im Zentrum der Manege mit brennenden Fackeln jongliert – Funken fliegen, alle Blicke sind auf ihn gerichtet, Gefahr wird zum Spiel. Charme, Witz und Energie machen ihn zum Entertainer, aber auch zum Meister der Ablenkung.<br><br>Anders als die selbsterhaltende oder soziale Sieben zeigt sich die SX7 unmittelbar im Kontakt: Sie sucht Intensität in Begegnungen, nicht in Genuss oder gemeinsamen Projekten. Wer das versteht, liest ihre Rastlosigkeit nicht als Oberflächlichkeit, sondern als Ausdruck einer stillen Sehnsucht nach Tiefe, die sich hinter dem Lachen versteckt – "in seinem Lachen liegt Sehnsucht nach Tiefe, in seinem Spiel ein Schatten von Angst, still zu werden."`,
    wunde: {
      titel: "Die Wunde dahinter",
      text: `Dahinter liegt die <strong>Wunde der Schmerzvermeidung</strong>: das Gefühl, dass tiefere Gefühle – besonders Schmerz, Verlust und Begrenztheit – zu bedrohlich sind, um ihnen zu begegnen. Bei der SX7 überstrahlt die Euphorie die nüchterne Wirklichkeit. Der Glaubenssatz: "Das wahre Leben ist aufregend, leuchtend, grenzenlos – das Gewöhnliche genügt nicht" – darunter: "Wenn ich innehalte, holt mich die nüchterne Leere ein." Die Leidenschaft Maßlosigkeit wird bei der SX7 am glühendsten gelebt: als Hunger nach Intensität, Idealisierung und außergewöhnlichen Erfahrungen. Wer das versteht, liest ihr ständiges Springen von einem Reiz zum nächsten nicht als Bindungsunfähigkeit an sich, sondern als eine tief sitzende Flucht vor der Stille, in der Schmerz spürbar werden könnte.`,
    },
    fluegel: {
      titel: "Flügel-Nuance: SX7w6 und SX7w8",
      w1: { code: "SX7w6", route: "beruehmte-morgan-freeman", name: "Morgan Freeman", text: `die Intensität bekommt eine wärmere, verbindlichere Note – Begeisterung wird auch mit Loyalität und persönlicher Nähe verbunden, nicht nur mit dem nächsten Reiz. Reagiert gut auf verlässliche, herzliche Verbundenheit, weniger gut auf kühle, unpersönliche Distanz.` },
      w2: { code: "SX7w8", route: "beruehmte-shakira", name: "Shakira", text: `die Intensität wird durchsetzungsstärker, mit einem Hang zu kraftvoller, sichtbarer Umsetzung verbunden – Abenteuer soll auch mit spürbarer Wirkung verbunden sein. Reagiert gut auf direkte, energiegeladene Zusammenarbeit, weniger gut auf zögerliches, ängstliches Vorgehen.` },
    },
    stressWachstum: {
      stress: `Unter Stress bewegt sich die SX7 Richtung <strong>Typ 1</strong>: Aus impulsiver Leichtigkeit wird plötzlich schroffe Kritik und rigider Perfektionismus, oft gegen sich selbst gerichtet. Erkennst du dieses Muster, ist das ein Signal für erhöhten inneren Druck – kein guter Moment für weitere Anforderungen, ein guter Moment für Entlastung ohne Bewertung.`,
      wachstum: `Im Wachstum bewegt sie sich Richtung <strong>Typ 5</strong>: konzentrierter, tiefer, weniger rastlos – die Intensität bleibt, gewinnt aber an Substanz, weil ein stabileres inneres Genügen entsteht.`,
    },
    ankommt: [
      `<strong>Volle, lebendige Präsenz in intensiven Momenten.</strong> Die SX7 spürt sofort, ob jemand wirklich mitgeht oder nur höflich dabei ist – halbe Begeisterung wirkt schnell enttäuschend.`,
      `<strong>Eine Beziehung vertiefen wollen, statt sie oberflächlich zu halten.</strong> Wenn die SX7 spürt, dass echtes Interesse an ihr als Person besteht, öffnet sie sich leichter als bei bloßem Smalltalk.`,
      `<strong>Ihre Verletzlichkeit würdigen, wenn sie sichtbar wird.</strong> Hinter dem Lachen und der Energie liegt oft echte Sehnsucht – wird sie einmal sichtbar, ist konkrete Anerkennung dafür ein bedeutsamer Moment.`,
    ],
    trigger: [
      { trigger: `Ihre Begeisterung oder Rastlosigkeit als oberflächlich abtun`, warum: `Trifft den wunden Punkt direkt – die SX7 erlebt Intensität als ihren Weg, lebendig zu sein, nicht als Ablenkung`, alternative: `Nach der Sehnsucht hinter der Energie fragen, statt das Verhalten zu bewerten` },
      { trigger: `Stille oder Nähe ohne Vorwarnung erzwingen`, warum: `Löst die tiefste Angst vor unausweichlichem Schmerz oder Langeweile aus`, alternative: `Ruhige Momente behutsam und mit Vorlauf einführen, nicht plötzlich verordnen` },
      { trigger: `Traurigkeit oder Verletzlichkeit bei ihr wegwitzeln oder überspielen lassen`, warum: `Bestätigt das Muster, echten Schmerz durch Ablenkung zu vermeiden, statt ihn zuzulassen`, alternative: `Freundlich, aber bestimmt beim Gefühl bleiben, auch wenn Humor als Ausweg versucht wird` },
      { trigger: `Eine Beziehung immer oberflächlich halten, nie in die Tiefe gehen`, warum: `Bestätigt die Angst, dass echte Nähe nicht möglich oder nicht gewollt ist`, alternative: `Aktiv Momente echter Tiefe anbieten, auch wenn sie zunächst ungewohnt wirken` },
    ],
    fuehrung: {
      titel: "Aus der Führungspraxis: wenn Ablenkung Konflikte umgeht",
      text: `In unserem Buch <em>Führung mit Fundament</em> (das ich gemeinsam mit meinem Sohn David L. Rathmer geschrieben habe) beschreiben wir einen Typ-7-Teamleiter, der ein Teamevent organisiert, anstatt eine strukturelle Spannung im Team anzusprechen. Was hier hilft: Erdung, Verbindlichkeit, Dranbleiben. Führungshinweis: Die Sieben im Thema halten – auch wenn es unbequem wird.<br><br>Für die SX7 heißt das übersetzt: Die Fähigkeit, Stimmung und Energie zu heben, ist eine echte Stärke – hilfreich wird sie erst, wenn sie nicht zum Ausweichen vor notwendigen, unbequemen Gesprächen wird. Beim Thema zu bleiben, auch wenn es schwerfällt, schafft oft mehr echte Verbindung als jede Ablenkung.`,
      hinweis: `Im Buch beschreiben wir diesen Fall auf Ebene des Grundtyps 7, nicht subtypspezifisch. Die sexuelle Färbung – die Ablenkung zeigt sich als unmittelbare, intensive Begegnung statt als neues Projekt oder Genuss – ist eine Ergänzung auf Basis der übrigen Quellen, kein wörtliches Zitat.`,
    },
    beziehung: {
      titel: `Beziehungsrisiko & heilende Bewegung`,
      risiko: `Die ständige Suche nach dem nächsten intensiven Erlebnis kann den Partner das Gefühl geben, nie wirklich der Mittelpunkt zu sein – echte Tiefe entsteht schwer, solange jede Beziehung eine von vielen bleibt.`,
      leitfragen: `Suche ich diese Intensität, weil sie mir wirklich wichtig ist – oder um nicht bei der Stille ankommen zu müssen, die mich ängstigt?`,
      hilfreich: `Bewusst bei einer Beziehung bleiben, statt zur nächsten zu springen – und Traurigkeit zulassen, statt sie wegzulachen.`,
    },
    pairing: [
      { partner: "SE1", dynamik: "Struktur vs. intensive Leichtigkeit", gefahr: "SE1 kritisiert, SX7 flieht", hilfreich: "Fehler freundlich ansprechen" },
      { partner: "SO1", dynamik: "Rolle × Exklusives Abenteuer", gefahr: "Pflicht vs. Flucht", hilfreich: "Abenteuer planen, Pflicht lockern" },
      { partner: "SX1", dynamik: "Intensität × Leichtigkeit", gefahr: "Unruhe, Nähefflucht", hilfreich: "Balance aus Abenteuer + Verlässlichkeit suchen" },
      { partner: "SE2", dynamik: "Helfen trifft exklusive Begeisterung", gefahr: "Klammern vs. Flucht", hilfreich: "Grenzen früh absprechen" },
      { partner: "SO2", dynamik: "Gemeinschaft trifft Intensitätssuche", gefahr: "SO2 überrollt SX7 mit Gemeinschaftsprojekten", hilfreich: "Freiräume klar respektieren" },
      { partner: "SX2", dynamik: "Intensität und Spontaneität", gefahr: "Überhitzung, Erschöpfung", hilfreich: "Pausen bewusst einplanen" },
      { partner: "SE3", dynamik: "Vision mit Abenteuerlust", gefahr: "Rastlosigkeit", hilfreich: "Verbindlichkeit üben" },
      { partner: "SO3", dynamik: "Ausstrahlung + Abenteuerlust", gefahr: "Unruhe, Tiefe wird gemieden", hilfreich: "Tiefe Gespräche als Fixpunkt einplanen" },
      { partner: "SX3", dynamik: "Intensität × Begeisterung", gefahr: "Überhitzung, Haltlosigkeit", hilfreich: "Erdung einplanen" },
      { partner: "SE4", dynamik: "SE4 Geborgenheit, SX7 Intensität und Ablenkung", gefahr: "SE4 klammert, SX7 sucht Abwechslung", hilfreich: "Exklusivität mit Spiel kombinieren" },
      { partner: "SO4", dynamik: "Sehnsucht vs. Abenteuer", gefahr: "Sprunghaftigkeit verletzt Sehnsucht", hilfreich: "Klare Absprachen treffen" },
      { partner: "SX4", dynamik: "Leidenschaft vs. Abenteuer", gefahr: "Unruhe", hilfreich: "Klarheit über Grenzen" },
      { partner: "SE5", dynamik: "Distanz vs. Intensität", gefahr: "Überforderung durch Wechsel", hilfreich: "Zeitpuffer einplanen" },
      { partner: "SO5", dynamik: "Gemeinschaft trifft Begeisterung", gefahr: "Unruhe", hilfreich: "Einen Fokus setzen" },
      { partner: "SX5", dynamik: "Tiefe + Vielfalt", gefahr: "Zerrissenheit", hilfreich: "Fokusfenster vereinbaren" },
      { partner: "SE6", dynamik: "Kontrolle und Abenteuerlust", gefahr: "Unsicherheit in Bindung", hilfreich: "Verbindliche Absprachen machen" },
      { partner: "SO6", dynamik: "Absicherung vs. Abenteuerlust", gefahr: "Unsicherheit", hilfreich: "Neues mit Rückhalt, Mut zu kleinen Risiken" },
      { partner: "SX6", dynamik: "Sicherheit versus Vielfalt", gefahr: "SX7 meidet Tiefe, SX6 klammert", hilfreich: "Verbindlichkeit in kleinen Schritten festigen" },
      { partner: "SE7", dynamik: "Freiheit trifft Intensität", gefahr: "Schnell Überforderung", hilfreich: "Auszeiten klar vereinbaren" },
      { partner: "SO7", dynamik: "Bühne vs. Intensität", gefahr: "Eifersucht/Konkurrenz um Aufmerksamkeit", hilfreich: "Öffentliche und private Zeiten strikt abwechseln" },
      { partner: "SX7", dynamik: "Begeisterung trifft Begeisterung", gefahr: "Ständige Ablenkung, fehlende Tiefe", hilfreich: "Feste Rituale gegen das Davonfliegen" },
      { partner: "SE8", dynamik: "Abenteuerlust vs. Dominanz", gefahr: "Machtkämpfe, Überspannung", hilfreich: "Klarer Rahmen für Freiheit" },
      { partner: "SO8", dynamik: "Spielfreude vs. Einfluss", gefahr: "Konkurrenz, Lautstärke", hilfreich: "Humor statt Rechthaben pflegen" },
      { partner: "SX8", dynamik: "Intensität und Abenteuer", gefahr: "Überhitzung, Impulsdurchbrüche", hilfreich: "Pausen bewusst einbauen" },
      { partner: "SE9", dynamik: "Bewegungsdrang vs. Ruhepol", gefahr: "Flucht vs. Trägheit", hilfreich: "Tempo absprechen" },
      { partner: "SO9", dynamik: "Geselligkeit vs. Anpassung", gefahr: "Konfliktvermeidung, Oberflächlichkeit", hilfreich: "Tiefgang bewusst suchen" },
      { partner: "SX9", dynamik: "Abenteuer vs. Verschmelzung", gefahr: "Abtauchen ohne Klarheit", hilfreich: "Eigene Bedürfnisse klar benennen" },
    ],
    kurzfassung: `Sei ganz präsent in intensiven Momenten, nicht nur unterhaltsam. Zeig echtes Interesse an Tiefe, nicht nur am nächsten Reiz. Würdige ihre Verletzlichkeit, wenn sie sichtbar wird – dahinter steckt oft echte Sehnsucht.`,
  },
  SE8: {
    tier: "Orang-Utan",
    erkennung: `Die selbsterhaltende Acht sichert sich nicht über sichtbare Bühnenpräsenz wie die anderen Achter-Varianten, sondern über konkrete, praktische Autonomie: ein eigenes Revier, das sie duldsam gegen Eingriffe von außen verteidigt. In meinem Buch <em>Enneagramm Zoo</em> beschreibe ich das Bild des <strong>Orang-Utans</strong>, der eine schwere Kiste mit einem Arm trägt – seine Kraft ist beeindruckend, doch sie trägt zugleich die große Last des Pflichtgefühls. Er wirkt ruhig, doch niemand sollte seine Stärke unterschätzen.<br><br>Anders als die soziale oder sexuelle Acht zeigt die SE8 ihre Macht bodenständig und pragmatisch: Sie baut Strukturen, die Bestand haben, schützt, was ihr gehört, mit Instinkt, Humor und einem feinen Gespür für Machtverhältnisse. Wer das versteht, liest ihre Selbstgenügsamkeit nicht als Kälte, sondern als eine tief sitzende Angst, abhängig oder ausgeliefert zu sein.`,
    wunde: {
      titel: "Die Wunde dahinter",
      text: `Dahinter liegt die <strong>Wunde der Verletzlichkeit</strong>: das tiefe Gefühl, dass das eigene Verletzt-werden-Können bedrohlich ist. Bei der SE8 wird die Verletzlichkeit hinter Unabhängigkeit und Selbstgenügsamkeit besonders gründlich verborgen. Der Glaubenssatz: "Schwäche ist gefährlich, ich muss autark sein, um sicher zu sein" – darunter: "Wer auf andere angewiesen ist oder Bedürftigkeit zeigt, macht sich angreifbar." Die Leidenschaft Wollust zeigt sich bei der SE8 als Drang nach Autonomie und Überleben: das handfeste Sichern der eigenen Bedürfnisse, ohne von jemandem abhängig zu sein. Wer das versteht, liest ihre Härte nicht als fehlendes Mitgefühl, sondern als eine Rüstung, die schützt – und zugleich isoliert.`,
    },
    fluegel: {
      titel: "Flügel-Nuance: SE8w7 und SE8w9",
      w1: { code: "SE8w7", route: "beruehmte-umberto-eco", name: "Umberto Eco", text: `die Stärke bekommt eine geistreichere, vielseitigere Note – Autonomie wird auch über intellektuelle Unabhängigkeit und Neugier ausgedrückt, nicht nur über physische Präsenz. Reagiert gut auf anregenden, lebendigen Austausch, weniger gut auf enge, kontrollierende Strukturen.` },
      w2: { code: "SE8w9", route: "beruehmte-winston-churchill", name: "Winston Churchill", text: `die Stärke wird gelassener, mit einem Hang zu langfristiger Standhaftigkeit verbunden – Macht zeigt sich in ruhiger Ausdauer statt in schnellem Zupacken. Reagiert gut auf verlässliche, geduldige Zusammenarbeit, weniger gut auf hektischen Druck.` },
    },
    stressWachstum: {
      stress: `Unter Stress bewegt sich die SE8 Richtung <strong>Typ 5</strong>: Aus robuster Präsenz wird plötzlich Rückzug und Isolation, ein Verschließen gegenüber allem, was Nähe verlangt. Erkennst du dieses Muster, ist das ein Signal für erhöhten inneren Druck – kein guter Moment für weitere Forderungen, ein guter Moment für geschützten Raum ohne Erwartungen.`,
      wachstum: `Im Wachstum bewegt sie sich Richtung <strong>Typ 2</strong>: fürsorglicher, großherziger, offener für echte Nähe – die Stärke bleibt, gewinnt aber Wärme, weil ein stabileres Vertrauen in andere entsteht.`,
    },
    ankommt: [
      `<strong>Direkte, klare Kommunikation ohne Umschweife.</strong> Die SE8 respektiert Ehrlichkeit weit mehr als diplomatisches Drumherumreden – auch wenn die Wahrheit unbequem ist.`,
      `<strong>Ihre Stärke anerkennen, ohne sie auszunutzen.</strong> Die SE8 gibt viel, wenn sie Vertrauen spürt – Anerkennung für ihre Verlässlichkeit stärkt diese Bereitschaft.`,
      `<strong>Verletzlichkeit selbst vorleben.</strong> Wenn andere zuerst Unsicherheit zeigen, fällt es der SE8 leichter, die eigene Rüstung ein Stück abzulegen.`,
    ],
    trigger: [
      { trigger: `Schwäche oder Bedürftigkeit bei ihr ansprechen, als wäre es ein Makel`, warum: `Trifft den wunden Punkt direkt – die SE8 hat gelernt, Verletzlichkeit als gefährlich zu erleben`, alternative: `Verletzlichkeit als menschlich und normal benennen, nicht als Schwäche werten` },
      { trigger: `Kontrolle über ihr Revier oder ihre Zuständigkeiten ohne Absprache übernehmen`, warum: `Wird als direkter Angriff auf die selbst erkämpfte Autonomie erlebt`, alternative: `Vorher fragen und Grenzen respektieren, auch wenn es unbequem erscheint` },
      { trigger: `Auf Widerspruch mit Rückzug statt mit klarer Position reagieren`, warum: `Verstärkt das Muster, dass es sich nicht lohnt, echte Meinungen zu äußern, weil ohnehin niemand widerspricht`, alternative: `Ehrlich widersprechen, wenn es angebracht ist – Klarheit wird respektiert, Anpassung nicht` },
      { trigger: `Ihre Fürsorge oder Großzügigkeit als selbstverständlich hinnehmen`, warum: `Übersieht, dass hinter der Stärke oft echte, aber selten gezeigte Zuwendung steckt`, alternative: `Die Fürsorge konkret würdigen, wenn sie sich zeigt` },
    ],
    fuehrung: {
      titel: "Aus der Führungspraxis: wenn Kontrolle Vertrauen kostet",
      text: `In unserem Buch <em>Führung mit Fundament</em> (das ich gemeinsam mit meinem Sohn David L. Rathmer geschrieben habe) beschreiben wir eine Führungskraft, die auf Bedenken zu einem neuen Schichtplan direkt unterbricht: "Wir müssen handlungsfähig bleiben. Gefühle können wir uns später anschauen." Der Raum friert ein, das Team reagiert mit Anpassung, Angst, innerem Rückzug – sie selbst interpretiert das als Stabilität. Der Wendepunkt kommt durch die Frage eines Moderators: "Was passiert hier, wenn jemand anderer Meinung ist?" Stille. Dann: "Man überlegt es sich gut." Zum ersten Mal erkennt sie: "Vielleicht habe ich Stärke mit Unverletzlichkeit verwechselt."<br><br>Für die SE8 heißt das übersetzt: Kontrolle statt Vertrauen, Härte statt Verletzlichkeit, Macht statt Kontakt – das sind echte Stärken, die aber Systeme ohne echte Beziehung lähmen können. Der einfache Satz "Ich höre mir das an" – gefolgt von echtem Zuhören – öffnet oft mehr, als jede schnelle Entscheidung.`,
      hinweis: `Im Buch beschreiben wir diesen Fall auf Ebene des Grundtyps 8, nicht subtypspezifisch. Die selbsterhaltende Färbung – die Kontrolle zeigt sich vor allem im konkreten, praktischen Revier, nicht in sozialer Bühne oder exklusiver Intensität – ist eine Ergänzung auf Basis der übrigen Quellen, kein wörtliches Zitat.`,
    },
    beziehung: {
      titel: `Beziehungsrisiko & heilende Bewegung`,
      risiko: `Die Selbstgenügsamkeit kann den Partner das Gefühl geben, nicht wirklich gebraucht zu werden – echte Nähe entsteht schwer, solange Verletzlichkeit als Risiko statt als Verbindung erlebt wird.`,
      leitfragen: `Bleibe ich stark, weil es wirklich nötig ist – oder aus der alten Angst heraus, dass Verletzlichkeit mich angreifbar macht?`,
      hilfreich: `Bewusst um Hilfe bitten und Bedürftigkeit zeigen, auch wenn es ungewohnt ist – und erfahren, dass Sich-Verlassen-Können nicht schwächt, sondern verbindet.`,
    },
    pairing: [
      { partner: "SE1", dynamik: "Kontrolle vs. Machtanspruch", gefahr: "Konflikt um Dominanz", hilfreich: "Feste Regeln, Respekt wahren" },
      { partner: "SO1", dynamik: "Rolle × Macht (praktisch)", gefahr: "Kontrolle vs. Dominanz", hilfreich: "Kraft mit Struktur gebündelt" },
      { partner: "SX1", dynamik: "Intensität × Kraft", gefahr: "Machtkampf, Dominanz", hilfreich: "Leidenschaft + Schutz" },
      { partner: "SE2", dynamik: "Helfen trifft Stärke und Kontrolle", gefahr: "Dominanz vs. Überfürsorge", hilfreich: "Kraftvolle Unterstützung" },
      { partner: "SO2", dynamik: "Gemeinschaft trifft Kraft und Schutz", gefahr: "Dominanzkonflikte oder Gefühl der Vereinnahmung", hilfreich: "Stabile Führung in Gruppen, klare Rollen" },
      { partner: "SX2", dynamik: "Fürsorge und Kraft", gefahr: "Kontrolle vs. Vereinnahmung", hilfreich: "Wärme trifft Schutz" },
      { partner: "SE3", dynamik: "Leistung plus Macht", gefahr: "Dominanzkämpfe", hilfreich: "Macht teilen, nicht gegeneinander nutzen" },
      { partner: "SO3", dynamik: "Wirkung + Durchsetzung", gefahr: "Machtkampf, Härte", hilfreich: "Macht teilen, Anerkennung geben" },
      { partner: "SX3", dynamik: "Intensität + Macht", gefahr: "Dominanzkämpfe", hilfreich: "Kraftvolles Bündnis" },
      { partner: "SE4", dynamik: "SE4 Sicherheit, SE8 Durchsetzung", gefahr: "SE4 fühlt sich überrollt, SE8 genervt von Rückzug", hilfreich: "Grenzen klarstellen, Stärken anerkennen" },
      { partner: "SO4", dynamik: "Gefühl vs. Macht", gefahr: "SO4 fühlt sich überrollt", hilfreich: "Gefühle mutig äußern" },
      { partner: "SX4", dynamik: "Tiefe vs. Macht", gefahr: "Dominanzkämpfe", hilfreich: "Leidenschaft mit Stärke, Grenzen respektieren" },
      { partner: "SE5", dynamik: "Ruhe vs. Kraft", gefahr: "Dominanz überrollt Rückzug", hilfreich: "Eigene Grenzen klar halten" },
      { partner: "SO5", dynamik: "Gemeinschaft vs. Kontrolle", gefahr: "Machtgefälle", hilfreich: "Struktur + Kraft, Respekt klären" },
      { partner: "SX5", dynamik: "Rückzug + Macht", gefahr: "Dominanz und Schweigen", hilfreich: "Grenzen offenlegen" },
      { partner: "SE6", dynamik: "Sicherheit und Durchsetzung", gefahr: "Unterordnung", hilfreich: "Grenzen klar setzen" },
      { partner: "SO6", dynamik: "Absicherung vs. Macht", gefahr: "Dominanz", hilfreich: "Struktur durch Führung, Respekt gegenseitig klarstellen" },
      { partner: "SX6", dynamik: "Loyalität trifft Stärke", gefahr: "Dominanz der SE8 triggert Zweifel", hilfreich: "Sicherheit klar einfordern, nicht vermuten" },
      { partner: "SE7", dynamik: "Freiheitsdrang trifft Macht", gefahr: "Dominanzkonflikte", hilfreich: "Kraftvolle Projekte, Verantwortung teilen" },
      { partner: "SO7", dynamik: "Optimismus vs. Macht/Struktur", gefahr: "SO7 fühlt sich reguliert, SE8 von Sprunghaftigkeit genervt", hilfreich: "Visionen werden umgesetzt" },
      { partner: "SX7", dynamik: "Abenteuerlust vs. Dominanz", gefahr: "Machtkämpfe, Überspannung", hilfreich: "Klarer Rahmen für Freiheit" },
      { partner: "SE8", dynamik: "Macht trifft Macht – klare Dominanzfragen", gefahr: "Eskalation, wenn keiner nachgibt", hilfreich: "Feste Absprachen, Respekt betonen" },
      { partner: "SO8", dynamik: "Einfluss + Macht, starke Außenwirkung", gefahr: "Überdominanz gegenüber Umfeld", hilfreich: "Auf Rücksicht nach innen achten" },
      { partner: "SX8", dynamik: "Intensität und Konfrontation pur", gefahr: "Explosive Konflikte, Machtspiele", hilfreich: "Streitkultur entwickeln, Nähe zulassen" },
      { partner: "SE9", dynamik: "Kraftvoll vs. ausgleichend", gefahr: "SE9 zieht sich zurück, SE8 dominiert", hilfreich: "SE8 soll Pausen lassen, SE9 klar benennen" },
      { partner: "SO9", dynamik: "Durchsetzung vs. Harmonie im Feld", gefahr: "Konfliktvermeidung blockiert Klarheit", hilfreich: "Macht + Vermittlung wirken konstruktiv" },
      { partner: "SX9", dynamik: "Stärke trifft Bindungssehnsucht", gefahr: "Verschmelzung ohne klare Grenze", hilfreich: "Grenzen und Nähe bewusst balancieren" },
    ],
    kurzfassung: `Sei direkt und ehrlich, ohne Umschweife – Diplomatie wirkt bei ihr schnell unglaubwürdig. Erkenne ihre Stärke an, ohne sie auszunutzen. Zeig selbst Verletzlichkeit vor – das macht es ihr leichter, die eigene Rüstung ein Stück abzulegen.`,
  },
  SO8: {
    tier: "Löwe",
    erkennung: `Die soziale Acht sichert sich nicht durch individuelles Revier wie die SE8, sondern durch sichtbare Führung und Verantwortung für die Gruppe: Sie will beschützen, ordnen, Richtung geben. In meinem Buch <em>Enneagramm Zoo</em> beschreibe ich das Bild des <strong>Löwen</strong>, der hoch auf einem Felsen thront und majestätisch brüllt – seine Präsenz erfüllt den Raum, ein Sinnbild natürlicher Autorität. Er braucht sein Rudel, seine Aufgabe, seinen Platz an der Spitze.<br><br>Anders als die selbsterhaltende Acht, deren Macht sich im eigenen Revier zeigt, wächst die Macht der SO8, wenn sie für andere sichtbar wird. Wer das versteht, liest ihre Autorität nicht als Machtgier, sondern als Ausdruck der Sorge, schwach oder übergangen zu werden – ihr männlicher oder weiblicher Stolz ist zugleich Schutzpanzer und Verpflichtung gegenüber denen, für die sie Verantwortung trägt.`,
    wunde: {
      titel: "Die Wunde dahinter",
      text: `Dahinter liegt die <strong>Wunde der Verletzlichkeit</strong>: das tiefe Gefühl, dass das eigene Verletzt-werden-Können bedrohlich ist. Bei der SO8 verbirgt sich diese Verletzlichkeit hinter der Rolle des Starken, der für alle anderen da ist. Der Glaubenssatz: "Schwäche ist gefährlich, ich muss stark sein, um andere zu schützen" – darunter: "Wenn ich selbst Bedürftigkeit zeige, lasse ich die im Stich, die auf mich zählen." Die Leidenschaft Wollust richtet sich bei der SO8 nach außen, in den Schutz anderer: Verantwortung, Loyalität und das Einstehen für die Gruppe. Wer das versteht, liest ihr Bedürfnis, immer die Führung zu übernehmen, nicht als Kontrollzwang, sondern als eine Rolle, die Verletzlichkeit unsichtbar macht – auch für sie selbst.`,
    },
    fluegel: {
      titel: "Flügel-Nuance: SO8w7 und SO8w9",
      w1: { code: "SO8w7", route: "beruehmte-michelle-obama", name: "Michelle Obama", text: `die Führungskraft bekommt eine energiegeladenere, inspirierendere Note – Autorität wird auch über Begeisterung und Vielseitigkeit ausgedrückt, nicht nur über Ernst. Reagiert gut auf lebendige, vorwärtsgerichtete Zusammenarbeit, weniger gut auf starre, bürokratische Strukturen.` },
      w2: { code: "SO8w9", route: "beruehmte-helmut-kohl", name: "Helmut Kohl", text: `die Führungskraft wird gelassener, mit einem Hang zu langfristiger, geduldiger Standhaftigkeit verbunden – Autorität zeigt sich in ruhiger Beständigkeit statt schnellem Zupacken. Reagiert gut auf verlässliche, geduldige Zusammenarbeit, schlecht auf hektischen Druck.` },
    },
    stressWachstum: {
      stress: `Unter Stress bewegt sich die SO8 Richtung <strong>Typ 5</strong>: Aus präsenter Führung wird plötzlich Rückzug und Isolation, ein Verschließen gegenüber allem, was Nähe verlangt. Erkennst du dieses Muster, ist das ein Signal für erhöhten inneren Druck – kein guter Moment für weitere Forderungen, ein guter Moment für geschützten Raum ohne Erwartungen.`,
      wachstum: `Im Wachstum bewegt sie sich Richtung <strong>Typ 2</strong>: fürsorglicher, großherziger, offener für echte Nähe – die Führungsstärke bleibt, gewinnt aber Wärme, weil ein stabileres Vertrauen in andere entsteht.`,
    },
    ankommt: [
      `<strong>Direkte, klare Kommunikation ohne Umschweife.</strong> Die SO8 respektiert Ehrlichkeit weit mehr als diplomatisches Drumherumreden – auch wenn die Wahrheit unbequem ist.`,
      `<strong>Ihre Verantwortungsübernahme für die Gruppe würdigen.</strong> Die SO8 trägt oft unsichtbare Last für andere – das konkret anzuerkennen, wirkt tiefer als allgemeines Lob.`,
      `<strong>Ihr Macht teilen lassen, ohne sie zu entmachten.</strong> Wenn die SO8 spürt, dass Verantwortung geteilt werden darf, ohne die eigene Rolle zu verlieren, entspannt sich vieles.`,
    ],
    trigger: [
      { trigger: `Ihre Autorität öffentlich infrage stellen, ohne es vorher unter vier Augen zu klären`, warum: `Wird als direkter Angriff auf die Position erlebt, die sie für andere aufrechterhält`, alternative: `Kritik oder Widerspruch zunächst im Vieraugengespräch anbringen` },
      { trigger: `Schwäche oder Bedürftigkeit bei ihr ansprechen, als wäre es ein Makel`, warum: `Trifft den wunden Punkt direkt – die SO8 hat gelernt, dass ihre Stärke unentbehrlich für andere ist`, alternative: `Verletzlichkeit als menschlich und normal benennen, nicht als Schwäche werten` },
      { trigger: `Auf ihre Führung mit stillem Rückzug statt mit klarer Position reagieren`, warum: `Verstärkt das Muster, dass es sich nicht lohnt, echte Meinungen zu äußern, weil ohnehin niemand widerspricht`, alternative: `Ehrlich widersprechen, wenn es angebracht ist – Klarheit wird respektiert, Anpassung nicht` },
      { trigger: `Ihre Fürsorge für die Gruppe als selbstverständlich hinnehmen`, warum: `Übersieht, dass hinter der Führungsrolle oft echte, aber selten gezeigte Zuwendung steckt`, alternative: `Die Fürsorge konkret würdigen, wenn sie sich zeigt` },
    ],
    fuehrung: {
      titel: "Aus der Führungspraxis: wenn wahre Stärke in Feinfühligkeit liegt",
      text: `In unserem Buch <em>Führung mit Fundament</em> (das ich gemeinsam mit meinem Sohn David L. Rathmer geschrieben habe) beschreiben wir eine Führungskraft, die innehält und wirklich zuhört, statt eine Entscheidung durchzudrücken. Der Weg dorthin: Verletzlichkeit zulassen, Zwischentöne wahrnehmen, Kontrolle abgeben, nicht alles selbst steuern müssen, Klarheit ohne Härte üben.<br><br>Für die SO8 heißt das übersetzt: Wahre Stärke zeigt sich in Feinfühligkeit, nicht nur in Durchsetzungskraft. Eine Entscheidung zu verzögern, um wirklich zuzuhören, kann sich zunächst wie Kontrollverlust anfühlen – schafft aber oft mehr echtes Vertrauen als jede schnelle, durchgedrückte Lösung.`,
      hinweis: `Im Buch beschreiben wir diesen Fall auf Ebene des Grundtyps 8, nicht subtypspezifisch. Die soziale Färbung – die Führung richtet sich sichtbar auf die ganze Gruppe, nicht auf ein einzelnes Revier – ist eine Ergänzung auf Basis der übrigen Quellen, kein wörtliches Zitat.`,
    },
    beziehung: {
      titel: `Beziehungsrisiko & heilende Bewegung`,
      risiko: `Die ständige Rolle des Beschützers kann den Partner das Gefühl geben, nie wirklich gebraucht zu werden – echte Gegenseitigkeit entsteht schwer, solange die SO8 immer die Starke sein muss.`,
      leitfragen: `Führe ich, weil es wirklich gebraucht wird – oder aus der alten Angst heraus, dass Verletzlichkeit mich angreifbar macht?`,
      hilfreich: `Bewusst um Hilfe bitten und Führung abgeben, auch wenn es ungewohnt ist – und erfahren, dass man führen und schützen kann, ohne zu besitzen.`,
    },
    pairing: [
      { partner: "SE1", dynamik: "Regeln vs. Statuskraft", gefahr: "Machtspiele, Statuskämpfe", hilfreich: "Klare Grenzen vereinbaren" },
      { partner: "SO1", dynamik: "Rolle × Rolle (Führung)", gefahr: "Autoritätenduell", hilfreich: "Transparenz wahren, Machtmissbrauch vermeiden" },
      { partner: "SX1", dynamik: "Intensität × Einfluss", gefahr: "Kontrolle, Konkurrenz", hilfreich: "Kraft + Ausstrahlung" },
      { partner: "SE2", dynamik: "Fürsorge trifft Führung im Feld", gefahr: "Hierarchie und Abhängigkeit", hilfreich: "Gleichwertigkeit betonen" },
      { partner: "SO2", dynamik: "Gemeinschaft und Einfluss bündeln sich", gefahr: "Gruppendruck, Kontrolltendenzen", hilfreich: "Machtbalance aushandeln" },
      { partner: "SX2", dynamik: "Nähe sucht Stärke im Feld", gefahr: "Dominanzkonflikte", hilfreich: "Schutz und Zuwendung" },
      { partner: "SE3", dynamik: "Wirkung und Status", gefahr: "Kälte und Machtspiele", hilfreich: "Menschlichkeit bewahren" },
      { partner: "SO3", dynamik: "Einfluss im Feld + Führung", gefahr: "Dominanz, Konkurrenz", hilfreich: "Starkes Leuchtturmpaar, Respektregeln vereinbaren" },
      { partner: "SX3", dynamik: "Intensität + Führung", gefahr: "Kontrolle im Außen", hilfreich: "Starkes öffentliches Paar, Innenraum pflegen" },
      { partner: "SE4", dynamik: "SE4 Rückzug, SO8 Machtausdruck im Außen", gefahr: "SE4 fühlt sich unsichtbar, SO8 dominiert", hilfreich: "Gleichwertigkeit betonen" },
      { partner: "SO4", dynamik: "Gefühl vs. Einfluss", gefahr: "Dominanz", hilfreich: "Wechselseitig Grenzen achten" },
      { partner: "SX4", dynamik: "Gefühl vs. Kontrolle", gefahr: "Manipulationsverdacht", hilfreich: "Schutz durch Stärke, ehrlich bleiben" },
      { partner: "SE5", dynamik: "Rückzug vs. Einfluss", gefahr: "Machtkämpfe um Sichtbarkeit", hilfreich: "Balance von Präsenz und Tiefe, Machtfragen benennen" },
      { partner: "SO5", dynamik: "Gemeinschaft vs. Kontrolle", gefahr: "Machtgefälle", hilfreich: "Struktur + Kraft, Respekt klären" },
      { partner: "SX5", dynamik: "Wissen + Einfluss", gefahr: "Machtspiel", hilfreich: "Führung mit Substanz, Rollen klären" },
      { partner: "SE6", dynamik: "Loyalität und Machtbewusstsein", gefahr: "Abhängigkeit", hilfreich: "Führung mit Rückhalt, gegenseitige Anerkennung betonen" },
      { partner: "SO6", dynamik: "Loyalität vs. Einfluss", gefahr: "Machtspiele", hilfreich: "Gemeinsame Stärke, Verantwortung teilen" },
      { partner: "SX6", dynamik: "Treue trifft Macht im Gefüge", gefahr: "SO8 überrollt mit Einflussdrang", hilfreich: "Rollen früh festlegen" },
      { partner: "SE7", dynamik: "Optimismus trifft Führungsenergie", gefahr: "SO7 fühlt sich reguliert, SE8 von Sprunghaftigkeit genervt", hilfreich: "Visionen werden umgesetzt, Spielraum klar abgrenzen" },
      { partner: "SO7", dynamik: "Bühne vs. Einfluss", gefahr: "Statusspiele statt Nähe", hilfreich: "Führung teilen, Credits fair vergeben" },
      { partner: "SX7", dynamik: "Spielfreude vs. Einfluss", gefahr: "Konkurrenz, Lautstärke", hilfreich: "Humor statt Rechthaben pflegen" },
      { partner: "SE8", dynamik: "Einfluss + Macht, starke Außenwirkung", gefahr: "Überdominanz gegenüber Umfeld", hilfreich: "Auf Rücksicht nach innen achten" },
      { partner: "SO8", dynamik: "Macht + Einfluss", gefahr: "Machtkampf im sozialen Feld", hilfreich: "Zuständigkeiten klar verteilen" },
      { partner: "SX8", dynamik: "Dominanz + Intensität", gefahr: "Explosiver Streit, Besitzansprüche", hilfreich: "Machtspiele früh ansprechen" },
      { partner: "SE9", dynamik: "Führung + Harmonie", gefahr: "SE9 zieht sich zurück, SO8 fühlt sich allein", hilfreich: "SE9 aktiv einbinden, SO8 Tempo drosseln" },
      { partner: "SO9", dynamik: "Führung + soziale Ruhe", gefahr: "SO8 wird dominant, SO9 passt sich zu sehr an", hilfreich: "SO9 ermutigen, Position zu beziehen" },
      { partner: "SX9", dynamik: "Einfluss + Hingabe", gefahr: "SX9 verliert eigene Stimme, SO8 nutzt Übergewicht", hilfreich: "SO8 übt Milde, SX9 übt klare Sprache" },
    ],
    kurzfassung: `Sei direkt und ehrlich, ohne Umschweife. Würdige ihre Verantwortung für die Gruppe konkret. Lass sie Macht teilen, ohne sie zu entmachten – geteilte Verantwortung stärkt Vertrauen mehr als alleinige Kontrolle.`,
  },
  SX8: {
    tier: "Krokodil",
    erkennung: `Wo die SE8 ihr Revier sichert und die SO8 ihre Gruppe führt, sucht die SX8 die totale Verschmelzung mit einem einzigen Gegenüber. In meinem Buch <em>Enneagramm Zoo</em> beschreibe ich das Bild des <strong>Krokodils</strong>, das lange reglos im Wasser lauert, um dann blitzschnell und mit voller Wucht zuzuschnappen – die sexuelle Acht kennt keine halben Sachen: Vertrauen oder Angriff, Nähe oder Rückzug, alles oder nichts. Ihre Leidenschaft ist radikale Echtheit – sie will nicht kontrollieren um der Kontrolle willen, sondern sich in absoluter Intensität wirklich spüren. Genau darin liegt die Falle: Wo andere Menschen Nähe schrittweise aufbauen, drängt die SX8 auf sofortige, ungefilterte Präsenz und kann dabei wie eine Machtprobe wirken, obwohl es eigentlich um Hingabe geht.`,
    wunde: { titel: "Die Wunde dahinter", text: `Dahinter liegt die <strong>Wunde der Verletzlichkeit</strong> – das tiefe Gefühl, dass Verletzt-werden-Können bedrohlich ist. Bei der SX8 verbirgt sich diese Verletzlichkeit besonders gut hinter leidenschaftlicher Intensität und dem Drang, zu besitzen und herauszufordern: Wer angreift, bevor er selbst angegriffen wird, muss die eigene Angst vor dem Verlassenwerden nie zeigen. Der Glaubenssatz dahinter: „Wer sich hingibt, ohne zu kontrollieren, verliert.“` },
    fluegel: {
      titel: "Flügel-Nuance: SX8w7 und SX8w9",
      w1: { code: "SX8w7", route: "beruehmte-pablo-picasso", name: "Pablo Picasso", text: `Bei stark ausgeprägtem 7er-Flügel wird die Intensität schöpferisch und expansiv – Leidenschaft sucht ständig neue Ausdrucksformen, neue Eroberungen, neue Bilder. Die Kompromisslosigkeit bleibt, wird aber von Neugier und Tempo angetrieben statt von reiner Konfrontation.` },
      w2: { code: "SX8w9", route: "beruehmte-ruth-bader-ginsburg", name: "Ruth Bader Ginsburg", text: `Bei stark ausgeprägtem 9er-Flügel wirkt dieselbe unerschütterliche Intensität nach außen ruhiger, fast beharrlich – die Kompromisslosigkeit zeigt sich nicht als Lautstärke, sondern als zähe, kaum zu erschütternde Standfestigkeit über sehr lange Zeiträume hinweg.` },
    },
    stressWachstum: { stress: `Unter Stress bewegt sich die SX8 Richtung <strong>Typ 5</strong>: Der offene Kampf weicht kühlem Rückzug, Misstrauen wird zu beobachtender Distanz, aus Konfrontation wird eisiges Schweigen – eine Verteidigungsstrategie, die genauso viel schützt wie verletzt.`, wachstum: `In Reife bewegt sich die SX8 Richtung <strong>Typ 2</strong>: Aus besitzergreifender Intensität wird echte, großzügige Zuwendung. Kraft dient nicht mehr der Kontrolle, sondern der Fürsorge – Nähe wird geschenkt statt erobert.` },
    ankommt: [
      `Als jemand, der oder die volle Präsenz und Ehrlichkeit fordert – kein Ausweichen, keine halben Wahrheiten.`,
      `Manchmal als überfordernd intensiv, besonders wenn Nähe sich wie eine Machtprobe statt wie eine Einladung anfühlt.`,
      `Als verlässlicher, leidenschaftlicher Beschützer, sobald echtes Vertrauen gewachsen ist – dann ohne Vorbehalt loyal.`,
    ],
    trigger: [
      { trigger: `Ausweichen, Verharmlosen oder halbe Wahrheiten`, warum: `Bestätigt die Urangst, dass Nähe nicht sicher ist, weil das Gegenüber sich nicht ganz zeigt.`, alternative: `Direkt und ehrlich benennen, auch wenn es unangenehm ist – Klarheit beruhigt mehr als Diplomatie.` },
      { trigger: `Kontrollversuche oder das Gefühl, gemanagt zu werden`, warum: `Wird als Übergriff auf die eigene Autonomie erlebt und provoziert sofortigen Widerstand.`, alternative: `Auf Augenhöhe verhandeln, nicht anweisen – Optionen statt Vorgaben anbieten.` },
      { trigger: `Distanzierung nach vorheriger Intensität`, warum: `Trifft die tiefste Angst vor Zurückweisung und wird oft mit Angriff beantwortet, bevor der Schmerz spürbar wird.`, alternative: `Zugewandt bleiben und Zuverlässigkeit über Zeit zeigen, statt sich bei Intensität zurückzuziehen.` },
      { trigger: `Öffentliche Bloßstellung oder Gesichtsverlust`, warum: `Verletzlichkeit vor anderen sichtbar zu werden ist für die SX8 kaum zu ertragen.`, alternative: `Kritik oder Korrekturen konsequent unter vier Augen ansprechen.` },
    ],
    fuehrung: {
      titel: "Aus der Führungspraxis: Kontakt halten, auch wenn es unangenehm wird",
      text: `In unserem Buch <em>Führung mit Fundament</em> (das ich gemeinsam mit meinem Sohn David L. Rathmer geschrieben habe) beschreiben wir, dass Typ-8-Persönlichkeiten unter Druck vor allem eines destabilisiert: wenn andere ihnen ausweichen. Der wirksame Weg liegt nicht in Unterwerfung und nicht im Kampf, sondern dazwischen – Grenzen benennen statt verteidigen, Sicherheit geben, ohne sich klein zu machen: „Ich stehe zu meiner Verantwortung und erwarte dasselbe von Ihnen.“<br><br>Für die SX8 heißt das übersetzt: Gerade weil ihre Intensität so viel Raum einnimmt, ist konsequenter, ruhiger Kontakt – statt Rückzug oder Gegenangriff – die Sprache, die tatsächlich ankommt und Vertrauen aufbaut.`,
      hinweis: `Im Buch beschreiben wir diese Dynamik auf Ebene des Grundtyps 8, nicht subtypspezifisch. Die sexuelle Zuspitzung – die Intensität konzentriert sich auf eine einzelne Beziehung statt auf Revier oder Gruppe – ist eine Ergänzung auf Basis der übrigen Quellen, kein wörtliches Zitat.`,
    },
    beziehung: {
      titel: `Beziehungsrisiko & heilende Bewegung`,
      risiko: `Die Forderung nach totaler, ungefilterter Nähe kann den Partner überfordern oder in eine ständige Machtprobe verwickeln, wo eigentlich Zärtlichkeit gemeint war.`,
      leitfragen: `Suche ich Verschmelzung aus Liebe – oder aus der Angst heraus, dass weniger als volle Intensität bedeutungslos wäre?`,
      hilfreich: `Bewusst Weichheit zulassen, bevor Kontrolle einsetzt – und erfahren, dass echte Nähe nicht erobert, sondern gemeinsam gewachsen werden muss.`,
    },
    pairing: [
      { partner: "SE1", dynamik: "Intensität vs. Prinzip", gefahr: "Harte Kämpfe möglich", hilfreich: "Zorn kanalisieren, Rituale schaffen" },
      { partner: "SO1", dynamik: "Rolle × exklusive Kraft", gefahr: "Besitzergreifend, hart", hilfreich: "Wärme zeigen, nicht nur Macht" },
      { partner: "SX1", dynamik: "Intensität × Dominanz", gefahr: "Eskalation, Verschmelzung", hilfreich: "Grenzen klar setzen" },
      { partner: "SE2", dynamik: "Helfen trifft exklusive Macht", gefahr: "Verschmelzung oder Dominanz", hilfreich: "Eigene Grenzen wahren" },
      { partner: "SO2", dynamik: "Gemeinschaft trifft exklusive Intensität", gefahr: "Konflikt zwischen Öffentlichkeit und Zweisamkeit", hilfreich: "Schutz und Resonanz in beiden Feldern" },
      { partner: "SX2", dynamik: "Intensität und Macht", gefahr: "Leidenschaftliche Kämpfe", hilfreich: "Machtspiele vermeiden, Verwundbarkeit zulassen" },
      { partner: "SE3", dynamik: "Zielorientierung plus Intensität", gefahr: "Konflikte eskalieren schnell", hilfreich: "Streitrituale klären" },
      { partner: "SO3", dynamik: "Wirkung + Intensität", gefahr: "Eskalierende Konflikte, Vereinnahmung", hilfreich: "Streit- und Erholungsrituale definieren" },
      { partner: "SX3", dynamik: "Intensität × Intensität", gefahr: "Eskalation", hilfreich: "Gemeinsame Ausrichtung festlegen" },
      { partner: "SE4", dynamik: "SE4 Stabilität, SX8 Intensität", gefahr: "SE4 überfordert, SX8 unzufrieden mit Routine", hilfreich: "Balance zwischen Nähe und Freiraum suchen" },
      { partner: "SO4", dynamik: "Sehnsucht vs. Intensität", gefahr: "Explosive Konflikte", hilfreich: "Pausen im Streit bewusst setzen" },
      { partner: "SX4", dynamik: "Intensität vs. Intensität", gefahr: "Machtspiele", hilfreich: "Verschmelzung in Stärke, Macht teilen" },
      { partner: "SE5", dynamik: "Distanz vs. Intensität", gefahr: "Nähe wird als Bedrohung erlebt", hilfreich: "Vertrauen langsam aufbauen" },
      { partner: "SO5", dynamik: "Gemeinschaft vs. Intensität", gefahr: "Vereinnahmung", hilfreich: "Tiefe Verlässlichkeit, Grenzen achten" },
      { partner: "SX5", dynamik: "Distanz + Intensität", gefahr: "Überwältigung", hilfreich: "Tiefe Hingabe, Tempo anpassen" },
      { partner: "SE6", dynamik: "Sicherheit trifft Intensität", gefahr: "Kontrollkämpfe", hilfreich: "Offenheit statt Argwohn" },
      { partner: "SO6", dynamik: "Sicherheit vs. Intensität", gefahr: "Überforderung", hilfreich: "Kraftvolle Allianz, Pausen einbauen" },
      { partner: "SX6", dynamik: "Sicherheit sucht Intensität", gefahr: "SX8 überfordert mit Nähe, SX6 zieht sich zurück", hilfreich: "Nähe dosieren, Freiraum sichern" },
      { partner: "SE7", dynamik: "Leichtigkeit trifft Intensität", gefahr: "Zu viel Drama oder Chaos", hilfreich: "Feurige, kreative Partnerschaft" },
      { partner: "SO7", dynamik: "Bühne vs. Intensität/Kontrolle", gefahr: "Überhitzung und Drama", hilfreich: "Deeskalationspausen vorab vereinbaren" },
      { partner: "SX7", dynamik: "Intensität und Abenteuer", gefahr: "Überhitzung, Impulsdurchbrüche", hilfreich: "Pausen bewusst einbauen" },
      { partner: "SE8", dynamik: "Intensität und Konfrontation pur", gefahr: "Explosive Konflikte, Machtspiele", hilfreich: "Streitkultur entwickeln, Tiefe Bindung durch Ehrlichkeit" },
      { partner: "SO8", dynamik: "Dominanz + Intensität", gefahr: "Explosiver Streit, Besitzansprüche", hilfreich: "Machtspiele früh ansprechen" },
      { partner: "SX8", dynamik: "Intensität trifft Intensität", gefahr: "Machtkampf", hilfreich: "Regeln für Streit vereinbaren" },
      { partner: "SE9", dynamik: "Führung trifft Anpassung", gefahr: "SE9 geht unter", hilfreich: "SE9 aktiv einbeziehen, SX8 sorgt, SE9 stabilisiert" },
      { partner: "SO9", dynamik: "Durchsetzung trifft Harmoniebedürfnis", gefahr: "Konfliktvermeidung blockiert", hilfreich: "Balance von Kraft und Ausgleich" },
      { partner: "SX9", dynamik: "Dominanz trifft Zurückhaltung", gefahr: "Erstarrung", hilfreich: "Ergänzung von Kraft und Ruhe, Initiative teilen" },
    ],
    kurzfassung: `Sei direkt und ehrlich – Ausweichen verletzt mehr als Klartext. Biete volle Präsenz statt Diplomatie. Lass Kontrolle los, sobald Vertrauen wächst: Nähe wird geschenkt, nicht erobert.`,
  },
  SE9: {
    tier: "Elefant",
    erkennung: `In meinem Buch <em>Enneagramm Zoo</em> beschreibe ich das Bild des <strong>Elefanten</strong>, der sich langsam, aber sicher durch seinen Tag bewegt und dabei selten aus der Ruhe zu bringen ist – die SE9 sucht vor allem eines: Behaglichkeit. Gewohnheiten, Rituale, ein vertrauter Rhythmus – all das gibt ihr Sicherheit, ohne dass sie darüber sprechen müsste. Anders als die SO9, die Harmonie in der Gruppe herstellt, oder die SX9, die sich mit einem einzigen Menschen verschmilzt, zieht sich die SE9 in die eigene Gemütlichkeit zurück: Essen, Fernsehen, ein vertrauter Sessel, eine liebgewonnene Routine. Wer sie erkennen will, achtet auf diese leise Selbstvergessenheit – nicht als Faulheit, sondern als eine Art, dem eigenen Erleben und den eigenen Bedürfnissen auszuweichen, indem man sich in angenehmen Ersatzbefriedigungen verliert.`,
    wunde: { titel: "Die Wunde dahinter", text: `Dahinter liegt die <strong>Wunde der Selbstvergessenheit</strong> – das tiefe Muster, sich selbst unsichtbar zu machen, um Konflikte zu vermeiden und Harmonie zu bewahren. Bei der SE9 wird das Eigene besonders gründlich unter Gewohnheit und Behaglichkeit begraben: Routine, Komfort und angenehme Ablenkungen betäuben die innere Leere. Der Glaubenssatz dahinter: „Solange es bequem und gewohnt ist, ist alles in Ordnung“ – darunter: „Wenn ich aus meiner Routine heraustrete und etwas will, gefährde ich meinen Frieden.“` },
    fluegel: {
      titel: "Flügel-Nuance: SE9w8 und SE9w1",
      w1: { code: "SE9w8", route: "beruehmte-angela-merkel", name: "Angela Merkel", text: `Bei stark ausgeprägtem 8er-Flügel bekommt die Behaglichkeit eine stille, unerschütterliche Bodenständigkeit – Ruhe wird zur Stärke, die nicht laut sein muss, um zu wirken. Entscheidungen fallen langsam, aber wenn sie fallen, tragen sie sehr lange.` },
      w2: { code: "SE9w1", route: "beruehmte-ludwig-erhard", name: "Ludwig Erhard", text: `Bei stark ausgeprägtem 1er-Flügel verbindet sich die Gemütlichkeit mit einem ruhigen Ordnungssinn – nicht die dramatische Entschlossenheit des 8er-Flügels, sondern ein gelassenes, prinzipientreues Festhalten an bewährten Strukturen.` },
    },
    stressWachstum: { stress: `Unter Stress bewegt sich die SE9 Richtung <strong>Typ 6</strong>: Aus behaglicher Ruhe wird nagende Sorge, aus Gemütlichkeit wird Misstrauen gegenüber Veränderung – die Angst, dass die vertraute Sicherheit doch nicht so verlässlich ist, wie sie schien.`, wachstum: `In Reife bewegt sich die SE9 Richtung <strong>Typ 3</strong>: Aus passiver Behaglichkeit wird zielgerichtete Energie. Die eigenen Bedürfnisse werden nicht mehr weggeschoben, sondern aktiv verfolgt – Ruhe wird zur Basis für echtes Handeln statt zum Ersatz dafür.` },
    ankommt: [
      `Als angenehm, entspannt und leicht im Umgang – niemand fühlt sich von der SE9 unter Druck gesetzt.`,
      `Manchmal als schwer greifbar, weil eigene Wünsche selten klar geäußert werden und stattdessen stillschweigende Anpassung erfolgt.`,
      `Als verlässlicher, geduldiger Begleiter, sobald sie merkt, dass ihre Präsenz wirklich zählt – dann trägt ihre Ruhe auch andere.`,
    ],
    trigger: [
      { trigger: `Druck, sich schnell zu entscheiden`, warum: `Erzeugt inneren Stau, weil jede Entscheidung das Risiko birgt, den eigenen Frieden zu stören.`, alternative: `Zeit und Raum geben, notfalls mit einer sanften, konkreten Frist statt mit Drängen.` },
      { trigger: `Übergangen oder für selbstverständlich gehalten werden`, warum: `Bestätigt die alte Angst, dass die eigene Präsenz ohnehin nicht zählt – verstärkt den Rückzug in Selbstvergessenheit.`, alternative: `Aktiv nach ihrer Meinung fragen und Raum dafür lassen, auch wenn die Antwort erst später kommt.` },
      { trigger: `Offener Streit oder laute Konfrontation`, warum: `Wird als Bedrohung der mühsam gehüteten inneren Ruhe erlebt und führt eher zu Rückzug als zu Klärung.`, alternative: `Ruhig und in kleinen Schritten ansprechen, was geklärt werden muss – nicht alles auf einmal.` },
      { trigger: `Vage bleiben, wo Klarheit gebraucht wird`, warum: `Verstärkt paradoxerweise die eigene Tendenz zum Ausweichen, statt ihr entgegenzuwirken.`, alternative: `Selbst mit gutem Beispiel vorangehen und klar benennen, was man konkret braucht.` },
    ],
    fuehrung: {
      titel: "Aus der Führungspraxis: wenn Harmonie Führung ersetzt",
      text: `In unserem Buch <em>Führung mit Fundament</em> (das ich gemeinsam mit meinem Sohn David L. Rathmer geschrieben habe) beschreiben wir eine Führungskraft, deren Bereich als „ruhig“ und „pflegeleicht“ gilt – bis die Geschäftsführung bemerkt: Irgendetwas stagniert dort. Der innere Auftrag lautet: Es soll ruhig bleiben. Konflikte werden vertagt, Spannungen sedimentieren, Entscheidungen bleiben vage. Der Wendepunkt kommt mit einem einzigen Satz eines Feedbackgesprächs: „Sie sind sehr beliebt. Aber niemand weiß, wofür Sie stehen.“<br><br>Für die SE9 heißt das übersetzt: Die eigene Behaglichkeit für sich zu bewahren ist verständlich – aber echte Präsenz entsteht erst, wenn man lernt, auch unbequeme Klarheit auszuhalten, statt sie durch Rückzug in die eigene Ruhe zu vermeiden.`,
      hinweis: `Im Buch beschreiben wir diesen Fall auf Ebene des Grundtyps 9, nicht subtypspezifisch. Die Zuspitzung auf persönliche Behaglichkeit und Rückzug in Gewohnheit – statt auf Gruppenharmonie oder Verschmelzung – ist eine Ergänzung auf Basis der übrigen Quellen, kein wörtliches Zitat.`,
    },
    beziehung: {
      titel: `Beziehungsrisiko & heilende Bewegung`,
      risiko: `Die stille Anpassung kann dazu führen, dass der Partner nie erfährt, was die SE9 wirklich will – Nähe bleibt bequem, aber oberflächlich, weil das Eigene selten ausgesprochen wird.`,
      leitfragen: `Bin ich wirklich zufrieden – oder habe ich mich nur an das gewöhnt, was am wenigsten Konflikt verursacht?`,
      hilfreich: `Bewusst kleine eigene Wünsche aussprechen, auch wenn sie unbequem sind – und erfahren, dass echte Nähe durch Präsenz wächst, nicht durch Anpassung.`,
    },
    pairing: [
      { partner: "SE1", dynamik: "Ordnung vs. Harmonie", gefahr: "SE1 kritisiert, SE9 weicht aus", hilfreich: "Struktur und Frieden verbinden sich, Geduld mit Klarheit verbinden" },
      { partner: "SO1", dynamik: "Rolle × Harmonie (praktisch)", gefahr: "Starrheit vs. Passivität", hilfreich: "Frieden mit Regeln kombiniert, Ruhe würdigen, Aktivität fördern" },
      { partner: "SX1", dynamik: "Intensität × Frieden", gefahr: "Rückzug, Übersehen", hilfreich: "Ruhe + Leidenschaft, Initiative abwechselnd übernehmen" },
      { partner: "SE2", dynamik: "Fürsorge trifft Harmonie", gefahr: "Konfliktvermeidung, verdeckte Erwartungen", hilfreich: "Ruhe und Nähe, Konflikte ansprechen" },
      { partner: "SO2", dynamik: "Gemeinschaft trifft Harmoniebedürfnis", gefahr: "Konfliktvermeidung blockiert Entwicklung", hilfreich: "Stabile, friedliche Gemeinschaft" },
      { partner: "SX2", dynamik: "Nähe und Harmonie", gefahr: "Vereinnahmung trifft Rückzug", hilfreich: "Friedliche, fürsorgliche Atmosphäre, Rückzug respektieren, ohne beleidigt zu sein" },
      { partner: "SE3", dynamik: "Leistung plus Harmonie", gefahr: "9 bremst, 3 zieht", hilfreich: "Ruhe und Tatkraft, Geduld und Klarheit mischen" },
      { partner: "SO3", dynamik: "Sichtbarkeit + Ruhe", gefahr: "Passiv werden vs. treiben", hilfreich: "Erdung für Wirkung, Motivation für Frieden, Tempoabgleich" },
      { partner: "SX3", dynamik: "Intensität + Harmonie", gefahr: "Passiv vs. aktiv", hilfreich: "Balance aus Feuer und Ruhe, Neun aktiv einbeziehen" },
      { partner: "SE4", dynamik: "SE4 Geborgenheit, SE9 Harmonie", gefahr: "Stagnation, Konfliktvermeidung", hilfreich: "Ruhige, verlässliche Partnerschaft" },
      { partner: "SO4", dynamik: "Gefühl vs. Harmonie", gefahr: "Konflikte werden verschleppt", hilfreich: "Ruhe + Tiefe, Gefühle rechtzeitig ansprechen" },
      { partner: "SX4", dynamik: "Gefühlstiefe vs. Harmoniebedürfnis", gefahr: "Verdrängung", hilfreich: "Sanfte Balance, Konflikte ansprechen" },
      { partner: "SE5", dynamik: "Ruhe trifft Ruhe", gefahr: "Stillstand", hilfreich: "Gelassenheit, Ziele konkretisieren" },
      { partner: "SO5", dynamik: "Gemeinschaft und Harmonie", gefahr: "Konfliktmeidung", hilfreich: "Stabiles Miteinander, Bedürfnisse klar aussprechen" },
      { partner: "SX5", dynamik: "Rückzug + Harmonie", gefahr: "Vermeidung", hilfreich: "Stille, heilsame Nähe, Themen klar benennen" },
      { partner: "SE6", dynamik: "Loyalität und Harmonie", gefahr: "Konfliktvermeidung", hilfreich: "Friedliche Stabilität, Probleme früh ansprechen" },
      { partner: "SO6", dynamik: "Loyalität vs. Harmonie", gefahr: "Konfliktvermeidung", hilfreich: "Stabile Ruhe, Unterschiede offen ansprechen" },
      { partner: "SX6", dynamik: "Loyalität trifft Harmonie", gefahr: "Konflikte werden gemieden, Unsicherheit bleibt ungelöst", hilfreich: "Ruhepol für SX6" },
      { partner: "SE7", dynamik: "Energie trifft Ruhe", gefahr: "Verflüchtigung in Passivität", hilfreich: "Harmonie mit Lebensfreude, Impulse und Pausen abwechseln" },
      { partner: "SO7", dynamik: "Lebendigkeit vs. Harmonie", gefahr: "SE9 wird überrollt oder Projekte versanden", hilfreich: "Ruhe mit Inspiration, kleine abgeschlossene Schritte planen" },
      { partner: "SX7", dynamik: "Bewegungsdrang vs. Ruhepol", gefahr: "Flucht vs. Trägheit", hilfreich: "Balance aus Aktivität und Frieden, Tempo absprechen" },
      { partner: "SE8", dynamik: "Kraftvoll vs. ausgleichend", gefahr: "SE9 zieht sich zurück, SE8 dominiert", hilfreich: "Balance aus Stärke und Ruhe, SE8 soll Pausen lassen" },
      { partner: "SO8", dynamik: "Führung + Harmonie", gefahr: "SE9 zieht sich zurück, SO8 fühlt sich allein", hilfreich: "SE9 aktiv einbinden, SO8 Tempo drosseln" },
      { partner: "SX8", dynamik: "Führung trifft Anpassung", gefahr: "SE9 geht unter", hilfreich: "SX8 sorgt, SE9 stabilisiert, SE9 aktiv einbeziehen" },
      { partner: "SE9", dynamik: "Harmonie sucht Harmonie", gefahr: "Passivität, Konfliktvermeidung", hilfreich: "Ruhe und Stabilität, aktiv Themen ansprechen" },
      { partner: "SO9", dynamik: "Rückzug trifft Anpassung", gefahr: "Unsichtbarkeit in Beziehung", hilfreich: "Stille Loyalität, bewusst Präsenz zeigen" },
      { partner: "SX9", dynamik: "Ruhe und Verschmelzung", gefahr: "Auflösung der eigenen Identität", hilfreich: "Tiefe Bindung, Eigenständigkeit pflegen" },
    ],
    kurzfassung: `Gib Zeit und Raum, statt zu drängen. Frag aktiv nach ihrer Meinung und warte auf die Antwort. Ermutige kleine, konkrete Entscheidungen – echte Präsenz wächst nicht durch Druck, sondern durch das Gefühl, dass die eigene Stimme wirklich zählt.`,
  },
  SO9: {
    tier: "Afrikanischer Büffel",
    erkennung: `Wo die SE9 sich in die eigene Gemütlichkeit zurückzieht, sucht die SO9 ihre Ruhe in der Gemeinschaft. In meinem Buch <em>Enneagramm Zoo</em> beschreibe ich das Bild des <strong>afrikanischen Büffels</strong>, der Sicherheit in der Herde findet und Konflikte durch Anpassung an die Gruppe vermeidet. Ihre Loyalität ist unerschütterlich, ihre Energie beständig – doch dabei verliert sie leicht die eigene Stimme im Chor der anderen. Anders als die SE9, die vor allem für sich selbst harmonisch sein will, richtet sich die SO9 aktiv auf den Zusammenhalt der Gruppe aus: Sie vermittelt, gleicht aus, nickt zustimmend, wo eigentlich Widerspruch angebracht wäre. Wer sie erkennen will, achtet darauf, wie schwer es ihr fällt, sich als eigenständige Position innerhalb einer Gruppe zu zeigen, obwohl sie für den Zusammenhalt dieser Gruppe oft unverzichtbar ist.`,
    wunde: { titel: "Die Wunde dahinter", text: `Dahinter liegt die <strong>Wunde der Selbstvergessenheit</strong> – das tiefe Muster, sich selbst unsichtbar zu machen, um Konflikte zu vermeiden und Harmonie zu bewahren. Bei der SO9 verschwindet das Eigene besonders gründlich hinter dem Einsatz für die Gemeinschaft: Mitarbeiten, vermitteln, ausgleichen und dazugehören betäuben die Frage nach dem eigenen Wollen. Der Glaubenssatz dahinter: „Meine Bedürfnisse und meine Meinung sind weniger wichtig als der Zusammenhalt der Gruppe“ – darunter: „Wenn ich aus der Reihe tanze, gefährde ich meine Zugehörigkeit.“` },
    fluegel: {
      titel: "Flügel-Nuance: SO9w8 und SO9w1",
      w1: { code: "SO9w8", route: "beruehmte-willy-brandt", name: "Willy Brandt", text: `Bei stark ausgeprägtem 8er-Flügel bekommt die vermittelnde Ruhe eine stille, tragende Kraft – im entscheidenden Moment kann aus dem Ausgleichenden ein klarer, symbolisch wirksamer Schritt werden, der weit über das Übliche hinausreicht.` },
      w2: { code: "SO9w1", route: "beruehmte-steffi-graf", name: "Steffi Graf", text: `Bei stark ausgeprägtem 1er-Flügel verbindet sich die Gruppenharmonie mit einer stillen, diszipliniertern Konsequenz – die Anpassungsbereitschaft bleibt, wird aber von einem inneren Anspruch an saubere, korrekte Ausführung begleitet.` },
    },
    stressWachstum: { stress: `Unter Stress bewegt sich die SO9 Richtung <strong>Typ 6</strong>: Aus vermittelnder Anpassung wird ängstliche Unsicherheit, aus dem Wunsch nach Gruppenharmonie wird Misstrauen gegenüber der eigenen Urteilsfähigkeit.`, wachstum: `In Reife bewegt sich die SO9 Richtung <strong>Typ 3</strong>: Aus passivem Mitlaufen wird zielgerichtetes Engagement. Die eigene Position wird nicht mehr verschwiegen, sondern eingebracht – Zugehörigkeit entsteht durch echten Beitrag statt durch Anpassung.` },
    ankommt: [
      `Als verlässlicher, ausgleichender Teamplayer, der Spannungen in der Gruppe spürt und zu entschärfen weiß.`,
      `Manchmal als konturlos, weil eigene Positionen selten klar vertreten werden und stattdessen allgemeine Zustimmung signalisiert wird.`,
      `Als überraschend klarer Anführer, sobald sie ihre eigene Stimme findet – dann trägt ihre ruhige Autorität die ganze Gruppe.`,
    ],
    trigger: [
      { trigger: `Aufforderung, öffentlich klar Position zu beziehen`, warum: `Wird als Risiko für die Zugehörigkeit zur Gruppe erlebt – lieber unsichtbar bleiben als anecken.`, alternative: `In kleinerem, sichererem Rahmen nach der eigenen Meinung fragen, bevor eine große Bühne verlangt wird.` },
      { trigger: `Offener Konflikt innerhalb der Gruppe`, warum: `Bedroht die mühsam gehaltene Harmonie und aktiviert sofort den Vermittlungsreflex, statt eigene Position zu beziehen.`, alternative: `Konflikte in kleinen, ruhigen Schritten ansprechen und aktiv nach ihrer eigenen Sicht fragen.` },
      { trigger: `Als „Stimme der Gruppe“ vereinnahmt werden, ohne gefragt zu werden`, warum: `Verstärkt die Erfahrung, dass die eigene Individualität in der Gruppenrolle aufgeht.`, alternative: `Explizit nach der persönlichen, nicht der Gruppenmeinung fragen.` },
      { trigger: `Druck, sich schnell zwischen mehreren Optionen zu entscheiden`, warum: `Erzeugt inneren Stau, weil jede Wahl potenziell jemanden in der Gruppe enttäuschen könnte.`, alternative: `Zeit geben und die Entscheidung notfalls in kleine Teilschritte zerlegen.` },
    ],
    fuehrung: {
      titel: "Aus der Führungspraxis: aktiv werden, bevor man sich verliert",
      text: `In unserem Buch <em>Führung mit Fundament</em> (das ich gemeinsam mit meinem Sohn David L. Rathmer geschrieben habe) beschreiben wir, dass Typ-9-Persönlichkeiten unter Druck vor allem eines droht: nicht Widerstand, sondern Verschwinden. Was hilft: aktive Prioritätensetzung, tägliche Mini-Entscheidungen, bewusste Ausrichtung am Morgen, klare Grenzen gegenüber Ablenkungen. Der zentrale Merksatz dazu: „Friedlichkeit ist nicht immer Frieden. Oft ist sie Vermeidung.“<br><br>Für die SO9 heißt das übersetzt: Weil ihre Ruhe sich besonders leicht an der Gruppe orientiert, lohnt sich die bewusste Frage, ob die eigene Zustimmung wirklich Zustimmung ist – oder nur der Wunsch, den Frieden nicht zu stören.`,
      hinweis: `Im Buch beschreiben wir diese Selbstführungsübung auf Ebene des Grundtyps 9, nicht subtypspezifisch. Die Zuspitzung auf Vermittlung und Anpassung innerhalb einer Gruppe – statt auf persönliche Gemütlichkeit oder Verschmelzung mit einem Einzelnen – ist eine Ergänzung auf Basis der übrigen Quellen, kein wörtliches Zitat.`,
    },
    beziehung: {
      titel: `Beziehungsrisiko & heilende Bewegung`,
      risiko: `Die ständige Vermittlerrolle kann dazu führen, dass der Partner nie erfährt, was die SO9 wirklich denkt – Harmonie bleibt gewahrt, aber echte Intimität bleibt oberflächlich.`,
      leitfragen: `Stimme ich wirklich zu – oder passe ich mich nur an, um den Frieden nicht zu gefährden?`,
      hilfreich: `Bewusst die eigene, von der Gruppe unabhängige Meinung äußern – und erfahren, dass echte Zugehörigkeit auch Meinungsverschiedenheiten aushält.`,
    },
    pairing: [
      { partner: "SE1", dynamik: "Prinzip vs. Anpassung", gefahr: "SE1 drängt, SO9 verliert sich", hilfreich: "Ausgleichende Stabilität, kleine Schritte absprechen" },
      { partner: "SO1", dynamik: "Rolle × Rolle (Gemeinschaftsfrieden)", gefahr: "Stillstand, Harmoniesucht", hilfreich: "Soziale Ruhe, moralischer Halt" },
      { partner: "SX1", dynamik: "Intensität × Harmonie", gefahr: "Konfliktvermeidung", hilfreich: "Ausgleichende Wärme, Spannungen offen besprechen" },
      { partner: "SE2", dynamik: "Helfen trifft soziale Vermittlung", gefahr: "Auflösung in Anpassung", hilfreich: "Warmes, verbindliches Umfeld" },
      { partner: "SO2", dynamik: "Gemeinschaftspflege verstärkt sich gegenseitig", gefahr: "Trägheit, Anpassung an die Gruppe ohne Eigenprofil", hilfreich: "Eigene Interessen bewusst einbringen" },
      { partner: "SX2", dynamik: "Fürsorge und Gruppeneinbindung", gefahr: "Zuwendung verpufft in Weite", hilfreich: "Freundliche, verbindliche Partnerschaft" },
      { partner: "SE3", dynamik: "Wirkung plus Einfühlung", gefahr: "Trägheit bremst Projekte", hilfreich: "Stabile Resonanz, Motivation durch klare Ziele" },
      { partner: "SO3", dynamik: "Anerkennung + Harmoniebedürfnis", gefahr: "Konflikte werden zugedeckt", hilfreich: "Freundliche, stabile Präsenz, Probleme früh ansprechen" },
      { partner: "SX3", dynamik: "Intensität + Frieden im Außen", gefahr: "Konfliktvermeidung", hilfreich: "Strahlende Ruhe nach außen, Unterschiede klar ansprechen" },
      { partner: "SE4", dynamik: "SE4 häuslich, SO9 sozial verbindend", gefahr: "SE4 fühlt sich vereinnahmt, SO9 zerstreut", hilfreich: "Verbindung von Zuhause und Gemeinschaft, klare Zeitfenster" },
      { partner: "SO4", dynamik: "Resonanz vs. Frieden", gefahr: "Verdrängung", hilfreich: "Stille Nähe, aktives Nachfragen üben" },
      { partner: "SX4", dynamik: "Sehnsucht vs. Anpassung", gefahr: "Unsichtbarkeit", hilfreich: "Geborgene Nähe, eigene Stimme nutzen" },
      { partner: "SE5", dynamik: "Rückzug vs. Harmonie", gefahr: "Konflikte werden vermieden", hilfreich: "Friedliche Atmosphäre, Unterschiede klar aussprechen" },
      { partner: "SO5", dynamik: "Gemeinschaft + Anpassung", gefahr: "Stillstand", hilfreich: "Ruhepol, Initiativen setzen" },
      { partner: "SX5", dynamik: "Wissen + Gemeinschaft", gefahr: "Unsichtbarkeit im Feld", hilfreich: "Sanftes Einbinden, Sichtbarkeit üben" },
      { partner: "SE6", dynamik: "Gemeinschaftsorientierung", gefahr: "Trägheit", hilfreich: "Starke Solidarität, gemeinsame Projekte aktivieren" },
      { partner: "SO6", dynamik: "Loyalität im Gefüge", gefahr: "Anpassung zu stark", hilfreich: "Friedliche Stabilität, Selbstbehauptung üben" },
      { partner: "SX6", dynamik: "Treue trifft soziale Anpassung", gefahr: "SO9 verliert sich in Rollen, SX6 bleibt misstrauisch", hilfreich: "Sanfte Stabilität" },
      { partner: "SE7", dynamik: "Abenteuerlust trifft Gemeinschaft", gefahr: "Konflikte werden verdrängt", hilfreich: "Gemeinsame Aktivität mit klarer Struktur" },
      { partner: "SO7", dynamik: "Gemeinschaft + Harmonie", gefahr: "Konflikte unter den Teppich kehren", hilfreich: "Warmes, sozial eingebettetes Miteinander" },
      { partner: "SX7", dynamik: "Geselligkeit vs. Anpassung", gefahr: "Konfliktvermeidung, Oberflächlichkeit", hilfreich: "Harmonie mit Freude verbinden" },
      { partner: "SE8", dynamik: "Durchsetzung vs. Harmonie im Feld", gefahr: "Konfliktvermeidung blockiert Klarheit", hilfreich: "Macht + Vermittlung wirken konstruktiv, bewusste Rollenteilung" },
      { partner: "SO8", dynamik: "Führung + soziale Ruhe", gefahr: "SO8 wird dominant, SO9 passt sich zu sehr an", hilfreich: "SO9 ermutigen, Position zu beziehen" },
      { partner: "SX8", dynamik: "Durchsetzung trifft Harmoniebedürfnis", gefahr: "Konfliktvermeidung blockiert", hilfreich: "Balance von Kraft und Ausgleich" },
      { partner: "SE9", dynamik: "Rückzug trifft Anpassung", gefahr: "Unsichtbarkeit in Beziehung", hilfreich: "Stille Loyalität, bewusst Präsenz zeigen" },
      { partner: "SO9", dynamik: "Harmonie sucht Harmonie", gefahr: "Passivität, Konflikte werden vermieden", hilfreich: "Stabile Ruhe, tiefer Frieden, regelmäßig aktive Impulse setzen" },
      { partner: "SX9", dynamik: "Ruhe vs. Nähe", gefahr: "Überblendung der Bedürfnisse", hilfreich: "Tiefe Ruhe in Verbindung, individuelle Bedürfnisse wahren" },
    ],
    kurzfassung: `Frag aktiv nach ihrer persönlichen, nicht der Gruppenmeinung – und warte die Antwort ab. Würdige ihre vermittelnde Kraft, ohne sie zur bloßen Stimme der Gruppe zu machen. Ermutige kleine Positionierungen: echte Zugehörigkeit hält Meinungsverschiedenheiten aus.`,
  },
  SX9: {
    tier: "Faultier",
    erkennung: `Wo die SE9 sich in Gemütlichkeit zurückzieht und die SO9 in der Gruppe aufgeht, sucht die SX9 die vollständige Verschmelzung mit einem einzigen Menschen. In meinem Buch <em>Enneagramm Zoo</em> beschreibe ich das Bild des <strong>Faultiers</strong>, das kopfüber am Ast hängt und sich so sehr mit seiner Umgebung verbindet, dass die Grenze zwischen ihm und der Welt zu verschwimmen beginnt. Sie sehnt sich nach Einheit, nach einem Zustand ohne Trennung, und verliert sich dabei leicht in den Wünschen, Stimmungen und Vorlieben des geliebten Menschen. Wer sie erkennen will, achtet auf diese sanfte, fast traumhafte Anpassungsbereitschaft: Sie wirkt entspannt und friedlich, doch dahinter steckt oft die stille Frage, ob überhaupt noch ein eigener Wille übrig ist – oder ob er längst im Anderen aufgegangen ist.`,
    wunde: { titel: "Die Wunde dahinter", text: `Dahinter liegt die <strong>Wunde der Selbstvergessenheit</strong> – das tiefe Muster, sich selbst unsichtbar zu machen, um Konflikte zu vermeiden und Harmonie zu bewahren. Bei der SX9 löst sich das eigene Ich besonders vollständig in der Verschmelzung mit dem Anderen auf: Die eigenen Wünsche und Grenzen verschwimmen mit denen des geliebten Menschen. Der Glaubenssatz dahinter: „Erst durch die Verbindung mit dem Anderen werde ich ganz“ – darunter: „Wenn ich mich abgrenze und Eigenes will, verliere ich die Liebe und die Einheit.“` },
    fluegel: {
      titel: "Flügel-Nuance: SX9w8 und SX9w1",
      w1: { code: "SX9w8", route: "beruehmte-dakota-johnson", name: "Dakota Johnson", text: `Bei stark ausgeprägtem 8er-Flügel bekommt die Verschmelzungssehnsucht eine unerwartete Widerhakigkeit – unter der weichen Oberfläche liegt eine Kraft, die sichtbar wird, sobald wirklich etwas auf dem Spiel steht, auch wenn sie sich meist nicht zeigt.` },
      w2: { code: "SX9w1", route: "beruehmte-keanu-reeves", name: "Keanu Reeves", text: `Bei stark ausgeprägtem 1er-Flügel verbindet sich die verschmelzende Weichheit mit einer stillen, fast asketischen Zurückhaltung – Hingabe zeigt sich nicht als Auflösung, sondern als eine ruhige, disziplinierte Präsenz, die wenig für sich beansprucht.` },
    },
    stressWachstum: { stress: `Unter Stress bewegt sich die SX9 Richtung <strong>Typ 6</strong>: Aus friedlicher Verschmelzung wird ängstliche Abhängigkeit, aus der Sehnsucht nach Einheit wird die Sorge, ohne den geliebten Menschen nicht mehr zu wissen, wer man ist.`, wachstum: `In Reife bewegt sich die SX9 Richtung <strong>Typ 3</strong>: Aus passiver Hingabe wird zielgerichtete Präsenz. Die eigene Stimme wird nicht mehr im Anderen aufgelöst, sondern eingebracht – Nähe entsteht durch echte Begegnung zweier eigenständiger Menschen statt durch Verschmelzung.` },
    ankommt: [
      `Als sanft, friedlich und entspannend im Umgang – in ihrer Nähe kommen andere leichter zur Ruhe.`,
      `Manchmal als schwer greifbar, weil sich eigene Wünsche so sehr an denen des Partners orientieren, dass eine eigene Position kaum erkennbar wird.`,
      `Als tief verbundener, hingebungsvoller Mensch, sobald sie lernt, in der Nähe auch die eigene Stimme zu behalten – dann wird ihre Sanftheit zu echter Präsenz.`,
    ],
    trigger: [
      { trigger: `Aufforderung, klar „Ja" oder „Nein" zu sagen`, warum: `Eine klare Position zu beziehen fühlt sich an wie ein Risiko für die Verbindung – lieber unklar bleiben als den Anderen zu enttäuschen.`, alternative: `Zeit und einen ruhigen Rahmen geben, konkrete statt vage Fragen stellen.` },
      { trigger: `Das Gefühl, in der Beziehung nicht mehr als eigene Person wahrgenommen zu werden`, warum: `Bestätigt die alte Angst, dass die eigene Präsenz ohnehin nicht zählt – verstärkt paradoxerweise die weitere Anpassung.`, alternative: `Aktiv nach ihren eigenen, unabhängigen Wünschen fragen, nicht nur nach gemeinsamen Plänen.` },
      { trigger: `Offener Streit oder Druck, sich sofort zu entscheiden`, warum: `Wird als Bedrohung der inneren Ruhe erlebt und führt eher zu Rückzug in Tagträume als zu Klärung.`, alternative: `Ruhig und in kleinen Schritten ansprechen, was geklärt werden muss.` },
      { trigger: `Für selbstverständlich gehalten werden, weil sie ohnehin „nichts dagegen hat"`, warum: `Verstärkt die Erfahrung, dass die eigenen Grenzen unsichtbar geworden sind.`, alternative: `Bewusst nachfragen, ob etwas wirklich passt – auch wenn keine Einwände geäußert wurden.` },
    ],
    fuehrung: {
      titel: "Aus der Führungspraxis: wenn Vermeidung wie Frieden aussieht",
      text: `In unserem Buch <em>Führung mit Fundament</em> (das ich gemeinsam mit meinem Sohn David L. Rathmer geschrieben habe) beschreiben wir, dass Konflikt im instinktiven Zentrum körperlich erlebt wird: Wo Typ 8 nach vorn geht und Klärung über Konfrontation sucht, vermeidet, verschleift und beruhigt Typ 9. Unter Druck wird daraus ein charakteristischer Eskalationspfad: Typ 9 wird passiv, stur, ausweichend – selten aus böser Absicht, sondern als automatischer Abwehrmechanismus, sobald das eigene Muster übernimmt.<br><br>Für die SX9 heißt das übersetzt: Gerade weil ihre Verschmelzungssehnsucht Konflikte besonders ungern zulässt, lohnt es sich, das eigene Ausweichen frühzeitig zu bemerken – bevor aus stillem Frieden ein stiller Stillstand wird, der die Beziehung selbst am Ende mehr kostet als ein offen ausgetragener Konflikt.`,
      hinweis: `Im Buch beschreiben wir dieses Muster auf Ebene des Grundtyps 9, nicht subtypspezifisch. Die Zuspitzung auf die Verschmelzung mit einem einzelnen Menschen – statt auf Gruppenharmonie oder persönliche Gemütlichkeit – ist eine Ergänzung auf Basis der übrigen Quellen, kein wörtliches Zitat.`,
    },
    beziehung: {
      titel: `Beziehungsrisiko & heilende Bewegung`,
      risiko: `Die vollständige Anpassung an den Partner kann dazu führen, dass die Beziehung zwar friedlich, aber zunehmend leer wirkt – echte Begegnung braucht zwei eigenständige Menschen, nicht nur einen, der sich auflöst.`,
      leitfragen: `Will ich das wirklich – oder habe ich mich einfach so sehr an die Wünsche des Anderen angepasst, dass ich meine eigenen kaum noch spüre?`,
      hilfreich: `Bewusst kleine eigene Vorlieben äußern und leben, auch wenn sie vom Partner abweichen – und erfahren, dass Nähe durch Begegnung wächst, nicht durch Verschmelzung.`,
    },
    pairing: [
      { partner: "SE1", dynamik: "Struktur vs. Verschmelzung", gefahr: "SE1 klagt, SX9 zieht sich zurück", hilfreich: "Tiefe Ruhe und Halt, Nähe klar strukturieren" },
      { partner: "SO1", dynamik: "Rolle × exklusive Harmonie", gefahr: "Passivität, Abhängigkeit", hilfreich: "Sanfte Bindung, Stabilität, Impulse setzen" },
      { partner: "SX1", dynamik: "Intensität × Gelassenheit", gefahr: "Verschmelzung + Passivität", hilfreich: "Ruhe + Nähe, Aktivität und Rückzug balancieren" },
      { partner: "SE2", dynamik: "Fürsorge trifft exklusive Harmonie", gefahr: "Verschmelzung ohne Eigenständigkeit", hilfreich: "Stille, tiefe Nähe, Selbststand wahren" },
      { partner: "SO2", dynamik: "Gemeinschaft trifft Exklusivität und Harmonie", gefahr: "Übersehen eigener Bedürfnisse zugunsten anderer", hilfreich: "Ausgeglichenheit und tiefe Bindung" },
      { partner: "SX2", dynamik: "Exklusivität trifft Harmoniebedürfnis", gefahr: "Verschmelzung bis zur Unsichtbarkeit", hilfreich: "Sanfte, treue Bindung" },
      { partner: "SE3", dynamik: "Dynamik mit Hingabe", gefahr: "Abhängigkeit oder Selbstverlust", hilfreich: "Energie plus Wärme, Eigenständigkeit wahren" },
      { partner: "SO3", dynamik: "Bühne + Verschmelzungssehnsucht", gefahr: "Grenzen verwischen, Überanpassung", hilfreich: "Tiefe Nähe mit positiver Ausstrahlung, eigene Bedürfnisse klar formulieren" },
      { partner: "SX3", dynamik: "Intensität × Harmoniebedürfnis", gefahr: "Rückzug des Neuners", hilfreich: "Tiefe Gelassenheit bei gemeinsamer Balance, Raum geben ohne zu überfordern" },
      { partner: "SE4", dynamik: "SE4 Sicherheit, SX9 Exklusivität", gefahr: "Passivität, Abhängigkeit", hilfreich: "Stabile, tiefe Verbindung, gemeinsame Initiative fördern" },
      { partner: "SO4", dynamik: "Sehnsucht vs. Verschmelzung", gefahr: "Abhängigkeit", hilfreich: "Tiefe Zweisamkeit, Eigenständigkeit bewahren" },
      { partner: "SX4", dynamik: "Intensität vs. Verschmelzung", gefahr: "Verlust der Eigenständigkeit", hilfreich: "Tiefe Geborgenheit, Eigenräume sichern" },
      { partner: "SE5", dynamik: "Distanz vs. Verschmelzung", gefahr: "Selbstverlust oder Rückzug", hilfreich: "Balance aus Nähe und Raum, eigene Bedürfnisse klar halten" },
      { partner: "SO5", dynamik: "Gemeinschaft vs. Verschmelzung", gefahr: "Verlust von Eigenständigkeit", hilfreich: "Innige Partnerschaft, eigene Räume pflegen" },
      { partner: "SX5", dynamik: "Exklusivität + Frieden", gefahr: "Rückzug ins Unsichtbare", hilfreich: "Ruhevolle Nähe, Aktivität dosiert einbauen" },
      { partner: "SE6", dynamik: "Loyalität und Verschmelzung", gefahr: "Abhängigkeit", hilfreich: "Tiefe Geborgenheit, Eigenständigkeit bewahren" },
      { partner: "SO6", dynamik: "Sicherheit vs. Nähe", gefahr: "Abhängigkeit", hilfreich: "Geborgene Partnerschaft, Eigenständigkeit bewahren" },
      { partner: "SX6", dynamik: "Sicherheit sucht Nähe, Harmonie verstärkt Bindung", gefahr: "Konflikte werden verdeckt", hilfreich: "Tiefe, stille Treue, ab und zu Reibung zulassen" },
      { partner: "SE7", dynamik: "Freiheit trifft Verschmelzung", gefahr: "Abhängigkeit oder Rastlosigkeit", hilfreich: "Tiefe Verbundenheit mit Leichtigkeit, Grenzen und Freiräume klären" },
      { partner: "SO7", dynamik: "Bühne vs. Verschmelzung", gefahr: "SX9 verliert Stimme, SO7 vermisst Tiefe", hilfreich: "Öffentliche Leichtigkeit, private Geborgenheit, Eigenräume klären" },
      { partner: "SX7", dynamik: "Abenteuer vs. Verschmelzung", gefahr: "Abtauchen ohne Klarheit", hilfreich: "Nähe mit Leichtigkeit, eigene Bedürfnisse klar benennen" },
      { partner: "SE8", dynamik: "Stärke trifft Bindungssehnsucht", gefahr: "Verschmelzung ohne klare Grenze", hilfreich: "Stabilität mit emotionaler Tiefe, Grenzen und Nähe balancieren" },
      { partner: "SO8", dynamik: "Einfluss + Hingabe", gefahr: "SX9 verliert eigene Stimme, SO8 nutzt Übergewicht", hilfreich: "SO8 übt Milde, SX9 übt klare Sprache" },
      { partner: "SX8", dynamik: "Dominanz trifft Zurückhaltung", gefahr: "Erstarrung", hilfreich: "Ergänzung von Kraft und Ruhe, Initiative teilen" },
      { partner: "SE9", dynamik: "Ruhe und Verschmelzung", gefahr: "Auflösung der eigenen Identität", hilfreich: "Tiefe Bindung, Eigenständigkeit pflegen" },
      { partner: "SO9", dynamik: "Ruhe vs. Nähe", gefahr: "Überblendung der Bedürfnisse", hilfreich: "Tiefe Ruhe in Verbindung, individuelle Bedürfnisse wahren" },
      { partner: "SX9", dynamik: "Harmonie sucht Harmonie, Gefahr der Trägheit", gefahr: "Konflikte werden vermieden, Stillstand", hilfreich: "Tiefe Ruhe, gegenseitige Akzeptanz, bewusst kleine Impulse setzen" },
    ],
    kurzfassung: `Frag konkret und geduldig nach ihren eigenen, unabhängigen Wünschen – nicht nur nach gemeinsamen Plänen. Nimm stilles Einverständnis nicht automatisch für echte Zustimmung. Ermutige kleine, eigene Positionierungen: echte Nähe wächst durch Begegnung, nicht durch Verschmelzung.`,
  },
};

function differenzierungPage() {
  const typen = [1,2,3,4,5,6,7,8,9];
  const { a, b } = diffState;

  const key = a && b && a !== b ? [Math.min(a,b), Math.max(a,b)].join("-") : null;
  const entry = key ? DIFFERENZIERUNGEN[key] : null;

  const btn = (nr) => {
    const isA = a === nr, isB = b === nr;
    const active = isA || isB;
    const col = TYPE_COLORS[nr] || "var(--copper)";
    return `<button data-diff-nr="${nr}" style="
      width:2.6rem;height:2.6rem;border-radius:50%;border:2px solid ${active ? col : "var(--line)"};
      background:${active ? col : col+"18"};color:${active ? "#fff" : col};
      font-weight:700;font-size:1rem;cursor:pointer;transition:all .18s;
      flex-shrink:0;
    ">${nr}</button>`;
  };

  const result = key && entry ? `
    <div style="margin-top:2rem;background:var(--paper);border:1px solid var(--copper);border-radius:1rem;padding:1.5rem 1.75rem;">
      <div style="display:flex;align-items:center;gap:1rem;margin-bottom:1.25rem;flex-wrap:wrap;">
        <span style="background:${TYPE_COLORS[a]||'var(--copper)'};color:#fff;border-radius:50%;width:2.4rem;height:2.4rem;display:inline-flex;align-items:center;justify-content:center;font-weight:700;font-size:1.1rem;flex-shrink:0;">${a}</span>
        <span style="color:var(--muted);font-size:1.2rem;">\u2194</span>
        <span style="background:${TYPE_COLORS[b]||'var(--copper)'};color:#fff;border-radius:50%;width:2.4rem;height:2.4rem;display:inline-flex;align-items:center;justify-content:center;font-weight:700;font-size:1.1rem;flex-shrink:0;">${b}</span>
        <span style="color:var(--muted);font-size:.85rem;margin-left:.25rem;">Motivationale Differenzierung</span>
      </div>
      <p style="line-height:1.75;color:var(--ink);margin:0 0 1.25rem;">${entry.text}</p>
      <div style="display:grid;grid-template-columns:1fr 1fr;gap:.5rem;border-top:1px solid color-mix(in srgb,var(--copper) 25%,var(--line));padding-top:1rem;">
        <div style="background:color-mix(in srgb,var(--copper) 8%,var(--paper));border-radius:.5rem;padding:.65rem .85rem;">
          <div style="font-size:.7rem;text-transform:uppercase;letter-spacing:.06em;color:var(--copper);font-weight:700;margin-bottom:.3rem;">Typ ${a} im Kern</div>
          <div style="font-size:.85rem;line-height:1.55;color:var(--ink);font-style:italic;">&bdquo;${entry.kernA}&ldquo;</div>
        </div>
        <div style="background:color-mix(in srgb,var(--copper) 8%,var(--paper));border-radius:.5rem;padding:.65rem .85rem;">
          <div style="font-size:.7rem;text-transform:uppercase;letter-spacing:.06em;color:var(--copper);font-weight:700;margin-bottom:.3rem;">Typ ${b} im Kern</div>
          <div style="font-size:.85rem;line-height:1.55;color:var(--ink);font-style:italic;">&bdquo;${entry.kernB}&ldquo;</div>
        </div>
      </div>
    </div>` : a && b && a === b ? `
    <p style="text-align:center;color:var(--muted);margin-top:2rem;">Bitte zwei <em>verschiedene</em> Typen w\u00e4hlen.</p>` : `
    <p style="text-align:center;color:var(--muted);margin-top:2rem;">W\u00e4hle oben zwei Typen aus, um die motivationale Differenzierung zu sehen.</p>`;

  return shell(`
    ${pageHeader("differenzierung")}
    <section class="narrow" style="padding-bottom:3rem;">
      <p class="eyebrow">Typisierungs-Hilfe</p>
      <h1 style="font-size:1.75rem;margin-bottom:.5rem;">Motivationale Differenzierung</h1>
      <p style="color:var(--muted);font-size:.95rem;margin-bottom:2rem;line-height:1.6;">
        \u00c4hnliche Typen lassen sich am sichersten durch ihre <strong>innere Motivation</strong> unterscheiden &ndash;
        nicht durch \u00e4u\u00dferes Verhalten. W\u00e4hle zwei Typen, um den entscheidenden motivationalen Unterschied zu sehen.
      </p>

      <div style="background:var(--paper);border:1px solid var(--line);border-radius:1rem;padding:1.5rem;">
        <p style="font-size:.85rem;color:var(--muted);margin:0 0 .75rem;">Typ A w\u00e4hlen:</p>
        <div style="display:flex;gap:.6rem;flex-wrap:wrap;margin-bottom:1.25rem;">
          ${typen.map(btn).join("")}
        </div>
        <p style="font-size:.85rem;color:var(--muted);margin:0 0 .75rem;">Typ B w\u00e4hlen:</p>
        <div style="display:flex;gap:.6rem;flex-wrap:wrap;">
          ${typen.map(btn).join("")}
        </div>
      </div>

      ${result}

      <div style="margin-top:3rem;padding-top:1.5rem;border-top:1px solid var(--line);">
        <p style="font-size:.8rem;color:var(--muted);line-height:1.6;">
          Quelle: Rathmer, D. &ndash; <em>Die Sprache unserer Beziehungen</em>, Verlagshaus Rathmer.
          Die Beschreibungen sind motivational bedingt und helfen, \u00e4u\u00dferlich \u00e4hnliche Typen klar voneinander abzugrenzen.
        </p>
      </div>
      ${relatedLinks([
        {route:"lookalike-typen", label:"Lookalike-Typen"},
        {route:"verwechslungen", label:"Verwechslungen"},
        {route:"enneagramm-profiling", label:"Enneagramm-Profiling"},
      ])}
    </section>
  `);
}

function krisenkompassPage() {
  const typeColors = {"1":"#8b6f47","2":"#7a2d90","3":"#c8860a","4":"#5b4fa0","5":"#2e7d6e","6":"#4a6fa5","7":"#b5870a","8":"#8b2014","9":"#5a7a3a"};
  const typeNames = {"1":"Der Reformer","2":"Der Helfer","3":"Der Dynamiker","4":"Der Individualist","5":"Der Beobachter","6":"Der Loyale","7":"Der Enthusiast","8":"Der Herausforderer","9":"Der Friedensstifter"};

  const KRISEN = {
    1: [
      { id:"wut", label:"Wut & innere Anspannung", emoji:"\ud83d\udd25", schritte:[
        "Stopp-Moment setzen: Verlassen Sie den Raum oder die Situation f\u00fcr 5 Minuten. Ihr K\u00f6rper braucht zuerst Abstand vom Ausl\u00f6ser.",
        "K\u00f6rper-Anker: Legen Sie beide H\u00e4nde flach auf den Bauch. Atmen Sie 4 Sekunden ein, 6 Sekunden aus. Wiederholen Sie das dreimal. Der Zorn geh\u00f6rt zum Typ 1 \u2014 er darf sein, er muss Sie nur nicht steuern.",
        "Milde-Frage: Fragen Sie sich: &bdquo;Was w\u00fcrde ich einem guten Freund in dieser Situation raten?&ldquo; Geben Sie sich dieselbe Antwort."
      ]},
      { id:"perfektionismus", label:"L\u00e4hmender Perfektionismus", emoji:"\u2699\ufe0f", schritte:[
        "Sofort-Entscheidung: W\u00e4hlen Sie bewusst die zweitbeste L\u00f6sung. Nicht die perfekte \u2014 die gute genug. F\u00fchren Sie sie jetzt durch.",
        "Inner Critic Timeout: Schreiben Sie die kritische innere Stimme auf einen Zettel. Legen Sie den Zettel zur Seite. Buchst\u00e4blich.",
        "Fertig-Ank\u00fcndigung: Sagen Sie laut (oder innerlich): &bdquo;Das ist gut genug. Ich bin fertig.&ldquo; Dreimal. Ohne Erg\u00e4nzung."
      ]},
      { id:"fehler", label:"Fehler & Scham", emoji:"\ud83d\ude14", schritte:[
        "Fehler benennen \u2014 einmal, sachlich: Was ist passiert? Keine Bewertung, nur Beschreibung in einem Satz.",
        "Verh\u00e4ltnism\u00e4\u00dfigkeit pr\u00fcfen: Wie wichtig ist dieser Fehler in einem Jahr? In zehn Jahren? Ordnen Sie ihn ein.",
        "Wiedergutmachungs-Schritt: Was ist der eine konkrete n\u00e4chste Schritt? Nur einer. F\u00fchren Sie ihn durch und betrachten Sie die Sache als abgeschlossen."
      ]},
    ],
    2: [
      { id:"erschoepfung", label:"Ersch\u00f6pfung durch Geben", emoji:"\ud83e\udec0", schritte:[
        "Sofort-Stopp: Sagen Sie zu der n\u00e4chsten Bitte Nein \u2014 ohne Erkl\u00e4rung. Nur &bdquo;Heute geht das nicht.&ldquo; Das ist kein Versagen, das ist Selbstschutz.",
        "Eigene Bed\u00fcrfnisse fragen: Setzen Sie sich hin und fragen: Was brauche ich gerade? Nicht was andere brauchen \u2014 was ich brauche. Schreiben Sie es auf.",
        "Eine Sache tun: Erf\u00fcllen Sie sich eine dieser eigenen Bed\u00fcrfnisse jetzt. Nur eine. Ohne schlechtes Gewissen."
      ]},
      { id:"abweisung", label:"Abweisung & Kr\u00e4nkung", emoji:"\ud83d\udc94", schritte:[
        "Gef\u00fchl anerkennen: Der Schmerz ist real. Sagen Sie sich: &bdquo;Ich bin verletzt. Das darf ich sein.&ldquo; Kein sofortiges Helfen, kein Ablenken.",
        "Herkunft pr\u00fcfen: Ist die Abweisung pers\u00f6nlich gemeint \u2014 oder ist der andere gerade in seiner eigenen Not? H\u00e4ufig ist es Letzteres.",
        "Selbst-Zuwendung: Tun Sie etwas, das sich gut anf\u00fchlt \u2014 nur f\u00fcr Sie. Ein Tee, ein Spaziergang, Musik. Kein Helfen in den n\u00e4chsten zwei Stunden."
      ]},
      { id:"manipulation", label:"Gef\u00fchl, ausgenutzt zu werden", emoji:"\ud83d\ude24", schritte:[
        "Innere Bilanz: Geben Sie in dieser Beziehung mehr als Sie empfangen? Antworten Sie ehrlich \u2014 ohne den anderen zu sch\u00fctzen.",
        "Grenze formulieren: Was ist das Mindeste, das Sie sich w\u00fcnschen w\u00fcrden? Formulieren Sie es als klaren Satz \u2014 noch ohne ihn auszusprechen.",
        "Gespr\u00e4ch planen: W\u00e4hlen Sie einen ruhigen Moment und sprechen Sie die Bitte aus. Nicht als Vorwurf, sondern als ehrliches Bed\u00fcrfnis."
      ]},
    ],
    3: [
      { id:"versagen", label:"Versagensangst & Druck", emoji:"\ud83c\udfaf", schritte:[
        "Druck externalisieren: Schreiben Sie alle offenen Aufgaben auf. Sortieren Sie nach Wichtigkeit. Streichen Sie alles, was heute nicht entschieden werden muss.",
        "Einen Schritt gehen: W\u00e4hlen Sie die wichtigste Aufgabe. Beginnen Sie sie \u2014 nicht zu Ende bringen, nur beginnen. Der Anfang bricht den L\u00e4hmungszustand.",
        "Wert-Erinnerung: Sie sind nicht Ihr Ergebnis. Fragen Sie sich: Wer sch\u00e4tzt mich unabh\u00e4ngig von meinem Erfolg? Denken Sie an eine konkrete Person."
      ]},
      { id:"maske", label:"Ersch\u00f6pfung der Fassade", emoji:"\ud83c\udfad", schritte:[
        "Maske ablegen \u2014 privat: Gehen Sie in einen Raum, in dem Sie allein sind. Erlauben Sie sich, nichts zu leisten. F\u00fcnf Minuten lang. Kein Handy.",
        "Echtheitsfrage: Was f\u00fchlen Sie gerade wirklich \u2014 hinter der funktionierenden Oberfl\u00e4che? Benennen Sie es, auch wenn es unbequem ist.",
        "Echten Kontakt suchen: Schreiben Sie einer Person, der Sie sich wirklich zeigen k\u00f6nnen, eine ehrliche Nachricht. Nicht professionell \u2014 menschlich."
      ]},
      { id:"entscheidung", label:"Entscheidungsl\u00e4hmung", emoji:"\u26a1", schritte:[
        "Zwei-Minuten-Entscheidung: Stellen Sie sich einen Timer auf zwei Minuten. In dieser Zeit entscheiden Sie \u2014 keine weitere Recherche, kein weiteres Abw\u00e4gen.",
        "Bauch-Test: Welche Option f\u00fchlt sich im K\u00f6rper leichter an? Nicht richtig \u2014 leichter. Das ist oft der verl\u00e4sslichste Kompass.",
        "Revidierbarkeit pr\u00fcfen: Ist diese Entscheidung r\u00fcckg\u00e4ngig zu machen? Wenn ja, entscheiden Sie sofort \u2014 Perfektionismus kostet mehr als ein korrigierbarer Fehler."
      ]},
    ],
    4: [
      { id:"melancholie", label:"Tiefe Melancholie & Leere", emoji:"\ud83c\udf0a", schritte:[
        "In die Welle \u2014 nicht gegen sie: Setzen Sie sich mit dem Gef\u00fchl. Stellen Sie einen Timer auf zehn Minuten. Erlauben Sie die Traurigkeit vollst\u00e4ndig \u2014 dann ist die Zeit um.",
        "K\u00f6rper-Anker: Gehen Sie nach drau\u00dfen. Zehn Minuten Bewegung. Der K\u00f6rper holt die Seele oft aus der Spirale, wenn der Kopf es nicht schafft.",
        "Erschaffung: Tun Sie etwas Kreatives \u2014 schreiben, zeichnen, Musik h\u00f6ren. Nicht um sich abzulenken, sondern um der Emotion einen Ausdruck zu geben."
      ]},
      { id:"neid", label:"Neid & das Gef\u00fchl, zu wenig zu sein", emoji:"\ud83d\udc9c", schritte:[
        "Neid benennen: &bdquo;Ich bin neidisch auf X, weil Y.&ldquo; Ehrlich, ohne Scham. Neid zeigt, was Sie sich w\u00fcnschen \u2014 das ist wertvolle Information.",
        "Einzigartigkeit erinnern: Was kann oder f\u00fchlt nur ich? Was hat noch niemand sonst getan, gedacht, ausgedr\u00fcckt in Ihrer Art? Schreiben Sie drei Dinge.",
        "Einen Sch\u00f6nheits-Moment: Suchen Sie heute bewusst etwas Sch\u00f6nes in Ihrer eigenen Gegenwart \u2014 nicht im Leben anderer. Ein Moment, der nur Ihrer ist."
      ]},
      { id:"abgelehnt", label:"Ablehnung & unverstanden sein", emoji:"\ud83e\uded9", schritte:[
        "Gef\u00fchl validieren: Es tut weh, nicht gesehen zu werden. Das ist real und verst\u00e4ndlich. Sie m\u00fcssen das nicht sofort wegdenken.",
        "\u00dcbertragung pr\u00fcfen: Wie stark erinnert diese Situation an fr\u00fchere Verletzungen? Reagieren Sie auf jetzt \u2014 oder auf damals?",
        "Selbst-Zeugnis: Schreiben Sie auf, was in Ihnen steckt, das der andere vielleicht nicht sieht. Werden Sie Ihr eigener wohlwollender Zeuge."
      ]},
    ],
    5: [
      { id:"ueberforderung", label:"Soziale \u00dcberforderung", emoji:"\ud83e\udde0", schritte:[
        "Sofort-R\u00fcckzug: Entschuldigen Sie sich h\u00f6flich und verlassen Sie die Situation. Das ist kein Versagen \u2014 es ist Selbstregulation. Gehen Sie in Ihren R\u00fcckzugsraum.",
        "Energie-Reset: Sitzen Sie allein, ohne Input. Kein Handy, keine Musik, kein Podcast. F\u00fcnfzehn Minuten Stille. Der Akku l\u00e4dt nur im Schweigen.",
        "Dosierter Wiedereinstieg: Wenn Sie wieder bereit sind, w\u00e4hlen Sie bewusst ein einziges Gespr\u00e4ch oder eine Aufgabe. Keine Vollbelastung nach der Pause."
      ]},
      { id:"leere", label:"Innere Leere & Isolation", emoji:"\ud83c\udfd4\ufe0f", schritte:[
        "K\u00f6rper besuchen: Stehen Sie auf und bewegen Sie sich \u2014 ein kurzer Spaziergang, Dehnen, kaltes Wasser ins Gesicht. Der Kopf kann Sie festhalten; der K\u00f6rper holt Sie zur\u00fcck.",
        "Minimalkontakt: Schreiben Sie einer Person, die Sie sch\u00e4tzen, eine kurze Nachricht. Kein langer Austausch \u2014 nur ein kleines Signal der Verbindung.",
        "Wissens-Ankerpunkt: Besch\u00e4ftigen Sie sich mit einem Thema, das Sie wirklich interessiert. Nicht als Ablenkung \u2014 als Erinnerung, dass Sie lebendig und neugierig sind."
      ]},
      { id:"kontrollverlust", label:"Kontrollverlust & Angst", emoji:"\ud83c\udf00", schritte:[
        "Fakten sammeln: Was ist tats\u00e4chlich passiert \u2014 ohne Interpretation? Schreiben Sie nur die belegbaren Fakten auf. Das sortiert den Kopf.",
        "Einflussbereich kl\u00e4ren: Was davon k\u00f6nnen Sie beeinflussen \u2014 und was nicht? Streichen Sie, was au\u00dferhalb Ihres Einflussbereichs liegt. Konzentrieren Sie sich nur auf den Rest.",
        "Einen Schritt planen: Was ist der kleinste m\u00f6gliche Schritt, den Sie jetzt gehen k\u00f6nnen? F\u00fchren Sie ihn durch. Handlung l\u00f6st Kontrollverlust besser als Nachdenken."
      ]},
    ],
    6: [
      { id:"angst", label:"Akute Angst & Katastrophendenken", emoji:"\ud83c\udf2a\ufe0f", schritte:[
        "Atemnotbremse: Atmen Sie vier Sekunden ein, halten Sie vier Sekunden an, atmen Sie acht Sekunden aus. Das aktiviert den Parasympathikus \u2014 physiologisch, nicht metaphorisch.",
        "Wahrscheinlichkeitscheck: Schreiben Sie das Worst-Case-Szenario auf. Dann fragen Sie: Wie wahrscheinlich ist das wirklich, auf einer Skala von 1 bis 10? Und: Was w\u00fcrde ich tun, wenn es eintr\u00e4te?",
        "Verb\u00fcndeten-Kontakt: Rufen Sie jetzt eine Person an, der Sie vertrauen. Nicht um das Problem zu l\u00f6sen \u2014 um sich geh\u00f6rt zu f\u00fchlen. Das reicht."
      ]},
      { id:"misstrauen", label:"Misstrauen & Verrat", emoji:"\ud83d\udee1\ufe0f", schritte:[
        "Trennung: Was ist Tatsache \u2014 und was ist Interpretation? Schreiben Sie die Tatsachen auf eine Seite, die Interpretationen auf die andere.",
        "Geschichte pr\u00fcfen: Hat diese Person bisher Grund zum Misstrauen gegeben? Oder projizieren Sie eine alte Erfahrung auf jetzt?",
        "Einen Schritt wagen: Vertrauen entsteht durch kleine Tests. Was ist die kleinste Offenheit, die Sie riskieren k\u00f6nnten? Versuchen Sie es bewusst."
      ]},
      { id:"zweifel", label:"L\u00e4hmender Selbstzweifel", emoji:"\ud83d\udd0d", schritte:[
        "Zweifel benennen: Schreiben Sie den konkreten Zweifel auf. H\u00e4ufig verliert er an Macht, sobald er sichtbar ist.",
        "Kompetenz-Anker: Erinnern Sie sich an drei Situationen, in denen Sie trotz Zweifel richtig entschieden oder gehandelt haben. Sie haben Ressourcen \u2014 auch wenn der Zweifel das verdeckt.",
        "Entscheidung auf Zeit: Treffen Sie jetzt eine Entscheidung \u2014 nur f\u00fcr heute. Mit dem Recht, sie morgen zu \u00fcberpr\u00fcfen. Das bricht die L\u00e4hmung, ohne Endg\u00fcltigkeit zu erzwingen."
      ]},
    ],
    7: [
      { id:"langeweile", label:"Innere Leere & Langeweile", emoji:"\u2728", schritte:[
        "Pause aushalten: Bleiben Sie drei Minuten mit der Leere. Kein Griff zum Handy, kein neuer Plan. Was passiert wirklich, wenn Sie nicht sofort f\u00fcllen?",
        "Tiefe statt Breite: W\u00e4hlen Sie eine einzige Sache aus Ihrem Leben \u2014 eine Beziehung, ein Projekt, eine Idee. Gehen Sie damit tiefer, statt zu wechseln.",
        "K\u00f6rper-Frage: Was f\u00fchlt der K\u00f6rper gerade \u2014 unter der Unruhe? Angst? Traurigkeit? Benennen Sie es. Die Leere ist oft ein Gef\u00fchl, das noch keinen Namen hat."
      ]},
      { id:"schmerz", label:"Schmerz & Trauer vermeiden", emoji:"\ud83c\udf27\ufe0f", schritte:[
        "Dem Schmerz erlauben: Stellen Sie einen Timer auf zehn Minuten. Erlauben Sie sich, das Schwere wirklich zu f\u00fchlen \u2014 ohne Ausweg, ohne Plan. Zehn Minuten.",
        "Trauer als Signal: Wof\u00fcr trauern Sie? Was hat das f\u00fcr eine Bedeutung? Trauer zeigt, was Ihnen wichtig war. Das ist nicht schwach \u2014 das ist tief.",
        "Bleiben statt fliehen: W\u00e4hlen Sie heute eine Situation, in der Sie normalerweise ausweichen w\u00fcrden. Bleiben Sie darin. Sie sind st\u00e4rker als die Unruhe."
      ]},
      { id:"verpflichtung", label:"Verpflichtungsangst & Flucht", emoji:"\ud83c\udfaa", schritte:[
        "Was ich wirklich will: Hinter der Flucht steckt oft eine echte Sehnsucht. Was wollen Sie wirklich \u2014 wenn kein Ausweg m\u00f6glich w\u00e4re?",
        "Kosten der Freiheit: Was verlieren Sie durch st\u00e4ndige Optionalit\u00e4t? Tiefe? Verl\u00e4sslichkeit? Vertrauen? Machen Sie sich das bewusst, ohne sich zu verurteilen.",
        "Kleines Commitment: W\u00e4hlen Sie eine Verpflichtung \u2014 klein, konkret, \u00fcberschaubar. Halten Sie sie. Das ist \u00dcbung, keine Selbstbestrafung."
      ]},
    ],
    8: [
      { id:"kontrollverlust", label:"Kontrollverlust & Ohnmacht", emoji:"\u26a1", schritte:[
        "K\u00f6rper entladen: Gehen Sie raus und bewegen Sie sich kr\u00e4ftig \u2014 laufen, Treppen steigen, Liegest\u00fctze. Der K\u00f6rper des Typs 8 braucht ein Ventil f\u00fcr aufgestaute Energie.",
        "Einfluss kl\u00e4ren: Was liegt in Ihrer Hand \u2014 und was nicht? Wenden Sie sich ausschlie\u00dflich dem zu, was Sie tats\u00e4chlich ver\u00e4ndern k\u00f6nnen. Lassen Sie den Rest los.",
        "St\u00e4rke durch Stille: St\u00e4rke hei\u00dft nicht immer handeln. Sitzen Sie f\u00fcnf Minuten still und entscheiden Sie bewusst, was Sie als N\u00e4chstes tun. Das ist Kontrolle."
      ]},
      { id:"verrat", label:"Verrat & Vertrauensbruch", emoji:"\ud83d\udde1\ufe0f", schritte:[
        "Wut herauslassen \u2014 sicher: Schreiben Sie alles auf, was Sie f\u00fchlen \u2014 unzensiert, f\u00fcr niemanden au\u00dfer sich. Dann verbrennen oder zerrei\u00dfen Sie den Zettel.",
        "Verletzlichkeit anerkennen: Hinter dem Verrat steckt ein Schmerz. Der Schmerz kommt, weil Sie vertraut haben. Das ist keine Schw\u00e4che \u2014 das ist Menschlichkeit.",
        "N\u00e4chsten Schritt w\u00e4hlen: Was ist das Kl\u00fcgste, das Sie jetzt tun k\u00f6nnen \u2014 nicht das H\u00e4rteste? Handeln aus Klarheit ist wirksamer als Handeln aus Zorn."
      ]},
      { id:"schwaeche", label:"Eigene Schw\u00e4che & Verletzlichkeit", emoji:"\ud83e\udec0", schritte:[
        "Allein sein erlauben: Suchen Sie Einsamkeit \u2014 nicht um zu gr\u00fcbeln, sondern um ohne Publikum zu sein. Typ 8 ist in Einsamkeit oft zug\u00e4nglicher f\u00fcr sich selbst.",
        "Verletzlichkeit benennen: Was schmerzt Sie wirklich \u2014 hinter der St\u00e4rke? Sagen Sie es laut, auch wenn niemand zuh\u00f6rt. Die Worte machen es real.",
        "Einen Menschen w\u00e4hlen: Gibt es eine Person, der Sie sich zeigen k\u00f6nnen \u2014 ohne Maske? Suchen Sie diese eine Person auf. Das reicht."
      ]},
    ],
    9: [
      { id:"vermeidung", label:"Selbstvergessenheit & innere Taubheit", emoji:"\ud83c\udf3f", schritte:[
        "Eigene Anwesenheit: Fragen Sie sich jetzt: Was f\u00fchle ich? Was will ich? Was denke ich \u2014 nicht was andere wollen? Schreiben Sie es auf, ohne zu zensieren.",
        "K\u00f6rper aktivieren: Stehen Sie auf. Bewegen Sie sich f\u00fcr zehn Minuten. Der Typ 9 verliert sich oft im Kopf anderer \u2014 der K\u00f6rper holt Sie zu sich zur\u00fcck.",
        "Eine Meinung \u00e4u\u00dfern: Sagen Sie heute in einer Situation, was Sie wirklich denken \u2014 auch wenn es unbequem ist. Nur einmal. Das ist \u00dcbung, kein Ultimatum."
      ]},
      { id:"konflikt", label:"Unvermeidlicher Konflikt", emoji:"\ud83c\udf0a", schritte:[
        "Abstand-Kurzpause: Gehen Sie in eine ruhige Ecke f\u00fcr f\u00fcnf Minuten. Nicht um auszuweichen \u2014 um sich zu sammeln, bevor Sie reagieren.",
        "Position finden: Was ist Ihr eigener Standpunkt in dieser Sache \u2014 unabh\u00e4ngig davon, was Harmonie erfordern w\u00fcrde? Benennen Sie ihn f\u00fcr sich.",
        "Sanft aber klar: Sprechen Sie Ihre Position aus \u2014 in ruhigem Ton, aber ohne sie wegzur\u00e4umen. &bdquo;Ich sehe das anders: ...&ldquo; Zweimal \u00fcben, dann sagen."
      ]},
      { id:"blockade", label:"Innere Blockade & Tr\u00e4gheit", emoji:"\ud83d\udc22", schritte:[
        "Zwei-Minuten-Regel: W\u00e4hlen Sie eine einzige Aufgabe, die Sie vermeiden. Beginnen Sie sie f\u00fcr genau zwei Minuten. Nur das. Nicht fertig werden \u2014 anfangen.",
        "Motivation von innen: Was w\u00fcrden Sie gern f\u00fcr sich selbst erreichen \u2014 nicht f\u00fcr andere, nicht f\u00fcr den Frieden? Was w\u00e4re Ihnen wichtig, wenn es niemanden sonst g\u00e4be?",
        "Kleiner sichtbarer Schritt: Tun Sie eine konkrete, sichtbare Sache \u2014 etwas, das einen Unterschied macht. Keine gro\u00dfe Vision, ein echter kleiner Schritt heute."
      ]},
    ],
  };

  const col = krisenState.typNr ? typeColors[krisenState.typNr] : "var(--copper)";

  // Schritt 3: Protokoll anzeigen
  if (krisenState.typNr && krisenState.krisenId) {
    const krise = KRISEN[krisenState.typNr].find(k => k.id === krisenState.krisenId);
    return shell(`
      ${pageHeader("krisenkompass")}
      <section class="narrow">
        <button class="ghost-link" data-krisen-reset style="font-size:.85rem;margin-bottom:1.5rem;">\u2190 Neue Situation</button>
        <p class="eyebrow">Krisenkompass &middot; Typ ${krisenState.typNr} &middot; ${krise.emoji}</p>
        <h1 style="font-size:1.5rem;line-height:1.3;margin-bottom:.4rem;">${krise.label}</h1>
        <p style="font-size:.88rem;color:var(--muted);margin-bottom:1.8rem;">Drei konkrete Schritte f&uuml;r <strong style="color:${col};">${typeNames[krisenState.typNr]}</strong> in dieser Situation.</p>

        ${krise.schritte.map((s, i) => `
        <div style="display:flex;gap:1rem;align-items:flex-start;margin-bottom:1.2rem;padding:1rem 1.2rem;background:color-mix(in srgb, ${col} 5%, var(--paper));border-radius:10px;border-left:4px solid ${col};">
          <div style="min-width:2rem;height:2rem;border-radius:50%;background:${col};color:#fff;display:flex;align-items:center;justify-content:center;font-size:.9rem;font-weight:700;flex-shrink:0;">${i+1}</div>
          <p style="font-size:.92rem;line-height:1.7;color:var(--ink);margin:0;">${s}</p>
        </div>`).join("")}

        <div style="background:color-mix(in srgb, ${col} 8%, var(--paper));border:1px solid var(--line);border-radius:10px;padding:1rem 1.2rem;margin-top:1.5rem;font-size:.85rem;line-height:1.7;color:var(--ink);">
          <strong style="color:${col};">Wichtig:</strong> Diese Schritte ersetzen keine professionelle Begleitung. Sie sind ein erster Impuls, um aus der akuten Starre herauszukommen.
        </div>

        <div style="margin-top:2rem;padding-top:1.2rem;border-top:1px solid var(--line);">
          <p style="font-size:.78rem;font-weight:700;color:var(--muted);text-transform:uppercase;letter-spacing:.07em;margin:0 0 .75rem;">Andere Situationen f&uuml;r Typ ${krisenState.typNr}</p>
          <div style="display:flex;flex-direction:column;gap:.5rem;">
            ${KRISEN[krisenState.typNr].filter(k => k.id !== krisenState.krisenId).map(k => `
            <button data-krisen-id="${k.id}" style="text-align:left;padding:.7rem 1rem;border:1px solid var(--line);border-radius:8px;background:var(--paper);font-size:.88rem;color:var(--ink);cursor:pointer;">
              ${k.emoji} ${k.label}
            </button>`).join("")}
          </div>
        </div>
        ${relatedLinks([
          {route:"situationskompass", label:"Situationskompass"},
          {route:"practice", label:"Werkzeuge"},
          {route:"beziehungen", label:"Beziehungskompass"},
        ])}
      </section>
    `);
  }

  // Schritt 2: Krisensituation w\u00e4hlen
  if (krisenState.typNr) {
    return shell(`
      ${pageHeader("krisenkompass")}
      <section class="narrow">
        <button class="ghost-link" data-krisen-reset style="font-size:.85rem;margin-bottom:1.5rem;">\u2190 Typ wechseln</button>
        <p class="eyebrow">Krisenkompass &middot; Typ ${krisenState.typNr}</p>
        <h1 style="font-size:1.5rem;line-height:1.3;margin-bottom:.4rem;">${typeNames[krisenState.typNr]}</h1>
        <p style="font-size:.95rem;color:var(--muted);margin-bottom:1.8rem;">Was beschreibt Ihre aktuelle Situation am besten?</p>
        <div style="display:flex;flex-direction:column;gap:.75rem;">
          ${KRISEN[krisenState.typNr].map(k => `
          <button data-krisen-id="${k.id}" style="
            text-align:left;padding:1rem 1.2rem;
            border:2px solid var(--line);border-radius:12px;
            background:var(--paper);cursor:pointer;
            transition:border-color .15s, background .15s;">
            <span style="font-size:1.1rem;margin-right:.6rem;">${k.emoji}</span>
            <span style="font-size:.95rem;font-weight:600;color:var(--ink);">${k.label}</span>
          </button>`).join("")}
        </div>
      </section>
    `);
  }

  // Schritt 1: Typ w\u00e4hlen
  return shell(`
    ${pageHeader("krisenkompass")}
    <section class="narrow">
      <p class="eyebrow">Praxis &middot; Krisenkompass</p>
      <h1>Krisenkompass</h1>
      <p class="lead-small">Sie stecken gerade in einer schwierigen Situation? W&auml;hlen Sie Ihren Enneagrammtyp &mdash; und erhalten Sie sofort drei konkrete Schritte, die genau zu Ihrem Muster passen.</p>

      <div style="display:grid;grid-template-columns:repeat(3,1fr);gap:.75rem;margin-top:1.8rem;">
        ${Object.entries(typeNames).map(([nr, name]) => {
          const c = typeColors[nr];
          return `
          <button data-krisen-typ="${nr}" style="
            padding:1rem .75rem;border-radius:12px;
            background:color-mix(in srgb, ${c} 7%, var(--paper));
            border:2px solid color-mix(in srgb, ${c} 25%, var(--line));
            cursor:pointer;text-align:center;transition:border-color .15s;">
            <span style="display:block;font-size:1.4rem;font-weight:800;color:${c};line-height:1;">${nr}</span>
            <span style="display:block;font-size:.65rem;color:var(--ink);margin-top:.35rem;line-height:1.3;">${name}</span>
          </button>`;
        }).join("")}
      </div>

      <div style="margin-top:2rem;padding:1rem 1.2rem;background:color-mix(in srgb, var(--copper) 5%, var(--paper));border-radius:10px;border:1px solid var(--line);font-size:.85rem;line-height:1.7;color:var(--muted);">
        Der Krisenkompass zeigt keine Diagnosen und ersetzt keine Therapie. Er gibt typspezifische Impulse f&uuml;r den ersten Schritt aus einer akuten Starre heraus.
      </div>
      ${relatedLinks([
        {route:"situationskompass", label:"Situationskompass"},
        {route:"practice", label:"Werkzeuge"},
        {route:"beziehungen", label:"Beziehungskompass"},
      ])}
    </section>
  `);
}

function kommunikationsguidePage() {
  const SUBTYPES = ["SE1","SO1","SX1","SE2","SO2","SX2","SE3","SO3","SX3","SE4","SO4","SX4","SE5","SO5","SX5","SE6","SO6","SX6","SE7","SO7","SX7","SE8","SO8","SX8","SE9","SO9","SX9"];
  const profCode = getProfile().toUpperCase();
  const activeSubtype = kommGuideState.subtypeCode || (SUBTYPES.includes(profCode) ? profCode : null);

  const subtypeGrid = SUBTYPES.map(code => {
    const hasData = !!KOMMUNIKATIONSGUIDE[code];
    const isSel = code === activeSubtype;
    const isMe = code === profCode;
    const tc = typeColorFromCode(code);
    const borderC = tc;
    const bgC = isSel ? `color-mix(in srgb,${tc} 18%,var(--paper))` : `color-mix(in srgb,${tc} 6%,var(--paper))`;
    const colorC = tc;
    const opacity = hasData ? "1" : ".45";
    return `<button data-komm-subtype="${code}" ${!hasData ? "disabled" : ""} style="display:flex;flex-direction:column;align-items:center;gap:.25rem;padding:.4rem .5rem;border-radius:.5rem;border:1.5px solid ${borderC};background:${bgC};font-size:.78rem;font-weight:${isMe ? 700 : 500};color:${colorC};cursor:${hasData ? "pointer" : "default"};opacity:${opacity};font-family:inherit;white-space:nowrap;">
      <span style="position:relative;width:26px;height:26px;border-radius:50%;overflow:hidden;flex-shrink:0;box-shadow:0 0 0 1.5px ${tc};display:inline-block;">
        <img src="https://pub-2851309644cc48aea2a2ae780b41b196.r2.dev/assets/tier-avatar-120/${code.toLowerCase()}.jpg" alt="" loading="lazy" style="position:absolute;top:${tierAvatarTop(code)};left:${tierAvatarLeft(code)};width:140%;height:140%;object-fit:cover;" onerror="this.parentElement.style.display='none'" />
      </span>
      <span>${code}${isMe ? " ★" : ""}</span>
      ${!hasData ? '<span style="font-size:.6rem;font-weight:400;color:var(--muted);">bald</span>' : ""}
    </button>`;
  }).join("");

  let resultHtml = `<p style="text-align:center;color:var(--muted);font-size:.9rem;margin-top:2rem;">W&auml;hle einen Subtyp, um zu erfahren, wie du ihm im Alltag, in Beziehung und F&uuml;hrung am besten begegnest.</p>`;

  const g = activeSubtype ? KOMMUNIKATIONSGUIDE[activeSubtype] : null;
  if (g) {
    resultHtml = `
      <div style="background:var(--paper);border:1px solid var(--copper);border-radius:1rem;padding:1.4rem 1.6rem;margin-top:1.5rem;max-width:100%;">
        <div style="display:flex;align-items:center;gap:.8rem;margin-bottom:.3rem;">
          <span style="position:relative;width:56px;height:56px;border-radius:50%;overflow:hidden;flex-shrink:0;box-shadow:0 0 0 2px ${typeColorFromCode(activeSubtype)};display:inline-block;">
            <img src="https://pub-2851309644cc48aea2a2ae780b41b196.r2.dev/assets/tier-avatar-120/${activeSubtype.toLowerCase()}.jpg" alt="${g.tier}" loading="lazy" style="position:absolute;top:${tierAvatarTop(activeSubtype)};left:${tierAvatarLeft(activeSubtype)};width:140%;height:140%;object-fit:cover;" onerror="this.parentElement.style.display='none'" />
          </span>
          <div style="font-size:.68rem;text-transform:uppercase;letter-spacing:.07em;color:var(--muted);font-weight:600;">Kommunikationsguide &middot; ${activeSubtype} &middot; Tierentsprechung: ${g.tier}</div>
        </div>

        <h3 style="font-size:1.05rem;font-weight:700;margin:1rem 0 .6rem;color:var(--ink);">1. Woran erkennst du die ${activeSubtype}?</h3>
        <p style="margin:0 0 .8rem;font-size:.92rem;line-height:1.75;color:var(--ink);">${g.erkennung}</p>

        <div style="border-left:3px solid color-mix(in srgb, var(--copper) 45%, var(--line));padding:.8rem 1rem;background:color-mix(in srgb, var(--copper) 5%, var(--paper));border-radius:0 .5rem .5rem 0;margin-bottom:1rem;">
          <div style="font-size:.72rem;text-transform:uppercase;letter-spacing:.06em;color:var(--muted);font-weight:700;margin-bottom:.4rem;">${g.wunde.titel}</div>
          <p style="margin:0;font-size:.9rem;line-height:1.7;color:var(--ink);">${g.wunde.text}</p>
        </div>

        <h3 style="font-size:1.05rem;font-weight:700;margin:1.2rem 0 .6rem;color:var(--ink);">${g.fluegel.titel}</h3>
        <ul style="margin:0 0 1rem;padding-left:1.2rem;font-size:.9rem;line-height:1.7;color:var(--ink);">
          <li style="margin-bottom:.6rem;"><strong>${g.fluegel.w1.code}</strong> (Beispiel: <a href="javascript:void(0)" data-route="${g.fluegel.w1.route}">${g.fluegel.w1.name}</a>) &ndash; ${g.fluegel.w1.text}</li>
          <li><strong>${g.fluegel.w2.code}</strong> (Beispiel: <a href="javascript:void(0)" data-route="${g.fluegel.w2.route}">${g.fluegel.w2.name}</a>) &ndash; ${g.fluegel.w2.text}</li>
        </ul>

        <h3 style="font-size:1.05rem;font-weight:700;margin:1.2rem 0 .6rem;color:var(--ink);">Stress- und Wachstumsrichtung</h3>
        <p style="margin:0 0 .6rem;font-size:.9rem;line-height:1.7;color:var(--ink);">${g.stressWachstum.stress}</p>
        <p style="margin:0 0 1rem;font-size:.9rem;line-height:1.7;color:var(--ink);">${g.stressWachstum.wachstum}</p>

        <h3 style="font-size:1.05rem;font-weight:700;margin:1.2rem 0 .6rem;color:var(--ink);">2. Was in der Kommunikation wirklich ankommt</h3>
        <ul style="margin:0 0 1rem;padding-left:1.2rem;font-size:.9rem;line-height:1.7;color:var(--ink);">
          ${g.ankommt.map(a => `<li style="margin-bottom:.4rem;">${a}</li>`).join("")}
        </ul>

        <h3 style="font-size:1.05rem;font-weight:700;margin:1.2rem 0 .6rem;color:var(--ink);">3. Typische Trigger &ndash; und wie du sie vermeidest</h3>
        <div style="display:grid;gap:.7rem;margin-bottom:1rem;">
          ${g.trigger.map(t => `
            <div style="border:1px solid var(--line);border-radius:.6rem;padding:.7rem .9rem;background:var(--paper);">
              <div style="font-size:.88rem;color:var(--ink);font-weight:600;margin-bottom:.25rem;">${t.trigger}</div>
              <div style="font-size:.82rem;color:var(--muted);margin-bottom:.35rem;">${t.warum}</div>
              <div style="font-size:.85rem;color:color-mix(in srgb, var(--copper) 70%, #2d6a4f);"><strong>Stattdessen:</strong> ${t.alternative}</div>
            </div>
          `).join("")}
        </div>

        <h3 style="font-size:1.05rem;font-weight:700;margin:1.2rem 0 .6rem;color:var(--ink);">4. ${g.fuehrung.titel}</h3>
        <p style="margin:0 0 .5rem;font-size:.9rem;line-height:1.75;color:var(--ink);">${g.fuehrung.text}</p>
        <p style="margin:0 0 1rem;font-size:.78rem;line-height:1.6;color:var(--muted);font-style:italic;">Hinweis: ${g.fuehrung.hinweis}</p>

        <h3 style="font-size:1.05rem;font-weight:700;margin:1.2rem 0 .6rem;color:var(--ink);">5. ${g.beziehung.titel}</h3>
        <p style="margin:0 0 .4rem;font-size:.9rem;line-height:1.7;color:var(--ink);"><strong>Beziehungsrisiko:</strong> ${g.beziehung.risiko}</p>
        <p style="margin:0 0 .4rem;font-size:.9rem;line-height:1.7;color:var(--ink);"><strong>Leitfragen an sich selbst:</strong> ${g.beziehung.leitfragen}</p>
        <p style="margin:0 0 1rem;font-size:.9rem;line-height:1.7;color:var(--ink);"><strong>Was dem Umfeld hilft:</strong> ${g.beziehung.hilfreich}</p>

        <h3 style="font-size:1.05rem;font-weight:700;margin:1.2rem 0 .6rem;color:var(--ink);">6. Im Zusammenspiel mit anderen Subtypen</h3>
        <div style="display:grid;gap:.6rem;margin-bottom:1rem;">
          ${g.pairing.map(p => `
            <div style="border:1px solid var(--line);border-radius:.6rem;padding:.6rem .9rem;font-size:.85rem;line-height:1.6;color:var(--ink);">
              <strong><span style="color:${typeColorFromCode(activeSubtype)};">${activeSubtype}</span> + <span style="color:${typeColorFromCode(p.partner)};">${p.partner}</span></strong> (${p.dynamik}): Gefahr &ndash; ${p.gefahr}. Hilfreich &ndash; ${p.hilfreich}.
            </div>
          `).join("")}
        </div>
        <p style="margin:0 0 1.2rem;font-size:.78rem;color:var(--muted);font-style:italic;">Alle 27 Paarungen (inklusive der Paarung mit sich selbst) aus "Die Sprache unserer Beziehungen".</p>

        <div style="background:rgba(180,120,0,0.08);border-left:3px solid var(--gold);padding:.9rem 1.1rem;border-radius:0 .6rem .6rem 0;">
          <div style="font-size:.72rem;text-transform:uppercase;letter-spacing:.06em;color:var(--muted);font-weight:700;margin-bottom:.4rem;">Kurzfassung zum Merken</div>
          <p style="margin:0;font-size:.92rem;line-height:1.7;color:var(--ink);">${g.kurzfassung}</p>
        </div>
      </div>`;
  }

  return shell(`
    ${pageHeader("kommunikationsguide")}
    <section class="narrow">
      <p class="eyebrow">Praxis &middot; Beziehung &amp; F&uuml;hrung</p>
      <h1>Kommunikationsguide</h1>
      <p class="lead-small">Wie begegnest du einem bestimmten Subtyp am besten &ndash; im Alltag, in einer engen Beziehung oder als F&uuml;hrungskraft bzw. Kollege? Basierend auf "Die Sprache unserer Beziehungen", "F&uuml;hrung mit Fundament" und weiteren Werken von Detlef Rathmer. W&auml;hle einen Subtyp:</p>
      <div style="display:grid;grid-template-columns:repeat(auto-fill,minmax(58px,1fr));gap:.4rem;margin:1.5rem 0 1rem;">
        ${subtypeGrid}
      </div>
      ${resultHtml}
      <div style="margin-top:2rem;padding:1rem 1.2rem;background:color-mix(in srgb, var(--copper) 5%, var(--paper));border-radius:10px;border:1px solid var(--line);font-size:.85rem;line-height:1.7;color:var(--muted);">
        Der Kommunikationsguide ersetzt keine Beratung oder Therapie, sondern gibt typspezifische Anhaltspunkte f&uuml;r besseres gegenseitiges Verst&auml;ndnis.
      </div>

      <div class="vb-section" style="max-width:100%;margin-top:1.5rem;">
        <h2 style="font-size:1.15rem;font-weight:700;margin:0 0 .8rem;color:var(--ink);">Buchempfehlungen zum Vertiefen</h2>
        ${bookTip("der-code-deiner-persoenlichkeit", "Die eigene Motivation entschlüsseln – Spurensuche zur persönlichen Typbestimmung.", "Der Code deiner Persönlichkeit")}
        ${bookTip("die-verborgene-dynamik-der-27-subtypen", "Die 27 Subtypen im Detail – wie Instinkt und Typ zusammenwirken.", "Die verborgene Dynamik der 27 Subtypen")}
        ${bookTip("enneagramm-zoo", "Die 27 Subtypen als Tierarchetypen – anschaulich, humorvoll, einprägsam.", "Enneagramm-Zoo")}
        ${bookTip("fuehrung-mit-fundament", "Enneagramm in der Führungspraxis – typgerecht führen, Muster erkennen, Teams stärken.", "Führung mit Fundament (Detlef Rathmer & David L. Rathmer)")}
        ${bookTip("hinter-der-leidenschaft", "Die neun Wunden des Enneagramms – was hinter der Leidenschaft jedes Typs wirklich steckt.", "Hinter der Leidenschaft – die neun Wunden des Enneagramms")}
        ${bookTip("heilung-als-erinnerung", "Heilung nicht als Reparatur, sondern als Erinnerung an das, was wir eigentlich sind.", "Heilung als Erinnerung")}
        ${bookTip("die-sprache-unserer-beziehungen", "Nähe gestalten mit dem Enneagramm – die Basis dieses Kommunikationsguides, mit allen 365 Paarungskombinationen.", "Die Sprache unserer Beziehungen")}
        ${bookTip("die-sprache-unserer-sexualitaet", "Wie sich die 27 Subtypen in Anziehung, Nähe und Leidenschaft unterscheiden.", "Die Sprache unserer Sexualität")}
        ${bookTip("leidenschaft-und-heilung", "27 Subtypen – Leidenschaften, Tugenden und Heilungswege direkt aus der therapeutischen Praxis.", "Leidenschaft und Heilung")}
        ${bookTip("in-der-tiefe-der-zeit", "Ein Buch über Bewusstsein, Zeit und die stille Dimension hinter allem Erleben.", "In der Tiefe der Zeit")}
        ${bookTip("das-seminar-wenn-masken-fallen", "Wenn die typspezifischen Masken fallen – ein Weg zu echter Selbstbegegnung.", "Das Seminar – Wenn Masken fallen")}
        ${bookTip("wenn-die-stille-brennt", "Wie Burnout je nach Subtyp entsteht, sich anfühlt und überwunden werden kann.", "Wenn die Stille brennt – Burnout")}
        ${bookTip("meta-intelligenz", "Die Intelligenz, die alle anderen Intelligenzen verbündet – für mehr innere Klarheit in jeder Kommunikation.", "Meta-Intelligenz")}
        ${bookTip("meta-intelligenz-das-hoerbuch", "Meta-Intelligenz als Hörbuch – ideal für unterwegs oder zum meditativen Zuhören.", "Meta-Intelligenz – Das Hörbuch")}
      </div>

      ${relatedLinks([
        {route:"beziehungen", label:"Beziehungskompass"},
        {route:"situationskompass", label:"Situationskompass"},
        {route:"krisenkompass", label:"Krisenkompass"},
      ])}
    </section>
  `);
}

function situationskompasPage() {
  const SUBTYPES = ["SE1","SO1","SX1","SE2","SO2","SX2","SE3","SO3","SX3","SE4","SO4","SX4","SE5","SO5","SX5","SE6","SO6","SX6","SE7","SO7","SX7","SE8","SO8","SX8","SE9","SO9","SX9"];
  const profCode = getProfile().toUpperCase();
  const activeSubtype = situKompState.subtypeCode || (SUBTYPES.includes(profCode) ? profCode : "SE1");
  const activeSitu = situKompState.situId;
  const langEN = location.pathname.startsWith('/en');

  const situationen = SITUATIONSKOMPASS.situationen;
  const eintraege = SITUATIONSKOMPASS.eintraege;

  const situGrid = situationen.map(s => {
    const hasData = eintraege[activeSubtype] && eintraege[activeSubtype][s.id];
    const isActive = s.id === activeSitu;
    const borderColor = isActive ? "var(--copper)" : "var(--line)";
    const bg = isActive ? "color-mix(in srgb,var(--copper) 10%,var(--paper))" : "var(--paper)";
    const textColor = isActive ? "var(--copper)" : "var(--ink)";
    const cursor = hasData ? "pointer" : "default";
    const opacity = hasData ? "1" : ".45";
    return `
      <button
        class="situ-btn"
        data-situ-id="${s.id}"
        ${!hasData ? "disabled" : ""}
        style="display:flex;flex-direction:column;align-items:center;gap:.3rem;padding:.75rem .5rem;border-radius:.75rem;border:1.5px solid ${borderColor};background:${bg};cursor:${cursor};opacity:${opacity};font-family:inherit;transition:border-color .15s,background .15s;">
        <span style="font-size:1.4rem;">${s.icon}</span>
        <span style="font-size:.65rem;font-weight:600;color:${textColor};text-align:center;line-height:1.25;">${s.label}${!hasData ? '<br><span style="font-size:.65rem;color:var(--muted);font-weight:400;">bald</span>' : ''}</span>
      </button>`;
  }).join("");

  const subtypeRow = SUBTYPES.map(code => {
    const isMe = code === profCode;
    const isSel = code === activeSubtype;
    const borderC = isSel ? "var(--copper)" : "var(--line)";
    const bgC = isSel ? "color-mix(in srgb,var(--copper) 12%,var(--paper))" : "var(--paper)";
    const fw = isMe ? "700" : "500";
    const colorC = isSel ? "var(--copper)" : "var(--ink)";
    return `<button data-situ-subtype="${code}" style="padding:.3rem .55rem;border-radius:.4rem;border:1.5px solid ${borderC};background:${bgC};font-size:.78rem;font-weight:${fw};color:${colorC};cursor:pointer;font-family:inherit;white-space:nowrap;">${code}${isMe ? " \u2605" : ""}</button>`;
  }).join("");

  let resultHtml = "";
  if (activeSitu) {
    const entry = eintraege[activeSubtype] && eintraege[activeSubtype][activeSitu];
    const situ = situationen.find(s => s.id === activeSitu);
    if (entry) {
      resultHtml = `
        <div style="background:var(--paper);border:1px solid var(--copper);border-radius:1rem;padding:1.4rem 1.6rem;margin-top:1.5rem;">
          <div style="display:flex;align-items:center;gap:.6rem;margin-bottom:1.1rem;">
            <span style="font-size:1.5rem;">${situ.icon}</span>
            <div>
              <div style="font-size:.68rem;text-transform:uppercase;letter-spacing:.07em;color:var(--muted);font-weight:600;">Situationskompass &middot; ${activeSubtype}</div>
              <div style="font-size:1.05rem;font-weight:700;color:var(--ink);">${situ.label}</div>
            </div>
          </div>
          <div style="display:grid;gap:.85rem;">
            <div style="border-left:3px solid color-mix(in srgb,var(--copper) 45%,var(--line));padding:.75rem 1rem;background:color-mix(in srgb,var(--copper) 5%,var(--paper));border-radius:0 .5rem .5rem 0;">
              <div style="font-size:.65rem;text-transform:uppercase;letter-spacing:.07em;color:var(--muted);font-weight:700;margin-bottom:.4rem;">Autopilot</div>
              <p style="margin:0;font-size:.9rem;line-height:1.7;color:var(--ink);">${langEN && entry.autopilotEN ? entry.autopilotEN : entry.autopilot}</p>
            </div>
            <div style="border-left:3px solid var(--copper);padding:.75rem 1rem;background:color-mix(in srgb,var(--copper) 8%,var(--paper));border-radius:0 .5rem .5rem 0;">
              <div style="font-size:.65rem;text-transform:uppercase;letter-spacing:.07em;color:var(--copper);font-weight:700;margin-bottom:.4rem;">${langEN ? 'Awareness' : 'Bewusstheit'}</div>
              <p style="margin:0;font-size:.9rem;line-height:1.7;color:var(--ink);font-style:italic;">${langEN && entry.bewusstheitEN ? entry.bewusstheitEN : entry.bewusstheit}</p>
            </div>
            <div style="border-left:3px solid color-mix(in srgb,var(--copper) 65%,#2d6a4f);padding:.75rem 1rem;background:color-mix(in srgb,var(--copper) 6%,var(--paper));border-radius:0 .5rem .5rem 0;">
              <div style="font-size:.65rem;text-transform:uppercase;letter-spacing:.07em;color:color-mix(in srgb,var(--copper) 70%,#2d6a4f);font-weight:700;margin-bottom:.4rem;">${langEN ? 'Exercise' : '&Uuml;bung'}</div>
              <p style="margin:0;font-size:.9rem;line-height:1.7;color:var(--ink);">${langEN && entry.uebungEN ? entry.uebungEN : entry.uebung}</p>
            </div>
          </div>
        </div>`;
    }
  } else {
    resultHtml = `<p style="text-align:center;color:var(--muted);font-size:.9rem;margin-top:2rem;">W&auml;hle eine Situation, um deinen pers&ouml;nlichen Impuls zu erhalten.</p>`;
  }

  return shell(`
    ${pageHeader("situationskompass")}
    <section class="narrow">
      <p class="eyebrow">Praxis &middot; Bewusste Impulse</p>
      <h1>Situationskompass</h1>
      <p class="lead-small">In welcher Lebenssituation steckst du gerade? W&auml;hle eine Situation und entdecke deinen typspezifischen Autopiloten &ndash; und den Bewusstseinsimpuls, der ihn aufweicht.</p>
      <div style="display:grid;grid-template-columns:repeat(3,1fr);gap:.5rem;margin:1.5rem 0 1rem;">
        ${situGrid}
      </div>
      <details style="margin-bottom:1rem;">
        <summary style="font-size:.82rem;color:var(--muted);cursor:pointer;user-select:none;list-style:none;display:flex;align-items:center;gap:.4rem;">
          <span style="color:var(--copper);font-weight:600;">Subtyp wechseln</span>
          <span style="font-size:.65rem;">&middot; aktuell: <strong>${activeSubtype}</strong>${activeSubtype === profCode ? " (mein Profil)" : ""}</span>
        </summary>
        <div style="display:flex;flex-wrap:wrap;gap:.4rem;padding:.75rem 0 .25rem;">
          ${subtypeRow}
        </div>
      </details>
      ${resultHtml}
    </section>
  `);
}

function gifteDesGeistesPage() {
  return shell(`
    ${pageHeader("gifte-des-geistes")}
    <section class="narrow">
      <p class="eyebrow">Schaubilder \u00b7 Bewusstsein & Leidenschaft</p>
      <h1>Die 3 Gifte des Geistes und die 9 Leidenschaften</h1>
      <p class="lead-small">Die tibetisch-buddhistische Lehre kennt drei \u201eGifte des Geistes" (Gier, Hass, Unwissenheit), die zur Ruhe kommen m\u00fcssen, damit innerer Frieden entsteht. Das Enneagramm ordnet die 9 Leidenschaften diesen drei Grundbewegungen zu.</p>
      <div class="psycho-img-wrap" style="margin-top:1.5rem;">
        <img src="./assets/schaubilder/gifte-des-geistes/gifte-des-geistes.jpg"
             alt="Die 3 Gifte des Geistes und die 9 Enneagramm-Leidenschaften"
             class="psycho-img" />
      </div>
      <div style="margin-top:2rem; display:flex; flex-direction:column; gap:1rem;">
        <div style="border-left:3px solid #c0392b; padding:0.75rem 1rem; background:color-mix(in srgb, #c0392b 6%, transparent); border-radius:0 0.5rem 0.5rem 0;">
          <strong style="color:#c0392b;">Dreieck der Begierde / des Verlangens (Typ 2 \u00b7 5 \u00b7 8)</strong><br>
          Die Geisteshaltung der Enneagrammtypen 2, 5 und 8 ist gepr\u00e4gt durch eine extreme Gier / Anhaftung.<br><br>
          Gier (pali <em>lobha</em>, tib. <em>'dod chags</em>), auch als Sucht oder Begierde \u00fcbersetzt, ist das Haben- und Besitzenwollen, das Bestreben, auf jeden Fall und um jeden Preis zu existieren. Mit Gier verwandt sind die Leidenschaften heftiges Begehren (<em>raga</em>) und \u201eDurst" nach Werden (<em>tanha</em>).<br><br>
          Heilsam wirkt Gro\u00dfz\u00fcgigkeit und Mildt\u00e4tigkeit (<em>D\u0101na</em>) und das entsprechende hom\u00f6opathische Enneagramm-Heilmittel.
        </div>
        <div style="border-left:3px solid #27ae60; padding:0.75rem 1rem; background:color-mix(in srgb, #27ae60 6%, transparent); border-radius:0 0.5rem 0.5rem 0;">
          <strong style="color:#27ae60;">Dreieck des Hasses / der Aggression (Typ 1 \u00b7 4 \u00b7 7)</strong><br>
          Die Geisteshaltung der Enneagrammtypen 1, 4 und 7 ist gepr\u00e4gt durch eine extreme ablehnende Haltung.<br><br>
          Hass (pali <em>dosa</em>, skt. <em>dve\u1e63a</em>), auch als Zorn oder Aggression \u00fcbersetzt, ist die Selbstbehauptung eines illusion\u00e4ren Selbst dem Mitwesen gegen\u00fcber.<br><br>
          Heilsam wirkt G\u00fcte (<em>Metta</em>) und das entsprechende hom\u00f6opathische Enneagramm-Heilmittel.
        </div>
        <div style="border-left:3px solid #2980b9; padding:0.75rem 1rem; background:color-mix(in srgb, #2980b9 6%, transparent); border-radius:0 0.5rem 0.5rem 0;">
          <strong style="color:#2980b9;">Dreieck der Unwissenheit / Ignoranz (Typ 3 \u00b7 6 \u00b7 9)</strong><br>
          Die Geisteshaltung der Enneagrammtypen 3, 6 und 9 ist gepr\u00e4gt durch eine extreme gleichg\u00fcltige Haltung.<br><br>
          Verblendung (<em>moha</em>). Unwissenheit (skt. <em>avidy\u0101</em>) und Nicht-Wissen sind weitgehend deckungsgleiche Begriffe. Die Unwissenheit ist ein Zustand, der als Grundursache f\u00fcr alles erfahrene Leid angesehen wird.<br><br>
          Heilsam wirken Selbsterkenntnis und Liebe und das entsprechende hom\u00f6opathische Enneagramm-Heilmittel.
        </div>
      </div>
      ${bookTip("leidenschaft-und-heilung", "Die 9 Leidenschaften und ihre buddhistischen Wurzeln &ndash; mit Heilungsweg aus der hom\u00f6opathischen Praxis.", "Leidenschaft und Heilung")}
      ${relatedLinks([
        {route:"neun-logismoi", label:"9 Logismoi nach Evagrius"},
        {route:"leidenschaft-und-wunde", label:"Leidenschaft & Wunde"},
        {route:"spirituelle-uebungen", label:"Spirituelle \xdcbungen"},
      ])}
    </section>
  `);
}

function empfindlichePunktePage() {
  return shell(`
    ${pageHeader("empfindliche-punkte")}
    <section class="narrow">
      <p class="eyebrow">Schaubilder \u00b7 Empfindliche Punkte</p>
      <h1>Empfindliche Punkte der 9 Enneagrammtypen</h1>
      <p class="lead-small">Mit welchen Bemerkungen man das Ego \u2014 das falsche Selbst, die falsche Pers\u00f6nlichkeit \u2014 der 9 Enneagrammtypen maximal aktiviert und herausfordert. Wer diese Punkte kennt, kann bewusster und achtsamer mit anderen umgehen.</p>
      <div class="psycho-img-wrap" style="margin-top:1.5rem;">
        <img src="./assets/schaubilder/empfindliche-punkte/empfindliche-punkte.jpg"
             alt="Empfindliche Punkte der 9 Enneagrammtypen"
             class="psycho-img" />
      </div>
      ${relatedLinks([
        {route:"bedrohungsszenarien", label:"Bedrohungsszenarien"},
        {route:"gaslighting-enneagramm", label:"Gaslighting & Enneagramm"},
        {route:"basisemotionen", label:"Basisemotionen"},
      ])}
    </section>
  `);
}

function angstEssenzPage() {
  return shell(`
    ${pageHeader("angst-essenz")}
    <div style="max-width:680px;margin:0 auto;padding:0 1rem 3rem;">
      <p class="eyebrow">Schaubilder \xb7 Tiefenpsychologie</p>
      <h1 class="section-title">Angst \u2192 Essenz</h1>
      <p class="psycho-intro">Die neun Enneagrammtypen lassen sich nicht nur \xfcber ihre Leidenschaften verstehen, sondern tiefer: \xfcber ihre Grundangst. Was nach au\xdfen als Zorn, Stolz oder Tr\u00e4gheit erscheint, ist psychodynamisch betrachtet die emotionale F\xe4rbung einer existenziellen Schutzreaktion. Dieses Schaubild zeigt den Weg von der Angst \xfcber Stabilisierung und Fixierung bis zur Essenz eines jeden Typs.</p>
      <img
        src="./assets/angst-essenz.png"
        alt="Angst zur Essenz &ndash; alle 9 Enneagrammtypen"
        style="width:100%;border-radius:12px;margin:0 auto 2.5rem;display:block;"
      />

      <div class="vb-section" style="max-width:100%;">

        <p class="vb-intro">In vielen Darstellungen hei\xdft es: Die Leidenschaft befeuert die intrinsische Motivation. Psychodynamisch betrachtet l\xe4sst sich das jedoch auch umgekehrt lesen: Nicht die Leidenschaft erzeugt das Verhalten. Die Leidenschaft ist der energetische Ausdruck einer tiefer liegenden Grundangst.</p>
        <p class="vb-intro" style="font-style:italic;color:var(--muted);">Das Ego organisiert sich um eine existenzielle Bedrohung. Aus dieser Bedrohung entsteht eine Stabilisierungstendenz &ndash; aus der Stabilisierung eine Fixierung &ndash; und die Leidenschaft ist die emotionale F\xe4rbung dieser Fixierung.</p>

        ${[
          { nr:1, titel:"Angst vor Fehlerhaftigkeit",
            angst:"Ich bin falsch.", org:"Starke innere Norm, Selbstkontrolle, moralische Orientierung.",
            leidenschaft:"Zorn &ndash; nicht prim\xe4r Aggression, sondern Spannung gegen innere Unvollkommenheit.",
            motivation:"Verbesserung, Richtigkeit, Integrit\xe4t.",
            reife:"Wird diese Angst bewusster gehalten, wandelt sich Strenge in reife Gewissenhaftigkeit.",
            essenz:"Weisheit" },
          { nr:2, titel:"Angst vor Nicht-Liebensw\u00fcrdigkeit",
            angst:"Ich bin nur wertvoll, wenn ich gebraucht werde.", org:"Beziehung als Selbstwertquelle.",
            leidenschaft:"Stolz &ndash; \xdcberbetonung der eigenen Gebef\xe4higkeit.",
            motivation:"Helfen, Verbinden, Unterst\xfctzen.",
            reife:"Wenn die zugrunde liegende Angst erkannt wird, entsteht echte Selbstf\xfcrsorge statt kompensatorischer F\xfcrsorge.",
            essenz:"Liebe" },
          { nr:3, titel:"Angst vor Wertlosigkeit",
            angst:"Ohne Leistung bin ich nichts.", org:"Identifikation mit Erfolg, Effizienz, Anpassungsf\xe4higkeit.",
            leidenschaft:"Eitelkeit &ndash; Selbstdefinition \xfcber \xe4u\xdfere Wirksamkeit.",
            motivation:"Erfolg, Sichtbarkeit, Produktivit\xe4t.",
            reife:"Wird die Angst vor Bedeutungslosigkeit bewusst, entsteht Authentizit\xe4t &ndash; Leistung ohne Selbstverlust.",
            essenz:"Wahrhaftigkeit" },
          { nr:4, titel:"Angst vor Identit\u00e4tsverlust",
            angst:"Ich habe keine eigene Substanz.", org:"Intensivierung von Gef\xfchlen, Suche nach Einzigartigkeit.",
            leidenschaft:"Neid &ndash; Vergleich mit dem vermeintlich vollst\xe4ndigeren Anderen.",
            motivation:"Tiefe, Ausdruck, Besonderheit.",
            reife:"Wenn die Angst integriert wird, entsteht stille Identit\xe4t ohne dramatische Selbst\xfcberh\xf6hung.",
            essenz:"Urspr\xfcnglichkeit" },
          { nr:5, titel:"Angst vor \u00dcberw\u00e4ltigung",
            angst:"Die Welt fordert mehr, als ich geben kann.", org:"R\xfcckzug, Distanz, Wissensakkumulation.",
            leidenschaft:"Geiz &ndash; Zur\xfcckhalten von Energie.",
            motivation:"Verstehen, Autonomie, geistige Klarheit.",
            reife:"Wird die Angst vor Inanspruchnahme gehalten, entsteht echtes Vertrauen in Teilhabe.",
            essenz:"Verstehen" },
          { nr:6, titel:"Angst vor Haltlosigkeit",
            angst:"Ich bin ohne Schutz.", org:"Pr\xfcfung, Loyalit\xe4t, Zweifel oder Gegenwehr.",
            leidenschaft:"Angst &ndash; dauernde innere Alarmbereitschaft.",
            motivation:"Sicherheit, Struktur, Verl\xe4sslichkeit.",
            reife:"Wenn die Angst nicht mehr verdr\xe4ngt wird, entsteht Mut &ndash; nicht als Abwesenheit von Angst, sondern als bewusster Umgang mit ihr.",
            essenz:"Vertrauen" },
          { nr:7, titel:"Angst vor innerem Schmerz",
            angst:"Wenn ich stehenbleibe, begegne ich Leid.", org:"Expansion, Planung, Optionenvielfalt.",
            leidenschaft:"V\xf6llerei &ndash; psychische \xdcberf\xfclle.",
            motivation:"Freiheit, Erlebnis, M\xf6glichkeiten.",
            reife:"Wird der Schmerz zugelassen, entsteht tiefe Freude statt hektischer Ablenkung.",
            essenz:"Freude" },
          { nr:8, titel:"Angst vor Verletzbarkeit",
            angst:"Wenn ich schwach bin, werde ich beherrscht.", org:"St\xe4rke, Direktheit, Kontrolle.",
            leidenschaft:"Lust / Intensit\xe4t &ndash; Kraft als Gegenpol zur Ohnmacht.",
            motivation:"Selbstbestimmung, Durchsetzung.",
            reife:"Wird Verletzlichkeit integriert, entsteht Gro\xdfherzigkeit &ndash; Kraft ohne Abwehr.",
            essenz:"Unschuldige Kraft" },
          { nr:9, titel:"Angst vor Trennung",
            angst:"Wenn ich mich zeige, verliere ich Verbindung.", org:"Anpassung, Konfliktvermeidung, Selbstvergessenheit.",
            leidenschaft:"Tr\xe4gheit &ndash; innere Abspaltung eigener Impulse.",
            motivation:"Harmonie, Frieden, Stabilit\xe4t.",
            reife:"Wenn die Angst vor Abgrenzung bewusst wird, entsteht echte Pr\xe4senz.",
            essenz:"Frieden" },
        ].map(t => `
          <div class="vb-typ">
            <h3 class="vb-typ__head"><span class="vb-typ__nr">Typ\xa0${t.nr}</span> &ndash; ${t.titel}</h3>
            <div style="display:grid;gap:.25rem .6rem;font-size:.85rem;margin:.5rem 0 .6rem;color:var(--ink);">
              <div><span style="color:var(--muted);font-style:italic;">Grundangst:</span> \u201e${t.angst}\u201c</div>
              <div><span style="color:var(--muted);font-style:italic;">Ich-Organisation:</span> ${t.org}</div>
              <div><span style="color:var(--muted);font-style:italic;">Leidenschaft:</span> ${t.leidenschaft}</div>
              <div><span style="color:var(--muted);font-style:italic;">Intrinsische Motivation:</span> ${t.motivation}</div>
            </div>
            <p class="vb-typ__text">${t.reife}</p>
            <p style="font-size:.85rem;font-weight:700;color:var(--copper);margin:.3rem 0 0;">Essenz: ${t.essenz}</p>
          </div>
        `).join("")}

        <div style="border-top:1px solid var(--line);padding-top:1.6rem;margin-top:2rem;">
          <h2 style="font-size:1.05rem;font-weight:700;margin-bottom:1rem;color:var(--ink);">Angeborene Disposition und Entwicklung</h2>
          <p class="vb-intro">Diese Strukturen sind nicht ausschlie\xdflich Ergebnis fr\xfcher Lebenserfahrungen. Temperamentsforschung und Zwillingsstudien zeigen, dass Menschen mit unterschiedlichen Reaktionsdispositionen geboren werden. Wir bringen eine bestimmte Sensibilit\xe4t f\xfcr eine spezifische Form von Bedrohung mit auf diese Welt. Diese Disposition trifft auf fr\xfche Beziehungserfahrungen &ndash; aus dieser Wechselwirkung entsteht die Ich-Struktur.</p>
          <p class="vb-intro" style="font-style:italic;color:var(--muted);">Angst \u2192 Stabilisierung \u2192 Fixierung \u2192 Leidenschaft \u2192 Identit\xe4t.</p>
          <p class="vb-intro">Was wir als \u201eIntrinsische Motivation\u201c erleben, ist oft die rationalisierte Form dieser Stabilisierung. Die Leidenschaft ist nicht die prim\xe4re Ursache, sondern der affektive Ausdruck der Abwehrorganisation.</p>
        </div>

        <div style="border-top:1px solid var(--line);padding-top:1.6rem;margin-top:1.5rem;">
          <h2 style="font-size:1.05rem;font-weight:700;margin-bottom:1rem;color:var(--ink);">Reifung und Freiheit</h2>
          <p class="vb-intro">Reifung bedeutet nicht, die Struktur abzuschaffen. Reifung bedeutet, die zugrunde liegende Angst bewusst halten zu k\xf6nnen. Wenn Angst nicht mehr unbewusst regiert, ver\xe4ndert sich die Qualit\xe4t der Energie:</p>
          <div style="display:grid;gap:.4rem;font-size:.85rem;margin:1rem 0 1.2rem;padding:.8rem 1rem;background:var(--paper);border-radius:8px;border:1px solid var(--line);">
            ${[
              ["\xe4u\xdfere Moral","innere Weisheit"],
              ["\xe4u\xdferes Helfen","tiefe Liebe"],
              ["\xe4u\xdfere Leistung","innere Wahrhaftigkeit"],
              ["\xe4u\xdfere Intensit\xe4t","wahre innere Identit\xe4t"],
              ["\xe4u\xdferer R\xfcckzug","inneres Verstehen"],
              ["\xe4u\xdfere Vorsicht","tiefes Vertrauen"],
              ["oberfl\xe4chliche Begeisterung","tiefe Freude"],
              ["\xe4u\xdfere St\xe4rke","innere Gro\xdfherzigkeit"],
              ["\xe4u\xdfere Harmonie","innerer Frieden"],
            ].map(([von,zu]) => `<div><span style="color:var(--muted);">${von}</span> <span style="color:var(--copper);font-weight:700;">\u2192</span> <span style="font-weight:600;">${zu}</span></div>`).join("")}
          </div>
          <p class="vb-intro">Nicht der Typ verschwindet. Aber die Angst verliert ihre Vorherrschaft.</p>
        </div>

        <div style="border-left:3px solid var(--gold);padding:.9rem 1.1rem;margin:2rem 0;background:var(--paper);border-radius:0 8px 8px 0;">
          <p style="margin:0 0 .5rem;font-size:.92rem;color:var(--ink);line-height:1.7;"><em>Das Enneagramm zeigt uns nicht, wer wir sind. Es zeigt uns, wovor wir Angst haben oder bislang hatten.</em></p>
          <p style="margin:0;font-size:.92rem;color:var(--ink);line-height:1.7;"><em>Und dort, wo Angst bewusst gehalten werden kann, entsteht eine Freiheit, die nichts mehr kompensieren muss. Nicht Dramatisches. Nichts Spektakul\xe4res. Nur Gegenw\xe4rtigkeit &ndash; und aus ihr heraus Handlung als Ausdruck, nicht als Abwehr.</em></p>
        </div>

        ${relatedLinks([
          {route:"wunden", label:"Wunden & Schutzstrategien"},
          {route:"kerneberzeugungen", label:"Kern\xfcberzeugungen"},
          {route:"frieden-schliessen", label:"Frieden schlie\xdfen"},
        ])}
      </div>
    </div>
  `);
}

function aufmerksamkeitsfokusPage() {
  return shell(`
    ${pageHeader("aufmerksamkeitsfokus")}
    <section class="narrow">
      <p class="eyebrow">Schaubilder \u00b7 Aufmerksamkeitsfokus</p>
      <h1>Aufmerksamkeitsfokus & Blindheit der 9 Enneagrammtypen</h1>
      <p class="lead-small">Jeder Enneagrammtyp richtet seinen Aufmerksamkeitsfokus unbewusst auf bestimmte Aspekte des Lebens \u2014 und blendet andere dabei aus. Diese \u00dcbersicht zeigt, worauf jeder Typ besonders achtet und was ihm dadurch im blinden Fleck bleibt.</p>
      <div class="psycho-img-wrap" style="margin-top:1.5rem;">
        <img src="./assets/schaubilder/aufmerksamkeitsfokus/aufmerksamkeitsfokus.jpg"
             alt="Aufmerksamkeitsfokus und Blindheit der 9 Enneagrammtypen"
             class="psycho-img" />
      </div>

      <div class="vb-section" style="max-width:100%;margin-top:1.5rem;">
        <p class="vb-intro">Die 9 unterschiedlichen Enneagrammtypen richten schon aufgrund ihres meist unbewussten, spezifischen Wahrnehmungsmusters ihren Aufmerksamkeitsfokus auf bestimmte Aspekte (Eigenschaften, Situationen, Beziehungen) des Lebens. Diese Aspekte sind f\u00fcr den jeweiligen Typ so wichtig, dass er andere notwendigerweise vernachl\u00e4ssigen muss \u2014 was zu einer mehr oder weniger eingeschr\u00e4nkten Wahrnehmung, einer Blindheit, f\u00fchren kann.</p>
        <div style="display:grid;gap:.5rem;font-size:.9rem;line-height:1.7;">
          <div><span style="font-weight:700;color:#5f5f5f;">Typ 1 (Der Prinzipien-Orientierte):</span> Fokus auf Richtig &amp; Falsch &ndash; blind f\u00fcr emotionale Zwischent\u00f6ne.</div>
          <div><span style="font-weight:700;color:#7a2fa8;">Typ 2 (Der Liebesorientierte):</span> Fokus auf Anerkennung &ndash; blind f\u00fcr die W\u00fcrde anderer.</div>
          <div><span style="font-weight:700;color:#1fa688;">Typ 3 (Der Erfolgsorientierte):</span> Fokus auf Leistungen &ndash; blind f\u00fcr die Eigenschaften anderer.</div>
          <div><span style="font-weight:700;color:#3cbf1f;">Typ 4 (Der Selbstorientierte):</span> Fokus auf das Gute im Fehlenden &ndash; blind f\u00fcr das Gute im Vorhandenen.</div>
          <div><span style="font-weight:700;color:#124fcc;">Typ 5 (Der Erkenntnisorientierte):</span> Fokus auf Anforderungen anderer &ndash; blind f\u00fcr Bed\u00fcrfnisse anderer.</div>
          <div><span style="font-weight:700;color:#8a5222;">Typ 6 (Der Sicherheitsorientierte):</span> Fokus auf die Absichten anderer &ndash; blind f\u00fcr die Motive anderer (das Motiv ist der tiefere Beweggrund hinter einer Absicht).</div>
          <div><span style="font-weight:700;color:#d4a800;">Typ 7 (Der Lustorientierte):</span> Fokus auf eine ideale Welt &ndash; blind f\u00fcr Notwendigkeiten.</div>
          <div><span style="font-weight:700;color:#a00802;">Typ 8 (Der Machtorientierte):</span> Fokus auf Kontrolle &ndash; blind f\u00fcr die Freiheit anderer.</div>
          <div><span style="font-weight:700;color:#cc6e00;">Typ 9 (Der Harmonieorientierte):</span> Fokus auf Komplexit\u00e4t &ndash; blind f\u00fcr das Wesentliche.</div>
        </div>
      </div>
      ${bookTip("der-code-deiner-persoenlichkeit", "Wo liegt dein Aufmerksamkeitsfokus &ndash; und was siehst du dabei nicht? Der Code deiner Pers\u00f6nlichkeit.", "Der Code deiner Pers\u00f6nlichkeit")}
      ${relatedLinks([
        {route:"wahrnehmungsstile", label:"Wahrnehmungsstile"},
        {route:"mikroimpressionen", label:"Mikroimpressionen"},
        {route:"verbale-signale", label:"Verbale Signale"},
      ])}
    </section>
  `);
}

function sechzigSekundenScanPage() {
  return shell(`
    ${pageHeader("60-sekunden-scan")}
    <section class="narrow">
      <p class="eyebrow">Schaubilder \u00b7 Typisierung</p>
      <h1>60-Sekunden-Fixierungs-Scan</h1>
      <p class="lead-small">In drei Schritten zum Enneagrammtyp: Welche Persona zeigt die Person? Wie reagiert sie unter Druck? Wovor sch\u00fctzt sie sich? Diese Kurz\u00fcbersicht hilft, einen Typ schnell einzuordnen.</p>
      <div class="psycho-img-wrap" style="margin-top:1.5rem;">
        <img src="./assets/schaubilder/scan/60-sekunden-scan.jpg"
             alt="60-Sekunden-Fixierungs-Scan"
             class="psycho-img" />
      </div>
      ${relatedLinks([
        {route:"enneagramm-profiling", label:"Enneagramm-Profiling"},
        {route:"aufmerksamkeitsfokus", label:"Aufmerksamkeitsfokus"},
        {route:"differenzierung", label:"Differenzierung"},
      ])}
    </section>
  `);
}

function mikroimpresionenPage() {
  const typen = [
    { nr:1, name:"Der Perfektionist",
      se:"Der Blick ist wach, pr\xfcfend, nie ganz entspannt &ndash; als w\xfcrde er permanent abgleichen, ob alles stimmt. Die Kieferpartie ist oft leicht angespannt, das L\xe4cheln kom\xefmt gehalten und sorgf\xe4ltig. Der K\xf6rper ist aufrecht, fast zu aufrecht. Man sp\xfcrt eine innere Anspannung, die sich als Korrektheit nach au\xdfen zeigt.",
      so:"Ein engagierter, lehrend-\xfcberzeugender Blick. Der K\xf6rper zeigt Haltung im Wortsinne &ndash; aufrecht, demonstrativ klar. Diese Person m\xf6chte ein Vorbild sein, und die Mimik transportiert das unmittelbar: Ernsthaftigkeit, Prinzipientreue, ein leises Sendungsbewusstsein.",
      sx:"Intensit\xe4t und Kontrolle in einem. Der Blick ist fordernd, fast herausfordernd. Die K\xf6rperspannung ist hoch, die Mimik zwischen strenger Beherrschung und aufgeladener Leidenschaft. Kompromissbereitschaft ist nicht ablesbar &ndash; daf\xfcr umso mehr innerer Brennwert." },
    { nr:2, name:"Der Helfer",
      se:"Ein sanftes, bem\xfchtes L\xe4cheln, das gleichzeitig fragt: Ist es gut? Gef\xe4llt es? Die Augen suchen Resonanz. Der Oberk\xf6rper neigt sich leicht vor &ndash; eine fast unmerkliche Geste des Zugewandt-Seins. Man sp\xfcrt F\xfcrsorge, aber auch eine zarte Bed\xfcrftigkeit darunter.",
      so:"Diese Variante strahlt. Die Augen sind gro\xdf, der Gesichtsausdruck lebendig und einladend. Der ganze K\xf6rper spricht: &bdquo;Ich bin f\xfcr euch da.&ldquo; Mitgef\xfchl wird sichtbar und sp\xfcrbar &ndash; eine Pr\xe4senz, die einen Raum emotional organisiert, ohne es laut zu tun.",
      sx:"Der Blick ist tiefer, durchdringender, weniger allgemein. Er sucht eine Person, nicht eine Gruppe. Die K\xf6rpersprache ist emotional aufgeladen, k\xf6rperlich pr\xe4sent. N\xe4he wird nicht angeboten &ndash; sie wird gesucht, manchmal dr\xe4ngend." },
    { nr:3, name:"Der Macher",
      se:"Kaum eine Regung, die nicht kalkuliert w\xe4re. Die Mimik ist glatt und kontrolliert, das L\xe4cheln sitzt perfekt. K\xf6rperspannung ist zielgerichtet, nicht defensiv. Was nach au\xdfen als Effizienz wirkt, hat innen oft einen Preis: N\xe4he wird nicht gezeigt, weil sie den Auftritt st\xf6ren k\xf6nnte.",
      so:"Hier leuchtet jemand. Die Mimik ist strahlend, der Ausdruck magnetisch &ndash; eine lebende Image-Pr\xe4sentation. Der K\xf6rper ist auf Wirkung ausgelegt und wei\xdf das. Man m\xf6chte hinschauen, man m\xf6chte zuh\xf6ren. Das ist gewollt.",
      sx:"Ein Blick, der haften bleibt. K\xf6rperlich pr\xe4sent, charmant, mit einer Note Dominanz. Diese Person wei\xdf, was Attraktivit\xe4t ist &ndash; und sie setzt sie ein. Das Verf\xfchrerische ist nicht unbedingt romantisch gemeint, aber es ist da." },
    { nr:4, name:"Der Individualist",
      se:"Eine Stille, die nicht leer ist &ndash; eher gef\xfcllt mit Innenleben. Der Blick schweift manchmal ins Ungef\xe4hre, die Mimik ist zur\xfckhaltend, fast melancholisch gef\xe4rbt. K\xf6rpersprache weich, manchmal wie zusammengefallen. Man sp\xfcrt jemanden, der viel f\xfchlt und wenig zeigt.",
      so:"Ganz anders: expressiv, dramatisch, suchend. Die Augen sprechen laut. Die Gestik unterstreicht das Gef\xfchlte. Diese Variante tr\xe4gt ihre Tiefe nach au\xdfen &ndash; nicht als Schau, sondern als ehrlichen Ausdruck einer inneren Welt, die immer zu f\xfcllen droht.",
      sx:"Sehnsuchtsvoller Blick, sinnliche Pr\xe4senz. Der K\xf6rper sucht N\xe4he, zieht sich dann zur\xfcck, zieht wieder an. Das Spiel zwischen Anziehung und R\xfcckzug ist nicht strategisch &ndash; es ist das eigentliche Wesen dieser Variante." },
    { nr:5, name:"Der Beobachter",
      se:"Wenig Mimik, viel Wahrnehmung. Der Blick ist abgewandt oder nach innen gerichtet, der K\xf6rper zieht sich leicht zur\xfcck. Energie wird gespart &ndash; sparsam verwendet, behutsam dosiert. Wer genau schaut, erkennt darunter einen scharfen, registrierenden Verstand.",
      so:"Wacher Blick mit einer leichten Stirnrunzel &ndash; als w\xfcrd er die Situation still katalogisieren. K\xf6rpersprache zur\xfckhaltend, aber nicht abweisend. Er ist da, er nimmt auf, er wertet &ndash; er zeigt es nur nicht. Ein stiller Analytiker.",
      sx:"Hier bricht etwas durch. Der Blick ist bohrend, fast geladen &ndash; eine konzentrierte Intensit\xe4t, die sich nicht erkl\xe4rt. K\xf6rperspannung hoch. Die \xdcbergabe in ein Gespr\xe4ch oder eine Idee kann fast k\xf6rperlich wirken. Geistige Verschmelzung als h\xf6chste Intimsph\xe4re." },
    { nr:6, name:"Der Loyale",
      se:"Der Blick trifft einen, pr\xfcft einen, misstraut vielleicht. Die Stirn ist oft leicht gerunzelt, die Haltung defensiv &ndash; Arme verschr\xe4nkt oder Schultern etwas angehoben. Diese Person ist aufmerksam, wachsam, still. Nicht feindselig, aber sicher nicht unvorsichtig.",
      so:"Die Augen scannen den Raum, suchen den Gruppenkontext. Die Mimik reagiert auf Stimmungen, fast wie ein Seismograf. K\xf6rpersprache will Zugeh\xf6rigkeit signalisieren &ndash; ich bin dabei, ich bin Teil davon. Verbindlichkeit als Sicherheitsgef\xfchl.",
      sx:"Konfrontierend, testend, direkt. Der Blick l\xf6st sich nicht leicht. Die K\xf6rpersprache ist fordernd, wechselt zwischen Angriff und R\xfcckzug. Diese Variante will herausfinden, ob man halten kann, was man verspricht &ndash; und sie testet das offen." },
    { nr:7, name:"Der Enthusiast",
      se:"Frohe Mimik mit einem Hauch Kontrolle &ndash; nicht unkontrolliert, aber beweglich. K\xf6rpersprache schnell, zielgerichtet, voll Energie. Es gibt immer einen n\xe4chsten Punkt, den n\xe4chsten Gedanken. Die Freude ist echt, aber sie ist auch effizient.",
      so:"Expressiv, lebhaft, ansteckend. Gro\xdfe Gesten, ein Blick, der einl\xe4dt. Diese Person macht einen Raum wach. Begeisterung ist ihr nat\xfcrliches Territorium &ndash; und sie teilt sie gro\xdfz\xfcgig. Charme als Naturzustand.",
      sx:"Ein spielerischer, aber intensiver Blick. K\xf6rpersprache dynamisch, manchmal verf\xfchrerisch. Man sp\xfcrt jemanden, der auf Abenteuer aus ist &ndash; intellektuell, emotional oder k\xf6rperlich. Die Energie sucht ihren Austausch." },
    { nr:8, name:"Der Herausforderer",
      se:"Ein fixierter Blick, der kaum ausweicht. Die Mimik ist kontrolliert, die K\xf6rperspannung defensiv-aggressiv zugleich. Unersch\u00fctterlichkeit nach au\xdfen, dahinter oft mehr Verletzlichkeit als sichtbar. Schwachstellen zeigen ist keine Option.",
      so:"Starke Pr\xe4senz &ndash; man sp\xfcrt diese Person, bevor sie spricht. Der Blick ist wachsam, der K\xf6rper besetzt den Raum, die Haltung ist klar und besch\u00fctzend. Nicht Dominanz um der Dominanz willen, sondern Verantwortung als gelebte Selbstverst\xe4ndlichkeit.",
      sx:"Magnetisch, rau, leidenschaftlich. Der Blick trifft einen direkt. K\xf6rpersprache ist auf Konfrontation oder Vereinnahmung ausgelegt &ndash; manchmal beides. Man sp\xfcrt: Diese Person ist vollst\xe4ndig pr\xe4sent. Das kann befreiend sein oder \xfcberw\u00e4ltigend." },
    { nr:9, name:"Der Friedensstifter",
      se:"Sanft, entspannt, fast schlummernd warm. Die Mimik ist ruhig, die K\xf6rpersprache weich und wenig angespannt. Man f\xfchlt sich wohl in dieser N\xe4he &ndash; aber manchmal fragt man sich: Was denkt dieser Mensch wirklich? Die innere Agenda bleibt unsichtbar.",
      so:"Ein offener, verbindender Blick &ndash; ausgleichend, vermittelnd. Der K\xf6rper h\xe4lt die Mitte, sucht Gleichgewicht. Diese Person m\xf6chte, dass alle bleiben. Manchmal so sehr, dass sie selbst fast verschwindet.",
      sx:"Weich, aber mit einer unterschwelligen Anziehung. Der Blick sucht Verbindung, zieht an ohne zu fordern. K\xf6rpersprache ist einladend, charmant-passiv. Wer genauer schaut, entdeckt darunter eine ruhige, aber echte Intensit\xe4t." },
  ];

  const farben = { 1:"#8b5e3c", 2:"#9e4a6a", 3:"#7a6a30", 4:"#5a7058", 5:"#3a6b8a", 6:"#6a5a8a", 7:"#8a6a2a", 8:"#7a3a3a", 9:"#4a7a6a" };

  const cards = typen.map(t => {
    const col = farben[t.nr] || "var(--copper)";
    return `
      <div style="margin-bottom:3rem;">
        <div style="display:flex;align-items:center;gap:.7rem;margin-bottom:1rem;">
          <span style="display:inline-flex;align-items:center;justify-content:center;width:2rem;height:2rem;border-radius:50%;background:${col};color:#fff;font-weight:800;font-size:.9rem;flex-shrink:0;">${t.nr}</span>
          <h2 style="font-size:1.1rem;font-weight:700;color:var(--ink);margin:0;">Typ\xa0${t.nr} &ndash; ${t.name}</h2>
        </div>
        <img src="${R2_CDN}assets/mikroimpressionen-${t.nr}.jpg"
          alt="Mikroimpressionen Typ ${t.nr}"
          style="width:100%;border-radius:10px;margin-bottom:1.1rem;display:block;" />
        <div style="display:grid;gap:.7rem;">
          ${[["SE","Selbsterhaltung",t.se],["SO","Sozial",t.so],["SX","Sexuell/Partnerschaft",t.sx]].map(([code,label,text]) => `
            <div style="border-left:3px solid ${col};padding:.6rem .9rem;background:var(--paper);border-radius:0 6px 6px 0;">
              <div style="font-size:.75rem;font-weight:800;color:${col};letter-spacing:.06em;margin-bottom:.3rem;">${code} \xb7 ${label}</div>
              <p style="margin:0;font-size:.85rem;line-height:1.7;color:var(--ink);">${text}</p>
            </div>
          `).join("")}
        </div>
      </div>
    `;
  }).join("");

  return shell(`
    ${pageHeader("mikroimpressionen")}
    <div style="max-width:680px;margin:0 auto;padding:0 1rem 3rem;">
      <p class="eyebrow">Schaubilder \xb7 Profiling</p>
      <h1 class="section-title">Mikroimpressionen der 27 Enneagramm-Subtypen</h1>
      <p class="psycho-intro">Lange bevor jemand spricht, ist er schon lesbar. Mimik, Blick und K\xf6rperspannung verr\xe4t die Struktur darunter &ndash; wenn man wei\xdf, worauf man achten muss. Diese \xdcbersicht zeigt f\xfcr alle 27 Enneagramm-Subtypen, wie sich ihr inneres Muster nach au\xdfen ausdr\xfcckt: nicht \xfcber Selbstaussagen, sondern \xfcber unmittelbar wahrnehmbare Signale. Jedes Schaubild zeigt einen Typ, jede Beschreibung benennt das Eigent\xfcmliche der drei Instinktvarianten.</p>
      <div style="border-left:3px solid var(--gold);padding:.7rem 1rem;margin-bottom:2rem;background:var(--paper);border-radius:0 6px 6px 0;font-size:.85rem;color:var(--muted);font-style:italic;">Diese Beschreibungen sind ph\xe4nomenologische Skizzen, keine Diagnosen. Sie sch\xe4rfen die Beobachtung &ndash; sie ersetzen nicht das pers\xf6nliche Typisierungsgespr\xe4ch.</div>
      ${cards}
      ${relatedLinks([
        {route:"nonverbale-signale", label:"Nonverbale Signale"},
        {route:"aufmerksamkeitsfokus", label:"Aufmerksamkeitsfokus"},
        {route:"enneagramm-profiling", label:"Enneagramm-Profiling"},
      ])}
    </div>
  `);
}

function mangelgefuehlePage() {
  return shell(`
    ${pageHeader("mangelgefuehle")}
    <section class="narrow">
      <p class="eyebrow">Schaubilder \u00b7 Tiefenpsychologie</p>
      <h1>Mangelgef\u00fchle der 9 Enneagrammtypen</h1>
      <p class="lead-small">Jeder Enneagrammtyp tr\u00e4gt ein unbewusstes inneres Mangelgef\u00fchl in sich &ndash; ein tiefes Gef\u00fchl, dass etwas Wesentliches fehlt. Aus diesem Mangel heraus entsteht das charakteristische Streben nach au\u00dfen, das den Typ antreibt.</p>
      <div class="psycho-img-wrap" style="margin-top:1.5rem;">
        <img src="./assets/schaubilder/mangelgefuehle/mangelgefuehle.jpg"
             alt="Enneagrammtypen und ihre unbewussten inneren Mangelgef\u00fchle"
             class="psycho-img" />
      </div>
      ${relatedLinks([
        {route:"frustrationen", label:"Frustrationen"},
        {route:"intrinsisches-verlangen", label:"Intrinsisches Verlangen"},
        {route:"angst-essenz", label:"Angst-Essenz"},
      ])}
    </section>
  `);
}

function perspektivenPage() {
  return shell(`
    ${pageHeader("perspektiven")}
    <section class="narrow">
      <p class="eyebrow">Schaubilder \u00b7 Blinde Flecken</p>
      <h1>Wie Mitmenschen die Enneagrammtypen erleben</h1>
      <p class="lead-small">Was sehen andere in uns, was wir selbst kaum wahrnehmen? Diese \u00dcbersicht zeigt, welche Aussagen Mitmenschen \u00fcber jeden Enneagrammtyp immer wieder machen &ndash; ein Spiegel f\u00fcr den eigenen blinden Fleck.</p>
      <div class="psycho-img-wrap" style="margin-top:1.5rem;">
        <img src="./assets/schaubilder/perspektiven/perspektiven-mitmenschen.jpg"
             alt="Enneagrammtypen und die Perspektiven ihrer Mitmenschen"
             class="psycho-img" />
      </div>

      <div class="vb-section" style="max-width:100%;margin-top:1.5rem;">
        <div style="display:grid;gap:.5rem;font-size:.9rem;line-height:1.7;">
          <div><span style="font-weight:700;color:#5f5f5f;">Typ 1 (Der konsequente Perfektionist):</span> \u201eWir f\u00fchlen uns h\u00e4ufig von dir korrigiert, kritisiert oder gema\u00dfregelt!\u201c</div>
          <div><span style="font-weight:700;color:#7a2fa8;">Typ 2 (Der f\u00fcrsorgliche Liebeshungrige):</span> \u201eWir f\u00fchlen uns von dir h\u00e4ufig in irgendeiner Form manipuliert!\u201c</div>
          <div><span style="font-weight:700;color:#1fa688;">Typ 3 (Der erfolgreiche Macher):</span> \u201eWir erleben dich h\u00e4ufig t\u00e4uschend und emotional unerreichbar, mitunter gar abweisend!\u201c</div>
          <div><span style="font-weight:700;color:#3cbf1f;">Typ 4 (Der intensive K\u00fcnstler):</span> \u201eWir erleben dich h\u00e4ufig ein wenig \u00fcbertrieben emotional und mit dir in Beziehungsdramen verstrickt!\u201c</div>
          <div><span style="font-weight:700;color:#124fcc;">Typ 5 (Der kompetente Denker):</span> \u201eWir f\u00fchlen uns von dir h\u00e4ufig beobachtet, ein wenig von oben herab gesehen und emotional vernachl\u00e4ssigt!\u201c</div>
          <div><span style="font-weight:700;color:#8a5222;">Typ 6 (Der loyale Held):</span> \u201eWir f\u00fchlen uns h\u00e4ufig von dir auf Verl\u00e4sslichkeit getestet und sp\u00fcren oft auch deinen Zweifel und dein Misstrauen!\u201c</div>
          <div><span style="font-weight:700;color:#d4a800;">Typ 7 (Das begeisternde Gl\u00fcckskind):</span> \u201eWir empfinden dich h\u00e4ufig ein wenig oberfl\u00e4chlich und oft wenig verl\u00e4sslich!\u201c</div>
          <div><span style="font-weight:700;color:#a00802;">Typ 8 (Der aktive Schutzpatron):</span> \u201eWir f\u00fchlen uns h\u00e4ufig von dir dominiert und beherrscht!\u201c</div>
          <div><span style="font-weight:700;color:#cc6e00;">Typ 9 (Der angepasste Diplomat):</span> \u201eWir \u00e4rgern uns h\u00e4ufig, dass du nur \u00e4u\u00dferst selten eine klare Position beziehst!\u201c</div>
        </div>
      </div>
      ${relatedLinks([
        {route:"schaubilder-als-spiegel", label:"Schaubilder als Spiegel"},
        {route:"interessante-erkenntnisse", label:"Interessante Erkenntnisse"},
        {route:"befreiende-fragen", label:"Befreiende Fragen"},
      ])}
    </section>
  `);
}

const INSTINKT_LABEL = { se: "Selbsterhaltung", so: "Sozial", sx: "Sexual" };
const INSTINKT_KURZ  = { se: "SE", so: "SO", sx: "SX" };

function subtypChecklistePage() {
  const parts = state.route.split("/");
  const typNr = parts[1] ? parseInt(parts[1]) : null;
  const inst  = parts[2] || null; // "se" | "so" | "sx"

  // Ebene 3: einzelne Checkliste gro\u00df
  if (typNr && inst && INSTINKT_LABEL[inst]) {
    const code = `${inst}${typNr}`;
    return shell(`
      ${pageHeader("subtypen-checklisten")}
      <div class="psycho-detail">
        <button class="ghost-link psycho-back" data-route="subtypen-checklisten/${typNr}">\u2190 Typ ${typNr} Subtypen</button>
        <h1 class="psycho-detail__title">Typ ${typNr} \u00b7 ${INSTINKT_LABEL[inst]} (${INSTINKT_KURZ[inst]}${typNr})</h1>
        <div class="psycho-img-wrap">
          <img src="${R2_CDN}assets/schaubilder/subtypen-checklisten/${code}.jpg"
               alt="Checkliste ${INSTINKT_KURZ[inst]}${typNr}"
               class="psycho-img" />
        </div>
      </div>
    `);
  }

  // Ebene 2: 3 Subtypen eines Typs
  if (typNr && typNr >= 1 && typNr <= 9) {
    return shell(`
      ${pageHeader("subtypen-checklisten")}
      <div class="psycho-wrap">
        <button class="ghost-link psycho-back" data-route="subtypen-checklisten">\u2190 Alle Typen</button>
        <p class="eyebrow">Subtypen-Checklisten \u00b7 Typ ${typNr}</p>
        <h1 class="section-title">Typ ${typNr} &ndash; Welcher Subtyp bin ich?</h1>
        <p class="psycho-intro">W\u00e4hle einen Instinktschwerpunkt und pr\u00fcfe anhand der Checkliste, wie gut die Aussagen auf dich zutreffen.</p>
        <div class="psycho-grid psycho-grid--3">
          ${["se","so","sx"].map(ins => `
            <button class="psycho-card psycho-card--inst" data-route="subtypen-checklisten/${typNr}/${ins}">
              <span class="psycho-card__nr">${INSTINKT_KURZ[ins]}${typNr}</span>
              <span class="psycho-card__name">${INSTINKT_LABEL[ins]}</span>
              <span class="psycho-card__arrow">\u2192</span>
            </button>
          `).join("")}
        </div>
      </div>
    `);
  }

  // Ebene 1: Typauswahl 1&ndash;9
  return shell(`
    ${pageHeader("subtypen-checklisten")}
    <div class="psycho-wrap">
      <p class="eyebrow">Schaubilder \u00b7 Subtypen-Checklisten</p>
      <h1 class="section-title">Subtypen-Checklisten</h1>
      <p class="psycho-intro">Welcher der 27 Subtypen beschreibt dich am treffendsten? W\u00e4hle deinen Haupttyp &ndash; dann kannst du die drei Subtypen vergleichen und anhand der Checklisten pr\u00fcfen, was auf dich zutrifft.</p>
      <div class="psycho-grid">
        ${[1,2,3,4,5,6,7,8,9].map(n => `
          <button class="psycho-card" data-route="subtypen-checklisten/${n}" style="border-color:${typeColor(n)};background:linear-gradient(160deg, ${typeColor(n)}18, ${typeColor(n)}08);">
            <span class="psycho-card__nr" style="color:${typeColor(n)};">${n}</span>
            <span class="psycho-card__name">${TYPNAMEN_MOTIV[n]}</span>
            <span class="psycho-card__arrow" style="color:${typeColor(n)};">\u2192</span>
          </button>
        `).join("")}
      </div>
      ${relatedLinks([
        {route:"subtypen-schaubilder", label:"Subtypen-Schaubilder"},
        {route:"bedeutung-27-subtypen", label:"Bedeutung der 27 Subtypen"},
        {route:"triadendefizite", label:"Triadendefizite"},
      ])}
    </div>
  `);
}

const EDELSTEINE = [
  { typ: 1, name: "Amethyst",    crystal: "The Perfection Detox",   file: "typ-1-amethyst.png" },
  { typ: 2, name: "Rosenquarz",  crystal: "The Self-Love Shield",   file: "typ-2-rosenquarz.png" },
  { typ: 3, name: "Tigerauge",   crystal: "The High-Achiever Fuel", file: "typ-3-tigerauge.png" },
  { typ: 4, name: "Rhodonit",    crystal: "The Emotion Alchemist",  file: "typ-4-rhodonit.png" },
  { typ: 5, name: "Amazonit",    crystal: "The Brain-Battery Saver",file: "typ-5-amazonit.png" },
  { typ: 6, name: "H\u00e4matit",     crystal: "The Bulletproof Vest",   file: "typ-6-haematit.png" },
  { typ: 7, name: "Rauchquarz",  crystal: "The Idea Grounder",      file: "typ-7-rauchquarz.png" },
  { typ: 8, name: "Fluorit",     crystal: "The Strategy Matrix",    file: "typ-8-fluorit.png" },
  { typ: 9, name: "Karneol",     crystal: "The Action Catalyst",    file: "typ-9-karneol.png" },
];

function subtypeSchaubilderPage() {
  const code = state.route.split("/")[1] || null;

  // Detailansicht: alle Seiten eines Subtyps
  if (code) {
    const entry = subtypeEntry(code);
    if (!entry || !entry.visualPages || !entry.visualPages.length) {
      return shell(`
        <section class="narrow" style="padding:1.5rem 1rem 0;">
          <button class="ghost-link" data-route="subtypen-schaubilder">\u2190 Zur\u00fcck zur \u00dcbersicht</button>
        </section>
        <section class="narrow centered" style="padding:1rem;">
          <p>F\u00fcr diesen Subtyp sind noch keine Schaubilder hinterlegt.</p>
        </section>
      `);
    }
    const tc = typeColorFromCode(code);
    const pagesHtml = entry.visualPages.map(pg => `
      <figure class="vollseite-karte" style="margin:0 0 1.5rem;">
        <p class="vollseite-karte__hint">Zum Vergr\u00f6\u00dfern antippen</p>
        <div class="card-pg-wrap">
          <img src="${cdnImg(pg.src)}" alt="${pg.alt}" class="vollseite-karte__img" loading="lazy"
            onerror="this.closest('.vollseite-karte').style.display='none'" />
          <div class="card-pg-compass" aria-hidden="true">${compassMark("mini")}</div>
        </div>
        <figcaption class="vollseite-karte__titel">${pg.title}${pg.caption ? ` \u00b7 <span style="font-weight:400;opacity:.7;">${pg.caption}</span>` : ""}</figcaption>
      </figure>
    `).join("");

    return shell(`
      ${pageHeader("subtypen-schaubilder")}
      <section class="narrow" style="padding:1rem 1rem 0;">
        <button class="ghost-link" data-route="subtypen-schaubilder">\u2190 Alle Subtypen</button>
      </section>
      <section class="narrow centered" style="padding:.75rem 1rem 1rem;">
        <p class="eyebrow" style="color:${tc}">${entry.code}</p>
        <h1 style="color:${tc};font-size:1.8rem;">${entry.title}</h1>
        <p class="lead-small">${entry.coreSentence || ""}</p>
      </section>
      <section class="narrow" style="padding:0 1rem 2rem;">
        ${pagesHtml}
        <button class="secondary" style="width:100%;margin-top:.5rem;" data-route="subtypen-schaubilder">\u2190 Zur\u00fcck zur \u00dcbersicht</button>
      </section>
    `);
  }

  // \u00dcbersicht: alle 27 Subtypen als klickbare Kacheln, gruppiert nach Typ
  const typeNames = {
    1:"Typ 1 \u00b7 Der Verbesserer", 2:"Typ 2 \u00b7 Der Helfer", 3:"Typ 3 \u00b7 Der Macher",
    4:"Typ 4 \u00b7 Der Individualist", 5:"Typ 5 \u00b7 Der Forscher", 6:"Typ 6 \u00b7 Der Loyale",
    7:"Typ 7 \u00b7 Der Enthusiast", 8:"Typ 8 \u00b7 Der Herausforderer", 9:"Typ 9 \u00b7 Der Vermittler"
  };
  const instLabels = { se: "Selbst\xaderhaltung", so: "Sozial", sx: "Sexuell" };

  const groupsHtml = [1,2,3,4,5,6,7,8,9].map(n => {
    const tc = typeColor(n);
    const codes = ["se","so","sx"].map(inst => `${inst}${n}`);
    const tilesHtml = codes.map(c => {
      const e = subtypeEntry(c);
      const inst = c.slice(0,2);
      const thumb = cdnImg(e?.visualPages?.[0]?.src || "");
      return `
        <button class="subtyp-schaubilder-tile" data-route="subtypen-schaubilder/${c}" style="border-color:${tc};">
          ${thumb ? `<img src="${thumb}" alt="${c} Vorschau" loading="lazy" style="width:100%;border-radius:6px 6px 0 0;display:block;" onerror="this.style.display='none'" />` : ""}
          <div style="padding:.6rem .75rem .75rem;">
            <span style="font-size:.7rem;font-weight:700;letter-spacing:.08em;text-transform:uppercase;color:${tc};">${instLabels[inst]}</span>
            <p style="margin:.15rem 0 0;font-size:.88rem;font-weight:600;hyphens:auto;overflow-wrap:break-word;">${e?.title || c.toUpperCase()}</p>
            <p style="margin:.15rem 0 0;font-size:.75rem;color:#888;">${e?.visualPages?.length || 0} Schaubilder</p>
          </div>
        </button>
      `;
    }).join("");
    return `
      <div style="margin-bottom:1.5rem;">
        <h2 style="font-size:1rem;font-weight:700;color:${tc};border-left:3px solid ${tc};padding-left:.6rem;margin:0 0 .75rem;">${typeNames[n]}</h2>
        <div style="display:grid;grid-template-columns:repeat(3,1fr);gap:.75rem;">
          ${tilesHtml}
        </div>
      </div>
    `;
  }).join("");

  return shell(`
    ${pageHeader("subtypen-schaubilder")}
    <section class="narrow centered" style="padding:1rem 1rem .5rem;">
      <p class="eyebrow">Schaubilder \u00b7 Alle 27 Subtypen</p>
      <h1>Subtypen-Schaubilder</h1>
      <p class="lead-small">Alle Originaltafeln der 27 Enneagramm-Subtypen \u2014 tippen Sie auf einen Subtyp, um alle Schaubilder zu sehen.</p>
    </section>
    <section class="narrow" style="padding:.5rem 1rem 2rem;">
      ${groupsHtml}
      ${relatedLinks([
        {route:"subtypen-checklisten", label:"Subtypen-Checklisten"},
        {route:"bedeutung-27-subtypen", label:"Bedeutung der 27 Subtypen"},
        {route:"horney-triaden", label:"Horney-Triaden"},
      ])}
    </section>
  `);
}

// Eigene, gedämpfte Kategorie-Farbpalette (bewusst abgesetzt von TYPE_COLORS, damit
// keine Verwechslung mit den Enneagrammtypfarben entsteht) – angelehnt an medizinische
// Fachbuch-Konventionen (Herz/Kreislauf rötlich, Bewegungsapparat erdig, Atemwege luftig-
// bläulich, Haut hautfarben, Nerven/Psyche blau, Immunsystem weinrot, Onkologie gedämpft-
// dunkel), aber entsättigt genug, um zum ruhigen Gesamtbild des Kompasses zu passen.
const PSYCHOSOMATIK_KATEGORIEN = [
  { key: "herz-kreislauf", label: "Herz-Kreislauf-System", farbe: "#b6483f" },
  { key: "bewegungsapparat", label: "Bewegungsapparat", farbe: "#8a7860" },
  { key: "atemwege", label: "Atemwege & Lunge", farbe: "#4a7f91" },
  { key: "verdauung", label: "Verdauungssystem", farbe: "#ab7d42" },
  { key: "niere", label: "Niere & Blase", farbe: "#3d6b5c" },
  { key: "haut", label: "Haut", farbe: "#c99b7a" },
  { key: "augen", label: "Augen", farbe: "#4d7a8c" },
  { key: "hormone-stoffwechsel", label: "Hormone & Stoffwechsel", farbe: "#7d6a8c" },
  { key: "nerven-psyche", label: "Nervensystem & Psyche", farbe: "#46688f" },
  { key: "immunsystem", label: "Immunsystem & Autoimmun", farbe: "#7a3d4a" },
  { key: "onkologie", label: "Onkologie", farbe: "#5c4a5e" },
  { key: "psychiatrie", label: "Psychiatrische Erkrankungen", farbe: "#6a4d6e" },
  { key: "sonstige", label: "Sonstige Krankheitsbilder", farbe: "#6b6558" },
];

