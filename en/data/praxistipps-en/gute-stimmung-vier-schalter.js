const { shell, pageHeader, relatedLinks, bookTip } = window.__kh;

export function guteStimmungVierSchalterPage() {
  return shell(`
    ${pageHeader("praxistipps-heilpraktiker")}
    <section class="narrow">
      <button class="ghost-link" data-route="praxistipps-heilpraktiker" style="margin-bottom:1rem;">← Back to practice tips</button>
      <p class="eyebrow">Tools · Practice tips from the naturopath</p>
      <h1 class="h1--tip">Four Small Switches for Your Mood: Finish, Acknowledge, Laugh, Connect</h1>
      <p class="lead-small">Good mood does not depend on circumstances alone. It can be encouraged in everyday life with small, simple exercises, each taking a few minutes. This tip shows four of them and how to fit them into the day.</p>

      <div class="vb-section" style="max-width:100%;margin-top:1.4rem;background:rgba(180,120,0,0.07);border-left:3px solid var(--gold);padding:1rem 1.2rem;border-radius:8px;">
        <h2 style="font-size:1.15rem;font-weight:700;margin:0 0 .8rem;color:var(--ink);">Important note</h2>
        <p class="vb-intro" style="margin-bottom:0;">This tip describes self-help exercises for everyday life. It does not replace medical, psychotherapeutic or naturopathic treatment. Persistent low mood, loss of joy or lack of drive lasting more than two weeks belongs in professional hands; with thoughts of self-harm, seek medical help or emergency services immediately.</p>
      </div>

      <div class="vb-section" style="max-width:100%;margin-top:1.4rem;">
        <h2 style="font-size:1.15rem;font-weight:700;margin:0 0 .8rem;color:var(--ink);">1. The idea behind it</h2>
        <p class="vb-intro">Anyone who feels empty or flat often tries to change the situation from outside: a new goal, buying something, scrolling through posts once more. That usually helps for a short time. The exercises here start elsewhere, with what every person can do for themselves.</p>
        <p class="vb-intro" style="margin-top:.8rem;">In simplified terms, four messenger substances of the brain are involved in well-being: dopamine (drive, progress), serotonin (inner calm, self-worth), endorphins (pain relief, elation) and oxytocin (closeness, trust). Each of the four exercises addresses one of these directions.</p>
        <p class="vb-intro" style="margin-bottom:0;font-size:.9rem;color:var(--muted);">This is a heavily simplified picture. The processes in the brain are far more intricate, and the effect of the exercises differs from person to person. They are an invitation to try, not a treatment plan.</p>
      </div>

      <div class="vb-section" style="max-width:100%;margin-top:1.4rem;">
        <h2 style="font-size:1.15rem;font-weight:700;margin:0 0 .8rem;color:var(--ink);">2. The four switches at a glance</h2>
        <div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(200px,1fr));gap:.8rem;">
          <div style="border:1px solid var(--line);border-radius:10px;padding:.9rem 1rem;"><strong>Finish</strong><br><span style="font-size:.82rem;color:var(--copper);">Drive and progress</span><p style="margin:.4rem 0 0;font-size:.9rem;color:var(--muted);line-height:1.55;">Complete something small, under two minutes.</p></div>
          <div style="border:1px solid var(--line);border-radius:10px;padding:.9rem 1rem;"><strong>Acknowledge</strong><br><span style="font-size:.82rem;color:var(--copper);">Self-worth and calm</span><p style="margin:.4rem 0 0;font-size:.9rem;color:var(--muted);line-height:1.55;">Spend sixty seconds on something you are quietly proud of.</p></div>
          <div style="border:1px solid var(--line);border-radius:10px;padding:.9rem 1rem;"><strong>Laugh</strong><br><span style="font-size:.82rem;color:var(--copper);">Lightness</span><p style="margin:.4rem 0 0;font-size:.9rem;color:var(--muted);line-height:1.55;">Give play and real laughter room again.</p></div>
          <div style="border:1px solid var(--line);border-radius:10px;padding:.9rem 1rem;"><strong>Connect</strong><br><span style="font-size:.82rem;color:var(--copper);">Closeness and trust</span><p style="margin:.4rem 0 0;font-size:.9rem;color:var(--muted);line-height:1.55;">Send one person a personal message.</p></div>
        </div>
      </div>

      <div class="vb-section" style="max-width:100%;margin-top:1.4rem;">
        <h2 style="font-size:1.15rem;font-weight:700;margin:0 0 .8rem;color:var(--ink);">3. Switch one: Finish</h2>
        <p class="vb-intro">The brain responds to progress more than to size. Finishing one small thing that has been open for a while often feels better than doing nothing at all. That is why small things work too.</p>
        <ul class="sp-list" style="margin-top:.8rem;">
          <li>Choose one thing that has been lying around for days and takes under two minutes: answer a message, close a tab, put an object away.</li>
          <li>Do it at once and then notice briefly what changes.</li>
          <li>If needed, add two more small things. Three small completions in a row often carry noticeably.</li>
        </ul>
      </div>

      <div class="vb-section" style="max-width:100%;margin-top:1.4rem;">
        <h2 style="font-size:1.15rem;font-weight:700;margin:0 0 .8rem;color:var(--ink);">4. Switch two: Acknowledge</h2>
        <p class="vb-intro">Recognition does not have to come from outside. Recalling a moment in which one acted as one wishes to be can strengthen inner calm and self-respect. Studies on self-affirmation point in this direction.</p>
        <ul class="sp-list" style="margin-top:.8rem;">
          <li>Sit still for sixty seconds.</li>
          <li>Think of a moment from the past week in which patience, keeping one's word or helpfulness showed, without anyone seeing it.</li>
          <li>Hold the memory for a full minute and let it sink in.</li>
        </ul>
        <p class="vb-intro" style="margin-top:.8rem;margin-bottom:0;">A good time is the morning, in place of the first minutes at a screen.</p>
      </div>

      <div class="vb-section" style="max-width:100%;margin-top:1.4rem;">
        <h2 style="font-size:1.15rem;font-weight:700;margin:0 0 .8rem;color:var(--ink);">5. Switch three: Laugh</h2>
        <p class="vb-intro">Real laughter from the belly triggers elation in many people and can make pain easier to bear. Adults often push it out of daily life because everything has become serious and purposeful.</p>
        <ul class="sp-list" style="margin-top:.8rem;">
          <li>Ask: when was the last real laugh? If it was days ago, create opportunities on purpose.</li>
          <li>Laugh together with someone who does you good: a phone call, a film together, an old story.</li>
          <li>Give play a fixed place, not only after all duties are done.</li>
        </ul>
      </div>

      <div class="vb-section" style="max-width:100%;margin-top:1.4rem;">
        <h2 style="font-size:1.15rem;font-weight:700;margin:0 0 .8rem;color:var(--ink);">6. Switch four: Connect</h2>
        <p class="vb-intro">Closeness arises through touch, eye contact, vulnerability and giving. Hours of scrolling feel like connection but do not replace it. Anyone who spends much time with posts from people they never get in touch with may feel lonelier for it.</p>
        <ul class="sp-list" style="margin-top:.8rem;">
          <li>Send one person a personal message, not a meme and not a reaction: something that shows they were thought of.</li>
          <li>Keep it short and real; it does not need to be long.</li>
          <li>The giving itself counts, not the reply. If a reply comes, a conversation often follows.</li>
        </ul>
      </div>

      <div class="vb-section" style="max-width:100%;margin-top:1.4rem;">
        <h2 style="font-size:1.15rem;font-weight:700;margin:0 0 .8rem;color:var(--ink);">7. A small daily plan</h2>
        <ol class="sp-list" style="margin-top:.4rem;">
          <li><strong>Morning:</strong> one minute of acknowledging, then finish one small thing.</li>
          <li><strong>Midday:</strong> send one personal message.</li>
          <li><strong>Evening:</strong> do something that makes you laugh.</li>
        </ol>
        <p class="vb-intro" style="margin-top:.8rem;margin-bottom:0;">Together that is about ten minutes. Try it for one to two weeks and observe how mood, sleep and drive change. If something does not work at all, do not force the pattern; choose another switch.</p>
      </div>

      <div class="vb-section" style="max-width:100%;margin-top:1.4rem;">
        <h2 style="font-size:1.15rem;font-weight:700;margin:0 0 .8rem;color:var(--ink);">8. The Enneagram in the background</h2>
        <p class="vb-intro" style="margin-bottom:0;">Which switch comes easily and which does not often relates to one's own pattern: those who keep optimising find finishing and acknowledging hard. Those who are mainly there for others forget laughter. Those who withdraw shy away from the personal message. The very switch that costs the most effort often shows where the pattern acts most strongly.</p>
      </div>

      <div style="margin-top:2rem;">
        <details style="border:1px solid var(--line);border-radius:12px;overflow:hidden;">
          <summary style="display:flex;align-items:center;gap:0.75rem;padding:1rem 1.2rem;cursor:pointer;background:var(--paper);list-style:none;user-select:none;font-weight:700;font-size:0.95rem;color:var(--ink);">
            <span style="font-size:1.2rem;color:var(--copper);">&#9672;</span>
            <span style="flex:1;">Further reading by Detlef Rathmer</span>
            <span style="font-size:0.75rem;color:var(--muted);">&#9660;</span>
          </summary>
          <div style="padding:1rem 1.2rem 1.2rem;">
            ${bookTip("7-wege-zu-dir-selbst-lebenskunst-fuer-den-alltag", "Seven practical ways to more calm and clarity in everyday life.", "7 Wege zu dir selbst")}
          </div>
        </details>
      </div>

      ${relatedLinks([
        {route:"praxistipps-heilpraktiker", label:"All practice tips"},
        {route:"praxistipps-heilpraktiker/ausatmen-beruhigung", label:"The Calm Switch (breathing exercise)"},
      ])}
    </section>
  `);
}
