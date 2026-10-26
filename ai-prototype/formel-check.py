#!/usr/bin/env python3
"""Findet wiederkehrende Formeln in den Porträttexten (DE): häufige Satzanfänge und 6-Wort-Wendungen.
Aufruf: python3 ai-prototype/formel-check.py [Mindestzahl Porträts, Standard 25]"""
import re,glob,sys,collections
mn=int(sys.argv[1]) if len(sys.argv)>1 else 25
files=sorted(glob.glob('data/beruehmte-de/teil*.js')+glob.glob('data/kriminal-de/teil*.js')+glob.glob('data/krankheitsportraets-de/teil*.js'))
paras=[]
for f in files:
    s=open(f,encoding='utf-8').read()
    for m in re.finditer(r'export function (\w+)\(\) \{',s):
        j=s.find('\nexport function',m.end()); body=s[m.end():j if j>0 else len(s)].split('relatedLinks(')[0]
        for p in re.findall(r'<p class="vb-intro">(.*?)</p>',body,re.S):
            paras.append((m.group(1),re.sub(r'\s+',' ',re.sub(r'<[^>]+>','',p))))
print('Porträts',len({p[0] for p in paras}),'Absätze',len(paras))
ng=collections.Counter(); nf=collections.defaultdict(set)
for fn,t in paras:
    for x in re.split(r'(?<=[.!?])\s+',t):
        w=x.split()
        if len(w)>=7:
            k=' '.join(w[:5]); ng[k]+=1; nf[k].add(fn)
print('\n== Satzanfänge (5 Wörter) in mindestens',mn,'Porträts')
for k,v in sorted(nf.items(),key=lambda kv:-len(kv[1])):
    if len(v)>=mn: print(len(v),k)
