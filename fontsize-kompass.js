/* Schriftgröße: dezenter Knopf "Aa" neben dem Sprachschalter, drei Stufen (normal, größer, am größten), wird gemerkt. */
(function(){
 var K="fz_zoom",S=[1,1.15,1.3],i=0;
 try{i=Math.max(0,Math.min(2,+localStorage.getItem(K)||0))}catch(e){}
 function ap(){document.documentElement.style.zoom=S[i]}
 ap();
 function place(){
  var l=document.querySelector(".lang-switcher");
  if(!l||l.previousElementSibling&&l.previousElementSibling.id==="fzb")return;
  var old=document.getElementById("fzb");if(old)old.remove();
  var b=document.createElement("button");
  b.id="fzb";b.type="button";b.textContent="Aa";b.setAttribute("aria-label","Schriftgröße / Text size");
  b.style.cssText="margin-left:auto;flex-shrink:0;font:600 .72rem/1 inherit;font-family:inherit;letter-spacing:.04em;color:var(--gold);background:transparent;border:1.5px solid var(--gold-dark);border-radius:4px;padding:.2rem .45rem;opacity:.75;cursor:pointer;position:relative;z-index:10000";
  b.onclick=function(e){e.stopPropagation();i=(i+1)%3;ap();try{localStorage.setItem(K,i)}catch(x){}};
  l.style.marginLeft="6px";
  l.parentNode.insertBefore(b,l);
 }
 function start(){place();new MutationObserver(function(){place()}).observe(document.body,{childList:true,subtree:true})}
 if(document.readyState==="loading")document.addEventListener("DOMContentLoaded",start);else start();
})();
