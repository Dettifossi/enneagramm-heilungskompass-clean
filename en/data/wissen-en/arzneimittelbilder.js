const { shell, pageHeader, relatedLinks, bookTip } = window.__kh;

const AB_TYPEN = [
  {
    n: 1, mittel: "Platinum metallicum", farbe: "#8f8f8f", leidenschaft: "Anger", mindmap: "mindmap-platin",
    titel: "Focus on anger and resentment",
    psyche: [
      `The psyche of the Type 1 patient is strongly marked by a sense of inner <strong>superiority</strong> that feeds on a deeply rooted insecurity. The feeling of superiority works as a protective mechanism against vulnerability and the fear of being belittled or rejected. <strong>Anger</strong> and <strong>resentment</strong> are central emotional dynamics of this type. They arise when the expected recognition, respect or appreciation does not come.`,
      `Type 1 feels a strong distance from others and often sees itself as ›above average‹; at the same time this stance is fragile. Criticism or missing recognition is felt as a deep insult and triggers lasting inner resentment. The patient can seem arrogant, condescending and overly self-focused, as if wrapped in a ›protective armor‹. The anger is often subtler, shows up more as resentment, in passive-aggressive behavior, sarcastic remarks or demonstrative contempt.`,
      `These patients strive for power and control because they see it as protection against injury. Inwardly they still suffer from loneliness and a sense of isolation. Self-elevation and resentment stand in a paradoxical relationship to the deep longing for closeness and affirmation. They can switch quickly between extreme friendliness and sharp rejection, which often complicates their relationships.`
    ],
    psych: [
      ["Feelings of superiority", "Excessive self-focus, often as protection against feelings of inferiority."],
      ["Sensitivity to criticism", "Heightened perception of insult that leads to lasting resentment."],
      ["Passive-aggressive behavior", "Sarcasm or subtle devaluation of others."],
      ["Emotional withdrawal", "Inner distance from other people out of fear of injury."],
      ["Isolation and loneliness", "Paradoxical combination of feelings of superiority and longing for closeness."],
      ["Strong mood swings", "Alternation between arrogance and the need for affirmation."],
      ["Distrust", "Tendency to suspect others of manipulation or malice."],
      ["Perfectionism", "High need for control and flawlessness in one's own life."],
      ["Cynicism and contempt", "Tendency to devalue others and their achievements."],
      ["Inner tension and restlessness", "Constant preoccupation with one's own status and self-image."]
    ],
    koerper: [
      ["Hyperesthesia (oversensitivity)", "Heightened sensitivity of the skin, often in the genitals or face.", "Patients report intense sensations such as tingling or burning that occur even with light contact."],
      ["Spasms (muscle cramps)", "Frequent in the muscles of the face, the hands or the urogenital area.", "Sudden, painful contractions that are intensified by stress or emotional excitement."],
      ["Tremor (trembling)", "Fine trembling of the hands or other parts of the body.", "Nervous trembling under tension or emotional strain."],
      ["Paresthesia (abnormal sensations)", "Feeling of numbness or tingling, especially in the limbs.", "Often without an organic cause, intensified by psychological stress."],
      ["Dysmenorrhea (painful menstruation)", "Severe, cramp-like pain during menstruation.", "Often accompanied by irritability and inner restlessness."],
      ["Dyspareunia (pain during intercourse)", "Complaints in the genital area, often psychologically contributed.", "Pain is described as burning or stabbing, accompanied by emotional tension."],
      ["Migraine (severe headaches)", "Triggered especially by stress or emotional pressure.", "One-sided, throbbing pain, often with nausea and sensitivity to light."],
      ["Colic (cramping abdominal pain)", "Especially after stressful events.", "Sudden, painful contractions in the abdomen, often without an organic cause."],
      ["Palpitations (heart pounding)", "Noticeable heartbeat at rest, often with inner agitation.", "Patients report a ›racing‹ or ›hammering‹ heart."],
      ["Dysphagia (difficulty swallowing)", "Feeling that food gets stuck in the throat, especially under emotional stress.", "Patients feel pressure or a lump in the throat without a discernible physical cause."]
    ],
    fazit: `Type 1 shows a close connection between psychological experience and physical symptoms: emotional tension often intensifies the physical complaints or goes along with them.`
  },
  {
    n: 2, mittel: "Hyoscyamus niger", farbe: "#9455c4", leidenschaft: "Pride", mindmap: "mindmap-hyoscyamus",
    titel: "Focus on pride and disinhibition",
    psyche: [
      `The Type 2 patient shows a broad range of psychological peculiarities, marked above all by a distorted self-perception, <strong>pride</strong> and eccentric behavior. The passion of pride shows in Twos as an uncontrolled display of self-elevation and a need for attention. It is less about authentic greatness than about an exaggerated presentation of the self, often with provocative, boundary-crossing or inappropriate behavior.`,
      `These patients often seem theatrical and eccentric, as if standing on a stage. The wish for attention can express itself in exaggerated <strong>jealousy</strong>, a strong tendency toward sexual disinhibition and inappropriate behavior. The <strong>feeling of vulnerability</strong> and the <strong>fear of being abandoned</strong> are strong; this is why the behavior is often an attempt to keep bonds alive or to force confirmation. At the same time, aggressive and manipulative behavior can occur when expectations are not met.`,
      `Another central theme is <strong>boundlessness</strong>: it is hard to respect social or moral norms, which shows in sexual innuendo, exhibitionist tendencies or disrespectful behavior. Pride appears here as a kind of rebellious arrogance that tries to draw others' attention through scandal or provocation. In the background, however, there is often a deep inner insecurity and a sense of inadequacy.`
    ],
    psych: [
      ["Jealousy", "Uncontrolled, often paranoid fear of not receiving enough attention or love."],
      ["Sexual disinhibition", "Inappropriate behavior with provocative sexual innuendo or acts."],
      ["Theatricality", "Exaggerated self-presentation and a drive to be the center of attention."],
      ["Fear of abandonment", "Compulsive clinging to relationships, often with controlling behavior."],
      ["Delirious states", "Confusion, hallucinations and loss of the perception of reality."],
      ["Mania", "Heightened activity combined with inappropriate behavior and euphoria."],
      ["Aggression and distrust", "Sudden outbursts of anger or distrustful behavior, often without a recognizable reason."],
      ["Exhibitionism", "Tendency to attract attention through provocative or exposing behavior."],
      ["Claustrophobia", "Fear of enclosed spaces or loss of control, often with panic reactions."],
      ["Paranoia", "Feeling of persecution or the conviction that others want to harm them."]
    ],
    koerper: [
      ["Delirium (states of confusion)", "Episodes of mental confusion, often with hallucinations.", "Patients are disoriented, speak incoherently or have delusions."],
      ["Myoclonus (muscle twitching)", "Sudden, involuntary muscle contractions.", "Twitches can occur spontaneously or be triggered by emotional excitement."],
      ["Tremor (trembling)", "Trembling of the hands or other parts of the body.", "Especially pronounced with restlessness or fear."],
      ["Convulsions (seizures)", "Violent, uncontrollable muscle cramps, often epileptic in nature.", "Attacks can be triggered by overstimulation or stress."],
      ["Dysphagia (swallowing disorders)", "Difficulty swallowing, often with a feeling of choking.", "Can be triggered by psychological tension or physical irritation."],
      ["Tachycardia (racing heart)", "Increased heart rate at rest.", "Patients report a ›racing heart‹ without physical exertion."],
      ["Hyperhidrosis (excessive sweating)", "Increased sweating, especially in stressful situations.", "Those affected notice sudden, excessive sweating."],
      ["Mydriasis (dilated pupils)", "Enlarged pupils, often with a fixed stare.", "Can accompany hallucinations or states of agitation."],
      ["Bladder atony (weak bladder)", "Inability to empty the bladder completely.", "Patients feel incomplete urination or urinary retention."],
      ["Spasms in the larynx area", "Suddenly occurring narrowing of the airways.", "Feeling of choking or of a ›lump in the throat‹."]
    ],
    fazit: `The Type 2 patient shows a deep connection between disinhibited behavior and psychological instability, where emotional conflicts can strongly influence the physical complaints. The symptoms often show in extreme nervousness, irritable behavior and weak boundaries between reality and fantasy.`
  },
  {
    n: 3, mittel: "Tarentula hispanica", farbe: "#4fb6c8", leidenschaft: "Vanity", mindmap: "mindmap-tarentula",
    titel: "Focus on vanity and impulsivity",
    psyche: [
      `The Type 3 patient is marked by a deeply rooted passion of <strong>vanity</strong>, which shows in an eccentric, manipulative and overly theatrical personality. Vanity is closely tied to a strong need to be admired and noticed. This need drives tireless energy in the pursuit of attention, whether through provocative behavior, dramatic self-presentation or the pursuit of perfection in outward appearance. They are masters at winning people over with charm or deception, and often go beyond their own limits.`,
      `Type 3 patients have high <strong>emotional lability</strong> combined with pronounced <strong>impulsivity</strong>. They are rarely able to bear rest or silence; their movements and their mind are constantly in action. This reflects an inner restlessness that often leads to impulsive decisions, an unsteady lifestyle and a tendency to exaggerate. Emotions swing quickly between overflowing joy, sudden anger and deep despair.`,
      `On the dark side, Type 3 patients show a <strong>wounded and vengeful attitude</strong>, especially when they feel overlooked or unappreciated. Manipulation and drama escalate when they feel threatened or fail to reach their goals. At the same time their energy and passion give them a certain magnetic presence that often puts them at the center despite their difficult personality.`
    ],
    psych: [
      ["Impulsivity", "Uncontrolled, spontaneous actions without regard for consequences."],
      ["Emotional lability", "Rapid change between joy, anger and sadness."],
      ["Manic states", "Excessive energy, exaggerated optimism and racing thoughts."],
      ["Theatricality", "Dramatizing situations to get attention."],
      ["Manipulative tendencies", "Use of charm, deception or guilt to reach goals."],
      ["Competitiveness", "Strong need to appear superior in comparison with others and to outdo rivals."],
      ["Vindictiveness", "Pronounced urge to retaliate for perceived injustice."],
      ["Restlessness", "Inability to bear stillness or inactivity."],
      ["Hysterical episodes", "Emotional outbursts, often with theatrical features."],
      ["Anxiety disorders", "Strong inner restlessness accompanied by irrational fears."]
    ],
    koerper: [
      ["Chorea (dance disease)", "Uncontrolled, jerky movements of the limbs.", "Patients show sudden, dancing movements they cannot control."],
      ["Tremor (trembling)", "Fine, quick movements of the hands or other body parts.", "Trembling is intensified by inner restlessness or tension."],
      ["Hyperkinesia (excessive motor activity)", "Compulsive urge to keep moving.", "Those affected cannot sit still and are constantly in motion."],
      ["Tachycardia (racing heart)", "Excessive heart rate, often stress-related.", "Patients feel palpitations, especially in exciting moments."],
      ["Hyperhidrosis (excessive sweating)", "Increased sweating, especially under tension.", "Sweat appears suddenly and heavily, above all under emotional stress."],
      ["Convulsions (seizures)", "Muscle twitching or involuntary movements.", "Symptoms range from mild twitches to intense cramps."],
      ["Neuralgia (nerve pain)", "Sudden, sharp pain along a nerve path.", "Patients complain of pain, often triggered by emotional tension."],
      ["Hyperesthesia (oversensitive nerve reactions)", "Heightened sensitivity to touch, light or sounds.", "Patients experience normal stimuli as painful or unpleasant."],
      ["Spasms (muscle cramps)", "Sudden contractions of the muscles.", "Cramps mostly occur with strong emotional excitement."],
      ["Insomnia (sleeplessness)", "Difficulty settling down or falling asleep.", "Patients often cannot sleep because of inner restlessness."]
    ],
    fazit: `The Tarentula hispanica type stands for a fascinating mix of inexhaustible energy, theatrical drive and manipulative skill. Its psychological dynamic reflects the passion of vanity, combined with a deep fear of insignificance. The physical symptoms often correlate with the emotional overactivity, which illustrates the unity of mind and body in this constitutional type.`
  },
  {
    n: 4, mittel: "Ignatia amara", farbe: "#5fb43a", leidenschaft: "Envy", mindmap: "mindmap-ignatia",
    titel: "Focus on envy",
    psyche: [
      `The psyche of the Type 4 patient is marked by intense emotionality that shows in strong inner conflicts and contradictory behavior. A central theme is the passion of <strong>envy</strong>, which however often expresses itself subtly and covertly. Envy springs from the deeply felt sense of lack: a longing for ideal states that others supposedly have reached. Type 4 patients tend to compare themselves with others and to see themselves at a disadvantage. This leads to an inner pain that is not expressed openly but compensated in the form of emotional tension, self-reproach or apparent indifference.`,
      `Envy often shows in an idealized view of other people's lives, paired with strict self-criticism. It does not stay destructively directed outward but turns inward, leading to a feeling of inadequacy and deep emotional pain. Type 4 patients strive for perfection, harmony and an ideal that remains unreachable in reality.`,
      `The tension between deeply felt longing and the impossibility of fulfilling it creates an emotional roller coaster of hope, disappointment and inner resistance. Envy remains an undercurrent that drives them to achieve more and at the same time limits the ability to feel satisfied.`
    ],
    psych: [
      ["Emotional lability", "Sudden mood swings, often triggered by minor disappointments or criticism."],
      ["Self-criticism and feelings of inadequacy", "Excessive questioning of one's own actions and abilities."],
      ["Perfectionism", "High standards for oneself, paired with constant dissatisfaction."],
      ["Grief and melancholy", "Frequent brooding over losses and unfulfilled expectations, often with a feeling of loneliness."],
      ["Paradoxical reactions", "Comfort or support is first accepted but later rejected."],
      ["Tendency toward psychosomatic complaints", "Emotional strain shows physically (e.g. globus sensation)."],
      ["Inner tension", "Feeling of unrest and restlessness despite outward composure."],
      ["Comparative thinking", "Constant inner comparison with others, often resulting in a sense of inferiority."]
    ],
    koerper: [
      ["Globus sensation (feeling of a lump in the throat)", "Tightness in the throat without an organic cause, often triggered by emotional strain.", "The patient feels constant pressure or a ›lump‹, especially in phases of emotional tension."],
      ["Nervous hiccups (singultus)", "Sudden onset, usually brief, as an expression of emotional reaction.", "Hiccups start abruptly, intensify in stressful situations and often stop on their own."],
      ["Muscle spasms and cramps", "Sudden, painful contractions, especially under tension or stress.", "Cramps often occur in the neck or abdominal muscles, often after inner agitation or anger."],
      ["Intermittent headaches", "Recurring tension headaches, mostly with mental overload.", "Dull, pressing pain, typically on both sides, intensifying over the course of the day."],
      ["Nervous breathing difficulties (dyspnea)", "Feeling of shortness of breath without a physical cause, often in stressful situations.", "The patient has to breathe deeply, as if ›too little air‹ were available, especially in conflict situations."],
      ["Increased sighing or deep breathing", "Expression of inner pressure or frustration.", "Frequent, conscious or unconscious sighing, often with drooping shoulders and tiredness."],
      ["Palpitations", "Irregular or accelerated heartbeat during emotional excitement.", "Heartbeat is felt as ›stumbling‹ or ›racing‹, especially with inner agitation or anger."],
      ["Digestive disorders (dyspepsia)", "Fullness, bloating or abdominal pain, mostly after emotional events.", "Abdominal pain often occurs after stressful situations, frequently together with loss of appetite."],
      ["Sleep disorders (insomnia)", "Difficulty falling or staying asleep, often because of brooding.", "The patient lies awake for a long time, thoughts circling, sleep is shallow and not restful."],
      ["Neuralgic pain", "Pulling or stabbing pain without an organic basis, often in the head or neck area.", "Pain comes suddenly, sometimes moves, intensifies with emotional strain."],
      ["Dizziness (vertigo)", "Feeling of lightheadedness, especially in stressful or emotionally taxing situations.", "Dizziness shows as unsteadiness when walking or ›swaying‹ without a physical cause."],
      ["Irritable bladder (pollakiuria)", "Frequent urge to urinate under nervous tension.", "The urge often appears suddenly, even when the bladder is barely full, mostly in stressful phases."]
    ],
    fazit: `The Type 4 patient shows a deep connection between intense emotionality and psychological instability, where unresolved inner conflicts can strongly influence the physical complaints. The symptoms often show in melancholic mood lability, tendencies to withdraw and permeable boundaries between inner experience and outer reality.`
  },
  {
    n: 5, mittel: "Stramonium", farbe: "#336aeb", leidenschaft: "Avarice", mindmap: "mindmap-stramonium",
    titel: "Avarice and fear at the center",
    psyche: [
      `The Stramonium patient is marked by a deep inner fear that runs through the whole psychological structure. Their passion of <strong>avarice and greed</strong> reflects a fundamental insecurity that expresses itself in compulsive clinging to people, things and power. For this type, safety comes first, and it tries to avoid any loss. Avarice can go beyond material possessions and include emotional reserve or refusing to share attention, knowledge or love.`,
      `The psyche is also marked by a dual dynamic: on one side an intense longing for shelter and protection, on the other an immense fear of threat and abandonment. This leads to ambivalent behavior: they cling to others but can at the same time appear aggressive or controlling to cover their fear. They often develop a pronounced fixation on order and control to compensate for the chaos inside.`,
      `The fear often shows in extreme forms such as <strong>fear of the dark</strong>, <strong>fear of being alone</strong>, <strong>of animals</strong> or <strong>of death</strong>. Imagination is vivid and tends toward nightmares or hallucinations, often marked by violent or cruel images. These patients can also experience sudden outbursts of aggression or delusional states that are directly connected to their deep inner insecurity.`
    ],
    psych: [
      ["Anxiety states", "Panic attacks, fear of darkness, being alone or supernatural beings. Sudden, overwhelming feelings of fear, often with trembling and palpitations."],
      ["Hallucinations", "Visual or auditory perceptions of things that do not exist. Those affected report frightening images or voices."],
      ["Nightmares", "Frequent, frightening dreams with violent or grotesque content. Patients wake up drenched in sweat and in panic, often unable to tell dream from reality."],
      ["Aggressiveness", "Sudden, uncontrollable outbursts of rage. Rage is often a defensive reaction against perceived threats."],
      ["Clinging behavior", "Excessive dependence on attachment figures. Patients have a strong fear of being abandoned."],
      ["Paranoid thoughts", "Distrust of others, feeling of persecution. Those affected believe that others want to harm them."],
      ["Compulsive control behavior", "Need to have everything under control. Patients try to gain security through strict order and control."],
      ["Dissociative states", "Feeling of estrangement from oneself or the environment. Patients feel as if in a dream or ›beside themselves‹."],
      ["Emotional lability", "Quick change between fear, aggression and sadness. Mood swings are often abrupt and unpredictable."],
      ["Hypersensitivity", "Oversensitivity to stimuli such as noise, light or touch. Normal environmental stimuli are experienced as unbearable."]
    ],
    koerper: [
      ["Myoclonus (muscle twitching)", "Uncontrolled, sudden movements of individual muscles.", "Patients report spontaneous twitches that often occur at rest."],
      ["Tremor (trembling)", "Uncontrolled trembling of the limbs or the whole body.", "Especially pronounced with fear or agitation."],
      ["Tics (repeated muscle contractions)", "Sudden, repeated movements or sounds.", "Patients show involuntary movements, mostly in stressful situations."],
      ["Spasms (cramps)", "Sudden, painful muscle cramping.", "Cramps often occur together with inner restlessness."],
      ["Dysphagia (difficulty swallowing)", "Difficulty swallowing.", "Patients complain of a lump in the throat, often stress-related."],
      ["Hyperhidrosis (excessive sweating)", "Increased sweating, especially in anxiety states.", "Sweat appears suddenly and massively, often together with panic attacks."],
      ["Tachycardia (racing heart)", "Accelerated heartbeat, often without a recognizable cause.", "Patients feel unpleasant palpitations, especially with fear."],
      ["Dyspnea (shortness of breath)", "Feeling of breathlessness without an organic cause.", "Patients report sudden air hunger, mostly in panic."],
      ["Dysmenorrhea (painful menstruation)", "Intense pain during the period.", "Complaints often go along with inner restlessness and tension."],
      ["Migraine", "Recurring, severe headaches, often with sensitivity to light.", "Pain is throbbing and considerably affects daily life."]
    ],
    fazit: `The Stramonium type is an example of the close link between psychological and physical symptoms. The passion of avarice reflects its deep-seated fear of loss and insecurity, which comes to expression both in its behavior and in its physical complaints. The tendency to extremes, whether as anxiety states or aggressive outbursts, underlines the challenge this constitutional type presents.`
  },
  {
    n: 6, mittel: "Opium", farbe: "#ac7440", leidenschaft: "Fear", mindmap: "mindmap-opium",
    titel: "Fear, doubt and repression",
    psyche: [
      `The psyche of the Opium patient is marked by a paradoxical tension: on one side intense fear and insecurity, on the other an apparently calm, almost trance-like state in which fears are repressed or ignored. These people have a strong tendency toward <strong>repression</strong> of unpleasant feelings or experiences. They can seem very calm and uninvolved although a storm of doubt, fear and insecurity often rages inside. Their way of dealing with reality is often marked by <strong>illusions</strong>, <strong>escapist behavior</strong> and a tendency to see the world through ›rose-colored glasses‹ to protect themselves from unpleasant truths.`,
      `The <strong>passion of fear</strong> shows especially in a deep dread of pain, change or confrontation with one's own inner life. The Opium patient often seems emotionless or distant, but behind it hides an intense fear that forces a rigid, waiting posture. This state is reinforced by the <strong>passion of doubt</strong>: doubt about one's own ability to cope with difficult situations often leads to standstill or passivity.`,
      `In extreme cases the Opium patient tends to withdraw into dream worlds or a state of <strong>emotional numbness</strong> to escape inner conflicts. A clear discrepancy can arise between outer appearance (calm, equanimity) and inner reality (fear, chaos). This repression can also show in a tendency toward <strong>sugarcoating</strong> or <strong>fantasized stories</strong>, in which reality is deliberately ignored or distorted.`
    ],
    psych: [
      ["Anxiety disorders", "Deep, subliminal fear of confrontation or loss. The fear is often repressed but shows in psychosomatic complaints."],
      ["Doubt and indecision", "Difficulty making decisions. Patients brood for a long time, which often leads to lethargy."],
      ["Dissociation (feeling of absence)", "Splitting off of unpleasant feelings. Patients seem emotionally numb or ›not quite there‹."],
      ["Depersonalization", "Feeling of estrangement from oneself. Patients describe feeling as if in a dream."],
      ["Illusory transfiguration", "Tendency to gloss over reality. They tell untrue stories or avoid confrontation."],
      ["Emotional blunting", "Reduced response to emotional stimuli. Patients show little emotional involvement, even with difficult topics."],
      ["Escape into fantasy worlds", "Tendency toward daydreams and unrealistic ideas. Fantasy is used to avoid unpleasant realities."],
      ["Panic attacks", "Sudden, intense anxiety states. Accompanied by racing heart, trembling and shortness of breath, often without an obvious trigger."],
      ["Hypersensitivity to criticism", "Exaggerated sensitivity to negative feedback. Patients react with withdrawal or self-reproach."],
      ["Chronic fatigue", "Feeling of exhaustion without a physical cause. Patients feel powerless and sluggish, which points to psychological stress."]
    ],
    koerper: [
      ["Constipation", "Chronic difficulty with bowel movements.", "Often linked with sluggish organs and suppression of emotional conflicts."],
      ["Anhidrosis (reduced sweating)", "Reduction or absence of sweating.", "Patients appear dry on the outside, which often correlates with inner rigidity."],
      ["Hypotension (low blood pressure)", "Reduced blood pressure, often with lethargy.", "Tiredness, weakness and dizziness are typical accompanying signs."],
      ["Bradycardia (slow heartbeat)", "Noticeably slow pulse.", "Can correspond with the calm, stoic behavior."],
      ["Sleep disorders", "Difficulty falling or staying asleep, often nightmares.", "Sleep is often not restful, with restless tossing and turning."],
      ["Mydriasis (dilated pupils)", "Visibly large pupils, especially in panic situations.", "Can go along with stress or an emotional state of emergency."],
      ["Respiratory depression (reduced breathing)", "Slow, shallow breathing.", "Those affected hardly breathe noticeably, which reflects their inner rigidity."],
      ["Cyanosis (bluish discoloration of the skin)", "Temporary lack of oxygen.", "Observed under extreme stress or panic."],
      ["Spastic colic", "Abdominal cramps from muscle tension.", "Complaints intensify with inner restlessness or anxiety states."],
      ["Sensitivity to cold", "Excessive sensitivity to cold.", "Patients complain of constant shivering, even at normal room temperature."]
    ],
    fazit: `The Opium patient is an emblem of the tension between <strong>intense inner fear</strong> and <strong>outward passivity or calm</strong>. Its psychological and physical symptoms reflect these conflicts, with the repression of fear often culminating in psychosomatic complaints. A central feature is the ability to cover even severe emotional conflicts through emotional numbness, a behavior that is both a strength and a challenge.`
  },
  {
    n: 7, mittel: "Belladonna", farbe: "#e6b800", leidenschaft: "Gluttony", mindmap: "mindmap-belladonna",
    titel: "Immoderation, impulsivity and excess",
    psyche: [
      `The psyche of the Belladonna patient is marked by intense emotionality, impulsivity and a tendency toward <strong>gluttony</strong> in the figurative sense, not only regarding food but also stimuli, emotions and experiences. This immoderation shows in extreme passion and exuberance, but also in fits of rage that can appear suddenly and uncontrollably. The Belladonna type strives for intense, immediate experience and tends to cross its own and others' boundaries, which often earns it the label of <strong>immoderation</strong>.`,
      `A central passion is <strong>gluttony</strong>, understood as greed for life, for pleasure, for power or for attention. Belladonna patients cannot regulate this greed, which results in an <strong>inability to moderate</strong>. When their needs are not met at once, they react with <strong>violent emotional outbursts</strong> marked by anger, impatience and hysteria.`,
      `Their inner experience is marked by extreme swings: from moments of intense enthusiasm or euphoria they plunge into deep despair or anger. There is often an <strong>exaggerated sensitivity to stimuli</strong> such as light, sounds and touch, which quickly brings them into a state of <strong>being overwhelmed</strong>. This sensitivity also makes them feel crowded by the outside world, which can intensify anger and immoderation further.`,
      `In social relationships the Belladonna type often appears dominant, demanding and irritable. Impulsivity and lack of patience make it a challenge for those around. At the same time it can be charismatic and attractive as long as it is in tune with its needs. Its emotional outbursts, however, often put people off and create distance.`
    ],
    psych: [
      ["Irritability", "Strong emotional reactions to minor triggers. Patients react impulsively and often disproportionately."],
      ["Hysteria (emotional overreacting)", "Exaggerated reactions to stress. Episodes of dramatic or theatrical outbursts."],
      ["Uncontrollable fits of rage (impulse control disorder)", "Sudden outbursts of anger. Rage without recognizable control, often abrupt."],
      ["Hyperactivity (psychomotor restlessness)", "Excessive urge to move and driven state. Patients cannot sit still and are constantly in motion."],
      ["Fear of threat", "Paranoid traits and exaggerated perception of danger. Feeling of being persecuted or attacked."],
      ["Hypersensitivity (oversensitivity)", "Exaggerated reactions to light, sounds and touch. Patients avoid bright, loud or lively environments."],
      ["Euphoria and elation", "Short-lived emotional highs. Exuberant enthusiasm without lasting stability."],
      ["Aggression", "Tendency toward physical or verbal violence. Aggressive behavior toward oneself or others."],
      ["Rapid mood swings (emotional lability)", "Alternation between joy, anger and sadness. Mood swings without a recognizable reason."],
      ["Distrust (paranoid thoughts)", "Feeling of being betrayed or exploited by others. Can show as social withdrawal or aggressiveness."]
    ],
    koerper: [
      ["Fever with delirium", "High body temperature accompanied by confusion.", "Patients experience hallucinations and intense feelings of heat."],
      ["Photophobia (sensitivity to light)", "Oversensitivity to light.", "Patients avoid bright light because it causes pain or discomfort."],
      ["Hyperesthesia (oversensitivity of the senses)", "Heightened perception of stimuli.", "Sounds, touch and smells are perceived as unpleasantly intense."],
      ["Tachycardia (fast heartbeat)", "Increased heart rate.", "Often accompanied by restlessness or feelings of panic."],
      ["Flushing (reddening of face and skin)", "Intense reddening of the face and body.", "Occurs with fever, excitement or sensory overload."],
      ["Spastic pain (colic)", "Cramping abdominal pain.", "Frequent with stress or emotional strain."],
      ["Dry mouth (xerostomia)", "Reduced saliva production.", "Patients complain of difficulty swallowing or speaking."],
      ["Seizures (convulsions)", "Sudden, uncontrolled muscle movements.", "Occasionally accompanied by loss of consciousness."],
      ["Sweating (hyperhidrosis)", "Excessive sweat production.", "Especially under emotional stress or heat."],
      ["Tremor (trembling)", "Involuntary movements of the hands or other body parts.", "Often in connection with nervousness or irritability."]
    ],
    fazit: `The Belladonna patient is a prototype of the immoderate, overflowing character, swinging between <strong>intensity</strong> and <strong>sensory overload</strong>. Its psychological landscape is marked by impulsivity, emotional lability and extreme sensitivity to stimuli. Physical complaints are often an expression of its overshooting emotional reactions and its inability to regulate inner tension. Its passion of immoderation shows both in emotional behavior and in the physical symptoms.`
  },
  {
    n: 8, mittel: "Veratrum album", farbe: "#c1281e", leidenschaft: "Lust", mindmap: "mindmap-veratrum",
    titel: "Lust, greed and exaggerated ambition",
    psyche: [
      `The psyche of the Veratrum album patient is marked by an excessive <strong>greed for power, status and control</strong>. This greed springs from an inner emptiness and insecurity that is balanced by overcompensation. The Veratrum type tirelessly strives for <strong>influence and importance</strong>, often in a manipulative and opportunistic way. The passion of lust here is not limited to sexuality but means the appetite for more: exaggerated lust for material possessions, social prestige or also sexual dominance. It is about the tireless effort to upgrade an identity felt to be insufficient through outer success and recognition.`,
      `This patient type has a deep need to feel superior. <strong>Arrogance</strong>, <strong>self-overestimation</strong> and <strong>hubris</strong> often mark its appearance. It can be very ambitious, calculating and unscrupulous when it comes to reaching its goals. At the same time it shows an inner <strong>fragility</strong>: the constant fear of humiliation or failure drives it into a state of <strong>permanent struggle</strong> for confirmation.`,
      `Socially, Veratrum patients can seem charming and persuasive, especially when they can gain advantages from it. Their relationships, however, are often marked by manipulation, since they see others as a means to an end. Their behavior is determined by a <strong>deep narcissism</strong>, with self-esteem depending heavily on outer recognition.`
    ],
    psych: [
      ["Manic states (mania)", "Exaggerated activity, flight of ideas and restlessness. Patients are restless, overly talkative and show an unnaturally elevated mood."],
      ["Ambitious grandiose ideas (megalomania)", "Conviction of achieving something great or being extraordinary. Patients believe in their outstanding importance and do everything to prove it."],
      ["Arrogance (sense of superiority)", "Exaggerated self-perception. Patients behave condescendingly and expect admiration."],
      ["Deception (manipulative traits)", "Tendency to influence others to reach their own goals. People are exploited or controlled."],
      ["Despair at failure (depression after setbacks)", "Deep sadness after failure. Failure is felt as total personal downfall."],
      ["Insatiable craving (greed for power, possessions, recognition)", "Exaggerated longing for control and success. Patients show immoderation and avarice at the same time."],
      ["Hypocrisy (sanctimony)", "Pretense of false virtue. Patients hide their real motives behind a moral cloak."],
      ["Fear of humiliation", "Constant fear of being exposed. Avoidance behavior or aggressive counterattack when criticized."],
      ["Compulsiveness (perfectionism)", "Exaggerated urge to have everything under control. Patients plan and structure excessively."],
      ["Insensitivity (emotional coldness)", "Distance from one's own and others' emotions. Patients show little empathy, seem cold or calculating."]
    ],
    koerper: [
      ["Hypotension (low blood pressure)", "Unusually low blood pressure.", "Patients feel tired, weak and prone to dizziness."],
      ["Sensation of cold (hypothermia)", "Strong feeling of cold, especially in hands and feet.", "Patients complain of constant cold, even in warm rooms."],
      ["Cramping abdominal pain (colic)", "Intense pain that comes in waves.", "Often linked with diarrhea or constipation."],
      ["Vomiting", "Frequent and violent, not rarely accompanied by dehydration.", "Patients vomit when eating or spontaneously."],
      ["Diarrhea", "Severe, watery diarrhea.", "Often accompanied by weakness and loss of electrolytes."],
      ["Pallor", "Unnaturally pale skin.", "Patients look sickly colorless, which can indicate weakness."],
      ["Cramps (spasms)", "Muscle cramps in various parts of the body.", "Cramps in the abdomen and legs are typical."],
      ["Tremor (trembling)", "Fine, uncontrollable muscle movements.", "Especially pronounced with exhaustion or agitation."],
      ["Dry mouth (xerostomia)", "Feeling of dryness in the mouth.", "Patients complain of difficulty swallowing."],
      ["Weakness (asthenia)", "General physical weakness and lack of drive.", "Especially after physical or psychological strain."]
    ],
    fazit: `The Veratrum album patient stands emblematically for the overcompensation of a deep inner insecurity. Its psyche is dominated by <strong>greed, immoderation</strong> and an <strong>intense need for control</strong>. This is also reflected in the physical complaints, which range from extreme weakness to violent vegetative symptoms. Psychologically as well as physically, this remedy picture deals with extremes and exaggerated reaction to states of deficiency.`
  },
  {
    n: 9, mittel: "Cannabis indica", farbe: "#e8812c", leidenschaft: "Sloth", mindmap: "mindmap-cannabis",
    titel: "Sloth, self-forgetting and mental escape",
    psyche: [
      `The psyche of the Type 9 patient is marked by a tendency toward <strong>sloth and flight into inner worlds</strong> in order to escape reality. These people often lose themselves in spirals of thought, daydreams or intense fantasies that shield them from the outside world. The passion of <strong>self-forgetting</strong> shows in a lack of connection to the physical self or to reality. They seem scattered, distant or lethargic and avoid facing the demands and responsibilities of life.`,
      `Type 9 patients tend toward <strong>sensory overwhelm</strong>, experiencing environmental stimuli as excessively intense or even threatening. They often withdraw as a result and build an inner barrier. Their perception is often distorted, with a tendency toward paranoid thoughts, excessive fear or the feeling of losing control. Emotionally they can swing between <strong>euphoria and deep melancholy</strong>, often accompanied by a feeling of helplessness.`,
      `They struggle with a deep feeling of <strong>existential fear</strong> that pushes them into a passive stance. Their inner world is often richer and more intense than their outer reality, but this escape reinforces the tendency toward isolation and sloth. The weakness in facing reality leads to chronic dissatisfaction and a feeling of inner emptiness.`
    ],
    psych: [
      ["Derealization (feeling of estrangement)", "Feeling that the environment seems unreal or remote. Patients describe their surroundings as ›dreamlike‹ or strange."],
      ["Depersonalization (self-estrangement)", "Loss of the feeling of being in one's own body. Patients feel cut off from their thoughts and feelings."],
      ["Anxiety states (panic attacks)", "Episodes of sudden fear with intense restlessness. Often accompanied by a sense of impending doom."],
      ["Paranoid ideas (persecutory delusions)", "Distrust of other people or situations. Patients feel observed or followed."],
      ["Racing thoughts (flight of ideas)", "Uncontrollable, associative trains of thought. Concentrating on a task becomes impossible."],
      ["Feeling of loss of control", "Fear of losing one's mind or behaving irrationally."],
      ["Lethargy (apathy)", "Lack of energy and motivation. Patients withdraw and avoid social interaction."],
      ["Euphoria (exaggerated elation)", "Temporary state of extreme joy and creativity. Patients can seem hyperactive and easily distracted."],
      ["Forgetfulness (amnesia)", "Frequent memory gaps or inattention. Patients forget everyday things or actions."],
      ["Hypersensitivity", "Oversensitivity to light, noise and touch. Patients find normal stimuli unpleasant or painful."]
    ],
    koerper: [
      ["Headache (cephalalgia)", "Tension headaches or dull pressure in the head.", "Patients complain of diffuse pain, especially under stress."],
      ["Dizziness (vertigo)", "Feeling of swaying or instability.", "Often accompanied by fear and a feeling of disorientation."],
      ["Dry mouth (xerostomia)", "Feeling of dryness in the mouth.", "Patients have difficulty swallowing and speaking."],
      ["Palpitations", "Perception of a fast or irregular heartbeat.", "Especially pronounced with anxiety states or after physical exertion."],
      ["Muscle weakness (myasthenia)", "Feeling of powerlessness in arms and legs.", "Patients report difficulty with physical activity."],
      ["Slowed digestion (dyspepsia)", "Fullness and sluggishness of the stomach.", "Patients complain of bloating and stomach complaints."],
      ["Sleep disorders (insomnia)", "Problems falling or staying asleep.", "Often accompanied by nighttime brooding or anxiety states."],
      ["Oversensitivity of the senses (hyperesthesia)", "Heightened perception of stimuli.", "Normal ambient sounds or touch are felt as unpleasant."],
      ["Sensation of cold (hypothermia)", "Feeling of cold, even at normal ambient temperature.", "Patients seek warmth and complain of cold extremities."],
      ["Seizures (epileptic symptoms)", "Sudden muscle twitching or loss of consciousness.", "Rare, but possible with strong sensory overload."]
    ],
    fazit: `The Type 9 patient lives in an inner tension between an intense fantasy world and the inability to deal with reality. Its psyche is marked by <strong>sloth, self-forgetting</strong> and flight from responsibility. These mental patterns are reflected in psychosomatic complaints that include both sensory oversensitivity and vegetative imbalances.`
  }
];

const AB_ESSENZ = [
  ["Holy Perfection", "Perfection and correctness instead of love", "Anger"],
  ["Holy Will, Holy Freedom", "Helping and giving instead of love", "Pride"],
  ["Holy Law, Holy Hope", "Success and achievement instead of love", "Vanity"],
  ["Holy Origin", "Individuality and creativity instead of love", "Envy"],
  ["Holy Omniscience, Holy Transparency", "Knowledge and observation instead of love", "Avarice"],
  ["Holy Strength, Holy Faith", "Safety and loyalty instead of love", "Fear"],
  ["Holy Work, Holy Plan", "Fun and joy instead of love", "Gluttony"],
  ["Holy Truth", "Power and control instead of love", "Lust"],
  ["Holy Love", "Harmony and self-forgetting instead of love", "Sloth"]
];

export function arzneimittelbilderPage() {
  const nav = AB_TYPEN.map(t => `<a class="ab-chip" href="javascript:void(0)" onclick="document.getElementById('ab-typ-${t.n}').scrollIntoView({behavior:'smooth'})" style="--tc:${t.farbe};"><span class="ab-chip__n">${t.n}</span><span class="ab-chip__m">${t.mittel}</span></a>`).join("");
  const essenz = AB_ESSENZ.map((e, i) => `<tr><th scope="row" style="border-left:5px solid ${AB_TYPEN[i].farbe};">Type ${i + 1}</th><td>${e[0]}</td><td>${e[1]}</td><td>${e[2]}</td></tr>`).join("");
  const sektionen = AB_TYPEN.map(t => `
    <section class="ab-typ" id="ab-typ-${t.n}" style="--tc:${t.farbe};">
      <div class="ab-typ__head"><span class="ab-typ__num">${t.n}</span><div><p class="ab-typ__mittel">Homeopathic remedy: ${t.mittel}</p><h2 class="ab-typ__title">The Type ${t.n} patient in homeopathic naturopathic practice</h2><p class="ab-typ__sub">The psyche of the Type ${t.n} patient: ${t.titel}</p></div></div>
      ${t.psyche.map(p => `<p class="ab-p">${p}</p>`).join("")}
      <details class="ab-det"><summary>Typical psychological complaints <span>(${t.psych.length})</span></summary>
        <ol class="ab-list">${t.psych.map(x => `<li><strong>${x[0]}:</strong> ${x[1]}</li>`).join("")}</ol>
      </details>
      <details class="ab-det"><summary>Typical physical complaints <span>(${t.koerper.length})</span></summary>
        <ol class="ab-list">${t.koerper.map(x => `<li><strong>${x[0]}:</strong> ${x[1]}<em>Presentation: ${x[2]}</em></li>`).join("")}</ol>
      </details>
      <p class="ab-fazit">${t.fazit}</p>
      <p class="ab-links"><a href="javascript:void(0)" data-route="${t.mindmap}">Mind map of the single rubrics: ${t.mittel} →</a><a class="ab-top" href="javascript:void(0)" onclick="document.getElementById('ab-top').scrollIntoView({behavior:'smooth'})">↑ Back to type selection</a></p>
    </section>`).join("");
  return shell(`
    <div class="page-container">
      ${pageHeader("arzneimittelbilder-9-typen")}
      <div class="page-content tug-page ab-page">
        <p class="eyebrow">Knowledge · Enneagram meets Homeopathy</p>
        <h1 class="section-title">Remedy Pictures and Descriptions of the Nine Types</h1>
        <p class="lead-small">For each of the nine Enneagram types this page shows the matching remedy picture: the type's psyche in naturopathic practice, the typical psychological and physical complaints from the description of the remedy picture, and a summary.</p>
        <h2 class="vb-section tug-h2">What is Enneagram homeopathy?</h2>
        <p class="ab-p">Enneagram homeopathy connects two levels: the <strong>personality model of the Enneagram</strong> and the <strong>individual choice of remedy in homeopathy</strong>.</p>
        <p class="ab-p">The idea behind it: every Enneagram type has certain emotional patterns, stress reactions and deeper basic fears. These inner dynamics shape not only the psyche but often also physical complaints.</p>
        <p class="ab-p">Enneagram homeopathy therefore looks not only at symptoms but also at the patient's ›inner style‹. The aim is to find a homeopathic remedy that mirrors both the physical and the emotional themes of this type.</p>
        <h2 class="vb-section tug-h2">The path of healing: essence, passion and instinct</h2>
        <p class="ab-p">Every type carries an essence that tradition describes as a ›Holy Idea‹. Already in early childhood contact with this essence seems to be lost, and the growing ego seeks happiness outside. From the search for love each type develops its own ego motivation, and the nine passions keep this search going. The three instinctual variants (self-preservation, social, one-to-one) give the passions the energy they need. In this picture the Enneagram remedy is understood as something aimed at balancing instincts and passions.</p>
        <div class="ab-table-wrap"><table class="ab-table"><thead><tr><th></th><th>Holy Idea (essence)</th><th>Ego motivation</th><th>Passion</th></tr></thead><tbody>${essenz}</tbody></table></div>
        <div class="ab-nav" id="ab-top" role="navigation" aria-label="Choose a type">${nav}</div>
        ${sektionen}
        <div class="ab-note"><strong>Note:</strong> The descriptions are remedy pictures from the homeopathic literature, interpreted within the Enneagram. They are not diagnoses and do not replace medical examination or treatment. Physical complaints always belong with a doctor or a licensed practitioner.</div>
        ${bookTip("wer-du-wirklich-bist-band-1", "The nine types in their depth – defense patterns, passions, and the path to essence.", "Wer du wirklich bist – Band 1")}
        ${bookTip("leidenschaft-und-heilung", "The 9 passions behind these avoided emotions &ndash; with paths of healing from homeopathic practice.", "Leidenschaft und Heilung")}
        ${bookTip("hinter-der-leidenschaft", "Behind passion, the deeper wounds – the path to transformation of the Enneagram type.", "Hinter der Leidenschaft – die neun Wunden")}
        ${bookTip("heilung-als-erinnerung", "Healing as remembrance of what we fundamentally are – beyond symptom and diagnosis.", "Heilung als Erinnerung")}
        ${bookTip("7-wege-zu-dir-selbst-lebenskunst-fuer-den-alltag", "Seven practical steps toward getting closer to yourself – no detours, no sugarcoating, direct and clear.", "7 Wege zu Dir selbst")}
        ${bookTip("nichts-und-alles", "A quiet book on looking inward &ndash; awareness, space, and inner freedom.", "Nichts und Alles")}
        ${bookTip("der-raum-hinter-allem", "The space that remains when identification recedes – a meditative work on consciousness and freedom.", "Der Raum hinter allem")}
        ${bookTip("sei-still-und-wisse-ich-bin-gott", "A spiritual book on the deepest stillness within us and the experience of transcendence beyond all concepts.", "Sei still und wisse – ich bin Gott!")}
        ${bookTip("meta-intelligenz", "Meta-Intelligence – the intelligence that unites all other intelligences and unlocks the full potential of consciousness.", "Meta-Intelligence")}
        ${bookTip("meta-intelligenz-das-hoerbuch", "Meta-Intelligence as an audiobook – ideal for on the go or for meditative listening.", "Meta-Intelligenz (Hörbuch)")}
        ${relatedLinks([
          {route:"enneagramm-homoeopathie", label:"Enneagram meets Homeopathy"},
          {route:"mindmaps-single-rubriken", label:"Mind maps of the single rubrics (homeopathy)"},
          {route:"wahnideen-nicht-reale-vorstellungen", label:"Unreal Ideas: Delusions in the Enneagram and in Homeopathy"},
          {route:"signaturenlehre-enneagramm-heilmittel", label:"The 9 Enneagram remedies & the doctrine of signatures"},
          {route:"warum-nur-9-heilmittel", label:"Why only 9 Enneagram remedies and not 27?"}
        ])}
      </div>
    </div>`);
}
