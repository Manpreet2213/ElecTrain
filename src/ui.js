/* ===== UI ===== */
const $=id=>document.getElementById(id);
const esc=s=>String(s).replace(/[&<>"]/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c]));
const LS={get(k,d){try{const v=localStorage.getItem(k);return v?JSON.parse(v):d}catch(e){return d}},set(k,v){try{localStorage.setItem(k,JSON.stringify(v))}catch(e){}}};
const GROUPS={A:'Power, grounds, starting',B:'Instruments, telematics, bodybuilder',C:'Engine and aftertreatment',D:'Transmission and PTO',E:'Suspension and brakes',F:'Chassis air controls',G:'Lighting',H:'Climate, sleeper, shore power',I:'Cab and body',J:'Safety systems',K:'Audio and infotainment',M:'Trailer cables',N:'Aux equipment',X:'Diagnostics and data links'};
const SECT={G:'Ground',F:'Fuse / breaker',R:'Relay',C:'Component',I:'Inline connector',S:'Splice',H:'Shell / reference'};
SH.sort((a,b)=>a.pg-b.pg);
let stats=LS.get('teb2-stats',{jobs:0,clean:0,sheets:[]});
const S={sid:LS.get('teb2-sheet','GQ'),M:null,L:null,st:null,faults:[],mode:'V',red:'BAT',black:'N',act:'red',diff:LS.get('teb2-diff',1),job:null,hide:false};
if(!SH.find(s=>s.id===S.sid))S.sid='GQ';

/* ---- layout ---- */
function layout(M){
  const cols=M.sh.cols,CW=98,X0=92,Y0=100,DY=42;
  const inline=cols.map(c=>c.it.length===1&&Array.isArray(c.f)&&Array.isArray(c.e));
  const slot=[];let ns=0;cols.forEach((c,i)=>{if(!inline[i])slot[i]=ns++});
  const X=i=>X0+slot[i]*CW,ny=[];
  cols.forEach((c,i)=>{if(inline[i])return;const y0=typeof c.f==='string'?Y0:ny[c.f[0]][c.f[1]];ny[i]=[];for(let k=0;k<=c.it.length;k++)ny[i][k]=y0+k*DY});
  let H=0;ny.forEach(r=>r&&r.forEach(y=>{if(y>H)H=y}));
  return {inline,X,ny,W:Math.max(360,X0+ns*CW+16),H:H+70};
}

/* ---- symbols (drawn along the y axis, centred on 0,0) ---- */
function gsym(x,y,label){return `<path d="M${x} ${y}V${y+8}M${x-9} ${y+8}H${x+9}M${x-6} ${y+12}H${x+6}M${x-3} ${y+16}H${x+3}" class="gnd"/>`+(label?`<text x="${x}" y="${y+28}" text-anchor="middle" class="tg">${esc(label.length>12?label.slice(0,11)+'…':label)}</text>`:'')}
function symbol(p,V){
  const M=S.M,bg='<rect x="-9" y="-15" width="18" height="30" fill="var(--sheet)"/>';
  const glow=b=>b>0.02?`<circle r="17" fill="var(--glow)" opacity="${(Math.min(1,b)*0.45).toFixed(2)}"/>`:'';
  let b=0;if(V&&'LDMHSXE'.includes(p.t)){const R=elemR(p,S.st,fmapUI()[p.id],false);if(R)b=Math.pow((V[p.a]||0)-(V[p.b]||0),2)/R/(p.v*p.v/nomR(p))}
  switch(p.t){
    case 'w':return '';
    case 'k':if(/^SP/.test(p.tag))return '<circle r="3.6" class="dot"/>';
      if(isStud(p.tag,p.n))return bg.replace('-15','-8').replace('30','16')+'<circle r="5.5" class="sym"/><path d="M-3.5 -3.5L3.5 3.5M3.5 -3.5L-3.5 3.5" class="sl"/>';
      return bg+'<path d="M-6 -7L0 -1L6 -7M-6 1L0 7L6 1" class="sl"/>';
    case 'f':case 'cb':{const bl=S.st.blown[p.id];return bg+'<rect x="-5" y="-12" width="10" height="24" rx="2" class="sym"/>'+(bl?'<path d="M0 -12V-4M0 4V12" class="sl"/><path d="M-4 -4L4 4M4 -4L-4 4" stroke="var(--bad)" stroke-width="2"/>':(p.t==='cb'?'<path d="M0 -12V-5M0 5V12M0 -5Q6 0 0 5" class="sl"/>':'<path d="M0 -12V12" class="sl"/>'))}
    case 'sw':case 'ecu':{const on=fmapUI()[p.id]?.stuck||(S.st.sw[p.id]&&!(p.t==='ecu'&&S.mode==='R'));
      const box=p.t==='ecu'?'<rect x="-13" y="-16" width="26" height="32" rx="3" fill="var(--sheet)" stroke="var(--accent)" stroke-dasharray="3 2"/>':bg;
      return box+'<circle cy="-11" r="2.6" class="dot"/><circle cy="11" r="2.6" class="dot"/>'+(on?'<path d="M0 -11V11" class="lever"/>':'<path d="M0 -11L10 8" class="lever"/>')+`<rect x="-16" y="-18" width="32" height="36" fill="transparent" class="hit" data-sw="${p.id}"/>`}
    case 'rc':case 'rn':{const en=S.mode==='V'&&S.st.relay[p.p];const closed=p.t==='rc'?en:!en;return bg+'<circle cy="-11" r="2.4" class="dot"/><circle cy="11" r="2.4" class="dot"/>'+(closed?'<path d="M0 -11V11" class="lever"/>':'<path d="M0 -11L9 7" class="lever"/>')+'<path d="M-9 0H-4" class="sl" stroke-dasharray="2 2"/>'}
    case 'rk':return bg+'<rect x="-8" y="-8" width="16" height="16" class="sym"/><path d="M-8 8L8 -8" class="sl"/>';
    case 'L':return glow(b)+'<circle r="9" class="sym"/>'+`<circle r="9" fill="var(--glow)" opacity="${Math.min(1,b).toFixed(2)}"/>`+'<path d="M-6.4 -6.4L6.4 6.4M6.4 -6.4L-6.4 6.4" class="sl"/>';
    case 'D':return glow(b)+'<path d="M-8 -6H8L0 6Z" class="sym"/>'+`<path d="M-8 -6H8L0 6Z" fill="var(--glow)" opacity="${Math.min(1,b).toFixed(2)}"/>`+'<path d="M-8 6H8M9 -2l4 -4M9 2l4 -4" class="sl"/>';
    case 'M':case 'H':case 'E':case 'S':case 'X':{const sh=p.t==='M'||p.t==='H'?'<circle r="10" class="sym"/>':'<rect x="-10" y="-10" width="20" height="20" rx="2" class="sym"/>';
      const lt={M:'M',H:'H',E:'MOD',S:'SOL',X:'HTR'}[p.t];return glow(b)+sh+`<circle r="${p.t==='M'||p.t==='H'?10:0}" fill="var(--glow)" opacity="${Math.min(1,b).toFixed(2)}"/>`+(p.t!=='M'&&p.t!=='H'?`<rect x="-10" y="-10" width="20" height="20" rx="2" fill="var(--glow)" opacity="${Math.min(1,b).toFixed(2)}"/>`:'')+`<text y="3.2" text-anchor="middle" class="tx">${lt}</text>`}
    case 'R':case 'T':return bg+'<path d="M0 -14V-10L-5 -7.5L5 -2.5L-5 2.5L5 7.5L0 10V14" class="sl"/>';
    case 'Q':return bg+'<rect x="-8" y="-9" width="16" height="18" class="sym"/><text y="3" text-anchor="middle" class="tx">in</text>';
    case 'ri':return bg+'<path d="M-9 -3H9M-5 3H5" stroke="var(--ink)" stroke-width="2.2"/>';
  }
  return '';
}
let _fm=null;function fmapUI(){return _fm}

function drawSVG(V){
  const M=S.M,L=S.L,pos={},add=(id,x,y)=>(pos[id]||(pos[id]=[])).push([x,y]);let o='',sy='',tg='';
  const W=L.W,H=L.H;
  // supply rail + battery + key
  o+=`<path d="M22 26H${W-10}" class="bus"/><text x="${W-12}" y="20" text-anchor="end" class="blab">BATT</text>`;
  o+=`<path d="M54 50H${W-10}" class="bus"/><text x="${W-12}" y="44" text-anchor="end" class="blab">IGN</text>`;
  o+=`<path d="M22 26V42M22 58V74" class="wr"/><path d="M12 42H32M16 47H28M12 52H32M16 57H28" stroke="var(--ink)" stroke-width="2"/><text x="36" y="40" class="tx">+</text>${gsym(22,74,'')}<text x="22" y="104" text-anchor="middle" class="tg">Batt −</text>`;
  o+=`<path d="M54 26V31M54 45V50" class="wr"/><circle cx="54" cy="31" r="2.3" class="dot"/><circle cx="54" cy="45" r="2.3" class="dot"/>`+(S.st.key?'<path d="M54 31V45" class="lever"/>':'<path d="M54 31L62 43" class="lever"/>')+`<text x="62" y="40" class="tg sw">KEY</text><rect x="42" y="27" width="28" height="22" fill="transparent" class="hit" data-key="1"/>`;
  add('BAT',22,26);add('N',22,74);add('IGN',54,50);
  M.sh.cols.forEach((col,c)=>{
    const ids=M.ids[c],items=M.parts.filter(p=>p.c===c);
    if(L.inline[c]){const [fc,fk]=col.f,[ec,ek]=col.e,x1=L.X(fc),y1=L.ny[fc][fk],x2=L.X(ec),y2=L.ny[ec][ek],mx=(x1+x2)/2,my=(y1+y2)/2,ang=Math.atan2(y2-y1,x2-x1)*180/Math.PI;
      o+=`<path d="M${x1} ${y1}L${x2} ${y2}" class="wr"/>`;sy+=`<g transform="translate(${mx} ${my}) rotate(${ang-90})">${symbol(items[0],V)}</g>`;tg+=`<text x="${mx}" y="${my-13}" text-anchor="middle" class="tg">${esc(items[0].tag)}</text>`;return}
    const x=L.X(c),ys=L.ny[c];
    if(col.f==='B')o+=`<path d="M${x} 26V${ys[0]}" class="wr"/><circle cx="${x}" cy="26" r="3.2" class="dot"/>`;
    else if(col.f==='I')o+=`<path d="M${x} 50V${ys[0]}" class="wr"/><circle cx="${x}" cy="50" r="3.2" class="dot"/>`;
    else if(typeof col.f==='string'){const t={'5':'ECU 5V','C':'CAN 2.5V','S':'BATTERY','A':'120V AC'}[col.f];o+=`<rect x="${x-26}" y="${ys[0]-30}" width="52" height="17" rx="3" class="sym"/><text x="${x}" y="${ys[0]-18}" text-anchor="middle" class="tx">${t}</text><path d="M${x} ${ys[0]-13}V${ys[0]}" class="wr"/>`}
    else{const fx=L.X(col.f[0]);o+=`<path d="M${fx} ${ys[0]}H${x}" class="wr"/><circle cx="${fx}" cy="${ys[0]}" r="3.2" class="dot"/>`}
    items.forEach((p,k)=>{const y1=ys[k],y2=ys[k+1],my=(y1+y2)/2;o+=`<path d="M${x} ${y1}V${y2}" class="wr"/>`;
      const s=symbol(p,V);if(s)sy+=`<g transform="translate(${x} ${my})">${s}</g>`;
      const t=p.tag.length>13?p.tag.slice(0,12)+'…':p.tag;tg+=`<text x="${x+14}" y="${my+4}" class="tg${p.t==='sw'||p.t==='ecu'?' sw':''}">${esc(t)}<title>${esc(p.tag+' · '+p.n)}</title></text>`});
    const yl=ys[ys.length-1];
    if(col.e==='N')o+=gsym(x,yl,'Batt −');else if(typeof col.e==='string')o+=gsym(x,yl,col.e.slice(2));
    else if(Array.isArray(col.e)){const tx=L.X(col.e[0]),ty=L.ny[col.e[0]][col.e[1]];o+=`<path d="M${x} ${yl}V${yl+10}L${tx} ${ty}" class="jmp"/>`}
    ids.forEach((id,k)=>add(id,x,ys[k]));
  });
  let pts='';
  for(const id in pos){for(const [x,y] of pos[id]){
    if(id===S.red)pts+=`<circle cx="${x}" cy="${y}" r="9" fill="none" stroke="var(--w-red)" stroke-width="3"/>`;
    if(id===S.black)pts+=`<circle cx="${x}" cy="${y}" r="${id===S.red?12.5:9}" fill="none" stroke="var(--ink)" stroke-width="2.5" stroke-dasharray="3 2"/>`;
    pts+=`<circle cx="${x}" cy="${y}" r="4.3" class="pt"/><circle cx="${x}" cy="${y}" r="13" fill="transparent" class="hit" data-node="${esc(id)}"><title>${esc(M.lab[id]||id)}</title></circle>`}}
  const svg=$('svg');svg.setAttribute('viewBox',`0 0 ${W} ${H}`);svg.setAttribute('width',W);svg.setAttribute('height',H);svg.innerHTML=o+sy+tg+pts;
}

/* ---- panels ---- */
function fmtR(R){if(!isFinite(R)||R>4e7)return['OL','Ω'];if(R<0)R=0;if(R<10)return[R.toFixed(2),'Ω'];if(R<200)return[R.toFixed(1),'Ω'];if(R<2000)return[R.toFixed(0),'Ω'];if(R<2e6)return[(R/1000).toFixed(2),'kΩ'];return[(R/1e6).toFixed(2),'MΩ']}
function drawMeter(V){const M=S.M;
  if(S.mode==='V'){const v=(V[S.red]||0)-(V[S.black]||0);$('lcdMode').textContent='DC V';$('lcdVal').textContent=Math.abs(v)<0.005?'0.00':(Math.abs(v)>=100?v.toFixed(1):v.toFixed(2));$('lcdUnit').textContent='V';$('mNote').textContent=`Key ${S.st.key?'ON':'OFF'}. Volts, red minus black.`}
  else{const [a,u]=fmtR(ohms(M,S.st,S.faults,S.red,S.black));$('lcdMode').textContent='OHMS';$('lcdVal').textContent=a;$('lcdUnit').textContent=u;$('mNote').textContent='Battery disconnected. Ohms between the leads.'}
  $('pRedN').textContent=M.lab[S.red]||S.red;$('pBlkN').textContent=M.lab[S.black]||S.black;
  $('pRed').setAttribute('aria-pressed',S.act==='red');$('pBlk').setAttribute('aria-pressed',S.act==='black');
  $('mV').setAttribute('aria-pressed',S.mode==='V');$('mR').setAttribute('aria-pressed',S.mode==='R')}
function partOptions(list){const M=S.M,seen={},groups={};
  for(const p of list){let lbl=p.tag+' · '+p.n;seen[lbl]=(seen[lbl]||0)+1;if(seen[lbl]>1)lbl+=' (#'+seen[lbl]+')';(groups[KIND[p.t]]||(groups[KIND[p.t]]=[])).push(`<option value="${esc(p.id)}">${esc(lbl)}</option>`)}
  return Object.keys(groups).map(g=>`<optgroup label="${esc(g)}">${groups[g].join('')}</optgroup>`).join('')}
function fillTypes(selId,typeId){const p=S.M.byId[$(selId).value];const el=$(typeId),keep=el.value;el.innerHTML=(p?p.allowed:[]).map(t=>`<option value="${t}">${TYPES[t]}</option>`).join('');if(p&&p.allowed.includes(keep))el.value=keep}
function drawPanels(){const M=S.M,sh=M.sh,j=S.job,cp=$('complaint');
  $('shTitle').textContent=sh.id+' · '+sh.t;$('shMeta').textContent='Page '+sh.pg;$('shNote').textContent=sh.note;
  const ac=sh.cols.some(c=>c.f==='A'),srs=sh.id==='JA';$('shWarn').hidden=!(ac||srs);
  $('shWarn').textContent=ac?'Real 120 V AC on this sheet can kill. On a truck, unplug shore power before working on it.':srs?'Never put an ohmmeter on a real airbag squib. Use the SRS tester and a dummy load.':'';
  if(j.done){cp.textContent=j.shown?'Answers shown below. Hit New job for the next one.':'Job closed. Hit New job for the next one.';cp.className='complaint done';$('woMeta').textContent=j.shown?'Answer shown':'Repaired'}
  else if(!S.faults.length){cp.textContent='No complaint. Known-good circuit: take baseline readings so you know what normal looks like.';cp.className='complaint';$('woMeta').textContent='No faults'}
  else{cp.textContent='Driver says: '+(j.complaint||'No complaint you can notice. The fault is real, so find it with the meter.');cp.className='complaint';const n=S.faults.length;$('woMeta').textContent=j.kind==='custom'?'Your bugs: '+n:n+' hidden fault'+(n>1?'s':'')}
  $('d1').setAttribute('aria-pressed',S.diff===1);$('d2').setAttribute('aria-pressed',S.diff===2);
  let ctl=`<button class="ctl${S.st.key?' on':''}" data-key="1">Key: ${S.st.key?'ON':'OFF'}</button>`;
  for(const p of M.parts){if(p.t==='sw'||p.t==='ecu')ctl+=`<button class="ctl${S.st.sw[p.id]?' on':''}" data-sw="${p.id}" title="${esc(p.n)}">${esc(p.tag)}: ${S.st.sw[p.id]?'ON':'OFF'}</button>`;
    if((p.t==='f'||p.t==='cb')&&S.st.blown[p.id])ctl+=`<button class="ctl blown" data-fuse="${p.id}">${esc(p.tag)} ${p.t==='cb'?'tripped. Reset':'blown. Replace'}</button>`}
  $('controls').innerHTML=ctl;
  const cand=M.parts.filter(p=>p.allowed.length),opts=partOptions(cand);
  for(const id of ['dxPart','plPart']){const el=$(id),keep=el.value;el.innerHTML=opts;if(M.byId[keep]&&M.byId[keep].allowed.length)el.value=keep}
  fillTypes('dxPart','dxType');fillTypes('plPart','plType');
  const pl=S.faults.filter(f=>f.planted);
  $('plList').innerHTML=S.hide?(pl.length?`<li>${pl.length} bug${pl.length>1?'s':''} hidden</li>`:''):pl.map(f=>{const p=M.byId[f.pid];return `<li><span>${esc(p.tag)} · ${esc(p.n)} <span class="meta">${TYPES[f.type]}</span></span><button class="btn small" data-rm="${esc(f.pid)}">Remove</button></li>`}).join('');
  $('stJobs').textContent=stats.jobs;$('stClean').textContent=stats.clean;$('stSheets').textContent=(stats.sheets||[]).length}
function showCauses(list,title){const M=S.M,box=$('causeBox');
  box.innerHTML=list.map(f=>{const p=M.byId[f.pid],c=causeFor(p,f.type);return `<div><span class="k">${esc(title)}: ${esc(p.tag)} · ${TYPES[f.type]}</span><p><b>What caused it.</b> ${esc(c.c)}</p><p><b>Proper repair.</b> ${esc(c.f)}</p></div>`}).join('');box.hidden=!list.length}

function render(){_fm=fmap(S.faults);let V=null;if(S.mode==='V'){V=simulate(S.M,S.st,S.faults)}else V={};
  drawPanels();drawSVG(S.mode==='V'?V:null);drawMeter(V)}

/* ---- jobs ---- */
function msg(t,cls){$('dxMsg').textContent=t;$('dxMsg').className='msg'+(cls?' '+cls:'')}
function resetBench(){S.st={sw:{},blown:{},relay:{},key:true};msg('');showCauses([],'')}
function loadSheet(id,kind){S.sid=id;LS.set('teb2-sheet',id);S.M=build(SH.find(s=>s.id===id));S.L=layout(S.M);S.red='BAT';S.black='N';$('sheetSel').value=id;newJob(kind||'random')}
function newJob(kind){resetBench();S.faults=[];
  if(kind==='random'){S.faults=pickFaults(S.M,S.diff)||pickFaults(S.M,1)||[]}
  S.job={kind,misses:0,done:false,shown:false,complaint:complaint(S.M,S.faults)};render()}
function check(){const j=S.job;if(!j||j.done)return;const id=$('dxPart').value,ty=$('dxType').value,p=S.M.byId[id];
  if(!S.faults.length){msg('Nothing is broken on this bench.');return}
  const hit=S.faults.find(f=>f.pid===id&&f.type===ty);
  if(hit){S.faults=S.faults.filter(f=>f!==hit);S.st.blown={};showCauses([hit],'Found');
    if(S.faults.length){msg(`Good call: ${p.tag} had ${TYPES[ty].toLowerCase()}. Repaired. Something's still wrong, keep testing.`,'ok');j.complaint=complaint(S.M,S.faults)}
    else{j.done=true;msg(`Good call: ${p.tag} had ${TYPES[ty].toLowerCase()}. Repaired. Circuit tests good.`,'ok');
      if(j.kind==='random'){stats.jobs++;if(!j.misses)stats.clean++;stats.sheets=[...new Set([...(stats.sheets||[]),S.sid])];LS.set('teb2-stats',stats)}}}
  else{j.misses++;msg(S.faults.some(f=>f.pid===id)?`${p.tag} is bad, just not that way. Test it again.`:`${p.tag} checks out fine. Keep testing.`,'bad')}
  render();if(hit)$('causeBox').hidden=false}
function giveUp(){const j=S.job;if(!j||!S.faults.length)return;const list=S.faults.slice();j.done=true;j.shown=true;msg('Here is what was wrong:','bad');render();showCauses(list,'Fault')}
function plant(){const id=$('plPart').value,ty=$('plType').value;if(!id||!ty)return;
  if(!S.job||S.job.kind!=='custom'){resetBench();S.faults=[];S.job={kind:'custom',misses:0,done:false}}
  S.faults=S.faults.filter(f=>f.pid!==id);S.faults.push({pid:id,type:ty,planted:true});S.st.blown={};S.job.done=false;S.job.complaint=complaint(S.M,S.faults);render()}

/* ---- parts finder ---- */
function find(q){q=q.trim().toLowerCase();const out=$('findRes');if(q.length<2){out.innerHTML='';return}
  const pages=Object.fromEntries(SH.map(s=>[s.id,s.pg]));const res=[];
  for(const r of IDX){if(r[1].toLowerCase().includes(q)||r[2].toLowerCase().includes(q)){res.push(r);if(res.length>=60)break}}
  out.innerHTML=res.length?res.map(r=>{const sid=r[3].slice(0,2);return `<li><span><b>${esc(r[1])}</b> ${r[2]?esc(r[2]):''}<br><span class="meta">${SECT[r[0]]} · sheet ${sid}, grid ${esc(r[3].slice(3))} · page ${pages[sid]||'?'}</span></span>${pages[sid]?`<button class="btn small" data-open="${sid}">Open ${sid}</button>`:''}</li>`}).join(''):'<li>No match in the parts index.</li>'}

/* ---- events ---- */
function toggleSw(id){S.st.sw[id]=!S.st.sw[id]}
$('svg').addEventListener('click',e=>{const t=e.target.closest('[data-node],[data-sw],[data-key]');if(!t)return;
  if(t.dataset.key)S.st.key=!S.st.key;else if(t.dataset.sw)toggleSw(t.dataset.sw);else S[S.act]=t.dataset.node;render()});
$('controls').addEventListener('click',e=>{const t=e.target.closest('button');if(!t)return;
  if(t.dataset.key)S.st.key=!S.st.key;
  if(t.dataset.sw)toggleSw(t.dataset.sw);
  if(t.dataset.fuse){S.st.blown[t.dataset.fuse]=false;render();if(S.st.blown[t.dataset.fuse])msg(`The new ${S.M.byId[t.dataset.fuse].tag} blew right away. Something's shorted.`,'bad');return}
  render()});
$('pRed').onclick=()=>{S.act='red';render()};$('pBlk').onclick=()=>{S.act='black';render()};
$('blkGnd').onclick=()=>{S.black='N';render()};
$('mV').onclick=()=>{S.mode='V';render()};$('mR').onclick=()=>{S.mode='R';render()};
$('newJob').onclick=()=>newJob('random');$('cleanJob').onclick=()=>newJob('clean');
$('anyJob').onclick=()=>{const s=SH[Math.floor(Math.random()*SH.length)];loadSheet(s.id,'random')};
$('d1').onclick=()=>{S.diff=1;LS.set('teb2-diff',1);render()};$('d2').onclick=()=>{S.diff=2;LS.set('teb2-diff',2);render()};
$('dxGo').onclick=check;$('giveUp').onclick=giveUp;$('plGo').onclick=plant;
$('dxPart').onchange=()=>fillTypes('dxPart','dxType');$('plPart').onchange=()=>fillTypes('plPart','plType');
$('plHide').onchange=e=>{S.hide=e.target.checked;render()};
$('plList').addEventListener('click',e=>{const t=e.target.closest('[data-rm]');if(!t)return;S.faults=S.faults.filter(f=>f.pid!==t.dataset.rm);S.st.blown={};S.job.complaint=complaint(S.M,S.faults);render()});
$('sheetSel').onchange=e=>loadSheet(e.target.value);
const step=d=>{const i=SH.findIndex(s=>s.id===S.sid);loadSheet(SH[(i+d+SH.length)%SH.length].id)};
$('prevSh').onclick=()=>step(-1);$('nextSh').onclick=()=>step(1);
$('findQ').addEventListener('input',e=>find(e.target.value));
$('findRes').addEventListener('click',e=>{const t=e.target.closest('[data-open]');if(!t)return;loadSheet(t.dataset.open);document.querySelector('.sheetbar').scrollIntoView({behavior:'smooth'})});

/* ---- boot ---- */
(function(){const g={};SH.forEach(s=>(g[s.id[0]]||(g[s.id[0]]=[])).push(s));
  $('sheetSel').innerHTML=Object.keys(GROUPS).filter(k=>g[k]).map(k=>`<optgroup label="${esc(GROUPS[k])}">${g[k].map(s=>`<option value="${s.id}">${s.id} · ${esc(s.t)} (p. ${s.pg})</option>`).join('')}</optgroup>`).join('');
  $('pins').innerHTML=[[1,'wht','White','Ground'],[2,'blk','Black','Clearance / marker lights'],[3,'yel','Yellow','Left turn'],[4,'red','Red','Stop lights'],[5,'grn','Green','Right turn'],[6,'brn','Brown','Tail lights'],[7,'blu','Blue','ABS / auxiliary']]
   .map(([n,k,c,f])=>`<span class="num">${n}</span><span class="row" style="gap:6px"><span class="sw-c" style="background:var(--w-${k})"></span>${c}</span><span>${f}</span>`).join('');
  loadSheet(S.sid,'random')})();
