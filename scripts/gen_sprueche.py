#!/usr/bin/env python3
"""Erzeugt spruch/NNN.html (Landingpage je Spruch) aus data/zitate.js.
Aufruf: node-Export nach JSON, dann python3 scripts/gen_sprueche.py <zitate.json>"""
import json,sys,html,os
Z=json.load(open(sys.argv[1]))
R2="https://pub-2851309644cc48aea2a2ae780b41b196.r2.dev/assets/sprueche/"
APP="https://kompass.verlagshausrathmer.com/"
TPL=open(os.path.join(os.path.dirname(__file__),"spruch_template.html"),encoding="utf-8").read()
N=len(Z)
for i,z in enumerate(Z,1):
    n=f"{i:03d}"
    q=html.escape(z["q"]);a=html.escape(z["a"]);t=html.escape(z["t"])
    page=(TPL.replace("{{N}}",n).replace("{{Q}}",q).replace("{{A}}",a).replace("{{T}}",t)
      .replace("{{Y}}",html.escape(z.get("y","")))
      .replace("{{IMG}}",R2+n+"-quadrat.jpg").replace("{{PREV}}",f"{(i-2)%N+1:03d}").replace("{{NEXT}}",f"{i%N+1:03d}")
      .replace("{{DESC}}",html.escape(f"{z['q']} – {z['a']}. Ein Gedanke zum Enneagramm-Heilungskompass.")))
    open(os.path.join(os.path.dirname(__file__),"..","spruch",n+".html"),"w",encoding="utf-8").write(page)
print(N)
