/* Titelbild (Vorspann). Erscheint bei jedem neuen Oeffnen; Tipp irgendwo = weiter; Tipp aufs Logo zeigt es wieder. */
(function(){
if(window.__tbild)return;window.__tbild=1;
const BASIS=new URL('.',document.currentScript.src);
const C=['#8a8a8a','#9a45cc','#1fa688','#3cbf1f','#2f6be6','#a8662e','#d4a800','#c4160e','#cc6e00'];
const KNOPF={de:'Beginnen',en:'Begin',es:'Empezar',fr:'Commencer',it:'Inizia',pt:'Começar',ja:'はじめる',zh:'开始'};
const sprache=()=>(document.documentElement.lang||'de').slice(0,2);
const css=`#tbild{position:fixed;inset:0;z-index:2147483000;display:flex;flex-direction:column;align-items:center;justify-content:center;text-align:center;padding:calc(12px + env(safe-area-inset-top,0px)) 16px calc(16px + env(safe-area-inset-bottom,0px));box-sizing:border-box;color:#f1ede4;cursor:pointer;overflow:hidden;transition:opacity .45s,color 2.8s;isolation:isolate;font-family:system-ui,sans-serif}
#tbild.fort{opacity:0;pointer-events:none}
#tbild .art{flex:none;width:92vw;width:min(92vw,380px,max(200px,calc(100svh - 300px)));aspect-ratio:1;position:relative}
#tbild h2{font:600 2.2rem/1.12 Georgia,serif;margin:20px 0 4px;color:var(--ta);transition:color 2.8s;border:0;padding:0}
#tbild p{margin:2px 0;opacity:.88;max-width:22em;font-size:1rem;line-height:1.45}
#tbild .go{margin-top:18px;min-height:48px;padding:13px 38px;border-radius:999px;border:0;background:var(--ta);color:#16161d;font:600 16px system-ui,sans-serif;cursor:pointer;transition:background-color 2.8s}
`;
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
const MOTIV={logo:'header.topline .brand .compass',bg:'radial-gradient(circle at 50% 32%,#fffdf6,#efe4cc 78%)',a:'#a5603d',texte:()=>sprache()==='en'?['Enneagram Healing Compass','The interactive navigation system for all 27 Enneagram subtypes']:['Enneagramm-Heilungskompass','Das interaktive Navigationssystem für alle 27 Enneagramm-Subtypen'],
css:`body.tb-offen>*:not(#tbild):not(script):not(style){visibility:hidden!important}
#tbild{z-index:9999;color:#2f2a24}#tbild h2{color:#7d4429;font-size:1.9rem}#tbild .go{color:#fff}
#tbild .hero__symbol{width:100%;height:100%;margin:0;display:flex;align-items:center;justify-content:center}#tbild .compass{width:92%!important;height:auto!important}`,
start(art){document.body.classList.add('tb-offen');art.innerHTML='<div class="hero__symbol">'+compassMark('large')+'</div>';return ()=>document.body.classList.remove('tb-offen')}};
let offen=null;
function zeige(){
 if(offen)return;
 const st=document.createElement('style');st.textContent=css+MOTIV.css+'@media(prefers-reduced-motion:reduce){#tbild *{animation:none!important}#tbild .tier{opacity:1}#tbild .ring{opacity:0}}';
 const el=document.createElement('div');el.id='tbild';el.setAttribute('role','dialog');el.setAttribute('aria-modal','true');
 const [titel,unter]=MOTIV.texte();el.setAttribute('aria-label',titel);
 el.style.background=MOTIV.bg;el.style.setProperty('--ta',MOTIV.a);
 el.innerHTML='<div class="art" aria-hidden="true"></div><h2></h2><p></p><button class="go" type="button"></button>';
 el.querySelector('h2').textContent=titel;el.querySelector('p').textContent=unter;
 const go=el.querySelector('.go');go.textContent=KNOPF[sprache()]||KNOPF.en;
 document.head.appendChild(st);document.body.appendChild(el);
 const vorher=document.body.style.overflow;document.body.style.overflow='hidden';
 let stopp=null,zu=false;
 Promise.resolve(MOTIV.start(el.querySelector('.art'),el)).then(f=>{if(zu&&f)f();else stopp=f}).catch(()=>{});
 const taste=e=>{if(e.key==='Escape')weg(e)};
 function weg(e){if(zu)return;zu=true;if(e){e.preventDefault();e.stopPropagation()}el.classList.add('fort');document.body.style.overflow=vorher;document.removeEventListener('keydown',taste);document.body.classList.remove('tb-offen');setTimeout(()=>{if(stopp)stopp();el.remove();st.remove();offen=null},480)}
 el.addEventListener('click',weg);document.addEventListener('keydown',taste);go.focus({preventScroll:true});offen=el;
}
window.zeigeTitelbild=zeige;
document.addEventListener('click',e=>{if(e.target.closest&&e.target.closest(MOTIV.logo))zeige()});
/* Bei jedem neuen Oeffnen: der Merker gilt nur, solange die App offen ist (Neuladen durch Sprachwechsel zeigt nichts doppelt) */
function beimStart(){let schon=false;try{schon=!!sessionStorage.getItem('titelbild-gezeigt')}catch(e){}const h=location.hash.replace(/^#\/?/,'');if(schon||(h&&h!=='start')||/[?&#][^=]*(session|code|token|freischalt|gutschein|zugang|key)[^=]*=/i.test(location.search+location.hash))return;try{sessionStorage.setItem('titelbild-gezeigt','1')}catch(e){}zeige()}
/* warten, bis die App ihre Sprache gesetzt und die Kopfzeile uebersetzt hat */
if(document.readyState==='complete')setTimeout(beimStart,60);else window.addEventListener('load',()=>setTimeout(beimStart,60));
})();
