import {spawn} from 'child_process';import fs from 'fs';
const EN=process.argv[2]==='en';const base=EN?'en/':'';const sfx=EN?'_en':'';

const ch=spawn('/Applications/Google Chrome.app/Contents/MacOS/Google Chrome',['--headless=new','--remote-debugging-port=9400','--user-data-dir=/tmp/chrshot','--window-size=390,844','--hide-scrollbars','about:blank'],{stdio:'ignore'});
await new Promise(r=>setTimeout(r,2500));
const list=await (await fetch('http://127.0.0.1:9400/json')).json();
const pg=list.find(x=>x.type==='page');const ws=new WebSocket(pg.webSocketDebuggerUrl);await new Promise(r=>ws.onopen=r);
let id=0;const pend={};ws.onmessage=e=>{const m=JSON.parse(e.data);if(m.id&&pend[m.id]){pend[m.id](m);delete pend[m.id];}};
const send=(method,params={})=>new Promise(r=>{const i=++id;pend[i]=r;ws.send(JSON.stringify({id:i,method,params}));});
const sleep=ms=>new Promise(r=>setTimeout(r,ms));
await send('Emulation.setDeviceMetricsOverride',{width:390,height:844,deviceScaleFactor:3,mobile:true});
await send('Page.navigate',{url:'http://127.0.0.1:4174/'+base+'#start'});await sleep(2500);
await send('Runtime.evaluate',{expression:`localStorage.setItem('kompass:onboarding-done','1');localStorage.setItem('enneagramm-kompass:tier','heilwissen');navigator.serviceWorker&&navigator.serviceWorker.getRegistrations().then(r=>r.forEach(x=>x.unregister()));`});
const pages=[['weih','#weihnachtsgeschenke']];
for(const [n,h] of pages){
  await send('Page.navigate',{url:'http://127.0.0.1:4174/'+base+h});await sleep(500);
  await send('Runtime.evaluate',{expression:`location.reload()`});await sleep(5000);
  await send('Runtime.evaluate',{expression:`(()=>{const all=[...document.querySelectorAll('*')].filter(e=>/Impuls für heute|Impulse for today|Today.s impulse|Daily impulse/i.test(e.textContent)&&e.children.length<4);all.forEach(e=>{let n=e;while(n&&n!==document.body){const cs=getComputedStyle(n);if(cs.position==='fixed'){n.remove();break;}n=n.parentElement;}});document.querySelectorAll('[class*=overlay],[class*=modal],[class*=backdrop]').forEach(e=>{if(getComputedStyle(e).position==='fixed')e.remove();});document.body.style.overflow='auto';window.scrollTo(0,0);})()`});await sleep(800);
  const r=await send('Page.captureScreenshot',{format:'jpeg',quality:90});
  fs.writeFileSync(`app_${n}${sfx}.jpg`,Buffer.from(r.result.data,'base64'));
}
ch.kill();process.exit(0);
