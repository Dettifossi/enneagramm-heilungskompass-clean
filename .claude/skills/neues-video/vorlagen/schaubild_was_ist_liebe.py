import html
COL=[None,'#5f5f5f','#7a2fa8','#1fa688','#3cbf1f','#124fcc','#8a5222','#d4a800','#a00802','#cc6e00']
def build(lang):
    de=lang=='de'
    sub=['','Perfektion','Geben','Erfolg','Individualität','Wissen','Sicherheit','Spaß','Macht','Harmonie'] if de else ['','perfection','giving','success','individuality','knowledge','security','fun','power','harmony']
    title='Was ist Liebe?' if de else 'What is love?'
    sub2='Vom Ersatzhandel zur Essenz' if de else 'From substitutes to essence'
    word='Liebe statt' if de else 'Love instead of'
    foot='Enneagramm-Heilungskompass · Praxistipp' if de else 'Enneagram Healing Compass · Practical tip'
    chips=''
    for n in range(1,10):
        chips+=f'<div class="chip" style="--c:{COL[n]}"><div class="n">{n}</div><div class="t"><span class="w">{word}</span><br><b>{sub[n].capitalize() if de else sub[n]}</b></div></div>'
    return f'''<!doctype html><meta charset="utf-8"><style>
*{{box-sizing:border-box;margin:0}}
body{{width:1600px;height:1066px;background:linear-gradient(135deg,#f8f1e4,#efe3cf);font-family:Georgia,'Times New Roman',serif;color:#2a2622;position:relative;overflow:hidden}}
.heart{{position:absolute;right:70px;top:46px;width:190px;height:190px;opacity:.95}}
h1{{position:absolute;left:80px;top:70px;font-size:104px;letter-spacing:-1px;font-weight:700}}
.s{{position:absolute;left:84px;top:204px;font-size:44px;color:#8a6a2a;font-style:italic}}
.grid{{position:absolute;left:80px;right:80px;top:310px;display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:26px}}
.chip{{display:flex;align-items:center;gap:20px;background:#fffaf0;border-radius:22px;border-left:14px solid var(--c);padding:26px 22px;box-shadow:0 6px 18px rgba(80,60,20,.12);height:190px}}
.n{{flex:none;width:80px;height:80px;border-radius:50%;background:var(--c);color:#fff;font:700 48px Arial,sans-serif;display:flex;align-items:center;justify-content:center}}
.t{{font:400 34px/1.25 Arial,sans-serif;color:#4a4238}}.t b{{font:700 40px Georgia,serif;color:var(--c)}}.w{{font-size:30px}}
.f{{position:absolute;left:84px;bottom:34px;font:400 30px Arial,sans-serif;color:#8a7a62;letter-spacing:1px}}
</style><body>
<svg class="heart" viewBox="0 0 100 100"><path d="M50 88 C10 58 6 30 26 20 C38 14 47 20 50 30 C53 20 62 14 74 20 C94 30 90 58 50 88Z" fill="#c0392b"/></svg>
<h1>{title}</h1><div class="s">{sub2}</div>
<div class="grid">{chips}</div><div class="f">{foot}</div></body>'''
for l in ('de','en'):
    open(f'/private/tmp/claude-501/-Users-detlefrathmer-Developer-Enneagramm-Kompass/ef4b405b-6523-4df1-bb5c-b60bb2cdcebb/scratchpad/liebebild/was-ist-liebe-{l}.html','w',encoding='utf-8').write(build(l))
