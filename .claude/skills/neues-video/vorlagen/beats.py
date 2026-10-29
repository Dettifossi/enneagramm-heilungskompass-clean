# Tempo und Betonungen eines Songs messen -> beats.json, daraus peaks.js erzeugen.
# Aufruf (OHNE -I, braucht numpy):  python3 beats.py song.wav   (vorher: ffmpeg -t 90 -i SONG -ac 1 -ar 11025 song.wav)
import numpy as np, wave, json, sys
w=wave.open(sys.argv[1] if len(sys.argv)>1 else 'song.wav'); x=np.frombuffer(w.readframes(w.getnframes()),dtype=np.int16).astype(float); sr=w.getframerate()
h=256; n=len(x)//h
e=np.array([np.sqrt((x[i*h:(i+1)*h]**2).mean()) for i in range(n)])
o=np.maximum(0,np.diff(e)); o-=o.mean(); fs=sr/h
ac=np.correlate(o,o,'full')[len(o)-1:]
c=sorted([(ac[l],60*fs/l) for l in range(int(fs*60/200),int(fs*60/60))],reverse=True)[:6]
print('BPM-Kandidaten:',[round(b,1) for _,b in c])   # den plausibelsten waehlen (Halb-/Doppeltempo moeglich!)
thr=o.mean()+1.1*o.std(); pk=[]
for i in range(2,len(o)-2):
    t=i/fs
    if o[i]>thr and o[i]>=o[i-1] and o[i]>o[i+1] and (not pk or t-pk[-1]>0.22): pk.append(round(t,2))
json.dump({'peaks':pk,'bpm':c[0][1]},open('beats.json','w'))
open('peaks.js','w').write('window.PEAKS='+json.dumps(pk)+';')
print(len(pk),'Betonungen; erste:',pk[:12])
