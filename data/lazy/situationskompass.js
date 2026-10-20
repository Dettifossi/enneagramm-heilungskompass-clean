export const SITUATIONSKOMPASS = {

  situationen: [
    { id: "erschoepfung",    label: "Ersch\u00f6pfung & Burnout", labelEN: "Exhaustion & burnout",       icon: "\ud83d\udd0b" },
    { id: "konflikt",        label: "Konflikt & Streit", labelEN: "Conflict & dispute",            icon: "\u26a1" },
    { id: "einsamkeit",      label: "Einsamkeit & R\u00fcckzug", labelEN: "Loneliness & withdrawal",         icon: "\ud83c\udf11" },
    { id: "entscheidung",    label: "Entscheidungsstress", labelEN: "Decision making stress",          icon: "\u2696\ufe0f" },
    { id: "beziehungskrise", label: "Beziehungskrise", labelEN: "Relationship crisis",              icon: "\ud83d\udc94" },
    { id: "selbstzweifel",   label: "Selbstzweifel & innere Kritik", labelEN: "Self-doubt & inner criticism",icon: "\ud83c\udf2b\ufe0f" },
    { id: "verlust",         label: "Verlust & Trauer", labelEN: "Loss & grief",             icon: "\ud83c\udf42" },
    { id: "ueberforderung",  label: "\u00dcberforderung & Druck", labelEN: "Overwhelm & pressure",        icon: "\ud83c\udf0a" },
    { id: "stagnation",      label: "Stagnation & innere Leere", labelEN: "Stagnation & inner emptiness",    icon: "\ud83e\udea8" },
  ],

  eintraege: {

    "SE1": {
      erschoepfung: {
        autopilot: `Wenn Ersch\u00f6pfung sich zeigt, antwortet der innere Antreiber mit noch mehr Disziplin. Ausruhen f\u00fchlt sich falsch an \u2013 fast wie eine moralische Verfehlung. Der innere Kritiker fl\u00fcstert: "Du hast noch nicht genug getan" \u2013 und der K\u00f6rper gehorcht, lange \u00fcber seine Grenzen hinaus.`,
        bewusstheit: `Was w\u00e4re, wenn der K\u00f6rper gerade nicht dein Feind ist, sondern dein ehrlichster Zeuge? Ersch\u00f6pfung kann auch bedeuten: du hast wirklich gegeben \u2013 und das darf jetzt einfach so sein.`,
        uebung: `Setz dich f\u00fcr f\u00fcnf Minuten hin, ohne Absicht. Wenn Gedanken kommen, die dich antreiben \u2013 benenne sie leise: "Das ist der Antreiber." Mehr nicht. Beobachte, was passiert, wenn du ihnen nicht folgst.`,
        autopilotEN: `Stagnation feels like an absolute failure: you aren't productive enough, you aren't making progress, you're standing still. The inner judge barks: You should be further along. You aggressively drive yourself forward instead of pausing.`,
        bewusstheitEN: `What if this quiet phase isn't a standstill\u2014but a period of preparation? What might emerge if you stopped fighting the current and just waited?`,
        uebungEN: `Give yourself one single, modest task for the day. Just one. Once it is finished, let the day be complete\u2014no post-game analysis, no extra add-ons.`
      },
      konflikt: {
        autopilot: `Im Konflikt wird die innere \u00dcberzeugung, im Recht zu sein, zur un\u00fcberwindlichen Mauer. Argumente des anderen werden gepr\u00fcft und f\u00fcr unzureichend befunden. Der Ton wird sachlicher, k\u00fchler, schneidender \u2013 als ob Pr\u00e4zision \u00fcberzeugender w\u00e4re als Empathie.`,
        bewusstheit: `Ist es m\u00f6glich, dass der andere auch etwas Richtiges sieht \u2013 und du es gerade nicht h\u00f6ren kannst, weil dein innerer Richter schon das Urteil gef\u00e4llt hat?`,
        uebung: `H\u00f6re dem anderen einmal zu Ende, ohne innerlich schon die Gegenposition zu formulieren. Halte inne, bevor du antwortest. Frage dich: Was ist das Berechtigte an dem, was er sagt?`,
        autopilotEN: `In a conflict, your inner conviction of being right becomes an immovable wall. The other person's arguments are scrutinized and found wanting. Your tone becomes more matter-of-fact, cooler, and sharper\u2014as if precision were more convincing than empathy.`,
        bewusstheitEN: `Is it possible that the other person sees something valid too\u2014and you just can't hear it right now because your inner judge has already passed sentence?`,
        uebungEN: `Listen to the other person until they are completely finished, without formulating your counterargument in your head. Pause before you respond. Ask yourself: What is the valid point in what they are saying?`
      },
      einsamkeit: {
        autopilot: `Einsamkeit wird nicht als Bed\u00fcrfnis wahrgenommen, sondern als Zeichen, dass man selbst irgendwo versagt hat. Statt Kontakt zu suchen, zieht man sich noch weiter zur\u00fcck \u2013 und arbeitet. Wenn man besch\u00e4ftigt ist, muss man das Alleinsein nicht f\u00fchlen.`,
        bewusstheit: `Was w\u00e4re es, jetzt nicht produktiv zu sein \u2013 sondern einfach Gesellschaft zu brauchen? Darf ein Mensch wie du Einsamkeit empfinden, ohne dass das ein Fehler ist?`,
        uebung: `Melde dich heute bei jemandem \u2013 nicht weil du helfen kannst oder etwas zu berichten hast, sondern weil dir die Verbindung fehlt. Sag das ruhig auch so. \u00dcbe, Bed\u00fcrftigkeit als menschlich zu erleben.`,
        autopilotEN: `Loneliness isn't recognized as a human need, but rather as a sign that you have failed somewhere. Instead of reaching out, you withdraw even further\u2014and work. When you're busy, you don't have to feel the loneliness.`,
        bewusstheitEN: `What if you didn't have to be productive right now, but simply needed company? Is a person like you allowed to feel lonely without it being a flaw?`,
        uebungEN: `Reach out to someone today\u2014not because you can help them or have news to share, but simply because you miss the connection. Feel free to say exactly that. Practice experiencing vulnerability as a natural human trait.`
      },
      entscheidung: {
        autopilot: `Jede Entscheidung wird zum Pr\u00fcfstand: Welche Option ist wirklich richtig? Die eigene Messlatte liegt hoch, und weil keine Wahl makellos ist, zieht sich der Prozess. Man analysiert, vergleicht, zweifelt \u2013 und handelt erst, wenn man sich sicher ist, dass man sp\u00e4ter nichts bereuen muss.`,
        bewusstheit: `Was w\u00e4re, wenn es keine perfekte Entscheidung gibt \u2013 nur eine, die du mit dem besten verf\u00fcgbaren Wissen triffst und dann nach Kr\u00e4ften lebst?`,
        uebung: `Setze dir eine feste Entscheidungsfrist \u2013 nicht l\u00e4nger als zwei Tage. Schreibe die zwei realistischsten Optionen auf, w\u00e4hle eine und schliesse die \u00dcberlegung damit bewusst ab. Vollst\u00e4ndigkeit ist hier kein Ziel, nur ein Hindernis.`,
        autopilotEN: `Every decision becomes a trial: Which option is truly the right one? Your bar is set so high, and since no choice is flawless, the process drags out. You analyze, compare, and doubt\u2014only acting when you are absolutely certain you won't regret anything later.`,
        bewusstheitEN: `What if there is no perfect decision\u2014only one that you make with the best information available, and then live out to the best of your ability?`,
        uebungEN: `Set a firm deadline for your decision\u2014no longer than two days. Write down the two most realistic options, pick one, and consciously close the matter. Completeness isn't the goal here; it's just a roadblock.`
      },
      beziehungskrise: {
        autopilot: `Die eigene Kritik am anderen wird sch\u00e4rfer \u2013 man zieht innerlich Bilanz: Was stimmt hier nicht, wer hat Fehler gemacht? Der Ton wird k\u00fchler, pr\u00e4ziser, gerechter. Man zieht sich zur\u00fcck, bis der andere das Problem einsieht und korrigiert.`,
        bewusstheit: `Bist du gerade der Richter dieser Beziehung \u2013 oder ihr Teilnehmer? Was br\u00e4uchtest du, um wieder ein Gespr\u00e4ch zu werden statt ein Urteil?`,
        uebung: `Nenne dem anderen eine Sache, die du an ihm wirklich sch\u00e4tzt \u2013 aufrichtig, ohne Vorbehalt. Dann erst sprich, was dich belastet. Beobachte, wie sich die Atmosph\u00e4re ver\u00e4ndert.`,
        autopilotEN: `Your criticism of the other person sharpens, and you start keeping score: What's wrong here? Who made a mistake? Your tone becomes cooler, more precise, and righteous. You pull back until the other person sees the problem and corrects it.`,
        bewusstheitEN: `Are you currently acting as the judge of this relationship, or as a partner in it? What would it take for you to become a conversation again rather than a verdict?`,
        uebungEN: `Tell the other person one thing you truly appreciate about them\u2014sincerely, with no strings attached. Only then speak about what is weighing on you. Notice how the atmosphere shifts.`
      },
      selbstzweifel: {
        autopilot: `Der innere Kritiker meldet sich unaufgefordert: Das war nicht gut genug. Du h\u00e4ttest besser sein sollen. So geht man das nicht an. Der Selbstzweifel nimmt die Form moralischer Selbstanklagen an \u2013 und der Massstab liegt immer einen Schritt h\u00f6her als das Erreichte.`,
        bewusstheit: `Spricht gerade dein innerer Richter \u2013 oder du selbst? Und w\u00e4re das Urteil dieses Richters wirklich gerecht, wenn er \u00fcber jemand anderen gef\u00e4llt w\u00fcrde?`,
        uebung: `Schreibe einen Satz, der mit \u201eIch habe heute gut gemacht, dass \u2026\u201c beginnt. Nicht die Leistung \u2013 etwas Menschliches. Lass den Satz stehen, ohne ihn zu relativieren.`,
        autopilotEN: `The inner critic pipes up uninvited: That wasn't good enough. You should have done better. That's not how you handle this. Self-doubt takes the form of moral self-blame\u2014and the bar is always placed one step higher than what you actually achieved.`,
        bewusstheitEN: `Is that your inner judge speaking right now, or is it truly you? And would this judge's verdict really be fair if it were passed on someone else?`,
        uebungEN: `Write down a sentence that begins with, "One thing I did well today was..." Don't focus on an achievement\u2014focus on something human. Let the sentence stand as it is, without downplaying it.`
      },
      verlust: {
        autopilot: `Verlust wird als Aufgabe begriffen: Man h\u00e4lt sich zusammen, organisiert, funktioniert. Die Trauer gilt als Schw\u00e4che oder als Kontrollverlust. Innerlich zieht man sich hinter Pflicht und T\u00fcchtigkeit zur\u00fcck.`,
        bewusstheit: `Was w\u00e4re, wenn Trauer kein Zeichen von Schw\u00e4che ist \u2013 sondern ein Zeichen, dass etwas wirklich bedeutsam war? Was verlierst du, wenn du die Trauer fernh\u00e4ltst?`,
        uebung: `Setz dich heute mit einem Gegenstand oder einer Erinnerung, die zum Verlust geh\u00f6rt. Lass f\u00fcnf Minuten zu, was kommt \u2013 ohne es zu beurteilen, ohne es zu korrigieren.`,
        autopilotEN: `Loss is treated like a task: You hold it together, organize, and function. Grief is viewed as a weakness or a loss of control. Internally, you retreat behind duty and efficiency.`,
        bewusstheitEN: `What if grief isn't a sign of weakness, but a sign that something truly mattered? What do you lose when you keep your grief at arm's length?`,
        uebungEN: `Sit quietly today with an object or a memory connected to your loss. For five minutes, allow whatever comes up to just be there\u2014without judging it, without trying to fix it.`
      },
      ueberforderung: {
        autopilot: `Bei \u00dcberforderung steigert sich der innere Druck: Mehr Disziplin, mehr Kontrolle, mehr Perfektion. Man versucht, sich durch Anstrengung aus dem Druck herauszuarbeiten \u2013 und macht ihn damit gr\u00f6\u00dfer.`,
        bewusstheit: `Was w\u00e4re, wenn du heute nicht mehr leistest \u2013 sondern weniger? Was w\u00e4re das Mindeste, das wirklich reicht?`,
        uebung: `Schreibe drei Dinge auf, die du heute weglassen oder delegieren kannst. Nicht verschieben \u2013 wirklich streichen oder abgeben. Dann tue es.`,
        autopilotEN: `When you feel overwhelmed, your internal pressure spikes: more discipline, more control, more perfection. You try to work your way out of the pressure through sheer effort\u2014which only makes it heavier.`,
        bewusstheitEN: `What if you didn't do more today, but actually did less? What is the absolute minimum that would truly be enough?`,
        uebungEN: `Write down three things you can drop or delegate today. Don't postpone them\u2014actually cross them off your list or hand them over. Then go ahead and do it.`
      },
      stagnation: {
        autopilot: `Stagnation f\u00fchlt sich wie Versagen an: Man ist nicht produktiv genug, macht keine Fortschritte, stagniert. Der innere Richter meldet sich: Du solltest weiter sein. Man treibt sich an statt innezuhalten.`,
        bewusstheit: `Was w\u00e4re, wenn diese Stille nicht Stillstand ist \u2013 sondern Vorbereitung? Was w\u00fcrde entstehen, wenn du nicht k\u00e4mpfst, sondern wartest?`,
        uebung: `Gib dem heutigen Tag eine einzige, bescheidene Aufgabe. Nur eine. Wenn sie erledigt ist, darf der Tag genug sein \u2013 ohne Nachklapp, ohne Zusatz.`,
        autopilotEN: `Stagnation feels like failure: you aren't productive enough, you aren't making progress, you're stuck. The inner judge chimes in: You should be further along. You push yourself instead of pausing.`,
        bewusstheitEN: `What if this stillness isn't a standstill, but a period of preparation? What might unfold if you stopped fighting the stillness and just waited?`,
        uebungEN: `Give yourself just one single, modest task for today. Only one. Once it's done, let the day be enough\u2014no follow-ups, no extras.`
      },
    },

    "SO1": {
      erschoepfung: {
        autopilot: `Die eigene Ersch\u00f6pfung wird dem Einsatz f\u00fcr das Richtige geopfert. Solange die Sache wichtig ist, rechtfertigt sie den Preis. Der K\u00f6rper sendet Signale \u2013 das Gewissen aber sagt: "Jetzt ist nicht die Zeit daf\u00fcr."`,
        bewusstheit: `F\u00fcr welche Werte k\u00e4mpfst du gerade \u2013 und bist du noch wirklich pr\u00e4sent f\u00fcr sie? Wer leidet darunter, dass du ersch\u00f6pft bist, aber weitermachst?`,
        uebung: `Schreibe heute eine bewusste Nicht-Liste: Was wirst du heute nicht tun? Beobachte, welcher Widerstand dabei entsteht \u2013 und ob dieser Widerstand wirklich von dir kommt oder von einem \u00e4lteren Bild davon, wer du sein sollst.`,
        autopilotEN: `Stagnation triggers intense guilt: I'm not doing enough for the cause, for others, or for the greater good. You try to work your way out of the internal emptiness by aggressively fulfilling duties\u2014which never actually fills the void.`,
        bewusstheitEN: `What if the act of pausing is exactly what is right for you in this moment\u2014not an act of escapism, but a necessary rest?`,
        uebungEN: `Give yourself permission to live through today without a grand objective. Observe what bubbles up in the quiet\u2014without instantly trying to turn it into a chore.`
      },
      konflikt: {
        autopilot: `Im Konflikt wird auf Werte und Prinzipien verwiesen \u2013 auf das, was gerecht, fair und richtig f\u00fcr alle w\u00e4re. Die eigene Position wird weniger als pers\u00f6nliche Meinung formuliert, sondern als objektive Norm. Wer anderer Meinung ist, scheint gegen das Prinzip selbst zu verstossen.`,
        bewusstheit: `Spreche ich gerade f\u00fcr ein Prinzip \u2013 oder f\u00fcr mich? Und w\u00e4re die Situation anders, wenn ich als Person spreche statt als H\u00fcter einer Norm?`,
        uebung: `Formuliere deinen Standpunkt im Konflikt einmal ohne Berufung auf Regeln oder Werte: \u201eIch m\u00f6chte ...\u201d statt \u201eEs w\u00e4re richtig, dass ...\u201d. Beobachte, wie sich das anf\u00fchlt.`,
        autopilotEN: `In conflicts, you default to values and principles\u2014focusing on what is fair, just, and right for everyone. Instead of framing your position as a personal opinion, you present it as an objective norm. Anyone who disagrees seems to be violating the principle itself.`,
        bewusstheitEN: `Am I speaking for a principle right now, or am I speaking for myself? And how might this situation shift if I showed up as a person rather than the guardian of a standard?`,
        uebungEN: `Try stating your position in a conflict without appealing to rules or values. Use "I want..." or "I need..." instead of "It would be right if...". Pay attention to how that feels in your body.`
      },
      einsamkeit: {
        autopilot: `Einsamkeit wird als Zeichen interpretiert, dass man nicht genug f\u00fcr die Gemeinschaft tut oder nicht gut genug ist. Man engagiert sich mehr, \u00fcbernimmt mehr Verantwortung \u2013 in der Hoffnung, durch N\u00fctzlichkeit dazuzugeh\u00f6ren.`,
        bewusstheit: `Geh\u00f6rst du dazu, weil du n\u00fctzlich bist \u2013 oder weil du du bist? Und wer w\u00e4re f\u00fcr dich da, wenn du nichts leisten k\u00f6nntest?`,
        uebung: `Suche heute Kontakt zu einer Person \u2013 nicht um etwas zu leisten, sondern einfach um da zu sein. Erlaube, dass das reicht.`,
        autopilotEN: `Loneliness is misinterpreted as a sign that you aren't doing enough for the community or that you aren't good enough. You respond by stepping up, taking on more responsibility, and hoping your usefulness will earn you a place to belong.`,
        bewusstheitEN: `Do you belong because you are useful, or simply because you are you? Who would be there for you if you couldn't produce or contribute anything at all?`,
        uebungEN: `Reach out to someone today\u2014not to accomplish anything or offer help, but simply to be there. Give yourself permission to let that be enough.`
      },
      entscheidung: {
        autopilot: `Man sucht nach der Entscheidung, die f\u00fcr alle richtig ist \u2013 die gerecht, fair und vor den Werten vertretbar ist. Pers\u00f6nliche Pr\u00e4ferenzen werden dabei kaum geh\u00f6rt. Wenn keine Option dem Ideal entspricht, entsteht innere Zerrissenheit.`,
        bewusstheit: `Darf die Entscheidung auch f\u00fcr dich richtig sein \u2013 nicht nur f\u00fcr alle anderen? Was w\u00fcrdest du w\u00e4hlen, wenn niemand zuschauen w\u00fcrde?`,
        uebung: `Frage dich vor der Entscheidung: Was will ich eigentlich? Schreibe die Antwort auf, bevor du denkst, was du w\u00e4hlen solltest. Lass den pers\u00f6nlichen Impuls als legitime Stimme im Raum stehen.`,
        autopilotEN: `You search for the decision that is right for everyone\u2014the one that is fair, ethical, and aligns with your values. Personal preferences are barely given a voice. When no option meets the ideal, it creates an agonizing inner tug-of-war.`,
        bewusstheitEN: `Is the decision allowed to be right for you too, and not just for everyone else? What would you choose if absolutely no one were watching?`,
        uebungEN: `Before making a choice, stop and ask yourself: What do I actually want? Write down the answer before your brain chimes in with what you should choose. Allow that personal impulse to exist as a legitimate voice in the room.`
      },
      beziehungskrise: {
        autopilot: `Man k\u00e4mpft f\u00fcr das Prinzipielle: Was w\u00e4re fair, was w\u00e4re richtig f\u00fcr beide? Die pers\u00f6nliche Verletzung tritt hinter die Frage nach dem richtigen Verhalten zur\u00fcck. Man verhandelt Prinzipien statt Gef\u00fchle.`,
        bewusstheit: `Was w\u00e4re, wenn du gerade nicht f\u00fcr ein Prinzip sprichst \u2013 sondern f\u00fcr dich? Wie w\u00fcrde sich das anf\u00fchlen, und was w\u00fcrdest du dann sagen?`,
        uebung: `Sprich heute einen Satz, der mit \u201eIch f\u00fchle mich gerade..." beginnt \u2013 ohne das sofort in eine Forderung oder ein Prinzip zu verwandeln. Nur das Gef\u00fchl, ohne Rahmen.`,
        autopilotEN: `You fight for the underlying principle: What is fair? What is the correct way for both parties to behave? Your personal hurt gets pushed aside in favor of figuring out the "right" conduct. You end up negotiating standards instead of sharing feelings.`,
        bewusstheitEN: `What if you weren't speaking for a principle right now, but strictly for yourself? What would that feel like, and what would you actually say?`,
        uebungEN: `Today, share a single sentence that starts with "Right now, I feel..."\u2014without immediately turning it into a demand, a critique, or a lesson. Just state the emotion, with no framework around it.`
      },
      selbstzweifel: {
        autopilot: `Man zweifelt daran, ob man genug f\u00fcr die richtige Sache getan hat. War das wirklich prinzipientreu? H\u00e4tte man anders handeln m\u00fcssen? Die innere Stimme bewertet retrospektiv jede Entscheidung gegen ein hoch gesetztes Ideal.`,
        bewusstheit: `Was w\u00e4re, wenn du heute genug getan hast \u2013 nicht perfekt, aber aufrichtig? Darf das f\u00fcr heute reichen?`,
        uebung: `Schreibe auf, was du heute wirklich getan hast \u2013 ohne Bewertung. Dann lies es vor wie eine neutrale Beschreibung: das ist, was war. Nicht mehr, nicht weniger.`,
        autopilotEN: `You second-guess whether you did enough for the right cause. Were you truly aligned with your principles? Should you have handled it differently? Your inner voice looks backward, evaluating every past decision against an impossibly high ideal.`,
        bewusstheitEN: `What if what you did today was enough\u2014not perfect, but genuine? Can you let that be enough for tonight?`,
        uebungEN: `Write a completely objective list of what you actually did today\u2014zero judgment allowed. Read it back to yourself like a neutral description: this is what happened. No more, no less.`
      },
      verlust: {
        autopilot: `Man tr\u00e4gt weiter, auch im Verlust: Was muss noch erledigt werden, was ist meine Pflicht gegen\u00fcber anderen? Der eigene Schmerz wird nach hinten geschoben, weil andere gerade mehr zu brauchen scheinen.`,
        bewusstheit: `Wessen Schmerz beachtest du gerade \u2013 den der anderen oder deinen eigenen? Darf dein Verlust auch Raum haben?`,
        uebung: `Schreibe heute auf, was du verloren hast \u2013 nicht was andere verloren haben, sondern du. Nur du. Dann lies es laut vor, auch wenn es schwer f\u00e4llt.`,
        autopilotEN: `Even in the face of loss, you keep carrying the weight: What still needs to get done? What is my duty to others? Your own pain is sidelined because others seem to need more care right now.`,
        bewusstheitEN: `Whose pain are you actually attending to\u2014everyone else's, or your own? Is your loss allowed to take up space too?`,
        uebungEN: `Today, write down what you have lost\u2014not what the group or others lost, but you specifically. Just you. Then read it out loud to yourself, even if it feels difficult.`
      },
      ueberforderung: {
        autopilot: `Man \u00fcbernimmt mehr Verantwortung als realistisch ist: f\u00fcr das Richtige einzustehen kostet Kraft, aber aufzuh\u00f6ren f\u00fchlt sich wie Versagen an. Man reibt sich auf, weil die Sache es verlangt.`,
        bewusstheit: `Wof\u00fcr bist du wirklich verantwortlich \u2013 und wof\u00fcr nicht? Gibt es etwas, das du heute ehrlich loslassen kannst?`,
        uebung: `W\u00e4hle heute eine Aufgabe oder Verantwortung, die eigentlich nicht dir geh\u00f6rt. Gib sie zur\u00fcck \u2013 ohne Erkl\u00e4rung, ohne Entschuldigung. Nur: Das ist nicht meins.`,
        autopilotEN: `You take on more responsibility than is humanly realistic. Standing up for what's right takes immense energy, but stepping back feels like a failure of integrity. You wear yourself down because you believe the cause demands it.`,
        bewusstheitEN: `What are you actually responsible for\u2014and what is truly out of your hands? Is there one thing you can honestly let go of today?`,
        uebungEN: `Choose one task or responsibility today that doesn't actually belong to you. Hand it back\u2014without an explanation, and without an apology. Simply think: This isn't mine to carry.`
      },
      stagnation: {
        autopilot: `Stagnation erzeugt Schuldgef\u00fchle: Ich tue nicht genug f\u00fcr die Sache, f\u00fcr andere, f\u00fcr das Richtige. Man versucht, sich durch Pflichterf\u00fcllung aus der inneren Leere herauszuarbeiten \u2013 was die Leere nicht f\u00fcllt.`,
        bewusstheit: `Was w\u00e4re, wenn das Innehalten selbst gerade das Richtige ist \u2013 nicht Flucht, sondern notwendige Pause?`,
        uebung: `Erlaube dir heute, einen Tag zu leben ohne gro\u00dfes Ziel. Beobachte, was in der Stille auftaucht \u2013 ohne es sofort in Pflicht zu verwandeln.`,
        autopilotEN: `Stagnation triggers intense guilt: I'm not doing enough for the cause, for others, or for the greater good. You try to work your way out of the inner emptiness by doubling down on duty\u2014but it doesn't fill the void.`,
        bewusstheitEN: `What if this pause is exactly the right thing for you right now? What if it isn't an escape, but a deeply necessary intermission?`,
        uebungEN: `Give yourself permission to live through today without a grand goal. Observe what emerges in the quiet space, without immediately trying to turn it into a task or an obligation.`
      },
    },

    "SX1": {
      erschoepfung: {
        autopilot: `Wenn die Energie nachl\u00e4sst, steigt die innere Anforderung. Mehr Perfektion, mehr Einsatz, mehr Intensit\u00e4t \u2013 als ob man sich durch Willen aus der Ersch\u00f6pfung herausarbeiten k\u00f6nnte. Unfertiges wird kaum toleriert.`,
        bewusstheit: `Was w\u00e4re es, jetzt gerade unfertig zu sein \u2013 und das nicht zu korrigieren? Welches Bild von dir selbst w\u00fcrde dabei ins Wanken geraten?`,
        uebung: `Lass heute bewusst etwas unvollendet. Bleibe einen Moment bei dem Unbehagen, das dabei entsteht. Atme. Beobachte, wie dein inneres System reagiert \u2013 ohne einzugreifen.`,
        autopilotEN: `Stagnation hits you as a painful loss of intensity. If the fire is missing, or if nothing feels profoundly meaningful, you register it as a personal failure. You instantly start hunting for the flaw within yourself.`,
        bewusstheitEN: `What if the fire is simply resting right now, rather than being extinguished? Does every single season of your life have to be lived at maximum intensity?`,
        uebungEN: `Sit completely still today\u2014with no task, no goal, and no self-evaluation. Do this for ten minutes. Just let the silence be there, and quietly observe whatever stirs beneath it.`
      },
      konflikt: {
        autopilot: `Im Konflikt wird die Intensit\u00e4t gr\u00f6\u00dfer, nicht kleiner. Der Massstab, den man an sich selbst anlegt, wird jetzt an den anderen angelegt. Kritik kann scharf, direkt und verletzend wirken \u2013 ohne dass man es so meint.`,
        bewusstheit: `Was w\u00e4re, wenn der andere diesen hohen Massstab gerade nicht erf\u00fcllen kann \u2013 und das nicht B\u00f6swilligkeit ist, sondern einfach menschlich?`,
        uebung: `Halte im n\u00e4chsten Konfliktmoment inne, bevor du deinen Standpunkt formulierst. Frage dich: Welchen Ton w\u00e4hle ich gerade \u2013 und welchen w\u00fcrde ich w\u00e4hlen, wenn der andere mein bestes Ich erwartete?`,
        autopilotEN: `In a conflict, your intensity cranks up rather than down. The impossibly high standards you hold for yourself are suddenly turned onto the other person. Your criticism can come across as sharp, blunt, and cutting\u2014even if you don't mean for it to hurt.`,
        bewusstheitEN: `What if the other person simply can't meet that high standard right now\u2014and it's not out of malice, but just because they are human?`,
        uebungEN: `In your next conflict, pause before stating your case. Ask yourself: What tone am I using right now, and what tone would I choose if I wanted to invite the other person into a real connection?`
      },
      einsamkeit: {
        autopilot: `Die Einsamkeit wird als pers\u00f6nliches Versagen erlebt \u2013 als Zeichen, dass man nicht intensiv genug, nicht vollkommen genug war. Der innere Kritiker schl\u00e4gt zu: Du hast etwas falsch gemacht, deshalb bist du allein.`,
        bewusstheit: `Ist Einsamkeit wirklich ein Zeichen von Versagen \u2013 oder ist sie manchmal einfach ein menschlicher Zustand, der nichts \u00fcber deinen Wert sagt?`,
        uebung: `Schreibe auf, was du dir von einer Verbindung gerade wirklich w\u00fcnschst. Dann: K\u00f6nntest du dir selbst einen Teil davon geben? Einen Moment der eigenen Zugewandtheit.`,
        autopilotEN: `Loneliness is experienced as a personal failure\u2014a sign that you weren't intense enough, deep enough, or flawless enough. The inner critic attacks: You messed up, and that's why you're alone.`,
        bewusstheitEN: `Is loneliness truly proof of a failure, or is it sometimes just a temporary human condition that has absolutely nothing to do with your worth?`,
        uebungEN: `Write down what you are truly craving from a connection right now. Then ask yourself: Can I offer a piece of that to myself? Give yourself a moment of genuine self-compassion.`
      },
      entscheidung: {
        autopilot: `Die Entscheidung wird zum Qualit\u00e4tsproblem: Keine Option ist gut genug. Mit intensiver Genauigkeit werden Schw\u00e4chen analysiert, Alternativen durchgespielt. Je gr\u00f6\u00dfer die Entscheidung, desto unbarmherziger der innere Richter.`,
        bewusstheit: `Gibt es eine Option, die gut genug ist \u2013 nicht perfekt, aber aufrichtig? Was w\u00fcrde passieren, wenn du dir erlaubst, mit dieser Unsicherheit zu leben?`,
        uebung: `Benenne laut, was du wirklich willst \u2013 nicht die fehlerfreieste Option, sondern die, die sich am lebendigsten anf\u00fchlt. Dann entscheide dich daf\u00fcr und verpflichte dich, die Entscheidung nicht r\u00fcckg\u00e4ngig zu machen.`,
        autopilotEN: `Making a choice becomes an obsession with quality: no option feels good enough. With intense scrutiny, you dissect every weakness and obsess over alternatives. The bigger the decision, the more ruthless your inner judge becomes.`,
        bewusstheitEN: `Is there an option here that is good enough\u2014not perfect, but honest? What would happen if you allowed yourself to move forward alongside this uncertainty?`,
        uebungEN: `State out loud what you actually want\u2014not the most flawless option, but the one that feels the most alive to you. Choose it, and commit to not second-guessing your choice.`
      },
      beziehungskrise: {
        autopilot: `Die Anforderungen an den anderen steigen: Warum ist er nicht besser, wahrhaftiger, konsequenter? Die Intensit\u00e4t des eigenen Ideals wird zum Ma\u00dfstab, an dem die Beziehung scheitert. Innerlich w\u00e4chst der Schmerz, \u00e4u\u00dferlich die K\u00e4lte.`,
        bewusstheit: `Fordert dein innerer Richter gerade mehr, als ein Mensch leisten kann? Was w\u00e4re, wenn du den anderen so nimmst, wie er ist \u2013 heute, in diesem Moment?`,
        uebung: `Sage dem anderen einen Satz ohne Forderung und ohne Bewertung: \u201eIch w\u00fcnsche mir, dass wir ..." und f\u00fclle ihn mit etwas Einfachem, Erreichbarem. Nicht dem Ideal \u2013 dem M\u00f6glichen.`,
        autopilotEN: `Your demands on the other person intensify: Why aren't they better, more authentic, more consistent? The sheer weight of your ideal becomes the metric by which the relationship fails. Internally, the pain grows; externally, you turn cold.`,
        bewusstheitEN: `Is your inner judge demanding more than any human being can actually give? What if you met the other person exactly as they are\u2014today, in this very moment?`,
        uebungEN: `Say one thing to your partner that carries no demand and no judgment. Start with, "I hope we can..." and fill it with something simple and within reach. Focus on what is possible, not the ideal.`
      },
      selbstzweifel: {
        autopilot: `Der Selbstzweifel kommt als innere Ersch\u00fctterung: Bin ich wirklich so, wie ich sein sollte? War das echt? H\u00e4tte ich tiefer, konsequenter, wahrhaftiger sein sollen? Die Intensit\u00e4t des Zweifels kann sich gegen einen selbst richten.`,
        bewusstheit: `Was w\u00e4re, wenn du gerade gut genug bist \u2013 nicht perfekt, aber wirklich? Und was w\u00e4re, wenn der Zweifel selbst ein Zeichen ist, dass du dir etwas bedeutest?`,
        uebung: `Schreib einen Brief an dich selbst \u2013 ohne Kritik, ohne Forderung. Nur: Was ich an mir sch\u00e4tze, auch wenn es mir schwer f\u00e4llt. Lies ihn laut vor.`,
        autopilotEN: `Self-doubt hits like a seismic shift: Am I really who I should be? Was that real? Should I have been deeper, more consistent, more authentic? The sheer force of this doubt completely turns against you.`,
        bewusstheitEN: `What if you are enough right now\u2014not perfect, but real? And what if the doubt itself is just proof of how deeply you care?`,
        uebungEN: `Write a letter to yourself\u2014no critiques, no demands allowed. Focus only on what you appreciate about yourself, even if it feels hard to write. Read it out loud.`
      },
      verlust: {
        autopilot: `Verlust l\u00f6st intensive Reaktionen aus: Schuldgef\u00fchle (H\u00e4tte ich mehr tun k\u00f6nnen?), Zorn auf sich selbst oder die Situation, die Suche nach dem Fehler. Der Schmerz wird in Selbstkritik umgewandelt statt getrauert.`,
        bewusstheit: `Was w\u00e4re, wenn dieser Verlust kein Fehler war \u2013 weder deiner noch ein anderer? Darf Trauer einfach Trauer sein, ohne Schuldige?`,
        uebung: `Schreibe heute einen Abschiedsbrief an das, was du verloren hast. Kein Urteil, keine Erkl\u00e4rung. Nur: Was warst du mir, und was nehme ich mit.`,
        autopilotEN: `Loss triggers highly intense reactions: guilt (Should I have done more?), anger at yourself or the situation, and a frantic hunt for what went wrong. Pain is aggressively converted into self-criticism instead of allowed to be grief.`,
        bewusstheitEN: `What if this loss wasn't a mistake\u2014neither yours nor anyone else's? Can grief just be grief, without needing someone to blame?`,
        uebungEN: `Today, write a goodbye letter to what you have lost. No judgments, no explanations. Just write: This is what you meant to me, and this is what I carry forward.`
      },
            ueberforderung: {
        autopilot: `Die Intensit\u00e4t des Drucks wird zur Herausforderung: Man k\u00e4mpft dagegen an, h\u00e4lt h\u00f6here Ma\u00dfst\u00e4be, weigert sich, die Anforderungen zu reduzieren. Der Perfektionismus wird bei \u00dcberforderung nicht kleiner, sondern sch\u00e4rfer.`,
        bewusstheit: `Was w\u00e4re, wenn gut genug in dieser Situation wirklich gut genug ist? Welchen Preis zahlst du f\u00fcr das Ideal?`,
        uebung: `Erledige heute eine Aufgabe bewusst auf 80 % \u2013 nicht schlechter als n\u00f6tig, aber ohne die letzten 20 % Perfektion. Beobachte, was das ausl\u00f6st.`,
        autopilotEN: `The sheer weight of the pressure becomes a battleground. You fight back by holding even higher standards, refusing to dial back your expectations. Under overwhelm, your perfectionism doesn't soften\u2014it gets sharper.`,
        bewusstheitEN: `What if "good enough" is exactly what is required in this situation? What price are you paying to maintain the ideal?`,
        uebungEN: `Today, deliberately do a task at 80% capacity\u2014not sloppy, but without chasing that final 20% of perfection. Notice what that stirs up inside you.`
      },
      stagnation: {
        autopilot: `Stagnation trifft als Intensit\u00e4tsverlust: Wenn das Feuer fehlt, wenn nichts mehr wirklich z\u00e4hlt, wird das als pers\u00f6nliches Versagen erlebt. Man sucht nach dem Fehler in sich selbst.`,
        bewusstheit: `Was w\u00e4re, wenn das Feuer gerade Pause macht \u2013 und nicht erloschen ist? Muss jede Phase intensiv sein?`,
        uebung: `Sitz heute still \u2013 ohne Aufgabe, ohne Ziel, ohne Bewertung. Zehn Minuten. Lass die Stille einfach da sein. Beobachte, was sich darunter regt.`,
        autopilotEN: `Stagnation feels like a loss of life force. When the fire is missing and nothing seems to matter, you view it as a personal failure and immediately look for the flaw within yourself.`,
        bewusstheitEN: `What if your inner fire is just resting right now, rather than burned out? Does every season of your life have to be intense?`,
        uebungEN: `Sit quietly today for ten minutes\u2014no task, no goal, no evaluation. Just let the stillness be there. Pay attention to whatever is stirring quietly beneath the surface.`
      },
    },

    "SE2": {
      erschoepfung: {
        autopilot: `Die eigene Ersch\u00f6pfung wird verborgen, weil Bed\u00fcrftigkeit die Verbindung zu anderen gef\u00e4hrden k\u00f6nnte. Nach au\u00dfen hin bleibt man freundlich, hilfsbereit, zugewandt \u2013 bis der K\u00f6rper nicht mehr mitspielen will.`,
        bewusstheit: `Was brauchst du gerade wirklich \u2013 nicht was du geben k\u00f6nntest, sondern was du selbst brauchst? Und wann hast du dir das zuletzt wirklich gefragt?`,
        uebung: `Formuliere einen einzigen Satz, der mit "Ich brauche gerade..." beginnt. Sprich ihn laut aus \u2013 auch wenn niemand zuh\u00f6rt. Beobachte, wie er sich in deinem K\u00f6rper anf\u00fchlt.`,
        autopilotEN: `Stagnation hits you as a painful loss of emotional intensity. When the spark is gone and nothing feels profoundly meaningful, you treat it as a personal failure. You immediately start scanning yourself to figure out what is broken.`,
        bewusstheitEN: `What if the spark is simply resting right now, rather than being extinguished for good? Does every single chapter of your life need to be lived at maximum intensity?`,
        uebungEN: `Sit completely still today\u2014with no task, no goal, and no self-evaluation. Do this for ten minutes. Just let the silence be there, and quietly observe whatever stirs beneath it.`
      },
      konflikt: {
        autopilot: `Im Konflikt wird die eigene Verletzung eher gezeigt als der eigentliche Bedarf benannt. Man zieht sich zur\u00fcck, wird still oder sendet indirekte Signale \u2013 in der Hoffnung, der andere m\u00f6ge von selbst verstehen, was falsch gelaufen ist.`,
        bewusstheit: `Was brauchst du wirklich in diesem Konflikt \u2013 und hast du es klar und direkt gesagt, oder hoffst du, dass man es err\u00e4t?`,
        uebung: `Formuliere einmal direkt, was du brauchst oder was dich verletzt hat \u2013 in einem einzigen klaren Satz, ohne Umwege. Beobachte, ob das schwerer ist als das Schweigen.`,
        autopilotEN: `In a conflict, you are more likely to display your hurt feelings than to actually state what you need. You withdraw, grow quiet, or drop indirect hints\u2014hoping the other person will figure out on their own what went wrong.`,
        bewusstheitEN: `What is it that you truly need in this conflict? Have you stated it clearly and directly, or are you hoping they will guess it?`,
        uebungEN: `Try stating what you need or what hurt you directly, in a single, clear sentence without any detours. Notice if doing this feels harder than staying silent.`
      },
      einsamkeit: {
        autopilot: `Wenn Einsamkeit entsteht, wird sofort F\u00fcrsorge mobilisiert: Wem kann ich jetzt helfen? Durch das Geben wird Verbindung hergestellt. Aber unter dem Helfen bleibt das Alleinsein unber\u00fchrt.`,
        bewusstheit: `Hilfst du gerade, weil du magst \u2013 oder weil du die Einsamkeit nicht aushalten willst? Was w\u00e4re, wenn du heute einfach empfangen d\u00fcrftest?`,
        uebung: `Ruf jemanden an \u2013 nicht um zu helfen, sondern um zu sagen: Ich vermisse dich. Beobachte, wie sich das anf\u00fchlt, die Bed\u00fcrftigkeit direkt auszusprechen.`,
        autopilotEN: `The moment loneliness creeps in, your caretaking instincts kick into high gear: Who can I help right now? You use giving as a way to manufacture connection, but beneath the helpfulness, the core loneliness remains untouched.`,
        bewusstheitEN: `Are you helping right now because you genuinely want to, or because you can't bear the weight of being alone? What if you were allowed to simply receive today?`,
        uebungEN: `Call someone today\u2014not to offer help or support, but just to say, "I miss you." Notice how it feels to express your need for connection so directly.`
      },
      entscheidung: {
        autopilot: `Die Entscheidung dreht sich darum, was die andere Person braucht oder erwartet. Die eigene Stimme tritt zur\u00fcck. Man w\u00e4hlt die Option, die am meisten Zuneigung sichert \u2013 ohne sich zu fragen, was man selbst will.`,
        bewusstheit: `F\u00fcr wen triffst du gerade diese Entscheidung wirklich? Und was w\u00fcrdest du w\u00e4hlen, wenn dir niemand dabei zuschauen w\u00fcrde?`,
        uebung: `Schreibe auf, was du w\u00e4hlen w\u00fcrdest, wenn alle anderen schon zufrieden w\u00e4ren. Diese Antwort ist deine eigene. Lasse sie einen Moment stehen, bevor du sie verwirfst.`,
        autopilotEN: `Your decisions revolve entirely around what the other person needs or expects, while your own voice recedes into the background. You naturally gravitate toward the option that secures the most affection, without stopping to ask what you actually want.`,
        bewusstheitEN: `Who are you really making this decision for? And what would you choose if absolutely no one were watching?`,
        uebungEN: `Write down what you would choose if you knew everyone else was already perfectly happy. That answer belongs entirely to you. Let it sit there for a moment before you dismiss it.`
      },
      beziehungskrise: {
        autopilot: `Man gibt noch mehr \u2013 Aufmerksamkeit, F\u00fcrsorge, Zeit \u2013 in der Hoffnung, die Krise durch Geben zu \u00fcberbr\u00fccken. Wenn das nicht wirkt, w\u00e4chst die Verletzung still. Man zieht sich zur\u00fcck, wartet auf Anerkennung, die nicht kommt.`,
        bewusstheit: `Was brauchst du gerade in dieser Beziehung \u2013 wirklich du, nicht der andere? Und hast du das klar ausgesprochen?`,
        uebung: `Sage dem anderen direkt, was du brauchst \u2013 nicht was du geben willst, nicht was du erwartest. Ein einziger klarer Satz: \u201eIch brauche gerade ..." Beobachte, was das ausl\u00f6st.`,
        autopilotEN: `You double down on giving\u2014showering them with attention, care, and time\u2014hoping to bridge the crisis through sheer generosity. When that doesn't work, your resentment grows silently. You pull back and wait for recognition that never comes.`,
        bewusstheitEN: `What do you need in this relationship right now? Truly you, not the other person. And have you actually said it out loud?`,
        uebungEN: `Tell the other person directly what you need\u2014not what you want to give them, and not what you expect from them. Just one clear sentence: "Right now, I need..." Observe what happens next.`
      },
      selbstzweifel: {
        autopilot: `Der Selbstzweifel dreht sich um Liebensw\u00fcrdigkeit: Bin ich wirklich gut genug \u2013 als Person, nicht als Helferin? Wenn der andere sich zur\u00fcckzieht oder nicht dankt, best\u00e4tigt das einen alten Verdacht: Ich bin nur dann etwas wert, wenn ich gebe.`,
        bewusstheit: `Was w\u00e4re, wenn du auch dann liebenswert w\u00e4rst, wenn du gerade nichts gibst \u2013 nichts tust, nichts leistest? Gibt es jemanden, der dich so sieht?`,
        uebung: `Lass heute jemanden etwas f\u00fcr dich tun \u2013 ohne es zu erwidern, ohne dich sofort zu bedanken. Beobachte, ob du das aushalten kannst, und was dabei in dir vorgeht.`,
        autopilotEN: `Your self-doubt centers on your lovability: Are you truly good enough just as a person, separate from your role as a helper? When someone pulls away or forgets to thank you, it triggers an old, familiar fear: I am only worthy if I am giving.`,
        bewusstheitEN: `What if you were deeply lovable even when you aren't giving, doing, or providing anything? Is there anyone in your life who sees you exactly that way?`,
        uebungEN: `Today, let someone do something for you. Don't try to match it, and don't rush to over-compensate with gratitude. Just notice if you can allow yourself to hold that space, and track what comes up inside.`
      },
      verlust: {
        autopilot: `Verlust wird durch Helfen bew\u00e4ltigt: Man sorgt f\u00fcr andere, die trauern \u2013 und merkt kaum, dass man selbst trauert. Der Schmerz tritt hinter die F\u00fcrsorge zur\u00fcck, bis er sich irgendwann in Ersch\u00f6pfung oder Bitterkeit meldet.`,
        bewusstheit: `Wer trauert f\u00fcr dich \u2013 und l\u00e4sst du das zu? Gibt es jemanden, bei dem du heute deinen eigenen Schmerz ablegen darfst?`,
        uebung: `Bitte heute jemanden, einfach nur bei dir zu sein \u2013 ohne Ratschlag, ohne Ablenkung. Nur Gesellschaft im Schmerz. Lass das geschehen.`,
        autopilotEN: `You manage loss by shifting into caretaker mode: you look after others who are grieving, barely noticing that you are grieving too. Your own pain gets sidelined by your desire to comfort, until it eventually shows up as exhaustion or bitterness.`,
        bewusstheitEN: `Who is holding space for your grief, and are you actually letting them? Is there someone in your life with whom you can safely set down your pain today?`,
        uebungEN: `Today, ask someone to just be with you\u2014no advice, no distractions. Just quiet companionship in your pain. Let yourself receive that presence.`
      },
      ueberforderung: {
        autopilot: `\u00dcberforderung kommt, weil man zu vielen Menschen Ja gesagt hat. Statt zu begrenzen, gibt man noch mehr \u2013 in der Hoffnung, dass die anderen es dann gut finden. Die Ersch\u00f6pfung w\u00e4chst still unter der F\u00fcrsorge.`,
        bewusstheit: `Wie viele Neins h\u00e4ttest du heute sagen k\u00f6nnen \u2013 und hast es nicht getan? Was hindert dich daran?`,
        uebung: `Sag heute einmal Nein \u2013 zu einer konkreten Bitte, die dir zu viel ist. Kurz und freundlich: \u201eDas schaffe ich gerade nicht." Beobachte, was passiert.`,
        autopilotEN: `Overwhelm happens because you said yes to too many people. Instead of setting boundaries, you give even more, hoping it will keep everyone happy with you. The exhaustion builds silently beneath your warm exterior.`,
        bewusstheitEN: `How many times could you have said no today, but chose not to? What is really holding you back from doing it?`,
        uebungEN: `Practice saying no today to a specific request that feels like too much for you. Keep it brief and kind: "I can't take that on right now." Observe how it feels to protect your space.`
      },
                  stagnation: {
        autopilot: `Stagnation trifft als Intensit\u00e4tsverlust: Wenn das Feuer fehlt, wenn nichts mehr wirklich z\u00e4hlt, wird das als pers\u00f6nliches Versagen erlebt. Man sucht nach dem Fehler in sich selbst.`,
        bewusstheit: `Was w\u00e4re, wenn das Feuer gerade Pause macht \u2013 und nicht erloschen ist? Muss jede Phase intensiv sein?`,
        uebung: `Sitz heute still \u2013 ohne Aufgabe, ohne Ziel, ohne Bewertung. Zehn Minuten. Lass die Stille einfach da sein. Beobachte, was sich darunter regt.`,
        autopilotEN: `Stagnation feels like a loss of vitality. When the warmth or the spark is missing and nothing seems to matter, you view it as a personal failure and immediately look for the flaw within yourself.`,
        bewusstheitEN: `What if your inner fire is just resting right now, rather than burned out? Does every phase of your life have to be filled with intense connection or activity?`,
        uebungEN: `Sit quietly today for ten minutes\u2014no task, no goal, no evaluation. Just let the stillness be there. Pay attention to whatever is stirring quietly beneath the surface.`
      },
    },

    "SO2": {
      erschoepfung: {
        autopilot: `Weitermachen, weil man gebraucht wird. Die Ersch\u00f6pfung gilt als Zeichen der eigenen Wichtigkeit \u2013 wer so m\u00fcde ist, muss wirklich viel getragen haben. Innehalten w\u00fcrde bedeuten, nicht mehr unverzichtbar zu sein.`,
        bewusstheit: `Wer w\u00e4rst du in diesem Moment, wenn niemand deine Hilfe br\u00e4uchte? Was bliebe von dir \u00fcbrig, wenn alle Verbindungen gerade pausieren?`,
        uebung: `Verbring eine Stunde ohne Kontakt nach au\u00dfen \u2013 keine Nachrichten, keine Anfragen, keine Erkundigungen. Beobachte, welche Gef\u00fchle auftauchen, und wie dein inneres System auf diese ungewohnte Stille reagiert.`,
        autopilotEN: `You keep pushing forward because you are needed. Exhaustion is twisted into a badge of your own importance\u2014the logic being that if you're this tired, you must be carrying a massive weight for everyone else. Pausing feels dangerous, as if it means you're no longer indispensable.`,
        bewusstheitEN: `Who would you be in this very moment if nobody needed your help? What is left of you if all your social connections take a temporary back seat?`,
        uebungEN: `Spend an hour completely disconnected from the outside world\u2014no text messages, no checking in, no handling requests. Notice what feelings surface, and pay attention to how your internal system reacts to this unfamiliar stillness.`
      },
      konflikt: {
        autopilot: `Im Konflikt taucht leise die Bilanz auf: Was ich f\u00fcr dich getan habe. Nicht immer ausgesprochen, aber sp\u00fcrbar. Die Erwartung, dass der andere das anerkennt, steht unsichtbar im Raum.`,
        bewusstheit: `Erwartest du gerade Dankbarkeit \u2013 und vermischst du das mit dem eigentlichen Konfliktthema? Was w\u00e4re der Kern des Streits, wenn die Bilanz nicht z\u00e4hlen w\u00fcrde?`,
        uebung: `Lass in diesem Konflikt die Vergangenheit aus dem Gespr\u00e4ch. Bleibe beim Jetzt: Was ist das eigentliche Thema \u2013 heute, in diesem Moment?`,
        autopilotEN: `In a conflict, a silent ledger inevitably appears in your mind: Look at everything I've done for you. It might not be explicitly stated, but it's palpable. The unspoken expectation that the other person should acknowledge your track record fills the room.`,
        bewusstheitEN: `Are you actually craving gratitude right now\u2014and are you muddying the real conflict with it? What would the core issue be if the emotional scoreboard didn't count?`,
        uebungEN: `Leave the past out of the conversation during this conflict. Anchor yourself in the present: What is the actual issue\u2014today, in this exact moment?`
      },
      einsamkeit: {
        autopilot: `Einsamkeit wird zum Anlass, noch mehr zu geben, noch sichtbarer zu werden \u2013 in Gruppen, Kreisen, Netzwerken. Wenn man \u00fcberall gebraucht wird, kann man nicht wirklich allein sein. Aber das Alleinsein bleibt, tief darunter.`,
        bewusstheit: `Wie viele dieser Verbindungen kennen wirklich dich \u2013 und nicht nur das, was du f\u00fcr sie tust? Mit wem bist du einfach du?`,
        uebung: `Schreibe heute einer einzigen Person, der du dich wirklich nah f\u00fchlst, eine pers\u00f6nliche Nachricht \u2013 nicht als Organisatorin, nicht als Helferin. Einfach als du.`,
        autopilotEN: `Loneliness becomes your cue to give even more and become even more visible within groups, circles, and networks. You tell yourself that if you're needed everywhere, you can't possibly be alone. Yet the deep isolation underneath remains untouched.`,
        bewusstheitEN: `How many of these connections genuinely know you\u2014and not just what you manage or provide for them? Who are you just yourself with?`,
        uebungEN: `Today, send a personal message to just one person you feel truly close to. Don't show up as the organizer, the host, or the helper. Just reach out as you.`
      },
      entscheidung: {
        autopilot: `Man sucht den Konsens \u2013 w\u00e4hlt, was die Gruppe gut f\u00e4nde, was zur Rolle passt, was die wichtigsten Beziehungen intakt h\u00e4lt. Die eigene Meinung wird dabei so gr\u00fcndlich zur\u00fcckgestellt, dass man selbst nicht mehr sicher ist, was man eigentlich will.`,
        bewusstheit: `Was w\u00fcrde die Gruppe entscheiden \u2013 und was w\u00fcrdest du entscheiden? Kennst du den Unterschied gerade noch?`,
        uebung: `Triff diese Entscheidung zuerst alleine und in Stille. Schreibe auf, was herauskommt, bevor du mit jemand anderem sprichst. Dann vergleiche.`,
        autopilotEN: `You instinctively search for consensus\u2014choosing what the group would approve of, what fits your social role, or what keeps your most valuable relationships intact. Your personal opinion is sidelined so thoroughly that you lose track of what you actually want.`,
        bewusstheitEN: `What would the group decide, and what would you decide? Are you still able to tell the difference right now?`,
        uebungEN: `Make this decision entirely on your own in silence first. Write down your choice before you talk it over with anyone else. Then compare the two.`
      },
      beziehungskrise: {
        autopilot: `Man versucht, die Krise durch Beratung, Hilfe und F\u00fcrsorglichkeit zu \u00fcberbr\u00fccken \u2013 f\u00fcr alle anderen. Die eigene Verletzung bleibt unausgesprochen. Man wei\u00df genau, was der andere braucht, und wei\u00df kaum, was man selbst braucht.`,
        bewusstheit: `L\u00f6st du die Beziehungskrise durch Helfen \u2013 oder durch echtes Dabeisein? Was w\u00e4re, wenn du gerade nichts tun w\u00fcrdest und nur da w\u00e4rst?`,
        uebung: `Halte in dieser Krise inne und frage den anderen: \u201eWie geht es dir wirklich?" Dann h\u00f6re zu \u2013 ohne Rat, ohne L\u00f6sung, ohne Angebot. Nur zuh\u00f6ren.`,
        autopilotEN: `You try to bridge the crisis by offering advice, support, and caretaking\u2014for everyone else involved. Your own hurt remains unexpressed. You know exactly what the other person needs to fix things, but you have no idea what you need.`,
        bewusstheitEN: `Are you trying to solve this relationship crisis by playing the helper, or by genuinely showing up? What would happen if you stopped managing the situation and just sat with it?`,
        uebungEN: `Pause in the middle of this crisis and ask the other person, "How are you really doing?" Then just listen\u2014no advice, no fixes, no offers to help. Just hold the space.`
      },
      selbstzweifel: {
        autopilot: `Man zweifelt daran, ob man wirklich wichtig ist \u2013 nicht nur n\u00fctzlich. Wenn niemand fragt, wie es einem geht, best\u00e4tigt das die innere Bef\u00fcrchtung: Ohne Geben w\u00e4re ich unsichtbar.`,
        bewusstheit: `Wer kennt dich \u2013 nicht was du tust, sondern wer du bist? Und hast du jemandem in letzter Zeit wirklich erlaubt, dich zu sehen?`,
        uebung: `Ruf heute jemanden an und sag: \u201eIch brauche ein Gespr\u00e4ch \u2013 nicht um zu helfen, sondern weil ich geh\u00f6rt werden m\u00f6chte." Beobachte, wie sich das anf\u00fchlt.`,
        autopilotEN: `You doubt whether you are truly important to people, rather than just useful. When no one checks in on you, it confirms your deepest internal fear: Without my contribution, I am invisible.`,
        bewusstheitEN: `Who actually knows you\u2014not what you do, but who you are? And have you genuinely allowed anyone to see the real you lately?`,
        uebungEN: `Call someone today and say, "I just need to talk\u2014not to fix anything, but because I need to be heard." Observe how it feels to step out of the strong role.`
      },
      verlust: {
        autopilot: `Man tr\u00e4gt die Trauer anderer mit \u2013 und vergisst dabei die eigene. Die Gemeinschaft gibt Halt, aber man selbst steht am Rand: immer verf\u00fcgbar, selten sichtbar im eigenen Schmerz.`,
        bewusstheit: `Was tr\u00e4gst du gerade \u2013 f\u00fcr dich oder f\u00fcr die Gruppe? Gibt es einen Ort, an dem du deinen eigenen Verlust zeigen darfst?`,
        uebung: `Suche heute einen Moment der Stille, nur f\u00fcr dich und deinen Verlust. Kein Gespr\u00e4ch, keine Aufgabe. Nur du und das, was du wirklich verloren hast.`,
        autopilotEN: `You carry the grief of the community, completely forgetting your own. The group gives you a sense of belonging and structure, but you remain out on the perimeter: always available, rarely visible in your own pain.`,
        bewusstheitEN: `Whose pain are you actually carrying right now\u2014yours or the collective's? Is there a safe space where your own loss is allowed to show its face?`,
        uebungEN: `Find a moment of absolute quiet today, exclusively for you and your loss. No processing conversations, no tasks. Just you and what you have genuinely lost.`
      },
      ueberforderung: {
        autopilot: `Man ist f\u00fcr alle da und vergisst sich selbst. Die Gruppe braucht Unterst\u00fctzung, also gibt man sie \u2013 auch wenn man selbst leer ist. Der eigene Akku wird nicht aufgeladen, weil das egoistisch wirken w\u00fcrde.`,
        bewusstheit: `Was brauchst du gerade \u2013 wirklich du, nicht die Gruppe? Und hast du dir das heute schon geg\u00f6nnt?`,
        uebung: `Reserviere heute eine Stunde nur f\u00fcr dich \u2013 keine Aufgaben, keine anderen Menschen. Tu etwas, das dich auff\u00fcllt. Beobachte, ob du das zulassen kannst.`,
        autopilotEN: `You are there for everyone else, completely bypassing yourself. The group needs your backing, so you give it\u2014even when your own tank is completely empty. Recharging your own battery gets pushed off because it feels selfish.`,
        bewusstheitEN: `What do you need right now\u2014truly you, not the community? And have you given yourself permission to have it today?`,
        uebungEN: `Carve out one hour today entirely for yourself\u2014no tasks, no people, no obligations. Do something that genuinely fills you up. Notice if you feel guilty allowing yourself to take it.`
      },
      stagnation: {
        autopilot: `Ohne Gemeinschaft und Best\u00e4tigung f\u00fchlt sich das Leben leer an. Man sucht neue Aufgaben, neue Menschen, neue Gruppen \u2013 um die Leere zu f\u00fcllen statt ihr zu begegnen.`,
        bewusstheit: `Was bleibt, wenn keine Gruppe dich braucht? Gibt es etwas in dir, das auch ohne Best\u00e4tigung von Wert ist?`,
        uebung: `Verbringe heute einen Abend allein \u2013 ohne soziale Medien, ohne Verabredung. Beobachte, was in der Stille auftaucht. Was brauchst du wirklich?`,
        autopilotEN: `Without a community to serve or validation to receive, life feels flat and hollow. You instantly go hunting for new projects, new people, or new groups to join\u2014using activity to fill the void rather than facing it.`,
        bewusstheitEN: `What is left of you when no group needs you? Is there something inside you that holds inherent value, even without an audience?`,
        uebungEN: `Spend an evening entirely by yourself tonight\u2014no social media, no plans. Watch what bubbles up to the surface in the quiet. What is it that you truly need?`
      },
    },

    "SX2": {
      erschoepfung: {
        autopilot: `Die Ersch\u00f6pfung entsteht durch intensives Geben in der Verbindung \u2013 und wenn die Verbindung nicht das zur\u00fcckgibt, was erhofft wird, wird noch mehr investiert. Die Intensit\u00e4t steigt, w\u00e4hrend die Energie sinkt.`,
        bewusstheit: `Was w\u00fcrde passieren, wenn du gerade nichts von dir gibst \u2013 wenn du einfach empf\u00e4ngst? Kannst du das zulassen, ohne es sofort erwidern zu wollen?`,
        uebung: `Lass dich heute von jemandem etwas geben \u2013 eine Geste, ein Wort, ein Angebot. Nimm es an, ohne sofort zu erwidern. Bleib einen Moment in dem Gef\u00fchl des reinen Empfangens.`,
        autopilotEN: `Your exhaustion stems from pouring intense energy into a connection\u2014and when that relationship doesn't give back what you hoped for, you double down and invest even more. Your intensity spikes even as your energy drains away.`,
        bewusstheitEN: `What would happen if you didn't give anything of yourself right now\u2014if you simply received? Can you let that happen without immediately feeling the urge to match or return it?`,
        uebungEN: `Today, allow someone to give you something\u2014a gesture, a kind word, an offer of help. Accept it without offering anything in return. Sit for a moment with the raw sensation of pure receiving.`
      },
      konflikt: {
        autopilot: `Im Konflikt wird die emotionale Intensit\u00e4t hochgefahren. Die Frage dahinter: Liebst du mich wirklich? Siehst du mich? Vorw\u00fcrfe k\u00f6nnen leidenschaftlich und direkt sein \u2013 und manchmal den anderen \u00fcberfordern.`,
        bewusstheit: `Was willst du mit dieser Intensit\u00e4t gerade eigentlich sagen? Und w\u00e4re es m\u00f6glich, das direkt und einfach auszusprechen \u2013 ohne dramatischen Rahmen?`,
        uebung: `Sprich einmal in ruhigem Ton aus, was du dir w\u00fcnschst \u2013 nicht was der andere falsch gemacht hat. Beobachte, ob Ruhe etwas ver\u00e4ndert.`,
        autopilotEN: `In a conflict, you crank up the emotional intensity. The underlying question driving you is always: Do you really love me? Do you even see me? Your accusations can be incredibly passionate and direct\u2014often completely overwhelming the other person.`,
        bewusstheitEN: `What are you actually trying to say beneath all that intensity? Would it be possible to just state it directly and simply\u2014without the dramatic framework?`,
        uebungEN: `Try speaking what you desire in a completely calm, grounded tone, focusing strictly on your needs rather than what the other person did wrong. Observe whether this quiet approach shifts the dynamic.`
      },
      einsamkeit: {
        autopilot: `Einsamkeit wird als Mangel an Verschmelzung empfunden \u2013 als ob die Verbindung nicht intensiv genug ist oder der andere nicht wirklich da ist. Der Impuls: Noch intensiver werden, noch tiefer gehen, noch mehr fordern.`,
        bewusstheit: `Ist die Einsamkeit ein Zeichen, dass die Verbindung fehlt \u2013 oder ist sie auch ein Signal, dass du gerade dir selbst fremd bist?`,
        uebung: `Sitz heute eine Weile allein \u2013 bewusst, als Wahl. Frage dich: Wer bin ich, wenn niemand mich spiegelt? Was ist von mir \u00fcbrig, wenn die Verbindung gerade pausiert?`,
        autopilotEN: `Loneliness is experienced as a painful lack of total fusion\u2014as if the connection isn't intense enough or the other person isn't truly present. Your immediate instinct is to get even more intense, go deeper, and demand more.`,
        bewusstheitEN: `Is this loneliness a sign that the connection is missing, or is it a signal that you are currently disconnected from yourself?`,
        uebungEN: `Sit by yourself for a while today\u2014deliberately, as a conscious choice. Ask yourself: Who am I when no one else is mirroring me? What is left of me when the connection takes a temporary pause?`
      },
      entscheidung: {
        autopilot: `Die Entscheidung wird auf den wichtigsten Menschen hin ausgerichtet: Was w\u00fcrde er w\u00e4hlen? Was bringt uns einander n\u00e4her? Die eigene Stimme verstummt unter dem Gewicht der Verbindung.`,
        bewusstheit: `Welchen Teil dieser Entscheidung triffst du f\u00fcr dich \u2013 und welchen Teil triffst du f\u00fcr die Beziehung? Und bist du dir sicher, dass der andere das auch so will?`,
        uebung: `Triff die Entscheidung f\u00fcr dich allein \u2013 dann teile sie dem anderen mit. Nicht als Frage, sondern als Information. Beobachte, wie sich das anf\u00fchlt.`,
        autopilotEN: `You anchor your decision entirely around the most important person in your life: What would they choose? What will bring us closer together? Your own voice goes completely quiet under the massive weight of the relationship.`,
        bewusstheitEN: `Which part of this decision are you making for yourself, and which part are you making solely for the sake of the relationship? Are you absolutely sure the other person even wants you to sacrifice your preference?`,
        uebungEN: `Make this decision completely on your own first\u2014then simply state it to the other person. Share it as a neutral piece of information, not as a question. Notice how it feels to claim that space.`
      },
      beziehungskrise: {
        autopilot: `Die Intensit\u00e4t steigt: Man fordert mehr Ehrlichkeit, mehr N\u00e4he, mehr wirkliche Verbindung. Wenn der andere das nicht geben kann oder will, kommt der R\u00fcckzug \u2013 tief, verletzend, lang. Darunter liegt die Frage: Werde ich wirklich geliebt?`,
        bewusstheit: `Was w\u00e4re, wenn der andere gerade gibt, was er geben kann \u2013 und das kein Zeichen von Gleichg\u00fcltigkeit ist, sondern von Grenze? Kannst du das von hier aus sehen?`,
        uebung: `Frage den anderen: \u201eWas kannst du mir in dieser Krise wirklich geben?" Nicht was du willst \u2013 was er kann. Dann h\u00f6re die Antwort, ohne sie zu werten.`,
        autopilotEN: `The intensity escalates: you demand more radical honesty, more closeness, more real intimacy. If the other person can't or won't meet you there, you plunge into a deep, icy, punishing withdrawal. Beneath it all lies the core terror: Am I truly loved?`,
        bewusstheitEN: `What if the other person is currently giving you the absolute best they can\u2014and their limitation isn't a sign of indifference, but just a personal boundary? Can you look at it from that perspective?`,
        uebungEN: `Ask your partner directly: "What are you realistically able to give me in this crisis right now?" Focus on what they are capable of, not what you want. Listen to their answer without analyzing or judging it.`
      },
      selbstzweifel: {
        autopilot: `Der Selbstzweifel richtet sich auf die Kernfrage: Bin ich f\u00fcr diese Person wirklich begehrenswert? Wenn er nicht antwortet, nicht fragt, nicht zeigt \u2013 dann stimmt etwas mit mir nicht. Die innere Kritik wird zur Selbstzerst\u00f6rung.`,
        bewusstheit: `Ist der R\u00fcckzug des anderen ein Zeichen \u00fcber deinen Wert \u2013 oder ein Zeichen \u00fcber seinen Zustand? Kannst du beides voneinander trennen?`,
        uebung: `Schreibe auf, was an dir liebenswert ist \u2013 nicht was du dem anderen gibst, sondern was du f\u00fcr dich selbst bist. Lies es, wenn der Zweifel am lautesten ist.`,
        autopilotEN: `Your self-doubt zeroes in on one core question: Am I truly desirable to this person? If they don't respond, don't ask about you, or don't show affection, you conclude that something is fundamentally wrong with you. Your inner critic turns self-destructive.`,
        bewusstheitEN: `Is the other person's withdrawal actually a reflection of your worth, or is it just a reflection of their own internal state? Can you separate the two?`,
        uebungEN: `Write down what makes you inherently lovable\u2014not what you bring to the relationship or give to the other person, but who you are for yourself. Read it over when the doubt starts getting loud.`
      },
      verlust: {
        autopilot: `Der Verlust trifft am tiefsten, wenn er eine zentrale Beziehung betrifft. Der Schmerz wird in Hingabe umgewandelt: Man sucht N\u00e4he, gibt sich vollst\u00e4ndig \u2013 oder zieht sich ins Gegenteil zur\u00fcck, als Schutz vor weiterer Verletzung.`,
        bewusstheit: `Was brauchst du gerade wirklich \u2013 N\u00e4he oder Raum? Und kannst du das, was du brauchst, klar aussprechen?`,
        uebung: `Schreibe heute einen Brief an den Menschen oder das, was du verloren hast. Sag alles, was du nie sagen konntest. Kein Publikum, keine Erwartung \u2013 nur Wahrheit.`,
        autopilotEN: `Loss cuts you to the very core, especially when it involves a central relationship. You try to convert the pain into raw devotion: you chase closeness and surrender yourself completely\u2014or you flip to the exact opposite extreme, locking down as protection against further hurt.`,
        bewusstheitEN: `What do you actually need right now\u2014closeness or space? And can you clearly state what you need without playing a game?`,
        uebungEN: `Today, write a letter to the person or thing you have lost. Say everything you never got the chance to say. There is no audience, no expectations\u2014just your raw truth.`
      },
      ueberforderung: {
        autopilot: `\u00dcberforderung entsteht durch die Intensit\u00e4t des Gebens in der wichtigsten Beziehung: Man gibt alles, erwartet alles \u2013 und wenn das Gleichgewicht kippt, ersch\u00f6pft man sich durch Nachgeben oder durch R\u00fcckzug.`,
        bewusstheit: `Was gibst du gerade, das du selbst gar nicht hast? Und was w\u00fcrde es bedeuten, hier Grenzen zu ziehen?`,
        uebung: `Sag dem wichtigsten Menschen heute konkret, was du gerade brauchst \u2013 nicht was du geben kannst. Nur das: \u201eIch brauche gerade \u2026" Und lass ihn antworten.`,
        autopilotEN: `Overwhelm is triggered by the sheer intensity of your giving within your primary relationship. You give everything, expect everything, and when the equilibrium tips, you exhaust yourself by completely capitulating or aggressively pulling away.`,
        bewusstheitEN: `What are you trying to give right now that you don't even have in your own emotional tank? What would it look like to draw a firm line here?`,
        uebungEN: `Today, tell the most important person in your life exactly what you need right now\u2014not what you can do for them. Just say: "Right now, I need..." and give them the space to respond.`
      },
      stagnation: {
        autopilot: `Ohne intensive Verbindung f\u00fchlt sich das Leben flach und bedeutungslos an. Man sucht die n\u00e4chste Begegnung, die n\u00e4chste tiefe Verbindung \u2013 als Gegenmittel zur Leere.`,
        bewusstheit: `Was w\u00e4re, wenn die Leere gerade ein Atemraum ist \u2013 kein Zeichen, dass etwas falsch ist? Darf Stille auch Stille sein?`,
        uebung: `Sitz heute still mit dir selbst. Zwanzig Minuten, ohne Kontakt nach au\u00dfen. Frage dich: Was will ich wirklich \u2013 jenseits der n\u00e4chsten Verbindung?`,
        autopilotEN: `Without an intense connection to focus on, life feels completely flat, hollow, and meaningless. You immediately go hunting for the next spark, the next deep encounter\u2014using intensity as an antidote to the emptiness.`,
        bewusstheitEN: `What if the emptiness is actually just a quiet breathing room, rather than a sign that something is wrong? Can you let the stillness just be still?`,
        uebungEN: `Sit quietly with yourself today. Twenty minutes, entirely disconnected from the outside world. Ask yourself: What is it that I truly want\u2014outside of my next relationship?`
      },
    },

    "SE3": {
      erschoepfung: {
        autopilot: `Der Griff zur n\u00e4chsten Aufgabe kommt automatisch. Ersch\u00f6pfung wird als Effizienzproblem behandelt, nicht als Ruhebed\u00fcrfnis. Die L\u00f6sung: besser organisieren, schneller werden, die Aufgaben umstrukturieren.`,
        bewusstheit: `Was passiert mit dir \u2013 dem Menschen hinter den Aufgaben \u2013 wenn die Aufgaben pausieren? Wer bist du, wenn du gerade nicht leistest?`,
        uebung: `Sitz f\u00fcr eine kurze Zeit ohne Bildschirm, ohne Aufgabe. Beobachte, wie schnell dein Geist zur n\u00e4chsten Aufgabe wandert \u2013 und was darunter liegt, wenn er es nicht tut.`,
        autopilotEN: `Reaching for the next task happens automatically. Exhaustion is treated as an efficiency problem rather than a need for rest. Your solution: organize better, move faster, restructure the to-do list.`,
        bewusstheitEN: `What happens to you\u2014the human being behind the tasks\u2014when the work pauses? Who are you when you aren't producing anything?`,
        uebungEN: `Sit for a few minutes without a screen and without a task. Observe how quickly your mind drifts to the next thing that needs to get done\u2014and notice what lies underneath when it doesn't.`
      },
      konflikt: {
        autopilot: `Im Konflikt liegt der Impuls, ihn schnell zu l\u00f6sen oder zu \u00fcbergehen. Emotionen bremsen die Effizienz \u2013 also werden sie eher beiseitegelegt. Der Konflikt soll enden, damit man wieder vorankommen kann.`,
        bewusstheit: `Was wird gerade \u00fcbergangen, weil es die L\u00f6sung verlangsamen w\u00fcrde? Und w\u00e4re es nicht effizienter, den eigentlichen Kern anzusprechen?`,
        uebung: `Erlaube dir, einen Moment l\u00e4nger im Konflikt zu bleiben, als du es gewohnt bist. Frage dich: Was ist noch nicht gesagt, was wichtig w\u00e4re?`,
        autopilotEN: `In a conflict, your instinct is to resolve it quickly or simply move past it. Emotions put the brakes on efficiency, so they get pushed aside. You just want the conflict to end so everyone can get back to making progress.`,
        bewusstheitEN: `What is being bypassed right now just because it would slow down the solution? And wouldn't it actually be more efficient to address the real root of the issue?`,
        uebungEN: `Allow yourself to stay in a conflict a moment longer than you normally would. Ask yourself: What hasn't been said yet that actually matters?`
      },
      einsamkeit: {
        autopilot: `Einsamkeit wird kaum wahrgenommen, weil man besch\u00e4ftigt ist. Wenn sie sich meldet, ist die Antwort: mehr Termine, mehr Projekte, mehr Kontakte. Verbindung als Effizienzproblem \u2013 optimieren statt f\u00fchlen.`,
        bewusstheit: `Wann hast du zuletzt echten Kontakt gesp\u00fcrt \u2013 nicht Networking, nicht Koordination, sondern wirkliche Verbindung? Wie lange ist das her?`,
        uebung: `Verabrede dich mit jemandem \u2013 ohne Agenda. Kein Ziel, kein Ergebnis. Nur Zeit miteinander. Beobachte, wie sich das anf\u00fchlt.`,
        autopilotEN: `Loneliness is barely registered because you stay so busy. If it does surface, your response is to add more appointments, more projects, and more contacts. Connection is treated like an optimization problem\u2014something to manage rather than to feel.`,
        bewusstheitEN: `When was the last time you felt a genuine sense of contact\u2014not networking, not coordination, but real connection? How long has it been?`,
        uebungEN: `Make plans to hang out with someone\u2014with absolutely no agenda. No goal, no expected outcome. Just time together. Observe how that feels.`
      },
      entscheidung: {
        autopilot: `Man w\u00e4hlt die Option, die am besten aussieht und am schnellsten zum Ziel f\u00fchrt. Entscheidungen werden getroffen, um voranzukommen \u2013 nicht um inne zu halten. Zweifel werden \u00fcbersprungen, weil sie die Energie bremsen.`,
        bewusstheit: `Triffst du diese Entscheidung, weil sie richtig ist \u2013 oder weil du wieder in Bewegung kommen willst? Gibt es etwas, das du \u00fcbersiehst, weil du nicht innehalten m\u00f6chtest?`,
        uebung: `Halte die Entscheidung f\u00fcr 24 Stunden an. Frage dich am n\u00e4chsten Morgen nochmals: Ist das immer noch die richtige Wahl? Wenn ja \u2013 dann handle.`,
        autopilotEN: `You pick the option that looks best and gets you to the goal the fastest. Decisions are made to keep things moving forward, not to prompt reflection. Doubts are skipped over because they slow down your momentum.`,
        bewusstheitEN: `Are you making this decision because it's truly right, or simply because you want to get moving again? Is there something you're missing because you refuse to pause?`,
        uebungEN: `Put the decision on hold for 24 hours. The next morning, ask yourself again: Is this still the right choice? If it is, then take action.`
      },
      beziehungskrise: {
        autopilot: `Die Krise wird als Problem behandelt, das effizient gel\u00f6st werden muss. Man analysiert, schl\u00e4gt L\u00f6sungen vor, m\u00f6chte weiterkommen. Die eigentliche emotionale Dimension \u2013 was der andere wirklich f\u00fchlt, was man selbst f\u00fchlt \u2013 wird \u00fcbersprungen.`,
        bewusstheit: `Was wird gerade gel\u00f6st \u2013 das Problem oder die Beziehung? Und wei\u00df der andere, dass du wirklich da bist \u2013 nicht nur funktional?`,
        uebung: `Lege die L\u00f6sungen f\u00fcr einen Moment beiseite. Frage nur: \u201eWie geht es dir wirklich?" Und dann: warte, bis die echte Antwort kommt.`,
        autopilotEN: `A crisis is treated as a problem that needs to be solved efficiently. You analyze, propose solutions, and try to move past it. The actual emotional dimension\u2014what the other person is truly feeling, and what you are feeling\u2014gets skipped entirely.`,
        bewusstheitEN: `What are you trying to fix right now\u2014the problem, or the relationship? And does the other person know that you are genuinely present, not just functioning?`,
        uebungEN: `Set the solutions aside for a moment. Simply ask: "How are you really doing?" And then, wait until the real answer emerges.`
      },
      selbstzweifel: {
        autopilot: `Der Selbstzweifel tarnt sich als Leistungsproblem: Ich habe nicht gut genug abgeschnitten, war nicht effizient genug, habe mich schlecht pr\u00e4sentiert. Die tiefere Frage \u2013 Bin ich genug? \u2013 bleibt unausgesprochen unter den Aufgaben.`,
        bewusstheit: `Was w\u00e4re, wenn du gerade nichts leisten w\u00fcrdest \u2013 was bliebe von dir \u00fcbrig? Und w\u00e4re das genug?`,
        uebung: `Sitz heute f\u00fcnf Minuten ohne Aufgabe. Wenn der Selbstzweifel kommt, benenne ihn: \u201eDas ist der Leistungszweifel." Dann frage: Was bin ich, wenn er recht hat \u2013 und was bin ich, wenn er unrecht hat?`,
        autopilotEN: `Self-doubt disguises itself as a performance issue: I didn't do well enough, I wasn't efficient enough, I presented myself poorly. The deeper question\u2014Am I enough?\u2014remains buried under the workload.`,
        bewusstheitEN: `What if you didn't achieve anything right now\u2014what would be left of you? And would that person be enough?`,
        uebungEN: `Sit today for five minutes with no task. When the self-doubt creeps in, label it: "That is performance anxiety." Then ask: Who am I if it's right\u2014and who am I if it's wrong?`
      },
      verlust: {
        autopilot: `Verlust wird durch Aktivit\u00e4t \u00fcberbr\u00fcckt: Das n\u00e4chste Projekt, die n\u00e4chste Aufgabe, das n\u00e4chste Ziel. Der Schmerz gilt als Hindernis f\u00fcr Produktivit\u00e4t. Irgendwann bricht er an unerwarteter Stelle durch.`,
        bewusstheit: `Was w\u00e4re, wenn du heute nichts leistest \u2013 nur trauerst? Was w\u00fcrde das \u00fcber dich aussagen, und ist das wirklich wahr?`,
        uebung: `Nimm dir heute eine Stunde ohne Aufgabe. Wenn der Schmerz kommt, lass ihn. Wenn er nicht kommt, sitz trotzdem in der Stille. Beides ist erlaubt.`,
        autopilotEN: `Loss is bridged by sheer activity: the next project, the next task, the next goal. Pain is viewed as an obstacle to productivity. Eventually, it breaks through in an entirely unexpected place.`,
        bewusstheitEN: `What if you didn't accomplish anything today, and just grieved? What would that say about you, and is that story actually true?`,
        uebungEN: `Set aside an hour today with no tasks. If the pain comes up, let it. If it doesn't, just sit in the stillness anyway. Both are allowed.`
      },
      ueberforderung: {
        autopilot: `\u00dcberforderung wird ignoriert oder als Anreiz benutzt: Mehr Effizienz, bessere Systeme, schnellere Prozesse. Man optimiert sich durch den Druck, statt innezuhalten. Irgendwann streikt der K\u00f6rper.`,
        bewusstheit: `Was w\u00e4re, wenn Innehalten heute das Produktivste w\u00e4re, was du tun kannst? Was kostet dich das Weitermachen wirklich?`,
        uebung: `Lege heute eine bewusste Pause ein \u2013 kein Arbeiten, kein Optimieren, keine Planung. Zwanzig Minuten. Sitz. Beobachte, wie lange es dauert, bis du unruhig wirst.`,
        autopilotEN: `Being overwhelmed is either ignored or used as fuel: more efficiency, better systems, faster processes. You optimize your way through the pressure instead of stopping. Eventually, your body goes on strike.`,
        bewusstheitEN: `What if pausing today was actually the most productive thing you could possibly do? What is pushing through really costing you?`,
        uebungEN: `Take a deliberate break today\u2014no working, no optimizing, no planning. Just twenty minutes. Sit there, and observe how long it takes before you start feeling restless.`
      },
      stagnation: {
        autopilot: `Ohne Aufgaben und Erfolge droht Identit\u00e4tsverlust: Wer bin ich, wenn ich gerade nichts leiste? Die Stagnation wird mit neuen Projekten bek\u00e4mpft statt ausgehalten.`,
        bewusstheit: `Wer bist du, wenn du gerade nichts erreichst? Gibt es etwas an dir, das unabh\u00e4ngig von Leistung besteht?`,
        uebung: `Schreibe heute auf: Wer bin ich \u2013 ohne meine Leistungen, ohne meine Erfolge, ohne meine Ziele? Lass die Antwort kommen, auch wenn sie zun\u00e4chst leer wirkt.`,
        autopilotEN: `Without tasks and successes, you face an identity crisis: Who am I if I'm not achieving anything right now? Stagnation is aggressively fought off with new projects instead of being endured.`,
        bewusstheitEN: `Who are you when you aren't hitting milestones? Is there a part of you that exists completely independent of your performance?`,
        uebungEN: `Today, write down the answer to this question: Who am I without my achievements, without my successes, and without my goals? Let the answer come, even if it feels empty at first.`
      },
    },

    "SO3": {
      erschoepfung: {
        autopilot: `Das Image muss aufrechterhalten werden \u2013 auch wenn die Energie fehlt. Nach au\u00dfen hin l\u00e4uft alles. Ersch\u00f6pfung zeigt sich nicht, weil sie das Bild besch\u00e4digen w\u00fcrde. Man performt weiter, bis man wirklich nicht mehr kann.`,
        bewusstheit: `Welches Bild von dir h\u00e4ltst du gerade aufrecht \u2013 und f\u00fcr wen? Wer w\u00fcrde dich noch sehen, wenn dieses Bild einen Moment fiele?`,
        uebung: `Gestehe dir gegen\u00fcber ehrlich ein, wie es dir wirklich geht. Kein Rahmen, kein Publikum. Nur du und dein tats\u00e4chlicher Zustand \u2013 benenne ihn, ohne ihn sofort zu korrigieren.`,
        autopilotEN: `The image must be maintained at all costs\u2014even when you are completely out of energy. To the outside world, everything is running smoothly. Exhaustion is never shown because it would damage the presentation. You keep performing until you hit an absolute wall.`,
        bewusstheitEN: `What version of yourself are you working so hard to project right now, and for whose benefit? Who would still truly see you if that curtain dropped for just a moment?`,
        uebungEN: `Radically admit to yourself how you are actually doing. No spin, no audience. Just you and your actual, raw state\u2014name it for what it is, without trying to fix it right away.`
      },
      konflikt: {
        autopilot: `Im Konflikt r\u00fcckt schnell die Frage in den Vordergrund: Wie wirke ich dabei? Die Verteidigung des eigenen Bildes kann wichtiger werden als die L\u00f6sung des eigentlichen Problems.`,
        bewusstheit: `Verteidigst du dich gerade \u2013 oder verteidigst du dein Bild? Was w\u00e4re, wenn du den Unterschied klar h\u00e4ttest?`,
        uebung: `Frage dich im Konflikt: Was w\u00fcrde ich sagen, wenn es keine Zuschauer g\u00e4be? Sprich dann aus diesem Ort heraus.`,
        autopilotEN: `In a conflict, the spotlight quickly shifts to the question: How do I look right now? Defending your image can easily become more important than actually resolving the root issue.`,
        bewusstheitEN: `Are you defending yourself right now, or are you defending your reputation? What would shift if you could clearly see the difference between the two?`,
        uebungEN: `In the middle of a conflict, ask yourself: What would I say right now if there were absolutely no onlookers? Speak directly from that place.`
      },
      einsamkeit: {
        autopilot: `Einsamkeit ist schwer zu ertragen, weil man das Gef\u00fchl hat, ohne Publikum zu verschwinden. Der Impuls: sichtbarer werden, mehr leisten, das Bild aufpolieren \u2013 solange die anderen einen sehen, ist man vorhanden.`,
        bewusstheit: `Bist du auch ohne Publikum jemand? Was bleibt von dir, wenn niemand zuschaut?`,
        uebung: `Verbringe heute Zeit mit dir \u2013 ohne Spiegel, ohne Auftritt. Schreibe auf, wer du bist, wenn niemand zuschaut. Nicht deine Errungenschaften \u2013 du.`,
        autopilotEN: `Loneliness is incredibly difficult to tolerate because it feels like you vanish when there's no audience. Your immediate instinct is to become more visible, achieve more, and polish your image\u2014believing that as long as others see you, you exist.`,
        bewusstheitEN: `Do you still exist when the spotlight is turned off? What is left of you when absolutely no one is watching?`,
        uebungEN: `Spend some time with yourself today\u2014no mirrors, no performance. Write down who you are when you don't have an audience. Don't list your achievements; focus strictly on you.`
      },
      entscheidung: {
        autopilot: `Man entscheidet nach Au\u00dfenwirkung: Was kommt gut an? Was st\u00e4rkt das Bild? Die innere Frage ist weniger Was ist richtig? und mehr Was wirkt gut? \u2013 was die Entscheidung manchmal in eine Richtung zieht, die von innen nicht wirklich stimmt.`,
        bewusstheit: `Was w\u00fcrdest du w\u00e4hlen, wenn es niemand sehen w\u00fcrde \u2013 kein Image, keine Reaktion der anderen, kein Applaus? Kennst du diese Antwort?`,
        uebung: `Schreibe die Entscheidung auf, die du vor dir selbst als richtig erkennst \u2013 auch wenn sie nicht beeindruckend wirkt. Dann \u00fcberlege, ob du den Mut hast, sie trotzdem zu treffen.`,
        autopilotEN: `You make decisions based on external optics: What looks good? What enhances my status? The internal question isn't What is right? but rather What plays well?\u2014which often pulls your choices in a direction that doesn't feel true to you.`,
        bewusstheitEN: `What would you choose if no one ever found out\u2014no status points, no external validation, no applause? Do you even know what that answer is?`,
        uebungEN: `Write down the decision that you know deep down is right for you, even if it looks entirely unimpressive on paper. Then, ask yourself if you have the courage to choose it anyway.`
      },
      beziehungskrise: {
        autopilot: `Die Krise wird nach au\u00dfen unsichtbar gehalten \u2013 das Bild der Beziehung muss stimmen. Intern arbeitet man an einer L\u00f6sung, die das Image rettet. Was der andere wirklich f\u00fchlt, tritt hinter die Frage zur\u00fcck: Wie stehen wir da?`,
        bewusstheit: `Tr\u00e4gst du gerade die Krise dieser Beziehung \u2013 oder tr\u00e4gst du das Bild der Beziehung? Und wei\u00dft du, was der andere wirklich braucht?`,
        uebung: `F\u00fchre heute ein Gespr\u00e4ch, das nichts l\u00f6st und nichts optimiert \u2013 nur ehrlich fragt: Wie geht es uns wirklich? Ohne Reparaturimpuls. Nur wahrnehmen.`,
        autopilotEN: `The crisis is kept completely invisible to the outside world\u2014the optics of the relationship must look perfect. Internally, you work tirelessly on a solution that saves face. What the other person actually feels takes a back seat to the question: How do we look to others?`,
        bewusstheitEN: `Are you currently holding up the weight of this relationship, or are you just holding up the illusion of it? Do you actually know what your partner needs right now?`,
        uebungEN: `Have a conversation today that aims to solve nothing and optimize nothing. Simply ask: "How are we actually doing?" Resist the urge to fix it. Just listen.`
      },
      selbstzweifel: {
        autopilot: `Der Selbstzweifel dreht sich ums Bild: Komme ich wirklich gut an? Sehen sie mich richtig? Der innere Kritiker vergleicht das eigene Image mit dem der anderen und findet immer eine L\u00fccke.`,
        bewusstheit: `Was w\u00e4re, wenn du gerade nicht das Bild verteidigst, sondern einfach da bist? W\u00fcrde irgendjemand, der dir wirklich nahe ist, dich dann weniger sch\u00e4tzen?`,
        uebung: `Sag heute jemandem, dem du vertraust, ehrlich, wie es dir geht \u2013 ohne Image, ohne Optimierung. Nur die Wahrheit. Beobachte, was das in dir bewegt.`,
        autopilotEN: `Your self-doubt revolves entirely around your image: Am I being well-received? Do they see me the way I want them to? Your inner critic constantly compares your public profile with everyone else's and always finds a gap.`,
        bewusstheitEN: `What if you dropped the defensive exterior right now and just allowed yourself to be present? Would anyone who truly loves you value you any less?`,
        uebungEN: `Tell someone you trust completely exactly how you're doing today\u2014no filters, no positive spin. Just the unvarnished truth. Notice what that shifts inside you.`
      },
      verlust: {
        autopilot: `Man zeigt sich stark, auch in der Trauer: Das Bild des Funktionierens bleibt aufrecht. Innerlich l\u00e4uft der Schmerz weiter \u2013 aber er hat keinen Auftritt, weil er das Bild st\u00f6rt.`,
        bewusstheit: `Was w\u00fcrden die wichtigsten Menschen in deinem Leben sagen, wenn du heute Schw\u00e4che zeigen w\u00fcrdest? Und w\u00e4re das wirklich so schlimm?`,
        uebung: `Sag heute einem Menschen, dem du vertraust, wie es dir wirklich geht \u2013 ohne das Bild zu sch\u00fctzen. Nur die Wahrheit \u00fcber deinen Schmerz.`,
        autopilotEN: `You stay strong, even in the midst of grief; the appearance of high-level functioning must be maintained. Internally, the pain runs deep, but it isn't allowed center stage because it disrupts the narrative of your competence.`,
        bewusstheitEN: `What would the people who matter most to you say if you showed weakness today? Would the world actually fall apart if you did?`,
        uebungEN: `Confide in someone you trust about how you are truly holding up right now\u2014without trying to protect your image. Just give them the raw truth about your pain.`
      },
      ueberforderung: {
        autopilot: `Man zeigt nach au\u00dfen Kompetenz und Kontrolle, auch wenn innen alles zu viel wird. Das Bild des Funktionierens bleibt aufrecht \u2013 bis der Zusammenbruch unvermeidlich kommt.`,
        bewusstheit: `Was w\u00fcrde passieren, wenn du heute jemandem sagst, dass es zu viel ist? W\u00fcrde das wirklich das Bild zerst\u00f6ren \u2013 oder nur ehrlich machen?`,
        uebung: `Sag heute einem Menschen, dem du vertraust: \u201eEs ist gerade zu viel." Nur das. Kein Plan, keine L\u00f6sung. Beobachte, was sich danach ver\u00e4ndert.`,
        autopilotEN: `You project absolute competence and total control to the outside world, even when everything inside feels like it's collapsing. The facade of functioning stays up right until a breakdown becomes inevitable.`,
        bewusstheitEN: `What would happen if you admitted to someone today that it's just too much? Would it really destroy your image, or would it just make you human?`,
        uebungEN: `Tell someone you trust explicitly: "It's just too much right now." Stop there. No plan, no immediate solution. Just observe what changes after you say it.`
      },
      stagnation: {
        autopilot: `Stagnation bedroht das Bild: Man wirkt nicht mehr dynamisch, vorw\u00e4rtsgewandt, erfolgreich. Man versucht, den Stillstand nach au\u00dfen zu verbergen \u2013 und ersch\u00f6pft sich dabei.`,
        bewusstheit: `Was w\u00e4re, wenn du heute jemandem sagst, dass du gerade festh\u00e4ngst? W\u00fcrde das wirklich das Bild zerst\u00f6ren?`,
        uebung: `Gesteh heute einem Menschen, dem du vertraust: \u201eIch wei\u00df gerade nicht, wohin." Nur das. Kein Plan, keine L\u00f6sung. Beobachte, was dann passiert.`,
        autopilotEN: `Stagnation feels like a direct threat to your image: you no longer look dynamic, forward-moving, or successful. You exhaust yourself trying to camouflage the standstill from the outside world.`,
        bewusstheitEN: `What would happen if you admitted to someone today that you're currently feeling stuck? Would that truly shatter the picture they have of you?`,
        uebungEN: `Confess to someone you trust today: "I honestly don't know where I'm headed right now." Leave out the plan or the fix. Observe what happens next.`
      },
    },

    "SX3": {
      erschoepfung: {
        autopilot: `Die Ersch\u00f6pfung wird \u00fcberspielt durch Intensit\u00e4t und Charisma \u2013 besonders gegen\u00fcber dem Menschen, der einem wichtig ist. Man gibt das Bild des Starken, des Unverzichtbaren. Loslassen f\u00fchlt sich wie Verlieren an.`,
        bewusstheit: `Was w\u00fcrde dein wichtigster Mensch sehen, wenn du dich gerade nicht verstellst? Und w\u00e4re das so schlimm?`,
        uebung: `Teile mit jemandem, dem du nahe bist, ehrlich mit, wie ersch\u00f6pft du bist \u2013 nicht als Schw\u00e4che verkleidet, sondern als Tatsache. Beobachte, was das in dir und in der Verbindung bewegt.`,
        autopilotEN: `You mask your exhaustion with intensity and charisma\u2014especially around the person who matters most to you. You project an image of strength and indispensability. Letting your guard down feels like losing.`,
        bewusstheitEN: `What would the person closest to you see if you stopped pretending right now? And would that really be so terrible?`,
        uebungEN: `Honestly share with someone close to you just how exhausted you are\u2014not disguised as a weakness, but simply stated as a fact. Observe what that shifts inside you and within the connection.`
      },
      konflikt: {
        autopilot: `Im Konflikt entsteht ein Gewinnimpuls. Es geht nicht mehr nur um das Thema \u2013 sondern darum, die bessere Position zu halten. Argumente werden eingesetzt wie Werkzeuge, um den anderen zu \u00fcberzeugen oder zu \u00fcbertrumpfen.`,
        bewusstheit: `Willst du gerade Recht behalten \u2013 oder willst du verstanden werden? Das ist nicht dasselbe.`,
        uebung: `Lass in diesem Konflikt einmal die st\u00e4rkste Position des anderen gelten. Sage laut: \u201eDa hast du recht.\u201d Beobachte, was das in dir ausl\u00f6st.`,
        autopilotEN: `In a conflict, an impulse to win takes over. It stops being just about the issue at hand and becomes about maintaining the upper hand. Arguments are weaponized as tools to convince or outmaneuver the other person.`,
        bewusstheitEN: `Do you want to be right in this moment, or do you want to be understood? Those are two very different things.`,
        uebungEN: `For once in this conflict, validate the other person's strongest point. Say out loud, "You're right about that." Observe what that stirs up inside you.`
      },
      einsamkeit: {
        autopilot: `Einsamkeit best\u00e4tigt ein tiefes inneres Bild: Ich bin letztlich nicht begehrenswert. Der Impuls: noch charismatischer werden, noch attraktiver, noch faszinierender \u2013 solange der andere begehrt, ist man nicht allein.`,
        bewusstheit: `Was w\u00e4re, wenn jemand dich in diesem Moment m\u00f6gen w\u00fcrde \u2013 einfach so, ohne Fassade? K\u00f6nntest du das glauben?`,
        uebung: `Schreib heute auf, was du an dir selbst magst \u2013 nicht was du kannst, nicht was du leistest. Was ist liebenswert an dir, auch im Alleinsein?`,
        autopilotEN: `Loneliness validates a deep-seated inner narrative: Ultimately, I am not desirable. Your instinct is to become even more charismatic, more attractive, and more fascinating\u2014believing that as long as the other person desires you, you aren't truly alone.`,
        bewusstheitEN: `What if someone could love you in this exact moment\u2014just as you are, without the facade? Could you actually let yourself believe that?`,
        uebungEN: `Today, write down what you appreciate about yourself\u2014not what you can do, and not what you achieve. What is inherently lovable about you, even when you are completely alone?`
      },
      entscheidung: {
        autopilot: `Man entscheidet auf den wichtigsten Menschen hin: Was beeindruckt ihn? Was macht mich in seinen Augen attraktiver, wertvoller, unverzichtbarer? Die eigene Stimme wird dabei kaum geh\u00f6rt.`,
        bewusstheit: `Entscheidest du gerade f\u00fcr dich \u2013 oder f\u00fcr das Bild, das du beim anderen erzeugen willst? Was w\u00e4re deine Wahl, wenn niemand sie bewertet?`,
        uebung: `Schreibe auf, was du w\u00e4hlen w\u00fcrdest, wenn diese Person die Entscheidung nie erfahren w\u00fcrde. Diese Antwort ist n\u00e4her an dir selbst.`,
        autopilotEN: `You cater your decisions to the person who matters most to you: What will impress them? What makes me look more attractive, valuable, or indispensable in their eyes? Your own voice is barely even audible.`,
        bewusstheitEN: `Are you making this choice for yourself, or for the image you want to create in their mind? What would you choose if absolutely no one were scoring it?`,
        uebungEN: `Write down what you would choose if this person were never going to find out about your decision. That answer is much closer to your true self.`
      },
      beziehungskrise: {
        autopilot: `Die Krise wird zur Probe: Steht er wirklich zu mir? H\u00e4lt die Verbindung, wenn es schwierig wird? Man fordert N\u00e4he, Klarheit, Bekenntnis \u2013 und wenn der andere nicht liefert, zieht man sich zur\u00fcck oder eskaliert.`,
        bewusstheit: `Was w\u00e4re, wenn der andere in dieser Krise einfach \u00fcberfordert ist \u2013 und das kein Zeichen ist, dass er dich nicht liebt?`,
        uebung: `Frage den anderen heute konkret: \u201eWas brauchst du gerade von mir \u2013 in einem Satz?" Dann h\u00f6re zu, ohne zu werten.`,
        autopilotEN: `The crisis becomes a trial: Are they truly committed to me? Does this connection hold up when things get heavy? You demand closeness, clarity, and reassurance\u2014and if the other person doesn't deliver, you either freeze them out or escalate.`,
        bewusstheitEN: `What if the other person is simply overwhelmed by this crisis right now\u2014and it isn't actually a sign that they don't love you?`,
        uebungEN: `Today, ask your partner a specific question: "What do you need from me right now\u2014in a single sentence?" Then just listen, without evaluating their answer.`
      },
      selbstzweifel: {
        autopilot: `Der Selbstzweifel richtet sich auf Attraktivit\u00e4t und Wirkung beim wichtigsten Menschen: Bin ich wirklich fesselnd genug f\u00fcr ihn? Verblasst meine Anziehung? Der innere Kritiker vergleicht und findet immer einen Mangel.`,
        bewusstheit: `Was w\u00e4re, wenn der andere dich nicht wegen deiner Wirkung liebt \u2013 sondern wegen dir? Und kannst du das in diesem Moment glauben?`,
        uebung: `Frage den anderen heute: \u201eWas sch\u00e4tzt du an mir \u2013 nicht was ich tue, sondern wer ich bin?\u201c H\u00f6re die Antwort, ohne sie sofort zu relativieren.`,
        autopilotEN: `Your self-doubt targets your attractiveness and impact on the person who matters most: Am I truly captivating enough for them? Is my spark fading? Your inner critic constantly compares you to others and always finds a flaw.`,
        bewusstheitEN: `What if the other person doesn't love you for the effect you have on them, but simply for who you are? Can you open yourself up to believing that right now?`,
        uebungEN: `Ask your partner today: "What do you value about me\u2014not what I do, but who I am?" Listen to the answer without immediately deflecting or downplaying it.`
      },
      verlust: {
        autopilot: `Verlust \u2013 vor allem von Beziehungen oder Status \u2013 trifft tief. Man reagiert mit R\u00fcckzug oder mit verst\u00e4rkter Anstrengung: Noch besser werden, noch attraktiver, noch unersetzbarer.`,
        bewusstheit: `Was w\u00e4re, wenn du in diesem Verlust nicht mehr oder besser werden musst \u2013 sondern einfach trauern darfst? Was bleibt, wenn du aufh\u00f6rst zu gl\u00e4nzen?`,
        uebung: `Schreibe heute auf, was dieser Verlust dir wirklich bedeutet \u2013 nicht was er f\u00fcr dein Bild bedeutet, sondern was er f\u00fcr dich als Mensch bedeutet.`,
        autopilotEN: `Loss\u2014especially a loss of status or the breakdown of a relationship\u2014hits you deeply. You react by either withdrawing entirely or doubling down on your efforts: trying to be even better, more attractive, and more irreplaceable.`,
        bewusstheitEN: `What if you didn't have to try harder or be better in the face of this loss, but were simply allowed to grieve? What remains when you stop trying to shine?`,
        uebungEN: `Today, write down what this loss actually means to you\u2014not what it means for your image, but what it means to you deeply as a human being.`
      },
      ueberforderung: {
        autopilot: `\u00dcberforderung wird in Leistung f\u00fcr die wichtigste Person investiert: Man will beeindrucken, unersetztbar sein, gl\u00e4nzen \u2013 auch wenn man innerlich schon am Limit ist.`,
        bewusstheit: `Was w\u00e4re, wenn der andere dich auch dann sch\u00e4tzt, wenn du gerade nicht gl\u00e4nzt? Darf das sein?`,
        uebung: `Sag dem wichtigsten Menschen heute ehrlich, wie es dir geht \u2013 ohne Hochglanz, ohne Leistung. Nur: \u201eIch bin gerade ersch\u00f6pft." Dann schau, was er antwortet.`,
        autopilotEN: `When overwhelmed, you channel that pressure into performing for your primary person: you want to impress them, be irreplaceable, and shine\u2014even when you are internally at your absolute limit.`,
        bewusstheitEN: `What if the other person cherishes you even when you aren't putting on a stellar performance? Are you allowed to just be?`,
        uebungEN: `Tell the person who matters most to you honestly how you are doing today\u2014no polish, no performance. Simply say, "I'm just really overwhelmed right now." Then see how they respond.`
      },
      stagnation: {
        autopilot: `Stagnation f\u00fchlt sich wie das Ende der Anziehungskraft an: Man verliert das Gl\u00e4nzen, die Energie, die Wirkung. Der R\u00fcckzug oder die Suche nach neuem Feuer beginnt.`,
        bewusstheit: `Was w\u00e4re, wenn der andere dich auch in der stillen Phase sch\u00e4tzt \u2013 ohne Glanz, ohne Leistung? Darf das sein?`,
        uebung: `Verbring heute Zeit mit dem wichtigsten Menschen \u2013 ohne Inszenierung, ohne Leistung. Nur da sein. Beobachte, was dann zwischen euch entsteht.`,
        autopilotEN: `Stagnation feels like the death of your magnetic pull: it feels like you've lost your luster, your energy, and your impact. You immediately start to withdraw or go hunting for a new spark.`,
        bewusstheitEN: `What if the other person values you just as much during this quiet phase\u2014without the high energy and achievements? Can you allow that to be true?`,
        uebungEN: `Spend time with the person who matters most to you today without any staging or performing. Just be in the room together. Observe what naturally unfolds between you.`
      },
    },

    "SE4": {
      erschoepfung: {
        autopilot: `Die Ersch\u00f6pfung wird in Stille ertragen. Man klagt nicht, man zeigt wenig \u2013 aber man leidet. Der R\u00fcckzug nach innen wird st\u00e4rker, und irgendwo best\u00e4tigt die Ersch\u00f6pfung ein altes Bild: das Leben ist schwer, und man tr\u00e4gt es eben.`,
        bewusstheit: `Tr\u00e4gst du diese Ersch\u00f6pfung alleine, weil du glaubst, dass niemand sie wirklich verstehen w\u00fcrde? Was w\u00e4re, wenn jemand sie tragen k\u00f6nnte \u2013 zusammen mit dir?`,
        uebung: `Schreibe auf, was du gerade tr\u00e4gst \u2013 ohne Sch\u00f6nreden, ohne Relativieren. Lies es dann laut vor, als w\u00fcrdest du es einem guten Menschen erz\u00e4hlen. Beobachte, wie sich das ver\u00e4ndert.`,
        autopilotEN: `Exhaustion is endured in silence. You don't complain, you show very little\u2014but you suffer. Your internal withdrawal deepens, and at some level, the exhaustion confirms an old narrative: life is heavy, and this is just the burden you carry.`,
        bewusstheitEN: `Are you carrying this exhaustion alone because you believe no one would truly understand it? What if someone could carry it\u2014right alongside you?`,
        uebungEN: `Write down everything you are carrying right now\u2014no sugarcoating, no downplaying. Then read it out loud, as if you were telling it to a trusted friend. Observe how that shifts things.`
      },
      konflikt: {
        autopilot: `Im Konflikt zieht man sich nach innen zur\u00fcck. Die Verletzung wird getragen, manchmal lange, ohne dass der andere erf\u00e4hrt, wie tief sie sitzt. Aussen wenig \u2013 innen viel.`,
        bewusstheit: `Was tr\u00e4gst du gerade in dir, das der andere nicht weiss \u2013 und was w\u00fcrde passieren, wenn du es sagst?`,
        uebung: `Benenne einmal, was dich verletzt hat \u2013 ruhig, klar, ohne Dramatik. Nur: \u201eDas hat mich verletzt, weil ...\u201d Lass den Satz offen, wenn n\u00f6tig.`,
        autopilotEN: `In a conflict, you retreat inward. You carry the hurt, sometimes for a very long time, without the other person ever knowing how deeply it cuts. Very little on the outside\u2014a universe on the inside.`,
        bewusstheitEN: `What are you currently holding inside that the other person has no idea about\u2014and what would happen if you actually said it?`,
        uebungEN: `Name what hurt you, just this once\u2014calmly, clearly, without any drama. Simply say: "That hurt me because..." Leave the sentence open-ended if you need to.`
      },
      einsamkeit: {
        autopilot: `Einsamkeit wird still ertragen \u2013 und gleichzeitig vertieft. Man wendet sich nach innen, pflegt die Melancholie, schreibt, tr\u00e4umt, f\u00fchlt. Das Alleinsein bekommt eine dunkle Sch\u00f6nheit, die den Kontakt nach au\u00dfen noch schwerer macht.`,
        bewusstheit: `Sch\u00fctzt dich der R\u00fcckzug gerade \u2013 oder h\u00e4lt er dich dort, wo du leidest? Was w\u00e4re der erste kleine Schritt nach drau\u00dfen?`,
        uebung: `Schreibe einen Brief an jemanden, den du vermisst \u2013 und schicke ihn ab. Kein langer Text. Nur: Ich denke an dich.`,
        autopilotEN: `Loneliness is quietly endured\u2014and, at the same time, deepened. You turn inward, nurturing the melancholy, writing, dreaming, feeling. The solitude takes on a dark beauty, which makes reaching out to the outside world even harder.`,
        bewusstheitEN: `Is your withdrawal protecting you right now, or is it keeping you trapped where you suffer? What would a single, tiny step outward look like?`,
        uebungEN: `Write a note to someone you miss\u2014and actually send it. It doesn't need to be long. Just: I'm thinking of you.`
      },
      entscheidung: {
        autopilot: `Jede Option wird innerlich aufgeladen: Was bedeutet diese Wahl \u00fcber mich? Was geht f\u00fcr immer verloren, wenn ich mich anders entscheide? Die Entscheidung wird zur existenziellen Frage, statt zu einer konkreten Wahl.`,
        bewusstheit: `Wie viel Bedeutung l\u00e4dst du auf diese Entscheidung? Und ist sie wirklich so endg\u00fcltig \u2013 oder f\u00fchlt sie sich nur so an?`,
        uebung: `Schreibe auf, was du verlieren w\u00fcrdest \u2013 bei jeder Option. Dann schreibe auf, was du gewinnen w\u00fcrdest. Lass beide Listen gleichwertig nebeneinander stehen.`,
        autopilotEN: `Every option becomes loaded with internal meaning: What does this choice say about who I am? What will be lost forever if I choose differently? A simple decision becomes an existential crisis rather than a practical choice.`,
        bewusstheitEN: `How much weight are you forcing onto this decision? And is it truly that final\u2014or does it just feel that way?`,
        uebungEN: `Write down what you would lose with each option. Then write down what you would gain. Let both lists sit side-by-side, giving them equal value.`
      },
      beziehungskrise: {
        autopilot: `Man tr\u00e4gt die Krise still \u2013 innerlich sehr viel, \u00e4u\u00dferlich wenig. Die Verletzung wird gehalten, manchmal \u00fcber Wochen. Wenn sie sich dann \u00e4u\u00dfert, kommt sie tief und schwer.`,
        bewusstheit: `Tr\u00e4gst du diese Krise allein, weil du glaubst, dass der andere sie nicht wirklich verstehen kann \u2013 oder hast du es wirklich versucht?`,
        uebung: `Sag dem anderen heute in einem ruhigen Moment, was dich in der Beziehung gerade wirklich bewegt \u2013 nicht die Anklage, den eigentlichen Schmerz. Nur einen Satz.`,
        autopilotEN: `You carry the crisis silently\u2014swallowing an immense amount internally while showing very little on the outside. You hold onto the hurt, sometimes for weeks. When it finally surfaces, it comes out deep, heavy, and intense.`,
        bewusstheitEN: `Are you carrying this crisis alone because you believe the other person can't truly understand it\u2014or have you actually given them a real chance to try?`,
        uebungEN: `In a quiet moment today, tell your partner what is truly weighing on you in the relationship\u2014not an accusation, but the actual core pain. Just one sentence.`
      },
      selbstzweifel: {
        autopilot: `Der Selbstzweifel ist existenziell: Ich bin grundlegend anders, und anders bedeutet: defekt. Das innere Narrativ vertieft sich: Andere haben es leichter, f\u00fcr sie ist das Leben zug\u00e4nglicher. Ich bin zu viel oder zu wenig \u2013 nie genau richtig.`,
        bewusstheit: `Was w\u00e4re, wenn \u201eanders sein\u201c keine Defizit-Aussage ist \u2013 sondern einfach eine Beschreibung? Wer hat gesagt, dass anders gleich falsch ist?`,
        uebung: `Schreibe drei Dinge auf, die an deiner Art zu sein wertvoll sind \u2013 nicht trotz deiner Tiefe, sondern wegen ihr. Lies sie laut vor und lass sie einen Moment gelten.`,
        autopilotEN: `Your self-doubt is existential: I am fundamentally different, and different means defective. The inner narrative deepens: Others have it easier; life is just more accessible to them. I am either too much or not enough\u2014never just right.`,
        bewusstheitEN: `What if "being different" isn't a statement about a deficit\u2014but simply a description? Who decided that different automatically means wrong?`,
        uebungEN: `Write down three things about your way of being that are valuable\u2014not despite your depth, but precisely because of it. Read them out loud and let them carry weight for a moment.`
      },
      verlust: {
        autopilot: `Verlust wird tief gef\u00fchlt und oft allein getragen. Der Schmerz wird zum Kern der Identit\u00e4t: Ich bin derjenige, der verliert, dem etwas fehlt. Die Trauer kann sich verfestigen statt zu durchflie\u00dfen.`,
        bewusstheit: `Was w\u00e4re, wenn dieser Verlust dich nicht definiert \u2013 sondern nur ber\u00fchrt? Und gibt es etwas jenseits des Schmerzes, das auch zu dir geh\u00f6rt?`,
        uebung: `Schreibe heute auf: Was habe ich durch diesen Verlust erfahren, das ich vorher nicht wusste? Nicht um den Schmerz zu versch\u00f6nern \u2013 um das Ganze zu sehen.`,
        autopilotEN: `Loss is felt deeply and often carried entirely alone. The pain becomes the very core of your identity: I am the one who loses, the one who is lacking. The grief hardens into place instead of moving through you.`,
        bewusstheitEN: `What if this loss doesn't define you, but simply touches you? And is there a part of you beyond the pain that belongs to you, too?`,
        uebungEN: `Today, write down: What did I learn or experience through this loss that I didn't know before? Not to romanticize the pain\u2014but to see the whole picture.`
      },
      ueberforderung: {
        autopilot: `\u00dcberforderung wird intensiv erlebt und oft allein getragen. Der Druck mischt sich mit Selbstvorw\u00fcrfen: Warum schaffe ich das nicht? Andere scheinen das leichter zu tragen. Die Isolation w\u00e4chst.`,
        bewusstheit: `Was w\u00e4re, wenn dein Empfinden des Drucks nicht bedeutet, dass du schw\u00e4cher bist \u2013 sondern dass du tiefer f\u00fchlst? Was t\u00e4te dir jetzt wirklich gut?`,
        uebung: `Schreibe heute auf, was gerade zu viel ist \u2013 ehrlich, ohne Selbstkritik. Dann lies es vor wie ein Bericht: Das ist, was ist. Nicht mehr, nicht weniger.`,
        autopilotEN: `Being overwhelmed is felt intensely and usually carried alone. The pressure mixes with self-blame: Why can't I handle this? Others seem to carry this so much more effortlessly. Your isolation grows.`,
        bewusstheitEN: `What if the way you feel this pressure doesn't mean you are weaker\u2014but simply that you feel things more deeply? What would actually comfort you right now?`,
        uebungEN: `Today, write down exactly what is too much\u2014honestly, without any self-criticism. Then read it out loud like a matter-of-fact report: This is what is. No more, no less.`
      },
      stagnation: {
        autopilot: `Stagnation und innere Leere sind vertraut \u2013 und gef\u00e4hrlich. Man versinkt in ihr, macht sie zur Wohnstatt. Die Sehnsucht nach Intensit\u00e4t bleibt, aber die Energie, sie zu suchen, fehlt.`,
        bewusstheit: `Was w\u00e4re, wenn diese Leere nicht das Ende ist \u2013 sondern ein Raum, in dem etwas Neues entsteht? Was k\u00f6nnte gerade keimen?`,
        uebung: `Schaffe heute etwas Kleines \u2013 ein Satz, ein Bild, eine Zeile. Nicht f\u00fcr andere. Nur um dem Schweigen etwas entgegenzusetzen. Das gen\u00fcgt.`,
        autopilotEN: `Stagnation and internal emptiness feel familiar\u2014and dangerously comfortable. You sink into them, making them your home. The longing for intensity remains, but you lack the energy to go looking for it.`,
        bewusstheitEN: `What if this emptiness isn't the end\u2014but rather a blank canvas where something new can begin? What might be quietly trying to take root right now?`,
        uebungEN: `Create something small today\u2014a sentence, a sketch, a single line. Not for anyone else. Just to put something out there against the silence. That is enough.`
      },
    },

    "SO4": {
      erschoepfung: {
        autopilot: `Die Ersch\u00f6pfung wird sichtbar \u2013 und gleichzeitig mit Scham begleitet. Man vergleicht sich mit anderen, die scheinbar leichter durch das Leben kommen. Die Ersch\u00f6pfung best\u00e4tigt das Gef\u00fchl, irgendwie zur\u00fcckzubleiben.`,
        bewusstheit: `Was w\u00e4re, wenn deine Ersch\u00f6pfung kein Zeichen von Minderwertigkeit w\u00e4re, sondern ein Zeichen daf\u00fcr, dass du wirklich intensiv lebst? W\u00fcrde sich etwas verschieben, wenn du sie so betrachtetest?`,
        uebung: `Schreibe heute einen einzigen Satz \u00fcber deine Ersch\u00f6pfung \u2013 nicht als Klage, sondern als neutrale Beobachtung. "Ich bin ersch\u00f6pft" \u2013 und dann atme. Mehr nicht.`,
        autopilotEN: `Your exhaustion becomes visible\u2014and at the same time, it is accompanied by deep shame. You constantly compare yourself to others who seemingly navigate life with much more ease. The exhaustion only confirms your internal narrative that you are somehow falling behind.`,
        bewusstheitEN: `What if your exhaustion isn't a badge of inadequacy, but rather proof that you live life with true emotional intensity? Would something shift inside you if you looked at it that way?`,
        uebungEN: `Today, write down a single sentence about your exhaustion\u2014not as a complaint, but as a neutral observation. "I am exhausted"\u2014and then take a breath. Nothing more.`
      },
      konflikt: {
        autopilot: `Im Konflikt wird die Verletzung gross und sichtbar. Man f\u00fchlt sich missverstanden, abgewertet, nicht gesehen \u2013 und das best\u00e4tigt ein tiefes inneres Bild. Der Vergleich mit anderen kann auftauchen: Beim anderen ist das nie so ein Problem.`,
        bewusstheit: `Sprichst du gerade \u00fcber diesen konkreten Konflikt \u2013 oder \u00fcber etwas \u00c4lteres, das dieser Moment ber\u00fchrt hat?`,
        uebung: `Trenne das Heutige vom Alten: Was ist genau in diesem Gespr\u00e4ch passiert \u2013 beschrieben in einem sachlichen Satz? Dann erst: Was hat es ber\u00fchrt?`,
        autopilotEN: `In a conflict, your sense of hurt becomes massive and highly visible. You feel deeply misunderstood, dismissed, or unseen\u2014which immediately validates an old internal wound. Comparison creeps in: Other people never seem to struggle with this the way I do.`,
        bewusstheitEN: `Are you actually arguing about this specific conflict right now\u2014or are you reacting to an older pain that this moment has accidentally triggered?`,
        uebungEN: `Separate what is happening today from what belongs to the past. Describe exactly what happened in this conversation in one objective sentence. Only then ask yourself: What old wound did it touch?`
      },
      einsamkeit: {
        autopilot: `Einsamkeit best\u00e4tigt den Vergleich: Andere haben echte Verbindungen, anderen gelingt das Dazugeh\u00f6ren. Man zieht sich zur\u00fcck und beobachtet von au\u00dfen, wie das Leben der anderen verl\u00e4uft \u2013 und sp\u00fcrt den Schmerz des Abstands.`,
        bewusstheit: `Was siehst du bei anderen, das du dir f\u00fcr dich selbst w\u00fcnschst? Und wie viel davon ist wirklich unerreichbar \u2013 oder nur unversucht?`,
        uebung: `Tu heute etwas, das Verbindung m\u00f6glich macht \u2013 auch wenn es sich unvollkommen anf\u00fchlt. Eine Nachricht schicken, ein Gespr\u00e4ch beginnen. Nicht perfekt. Nur echt.`,
        autopilotEN: `Loneliness fuels the habit of comparison: Others have real connections; others know how to belong. You pull back into the role of the outsider, watching from the fringes as everyone else's lives unfold\u2014and feeling the painful ache of the distance.`,
        bewusstheitEN: `What exactly do you see in others that you secretly wish for yourself? And how much of that is truly out of your reach, and how much is just untried?`,
        uebungEN: `Do one small thing today that makes connection possible\u2014even if it feels awkward or unpolished. Send a quick text, start a casual conversation. Don't worry about it being perfect. Just make it real.`
      },
      entscheidung: {
        autopilot: `Man beobachtet, was andere w\u00e4hlen \u2013 und vergleicht sich. Was w\u00e4hlt jemand wie ich? Was w\u00e4hlen die, die dazugeh\u00f6ren? Die eigene Stimme wird kaum geh\u00f6rt, weil sie immer schon im Vergleichsmodus ist.`,
        bewusstheit: `Was m\u00f6chtest du \u2013 ohne Vergleich, ohne Referenzrahmen? Gibt es eine Ahnung in dir, die du immer wieder \u00fcbert\u00f6nst?`,
        uebung: `Frage dich: Was w\u00fcrde ich w\u00e4hlen, wenn ich nie w\u00fcsste, was andere in dieser Situation w\u00e4hlen? Schreibe diese Antwort auf und halte daran fest.`,
        autopilotEN: `You obsess over what choices others are making\u2014and constantly measure yourself against them. What does someone like me choose? What do the people who actually belong choose? Your own true voice is barely audible because your mind is always in comparison mode.`,
        bewusstheitEN: `What is it that you actually want\u2014completely free of comparisons, benchmarks, or reference points? Is there a quiet intuition inside you that you keep drowning out?`,
        uebungEN: `Ask yourself: What would I choose right now if I had absolutely no idea what anyone else would choose in this situation? Write that answer down and anchor yourself to it.`
      },
      beziehungskrise: {
        autopilot: `Man vergleicht \u2013 mit anderen Paaren, anderen Verbindungen, einem idealisierten Bild. Diese Beziehung f\u00fchlt sich in der Krise wie ein Zeichen an: Andere haben es leichter, bei mir stimmt etwas nicht.`,
        bewusstheit: `Was w\u00e4re, wenn diese Beziehung gerade genau so ist, wie Beziehungen manchmal sein k\u00f6nnen \u2013 schwierig, unfertig, und trotzdem real? Was w\u00fcrdest du dann tun?`,
        uebung: `Schreibe auf, was diese Beziehung dir schon gegeben hat \u2013 konkret, nicht ideell. Dann tritt mit dieser Liste in das Gespr\u00e4ch, das n\u00f6tig ist.`,
        autopilotEN: `You fall into the comparison trap\u2014comparing your partnership to other couples, other dynamics, or an idealized fantasy. In a crisis, this relationship feels like definitive proof: Others have it easier; something is fundamentally wrong with me.`,
        bewusstheitEN: `What if this relationship is simply exactly how relationships can be sometimes\u2014messy, unfinished, and yet completely real? What would you do from this vantage point?`,
        uebungEN: `Write down what this relationship has genuinely given you\u2014focusing on concrete examples, not abstract ideals. Take that list with you into the conversation that needs to happen.`
      },
      selbstzweifel: {
        autopilot: `Man vergleicht sich \u2013 und verliert dabei immer. Andere scheinen sicherer, selbstverst\u00e4ndlicher, normaler. Der Selbstzweifel best\u00e4tigt: Bei mir fehlt etwas, das andere haben.`,
        bewusstheit: `Was w\u00e4re, wenn der Vergleich gerade nicht fair ist \u2013 weil du deinen Innenraum mit dem Au\u00dfenbild der anderen vergleichst? Was wei\u00dft du wirklich \u00fcber ihr Innenleben?`,
        uebung: `Schreib heute auf, was dich \u2013 ganz konkret \u2013 von anderen unterscheidet und was daran wertvoll ist. Nicht den Mangel. Den Beitrag.`,
        autopilotEN: `You compare yourself to others\u2014and you always end up losing. Everyone else seems more secure, more grounded, more normal. Your self-doubt whispers a familiar story: I am missing a vital piece that everyone else has.`,
        bewusstheitEN: `What if this comparison is completely unfair because you are comparing your messy internal reality to everyone else's polished external facade? What do you actually know about their inner lives?`,
        uebungEN: `Today, write down what specifically sets you apart from others, and focus on why that difference is valuable. Don't focus on the perceived lack. Focus on your unique contribution.`
      },
      verlust: {
        autopilot: `Man f\u00fchlt den Verlust tief \u2013 und vergleicht: Andere verlieren auch, aber bei mir ist es anders, schwerer, einsamer. Der Schmerz erh\u00e4lt eine besondere F\u00e4rbung, die zugleich verbindet und isoliert.`,
        bewusstheit: `Was w\u00e4re, wenn dein Schmerz weder kleiner noch gr\u00f6\u00dfer ist als der anderer \u2013 sondern einfach deiner? Wie w\u00fcrde es sich anf\u00fchlen, ihn ohne Vergleich zu tragen?`,
        uebung: `Such heute jemanden, der ebenfalls verloren hat \u2013 ohne zu vergleichen. H\u00f6rt euch gegenseitig zu. Lass den anderen Schmerz neben deinem stehen, nicht gegen ihn.`,
        autopilotEN: `You feel loss deeply\u2014and immediately begin to compare: Others lose things too, but for me it's different, heavier, lonelier. Your pain takes on a unique coloring that simultaneously connects you to humanity and isolates you from it.`,
        bewusstheitEN: `What if your pain is neither smaller nor greater than anyone else's\u2014but simply yours to hold? How would it feel to carry it without constantly measuring it?`,
        uebungEN: `Connect with someone today who has also experienced loss\u2014without turning it into a comparison. Just listen to one another. Let their pain sit comfortably alongside yours, rather than competing with it.`
      },
      ueberforderung: {
        autopilot: `Man vergleicht sich: Andere scheinen mit demselben Druck besser umzugehen. Der Selbstzweifel unter der \u00dcberforderung macht sie schwerer. Man zieht sich zur\u00fcck statt zu bitten.`,
        bewusstheit: `Was w\u00e4re, wenn du heute um Hilfe bittest \u2013 nicht weil du schwach bist, sondern weil du ein Mensch mit Grenzen bist?`,
        uebung: `Bitte heute konkret eine Person um Unterst\u00fctzung \u2013 eine spezifische Aufgabe, eine klare Bitte. Kein allgemeines \u201eIch bin \u00fcberfordert", sondern: \u201eKannst du \u2026 \u00fcbernehmen?"`,
        autopilotEN: `You measure yourself against the room: Others seem to handle this exact same pressure so much better. The self-doubt underlying your overwhelm makes the burden twice as heavy. You withdraw into isolation instead of asking for help.`,
        bewusstheitEN: `What if you reached out for support today\u2014not because you are weak, but because you are a human being with real, valid boundaries?`,
        uebungEN: `Ask one specific person for a tangible piece of help today. Don't just say a general "I'm overwhelmed," but offer a clear request: "Could you take over this specific task for me?"`
      },
      stagnation: {
        autopilot: `Stagnation aktiviert den Vergleich: Andere bewegen sich, wachsen, erleben. Ich stehe still. Der Schmerz dar\u00fcber verfestigt sich zur \u00dcberzeugung: Mir fehlt etwas Grundlegendes.`,
        bewusstheit: `Was w\u00e4re, wenn andere gerade auch stillstehen \u2013 du es nur nicht siehst? Und was ist in dir vorhanden, auch jetzt?`,
        uebung: `Schreibe heute drei Dinge auf, die in dir lebendig sind \u2013 nicht was du tust, was du bist: eine Eigenschaft, ein Wert, eine F\u00e4higkeit. Lass sie gelten.`,
        autopilotEN: `Stagnation triggers the comparison loop: Others are moving, growing, and experiencing life. I am completely stuck. The pain of this realization hardens into a core conviction: I am fundamentally flawed.`,
        bewusstheitEN: `What if the people you are watching are secretly feeling stuck too, and you just can't see it? What alive qualities are still resting inside you right now?`,
        uebungEN: `Today, write down three things that are vibrantly alive within you\u2014not what you do, but who you are. A personality trait, a core value, or an inherent gift. Let them be enough.`
      },
    },

    "SX4": {
      erschoepfung: {
        autopilot: `Wenn Ersch\u00f6pfung kommt, steigen die Anforderungen \u2013 an sich selbst und an andere. Intensit\u00e4t wird als Mittel gegen die innere Leere eingesetzt. Man fordert mehr, erwartet mehr, gibt mehr \u2013 bis gar nichts mehr geht.`,
        bewusstheit: `Was steht hinter der Intensit\u00e4t gerade? Ist es Leidenschaft \u2013 oder ist es die Angst vor dem, was da w\u00e4re, wenn alles ruhiger w\u00fcrde?`,
        uebung: `Halte inne in einem intensiven Moment und frage dich: Was f\u00fchle ich wirklich \u2013 unter der Intensit\u00e4t? Atme einmal tief. Benenne das, was auftaucht, ohne es sofort zu verwandeln.`,
        autopilotEN: `When exhaustion sets in, your internal demands only escalate\u2014both for yourself and for others. You weaponize emotional intensity as an antidote to inner emptiness. You demand more, expect more, and give more, until you hit an absolute wall.`,
        bewusstheitEN: `What is actually driving all this intensity right now? Is it true passion, or is it a deep-seated fear of what you might discover if everything suddenly became quiet?`,
        uebungEN: `Pause in the middle of a highly intense moment and ask yourself: What am I actually feeling beneath all this electricity? Take a single deep breath. Simply name whatever surfaces, without trying to instantly transform it.`
      },
      konflikt: {
        autopilot: `Im Konflikt wird mehr Tiefe, mehr Ehrlichkeit, mehr Intensit\u00e4t gefordert. Oberfl\u00e4chliche L\u00f6sungen werden abgelehnt. Der andere soll wirklich sehen, worum es geht \u2013 und das erzeugt manchmal Druck.`,
        bewusstheit: `Ist das Niveau der Intensit\u00e4t, das du gerade einforderst, wirklich f\u00fcr den anderen erreichbar \u2013 oder \u00fcbersteigst du es in einer Weise, die ihn eher wegtreibt?`,
        uebung: `Formuliere das, was du wirklich brauchst, in einfachen Worten \u2013 ohne dramatischen Rahmen. Nicht was der andere tun sollte, sondern was du brauchst.`,
        autopilotEN: `In a conflict, you demand more depth, more radical honesty, and more intensity. You reject superficial quick fixes out of hand. You need the other person to truly see what is at stake\u2014which can end up creating immense pressure.`,
        bewusstheitEN: `Is the level of emotional intensity you are demanding realistically achievable for the other person right now, or are you cranking it up so high that it actually drives them away?`,
        uebungEN: `Try stating what you truly need in plain, simple terms\u2014free of any dramatic framing. Focus not on what the other person should be doing, but solely on what you need.`
      },
      einsamkeit: {
        autopilot: `Einsamkeit trifft besonders tief, weil die Sehnsucht nach Verschmelzung so stark ist. Gleichzeitig sch\u00fctzt man sich davor: Wenn niemand nah ist, kann niemand verletzen. Der R\u00fcckzug sch\u00fctzt und isoliert zugleich.`,
        bewusstheit: `H\u00e4ltst du Abstand, weil du Ruhe brauchst \u2013 oder weil N\u00e4he dich \u00e4ngstigt? Was w\u00e4re, wenn du beides gleichzeitig wahr sein l\u00e4sst?`,
        uebung: `Erlaube dir heute, jemandem gegen\u00fcber ein St\u00fcck Verletzlichkeit zu zeigen. Nicht alles \u2013 nur einen echten Moment. Beobachte, was das in der Verbindung bewegt.`,
        autopilotEN: `Loneliness cuts you incredibly deep because your longing for absolute fusion is so powerful. At the same time, you preemptively guard against it: you believe that if no one gets close, no one can hurt you. Your withdrawal serves as both a shield and a prison.`,
        bewusstheitEN: `Are you keeping your distance because you genuinely need peace, or because closeness terrifies you? What if both of those things could be true at the exact same time?`,
        uebungEN: `Give yourself permission to reveal a small piece of true vulnerability to someone today. Not the whole universe\u2014just one authentic moment. Observe what that shifts within the connection.`
      },
      entscheidung: {
        autopilot: `Jede Wahl wird zum Ringen: Welche Option ist wirklich echt, wirklich ich? Keine Option f\u00fchlt sich vollst\u00e4ndig an, jede hat etwas Unzul\u00e4ngliches. Die Entscheidung dreht sich im Kreis der Idealvorstellung.`,
        bewusstheit: `Gibt es eine Option, die sich am lebendigsten anf\u00fchlt \u2013 auch wenn sie nicht ideal ist? Und was w\u00e4re, wenn das genug w\u00e4re?`,
        uebung: `W\u00e4hle die Option, die sich im K\u00f6rper am stimmigsten anf\u00fchlt \u2013 nicht die, die das Denken als richtig ausweist. Dann stehe dazu, auch wenn sie unvollkommen ist.`,
        autopilotEN: `Every choice turns into an internal battle: Which option is genuinely authentic? Which one is truly me? No path feels entirely whole; each one feels somehow lacking. The decision loops endlessly in the orbit of an impossible ideal.`,
        bewusstheitEN: `Is there an option on the table that simply feels the most alive\u2014even if it isn't perfect? What if that were allowed to be enough?`,
        uebungEN: `Choose the option that resonates most clearly in your body, rather than the one your intellect tries to validate as correct. Then stand by it, unpolished as it may be.`
      },
      beziehungskrise: {
        autopilot: `Die Krise l\u00f6st intensive Forderungen aus: mehr Echtheit, mehr Tiefe, mehr Ehrlichkeit \u2013 jetzt. Der andere kommt damit nicht mit. Das best\u00e4tigt den Verdacht: Niemand kann wirklich halten, was ich brauche.`,
        bewusstheit: `Ist das, was du gerade forderst, wirklich das, was die Krise braucht \u2013 oder ist es das, was du dir schon immer gew\u00fcnscht hast und nie bekommen hast?`,
        uebung: `Nenne dem anderen genau eine Sache, die du dir jetzt w\u00fcnschst \u2013 konkret, erreichbar, heute. Nicht das Ganze, nur diesen einen Schritt.`,
        autopilotEN: `A crisis triggers intense, immediate demands from you: more authenticity, more depth, more raw honesty\u2014right now. When the other person can't keep pace, it confirms your oldest suspicion: No one is capable of truly holding the weight of what I need.`,
        bewusstheitEN: `Is what you are demanding right now actually what the crisis requires to heal\u2014or is it what you have always longed for and never managed to receive?`,
        uebungEN: `Tell your partner exactly one thing you want from them right now\u2014something concrete, achievable, and possible today. Not the entire relationship overhaul, just this single step.`
      },
      selbstzweifel: {
        autopilot: `Der Selbstzweifel wird intensiv und dunkel: Bin ich wirklich authentisch? Habe ich mich verloren? War das, was ich gezeigt habe, wirklich echt \u2013 oder eine Rolle? Die innere Kritik sucht nach Unwahrheit in der eigenen Tiefe.`,
        bewusstheit: `Was w\u00e4re, wenn dein Zweifel selbst ein Zeichen deiner Echtheit ist \u2013 denn nur wer wirklich f\u00fchlt, zweifelt so tief? K\u00f6nnte das auch wahr sein?`,
        uebung: `Schreibe auf, was du in diesem Moment wirklich f\u00fchlst \u2013 ohne es zu formen, ohne es zu sch\u00f6nen. Roher Text. Das ist du. Das ist real.`,
        autopilotEN: `Your self-doubt becomes heavy, intense, and dark: Am I actually being authentic? Have I lost myself? Was what I just showed real, or was it just a performance? Your inner critic relentlessly dissects your deep layers, looking for any trace of falsehood.`,
        bewusstheitEN: `What if the very fact that you are doubting is proof of your authenticity? After all, only someone who feels deeply could ever doubt themselves this thoroughly. Could that be true too?`,
        uebungEN: `Write down exactly what you are feeling in this exact moment\u2014without shaping it, without dressing it up. Just raw text. That is you. That is real.`
      },
      verlust: {
        autopilot: `Verlust wird mit gro\u00dfer Intensit\u00e4t erlebt. Der Schmerz kann alles \u00fcberfluten \u2013 Kunst, R\u00fcckzug, intensive Gespr\u00e4che werden zum Kanal. Manchmal wird das Leiden selbst zur Verbindung: Wer tiefer f\u00fchlt, lebt echter.`,
        bewusstheit: `Was w\u00e4re, wenn der Schmerz auch dann echt ist, wenn er leiser wird? Muss Trauer immer intensiv sein, um wahr zu sein?`,
        uebung: `Gestalte heute etwas aus dem Verlust \u2013 ein Bild, eine Zeile, eine Collage. Nicht um es zu zeigen. Nur um dem Schmerz eine Form zu geben, die ihn tr\u00e4gt.`,
        autopilotEN: `You experience loss with overwhelming intensity. The pain can completely flood your world, channeled into art, deep isolation, or heavy conversations. Sometimes, suffering itself becomes a badge of connection: The more deeply I hurt, the more authentically I live.`,
        bewusstheitEN: `What if your pain remains entirely real even as it begins to quiet down? Does grief always have to be deafening to be true?`,
        uebungEN: `Channel something out of your loss today\u2014a drawing, a written line, a collage. Not to show it off to an audience. Simply to give the pain a physical form that can help carry it.`
      },
      ueberforderung: {
        autopilot: `\u00dcberforderung bricht intensiv durch: entweder als kreativer Exzess, als emotionaler Ausbruch oder als totaler R\u00fcckzug. Die Stimmung kippt \u2013 von brennend zu erloschen.`,
        bewusstheit: `Was brauchst du in diesem Moment \u2013 R\u00fcckzug oder Verbindung? Und wei\u00dft du, wer dir das geben kann?`,
        uebung: `Gib dem Druck heute eine Form: schreibe, zeichne, bewege dich. Nicht um das Problem zu l\u00f6sen \u2013 um die Energie zu entladen, damit du klarer siehst.`,
        autopilotEN: `Being overwhelmed breaks through in dramatic waves: either as a sudden creative obsession, a raw emotional outburst, or a total, freezing withdrawal. Your mood swings violently\u2014from burning bright to completely burnt out.`,
        bewusstheitEN: `What is it that you truly need in this exact moment\u2014to pull back into isolation, or to reach out for connection? And do you know who can realistically offer that to you?`,
        uebungEN: `Give the pressure a tangible outlet today: write it out, sketch it, or move your body. Don't try to solve the underlying problem\u2014just discharge the raw energy so you can see clearly again.`
      },
      stagnation: {
        autopilot: `Ohne Intensit\u00e4t f\u00fchlt sich das Leben tot an. Man greift nach dem n\u00e4chsten emotionalen Erlebnis, der n\u00e4chsten Tiefe, dem n\u00e4chsten Schmerz oder der n\u00e4chsten Begeisterung \u2013 nur um nicht in der Leere zu sitzen.`,
        bewusstheit: `Was w\u00e4re, wenn die Stille gerade das intensivste Erlebnis ist \u2013 wenn du ihr wirklich begegnest?`,
        uebung: `Sitz heute zwanzig Minuten mit der Leere \u2013 ohne sie zu f\u00fcllen, ohne wegzugehen. Dann schreibe einen Satz: Was habe ich in der Stille geh\u00f6rt?`,
        autopilotEN: `Without emotional intensity, life feels flat and dead. You instinctively reach for the next heavy experience, the next deep encounter, the next wave of pain or rush of excitement\u2014anything to avoid sitting face-to-face with the void.`,
        bewusstheitEN: `What if the quiet stillness is actually the most intense experience available to you\u2014if you were brave enough to truly meet it?`,
        uebungEN: `Sit quietly with the emptiness today for twenty minutes\u2014without trying to fill it, without trying to escape it. Afterward, write down a single sentence: What did I actually hear in the silence?`
      },
    },

    "SE5": {
      erschoepfung: {
        autopilot: `Der R\u00fcckzug wird noch tiefer. Man minimiert Kontakt, Anforderungen, \u00e4u\u00dfere Reize \u2013 in der Hoffnung, dass die Stille Energie zur\u00fcckbringt. Aber die Ersch\u00f6pfung sitzt tiefer, und der R\u00fcckzug gibt nur kurzfristig Erleichterung.`,
        bewusstheit: `Wof\u00fcr sparst du deine Energie gerade auf? Und ist das, wof\u00fcr du sie sparst, wirklich das, was du jetzt brauchst?`,
        uebung: `Setz dich in absolute Stille \u2013 ohne Buch, ohne Plan, ohne Analyse. Beobachte, was kommt. Nicht verstehen wollen \u2013 nur wahrnehmen.`,
        autopilotEN: `Stagnation triggers even more withdrawal: you read, ponder, and hoard information\u2014but you don't take action. Analyzing the stagnation ends up replacing the act of breaking through it. The retreat morphs into a comfortable habit.`,
        bewusstheitEN: `What is the smallest possible step you could take toward the outside world right now\u2014not the perfect step, just the smallest one? What if you took it today?`,
        uebungEN: `Choose one specific thing that you have known how to do for a long time but haven't actually executed. Do it within the next twenty minutes. Do not prepare\u2014just start.`
      },
      konflikt: {
        autopilot: `Im Konflikt kommt der R\u00fcckzug. Man braucht Abstand, Zeit, Stille \u2013 um zu verarbeiten, was passiert ist. Nach aussen wirkt das kalt oder desinteressiert, obwohl innen viel in Bewegung ist.`,
        bewusstheit: `Braucht der andere gerade ein Signal von dir, dass du noch da bist \u2013 auch wenn du Zeit zum Verarbeiten brauchst?`,
        uebung: `Sage dem anderen kurz, was du brauchst: \u201eIch brauche etwas Zeit, um das zu verarbeiten. Ich komme wieder.\u201d Das schliesst die Verbindung, anstatt sie abzuschneiden.`,
        autopilotEN: `In conflict comes withdrawal. You need distance, time, silence - to process what happened. On the outside it seems cold or disinterested, even though there is a lot going on inside.`,
        bewusstheitEN: `Does the other person need a signal from you that you are still there - even if you need time to process it?`,
        uebungEN: `Briefly tell the other person what you need: "I need some time to process this. I'll be back." This closes the connection instead of cutting it off.`
      },
      einsamkeit: {
        autopilot: `Einsamkeit ist f\u00fcr den SE5 fast ein Normalzustand \u2013 bekannt, kontrolliert, irgendwie sicher. Man sch\u00fctzt die eigene Energie, minimiert Anforderungen. Aber irgendwo bleibt ein leises Gef\u00fchl von Abgeschnittensein.`,
        bewusstheit: `Ist dieser R\u00fcckzug gerade Erholung \u2013 oder Vermeidung? Gibt es jemanden, den du vermisst, ohne es dir einzugestehen?`,
        uebung: `Plane heute einen kleinen, konkreten Kontaktmoment \u2013 kurz, dosiert, auf deinen Bedingungen. Nicht weil du musst, sondern weil Verbindung dich auch n\u00e4hrt.`,
        autopilotEN: `Loneliness is almost a normal state for the SE5 - familiar, controlled, somehow safe. You protect your own energy and minimize demands. But somewhere there remains a slight feeling of being cut off.`,
        bewusstheitEN: `Is this withdrawal just relaxation \u2013 or avoidance? Is there someone you miss without admitting it to yourself?`,
        uebungEN: `Plan a small, concrete contact moment today \u2013 short, measured, on your terms. Not because you have to, but because connection also nourishes you.`
      },
      entscheidung: {
        autopilot: `Man braucht mehr Information, mehr Zeit, mehr Analyse \u2013 bevor eine Entscheidung f\u00e4llt. Der innere Impuls: Wenn ich nur genug wei\u00df, werde ich sicher nicht falsch liegen. Aber genug wei\u00df man nie.`,
        bewusstheit: `Ab welchem Punkt h\u00e4ttest du genug Informationen \u2013 und gibt es diesen Punkt wirklich? Was w\u00fcrde passieren, wenn du jetzt entscheidest, mit dem, was du wei\u00dft?`,
        uebung: `Setze eine Informationsgrenze: Erlaube dir noch eine Quelle, ein Gespr\u00e4ch, eine Analyse. Dann entscheide \u2013 auch wenn sich das Wissen noch unvollst\u00e4ndig anf\u00fchlt.`,
        autopilotEN: `You need more information, more time, more analysis \u2013 before a decision is made. The inner impulse: If I only know enough, I certainly won't be wrong. But you never know enough.`,
        bewusstheitEN: `At what point would you have enough information - and does this point really exist? What would happen if you decided now, with what you know?`,
        uebungEN: `Set an information limit: Allow yourself one more source, one conversation, one more analysis. Then decide \u2013 even if the knowledge still feels incomplete.`
      },
      beziehungskrise: {
        autopilot: `Man zieht sich zur\u00fcck \u2013 braucht Abstand, Stille, Zeit. Der andere erlebt das als Gleichg\u00fcltigkeit oder K\u00e4lte, was die Krise oft versch\u00e4rft. Innen wird viel verarbeitet, was nach au\u00dfen kaum sichtbar ist.`,
        bewusstheit: `Braucht der andere gerade ein Signal, dass du noch da bist \u2013 auch wenn du Abstand brauchst? Was w\u00e4re das kleinste Zeichen, das du ihm geben k\u00f6nntest?`,
        uebung: `Schreibe dem anderen eine kurze Nachricht, auch wenn du noch nicht reden kannst: \u201eIch bin noch da. Ich brauche etwas Zeit. Ich komme wieder." Das h\u00e4lt die Verbindung.`,
        autopilotEN: `You withdraw \u2013 you need distance, silence, time. The other person experiences this as indifference or coldness, which often exacerbates the crisis. A lot is processed inside that is hardly visible from the outside.`,
        bewusstheitEN: `Does the other person need a signal that you are still there - even if you need distance? What would be the smallest sign you could give him?`,
        uebungEN: `Write a short message to the other person, even if you can't talk yet: "I'm still here. I need some time. I'll be back." That keeps the connection.`
      },
      selbstzweifel: {
        autopilot: `Der Selbstzweifel nimmt die Form von Inkompetenz-Angst an: Ich wei\u00df nicht genug, habe nicht genug verstanden, bin nicht kompetent genug f\u00fcr diese Situation. Der R\u00fcckzug in mehr Analyse gibt Sicherheit \u2013 aber l\u00f6st den Zweifel nicht.`,
        bewusstheit: `Was w\u00e4re, wenn du f\u00fcr diese Situation kompetent genug bist \u2013 mit dem, was du bereits wei\u00dft? Was w\u00fcrde sich ver\u00e4ndern, wenn du dieser Einsch\u00e4tzung vertraust?`,
        uebung: `Entscheide oder handle einmal ohne weitere Vorbereitung. Benenne danach, was gut war \u2013 nicht was fehlte. Baue so ein anderes inneres Erz\u00e4hlmuster auf.`,
        autopilotEN: `Self-doubt takes the form of fear of incompetence: I don't know enough, I don't understand enough, I'm not competent enough for this situation. Retreating into more analysis provides security - but does not solve the doubt.`,
        bewusstheitEN: `What if you were competent enough to handle this situation with what you already know? What would change if you trusted this assessment?`,
        uebungEN: `Decide or act once without further preparation. Name what was good - not what was missing. Build a different inner narrative pattern.`
      },
      verlust: {
        autopilot: `Verlust wird innerlich verarbeitet, oft ohne es zu zeigen. Man denkt \u00fcber den Verlust nach, analysiert ihn \u2013 aber die emotionale Tiefe bleibt privat, manchmal so privat, dass sie sich nicht entfalten kann.`,
        bewusstheit: `Was w\u00e4re, wenn du heute den Verlust nicht nur verstehst \u2013 sondern ihn auch f\u00fchlst? Gibt es einen Menschen, dem du das zeigen k\u00f6nntest?`,
        uebung: `Schreibe heute in einem unzensiert-privaten Text auf, was du verloren hast und was du f\u00fchlst. Keine Analyse, keine Erkl\u00e4rung \u2013 nur Empfindung in Worten.`,
        autopilotEN: `Loss is processed internally, often without showing it. You think about the loss, analyze it - but the emotional depth remains private, sometimes so private that it cannot unfold.`,
        bewusstheitEN: `What if today you not only understood the loss - but also felt it? Is there someone you could show this to?`,
        uebungEN: `Today, write down what you've lost and what you're feeling in an uncensored, private text. No analysis, no explanation - just feeling in words.`
      },
      ueberforderung: {
        autopilot: `\u00dcberforderung f\u00fchrt zum R\u00fcckzug: Man braucht Raum, Zeit, Stille. Soziale Anforderungen werden reduziert. Das gibt kurzfristig Erholung \u2013 aber wenn der R\u00fcckzug zu lang wird, w\u00e4chst die Isolation.`,
        bewusstheit: `Wie viel R\u00fcckzug brauchst du wirklich \u2013 und ab wann schadet er? Gibt es jemanden, dem du heute kurz sagst, wie es dir geht?`,
        uebung: `Schreibe heute eine Liste: Was kann ich wirklich weglassen? Was muss ich tun? Was kann ich delegieren? Dann handle nach dieser Liste \u2013 nicht nach dem Gef\u00fchl.`,
        autopilotEN: `Overwhelm leads to withdrawal: you need space, time, silence. Social requirements are reduced. This provides short-term relief - but if the withdrawal becomes too long, isolation increases.`,
        bewusstheitEN: `How much withdrawal do you really need \u2013 and at what point does it become harmful? Is there anyone you'd like to tell briefly today how you're feeling?`,
        uebungEN: `Write a list today: What can I really leave out? What do i have to do? What can I delegate? Then act according to this list - not according to feeling.`
      },
      stagnation: {
        autopilot: `Stagnation f\u00fchrt zu mehr R\u00fcckzug: Man liest, denkt, sammelt \u2013 aber handelt nicht. Die Analyse der Stagnation ersetzt das Durchbrechen. Der R\u00fcckzug wird zur komfortablen Gewohnheit.`,
        bewusstheit: `Was w\u00e4re der kleinste m\u00f6gliche Schritt nach au\u00dfen \u2013 nicht der perfekte, der kleinste? Was w\u00e4re, wenn du ihn heute gehst?`,
        uebung: `W\u00e4hle heute eine Sache, die du schon lange wei\u00dft, aber nicht getan hast. Tu sie in zwanzig Minuten. Nicht vorbereiten \u2013 einfach anfangen.`,
        autopilotEN: `Stagnation leads to more withdrawal: you read, think, collect - but don't act. Analyzing stagnation replaces breaking through. Withdrawal becomes a comfortable habit.`,
        bewusstheitEN: `What would be the smallest possible step outward \u2013 not the perfect one, the smallest one? What if you left him today?`,
        uebungEN: `Today, choose one thing that you have known for a long time but have not done. Do it in twenty minutes. Don't prepare - just start.`
      },
    },

    "SO5": {
      erschoepfung: {
        autopilot: `Man zieht sich von sozialen Verpflichtungen zur\u00fcck und taucht tiefer in Wissen oder Analyse ein. Das f\u00fchlt sich produktiv an \u2013 ist aber oft ein Weg, der Ersch\u00f6pfung nicht direkt zu begegnen.`,
        bewusstheit: `Was w\u00fcrde passieren, wenn du gerade nichts analysierst, nichts verstehst, nichts wei\u00dft \u2013 sondern einfach bist? Wie lange kannst du das aushalten?`,
        uebung: `Verbring zwanzig Minuten in der Natur, ohne Ziel, ohne inneren Vortrag, ohne Buch. Beobachte, was mit deinem Geist passiert, wenn er keine Aufgabe hat.`,
        autopilotEN: `You retreat into your intellect and observe your own stagnation from a clinical distance: analyzing it, categorizing it, and explaining it away. But intellectually understanding the void doesn't dissolve it\u2014it only prolongs it.`,
        bewusstheitEN: `What if you stopped analyzing the standstill today and simply did something\u2014anything small, tangible, and immediate?`,
        uebungEN: `Go outside today and do something physical with your hands: garden, cook, or build something. No abstract thinking allowed. Just act, and feel whatever naturally unfolds in the process.`
      },
      konflikt: {
        autopilot: `Im Konflikt tritt die Analyse in den Vordergrund. Man versucht, die Situation zu verstehen, Muster zu erkennen, rational zu kl\u00e4ren \u2013 w\u00e4hrend der emotionale Gehalt des Konflikts unber\u00fchrt bleibt.`,
        bewusstheit: `Analysierst du gerade den Konflikt \u2013 oder bist du wirklich dabei? Was f\u00fchlst du, wenn du aufh\u00f6rst zu analysieren?`,
        uebung: `Sage dem anderen einmal, wie du dich in diesem Konflikt f\u00fchlst \u2013 nicht was du denkst. Ein Satz: \u201eIch f\u00fchl gerade ...\u201d`,
        autopilotEN: `In conflict, analysis comes to the fore. You try to understand the situation, recognize patterns, clarify it rationally - while the emotional content of the conflict remains untouched.`,
        bewusstheitEN: `Are you currently analyzing the conflict \u2013 or are you really there? What do you feel when you stop analyzing?`,
        uebungEN: `Tell the other person how you feel about this conflict - not what you think. One sentence: \u201cI just feel...\u201d`
      },
      einsamkeit: {
        autopilot: `Einsamkeit wird mit Wissen bef\u00fcllt \u2013 B\u00fccher, Analysen, Konzepte. Man zieht sich in den Intellekt zur\u00fcck und gibt der Einsamkeit einen Rahmen: Ich forsche, also bin ich da. Aber die Leere unter dem Denken bleibt.`,
        bewusstheit: `Was sucht dein Geist gerade, das das Wissen nicht geben kann? Gibt es eine Verbindung, die du dir w\u00fcnschst, aber nicht aussprichst?`,
        uebung: `Tausche heute ein Buch gegen ein Gespr\u00e4ch \u2013 mit jemandem, dem du dich intellektuell verbunden f\u00fchlst. Nicht um zu analysieren. Um wirklich da zu sein.`,
        autopilotEN: `Solitude is filled with knowledge \u2013 books, analyses, concepts. You retreat into your intellect and give your loneliness a framework: I am researching, therefore I am there. But the emptiness beneath the thought remains.`,
        bewusstheitEN: `What is your mind looking for right now that knowledge cannot give? Is there a connection you want but don't say?`,
        uebungEN: `Swap a book for a conversation today with someone you feel intellectually connected to. Not to analyze. To really be there.`
      },
      entscheidung: {
        autopilot: `Man sucht nach dem theoretisch schl\u00fcssigsten System, dem Modell, das die Entscheidung logisch aufl\u00f6st. Die Analyse wird gr\u00fcndlicher, umfassender \u2013 aber die Entscheidung selbst verz\u00f6gert sich immer weiter.`,
        bewusstheit: `Gibt es unter all der Analyse eine stille Ahnung, was du wirklich willst? Und w\u00e4re es m\u00f6glich, dieser Ahnung zu folgen \u2013 auch ohne das perfekte System dahinter?`,
        uebung: `Schreibe die Entscheidungsfrage auf ein Blatt Papier. Dann schreibe in zwei Minuten, ohne nachzudenken, die erste Antwort die kommt. Lies sie. Das ist oft nah an der Wahrheit.`,
        autopilotEN: `You look for the most theoretically coherent system, the model that logically resolves the decision. The analysis is becoming more thorough and comprehensive - but the decision itself is being delayed further and further.`,
        bewusstheitEN: `Beneath all the analysis, is there a hidden sense of what you really want? And would it be possible to follow this hunch \u2013 even without the perfect system behind it?`,
        uebungEN: `Write the decision question on a piece of paper. Then, in two minutes, without thinking, write the first answer that comes. Read them. This is often close to the truth.`
      },
      beziehungskrise: {
        autopilot: `Man analysiert die Krise: Was ist schiefgelaufen? Welche Muster liegen zugrunde? Die Analyse gibt Struktur \u2013 aber sie ersetzt das Gespr\u00e4ch nicht, das eigentlich n\u00f6tig w\u00e4re.`,
        bewusstheit: `Du verstehst die Krise vielleicht besser als du sie erlebst. Was w\u00e4re, wenn du gerade weniger analysierst und mehr einfach da bist \u2013 mit dem anderen, in diesem Moment?`,
        uebung: `Setz dich mit dem anderen zusammen \u2013 ohne Analyse, ohne Erkl\u00e4rung. Nur: \u201eWie geht es dir?" und dann: wirklich zuh\u00f6ren, ohne das Gespr\u00e4ch in ein Modell zu \u00fcbersetzen.`,
        autopilotEN: `You analyze the crisis: What went wrong? What are the underlying patterns? The analysis provides structure - but it does not replace the conversation that would actually be necessary.`,
        bewusstheitEN: `You may understand the crisis better than you experience it. What if you analyzed less and just were there more - with the other person, in this moment?`,
        uebungEN: `Sit down with the other person \u2013 without analysis, without explanation. Just: \u201cHow are you?\u201d and then: really listen without translating the conversation into a model.`
      },
      selbstzweifel: {
        autopilot: `Der Selbstzweifel richtet sich auf das Denken selbst: Ist mein Modell wirklich richtig? Habe ich etwas \u00fcbersehen? Die Analyse beginnt, sich gegen sich selbst zu richten \u2013 man zweifelt an den eigenen Schlussfolgerungen.`,
        bewusstheit: `Gibt es eine Ebene jenseits des Denkens, auf der du wei\u00dft, was gilt? Was sagt dir die ruhige Stille, wenn du aufh\u00f6rst zu analysieren?`,
        uebung: `Verbring heute zwanzig Minuten ohne intellektuelle Aktivit\u00e4t. Dann frage dich: Was denke ich eigentlich \u2013 nicht analytisch, sondern einfach? Schreibe das auf.`,
        autopilotEN: `Self-doubt is directed at the thinking itself: Is my model really correct? Did I miss something? The analysis begins to turn against itself - you doubt your own conclusions.`,
        bewusstheitEN: `Is there a level beyond thought where you know what applies? What does the quiet silence tell you when you stop analyzing?`,
        uebungEN: `Spend twenty minutes today without intellectual activity. Then ask yourself: What do I actually think \u2013 not analytically, but simply? Write that down.`
      },
      verlust: {
        autopilot: `Man tritt innerlich zur\u00fcck: Der Verlust wird beobachtet statt durchgef\u00fchlt. Man sammelt Gedanken, liest \u00fcber Trauer, versteht den Prozess \u2013 aber h\u00e4lt Abstand zur eigenen emotionalen Realit\u00e4t.`,
        bewusstheit: `Was w\u00e4re, wenn du heute nicht \u00fcber Trauer nachdenkst, sondern einfach trauerst? Was w\u00fcrde das erm\u00f6glichen?`,
        uebung: `Geh heute f\u00fcr eine halbe Stunde spazieren, ohne Ziel und ohne Gedanken-Aufgabe. Lass kommen, was kommt \u2013 auch den Schmerz. Er darf da sein.`,
        autopilotEN: `You step back internally: the loss is observed instead of felt. You collect thoughts, read about grief, understand the process - but keep your distance from your own emotional reality.`,
        bewusstheitEN: `What if you didn't think about grief today and just mourned? What would that enable?`,
        uebungEN: `Go for a walk today for half an hour, with no destination and no thought task. Let whatever comes come \u2013 including the pain. He can be there.`
      },
      ueberforderung: {
        autopilot: `Man zieht sich ins Denken zur\u00fcck: analysiert die \u00dcberforderung, entwickelt Systeme, liest \u00fcber Stressmanagement. Das gibt das Gef\u00fchl von Kontrolle \u2013 aber l\u00f6st den Druck selten wirklich.`,
        bewusstheit: `Was w\u00e4re, wenn du heute nicht \u00fcber die \u00dcberforderung nachdenkst, sondern konkret eine Sache davon erledigst oder losl\u00e4sst?`,
        uebung: `W\u00e4hle heute die eine Aufgabe, die am meisten dr\u00fcckt. Mache sie als erstes, ohne weitere Planung. Nur anfangen. Beobachte, wie sich das anf\u00fchlt.`,
        autopilotEN: `You retreat into thinking: analyze the excessive demands, develop systems, read about stress management. This gives a feeling of control - but rarely actually relieves the pressure.`,
        bewusstheitEN: `What if you didn't think about the excessive demands today, but actually did one thing about it or let it go?`,
        uebungEN: `Today, choose the one task that is most pressing. Do them first, without any further planning. Just start. Watch how that feels.`
      },
      stagnation: {
        autopilot: `Man zieht sich ins Denken zur\u00fcck und beobachtet die Stagnation von au\u00dfen: analysiert, kategorisiert, versteht. Aber das Verstehen der Leere hebt sie nicht auf \u2013 es verl\u00e4ngert sie.`,
        bewusstheit: `Was w\u00e4re, wenn du heute aufh\u00f6rst zu analysieren und einfach etwas tust \u2013 irgendetwas Kleines, Konkretes, Jetzt?`,
        uebung: `Geh heute nach drau\u00dfen und mach etwas mit den H\u00e4nden: G\u00e4rtnern, Kochen, etwas Basteln. Kein Nachdenken. Nur tun und f\u00fchlen, was entsteht.`,
        autopilotEN: `You retreat into your thinking and observe the stagnation from the outside: analyze, categorize, understand. But understanding emptiness does not eliminate it - it prolongs it.`,
        bewusstheitEN: `What if you stopped analyzing today and just did something \u2013 something small, concrete, now?`,
        uebungEN: `Go outside today and do something with your hands: gardening, cooking, doing some crafting. No thinking. Just do and feel what arises.`
      },
    },

    "SX5": {
      erschoepfung: {
        autopilot: `Der R\u00fcckzug aus der Verbindung beginnt \u2013 auch aus der, die einem wichtig ist. Man braucht Stille und Raum, aber dieser R\u00fcckzug versch\u00e4rft die innere Isolation, anstatt sie aufzul\u00f6sen.`,
        bewusstheit: `Ziehst du dich gerade von Menschen zur\u00fcck, um Energie zu sparen \u2013 oder entgehst du damit auch dem, was Verbindung dir jetzt geben k\u00f6nnte?`,
        uebung: `Schreibe einen kurzen Brief an jemanden, dem du nahestehst \u2013 auch wenn du ihn nicht absendest. Lass darin dein echtes Inneres sprechen. Beobachte, was das in dir bewegt.`,
        autopilotEN: `Without an all-consuming relationship or a deeply intense project to occupy your mind, your life feels incredibly flat. You sit around waiting for that one special topic or that one electric encounter to make everything feel alive again\u2014missing what is right in front of you.`,
        bewusstheitEN: `What is actually present in your life right now, even if it doesn't feel like the most thrilling thing in the world? Is there a tiny, ordinary step worth taking?`,
        uebungEN: `Connect briefly with someone who matters to you today\u2014keep it short, with no pressure to force a deep conversation. Sometimes, feeling alive begins with a single, simple spark of contact.`
      },
      konflikt: {
        autopilot: `Im Konflikt zeigt sich entweder \u00fcberraschende Intensit\u00e4t \u2013 eine pl\u00f6tzliche, tiefe Reaktion \u2013 oder vollst\u00e4ndiges Abschalten. Beide Extreme k\u00f6nnen den anderen verwirren.`,
        bewusstheit: `Was passiert in dir gerade, bevor du dich abschaltest \u2013 oder bevor die Intensit\u00e4t ausbricht? Gibt es einen Moment dazwischen?`,
        uebung: `Bleibe in der Mitte: weder abschalten noch ausbrechen. Sage, was du wahrnimmst: \u201eIch merke, dass ich mich gerade entziehen will.\u201d Mehr nicht.`,
        autopilotEN: `In conflict there is either surprising intensity \u2013 a sudden, deep reaction \u2013 or complete switching off. Both extremes can confuse the other.`,
        bewusstheitEN: `What is happening inside you right now before you switch off \u2013 or before the intensity erupts? Is there a moment in between?`,
        uebungEN: `Stay in the middle: neither switch off nor break out. Say what you perceive: \u201cI notice that I want to withdraw.\u201d Not more.`
      },
      einsamkeit: {
        autopilot: `Einsamkeit l\u00f6st eine intensive Suche nach Verbindung aus \u2013 aber nur der richtigen, der wirklich echten. Oberfl\u00e4chlicher Kontakt f\u00fchlt sich schlechter an als Alleinsein. Die hohe Messlatte macht Verbindung selten.`,
        bewusstheit: `Wartest du auf die perfekte Verbindung \u2013 und \u00fcbsiehst dabei die Menschen, die wirklich da sind? Was brauchst du wirklich von einer Verbindung?`,
        uebung: `Such heute Kontakt zu jemandem, ohne die Tiefe vorauszusetzen. Lass die Verbindung sein, was sie gerade ist \u2013 auch wenn sie unvollkommen ist.`,
        autopilotEN: `Loneliness triggers an intense search for connection - but only the right one, the really real one. Superficial contact feels worse than being alone. The high bar makes connection rare.`,
        bewusstheitEN: `Are you waiting for the perfect connection \u2013 and ignoring the people who are actually there? What do you really need from a connection?`,
        uebungEN: `Find contact with someone today without assuming depth. Let the connection be what it is right now - even if it is imperfect.`
      },
      entscheidung: {
        autopilot: `Man wartet auf Gewissheit, auf das unzweifelhafte Zeichen, auf den Moment, in dem die richtige Option klar ist. Die Wartezeit wird l\u00e4nger. Und weil keine Option sich vollst\u00e4ndig sicher anf\u00fchlt, verschiebt man weiter.`,
        bewusstheit: `Wie viel Gewissheit brauchst du wirklich, um zu entscheiden \u2013 und gibt es diese Gewissheit \u00fcberhaupt? Was w\u00e4re, wenn du einfach w\u00e4hlst und dir dann vertraust?`,
        uebung: `Entscheide dich jetzt \u2013 mit dem, was du hast. Schreibe die Wahl auf und sage laut: Ich habe entschieden. Beobachte, wie sich das anf\u00fchlt.`,
        autopilotEN: `You wait for certainty, for the undoubted sign, for the moment when the right option is clear. The waiting time is getting longer. And because no option feels completely safe, you keep postponing.`,
        bewusstheitEN: `How much certainty do you really need to make a decision - and does this certainty even exist? What if you just choose and then trust yourself?`,
        uebungEN: `Decide now \u2013 with what you have. Write down the choice and say out loud: I have decided. Watch how that feels.`
      },
      beziehungskrise: {
        autopilot: `Man zieht sich vollst\u00e4ndig zur\u00fcck oder sucht genau die richtige Verbindung \u2013 jetzt, intensiv. Mittelm\u00e4\u00dfiger Kontakt f\u00fchlt sich in der Krise schlechter an als Alleinsein.`,
        bewusstheit: `W\u00e4re die Person, die gerade da ist \u2013 auch wenn sie nicht perfekt passt \u2013 vielleicht genug, um diesen Moment gemeinsam zu tragen?`,
        uebung: `Melde dich bei jemandem, der dir nahestehend ist \u2013 nicht mit dem Anspruch auf die perfekte Begegnung, sondern einfach: Ich brauche gerade Verbindung.`,
        autopilotEN: `You withdraw completely or look for just the right connection \u2013 now, intensively. Mediocre contact feels worse than being alone in a crisis.`,
        bewusstheitEN: `Would the person who is there right now \u2013 even if they don\u2019t fit perfectly \u2013 perhaps be enough to carry this moment together?`,
        uebungEN: `Reach out to someone close to you - not with the expectation of the perfect encounter, but simply: I need connection right now.`
      },
      selbstzweifel: {
        autopilot: `Der Selbstzweifel betrifft die Verbindung: Bin ich wirklich in der Lage, diese tiefe Verbindung zu halten, die ich mir w\u00fcnsche? Bin ich zu intensiv, zu seltsam, zu fordernd? Der R\u00fcckzug sch\u00fctzt vor der Antwort.`,
        bewusstheit: `Was w\u00e4re, wenn du genau die richtige Person f\u00fcr eine tiefe Verbindung bist \u2013 und gerade zu wenig davon zeigst?`,
        uebung: `Zeige heute dem Menschen, dem du nahestehst, etwas Echtes von dir \u2013 ohne es vorher zu filtern. Einen echten Gedanken, eine echte Empfindung. Beobachte, was dann passiert.`,
        autopilotEN: `The self-doubt is about connection: Am I really capable of maintaining this deep connection that I desire? Am I too intense, too strange, too demanding? Withdrawal protects against the answer.`,
        bewusstheitEN: `What if you're just the right person for a deep connection - and you're not showing enough of it?`,
        uebungEN: `Show something real about yourself to the person you are close to today - without filtering it first. A real thought, a real feeling. Watch what happens then.`
      },
      verlust: {
        autopilot: `Verlust in tiefen Beziehungen trifft besonders stark \u2013 und wird besonders gesch\u00fctzt. Man zieht sich zur\u00fcck, verarbeitet allein, l\u00e4sst niemanden nah. Der R\u00fcckzug sch\u00fctzt, aber verl\u00e4ngert die Isolation.`,
        bewusstheit: `Gibt es einen Menschen, dem du heute sagen k\u00f6nntest, was du verloren hast \u2013 ohne alles erkl\u00e4ren zu m\u00fcssen? Nur zeigen.`,
        uebung: `Melde dich heute bei einem Menschen, dem du vertraust \u2013 nicht um zu reden, sondern um nicht allein zu sein. Sag nur: \u201eIch trauere gerade. Kannst du in der N\u00e4he sein?"`,
        autopilotEN: `Loss in deep relationships hits particularly hard - and is particularly protected. You withdraw, process things alone, don't let anyone close. Withdrawal protects but prolongs isolation.`,
        bewusstheitEN: `Is there someone you could tell today what you've lost - without having to explain everything? Just show.`,
        uebungEN: `Reach out to someone you trust today - not to talk, but to not be alone. Just say, "I'm grieving right now. Can you be near?"`
      },
      ueberforderung: {
        autopilot: `\u00dcberforderung entsteht, wenn Au\u00dfenwelt und Beziehungsanforderungen zu viel werden. Man zieht sich in intensive Gedankenwelten oder Einzelprojekte zur\u00fcck \u2013 und verliert den Kontakt zur Realit\u00e4t der Anforderungen.`,
        bewusstheit: `Was ist die eine konkrete Sache, die du heute erledigen musst \u2013 jenseits aller Gedankenwelten? Kannst du das priorisieren?`,
        uebung: `Setz dir heute ein konkretes Zeitlimit: Zwei Stunden f\u00fcr die wichtigste Aufgabe. Danach eine Stunde f\u00fcr dich. Halte beides ein.`,
        autopilotEN: `Overwhelm occurs when the outside world and relationship demands become too much. You retreat into intensive worlds of thought or individual projects - and lose contact with the reality of the requirements.`,
        bewusstheitEN: `What is the one specific thing you need to do today - beyond all thought? Can you prioritize that?`,
        uebungEN: `Set a specific time limit for yourself today: two hours for the most important task. Then an hour for you. Keep both.`
      },
      stagnation: {
        autopilot: `Ohne intensive Verbindung oder tiefes Projekt f\u00fchlt sich alles flach an. Man wartet auf das eine Thema, die eine Begegnung, die alles wieder lebendig macht \u2013 und verpasst das, was jetzt da ist.`,
        bewusstheit: `Was ist gerade da \u2013 auch wenn es nicht das Intensivste ist? Gibt es etwas Kleines, das einen Schritt wert w\u00e4re?`,
        uebung: `Melde dich heute bei einem Menschen, der dir wichtig ist \u2013 nur kurz, ohne Anspruch auf Tiefe. Manchmal beginnt das Lebendige mit einem kleinen Kontakt.`,
        autopilotEN: `Without an intense connection or deep project, everything feels flat. You wait for that one topic, that one encounter that will bring everything back to life - and miss what is there now.`,
        bewusstheitEN: `What\u2019s there right now \u2013 even if it\u2019s not the most intense thing? Is there something small that would be worth a step?`,
        uebungEN: `Get in touch with someone who is important to you today \u2013 just briefly, without any pretense of depth. Sometimes life begins with a small contact.`
      },
    },

    "SE6": {
      erschoepfung: {
        autopilot: `Der K\u00f6rper sendet Ersch\u00f6pfungssignale \u2013 und der Geist beginnt sofort, sie zu analysieren. Sind das normale Zeichen der M\u00fcdigkeit oder etwas Besorgniserregendes? Die Suche nach Sicherheit in der Unsicherheit kostet weitere Energie.`,
        bewusstheit: `Was w\u00e4re, wenn du den Ersch\u00f6pfungssignalen deines K\u00f6rpers ohne Analyse vertrauen w\u00fcrdest \u2013 einfach als Tatsache: Ich bin jetzt m\u00fcde, und das reicht als Antwort?`,
        uebung: `Wenn ein Gedanke kommt, der deine Ersch\u00f6pfung analysieren oder absichern will, benenne ihn leise: "Das ist der Sicherheitsimpuls." Atme. Lass ihn ziehen, ohne ihm zu folgen.`,
        autopilotEN: `Stagnation triggers intense anxiety: What if things stay like this forever? What if I'm falling behind everyone else? Worrying about the future makes the present standstill feel unbearable. You try to find safety by building elaborate plans instead of grounding yourself in the now.`,
        bewusstheitEN: `What if you are neither moving forward nor falling behind right now\u2014but simply conserving your energy and gathering strength? Could this standstill actually be a necessary rest?`,
        uebungEN: `Today, write down a list of what is currently stable and reliable in your life. Don't focus on what is missing\u2014focus on what is holding you up. Read that list to yourself three times.`
      },
      konflikt: {
        autopilot: `Im Konflikt kann Angst entstehen \u2013 Angst vor dem Verlust der Beziehung, vor dem Chaos, vor dem Falschen. Das zeigt sich entweder als Absicherungssuche oder als Verh\u00e4rtung: Ich bin im Recht und werde das verteidigen.`,
        bewusstheit: `Was f\u00fcrchtest du gerade wirklich hinter diesem Konflikt? Und ist diese Bef\u00fcrchtung wirklich das, was gerade passiert?`,
        uebung: `Trenne das eigentliche Konfliktthema von der Angst darunter. Nenne die Angst leise bei Namen \u2013 und dann erst: Was ist das eigentliche Thema?`,
        autopilotEN: `Fear can arise in conflict \u2013 fear of losing the relationship, of chaos, of doing the wrong thing. This shows itself either as a search for protection or as a hardening: I am right and will defend it.`,
        bewusstheitEN: `What do you really fear behind this conflict? And is this fear really what is happening?`,
        uebungEN: `Separate the actual issue of conflict from the fear underneath. Quietly name the fear \u2013 and only then: What is the actual issue?`
      },
      einsamkeit: {
        autopilot: `Einsamkeit aktiviert die Angst: Ist das normal? Habe ich etwas falsch gemacht? Werde ich ausgeschlossen? Der Geist beginnt zu analysieren und abzusichern, anstatt einfach Verbindung zu suchen.`,
        bewusstheit: `Was w\u00e4re, wenn die Einsamkeit einfach eine Pause ist \u2013 kein Zeichen einer Gefahr, kein Zeichen eines Fehlers?`,
        uebung: `Melde dich bei jemandem, dem du vertraust \u2013 nicht mit einer Frage, sondern mit einer Einladung: Lass uns Zeit miteinander verbringen. Vertrau dem Impuls, ohne ihn vorher zu analysieren.`,
        autopilotEN: `Loneliness activates fear: is this normal? Did I do something wrong? Will I be excluded? The mind begins to analyze and insure instead of simply seeking connection.`,
        bewusstheitEN: `What if loneliness is simply a pause \u2013 not a sign of danger, not a sign of mistake?`,
        uebungEN: `Reach out to someone you trust - not with a question, but with an invitation: Let's spend time together. Trust the impulse without analyzing it first.`
      },
      entscheidung: {
        autopilot: `Entscheidungen l\u00f6sen Katastrophendenken aus: Was, wenn das falsch ist? Was sind die schlimmsten Konsequenzen? Der Geist entwickelt Szenarien, die die Entscheidung immer risikoreicher erscheinen lassen.`,
        bewusstheit: `Wie wahrscheinlich ist das schlimmste Szenario wirklich \u2013 und hast du schon einmal eine Entscheidung getroffen und \u00fcberlebt, die sich damals auch so anf\u00fchlte?`,
        uebung: `Schreibe das schlimmste Szenario auf. Dann schreibe, was du in diesem Fall tun w\u00fcrdest. Wenn du das wei\u00dft, hat die Angst weniger Macht \u00fcber die Entscheidung.`,
        autopilotEN: `Decisions trigger catastrophic thinking: What if this is wrong? What are the worst consequences? The mind develops scenarios that make the decision seem increasingly risky.`,
        bewusstheitEN: `How likely is the worst case scenario really - and have you ever made a decision and survived that felt like that at the time?`,
        uebungEN: `Write down the worst case scenario. Then write what you would do in this case. When you know this, fear has less power over the decision.`
      },
      beziehungskrise: {
        autopilot: `Die Angst dominiert: Verliere ich diese Beziehung? Bin ich schuld? Was denken andere dar\u00fcber? Man sucht Sicherheit durch R\u00fcckfragen, Absicherung, Analyse \u2013 und macht die Krise dadurch oft gr\u00f6\u00dfer.`,
        bewusstheit: `Was wei\u00dft du gerade wirklich \u2013 und was bef\u00fcrchtest du nur? Und gibt es jemanden, dem du vertraust, der dir helfen k\u00f6nnte, das zu trennen?`,
        uebung: `Sprich mit dem anderen ruhig und direkt: \u201eIch mache mir Sorgen um uns. Wie siehst du das?" Dann h\u00f6re die Antwort, ohne sie sofort zu bewerten oder zu katastrophisieren.`,
        autopilotEN: `Fear dominates: Will I lose this relationship? Am I to blame? What do others think about it? You seek security through questions, security, analysis - and this often makes the crisis bigger.`,
        bewusstheitEN: `What do you really know right now - and what are you afraid of? And is there anyone you trust who could help you separate this?`,
        uebungEN: `Speak to the other person calmly and directly: "I'm worried about us. How do you see that?" Then hear the answer without immediately judging or catastrophizing it.`
      },
      selbstzweifel: {
        autopilot: `Der Selbstzweifel ist von Angst gespeist: Bin ich wirklich sicher, dass ich das richtig mache? Was, wenn ich falsch liege? Was, wenn andere das durchschauen? Die innere Kritik l\u00e4dt jede Unsicherheit mit Bedrohung auf.`,
        bewusstheit: `Was w\u00e4re, wenn du unsicher sein darfst \u2013 und das trotzdem kein Zeichen ist, dass etwas grundlegend falsch mit dir ist?`,
        uebung: `Wenn der Selbstzweifel auftaucht, benenne ihn laut: \u201eDas ist Angst, nicht Wahrheit." Dann frage dich: Was w\u00fcrde ein ruhiger, wohlmeinender Beobachter sagen?`,
        autopilotEN: `Self-doubt is fueled by fear: Am I really sure I'm doing this right? What if I'm wrong? What if others see through this? The inner criticism charges every uncertainty with a threat.`,
        bewusstheitEN: `What if you were allowed to be insecure - and that still wasn't a sign that there was something fundamentally wrong with you?`,
        uebungEN: `When self-doubt arises, name it out loud: "This is fear, not truth." Then ask yourself: What would a calm, well-meaning observer say?`
      },
      verlust: {
        autopilot: `Verlust l\u00f6st Angst aus: Was kommt jetzt? Wie sicher bin ich noch? Der Schmerz mischt sich mit Sorge um die Zukunft. Man sucht Sicherheit, Rat, Best\u00e4tigung \u2013 statt die Trauer direkt zu begegnen.`,
        bewusstheit: `Was w\u00e4re, wenn du heute die Sorge um die Zukunft beiseitestellst \u2013 nur f\u00fcr eine Stunde \u2013 und einfach trauerst, was jetzt ist?`,
        uebung: `Schreibe auf: Was habe ich verloren, und was ist trotzdem noch da? Nicht um den Schmerz zu minimieren \u2013 um das Fundament zu sehen, das tr\u00e4gt.`,
        autopilotEN: `Loss triggers fear: what comes next? How safe am I? The pain is mixed with worry about the future. You look for security, advice, confirmation - instead of facing the grief directly.`,
        bewusstheitEN: `What if you put aside worry about the future today \u2013 just for an hour \u2013 and just mourn what is now?`,
        uebungEN: `Write down: What have I lost and what is still there? Not to minimize the pain - to see the foundation that supports.`
      },
      ueberforderung: {
        autopilot: `\u00dcberforderung aktiviert Angst: Was, wenn ich es nicht schaffe? Was, wenn etwas schiefgeht? Man sucht Absicherung, fragt andere, plant doppelt. Der Druck w\u00e4chst mit der Sorge.`,
        bewusstheit: `Was ist das Schlimmste, das wirklich passieren kann \u2013 und wie wahrscheinlich ist das? Was w\u00e4re realistisch betrachtet genug?`,
        uebung: `Schreibe heute auf: Was muss ich wirklich tun, und was bef\u00fcrchte ich nur, tun zu m\u00fcssen? Trenne beides. Handle nur nach der ersten Liste.`,
        autopilotEN: `Overwhelm activates fear: What if I can't do it? What if something goes wrong? You look for protection, ask others, plan twice. The pressure increases with the worry.`,
        bewusstheitEN: `What's the worst that can really happen - and how likely is that? Realistically, what would be enough?`,
        uebungEN: `Write down today: What do I really need to do, and what am I just afraid I need to do? Separate both. Only act on the first list.`
      },
      stagnation: {
        autopilot: `Stagnation l\u00f6st Angst aus: Was, wenn das immer so bleibt? Was, wenn ich den Anschluss verliere? Die Sorge um die Zukunft macht den Stillstand schwerer. Man sucht Sicherheit in Pl\u00e4nen statt im Jetzt.`,
        bewusstheit: `Was w\u00e4re, wenn du gerade weder voranschreitest noch zur\u00fcckf\u00e4llst \u2013 sondern Kraft sammelst? Kann der Stillstand auch das sein?`,
        uebung: `Schreibe heute auf: Was ist gerade stabil in meinem Leben? Nicht was fehlt \u2013 was tr\u00e4gt. Lies die Liste dreimal.`,
        autopilotEN: `Stagnation triggers fear: What if it stays that way forever? What if I lose connection? Concern about the future makes standing still more difficult. You look for security in plans instead of in the now.`,
        bewusstheitEN: `What if you were neither moving forward nor falling behind - but gathering strength? Could this also be the standstill?`,
        uebungEN: `Write down today: What is stable in my life right now? Not what is missing - what contributes. Read the list three times.`
      },
    },

    "SO6": {
      erschoepfung: {
        autopilot: `Die Pflichten bleiben \u2013 auch wenn die Energie fehlt. Das System tr\u00e4gt einen: man folgt den Routinen, den Strukturen, den Erwartungen. Aufh\u00f6ren w\u00fcrde bedeuten, das System oder die Gemeinschaft zu entt\u00e4uschen.`,
        bewusstheit: `Welche Pflichten tr\u00e4gst du gerade, weil du sie wirklich f\u00fcr richtig h\u00e4ltst \u2013 und welche tr\u00e4gst du, weil du Angst vor den Konsequenzen des Nicht-Tragens hast?`,
        uebung: `W\u00e4hle heute eine einzige Pflicht bewusst aus und frage dich: Tue ich das aus innerer \u00dcberzeugung \u2013 oder aus Angst? Lass die Antwort auftauchen, ohne sofort zu handeln.`,
        autopilotEN: `Without a clear group task or a sense of belonging to a system, you face a sudden loss of direction: *What is my role? Where do I fit in?* You frantically search for external structure and alignment instead of looking for internal direction.`,
        bewusstheitEN: `What if you are important right now not because of a group or a structure\u2014but simply for your own sake? What value do you carry within yourself?`,
        uebungEN: `Do something today that belongs entirely to you\u2014not a project for the group, and not a contribution for others. Just for you. Observe how that feels.`
      },
      konflikt: {
        autopilot: `Im Konflikt wird auf das verwiesen, was \u00fcblich ist, was die Gruppe erwartet, was die Regeln sagen. Die eigene Position wird weniger als pers\u00f6nliche Meinung formuliert, sondern als das, was man eben tut.`,
        bewusstheit: `Was ist deine eigene Meinung in diesem Konflikt \u2013 unabh\u00e4ngig von dem, was andere erwarten oder was die Norm sagt?`,
        uebung: `Formuliere deinen Standpunkt einmal ganz pers\u00f6nlich: \u201eIch pers\u00f6nlich m\u00f6chte ...\u201d Beobachte, wie sich das anf\u00fchlt.`,
        autopilotEN: `In the conflict, reference is made to what is usual, what the group expects, what the rules say. Your own position is formulated less as a personal opinion and more as what you do.`,
        bewusstheitEN: `What is your own opinion in this conflict - regardless of what others expect or what the norm says?`,
        uebungEN: `Formulate your point of view in a very personal way: \u201cI personally want to\u2026\u201d Observe how that feels.`
      },
      einsamkeit: {
        autopilot: `Einsamkeit innerhalb der Gruppe f\u00fchlt sich paradox an: Man ist umgeben von Menschen, und trotzdem allein. Das Zugeh\u00f6rigkeitsgef\u00fchl fehlt, obwohl man dazugeh\u00f6rt. Die Suche nach dem richtigen System, der richtigen Gemeinschaft geht weiter.`,
        bewusstheit: `Suchst du Zugeh\u00f6rigkeit durch das Erf\u00fcllen von Erwartungen \u2013 oder durch echtes Zeigen, wer du bist? Wissen die Menschen in deiner Gruppe, was dich wirklich bewegt?`,
        uebung: `Erz\u00e4hle heute jemandem aus deiner Gruppe etwas wirklich Pers\u00f6nliches \u2013 keine Meinung \u00fcber die Gruppe, sondern etwas \u00fcber dich. Beobachte, wie das die Verbindung ver\u00e4ndert.`,
        autopilotEN: `Loneliness within the group feels paradoxical: you are surrounded by people, but still alone. The feeling of belonging is missing, even though you belong. The search for the right system, the right community continues.`,
        bewusstheitEN: `Do you seek belonging through meeting expectations \u2013 or through truly showing who you are? Do the people in your group know what really concerns you?`,
        uebungEN: `Today, tell someone in your group something really personal\u2014not an opinion about the group, but something about yourself. Watch how this changes the connection.`
      },
      entscheidung: {
        autopilot: `Man sucht Sicherheit durch Gruppenentscheid: Was w\u00fcrde die Gemeinschaft w\u00e4hlen? Was ist der Konsens? Die eigene Position verschwindet hinter dem, was das System guthei\u00dft.`,
        bewusstheit: `Was w\u00fcrdest du w\u00e4hlen, wenn du nicht die Zustimmung der Gruppe br\u00e4uchtest? Gibt es eine Meinung in dir, die du noch nicht laut gesagt hast?`,
        uebung: `Teile deine eigene Position mit \u2013 auch wenn sie vom Gruppenkonsens abweicht. Sage sie als pers\u00f6nliche Meinung, nicht als Wahrheit. Beobachte, was das in dir ausl\u00f6st.`,
        autopilotEN: `You seek security through group decision: What would the community choose? What is the consensus? Your own position disappears behind what the system approves.`,
        bewusstheitEN: `What would you choose if you didn't need the group's approval? Is there an opinion in you that you haven't spoken out loud yet?`,
        uebungEN: `Share your own position \u2013 even if it differs from the group consensus. Say it as a personal opinion, not as truth. Observe what this triggers in you.`
      },
      beziehungskrise: {
        autopilot: `Man fragt die Gruppe: Was w\u00fcrden andere an meiner Stelle tun? Was ist normal, was ist vertretbar? Die eigene Einsch\u00e4tzung der Krise tritt zur\u00fcck zugunsten des kollektiven Urteils.`,
        bewusstheit: `Was wei\u00dft du selbst \u2013 in dir, ruhig, unabh\u00e4ngig von anderen \u2013 \u00fcber diese Beziehungssituation? Diese Stimme hat das meiste Recht.`,
        uebung: `Schreibe auf, wie du die Krise einsch\u00e4tzt \u2013 ohne Ratschl\u00e4ge zu suchen, ohne Vergleich. Nur du, deine Wahrnehmung, deine Einsch\u00e4tzung. Dann entscheide, wie du handeln m\u00f6chtest.`,
        autopilotEN: `You ask the group: What would others do in my position? What is normal, what is acceptable? Your own assessment of the crisis takes a back seat in favor of the collective judgment.`,
        bewusstheitEN: `What do you know \u2013 within yourself, calmly, independently of others \u2013 about this relationship situation? This voice has the most right.`,
        uebungEN: `Write down how you assess the crisis - without seeking advice, without comparison. Only you, your perception, your assessment. Then decide how you want to act.`
      },
      selbstzweifel: {
        autopilot: `Man zweifelt, ob man dem System, der Gruppe, den Erwartungen gerecht wird. Bin ich wirklich loyal genug? Tue ich das Richtige? Der Selbstzweifel bindet sich an das kollektive Urteil: Was w\u00fcrde die Gruppe denken?`,
        bewusstheit: `Wessen Meinung fragst du gerade innerlich ab \u2013 und vertraust du dabei auch dir selbst? Was w\u00fcrdest du einsch\u00e4tzen, wenn du niemanden fragen k\u00f6nntest?`,
        uebung: `F\u00e4lle heute eine kleine Einsch\u00e4tzung oder Entscheidung ohne R\u00fccksprache. Dann beobachte: War die Welt davon abh\u00e4ngig? Und: War deine Einsch\u00e4tzung so falsch?`,
        autopilotEN: `You doubt whether you are living up to the system, the group, the expectations. Am I really loyal enough? Am I doing the right thing? Self-doubt is tied to the collective judgment: What would the group think?`,
        bewusstheitEN: `Whose opinion are you currently asking internally - and do you also trust yourself? What would you rate if you couldn't ask anyone?`,
        uebungEN: `Cases today require a small assessment or decision without consultation. Then observe: Did the world depend on it? And: Was your assessment so wrong?`
      },
      verlust: {
        autopilot: `Man sucht in der Gemeinschaft Halt: Rituale, Gruppen, Traditionen helfen. Aber manchmal bleibt der eigene Schmerz unter dem kollektiven Rahmen verborgen, weil es einfacher ist zu tragen als zu f\u00fchlen.`,
        bewusstheit: `Gibt es in diesem Verlust etwas, das nur dir geh\u00f6rt \u2013 und das du noch nicht wirklich gef\u00fchlt hast?`,
        uebung: `Nimm dir heute eine halbe Stunde allein \u2013 keine Gruppe, keine Gemeinschaft. Nur du und dein Verlust. Dann komm zur\u00fcck und sag einem Menschen einen Satz dar\u00fcber.`,
        autopilotEN: `You look for support in the community: rituals, groups, traditions help. But sometimes one's own pain remains hidden under the collective framework because it is easier to bear than to feel.`,
        bewusstheitEN: `Is there something in this loss that is only yours - and that you haven't really felt yet?`,
        uebungEN: `Take half an hour alone today - no group, no community. Just you and your loss. Then come back and say a sentence about it to someone.`
      },
      ueberforderung: {
        autopilot: `Man \u00fcbernimmt Verantwortung f\u00fcr das System, die Gruppe, die Erwartungen anderer \u2013 und vergisst die eigenen Grenzen. Treu und verl\u00e4sslich bis zur Ersch\u00f6pfung.`,
        bewusstheit: `Was \u00fcbernimmst du gerade, das nicht dein Job ist? Und was w\u00e4re der erste Schritt, das zur\u00fcckzugeben?`,
        uebung: `Sprich heute mit jemandem im Team oder der Gruppe: \u201eIch brauche Unterst\u00fctzung bei \u2026" Benenne konkret, was du brauchst. Lass andere teilhaben.`,
        autopilotEN: `You take responsibility for the system, the group, the expectations of others - and forget your own boundaries. Loyal and reliable until exhaustion.`,
        bewusstheitEN: `What are you taking on that isn't your job? And what would be the first step to giving that back?`,
        uebungEN: `Talk to someone in the team or group today: \u201cI need help with\u2026\u201d Be specific about what you need. Let others participate.`
      },
      stagnation: {
        autopilot: `Ohne Gruppenaufgabe oder Systemzugeh\u00f6rigkeit droht Orientierungsverlust: Was ist meine Rolle? Wozu geh\u00f6re ich? Man sucht nach Struktur und Anschluss statt nach innerer Richtung.`,
        bewusstheit: `Was w\u00e4re, wenn du gerade nicht wegen einer Gruppe oder Struktur wichtig bist \u2013 sondern f\u00fcr sich selbst? Was tr\u00e4gst du in dir?`,
        uebung: `Tue heute etwas, das nur dir geh\u00f6rt \u2013 kein Projekt f\u00fcr die Gruppe, kein Beitrag f\u00fcr andere. Nur f\u00fcr dich. Beobachte, wie sich das anf\u00fchlt.`,
        autopilotEN: `Without a group task or system affiliation, there is a risk of loss of orientation: What is my role? What do I belong to? You look for structure and connection instead of inner direction.`,
        bewusstheitEN: `What if you are important not because of a group or structure - but for yourself? What do you carry within you?`,
        uebungEN: `Do something today that is just yours - not a project for the group, not a contribution to others. Only for you. Watch how that feels.`
      },
    },

    "SX6": {
      erschoepfung: {
        autopilot: `Die Ersch\u00f6pfung schl\u00e4gt um in Aggression oder pl\u00f6tzliche \u00dcberaktivit\u00e4t \u2013 man k\u00e4mpft gegen sie an, statt sie anzuerkennen. Oder der Einbruch kommt unvermittelt und \u00fcberrascht einen selbst.`,
        bewusstheit: `Was sagst du dir gerade, um nicht innehalten zu m\u00fcssen? Und wovor sch\u00fctzt dieses Weiterk\u00e4mpfen dich eigentlich?`,
        uebung: `Halte an einem Punkt des Tages bewusst inne \u2013 nicht weil du musst, sondern weil du es w\u00e4hlst. Bleibe einen Moment in dieser gew\u00e4hlten Stille. Beobachte, was auftaucht.`,
        autopilotEN: `Stagnation triggers a tense cycle of paralysis and rebellion: you either aggressively fight against the standstill and run blindly forward, or you freeze up completely. You rarely allow yourself to just tolerate the internal emptiness.`,
        bewusstheitEN: `What if you chose neither to fight nor to freeze today\u2014but simply sat still and watched whatever comes up?`,
        uebungEN: `Pause right in the middle of the emptiness today. Spend ten minutes completely free of distractions. Then ask yourself: *What is quietly calling out from the depths?* Write it down.`
      },
      konflikt: {
        autopilot: `Im Konflikt kann die Energie nach aussen schlagen \u2013 konfrontativ, direkt, herausfordernd. Manchmal testet man dabei, ob der andere wirklich standhalt. Das kann eskalieren.`,
        bewusstheit: `Testest du den anderen gerade \u2013 und was erhoffst du dir, was dabei passiert? Vertraust du dem Ergebnis, egal wie es ausgeht?`,
        uebung: `Bevor du konfrontierst: Frage einmal nach, statt zu fordern. \u201eIch verstehe das gerade nicht \u2013 was meinst du damit?\u201d Beobachte, ob das den Raum \u00f6ffnet.`,
        autopilotEN: `In conflict, the energy can spill outward - confrontational, direct, challenging. Sometimes you test whether the other person can really hold up. This can escalate.`,
        bewusstheitEN: `Are you currently testing the other one \u2013 and what do you hope will happen? Do you trust the outcome, no matter what it turns out to be?`,
        uebungEN: `Before you confront: ask instead of demanding. \u201cI don\u2019t understand right now \u2013 what do you mean?\u201d See if this opens up the space.`
      },
      einsamkeit: {
        autopilot: `Einsamkeit erzeugt Misstrauen: Warum sind die anderen nicht da? Was steckt dahinter? Man scannt die Situation nach Gefahren und zieht sich gleichzeitig heraus \u2013 was die Einsamkeit verst\u00e4rkt.`,
        bewusstheit: `Misstraust du gerade dem Alleinsein \u2013 oder misstraust du den Menschen, die nicht da sind? Was w\u00fcrde passieren, wenn du dem Impuls zur Verbindung vertraust?`,
        uebung: `Teste heute das Vertrauen: Melde dich bei jemandem, ohne vorher zu wissen, wie er reagiert. Lass offen, was kommt.`,
        autopilotEN: `Loneliness creates mistrust: Why aren't the others there? What's behind it? You scan the situation for danger and at the same time withdraw yourself - which increases the loneliness.`,
        bewusstheitEN: `Do you distrust being alone right now - or do you distrust people who aren't there? What would happen if you trusted the impulse to connect?`,
        uebungEN: `Test your trust today: Reach out to someone without knowing how they will react. Leave open what comes.`
      },
      entscheidung: {
        autopilot: `Entscheidungen werden entweder mutig und konfrontativ getroffen \u2013 gegen den Strom, gegen die Erwartung \u2013 oder endlos aufgeschoben, weil die Gefahr jeder Option analysiert wird. Beides kann l\u00e4hmen.`,
        bewusstheit: `Entscheidest du gerade aus St\u00e4rke \u2013 oder gegen eine Angst? Und w\u00e4re die Entscheidung dieselbe, wenn die Angst nicht da w\u00e4re?`,
        uebung: `Frage dich: Was w\u00fcrde ich w\u00e4hlen, wenn ich weder Angst vor dem Falschen noch den Impuls h\u00e4tte, mutig zu wirken? Diese neutrale Antwort ist oft die richtige.`,
        autopilotEN: `Decisions are either made boldly and confrontationally \u2013 against the grain, against expectations \u2013 or endlessly postponed as the danger of each option is analyzed. Both can be paralyzing.`,
        bewusstheitEN: `Are you making decisions based on strength \u2013 or against fear? And would the decision be the same if the fear wasn't there?`,
        uebungEN: `Ask yourself: What would I choose if I had neither fear of doing wrong nor the impulse to appear bold? This neutral answer is often the correct one.`
      },
      beziehungskrise: {
        autopilot: `Entweder eskaliert die Krise \u2013 man k\u00e4mpft, konfrontiert, macht den anderen f\u00fcr alles verantwortlich \u2013 oder man fl\u00fcchtet: neue Aktivit\u00e4ten, andere Kontakte, alles au\u00dfer dem eigentlichen Gespr\u00e4ch.`,
        bewusstheit: `Sch\u00fctzt das K\u00e4mpfen oder Fl\u00fcchten gerade dich \u2013 oder vertieft es die Krise? Was w\u00e4re, wenn du einen Moment einfach stehenbleibst?`,
        uebung: `Sage dem anderen ruhig, was dich verletzt hat \u2013 ohne Vorwurf, ohne Drama. Nur: \u201eDas hat mich getroffen, weil..." Mehr nicht. Beobachte, was dann passiert.`,
        autopilotEN: `Either the crisis escalates - you fight, confront, blame the other person for everything - or you flee: new activities, other contacts, everything except the actual conversation.`,
        bewusstheitEN: `Does fighting or fleeing protect you \u2013 or does it deepen the crisis? What if you just stood still for a moment?`,
        uebungEN: `Calmly tell the other person what hurt you - without blame, without drama. Just: "That hit me because..." Nothing more. Watch what happens then.`
      },
      selbstzweifel: {
        autopilot: `Der Selbstzweifel kippt leicht in Misstrauen: Stimmt das wirklich, was ich denke? Und wenn es stimmt \u2013 bin ich dann mutig genug, es zu tun? Oder zu feige? Man zweifelt an der Einsch\u00e4tzung und an der eigenen Reaktion auf sie.`,
        bewusstheit: `Was wei\u00dft du gerade \u2013 nicht was du bef\u00fcrchtest? Und was w\u00fcrde ein mutiger, aber ruhiger Mensch in deiner Lage jetzt tun?`,
        uebung: `Triff heute eine kleine, klare Entscheidung ohne langes Abw\u00e4gen. Dann stehe dazu, auch wenn Zweifel kommt. Beobachte: Was passiert wirklich?`,
        autopilotEN: `Self-doubt easily turns into distrust: Is what I think really true? And if it's true, am I brave enough to do it? Or too cowardly? You doubt your assessment and your own reaction to it.`,
        bewusstheitEN: `What do you know right now \u2013 not what you fear? And what would a brave but calm person in your situation do now?`,
        uebungEN: `Make a small, clear decision today without long consideration. Then stand by it, even if doubts arise. Watch: What's Really Happening?`
      },
      verlust: {
        autopilot: `Verlust erzeugt innere Zerrissenheit: Der Schmerz ist da, aber man zweifelt an ihm. War das wirklich so wichtig? H\u00e4tte ich es verhindern k\u00f6nnen? Die Trauer kippt zwischen Intensit\u00e4t und Selbstzweifel.`,
        bewusstheit: `Was w\u00e4re, wenn dein Schmerz berechtigt ist \u2013 ohne Rechtfertigung, ohne Vergleich? Er ist einfach da. Das reicht.`,
        uebung: `Schreibe heute einen Satz: \u201eIch trauere um \u2026, weil \u2026" Lass ihn stehen, ohne ihn zu hinterfragen. Das ist genug.`,
        autopilotEN: `Loss creates inner conflict: the pain is there, but you doubt it. Was it really that important? Could I have prevented it? The grief oscillates between intensity and self-doubt.`,
        bewusstheitEN: `What if your pain is justified \u2013 without justification, without comparison? He's just there. That's enough.`,
        uebungEN: `Write a sentence today: "I mourn... because..." Leave it there without questioning it. That's enough.`
      },
      ueberforderung: {
        autopilot: `\u00dcberforderung erzeugt Zerrissenheit: einerseits k\u00e4mpft man dagegen an (konterphobisch), andererseits l\u00e4hmt die Angst das Handeln. Man wechselt zwischen \u00dcberforderungs-Angriff und Erstarrung.`,
        bewusstheit: `Was w\u00e4re der n\u00e4chste kleine, sichere Schritt \u2013 nicht die ganze L\u00f6sung, nur der n\u00e4chste Schritt?`,
        uebung: `Schreibe die drei dringendsten Aufgaben auf. Dann tue die erste \u2013 nur die erste. Alles andere existiert f\u00fcr jetzt nicht. Beobachte, was das l\u00f6st.`,
        autopilotEN: `Excessive demands create conflict: on the one hand you fight against it (counterphobic), on the other hand fear paralyzes action. You alternate between being overwhelmed and being frozen.`,
        bewusstheitEN: `What would be the next small, safe step \u2013 not the whole solution, just the next step?`,
        uebungEN: `Write down the three most urgent tasks. Then do the first one \u2013 only the first one. Everything else doesn't exist for now. Watch what solves this.`
      },
      stagnation: {
        autopilot: `Stagnation kippt zwischen L\u00e4hmung und Aufbegehren: Entweder man k\u00e4mpft dagegen an und rennt los, oder man erstarrt. Die innere Leere wird selten einfach ausgehalten.`,
        bewusstheit: `Was w\u00e4re, wenn du heute weder k\u00e4mpfst noch l\u00e4hmst \u2013 sondern einfach sitzt und schaust, was kommt?`,
        uebung: `Halte heute inmitten der Leere inne. Zehn Minuten ohne Ablenkung. Dann frage: Was meldet sich leise aus der Tiefe? Schreibe es auf.`,
        autopilotEN: `Stagnation oscillates between paralysis and rebellion: either you fight it and run, or you freeze. The inner emptiness is rarely simply endured.`,
        bewusstheitEN: `What if you didn't fight or paralyze today - but just sit and see what comes?`,
        uebungEN: `Pause in the midst of emptiness today. Ten minutes without distractions. Then ask: What speaks quietly from the depths? Write it down.`
      },
    },

    "SE7": {
      erschoepfung: {
        autopilot: `Die Ablenkung nimmt zu. Noch eine Aktivit\u00e4t, noch ein Erlebnis, noch ein Gespr\u00e4ch \u2013 alles, um nicht bei der Ersch\u00f6pfung anzukommen. Das funktioniert kurzfristig und ersch\u00f6pft langfristig noch mehr.`,
        bewusstheit: `Wohin fl\u00fcchtest du gerade \u2013 und was w\u00fcrdest du sp\u00fcren, wenn du nicht fl\u00fcchten w\u00fcrdest?`,
        uebung: `Sitz f\u00fcr zehn Minuten ohne Ablenkung. Wenn der Impuls kommt, etwas zu tun oder zu wechseln \u2013 beobachte ihn. Benenne ihn: "Das ist der Fluchtimpuls." Bleib.`,
        autopilotEN: `Stagnation feels utterly intolerable to your system: you instantly jump to the next concept, the next thrill, or the next elaborate plan. You aggressively fill the internal void before it has a single chance to say anything meaningful to you.`,
        bewusstheitEN: `What if you deliberately chose not to fill the emptiness today\u2014and instead waited to see what it wants to show you? What have you been tuning out up until now?`,
        uebungEN: `Sit for half an hour today with no plan, no goal, and no distractions. When the internal restlessness inevitably hits, don't move. Just stay. Observe what is resting right beneath the noise.`
      },
      konflikt: {
        autopilot: `Im Konflikt tritt der Reframing-Impuls in Kraft: Das halb volle Glas wird betont, das Problem heruntergespielt, das Thema umgeleitet. Man m\u00f6chte den Konflikt aufl\u00f6sen \u2013 ohne wirklich in ihn hineinzugehen.`,
        bewusstheit: `Was wird gerade unter dem Humor oder der Umlenkung vergraben \u2013 und was w\u00e4re, wenn du es liessest, oben zu bleiben?`,
        uebung: `Bleibe einmal bei einem unangenehmen Konfliktmoment, ohne ihn aufzuhellen oder umzulenken. Halte den Raum offen. Beobachte, was dann kommt.`,
        autopilotEN: `In conflict, the reframing impulse comes into force: the glass half full is emphasized, the problem is downplayed, the topic is redirected. You want to resolve the conflict \u2013 without really getting into it.`,
        bewusstheitEN: `What is being buried beneath the humor or redirection right now \u2013 and what if you let it stay on top?`,
        uebungEN: `Stay with an unpleasant moment of conflict without lightening it or redirecting it. Keep the space open. Watch what comes next.`
      },
      einsamkeit: {
        autopilot: `Einsamkeit wird weggelenkt \u2013 neue Pl\u00e4ne, neue Ideen, neue Ablenkungen. Man redet sich ein, dass man das Alleinsein mag, dass man Freiheit braucht. Darunter liegt manchmal eine Sehnsucht, die man sich nicht eingestehen m\u00f6chte.`,
        bewusstheit: `Was w\u00e4re, wenn du die Einsamkeit nicht wegoptimierst, sondern einen Moment wirklich darin sitzt? Was kommt dann?`,
        uebung: `Sitz heute zehn Minuten ohne Plan, ohne n\u00e4chste Idee. Lass die Stille kommen. Was zeigt sich, wenn das Rauschen aufh\u00f6rt?`,
        autopilotEN: `Loneliness is diverted away \u2013 new plans, new ideas, new distractions. You convince yourself that you like being alone, that you need freedom. Sometimes there is a longing underneath that you don't want to admit to yourself.`,
        bewusstheitEN: `What if you didn't try to eliminate loneliness, but actually sat in it for a moment? What comes next?`,
        uebungEN: `Sit for ten minutes today with no plan, no next idea. Let the silence come. What happens when the noise stops?`
      },
      entscheidung: {
        autopilot: `Man springt schnell zur Entscheidung \u2013 um die Optionen offenzuhalten, um das Unbehagen des Wartens zu vermeiden. Gleichzeitig werden die Alternativen im Hinterkopf behalten. Man hat entschieden, aber noch nicht wirklich losgelassen.`,
        bewusstheit: `Hast du diese Entscheidung wirklich getroffen \u2013 oder h\u00e4ltst du sie noch offen? Was w\u00e4re, wenn du sie jetzt wirklich abschliesst?`,
        uebung: `Entscheide dich \u2013 und schlie\u00dfe die T\u00fcr zu den Alternativen bewusst. Sage laut: Diese Option lasse ich los. Beobachte, was das in dir ausl\u00f6st.`,
        autopilotEN: `You jump to the decision quickly \u2013 to keep your options open, to avoid the discomfort of waiting. At the same time, the alternatives are kept in mind. You've decided, but you haven't really let go yet.`,
        bewusstheitEN: `Have you really made this decision \u2013 or are you still keeping it open? What if you actually complete it now?`,
        uebungEN: `Make a decision \u2013 and consciously close the door to the alternatives. Say out loud: I'm letting go of this option. Observe what this triggers in you.`
      },
      beziehungskrise: {
        autopilot: `Man reframt die Krise: \u201eDas ist nur eine schwierige Phase", \u201eWir wachsen gerade", \u201eDas wird besser." Die eigentliche Spannung wird umgedeutet statt angeschaut. Der andere f\u00fchlt sich damit nicht geh\u00f6rt.`,
        bewusstheit: `Was w\u00e4re, wenn du die Krise einmal so stehenl\u00e4sst, wie sie ist \u2013 ohne sie aufzuhellen? Was w\u00fcrdest du dann sehen und sagen?`,
        uebung: `Sag dem anderen: \u201eIch merke, dass es gerade nicht gut l\u00e4uft zwischen uns." Ohne L\u00f6sung, ohne positiven Rahmen. Nur die Wahrnehmung, klar und direkt.`,
        autopilotEN: `People reframe the crisis: \u201cThis is just a difficult phase,\u201d \u201cWe are currently growing,\u201d \u201cIt will get better.\u201d The actual tension is reinterpreted instead of looked at. The other person doesn't feel heard.`,
        bewusstheitEN: `What if you left the crisis as it is - without trying to make it any better? What would you see and say then?`,
        uebungEN: `Tell the other person: "I notice that things are not going well between us right now." Without a solution, without a positive framework. Just perception, clear and direct.`
      },
      selbstzweifel: {
        autopilot: `Selbstzweifel wird schnell wegoptimiert: Das wird besser, ich schaffe das, kein Grund zur Sorge. Aber darunter liegt manchmal eine tiefere Frage, die nie gestellt wird: Bin ich wirklich genug \u2013 wenn der Glanz weg ist?`,
        bewusstheit: `Was w\u00e4re, wenn du den Selbstzweifel einmal wirklich sitzenlie\u00dfest \u2013 nur f\u00fcr einen Moment, ohne ihn zu l\u00f6sen? Was zeigt er dir?`,
        uebung: `Schreibe auf, was du gerade an dir bezweifelst \u2013 ehrlich, ohne es aufzuhellen. Dann frage dich: Was ist an diesem Zweifel ein echter Hinweis, und was ist Angst in Verkleidung?`,
        autopilotEN: `Self-doubt is quickly eliminated: This will get better, I can do it, no need to worry. But underneath sometimes lies a deeper question that is never asked: Am I really enough - when the shine is gone?`,
        bewusstheitEN: `What if you really let self-doubt sit - just for a moment, without solving it? What is he showing you?`,
        uebungEN: `Write down what you doubt about yourself - honestly, without making light of it. Then ask yourself: What about this doubt is real evidence, and what is fear in disguise?`
      },
      verlust: {
        autopilot: `Verlust wird schnell neu gerahmt: Es wird besser, ich lerne daraus, das war vielleicht gut so. Die Reframing-Strategie sch\u00fctzt vor dem vollen Schmerz \u2013 und manchmal vor dem, was er sagen will.`,
        bewusstheit: `Was w\u00e4re, wenn du diesen Verlust heute nicht neu rahmst \u2013 sondern einfach verlierst? Was w\u00fcrde das zeigen?`,
        uebung: `Sitz heute zehn Minuten mit dem, was du verloren hast \u2013 ohne es umzudeuten, ohne es zu bereichern. Nur: Das ist weg. Das schmerzt. Lass das stimmen.`,
        autopilotEN: `Loss is quickly reframed: It's getting better, I'm learning from it, maybe that was a good thing. The reframing strategy protects from the full pain - and sometimes from what he wants to say.`,
        bewusstheitEN: `What if you didn\u2019t reframe that loss today \u2013 but just lost it? What would that show?`,
        uebungEN: `Today, sit with what you have lost for ten minutes - without reinterpreting it, without enriching it. Only: That's gone. That hurts. Let that be true.`
      },
      ueberforderung: {
        autopilot: `\u00dcberforderung wird weggeredet oder umgelenkt: Es gibt noch so viele spannende M\u00f6glichkeiten, neue Ideen, andere Projekte. Der Druck wird durch Ablenkung gemindert statt gel\u00f6st.`,
        bewusstheit: `Was w\u00e4re, wenn du heute bei dem bleibst, was gerade dr\u00fcckt \u2013 ohne weiterzuziehen zur n\u00e4chsten Idee? Was zeigt sich dann?`,
        uebung: `W\u00e4hle heute die eine Aufgabe, die am l\u00e4ngsten wartet. Setz einen Timer auf 45 Minuten. Nur diese Aufgabe. Kein Wechseln, kein Ablenken. Dann sieh, was du geschafft hast.`,
        autopilotEN: `Excessive demands are explained away or redirected: There are still so many exciting possibilities, new ideas, other projects. The pressure is reduced by distraction instead of released.`,
        bewusstheitEN: `What if you stick with what's currently pressing today - without moving on to the next idea? What then appears?`,
        uebungEN: `Today, choose the one task that has been waiting the longest. Set a timer for 45 minutes. Just this task. No switching, no distractions. Then see what you've accomplished.`
      },
      stagnation: {
        autopilot: `Stagnation wird als unertr\u00e4glich empfunden: Man springt zur n\u00e4chsten Idee, zum n\u00e4chsten Erlebnis, zum n\u00e4chsten Plan. Die Leere wird sofort gef\u00fcllt, bevor sie etwas sagen kann.`,
        bewusstheit: `Was w\u00e4re, wenn du die Leere heute nicht f\u00fcllst \u2013 und wartest, was sie zeigt? Was hast du bisher vielleicht \u00fcberh\u00f6rt?`,
        uebung: `Sitz heute eine halbe Stunde ohne Plan, ohne Ziel, ohne Ablenkung. Wenn die Unruhe kommt, bleib. Beobachte, was sich darunter zeigt.`,
        autopilotEN: `Stagnation is perceived as unbearable: you jump to the next idea, the next experience, the next plan. The void is immediately filled before she can say anything.`,
        bewusstheitEN: `What if you don't fill the void today - and wait to see what it shows? What have you perhaps missed so far?`,
        uebungEN: `Sit today for half an hour with no plan, no goal, no distraction. When trouble comes, stay. Observe what lies beneath.`
      },
    },

    "SO7": {
      erschoepfung: {
        autopilot: `Man opfert sich weiter f\u00fcr die Gruppe, die Aufgabe, die Gemeinschaft \u2013 weil das dem eigenen Schmerz eine h\u00f6here Bedeutung gibt. Die Ersch\u00f6pfung bekommt einen edlen Rahmen, der das Innehalten \u00fcberfl\u00fcssig erscheinen l\u00e4sst.`,
        bewusstheit: `F\u00fcr wen opferst du dich gerade \u2013 und w\u00e4re es f\u00fcr diese Menschen wirklich gut, wenn du dich weiter ersch\u00f6pfst?`,
        uebung: `Formuliere heute einen einzigen Satz, der mit "Ich tue das f\u00fcr mich, weil..." beginnt \u2013 nicht f\u00fcr die Gruppe, nicht f\u00fcr andere. Beobachte, ob und wie schwer das f\u00e4llt.`,
        autopilotEN: `You bridge the internal emptiness with grand visions and future plans: the next big project, the next adventure, the next source of meaning. The actual stagnation remains invisible behind your wall of ideas.`,
        bewusstheitEN: `What if you chose not to map out a brand-new vision today\u2014and instead just sat with the present moment? What is actually here right now?`,
        uebungEN: `Spend an entire evening tonight without making any plans. No notebooks, no brainstorming. Just ask: *What is right now?* Let the answer emerge in total stillness.`
      },
      konflikt: {
        autopilot: `Im Konflikt wird die Vers\u00f6hnung, das gute Ende schnell in den Blick genommen \u2013 manchmal bevor der eigentliche Schmerz wirklich da war. Man m\u00f6chte wieder in den hellen Raum.`,
        bewusstheit: `W\u00e4re es erlaubt, dass dieser Konflikt noch eine Weile da\u00fcrt \u2013 und dass das in Ordnung ist?`,
        uebung: `Bleibe eine Weile im Unbehagen des Konflikts, ohne zur L\u00f6sung zu dr\u00e4ngen. Frage den anderen: \u201eWas brauchst du gerade?\u201d H\u00f6re wirklich zu.`,
        autopilotEN: `In conflicts, reconciliation and the good ending are quickly brought into focus - sometimes before the actual pain was really there. You want to go back into the bright room.`,
        bewusstheitEN: `Would this conflict be allowed to continue for a while - and that that be okay?`,
        uebungEN: `Stay in the discomfort of the conflict for a while without pushing for resolution. Ask the other person, \u201cWhat do you need right now?\u201d Really listen.`
      },
      einsamkeit: {
        autopilot: `Einsamkeit bekommt einen h\u00f6heren Sinn: Man widmet sich der Gemeinschaft, einem Projekt, einer Idee. Die eigene Einsamkeit verschwindet im Dienst an etwas Gr\u00f6\u00dferem. Aber darunter bleibt die Sehnsucht nach echter pers\u00f6nlicher Verbindung.`,
        bewusstheit: `Wem bist du gerade nah \u2013 wirklich nah, als Mensch, nicht als Mitstreiter? Gibt es jemanden, der dich kennt, nicht nur sch\u00e4tzt?`,
        uebung: `Suche heute eine pers\u00f6nliche Begegnung \u2013 ohne Projektbezug, ohne Gruppenrahmen. Einfach zwei Menschen miteinander. Beobachte, was das in dir bewegt.`,
        autopilotEN: `Loneliness takes on a greater meaning: you dedicate yourself to the community, to a project, to an idea. Your own loneliness disappears in the service of something greater. But underneath there remains a longing for real personal connection.`,
        bewusstheitEN: `Who are you close to right now \u2013 really close, as a person, not as a comrade-in-arms? Is there someone who knows you, not just appreciates you?`,
        uebungEN: `Looking for a personal encounter today \u2013 without project reference, without a group setting. Just two people together. Observe what this moves within you.`
      },
      entscheidung: {
        autopilot: `Man rahmt die Entscheidung so, dass jede Option positiv klingt \u2013 ein inneres Reframing, das die Wahl leichter erscheinen l\u00e4sst. Aber darunter bleibt die ungel\u00f6ste Frage, welche Option wirklich die richtige ist.`,
        bewusstheit: `Was w\u00e4re, wenn du die Entscheidung einmal ohne positiven Rahmen anschaust? Was w\u00fcrdest du dann sehen \u2013 und was w\u00fcrdest du dann w\u00e4hlen?`,
        uebung: `Schreibe auf, was an jeder Option wirklich schwierig ist. Dann w\u00e4hle trotzdem. Nicht weil es leicht ist \u2013 sondern weil es dich weiterbringt.`,
        autopilotEN: `You frame the decision so that every option sounds positive - an internal reframing that makes the choice seem easier. But underneath there remains the unresolved question of which option is really the right one.`,
        bewusstheitEN: `What if you looked at the decision without a positive frame? What would you see then \u2013 and what would you choose?`,
        uebungEN: `Write down what is really difficult about each option. Then choose anyway. Not because it's easy - but because it gets you further.`
      },
      beziehungskrise: {
        autopilot: `Man widmet sich der Gemeinschaft, einer Idee, einem Projekt \u2013 und die pers\u00f6nliche Beziehungskrise bekommt einen h\u00f6heren Rahmen. Was zwischen zwei Menschen wirklich gesagt werden muss, bleibt ungesagt.`,
        bewusstheit: `Versteckst du dich gerade hinter einer gr\u00f6\u00dferen Aufgabe \u2013 um der Stille dieser einen Beziehung nicht begegnen zu m\u00fcssen?`,
        uebung: `Verbring heute Zeit mit diesem Menschen \u2013 nur ihr beide, ohne Aufgabe, ohne Projekt. Lass das entstehen, was entstehen muss.`,
        autopilotEN: `You dedicate yourself to the community, an idea, a project - and the personal relationship crisis takes on a greater scope. What really needs to be said between two people remains unsaid.`,
        bewusstheitEN: `Are you currently hiding behind a larger task - so you don't have to face the silence of this one relationship?`,
        uebungEN: `Spend time with this person today \u2013 just the two of you, with no task, no project. Let what needs to arise arise.`
      },
      selbstzweifel: {
        autopilot: `Selbstzweifel wird in einen h\u00f6heren Sinn gebettet: Vielleicht ist dieser Schmerz Teil des Weges. Vielleicht wachse ich gerade. Die Reframing-Strategie sch\u00fctzt davor, den Zweifel wirklich zu f\u00fchlen.`,
        bewusstheit: `Was w\u00e4re, wenn dieser Zweifel gerade einfach Zweifel ist \u2013 ohne h\u00f6heren Sinn, ohne Wachstums-Rahmen? Was w\u00fcrdest du dann tun?`,
        uebung: `Sitz heute zehn Minuten mit dem Zweifel \u2013 ohne ihn zu transformieren. Benenne ihn: \u201eIch zweifle gerade daran, dass \u2026\u201c Dann atme. Das reicht.`,
        autopilotEN: `Self-doubt is embedded in a higher meaning: Maybe this pain is part of the way. Maybe I'm growing. The reframing strategy protects you from really feeling the doubt.`,
        bewusstheitEN: `What if this doubt is just doubt - without a higher meaning, without a framework for growth? What would you do then?`,
        uebungEN: `Sit with doubt for ten minutes today \u2013 without transforming it. Name it: \u201cI\u2019m doubting right now that\u2026\u201d Then breathe. That's enough.`
      },
      verlust: {
        autopilot: `Verlust wird in Bedeutung gekleidet: Vielleicht war das sein Sinn. Vielleicht w\u00e4chst man daran. Die Sinnsuche hilft \u2013 aber manchmal zu fr\u00fch, bevor der Schmerz wirklich da war.`,
        bewusstheit: `Was w\u00e4re, wenn dieser Verlust noch keinen Sinn hat \u2013 und das gerade in Ordnung ist? Darf Trauer sinnlos sein, bevor sie sinnvoll wird?`,
        uebung: `Schreibe heute auf, was du verloren hast \u2013 ohne Sinn, ohne Moral, ohne Wachstum. Nur: Das war, und jetzt ist es nicht mehr. Wie f\u00fchlt sich das an?`,
        autopilotEN: `Loss is clothed in meaning: perhaps that was its meaning. Maybe you'll grow from it. The search for meaning helps - but sometimes too early, before the pain was really there.`,
        bewusstheitEN: `What if this loss still doesn't make sense - and that's okay right now? Can grief be meaningless before it becomes meaningful?`,
        uebungEN: `Today, write down what you have lost \u2013 no meaning, no morals, no growth. Only: That was, and now it is no longer. How does that feel?`
      },
      ueberforderung: {
        autopilot: `Man visioniert sich aus dem Druck heraus: Das alles wird bald besser, das gro\u00dfe Bild ist ja sinnvoll. Die Energie flie\u00dft in Ideen und Pl\u00e4ne \u2013 w\u00e4hrend die konkrete \u00dcberforderung bleibt.`,
        bewusstheit: `Was muss heute konkret erledigt werden \u2013 jenseits aller Visionen? Welche eine Sache bringt dich heute wirklich weiter?`,
        uebung: `Schreibe heute eine Liste mit maximal drei Aufgaben. Nur drei. Erledige sie, bevor du neue planst. Beobachte, wie befriedigend das ist.`,
        autopilotEN: `You envision yourself from the pressure: Everything will soon get better, the big picture makes sense. The energy flows into ideas and plans - while the concrete excessive demands remain.`,
        bewusstheitEN: `What specifically needs to be done today \u2013 beyond all visions? What one thing is really moving you forward today?`,
        uebungEN: `Today, write a list of a maximum of three tasks. Only three. Do them before planning new ones. Watch how satisfying that is.`
      },
      stagnation: {
        autopilot: `Man \u00fcberbr\u00fcckt die Leere mit Visionen und Pl\u00e4nen: Das n\u00e4chste gro\u00dfe Projekt, das n\u00e4chste Abenteuer, der n\u00e4chste Sinn. Die Stagnation bleibt unsichtbar hinter den Ideen.`,
        bewusstheit: `Was w\u00e4re, wenn du heute keine neue Vision entwirfst \u2013 sondern mit dem Jetzt sitzt? Was ist gerade wirklich da?`,
        uebung: `Verbringe heute einen Abend ohne Planung. Kein Notizbuch, kein Brainstorming. Nur: Was ist jetzt? Lass die Antwort still entstehen.`,
        autopilotEN: `You bridge the void with visions and plans: the next big project, the next adventure, the next meaning. The stagnation remains invisible behind the ideas.`,
        bewusstheitEN: `What if you didn't create a new vision today - but sat with the now? What is really there right now?`,
        uebungEN: `Spend an evening without planning today. No notebook, no brainstorming. But: what happens now? Let the answer emerge quietly.`
      },
    },

    "SX7": {
      erschoepfung: {
        autopilot: `Die n\u00e4chste Begeisterung, das n\u00e4chste Projekt, die n\u00e4chste intensive Verbindung \u2013 immer weiter. Ersch\u00f6pfung wird mit Stimulation \u00fcberschrieben. Der Motor l\u00e4uft, auch wenn der Tank leer ist.`,
        bewusstheit: `Was k\u00e4me zum Vorschein, wenn du aufh\u00f6ren w\u00fcrdest, das n\u00e4chste Feuer zu suchen? Was liegt unter der Begeisterung, die du gerade verfolgst?`,
        uebung: `Setze heute eine einzige Begeisterung bewusst auf Pause. Sitz mit der Stille, die dann entsteht. Beobachte, was auftaucht \u2013 ohne es sofort in das n\u00e4chste Vorhaben zu verwandeln.`,
        autopilotEN: `Without high-intensity stimulation, ordinary life feels incredibly flat and stale. You frantically search for the next emotional high, the next magnetic encounter, or the next inner fire. The void of quiet emptiness feels almost impossible for you to tolerate.`,
        bewusstheitEN: `What if the quiet right now is actually a much-needed breathing room, rather than the opposite of being alive? What would you hear if you just held still?`,
        uebungEN: `Dedicate yourself to a single, simple activity today\u2014like cooking, walking, or sketching\u2014and practice being 100% present in it. No multi-tasking, no switching. Observe if something quiet opens up inside you.`
      },
      konflikt: {
        autopilot: `Im Konflikt kann die Energie pl\u00f6tzlich sehr gross werden \u2013 leidenschaftlich, \u00fcberzeugt, fast begeistert f\u00fcr die eigene Position. Und dann, genauso pl\u00f6tzlich, l\u00e4sst das Interesse nach, und man ist gedanklich schon woanders.`,
        bewusstheit: `Nimmst du den Konflikt des anderen wirklich ernst \u2013 auch wenn dein Interesse daran schon nachl\u00e4sst?`,
        uebung: `Bleibe bei dem Thema bis zum Ende \u2013 auch wenn es aufgeh\u00f6rt hat, spannend zu sein. Frage: \u201eHaben wir das wirklich gekl\u00e4rt?\u201d`,
        autopilotEN: `In conflict, the energy can suddenly become very high - passionate, convinced, almost enthusiastic about your own position. And then, just as suddenly, your interest wanes and your mind is somewhere else.`,
        bewusstheitEN: `Do you really take the other person's conflict seriously - even if your interest in it is already waning?`,
        uebungEN: `Stay with the topic until the end - even if it has stopped being exciting. Question: \u201cHave we really sorted this out?\u201d`
      },
      einsamkeit: {
        autopilot: `Einsamkeit wird mit dem n\u00e4chsten Abenteuer, dem n\u00e4chsten intensiven Erlebnis oder der n\u00e4chsten leidenschaftlichen Verbindung \u00fcberschrieben. Solange es Funken gibt, f\u00fchlt man sich lebendig und verbunden.`,
        bewusstheit: `Was w\u00e4re, wenn du heute bei einer einzigen Verbindung bleibst \u2013 und sie vertiefst, statt sie zu wechseln? Was k\u00f6nnte da entstehen?`,
        uebung: `W\u00e4hle eine Beziehung, die dir wichtig ist, und investiere heute bewusst in sie \u2013 ein Gespr\u00e4ch, ein Moment der wirklichen Pr\u00e4senz. Kein Ablenken, kein n\u00e4chstes Thema.`,
        autopilotEN: `Loneliness is overwritten with the next adventure, the next intense experience or the next passionate connection. As long as there are sparks, you feel alive and connected.`,
        bewusstheitEN: `What if you stuck with a single connection today - and deepened it instead of changing? What could happen there?`,
        uebungEN: `Choose a relationship that is important to you and consciously invest in it today - a conversation, a moment of real presence. No distractions, no next topic.`
      },
      entscheidung: {
        autopilot: `Die Entscheidung wird auf die intensive Verbindung hin ausgerichtet: Was h\u00e4lt uns zusammen? Was st\u00e4rkt das, was uns verbindet? Eigene Bed\u00fcrfnisse und langfristige Perspektiven k\u00f6nnen dabei aus dem Blick geraten.`,
        bewusstheit: `Entscheidest du gerade f\u00fcr die Verbindung \u2013 oder f\u00fcr dich in der Verbindung? Gibt es einen Unterschied, und kennst du ihn?`,
        uebung: `Frage dich: Was w\u00fcrde ich w\u00e4hlen, wenn diese Verbindung nicht auf dem Spiel st\u00fcnde? Nimm diese Antwort als eine der Stimmen in deiner Entscheidung.`,
        autopilotEN: `The decision is based on the intensive connection: What holds us together? What strengthens what connects us? Your own needs and long-term perspectives can be lost sight of.`,
        bewusstheitEN: `Are you currently deciding for the connection \u2013 or for yourself in the connection? Is there a difference and do you know it?`,
        uebungEN: `Ask yourself: What would I choose if this connection wasn't at stake? Take this answer as one of the votes in your decision.`
      },
      beziehungskrise: {
        autopilot: `Die Krise der Beziehung wird zum Alles-oder-Nichts: Entweder es stimmt alles \u2013 oder es endet. Man fordert vollst\u00e4ndige Klarheit, vollst\u00e4ndiges Bekenntnis, vollst\u00e4ndige Pr\u00e4senz. Nuancen werden nicht toleriert.`,
        bewusstheit: `Was w\u00e4re, wenn diese Beziehung gerade weder perfekt noch beendet ist \u2013 sondern einfach in einem schwierigen Moment? Gibt es einen Raum dazwischen, den du noch nicht betrachtet hast?`,
        uebung: `Frage den anderen, ohne sofort zu werten: \u201eWas brauchst du von mir \u2013 konkret, heute?" Dann antworte mit dem, was du geben kannst. Nicht dem, was ideal w\u00e4re \u2013 dem, was wirklich m\u00f6glich ist.`,
        autopilotEN: `The crisis of the relationship becomes all-or-nothing: either everything is right \u2013 or it ends. One demands complete clarity, complete commitment, complete presence. Nuances will not be tolerated.`,
        bewusstheitEN: `What if this relationship is neither perfect nor over - but simply in a difficult moment? Is there a space in between that you haven't considered yet?`,
        uebungEN: `Ask the other person, without immediately judging: \u201cWhat do you need from me \u2013 specifically, today?\u201d Then respond with what you can give. Not what would be ideal \u2013 what is really possible.`
      },
      selbstzweifel: {
        autopilot: `Selbstzweifel wird mit der n\u00e4chsten Begeisterung \u00fcberschrieben: eine neue Idee, ein neues Projekt, eine neue Verbindung. Die Intensit\u00e4t sch\u00fctzt vor der Stille, in der der Zweifel geh\u00f6rt werden m\u00fcsste.`,
        bewusstheit: `Was w\u00fcrdest du h\u00f6ren, wenn du die Begeisterung einen Moment pausierst und wirklich zuh\u00f6rst \u2013 in dich hinein?`,
        uebung: `Halt heute inne, bevor du zur n\u00e4chsten Idee springst. Frage dich in der Stille: Was bezweifle ich gerade \u2013 wirklich? Lass die Antwort kommen, ohne sie sofort zu l\u00f6sen.`,
        autopilotEN: `Self-doubt is overwritten with the next excitement: a new idea, a new project, a new connection. Intensity protects against the silence in which doubt would have to be heard.`,
        bewusstheitEN: `What would you hear if you paused the excitement for a moment and really listened \u2013 to yourself?`,
        uebungEN: `Pause today before jumping to the next idea. Ask yourself in silence: What am I doubting right now \u2013 really? Let the answer come without solving it immediately.`
      },
      verlust: {
        autopilot: `Verlust erzeugt intensive Reaktionen: Schmerz, der schnell in neue Intensit\u00e4t umschl\u00e4gt \u2013 ein neues Erlebnis, ein neuer Mensch, eine neue Idee. Die Energie zieht weiter, bevor die Trauer sich setzen kann.`,
        bewusstheit: `Was w\u00e4re, wenn du heute bei dem bleibst, was du verloren hast \u2013 ohne weiterzuziehen? Was zeigt sich, wenn du stillh\u00e4ltst?`,
        uebung: `Bleib heute einen Moment bei der Erinnerung an das Verlorene. Kein Ablenken, kein Weitergehen. Nur: Ich war hier, das war wirklich. Ich vermisse es.`,
        autopilotEN: `Loss creates intense reactions: pain that quickly turns into new intensity - a new experience, a new person, a new idea. The energy moves on before the grief can settle.`,
        bewusstheitEN: `What if you stayed with what you lost today - without moving on? What shows up when you hold still?`,
        uebungEN: `Take a moment today to remember what was lost. No distractions, no moving on. Only: I was here, that was real. I miss it.`
      },
      ueberforderung: {
        autopilot: `\u00dcberforderung wird mit Intensit\u00e4t bek\u00e4mpft: Man taucht tiefer in das ein, was Freude macht, springt zu neuen Erlebnissen, sucht die n\u00e4chste Energie. Der Druck bleibt im Hintergrund, bis er bricht.`,
        bewusstheit: `Was w\u00e4re, wenn du heute die Energie, die du in neue Erlebnisse steckst, in die liegengebliebene Aufgabe lenkst?`,
        uebung: `W\u00e4hle heute eine Aufgabe, die du immer wieder hinausschiebst. Erledige sie in einem Zug \u2013 dann g\u00f6nn dir etwas Sch\u00f6nes als echte Belohnung danach.`,
        autopilotEN: `Overwhelm is combated with intensity: you dive deeper into what brings you joy, jump to new experiences, and look for the next energy. The pressure stays in the background until it breaks.`,
        bewusstheitEN: `What if today you channeled the energy you put into new experiences into the task you have left behind?`,
        uebungEN: `Today, choose a task that you keep putting off. Kill them in one go - then treat yourself to something nice as a real reward afterwards.`
      },
      stagnation: {
        autopilot: `Ohne Intensit\u00e4t f\u00fchlt sich das Leben schal an: Man sucht das n\u00e4chste Hochgef\u00fchl, die n\u00e4chste Begegnung, das n\u00e4chste Feuer. Die Leere ist kaum auszuhalten.`,
        bewusstheit: `Was w\u00e4re, wenn die Stille gerade ein Atemraum ist und nicht das Gegenteil von Leben? Was w\u00fcrdest du h\u00f6ren, wenn du stillh\u00e4ltst?`,
        uebung: `Bleib heute bei einer einzigen, einfachen Aktivit\u00e4t \u2013 kochen, gehen, zeichnen \u2013 und sei vollst\u00e4ndig dabei. Kein Wechseln. Beobachte, ob sich etwas \u00f6ffnet.`,
        autopilotEN: `Without intensity, life feels stale: you look for the next exhilaration, the next encounter, the next fire. The emptiness is almost unbearable.`,
        bewusstheitEN: `What if silence is a breathing space and not the opposite of life? What would you hear if you held still?`,
        uebungEN: `Today, stick to a single, simple activity\u2014cooking, walking, drawing\u2014and be fully involved. No changing. Watch to see if anything opens.`
      },
    },

    "SE8": {
      erschoepfung: {
        autopilot: `Mehr Kontrolle, mehr Einsatz, mehr Willen \u2013 das ist die automatische Antwort auf Ersch\u00f6pfung. Schw\u00e4che zeigen ist keine Option. Der K\u00f6rper wird durch Willenskraft \u00fcberspielt, bis er sich Geh\u00f6r verschafft.`,
        bewusstheit: `Was w\u00fcrde es bedeuten, gerade schwach zu sein \u2013 nur f\u00fcr diesen einen Moment, in dir selbst, ohne dass es jemand sieht?`,
        uebung: `Leg dich bewusst hin \u2013 nicht aus Ersch\u00f6pfung, sondern als freie Entscheidung. Bleibe f\u00fcnf Minuten ohne Bewegungsdrang. Beobachte, wie dein inneres System auf diese gew\u00e4hlte Passivit\u00e4t reagiert.`,
        autopilotEN: `Stagnation is utterly intolerable to your system: you fight violently against it, manufacture artificial pressure, and immediately hunt for the next target. A standstill feels like a defeat. You direct all your energy against the emptiness\u2014and completely exhaust yourself in the process.`,
        bewusstheitEN: `What if you chose not to fight the stagnation today\u2014and instead just allowed the standstill to be there? What would that mean for you?`,
        uebungEN: `Give yourself permission to move absolutely nothing forward today. Spend half a day with zero agenda, zero pressure, and zero fighting. Observe what organically emerges in the quiet when you lay your weapons down.`
      },
      konflikt: {
        autopilot: `Im Konflikt wird Macht eingesetzt \u2013 klar, direkt, manchmal \u00fcberw\u00e4ltigend. Man will Klarheit erzwingen, das Feld ordnen, die Sache beenden. Andere k\u00f6nnen sich dabei \u00fcberrollt f\u00fchlen.`,
        bewusstheit: `K\u00e4mpfst du gerade um das Thema \u2013 oder um die Kontrolle? Was w\u00e4re, wenn du den Konflikt nicht gewinnen m\u00fcsstest?`,
        uebung: `Mache im Konflikt einen Schritt zur\u00fcck \u2013 buchst\u00e4blich oder bildlich. Gib dem anderen Raum zu sprechen, ohne zu unterbrechen. Beobachte, was dabei entsteht.`,
        autopilotEN: `In conflict, power is used \u2013 clear, direct, sometimes overwhelming. You want to force clarity, organize the field, end the matter. Others may feel overwhelmed.`,
        bewusstheitEN: `Are you currently fighting for the issue \u2013 or for control? What if you didn't have to win the conflict?`,
        uebungEN: `Take a step back in the conflict - literally or figuratively. Give the other person space to speak without interrupting. Watch what happens.`
      },
      einsamkeit: {
        autopilot: `Einsamkeit wird nicht leicht zugegeben \u2013 sie f\u00fchlt sich wie Schw\u00e4che an. Man bleibt aktiv, unabh\u00e4ngig, stark. Aber darunter liegt manchmal eine tiefe Sehnsucht nach jemandem, dem man sich wirklich zeigen kann.`,
        bewusstheit: `Gibt es jemanden, dem du dich wirklich zeigen k\u00f6nntest \u2013 ohne St\u00e4rke zu performen? Und l\u00e4sst du das zu?`,
        uebung: `Suche heute die N\u00e4he einer Person, der du vertraust \u2013 nicht um etwas zu tun oder zu schaffen. Nur um da zu sein. Zusammen. Beobachte, was das in dir ausl\u00f6st.`,
        autopilotEN: `Loneliness is not easily admitted \u2013 it feels like weakness. You stay active, independent, strong. But underneath sometimes lies a deep longing for someone to whom you can really show yourself.`,
        bewusstheitEN: `Is there anyone you could really show yourself to \u2013 without performing at your strength? And do you allow that?`,
        uebungEN: `Today, seek closeness to someone you trust - not to do or create something. Just to be there. Together. Observe what this triggers in you.`
      },
      entscheidung: {
        autopilot: `Entscheidungen werden schnell und klar getroffen \u2013 Z\u00f6gern gilt als Schw\u00e4che. Man handelt, bevor alle Informationen da sind, weil Abwarten sich falsch anf\u00fchlt. Manchmal wird eine schlechte Entscheidung lieber verteidigt als revidiert.`,
        bewusstheit: `Was w\u00e4re, wenn du diese Entscheidung einen Moment pausierst \u2013 nicht aus Angst, sondern aus St\u00e4rke? Wer trifft die bessere Wahl: der, der sofort handelt, oder der, der erst wirklich hinschaut?`,
        uebung: `Warte 24 Stunden, bevor du diese Entscheidung umsetzt. Frage dich am n\u00e4chsten Tag: Ist das immer noch meine Wahl? Wenn ja \u2013 dann handle mit voller Kraft.`,
        autopilotEN: `Decisions are made quickly and clearly - hesitation is seen as weakness. You act before all the information is there because waiting feels wrong. Sometimes a bad decision is better defended than reversed.`,
        bewusstheitEN: `What if you paused this decision for a moment - not out of fear, but out of strength? Who makes the better choice: the one who acts immediately or the one who really looks first?`,
        uebungEN: `Wait 24 hours before implementing this decision. The next day, ask yourself: Is this still my choice? If yes \u2013 then act with full force.`
      },
      beziehungskrise: {
        autopilot: `Man k\u00e4mpft oder schneidet ab. Entweder wird der Konflikt direkt und hart angegangen \u2013 oder man zieht sich hinter St\u00e4rke zur\u00fcck, zeigt nichts, macht weiter. Beides l\u00e4sst wenig Raum f\u00fcr echte Verbindung.`,
        bewusstheit: `Was w\u00e4re, wenn du in dieser Krise einen Schritt auf den anderen zu machst \u2013 ohne Schw\u00e4che, aber ohne R\u00fcstung? Was w\u00fcrde sich dann zwischen euch bewegen?`,
        uebung: `Sage dem anderen heute etwas Echtes \u2013 nicht die Forderung, nicht die St\u00e4rke. Etwas, das zeigt, dass du wirklich da bist: \u201eMir liegt diese Beziehung wirklich am Herzen."`,
        autopilotEN: `You fight or you cut out. Either the conflict is addressed directly and harshly - or you retreat behind strength, show nothing and carry on. Both leave little room for real connection.`,
        bewusstheitEN: `What if you took one step towards the other in this crisis - without weakness, but without armour? What would happen between you then?`,
        uebungEN: `Say something real to the other person today - not the demand, not the strength. Something that shows you're really there: "I really care about this relationship."`
      },
      selbstzweifel: {
        autopilot: `Selbstzweifel existiert \u2013 wird aber nicht gezeigt. Nach au\u00dfen: St\u00e4rke, Kontrolle, Entschlossenheit. Innen: manchmal eine tiefe Frage, ob man wirklich so stark ist, wie man wirkt. Diese Frage wird bek\u00e4mpft statt beantwortet.`,
        bewusstheit: `Was w\u00e4re, wenn du den Zweifel nicht bek\u00e4mpfst, sondern einmal stehenl\u00e4sst? St\u00e4rke schlie\u00dft Zweifel nicht aus \u2013 sie besteht trotzdem.`,
        uebung: `Schreib heute einen Satz, der mit \u201eIch bin unsicher, ob \u2026" beginnt \u2013 nur f\u00fcr dich, kein Publikum. Dann lies ihn. Das ist auch du.`,
        autopilotEN: `Self-doubt exists \u2013 but is not shown. Outwardly: strength, control, determination. Inside: sometimes a deep question as to whether you are really as strong as you seem. This question is fought instead of answered.`,
        bewusstheitEN: `What if you didn't fight the doubt, but let it stand for once? Strength does not eliminate doubt - it still exists.`,
        uebungEN: `Today, write a sentence that begins with "I'm unsure if..." - just for you, not an audience. Then read it. This is you too.`
      },
      verlust: {
        autopilot: `Verlust l\u00f6st Widerstand aus: Man k\u00e4mpft, verdr\u00e4ngt, \u00fcberw\u00e4ltigt den Schmerz mit St\u00e4rke. Trauer f\u00fchlt sich wie Schw\u00e4che an \u2013 also wird sie bek\u00e4mpft. Das kostet Kraft, ohne zu heilen.`,
        bewusstheit: `Was w\u00e4re, wenn Trauer keine Schw\u00e4che ist \u2013 sondern ein Zeichen, dass dir etwas wirklich wichtig war? Kann das stark sein?`,
        uebung: `Erlaube dir heute, traurig zu sein \u2013 nicht w\u00fctend, nicht stark, nur traurig. Zehn Minuten, in Stille. Du musst das niemandem zeigen. Nur dir selbst erlauben.`,
        autopilotEN: `Loss triggers resistance: you fight, repress, and overcome the pain with strength. Grief feels like weakness - so it is fought. That takes strength without healing.`,
        bewusstheitEN: `What if grief isn't a weakness - but a sign that something really mattered to you? Can that be strong?`,
        uebungEN: `Today, allow yourself to be sad \u2013 not angry, not strong, just sad. Ten minutes, in silence. You don't have to show this to anyone. Only allow yourself.`
      },
      ueberforderung: {
        autopilot: `\u00dcberforderung zeigt sich als Verdichtung: mehr Energie, mehr Kontrolle, mehr Druck auf andere und sich selbst. Man k\u00e4mpft sich durch statt zu priorisieren. Der K\u00f6rper meldet sich irgendwann.`,
        bewusstheit: `Was w\u00e4re, wenn du heute nicht mehr Druck erzeugst \u2013 sondern Dinge wegl\u00e4sst? Was ist wirklich nicht dringend?`,
        uebung: `Streiche heute drei Dinge von der Liste, die du heute tun wolltest. Nicht verschieben \u2013 wirklich loslassen. Dann beobachte: Ist etwas eingebrochen?`,
        autopilotEN: `Overwhelm manifests itself as a compression: more energy, more control, more pressure on others and yourself. You fight through instead of prioritizing. The body will get in touch at some point.`,
        bewusstheitEN: `What if you stopped putting pressure on yourself today and instead left things out? What is really not urgent?`,
        uebungEN: `Today, cross three things off the list that you wanted to do today. Don\u2019t postpone \u2013 really let go. Then observe: Has something broken?`
      },
      stagnation: {
        autopilot: `Stagnation wird nicht geduldet: Man k\u00e4mpft dagegen an, erzeugt Druck, sucht das n\u00e4chste Ziel. Stillstand f\u00fchlt sich wie Schw\u00e4che an. Die Energie richtet sich gegen die Leere \u2013 und ersch\u00f6pft sich.`,
        bewusstheit: `Was w\u00e4re, wenn du die Stagnation heute nicht bek\u00e4mpfst \u2013 sondern sie einfach da sein l\u00e4sst? Was w\u00fcrde das bedeuten?`,
        uebung: `Erlaube dir heute, nichts zu bewegen. Einen halben Tag ohne Agenda, ohne Druck, ohne K\u00e4mpfen. Beobachte, was in der Stille entsteht, wenn du nicht k\u00e4mpfst.`,
        autopilotEN: `Stagnation is not tolerated: you fight against it, create pressure, look for the next goal. Standing still feels like weakness. The energy is directed against the emptiness - and becomes exhausted.`,
        bewusstheitEN: `What if you didn't fight the stagnation today - but just let it be there? What would that mean?`,
        uebungEN: `Allow yourself not to move today. Half a day with no agenda, no pressure, no fighting. Observe what arises in the silence when you don't fight.`
      },
    },

    "SO8": {
      erschoepfung: {
        autopilot: `Man tr\u00e4gt weiter f\u00fcr die Gruppe \u2013 sch\u00fctzt, f\u00fchrt, organisiert. Die eigene Ersch\u00f6pfung wird hinter St\u00e4rke verborgen, weil die anderen einen brauchen. Innehalten bedeutet, die Schutzfunktion zu gef\u00e4hrden.`,
        bewusstheit: `Wer sch\u00fctzt dich gerade? Und w\u00e4re es so schlimm, das heute einmal zuzulassen?`,
        uebung: `Teile mit jemandem aus deinem inneren Kreis ehrlich mit, wie es dir geht \u2013 ohne F\u00fchrungsgestus, ohne Schutzimpuls. Einfach: "Ich bin gerade ersch\u00f6pft." Beobachte, was das in dir und im anderen bewegt.`,
        autopilotEN: `Without an active battle to fight or a group assignment to protect, your inner engine completely stalls. You frantically search for a new adversary, a fresh challenge, or a massive project\u2014anything to bridge the uncomfortable silence of the void.`,
        bewusstheitEN: `What if real power today doesn't look like fighting\u2014but rather looks like pausing, getting quiet, and deeply listening? What would that stillness tell you?`,
        uebungEN: `Sit down with someone from your group today\u2014not to direct them, lead them, or fix their problems, but simply to listen: How are things going with you guys? What do you really need right now?`
      },
      konflikt: {
        autopilot: `Im Konflikt, der jemanden betrifft, der zur eigenen Gruppe geh\u00f6rt, kann die Reaktion sehr schnell und sehr gross werden. Schutz geht \u00fcber Verh\u00e4ltnism\u00e4\u00dfigkeit. Die Energie ist sofort voll da.`,
        bewusstheit: `Ist das, was gerade passiert, wirklich eine Bedrohung \u2013 oder reagiert dein Schutzimpuls auf etwas, das er als Bedrohung liest, ohne es wirklich zu pr\u00fcfen?`,
        uebung: `Bevor du eingreifst: Frage zuerst die betroffene Person, was sie braucht. Vielleicht braucht sie etwas anderes als Schutz.`,
        autopilotEN: `In a conflict that concerns someone who belongs to one's own group, the reaction can be very quick and very large. Protection goes beyond proportionality. The energy is there immediately.`,
        bewusstheitEN: `Is what's happening really a threat - or is your protective impulse reacting to something it reads as a threat without really examining it?`,
        uebungEN: `Before you intervene: First ask the affected person what they need. Maybe she needs something other than protection.`
      },
      einsamkeit: {
        autopilot: `Einsamkeit zeigt sich als Schutzbed\u00fcrfnis f\u00fcr andere \u2013 man umgibt sich mit der eigenen Gruppe, sorgt f\u00fcr sie, h\u00e4lt sie zusammen. Das eigene Alleinsein wird im Dienst f\u00fcr andere aufgel\u00f6st.`,
        bewusstheit: `Wer sorgt f\u00fcr dich \u2013 nicht als F\u00fchrungskraft, nicht als Besch\u00fctzer, sondern als Mensch? Gibt es jemanden, dem du das erlaubst?`,
        uebung: `Erlaube dir heute, von jemandem umsorgt zu werden \u2013 auch wenn es sich ungewohnt anf\u00fchlt. Nimm F\u00fcrsorge an, ohne sie sofort zu erwidern.`,
        autopilotEN: `Loneliness shows itself as a need for protection for others - you surround yourself with your own group, care for them, keep them together. Your own aloneness is dissolved in the service of others.`,
        bewusstheitEN: `Who cares for you \u2013 not as a leader, not as a protector, but as a human being? Is there anyone you allow to do this?`,
        uebungEN: `Today, allow yourself to be cared for by someone - even if it feels unusual. Accept care without immediately reciprocating it.`
      },
      entscheidung: {
        autopilot: `Man entscheidet f\u00fcr die Gruppe \u2013 was h\u00e4lt sie zusammen, was sch\u00fctzt sie, was st\u00e4rkt die gemeinsame Position? Die eigene Pr\u00e4ferenz wird dem kollektiven Nutzen untergeordnet, manchmal ohne es zu merken.`,
        bewusstheit: `Entscheidest du gerade f\u00fcr die Gruppe \u2013 und w\u00fcrdest du dasselbe w\u00e4hlen, wenn es nur um dich ginge? Kennst du den Unterschied?`,
        uebung: `Sprich die Entscheidung zuerst mit dir selbst durch: Was will ich? Dann: Was braucht die Gruppe? Dann entscheide, welche Stimme hier wirklich f\u00fchren soll.`,
        autopilotEN: `You decide for the group - what holds it together, what protects it, what strengthens the common position? One's own preference is subordinated to the collective benefit, sometimes without realizing it.`,
        bewusstheitEN: `Are you currently deciding for the group \u2013 and would you choose the same if it was just you? Do you know the difference?`,
        uebungEN: `Talk through the decision with yourself first: What do I want? Then: What does the group need? Then decide which voice should really lead here.`
      },
      beziehungskrise: {
        autopilot: `Man sch\u00fctzt die eigenen Leute \u2013 und wer in diesem Kreis zur Bedrohung wird, wird konfrontiert oder ausgeschlossen. Beziehungskrisen innerhalb des Schutzkreises werden manchmal \u00fcbersehen, weil man nach au\u00dfen schaut.`,
        bewusstheit: `Gibt es jemanden in deinem engsten Kreis, dem du gerade nicht wirklich zugeh\u00f6rt hast \u2013 weil du besch\u00e4ftigt warst mit Sch\u00fctzen statt mit Verbinden?`,
        uebung: `Sitz heute mit dieser Person zusammen \u2013 ohne Schutzimpuls, ohne F\u00fchrungsgestus. Frage einfach: \u201eWie geht es dir und uns?" Dann h\u00f6re zu.`,
        autopilotEN: `You protect your own people - and anyone who becomes a threat in this circle is confronted or excluded. Relationship crises within the protective circle are sometimes overlooked because people look outside.`,
        bewusstheitEN: `Is there someone in your inner circle that you weren't really listening to right now - because you were busy protecting instead of connecting?`,
        uebungEN: `Sit with this person today \u2013 without protective impulses, without leadership gestures. Just ask, \u201cHow are you and us?\u201d Then listen.`
      },
      selbstzweifel: {
        autopilot: `Selbstzweifel wird zur Bedrohung erkl\u00e4rt: Er wird bek\u00e4mpft, weggedr\u00fcckt, durch noch mehr Einsatz f\u00fcr die Gruppe \u00fcberw\u00e4ltigt. Wer an sich selbst zweifelt, sch\u00fctzt die anderen noch mehr \u2013 als w\u00fcrde das den Zweifel ausl\u00f6schen.`,
        bewusstheit: `Was w\u00e4re, wenn du den Zweifel nicht bek\u00e4mpfst, sondern der Person zeigst, der du wirklich vertraust \u2013 und mit ihr dar\u00fcber sprichst?`,
        uebung: `Sag heute jemandem, dem du wirklich vertraust, was du bezweifelst. Nicht als Schw\u00e4che verpackt \u2013 als Tatsache: \u201eIch bin gerade unsicher, ob \u2026" Lass die Antwort kommen.`,
        autopilotEN: `Self-doubt is declared a threat: it is fought, pushed away, and overwhelmed by even more commitment to the group. Anyone who doubts themselves protects others even more - as if that would erase the doubt.`,
        bewusstheitEN: `What if instead of fighting the doubt, you showed it to the person you really trust \u2013 and talked to them about it?`,
        uebungEN: `Today, tell someone you really trust what you doubt. Not packaged as a weakness - as a fact: "I'm currently unsure whether..." Let the answer come.`
      },
      verlust: {
        autopilot: `Man tr\u00e4gt die Trauer der Gruppe mit und h\u00e4lt dabei die eigene zur\u00fcck. St\u00e4rke f\u00fcr andere \u2013 das ist die Rolle. Der eigene Schmerz bleibt ungesehen, weil er die St\u00e4rke gef\u00e4hrdet.`,
        bewusstheit: `Wer tr\u00e4gt deinen Schmerz \u2013 wenn du gerade alle anderen tr\u00e4gst? Gibt es einen Menschen, dem du heute deine Trauer zeigen kannst?`,
        uebung: `Suche heute einen Menschen, dem du wirklich vertraust, und sage: \u201eIch trauere gerade." Nur das. Keine Erkl\u00e4rung, keine St\u00e4rke. Lass ihn antworten.`,
        autopilotEN: `You share the group's grief while holding back your own. Strength for others \u2013 that is the role. Your own pain goes unseen because it endangers your strength.`,
        bewusstheitEN: `Who carries your pain - when you are carrying everyone else? Is there someone you can show your sadness to today?`,
        uebungEN: `Today, find someone you really trust and say, "I'm grieving right now." Just that. No explanation, no strength. Let him answer.`
      },
      ueberforderung: {
        autopilot: `Man \u00fcbernimmt Verantwortung f\u00fcr die Gruppe \u00fcber die eigenen Grenzen hinaus: Wer f\u00fchrt, gibt nicht nach. Der eigene Ersch\u00f6pfungszustand wird ignoriert oder vor anderen verborgen.`,
        bewusstheit: `Was w\u00e4re, wenn du als F\u00fchrungsperson heute Grenzen setzt \u2013 und damit ein Beispiel gibst statt Schw\u00e4che zu zeigen?`,
        uebung: `Delegiere heute eine konkrete Aufgabe, die du normalerweise selbst \u00fcbernehmen w\u00fcrdest. Sage klar, was du brauchst. Lass den anderen es erledigen \u2013 ohne zu kontrollieren.`,
        autopilotEN: `You take responsibility for the group beyond your own boundaries: those who lead do not give in. Your own state of exhaustion is ignored or hidden from others.`,
        bewusstheitEN: `What if, as a leader, you set boundaries today - and thereby set an example instead of showing weakness?`,
        uebungEN: `Today, delegate a specific task that you would normally take on yourself. Be clear about what you need. Let the other person do it \u2013 without controlling.`
      },
      stagnation: {
        autopilot: `Ohne Kampf oder Schutzaufgabe f\u00fcr die Gruppe fehlt der Antrieb. Man sucht nach einem neuen Feind, einer neuen Herausforderung, einem neuen Projekt \u2013 um die Leere zu \u00fcberbr\u00fccken.`,
        bewusstheit: `Was w\u00e4re, wenn St\u00e4rke heute nicht im K\u00e4mpfen liegt \u2013 sondern im Innehalten und Zuh\u00f6ren? Was w\u00fcrde die Stille dir sagen?`,
        uebung: `Setz dich heute mit jemandem aus der Gruppe zusammen \u2013 nicht um zu f\u00fchren oder zu sch\u00fctzen, sondern um zu h\u00f6ren: Wie geht es euch? Was braucht ihr?`,
        autopilotEN: `Without fighting or protecting the group, there is no drive. You look for a new enemy, a new challenge, a new project - to bridge the void.`,
        bewusstheitEN: `What if strength today lies not in fighting - but in pausing and listening? What would the silence tell you?`,
        uebungEN: `Sit down with someone in the group today \u2013 not to guide or protect, but to hear: How are you? What do you need?`
      },
    },

    "SX8": {
      erschoepfung: {
        autopilot: `Die Intensit\u00e4t bleibt, auch wenn die Energie fehlt. Man k\u00e4mpft, h\u00e4lt, fordert \u2013 und sp\u00fcrt nicht, wie tief die Ersch\u00f6pfung wirklich geht. Der K\u00f6rper wird herausgefordert statt geh\u00f6rt.`,
        bewusstheit: `Unter welcher Intensit\u00e4t liegt gerade Ersch\u00f6pfung \u2013 und was m\u00fcsstest du loslassen, um sie wirklich zu sp\u00fcren?`,
        uebung: `Lege f\u00fcr einen Moment alle Intensit\u00e4t ab. Atme langsam. F\u00fchle, wie ersch\u00f6pft du wirklich bist \u2013 ohne das sofort zu bek\u00e4mpfen. Benenne es einfach: "Das bin ich gerade."`,
        autopilotEN: `Without an intense focus or an adversary to push against, ordinary life feels completely flat and meaningless. You restlessly hunt for the next spark, the next conflict, or the next massive challenge\u2014just to feel alive.`,
        bewusstheitEN: `What if vitality is just as possible in total stillness\u2014without a battle to fight or a fire to light? What actually remains of you when everything goes completely quiet?`,
        uebungEN: `Go out into nature alone today\u2014with no destination and no task to complete. Sit down somewhere and let the quiet wash over you. Ask yourself: *Who am I when I am not fighting?*`
      },
      konflikt: {
        autopilot: `Im Konflikt gibt es kein Halten mehr \u2013 die volle Energie ist sofort da, direkt, intensiv, fordernd. Kein Schritt zur\u00fcck. Das kann kl\u00e4ren \u2013 und es kann zerst\u00f6ren.`,
        bewusstheit: `Nimmst du dir einen Moment, bevor du mit voller Kraft einsteigst \u2013 nur um zu pr\u00fcfen, ob das die richtige Situation f\u00fcr diese Energie ist?`,
        uebung: `Atme einmal durch, bevor du antwortest \u2013 nicht um dich zur\u00fcckzuhalten, sondern um zu w\u00e4hlen. Was sagst du, wenn du w\u00e4hlst statt reagierst?`,
        autopilotEN: `In conflict there is no holding back - the full energy is there immediately, direct, intense, demanding. Not a step back. That can clarify \u2013 and it can destroy.`,
        bewusstheitEN: `Do you take a moment before you jump in full force - just to check if this is the right situation for that energy?`,
        uebungEN: `Take a breath before you answer\u2014not to hold back, but to choose. What do you say when you choose instead of react?`
      },
      einsamkeit: {
        autopilot: `Einsamkeit l\u00f6st einen tiefen Hunger nach Verschmelzung aus \u2013 nach einer Verbindung, die alles umfasst und ausf\u00fcllt. Wenn diese Verbindung fehlt, entsteht ein nagender innerer Mangel.`,
        bewusstheit: `Was brauchst du wirklich in diesem Moment \u2013 Verschmelzung, oder einfach echten Kontakt? Gibt es eine Person, bei der echtes Da-sein genug w\u00e4re?`,
        uebung: `Suche heute eine einfache k\u00f6rperliche N\u00e4he \u2013 ein Gespr\u00e4ch, ein gemeinsames Schweigen, ein Spaziergang nebeneinander. Nicht Intensit\u00e4t, sondern Pr\u00e4senz.`,
        autopilotEN: `Loneliness triggers a deep hunger for merger - for a connection that encompasses and fills everything. When this connection is missing, a nagging inner lack arises.`,
        bewusstheitEN: `What do you really need at this moment \u2013 \u200b\u200bfusion, or just real contact? Is there a person for whom simply being there would be enough?`,
        uebungEN: `Today, seek simple physical closeness \u2013 a conversation, a shared silence, a walk next to each other. Not intensity, but presence.`
      },
      entscheidung: {
        autopilot: `Entscheidungen werden impulsiv und mit voller Kraft getroffen \u2013 oder auf den wichtigsten Menschen hin ausgerichtet: Was passt zu uns, zu dieser Verbindung? Die eigene, stille Stimme geht in der Intensit\u00e4t unter.`,
        bewusstheit: `Was willst du \u2013 du selbst, ruhig und klar \u2013 in dieser Entscheidung? Gibt es eine Antwort in dir, die du noch nicht wirklich geh\u00f6rt hast?`,
        uebung: `Geh f\u00fcr einen kurzen Spaziergang allein. Frage dich dabei: Was w\u00fcrde ich w\u00e4hlen, wenn niemand davon w\u00fcsste? Dann schreibe die Antwort auf.`,
        autopilotEN: `Decisions are made impulsively and with full force - or focused on the most important person: What suits us, this connection? Your own quiet voice is lost in the intensity.`,
        bewusstheitEN: `What do you \u2013 yourself, calm and clear \u2013 want in this decision? Is there an answer within you that you haven't really heard yet?`,
        uebungEN: `Go for a short walk alone. Ask yourself: What would I choose if no one knew about it? Then write down the answer.`
      },
      beziehungskrise: {
        autopilot: `Die Krise wird mit Intensit\u00e4t \u00fcberw\u00e4ltigt \u2013 man k\u00e4mpft voll, fordert vollst\u00e4ndige Kl\u00e4rung, Verschmelzung, Verbindlichkeit. Wenn der andere das nicht halten kann, kommt der totale R\u00fcckzug.`,
        bewusstheit: `Ist das, was du gerade forderst, wirklich das, was die Beziehung braucht \u2013 oder ist es das, was du innerlich schon immer gesucht hast? Gibt es einen Unterschied?`,
        uebung: `Nenne dem anderen heute einen konkreten Wunsch: \u201eIch w\u00fcnsche mir, dass ..." \u2013 und f\u00fclle ihn mit etwas Erreichbarem. Nicht dem Ideal. Dem M\u00f6glichen.`,
        autopilotEN: `The crisis is overwhelmed with intensity - people fight hard, demand complete clarification, fusion, commitment. If the other person cannot maintain this, there will be a total withdrawal.`,
        bewusstheitEN: `Is what you're asking for right now really what the relationship needs - or is it what you've always been looking for inside? Is there a difference?`,
        uebungEN: `Give the other person a specific wish today: \u201cI wish that\u2026\u201d \u2013 and fill it with something achievable. Not the ideal. The possible.`
      },
      selbstzweifel: {
        autopilot: `Selbstzweifel kommt als Ersch\u00fctterung \u2013 und wird sofort mit Intensit\u00e4t beantwortet: mehr Energie, mehr Entschlossenheit, mehr Kraft. Aber der eigentliche Zweifel bleibt darunter unber\u00fchrt.`,
        bewusstheit: `Was w\u00fcrdest du h\u00f6ren, wenn du die Intensit\u00e4t einen Moment losl\u00e4sst \u2013 und einfach da bist, mit dem Zweifel, ohne ihn zu bek\u00e4mpfen?`,
        uebung: `Geh heute in absolute Stille \u2013 kein Gespr\u00e4ch, keine Musik, kein Handy \u2013 f\u00fcr zwanzig Minuten. Lass kommen, was kommt. Benenne es danach in einem Satz.`,
        autopilotEN: `Self-doubt comes as a shock - and is immediately answered with intensity: more energy, more determination, more strength. But the actual doubt remains untouched underneath.`,
        bewusstheitEN: `What would you hear if you let go of the intensity for a moment - and just be there with the doubt without fighting it?`,
        uebungEN: `Today, go into absolute silence \u2013 no conversation, no music, no cell phone \u2013 for twenty minutes. Let whatever comes come. Then name it in a sentence.`
      },
      verlust: {
        autopilot: `Verlust erzeugt intensive Energie: Zorn, Schmerz, Trauer \u2013 alles kommt gleichzeitig und mit voller Wucht. Das kann \u00fcberw\u00e4ltigend sein. Die Intensit\u00e4t sch\u00fctzt manchmal davor, die Verletzlichkeit wirklich zu sp\u00fcren.`,
        bewusstheit: `Was liegt unter dem Zorn oder der Intensit\u00e4t? Was ist der stille Kern dieses Verlustes \u2013 jenseits der Wucht?`,
        uebung: `Geh heute in Stille \u2013 kein Gespr\u00e4ch, keine Musik. Frage dich: Was vermisse ich wirklich? Lass die Antwort leise kommen. Sie muss nicht laut sein.`,
        autopilotEN: `Loss creates intense energy: anger, pain, sadness - everything comes at once and with full force. This can be overwhelming. The intensity sometimes protects us from really feeling the vulnerability.`,
        bewusstheitEN: `What lies beneath the anger or intensity? What is the quiet core of this loss \u2013 beyond the force?`,
        uebungEN: `Walk in silence today \u2013 no conversation, no music. Ask yourself: What am I really missing? Let the answer come quietly. It doesn't have to be loud.`
      },
      ueberforderung: {
        autopilot: `\u00dcberforderung wird mit Intensit\u00e4t beantwortet: Man dr\u00e4ngt durch, k\u00e4mpft, gibt nicht nach. Die Grenze zwischen gesundem Durchbei\u00dfen und selbstsch\u00e4digendem Druck verschwimmt.`,
        bewusstheit: `Wo ist gerade die Grenze zwischen kraftvoll und selbstsch\u00e4digend? Was w\u00fcrde ein Mentor, dem du vertraust, dir heute raten?`,
        uebung: `Halte heute einmal inne, bevor du eine Entscheidung unter Druck triffst. Drei Atemz\u00fcge. Dann entscheide. Beobachte, ob die Entscheidung anders wird.`,
        autopilotEN: `Overwhelm is met with intensity: you push through, fight, don't give in. The line between healthy biting and self-damaging pressure is blurring.`,
        bewusstheitEN: `Where is the line between powerful and self-damaging? What advice would a mentor you trust give you today?`,
        uebungEN: `Today, pause before you make a decision under pressure. Three breaths. Then decide. Watch to see if the decision changes.`
      },
      stagnation: {
        autopilot: `Ohne Intensit\u00e4t und Gegner f\u00fchlt sich das Leben flach an. Man sucht das n\u00e4chste Feuer, den n\u00e4chsten Konflikt, die n\u00e4chste Herausforderung \u2013 nur um lebendig zu sein.`,
        bewusstheit: `Was w\u00e4re, wenn Lebendigkeit auch in der Stille m\u00f6glich ist \u2013 ohne Kampf, ohne Feuer? Was bleibt von dir, wenn alles ruhig ist?`,
        uebung: `Geh heute allein in die Natur \u2013 ohne Ziel, ohne Aufgabe. Sitz irgendwo und lass die Stille kommen. Frage dich: Was bin ich, wenn ich nicht k\u00e4mpfe?`,
        autopilotEN: `Without intensity and opponents, life feels flat. You look for the next fire, the next conflict, the next challenge - just to be alive.`,
        bewusstheitEN: `What if aliveness is also possible in silence \u2013 without fight, without fire? What remains of you when everything is quiet?`,
        uebungEN: `Go out into nature alone today \u2013 without a goal, without a task. Sit somewhere and let the silence come. Ask yourself: What am I if I don't fight?`
      },
    },

    "SE9": {
      erschoepfung: {
        autopilot: `Man greift zu den vertrauten Tr\u00f6stungen: Gewohnheiten, R\u00fcckzug, das D\u00e4mpfen des Unruhegef\u00fchls. Die Ersch\u00f6pfung wird bet\u00e4ubt, aber nicht geh\u00f6rt. Alles l\u00e4uft weiter \u2013 im Autopiloten.`,
        bewusstheit: `Was bet\u00e4ubst du gerade \u2013 und was w\u00fcrdest du h\u00f6ren, wenn du einen Moment wirklich innehieltest?`,
        uebung: `Lass eine der vertrauten Gewohnheiten heute bewusst aus. Sitz mit dem Unbehagen, das dann entsteht. Frage dich in aller Stille: Was will gerade wirklich geh\u00f6rt werden?`,
        autopilotEN: `Stagnation feels familiar and almost comfortable to your system: you keep moving in the same old groove, avoid making hard decisions, and endlessly procrastinate. The inner emptiness is sedated by routine rather than broken through.`,
        bewusstheitEN: `What if you made just one tiny, crystal-clear decision today\u2014not a massive life change, just a small choice? What would that shift for you?`,
        uebungEN: `Select one specific item that you have been putting off for a long time. Take the very first step toward tackling it\u2014just the first step. Commit to doing it for five minutes. Then stop and see what happens.`
      },
      konflikt: {
        autopilot: `Im Konflikt liegt der Impuls, ihn zu vermeiden, abzumildern, zu beschw\u00f6ren. Man gibt nach, stimmt zu, macht sich kleiner \u2013 um den Frieden zu wahren. Innen sammelt sich dabei etwas an, das irgendwann herausbricht.`,
        bewusstheit: `Was verschluckst du gerade \u2013 und wie lange geht das noch gut?`,
        uebung: `Sage einmal eine klare, ruhige Meinung in diesem Konflikt \u2013 nicht um zu k\u00e4mpfen, sondern weil du eine Meinung hast. Beobachte, was passiert, wenn du auftauchst.`,
        autopilotEN: `In conflict lies the impulse to avoid it, to mitigate it, to invoke it. You give in, agree, make yourself smaller - to keep the peace. Something accumulates inside and eventually breaks out.`,
        bewusstheitEN: `What are you swallowing right now \u2013 and how long will it last?`,
        uebungEN: `Express your clear, calm opinion in this conflict - not to fight, but because you have an opinion. Watch what happens when you show up.`
      },
      einsamkeit: {
        autopilot: `Einsamkeit wird mit Gewohnheiten aufgef\u00fcllt: Fernsehen, Essen, Scrollen, D\u00f6sen. Man bet\u00e4ubt das Alleinsein, ohne es wirklich zu f\u00fchlen. Der R\u00fcckzug macht sich unsichtbar, weil er so vertraut ist.`,
        bewusstheit: `Was bet\u00e4ubst du gerade \u2013 und was w\u00fcrde auftauchen, wenn du es wirklich f\u00fchlen w\u00fcrdest?`,
        uebung: `Mach heute eine Gewohnheit bewusst: Bevor du zum Handy greifst oder den Fernseher einschaltest, halte einen Moment inne. Was brauchst du wirklich? Und ist das, was du gleich tun wirst, wirklich das?`,
        autopilotEN: `Loneliness is filled with habits: watching TV, eating, scrolling, dozing. You numb being alone without really feeling it. The withdrawal becomes invisible because it is so familiar.`,
        bewusstheitEN: `What are you numbing right now \u2013 and what would emerge if you really felt it?`,
        uebungEN: `Create a habit today: Before you pick up your phone or turn on the TV, pause for a moment. What do you really need? And is what you're about to do really that?`
      },
      entscheidung: {
        autopilot: `Man entscheidet nicht wirklich \u2013 man l\u00e4sst entscheiden. Die Situation, die Gewohnheit, der Zufall \u00fcbernehmen. Man folgt dem Weg des geringsten Widerstands, ohne bewusst zu w\u00e4hlen.`,
        bewusstheit: `Hast du diese Entscheidung getroffen \u2013 oder ist sie einfach passiert? Was w\u00e4re es, einmal wirklich zu w\u00e4hlen, auch wenn das Unbehagen kostet?`,
        uebung: `Setze dir einen klaren Entscheidungsmoment: Heute, um [Uhrzeit], treffe ich diese Wahl. Halte diesen Moment ein. Schreibe auf, was du gew\u00e4hlt hast und warum.`,
        autopilotEN: `You don't really decide - you let it be decided. The situation, the habit, the coincidence take over. One follows the path of least resistance without consciously choosing.`,
        bewusstheitEN: `Did you make this decision \u2013 or did it just happen? What would it be like to really choose for once, even if it costs discomfort?`,
        uebungEN: `Set yourself a clear decision moment: Today, at [time], I make this choice. Capture this moment. Write down what you chose and why.`
      },
      beziehungskrise: {
        autopilot: `Man hofft, dass die Krise sich von selbst aufl\u00f6st. Man wartet ab, weicht aus, macht anderes \u2013 und die Spannung zwischen den Beteiligten w\u00e4chst, weil sie nie wirklich angesprochen wird.`,
        bewusstheit: `L\u00f6st sich das gerade wirklich auf \u2013 oder verdr\u00e4ngt du es und hoffst, es wird weniger? Was w\u00fcrde passieren, wenn du heute das Gespr\u00e4ch initiierst?`,
        uebung: `Sage dem anderen heute: \u201eIch m\u00f6chte mit dir \u00fcber etwas sprechen, das mich besch\u00e4ftigt." Nur dieser Satz. Dann schau, was kommt.`,
        autopilotEN: `One hopes that the crisis will resolve itself. You wait, evade, do something else - and the tension between those involved grows because it is never really addressed.`,
        bewusstheitEN: `Is it really dissolving at the moment - or are you repressing it and hoping it will lessen? What would happen if you initiated the conversation today?`,
        uebungEN: `Say to the other person today, "I want to talk to you about something that's bothering me." Just this sentence. Then see what comes.`
      },
      selbstzweifel: {
        autopilot: `Selbstzweifel wird bet\u00e4ubt: Ich bin doch in Ordnung, das wird sich schon legen. Man greift zu Gewohnheiten, zieht sich zur\u00fcck, macht weiter \u2013 und die innere Stimme, die etwas sagen will, verstummt im Alltag.`,
        bewusstheit: `Was w\u00fcrdest du h\u00f6ren, wenn du die Gewohnheiten einen Moment weglegst und wirklich fragst: Wie geht es mir eigentlich \u2013 ehrlich?`,
        uebung: `Schreibe heute auf, was dein innerer Kritiker sagt \u2013 und dann schreibe daneben, was ein wohlwollender Freund sagen w\u00fcrde. Lass beide Stimmen nebeneinander stehen.`,
        autopilotEN: `Self-doubt is numbed: I'm okay, it'll go away. You resort to habits, withdraw, carry on - and the inner voice that wants to say something falls silent in everyday life.`,
        bewusstheitEN: `What would you hear if you put the habits aside for a moment and really ask: How am I actually feeling - honestly?`,
        uebungEN: `Today, write down what your inner critic says - and then write next to it what a benevolent friend would say. Let both voices stand next to each other.`
      },
      verlust: {
        autopilot: `Verlust wird in Routine eingebettet: Man macht weiter, bet\u00e4ubt sich mit dem Alltag, schiebt den Schmerz auf. Der Verlust sitzt irgendwo, aber er bekommt keinen Raum, weil Raum sich gef\u00e4hrlich anf\u00fchlt.`,
        bewusstheit: `Was tr\u00e4gst du mit dir, das noch keinen Raum hatte? Was w\u00e4re, wenn du heute nur zehn Minuten f\u00fcr deinen Schmerz reservierst?`,
        uebung: `Sitz heute mit einem Foto oder einer Erinnerung an das Verlorene. Zehn Minuten. Lass kommen, was kommt \u2013 auch Tr\u00e4nen, auch Leere, auch Stille. Alles darf sein.`,
        autopilotEN: `Loss becomes embedded in routine: you carry on, anesthetize yourself with everyday life, postpone the pain. The loss is somewhere, but it doesn't get space because space feels dangerous.`,
        bewusstheitEN: `What are you carrying with you that hasn't had a place yet? What if you set aside just ten minutes for your pain today?`,
        uebungEN: `Sit today with a photo or a reminder of what was lost. Ten minutes. Let whatever comes come \u2013 even tears, also emptiness, also silence. Everything is allowed.`
      },
      ueberforderung: {
        autopilot: `\u00dcberforderung wird still getragen: Man macht weiter, sagt nichts, hofft dass es von selbst besser wird. Der Druck sammelt sich, bis er in Ersch\u00f6pfung oder pl\u00f6tzlichem R\u00fcckzug m\u00fcndet.`,
        bewusstheit: `Was tr\u00e4gst du gerade, das du eigentlich nicht allein tragen solltest? Gibt es jemanden, dem du heute sagen k\u00f6nntest, was zu viel ist?`,
        uebung: `Schreibe heute auf: Was ist zu viel? Was davon kannst du abgeben? Sag einer Person konkret, was du brauchst \u2013 auch wenn es sich seltsam anf\u00fchlt.`,
        autopilotEN: `Overwhelm is carried quietly: you carry on, don't say anything, hope that things get better on their own. The pressure accumulates until it results in exhaustion or sudden withdrawal.`,
        bewusstheitEN: `What are you wearing right now that you shouldn't be wearing alone? Is there anyone you could tell today what's too much?`,
        uebungEN: `Write down today: What is too much? Which of these can you give away? Tell a person specifically what you need - even if it feels strange.`
      },
      stagnation: {
        autopilot: `Stagnation ist vertraut und fast bequem: Man macht weiter im Trott, meidet Entscheidungen, schiebt auf. Die Leere wird durch Routine bet\u00e4ubt statt durchbrochen.`,
        bewusstheit: `Was w\u00e4re, wenn du heute eine kleine, klare Entscheidung triffst \u2013 nicht die gro\u00dfe, nur eine kleine? Was w\u00fcrde das ver\u00e4ndern?`,
        uebung: `W\u00e4hle heute etwas, das du schon lange aufgeschoben hast. Mach den ersten Schritt \u2013 nur den ersten. F\u00fcnf Minuten. Dann schau, was passiert.`,
        autopilotEN: `Stagnation is familiar and almost comfortable: you keep going in a rut, avoid making decisions, procrastinate. The emptiness is numbed by routine rather than broken.`,
        bewusstheitEN: `What if you made a small, clear decision today - not the big one, just a small one? What would that change?`,
        uebungEN: `Today, choose something that you have been putting off for a long time. Take the first step \u2013 just the first. Five minutes. Then see what happens.`
      },
    },

    "SO9": {
      erschoepfung: {
        autopilot: `Man macht weiter mit allem, weil aufh\u00f6ren bedeuten w\u00fcrde, Wellen zu schlagen. Man passt sich an, f\u00fcgt sich ein, sagt Ja \u2013 und sp\u00fcrt kaum, wie die eigene Kraft dabei schwindet.`,
        bewusstheit: `Wessen Erwartungen erf\u00fcllst du gerade, obwohl du ersch\u00f6pft bist? Und wessen Erwartung ist es eigentlich wirklich?`,
        uebung: `Sage heute einmal bewusst Nein zu einer Anfrage oder Erwartung \u2013 auch einer kleinen. Beobachte, welcher innere Widerstand entsteht, und wo er sitzt.`,
        autopilotEN: `You live entirely for the harmony of the group, and you lose your personal drive in the process: *Where am I going? What do I want?* These questions are permanently sidelined because the group provides your sense of direction.`,
        bewusstheitEN: `What do you want\u2014you yourself, entirely for you, without worrying about the group? Is there a personal desire that has been waiting on the shelf for a long time?`,
        uebungEN: `Write it down plainly today: *If I were allowed to decide completely on my own, without disappointing a single soul\u2014what would I do next?* Then consider if you can brave the very first step.`
      },
      konflikt: {
        autopilot: `Im Konflikt \u00fcbernimmt man die Perspektiven aller Beteiligten und versucht zu vermitteln, zu verbinden, zu gl\u00e4tten. Die eigene Position verschwindet dabei oft. Am Ende weiss man nicht mehr genau, wo man selbst steht.`,
        bewusstheit: `Was ist deine eigene Meinung in diesem Konflikt \u2013 nicht die ausgewogene Synthese, sondern wirklich deine?`,
        uebung: `Formuliere einmal nur deinen eigenen Standpunkt, ohne die Position des anderen einzubeziehen. Nur: \u201eIch denke ...\u201d und dann ein klarer Satz.`,
        autopilotEN: `In a conflict, you take on the perspectives of everyone involved and try to mediate, connect and smooth things over. Your own position often disappears. In the end, you no longer know exactly where you stand.`,
        bewusstheitEN: `What is your own opinion in this conflict - not the balanced synthesis, but really yours?`,
        uebungEN: `Just formulate your own point of view without taking the other person's position into account. Just: \u201cI think\u2026\u201d and then a clear sentence.`
      },
      einsamkeit: {
        autopilot: `Einsamkeit wird kaum als solche erkannt \u2013 man verschmilzt mit der Umgebung, der Stimmung, dem Alltag. Das Alleinsein l\u00e4uft im Hintergrund, w\u00e4hrend man sich mit dem Au\u00dfen besch\u00e4ftigt. Erst in ruhigen Momenten taucht es auf.`,
        bewusstheit: `Wann hast du zuletzt wirklich f\u00fcr dich selbst Kontakt gesucht \u2013 nicht weil es sich ergab, nicht weil jemand anderes es wollte, sondern weil du es dir gew\u00fcnscht hast?`,
        uebung: `Initiiere heute selbst eine Begegnung \u2013 nicht abwarten, bis jemand kommt. W\u00e4hle aktiv. Beobachte, wie sich das anf\u00fchlt, wenn du aus dir heraus auf jemanden zugehst.`,
        autopilotEN: `Loneliness is hardly recognized as such - you merge with your surroundings, your mood, your everyday life. Being alone runs in the background while you deal with the outside. It only appears in quiet moments.`,
        bewusstheitEN: `When was the last time you really sought contact for yourself - not because it happened, not because someone else wanted it, but because you wanted it?`,
        uebungEN: `Initiate an encounter yourself today \u2013 don\u2019t wait for someone to come. Choose active. Observe what it feels like when you approach someone out of yourself.`
      },
      entscheidung: {
        autopilot: `Man passt sich an: Was erwartet die Gruppe? Was w\u00e4re vertr\u00e4glich f\u00fcr alle? Die eigene Stimme wird dabei so weit zur\u00fcckgestellt, dass sie selbst kaum mehr zu h\u00f6ren ist.`,
        bewusstheit: `Was w\u00fcrdest du w\u00e4hlen, wenn du nur f\u00fcr dich selbst entscheidest \u2013 nicht als Teil der Gruppe, nicht als jemand, der Harmonie h\u00e4lt? Gibt es diese Stimme in dir?`,
        uebung: `Schreibe auf, was du willst \u2013 ohne R\u00fccksicht auf andere. Nicht um es sofort umzusetzen, sondern um es zu kennen. Diese Stimme hat ein Recht, geh\u00f6rt zu werden.`,
        autopilotEN: `You adapt: \u200b\u200bWhat does the group expect? What would be acceptable for everyone? Your own voice is pushed back so far that you can hardly hear it anymore.`,
        bewusstheitEN: `What would you choose if you decided only for yourself - not as part of the group, not as someone who keeps harmony? Is there that voice within you?`,
        uebungEN: `Write down what you want - without considering others. Not to implement it immediately, but to know it. This voice has a right to be heard.`
      },
      beziehungskrise: {
        autopilot: `Man passt sich an, vermittelt, \u00fcbernimmt alle Perspektiven \u2013 und verliert dabei die eigene. Die Krise wird durch Vermittlung aufgel\u00f6st, statt durch Kl\u00e4rung. Niemand wei\u00df, was man selbst eigentlich will.`,
        bewusstheit: `Was willst du in dieser Beziehung \u2013 wirklich du, nicht als Kompromiss, nicht als Synthese? Gibt es diese Antwort in dir?`,
        uebung: `Sag dem anderen einmal klar, was dir an dieser Beziehung wichtig ist \u2013 nicht als Forderung, sondern als eigene Wahrheit: \u201eMir ist wichtig, dass ..." Lass ihn antworten.`,
        autopilotEN: `You adapt, mediate, take on all perspectives - and in the process you lose your own. The crisis is resolved through mediation rather than through clarification. Nobody knows what you actually want.`,
        bewusstheitEN: `What do you want in this relationship \u2013 really you, not as a compromise, not as a synthesis? Does this answer exist within you?`,
        uebungEN: `Tell the other person clearly what is important to you about this relationship - not as a demand, but as your own truth: "It's important to me that..." Let him answer.`
      },
      selbstzweifel: {
        autopilot: `Selbstzweifel f\u00fchrt dazu, dass man sich noch st\u00e4rker anpasst: Wenn ich nur genug tue, was die anderen brauchen, wird der Zweifel kleiner. Aber er w\u00e4chst, weil die eigene Stimme dabei immer leiser wird.`,
        bewusstheit: `Wessen Erwartungen versucht dein innerer Kritiker gerade zu erf\u00fcllen \u2013 und sind das wirklich deine eigenen Ma\u00dfst\u00e4be?`,
        uebung: `Frage dich heute: Was w\u00fcrde ich tun, wenn ich mir selbst gegen\u00fcber genauso f\u00fcrsorglich w\u00e4re wie gegen\u00fcber anderen? Tue dann eine einzige Sache davon.`,
        autopilotEN: `Self-doubt leads you to adapt even more: if I just do enough of what others need, the doubt will diminish. But it grows because your own voice becomes quieter and quieter.`,
        bewusstheitEN: `Whose expectations is your inner critic currently trying to fulfill \u2013 and are they really your own standards?`,
        uebungEN: `Ask yourself today: What would I do if I were as caring toward myself as I am toward others? Then do just one thing.`
      },
      verlust: {
        autopilot: `Man trauert still in der Gruppe mit, passt den Schmerz an das Kollektiv an. Der eigene Verlust verschmilzt mit dem gemeinsamen \u2013 und die pers\u00f6nliche Tiefe bleibt unber\u00fchrt.`,
        bewusstheit: `Was verlierst du ganz pers\u00f6nlich \u2013 nicht die Gruppe, nicht die Gemeinschaft, sondern du? Gibt es einen eigenen Schmerz darunter?`,
        uebung: `Schreibe heute auf, was dieser Verlust speziell f\u00fcr dich bedeutet \u2013 nicht f\u00fcr die anderen, nicht f\u00fcr die Gruppe. Nur deine Sicht. Nur dein Schmerz.`,
        autopilotEN: `You grieve silently in the group, adapting your pain to the collective. Your own loss merges with the shared one - and your personal depth remains untouched.`,
        bewusstheitEN: `What do you personally lose \u2013 not the group, not the community, but you? Is there a pain of its own underneath?`,
        uebungEN: `Today, write down what this loss means specifically to you \u2013 not to others, not to the group. Just your perspective. Just your pain.`
      },
      ueberforderung: {
        autopilot: `Man harmonisiert unter Druck: nickt zu, \u00fcbernimmt, gibt nach \u2013 um den Frieden zu wahren. Die eigene \u00dcberforderung bleibt unsichtbar, weil Konflikte vermieden werden.`,
        bewusstheit: `Was hast du heute zugestimmt, das eigentlich zu viel war? Und was w\u00e4re ein freundliches, klares Nein gewesen?`,
        uebung: `Sag heute in einer Situation, wo es zu viel wird, ruhig und freundlich: \u201eDas kann ich gerade nicht \u00fcbernehmen." Nur diesen Satz. Kein Aber, keine Entschuldigung.`,
        autopilotEN: `You harmonize under pressure: nod, take over, give in - to keep the peace. Your own excessive demands remain invisible because conflicts are avoided.`,
        bewusstheitEN: `What did you agree to today that was actually too much? And what would have been a friendly, clear no?`,
        uebungEN: `Today, in a situation where it becomes too much, say calmly and kindly: "I can't take on that right now." Just this sentence. No buts, no excuses.`
      },
      stagnation: {
        autopilot: `Man lebt f\u00fcr die Harmonie der Gruppe und verliert dabei den eigenen Impuls: Wohin will ich? Was will ich? Diese Fragen bleiben im Hintergrund, weil die Gruppe Orientierung gibt.`,
        bewusstheit: `Was willst du \u2013 du selbst, ganz f\u00fcr dich, ohne R\u00fccksicht auf die Gruppe? Gibt es einen eigenen Wunsch, der schon lange wartet?`,
        uebung: `Schreibe heute auf: Wenn ich allein entscheiden d\u00fcrfte, ohne jemanden zu entt\u00e4uschen \u2013 was w\u00fcrde ich als n\u00e4chstes tun? Dann \u00fcberleg, ob du den ersten Schritt wagen kannst.`,
        autopilotEN: `You live for the harmony of the group and lose your own impulse: Where do I want to go? What do I want? These questions remain in the background because the group provides orientation.`,
        bewusstheitEN: `What do you want \u2013 yourself, all by yourself, without regard to the group? Is there a wish of your own that has been waiting for a long time?`,
        uebungEN: `Write down today: If I could decide on my own without disappointing anyone, what would I do next? Then think about whether you can take the first step.`
      },
    },

    "SX9": {
      erschoepfung: {
        autopilot: `Man verschmilzt mit dem Partner, mit der Umgebung, mit dem Strom des Alltags \u2013 und merkt kaum, wie ersch\u00f6pft man ist. Die Grenze zwischen eigener Ersch\u00f6pfung und der Energie des anderen verschwimmt.`,
        bewusstheit: `Was von dieser Ersch\u00f6pfung geh\u00f6rt wirklich dir \u2013 und was tr\u00e4gst du von anderen? Kannst du das in diesem Moment unterscheiden?`,
        uebung: `Setze dich alleine, ohne Verbindung nach au\u00dfen. Frage dich: Wie geht es mir \u2013 mir allein, in diesem Moment? Lass die Antwort kommen, ohne sie sofort zu teilen.`,
        autopilotEN: `Stagnation sets in when you lose your boundaries with the other person: you passively drift along in your partner's rhythm, completely lacking your own direction. Your internal emptiness remains vague and unnamed.`,
        bewusstheitEN: `What do you actually want\u2014completely independent of the other person? Is there a personal direction inside you that you haven't tuned into for a long time?`,
        uebungEN: `Write down three sentences today that begin with: "I want..." Do this entirely for yourself, without factoring the other person into the equation at all. Let them stand. That is your direction.`
      },
      konflikt: {
        autopilot: `Im Konflikt verschmilzt man entweder mit der Energie des anderen \u2013 nimmt seine Aufgebrachtheit an, tr\u00e4gt sie mit \u2013 oder zieht sich in eine schwer erreichbare Stille zur\u00fcck. Beides ist eine Form des Verlorenseins.`,
        bewusstheit: `Was denkst und f\u00fchlst du \u2013 du selbst \u2013 gerade in diesem Konflikt? Nicht der andere, nicht die Energie des anderen: du.`,
        uebung: `Sage einmal in aller Stille, was du in diesem Konflikt m\u00f6chtest \u2013 auch wenn es dem anderen widerspricht. Nur f\u00fcr dich, laut: \u201eIch m\u00f6chte ...\u201d`,
        autopilotEN: `In conflict, you either merge with the other person's energy - accept their anger, carry it with you - or retreat into a silence that is difficult to achieve. Both are a form of being lost.`,
        bewusstheitEN: `What are you \u2013 yourself \u2013 thinking and feeling in this conflict? Not the other, not the other's energy: you.`,
        uebungEN: `Say quietly what you want in this conflict - even if it contradicts the other person. Just for you, out loud: \u201cI want\u2026\u201d`
      },
      einsamkeit: {
        autopilot: `Einsamkeit wird kaum als solche erkannt \u2013 man verschmilzt mit der Umgebung, der Stimmung, dem Alltag. Das Alleinsein l\u00e4uft im Hintergrund, w\u00e4hrend man sich mit dem Au\u00dfen besch\u00e4ftigt. Erst in ruhigen Momenten taucht es auf.`,
        bewusstheit: `Wann hast du zuletzt wirklich f\u00fcr dich selbst Kontakt gesucht \u2013 nicht weil es sich ergab, nicht weil jemand anderes es wollte, sondern weil du es dir gew\u00fcnscht hast?`,
        uebung: `Initiiere heute selbst eine Begegnung \u2013 nicht abwarten, bis jemand kommt. W\u00e4hle aktiv. Beobachte, wie sich das anf\u00fchlt, wenn du aus dir heraus auf jemanden zugehst.`,
        autopilotEN: `Loneliness is hardly recognized as such - you merge with your surroundings, your mood, your everyday life. Being alone runs in the background while you deal with the outside. It only appears in quiet moments.`,
        bewusstheitEN: `When was the last time you really sought contact for yourself - not because it happened, not because someone else wanted it, but because you wanted it?`,
        uebungEN: `Initiate an encounter yourself today \u2013 don\u2019t wait for someone to come. Choose active. Observe what it feels like when you approach someone out of yourself.`
      },
      entscheidung: {
        autopilot: `Man \u00fcbernimmt die Entscheidung des wichtigsten Menschen \u2013 verschmilzt mit ihr, macht sie zur eigenen. Das eigene Wollen ist so leise, dass es kaum zu h\u00f6ren ist, und manchmal wei\u00df man nicht mehr, was man selbst eigentlich wollte.`,
        bewusstheit: `Welche Entscheidung triffst du hier wirklich \u2013 deine eigene, oder eine, die du von jemandem anderen \u00fcbernommen hast? Gibt es einen Unterschied?`,
        uebung: `Geh allein, ohne Handy, kurz nach drau\u00dfen. Frage dich: Was w\u00fcrde ich in dieser Sache w\u00e4hlen, wenn ich heute komplett alleine w\u00e4re? Schreibe das auf, bevor du wieder zur\u00fcckkommst.`,
        autopilotEN: `You take on the decision of the most important person - merge with it, make it your own. Your own desire is so quiet that it can hardly be heard, and sometimes you no longer know what you actually wanted.`,
        bewusstheitEN: `What decision are you really making here \u2013 your own, or one you inherited from someone else? Is there a difference?`,
        uebungEN: `Go outside for a moment alone, without your cell phone. Ask yourself: What would I choose in this matter if I were completely alone today? Write this down before you come back.`
      },
      beziehungskrise: {
        autopilot: `Man verschmilzt mit der Stimmung des anderen, tr\u00e4gt seine Krise mit, verliert sich im Erleben des anderen \u2013 und merkt kaum, was man selbst braucht oder denkt. Die Beziehung kriselt, und man ist dabei und doch nicht ganz da.`,
        bewusstheit: `Was brauchst du in dieser Beziehungskrise \u2013 du selbst, getrennt vom anderen? Gibt es etwas in dir, das noch nicht geh\u00f6rt wurde?`,
        uebung: `Geh kurz allein nach drau\u00dfen. Frage dich: Was w\u00fcnsche ich mir f\u00fcr uns \u2013 nur von mir aus, ohne den anderen einzubeziehen? Dann komm zur\u00fcck und teile es.`,
        autopilotEN: `You merge with the other's mood, carry your crisis with you, lose yourself in the other's experience - and hardly notice what you need or think yourself. The relationship is in crisis and you are there but not fully there.`,
        bewusstheitEN: `What do you need in this relationship crisis - yourself, separated from the other person? Is there something inside you that hasn't been heard yet?`,
        uebungEN: `Go outside alone for a moment. Ask yourself: What do I want for us - just for myself, without involving the other person? Then come back and share it.`
      },
      selbstzweifel: {
        autopilot: `Selbstzweifel l\u00f6st sich im anderen auf: Man \u00fcbernimmt die Sichtweise des Partners \u2013 wenn er okay ist, bin ich okay. Wenn er zweifelt, zweifle ich auch. Die eigene Einsch\u00e4tzung fehlt, weil die Grenze verschwommen ist.`,
        bewusstheit: `Was denkst du \u2013 du selbst, unabh\u00e4ngig vom anderen \u2013 \u00fcber dich in diesem Moment? Gibt es eine eigene Stimme, die das beurteilen kann?`,
        uebung: `Schreib heute drei S\u00e4tze \u00fcber dich, die nur aus dir kommen \u2013 ohne Bezug zum anderen. \u201eIch bin jemand, der \u2026\u201c Lass sie stehen als deine eigene Beschreibung.`,
        autopilotEN: `Self-doubt dissolves in the other: you adopt your partner's point of view - if he's okay, I'm okay. If he doubts, I doubt too. Your own assessment is missing because the boundaries are blurred.`,
        bewusstheitEN: `What do you - yourself, independent of the other - think about yourself in this moment? Is there a separate voice that can judge this?`,
        uebungEN: `Write three sentences about yourself today that only come from you - without reference to the other person. \u201cI am someone who\u2026\u201d Leave it as your own description.`
      },
      verlust: {
        autopilot: `Verlust einer zentralen Beziehung bringt tiefe Orientierungslosigkeit: Ohne den anderen wei\u00df man kaum, wer man ist. Man sucht Halt, schmiegt sich an das Vertraute \u2013 und die eigene Trauer bleibt diffus.`,
        bewusstheit: `Wer bist du, wenn du allein mit diesem Verlust bist \u2013 ohne den anderen, ohne eine Aufgabe? Was ist da?`,
        uebung: `Geh heute allein nach drau\u00dfen, ohne Telefon. Lass die Stille kommen. Frage dich: Was f\u00fchle ich wirklich \u2013 ganz f\u00fcr mich, ohne Bezug zu jemand anderem?`,
        autopilotEN: `Loss of a central relationship brings deep disorientation: without the other person, you hardly know who you are. You look for support, snuggle up to what is familiar - and your own grief remains diffuse.`,
        bewusstheitEN: `Who are you when you are alone with this loss - without the other person, without a purpose? What's there?`,
        uebungEN: `Go outside alone today, without a phone. Let the silence come. Ask yourself: What do I really feel - entirely for myself, without reference to anyone else?`
      },
      ueberforderung: {
        autopilot: `\u00dcberforderung entsteht, wenn die Grenzen zum wichtigsten Menschen oder zur Umgebung fehlen. Man \u00fcbernimmt alles, was kommt \u2013 und verliert den Faden zur eigenen Kapazit\u00e4t.`,
        bewusstheit: `Was von dem, was du gerade tr\u00e4gst, geh\u00f6rt wirklich dir \u2013 und was hast du \u00fcbernommen, weil es niemand sonst trug?`,
        uebung: `Mache heute eine Liste: Meine Aufgaben \u2013 und Aufgaben, die ich \u00fcbernommen habe. Dann w\u00e4hle eine aus der zweiten Liste und gib sie zur\u00fcck oder lass sie liegen.`,
        autopilotEN: `Overwhelm occurs when boundaries with the most important person or the environment are missing. You take on everything that comes \u2013 and lose track of your own capacity.`,
        bewusstheitEN: `What of what you're wearing right now is really yours - and what did you take over because no one else was wearing it?`,
        uebungEN: `Make a list today: My tasks \u2013 and tasks that I have taken on. Then choose one from the second list and return it or leave it alone.`
      },
      stagnation: {
        autopilot: `Stagnation entsteht, wenn die Grenzen zum anderen fehlen: Man bewegt sich im Rhythmus des Partners, ohne eigene Richtung zu haben. Die innere Leere bleibt diffus und unbenannt.`,
        bewusstheit: `Was willst du \u2013 unabh\u00e4ngig vom anderen? Gibt es eine eigene Richtung in dir, die du schon lange nicht geh\u00f6rt hast?`,
        uebung: `Schreibe heute drei S\u00e4tze, die mit \u201eIch will \u2026" beginnen \u2013 ganz f\u00fcr dich, ohne den anderen einzubeziehen. Lass sie stehen. Das ist deine Richtung.`,
        autopilotEN: `Stagnation occurs when there are no boundaries with the other person: you move to your partner's rhythm without having your own direction. The inner emptiness remains diffuse and unnamed.`,
        bewusstheitEN: `What do you want \u2013 regardless of the other person? Is there a direction within you that you haven't heard in a long time?`,
        uebungEN: `Today write three sentences that begin with \u201cI want\u2026\u201d \u2013 just for you, without involving the other person. Leave them alone. This is your direction.`
      },
    },

  }
};
