import sys, html
COL=[None,'#5f5f5f','#7a2fa8','#1fa688','#3cbf1f','#124fcc','#8a5222','#d4a800','#a00802','#cc6e00']  # = TYPE_COLORS der App
def build(lang):
    de=lang=='de'
    L=dict(
     title='Statt Liebe …' if de else 'Instead of love …',
     sub='Lesen Sie jede Zeile einmal rückwärts.' if de else 'Read each line once backwards.',
     typ='TYP' if de else 'TYPE',
     love='Liebe' if de else 'love', stattL='statt' if de else 'instead of',
     names=[None,'Perfektionist','Helfer','Dynamiker','Individualist','Denker','Loyaler Skeptiker','Optimist','Herausforderer','Friedlicher'] if de else [None,'Perfectionist','Helper','Dynamic One','Individualist','Thinker','Loyal Skeptic','Optimist','Challenger','Peaceful One'],
     subst=[None,'Perfektion','Geben','Erfolg','Individualität','Wissen','Sicherheit','Spaß','Macht','Harmonie'] if de else [None,'Perfection','Giving','Success','Individuality','Knowledge','Security','Fun','Power','Harmony'],
     foot1='Die Suche nach der wahren Liebe' if de else 'The Search for True Love',
     foot2='Enneagramm-Heilungskompass · kompass.verlagshausrathmer.com' if de else 'Enneagram Healing Compass · kompass.verlagshausrathmer.com/en/',
     q='Welche Zeile berührt Sie?' if de else 'Which line touches you?')
    rows=''
    for n in range(1,10):
        c=COL[n]; sub=L['subst'][n]
        if de:
            l1=f'{sub} statt <span class="lv">Liebe</span>'
            l2=f'<span class="lv big">Liebe</span> statt {sub}'
        else:
            l1=f'{sub} instead of <span class="lv">love</span>'
            l2=f'<span class="lv big">Love</span> instead of {sub.lower() if n!=1 else sub.lower()}'
        rows+=f'''<div class="row" style="--c:{c}">
  <div class="num">{n}</div>
  <div class="txt">
    <div class="cap">{L['typ']} {n} · {L['names'][n].upper()}</div>
    <div class="l1">{l1}</div>
    <div class="l2">{l2}</div>
  </div>
  <svg class="uturn" viewBox="0 0 60 80" width="46" height="62"><path d="M14 14 H40 a14 14 0 0 1 14 14 v10 a14 14 0 0 1 -14 14 H20" fill="none" stroke="{c}" stroke-width="5" stroke-linecap="round"/><path d="M30 52 l-14 0 l9 -10 M16 52 l9 10" fill="none" stroke="{c}" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/></svg>
</div>'''
    dots=''
    import math
    pts=[]
    for i in range(1,10):
        a=(i%9)/9*2*math.pi-math.pi/2; x=60+math.cos(a)*44; y=60+math.sin(a)*44; pts.append((x,y,COL[i]))
    lines=''.join(f'<line x1="{pts[a-1][0]:.1f}" y1="{pts[a-1][1]:.1f}" x2="{pts[b-1][0]:.1f}" y2="{pts[b-1][1]:.1f}" stroke="#c9b79a" stroke-width="1.6"/>' for a,b in [(1,4),(4,2),(2,8),(8,5),(5,7),(7,1),(3,6),(6,9),(9,3)])
    circ=''.join(f'<circle cx="{x:.1f}" cy="{y:.1f}" r="7.5" fill="{c}"/>' for x,y,c in pts)
    emb=f'<svg viewBox="0 0 120 120" width="108" height="108"><circle cx="60" cy="60" r="44" fill="none" stroke="#c9b79a" stroke-width="1.6"/>{lines}{circ}</svg>'
    return f'''<!doctype html><meta charset=utf-8><style>
*{{box-sizing:border-box;margin:0}}
body{{width:1080px;height:1660px;background:radial-gradient(circle at 50% 0%,#fbf6ec 0,#f2e9d8 100%);font-family:'Hoefler Text','Baskerville','Georgia',serif;color:#2a2320;position:relative;overflow:hidden}}
.frame{{position:absolute;inset:22px;border:2px solid #d8c7a6;border-radius:26px}}
.head{{text-align:center;padding-top:50px}}
.emb{{height:110px}}
h1{{font-size:88px;font-weight:600;letter-spacing:.01em;margin-top:6px;color:#2a2320}}
.sub{{font-size:33px;font-style:italic;color:#8a6a4c;margin-top:8px}}
.orn{{display:flex;align-items:center;justify-content:center;gap:16px;margin:14px auto 0;width:520px}}
.orn i{{flex:1;height:2px;background:#d8c7a6}}
.orn b{{color:#c4a456;font-size:30px;font-weight:400}}
.rows{{padding:12px 74px 0;display:flex;flex-direction:column;gap:10px}}
.row{{display:flex;align-items:center;gap:22px;background:rgba(255,255,255,.72);border-radius:20px;padding:12px 24px 12px 14px;box-shadow:0 6px 18px rgba(90,60,30,.10);border-left:10px solid var(--c);height:110px}}
.num{{flex:0 0 66px;height:66px;border-radius:50%;background:var(--c);color:#fff;font-size:40px;font-weight:700;display:flex;align-items:center;justify-content:center;box-shadow:0 4px 10px rgba(0,0,0,.18)}}
.txt{{flex:1}}
.cap{{font-family:-apple-system,Helvetica,Arial,sans-serif;font-size:17px;font-weight:700;letter-spacing:.16em;color:var(--c);margin-bottom:2px;filter:brightness(.78)}}
.l1{{font-size:35px;color:#7a6c62;line-height:1.15}}
.l2{{font-size:41px;font-weight:600;color:#2a2320;line-height:1.2}}
.lv{{color:#7a6c62}}
.l2 .lv.big{{color:#b3801f;font-style:italic;font-weight:700}}
.uturn{{flex:0 0 46px;opacity:.9}}
.foot{{position:absolute;left:0;right:0;bottom:44px;text-align:center}}
.q{{font-size:38px;font-style:italic;color:#8a6a4c}}
.f1{{font-size:30px;margin-top:12px;color:#2a2320}}
.f2{{font-family:-apple-system,Helvetica,Arial,sans-serif;font-size:22px;letter-spacing:.06em;color:#a5603d;margin-top:6px}}
</style><body><div class="frame"></div>
<div class="head"><div class="emb">{emb}</div><h1>{L['title']}</h1><div class="sub">{L['sub']}</div><div class="orn"><i></i><b>♥</b><i></i></div></div>
<div class="rows">{rows}</div>
<div class="foot"><div class="q">{L['q']}</div><div class="f1">{L['foot1']}</div><div class="f2">{L['foot2']}</div></div></body>'''
for l in ('de','en'):
    open(f'liebe_statt_{l}.html','w',encoding='utf-8').write(build(l))
