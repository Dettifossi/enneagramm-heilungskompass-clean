import {spawn} from 'child_process';import fs from 'fs';
const [,, from, to, port, mode='port'] = process.argv;const LAND=mode.startsWith('land');const EN=mode.endsWith('en');const WW=LAND?1920:1080,HH=LAND?1080:1920;const OUT=(LAND?'framesL':'frames')+(EN?'E':'');
const dir=process.cwd();fs.mkdirSync(OUT,{recursive:true});
const ch=spawn('/Applications/Google Chrome.app/Contents/MacOS/Google Chrome',['--headless=new',`--remote-debugging-port=${port}`,`--user-data-dir=/tmp/chr${port}`,`--window-size=${WW},${HH}`,'--hide-scrollbars','--force-device-scale-factor=1','--allow-file-access-from-files',`file://${dir}/anim.html${mode==='port'?'':'#'+mode}`],{stdio:'ignore'});
await new Promise(r=>setTimeout(r,2500));
const list=await (await fetch(`http://127.0.0.1:${port}/json`)).json();
const pg=list.find(x=>x.type==='page');const ws=new WebSocket(pg.webSocketDebuggerUrl);
await new Promise(r=>ws.onopen=r);
let id=0;const pend={};ws.onmessage=e=>{const m=JSON.parse(e.data);if(m.id&&pend[m.id]){pend[m.id](m);delete pend[m.id];}};
const send=(method,params={})=>new Promise(r=>{const i=++id;pend[i]=r;ws.send(JSON.stringify({id:i,method,params}));});
await send('Emulation.setDeviceMetricsOverride',{width:WW,height:HH,deviceScaleFactor:1,mobile:false});
await send('Runtime.evaluate',{expression:'window.imgsReady',awaitPromise:true});
for(let f=+from;f<+to;f++){
  await send('Runtime.evaluate',{expression:`draw(${f/25})`});
  const r=await send('Page.captureScreenshot',{format:'jpeg',quality:92});
  fs.writeFileSync(`${OUT}/f${String(f).padStart(5,'0')}.jpg`,Buffer.from(r.result.data,'base64'));
}
ch.kill();process.exit(0);
