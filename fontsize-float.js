/* Schriftgröße: schwebender Knopf "Aa", drei Stufen (normal, größer, am größten), wird gemerkt. */
(function(){
 var K="fz_zoom",S=[1,1.15,1.3],i=0;
 try{i=Math.max(0,Math.min(2,+localStorage.getItem(K)||0))}catch(e){}
 function ap(){document.documentElement.style.zoom=S[i]}
 ap();
 function init(){
  if(document.getElementById("fzb"))return;
  var b=document.createElement("button");
  b.id="fzb";b.type="button";b.textContent="Aa";b.setAttribute("aria-label","Schriftgröße / Text size");
  b.style.cssText="position:fixed;left:10px;bottom:calc(14px + env(safe-area-inset-bottom));z-index:60;width:40px;height:40px;border-radius:50%;border:1px solid rgba(128,128,128,.6);background:rgba(255,255,255,.92);color:#222;font:bold 14px system-ui,sans-serif;padding:0;cursor:pointer;box-shadow:0 1px 6px rgba(0,0,0,.25)";
  b.onclick=function(e){e.stopPropagation();i=(i+1)%3;ap();try{localStorage.setItem(K,i)}catch(x){}};
  document.body.appendChild(b);
 }
 if(document.readyState==="loading")document.addEventListener("DOMContentLoaded",init);else init();
})();
