import random
random.seed(7)
INK="#2b1d12"
defs='''<defs>
<linearGradient id="fur" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#8a6240"/><stop offset="1" stop-color="#5a3d26"/></linearGradient>
<linearGradient id="mane" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#4a301e"/><stop offset="1" stop-color="#2f1d11"/></linearGradient>
<linearGradient id="face" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#a77a54"/><stop offset="1" stop-color="#8a6240"/></linearGradient>
<linearGradient id="grass" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#a9c777"/><stop offset="1" stop-color="#6f9448"/></linearGradient>
<radialGradient id="sun"><stop offset="0" stop-color="#fff3b0"/><stop offset="1" stop-color="#ffc94d"/></radialGradient>
</defs>'''
def eye(mood):
    base='<ellipse cx="0" cy="0" rx="5.5" ry="6" fill="#fff" stroke="%s" stroke-width="1.5"/>'%INK
    if mood=='surprised': return '<ellipse rx="7" ry="8" fill="#fff" stroke="%s" stroke-width="1.5"/><circle cx="-1" r="3" fill="#111"/><path d="M-9,-13 q9,-6 18,0" stroke="%s" stroke-width="2.5" fill="none" stroke-linecap="round"/>'%(INK,INK)
    if mood=='tired': return base+'<circle cx="-1" cy="2" r="2.6" fill="#111"/><path d="M-7,-1 h14 v-7 h-14z" fill="#8a6240" stroke="%s" stroke-width="1.5"/><path d="M-6,9 q6,4 12,0" stroke="#5a3d26" stroke-width="2" fill="none"/><path d="M-9,-10 q8,3 16,-3" stroke="%s" stroke-width="2.5" fill="none" stroke-linecap="round"/>'%(INK,INK)
    if mood=='happy': return '<path d="M-7,2 q7,-9 14,0" stroke="%s" stroke-width="3" fill="none" stroke-linecap="round"/>'%INK
    return base+'<circle cx="-1" cy="1" r="3" fill="#111"/><circle cx="-2" cy="0" r="1" fill="#fff"/>'
def mouth(mood):
    return {'happy':'<path d="M-3,0 q8,10 18,-2" stroke="%s" stroke-width="2.5" fill="none" stroke-linecap="round"/>','tired':'<path d="M-2,4 q8,-5 16,2" stroke="%s" stroke-width="2.5" fill="none" stroke-linecap="round"/>','surprised':'<ellipse cx="6" cy="3" rx="4" ry="5" fill="#3a2518"/>','calm':'<path d="M-2,2 q8,5 16,0" stroke="%s" stroke-width="2.5" fill="none" stroke-linecap="round"/>'}[mood].replace('%s',INK)
def buf(x,y,s=1,flip=1,mood='calm',load=0,col=None):
    loadsvg=''
    cols=["#c98b3a","#b5513c","#5d8aa8","#7a6aa8","#6d9a5a"]
    for i in range(load):
        w=58-i*4; loadsvg+=f'<g transform="translate({-8+(i%2)*6},{-62-i*17}) rotate({(-4 if i%2 else 5)})"><rect x="{-w/2}" y="0" width="{w}" height="17" rx="4" fill="{cols[i%5]}" stroke="{INK}" stroke-width="2"/><path d="M{-w/2+4},5 h{w-8}" stroke="#fff" stroke-opacity=".35" stroke-width="2"/></g>'
    if load: loadsvg+=f'<path d="M-40,-48 q-4,52 4,70 M30,-46 q8,50 2,66" stroke="#7a5a3a" stroke-width="3" fill="none"/>'
    return f'''<g transform="translate({x},{y}) scale({s*flip},{s})">
<ellipse cx="0" cy="58" rx="75" ry="9" fill="#000" opacity=".16"/>
<path d="M66,-8 q22,6 18,34 q-2,10 -8,4 q4,-18 -14,-28z" fill="#3a2518" stroke="{INK}" stroke-width="2"/>
<g stroke="{INK}" stroke-width="2.5" stroke-linejoin="round"><rect x="-52" y="22" width="18" height="36" rx="7" fill="#4a301e"/><rect x="38" y="22" width="18" height="36" rx="7" fill="#4a301e"/><rect x="-26" y="26" width="18" height="34" rx="7" fill="#5a3d26"/><rect x="14" y="26" width="18" height="34" rx="7" fill="#5a3d26"/>
<path d="M-52,54 h18 v6 h-18z M-26,56 h18 v6 h-18z M14,56 h18 v6 h-18z M38,54 h18 v6 h-18z" fill="#2a1a10"/></g>
<path d="M-56,-4 C-62,-62 -10,-78 22,-50 C52,-34 74,-30 74,2 C74,40 40,50 0,50 C-38,50 -58,32 -56,-4Z" fill="url(#fur)" stroke="{INK}" stroke-width="3" stroke-linejoin="round"/>
<path d="M-20,-52 q10,-8 22,-2 M10,-40 q14,-4 26,6 M30,-6 q14,2 20,16 M0,20 q16,6 30,-2" stroke="#3d2916" stroke-width="2" fill="none" stroke-linecap="round" opacity=".55"/>
{loadsvg}
<path d="M-52,-26 l-8,-8 l6,-2 l-4,-10 l10,2 l2,-10 l10,6 l6,-8 l6,10 l10,-4 l-2,12 l8,2 l-8,8 l4,10 l-10,-2 l-2,10 l-10,-6 l-6,8 l-6,-8z" fill="url(#mane)" stroke="{INK}" stroke-width="2.5" stroke-linejoin="round" transform="translate(-8,10) scale(1.15)"/>
<path d="M-98,6 C-100,-26 -60,-34 -44,-12 C-34,6 -42,34 -64,38 C-84,40 -96,26 -98,6Z" fill="url(#face)" stroke="{INK}" stroke-width="3" stroke-linejoin="round"/>
<path d="M-82,34 q-6,24 8,22 q10,-4 4,-18" fill="#3a2518" stroke="{INK}" stroke-width="2.5" stroke-linejoin="round"/>
<path d="M-92,-16 q-14,-6 -14,-26 q10,6 22,6 M-62,-24 q2,-22 18,-32 q-2,16 -8,28" fill="#f1e6c9" stroke="{INK}" stroke-width="2.5" stroke-linejoin="round"/>
<path d="M-50,-12 q16,-4 20,10 q-12,6 -22,-2z" fill="#6a4630" stroke="{INK}" stroke-width="2.5"/>
<ellipse cx="-98" cy="14" rx="9" ry="7" fill="#4a301e" stroke="{INK}" stroke-width="2"/><circle cx="-100" cy="12" r="1.8" fill="#111"/>
<g transform="translate(-72,-4)">{eye(mood)}</g><g transform="translate(-90,24)">{mouth(mood)}</g>
</g>'''
def tree(x,y,s=1):
    return f'<g transform="translate({x},{y}) scale({s})"><rect x="-5" y="-30" width="10" height="34" fill="#5a3d26" stroke="{INK}" stroke-width="2"/><circle cx="0" cy="-48" r="28" fill="#5f8a3e" stroke="{INK}" stroke-width="2.5"/><circle cx="-14" cy="-38" r="18" fill="#6f9a48"/><circle cx="14" cy="-40" r="16" fill="#527a34"/></g>'
def cloud(x,y,s=1):
    return f'<g transform="translate({x},{y}) scale({s})" fill="#fff" opacity=".92"><ellipse rx="34" ry="13"/><ellipse cx="-16" cy="-8" rx="18" ry="14"/><ellipse cx="10" cy="-12" rx="20" ry="16"/></g>'
def mount(w,skyc,far='#9db4c8',near='#7f9bb2'):
    return f'<polygon points="0,200 70,110 130,170 200,90 290,185 380,120 {w//2+40},175 {w},105 {w},200" fill="{far}"/><polygon points="0,205 50,150 120,200 210,140 300,200 400,160 {w},200 {w},210" fill="{near}"/>'
def ground(w,h=300,top=192):
    g=f'<rect y="{top}" width="{w}" height="{h-top}" fill="url(#grass)"/><path d="M0,{top} q{w/8},-10 {w/4},0 t{w/4},0 t{w/4},0 t{w/4},0" fill="none" stroke="#5f8a3e" stroke-width="3"/>'
    for _ in range(int(w/14)):
        x=random.randint(6,w-6); y=random.randint(top+10,h-50)
        g+=f'<path d="M{x},{y} l-3,-9 M{x},{y} l1,-11 M{x},{y} l4,-8" stroke="#4f7a30" stroke-width="2" stroke-linecap="round"/>'
    for _ in range(int(w/60)):
        x=random.randint(10,w-10); y=random.randint(top+14,h-60); c=random.choice(['#f4a6b8','#fff','#f7d85c'])
        g+=f'<circle cx="{x}" cy="{y}" r="3.5" fill="{c}" stroke="#555" stroke-width=".6"/>'
    return g
def bubble(x,y,w,t,tx,ty,kind='say'):
    L=t.split('|'); h=22*len(L)+16
    if kind=='think':
        o=f'<path d="M{x+14},{y} h{w-28} a14,14 0 0 1 14,14 v{h-28} a14,14 0 0 1 -14,14 h-{w-28} a14,14 0 0 1 -14,-14 v-{h-28} a14,14 0 0 1 14,-14z" fill="#fff" stroke="{INK}" stroke-width="2.5"/>'
        for i,(dx,dy,r) in enumerate([(0.3,10,7),(0.2,24,5),(0.12,36,3.5)]):
            o+=f'<circle cx="{x+w*(0.5-dx*(i+1)*0.7)+0}" cy="{y+h+dy}" r="{r}" fill="#fff" stroke="{INK}" stroke-width="2"/>'
    else:
        cx=x+w/2
        o=f'<path d="M{cx-12},{y+h-3} L{tx},{ty} L{cx+14},{y+h-3}z" fill="#fff" stroke="{INK}" stroke-width="2.5" stroke-linejoin="round"/><rect x="{x}" y="{y}" width="{w}" height="{h}" rx="16" fill="#fff" stroke="{INK}" stroke-width="2.5"/><path d="M{cx-10},{y+h-1.5} h22" stroke="#fff" stroke-width="5"/>'
    for k,l in enumerate(L): o+=f'<text x="{x+w/2}" y="{y+26+22*k}" text-anchor="middle" font-family="\'Comic Sans MS\',\'Chalkboard SE\',\'Marker Felt\',sans-serif" font-size="15" fill="{INK}">{l}</text>'
    return o
def panel(i,x,y,w,body,cap,h=310):
    return f'''<g transform="translate({x},{y})"><clipPath id="c{i}"><rect width="{w}" height="{h}" rx="8"/></clipPath><g clip-path="url(#c{i})">{body}<rect y="{h-40}" width="{w}" height="40" fill="{INK}" opacity=".9"/><text x="{w/2}" y="{h-15}" text-anchor="middle" font-family="Georgia,serif" font-size="14.5" fill="#fbf6ea">{cap}</text></g>
<rect width="{w}" height="{h}" rx="8" fill="none" stroke="{INK}" stroke-width="5"/><circle cx="22" cy="22" r="16" fill="#c0562b" stroke="{INK}" stroke-width="3"/><text x="22" y="28" text-anchor="middle" font-family="Georgia,serif" font-weight="bold" font-size="17" fill="#fff">{i}</text></g>'''
W=780; H=310
P=[]
# 1 wide establishing
b=f'<rect width="{W}" height="200" fill="#bfe0f2"/>'+cloud(120,50,1.2)+cloud(520,38,1)+cloud(680,80,.8)+mount(W,'')+tree(60,205,1)+tree(720,200,.9)+ground(W)
b+=buf(560,200,.5,-1,'calm')+buf(650,190,.4,-1,'calm')+buf(470,185,.36,-1,'calm')+buf(210,195,.85,1,'happy',1)
b+=bubble(30,18,230,'Ich mach das schon.|Hauptsache, alle sind dabei!',150,115)
P.append(panel(1,0,0,W,b,'Bruno trägt gern mit. Die Herde ist sein Zuhause.'))
hw=385
# 2
b=f'<rect width="{hw}" height="200" fill="#f8dfb0"/><circle cx="310" cy="60" r="26" fill="url(#sun)"/>'+mount(hw,'','#d9b99a','#c49a7c')+tree(350,205,.8)+ground(hw)+buf(120,205,.8,1,'calm')+buf(320,200,.5,-1,'calm')
b+=bubble(150,12,215,'Bruno, wohin ziehen wir?',320,110)+bubble(10,88,180,'Ist mir egal. Hauptsache,|es passt für alle.',90,140)
P.append(panel(2,0,330,hw,b,'Wo er hinwill, sagt er nicht. Er gleicht lieber aus.'))
# 3
b=f'<rect width="{hw}" height="200" fill="#e7dcc6"/>'+cloud(70,45,.8)+mount(hw,'','#b9b3a6','#a39d92')+ground(hw)+buf(150,205,.85,1,'happy',4)
b+=bubble(215,12,160,'Kannst du das auch|noch tragen?',215,100)+bubble(215,86,160,'Klar, kein Problem!',185,125)
P.append(panel(3,hw+10,330,hw,b,'Er arbeitet für die Gruppe, bis die Last zu groß wird.'))
# 4 tired
b=f'<rect width="{hw}" height="200" fill="#cfcbe6"/>'+cloud(300,40,.9)+mount(hw,'','#a9a5c8','#8f8bb3')+ground(hw)+buf(150,205,.85,1,'tired',5)
b+=bubble(205,14,170,'Eigentlich bin ich|so müde …',0,0,'think')+'<text x="30" y="110" font-family="Georgia,serif" font-style="italic" font-size="22" fill="#4b4670">*seufz*</text>'
P.append(panel(4,0,660,hw,b,'Innen staut sich Spannung, nach außen bleibt er ruhig.'))
# 5 calf
b=f'<rect width="{hw}" height="200" fill="#fbe3b8"/>'+cloud(60,45,.7)+mount(hw,'','#e0bf9d','#cba27f')+tree(340,205,.7)+ground(hw)+buf(125,205,.85,1,'surprised')+buf(310,222,.38,-1,'happy')
b+=bubble(190,14,185,'Und was willst du,|Bruno?',300,150)
P.append(panel(5,hw+10,660,hw,b,'Ein Kalb stellt die Frage, die lange keiner gestellt hat.'))
# 6 wide finale
b=f'<rect width="{W}" height="200" fill="#ffe2a0"/><circle cx="640" cy="105" r="52" fill="url(#sun)"/>'+cloud(150,45,1)+mount(W,'','#e9b98a','#d39b6e')+tree(40,205,1)+ground(W)
b+=buf(560,205,.5,-1,'happy')+buf(670,198,.42,-1,'happy')+buf(480,190,.36,-1,'calm')+buf(220,205,.9,1,'calm')
b+=bubble(25,14,250,'Ich möchte nach Osten.|Und ich bleibe bei euch.',150,120)
P.append(panel(6,0,990,W,b,'Dazugehören, ohne sich zu verlieren: eigene Stimme, gleiche Herde.'))
svg=f'<svg viewBox="-12 -12 {W+24} {1300+24}" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Lerncomic Sozialer Neuner">{defs}<rect x="-12" y="-12" width="{W+24}" height="{1324}" fill="#f0e6d0"/>{"".join(P)}</svg>'
html=f'''<!doctype html><html lang="de"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>Lerncomic SO9 – Der Büffel</title>
<style>body{{margin:0;background:#f0e6d0;font-family:Georgia,serif;color:#2b1d12}}main{{max-width:820px;margin:0 auto;padding:16px}}h1{{font-size:1.5rem}}svg{{width:100%;height:auto}}p{{line-height:1.5}}</style></head><body><main>
<h1>Bruno, der Büffel – Lerncomic zum Sozialen Neuner (SO9)</h1>
<p>Der soziale Neuner ist der Kontratyp unter den Neunern: Seine Trägheit zeigt sich als Einsatz für die Gemeinschaft.</p>
{svg}
<p><strong>Merke:</strong> Wer immer mitträgt, vergisst leicht die eigene Position. Der Weg heißt: verbunden bleiben und die eigene Stimme einbringen.</p></main></body></html>'''
open('so9-buffel.html','w',encoding='utf-8').write(html)
