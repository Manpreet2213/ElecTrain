/* ===== Circuit engine: builds a sheet model, solves it, finds symptoms ===== */
const TYPES={open:'Open circuit',high:'High resistance / corrosion',short:'Short to ground',stuck:'Stuck on / welded closed',shorted:'Internal short'};
const LOADS='LDMHSXE';
const ALLOWED={w:['open','high','short'],k:['open','high'],f:['high'],cb:['high'],sw:['open','high','stuck'],ecu:['open','stuck'],
  rc:['open','high','stuck'],rn:['open','high'],rk:['open'],L:['open'],D:['open'],M:['open','shorted'],H:['open'],S:['open','shorted'],
  X:['open','shorted'],E:['open'],R:['open','shorted'],Q:[],T:['open'],ri:['high'],G:['open','high']};
const KIND={L:'Lamp',D:'LED lamp',M:'Motor',H:'Horn / speaker',S:'Solenoid',X:'Heater',E:'Module / load',R:'Sensor / resistor',Q:'Module input',
  T:'Terminating resistor',w:'Wire',k:'Connector / splice',f:'Fuse',cb:'Circuit breaker',sw:'Switch',ecu:'Module output',rc:'Relay contacts',
  rn:'Relay contacts (N.C.)',rk:'Relay coil',ri:'Battery',G:'Ground point'};
const VERB={L:['out','dim','stays on with the key and switches off'],D:['out','dim','stays on with the key and switches off'],
  M:["doesn't run",'runs slow / weak','keeps running with the key and switches off'],H:['dead','sounds weak','keeps sounding with the key and switches off'],
  S:["doesn't work (no click)",'weak / slow to engage','stays engaged with the key and switches off'],X:["doesn't heat",'heats weakly','stays on with the key and switches off'],
  E:['dead (no power)','acts up and resets (low voltage)','stays powered with the key and switches off']};

function wireR(tag){const m=/-(\d+(?:\.\d+)?)[a-z]?$/.exec(tag);const a=m?+m[1]:0.8;return 0.0258/(a>0?a:0.8)}
function isStud(tag,n){return /stud/i.test(n)||/^(X0\d|X1\d\d|X41|U01|X2\d\d|X04E|X137|X03E)/.test(tag)}
function nomR(p){
  switch(p.t){
    case 'w':return wireR(p.tag);
    case 'k':return /^SP/.test(p.tag)?0.0008:(isStud(p.tag,p.n)?0.0005:0.003);
    case 'f':case 'cb':return 0.07/p.p;
    case 'sw':case 'ecu':return 0.01;
    case 'rc':case 'rn':return 0.005;
    case 'rk':return 85;
    case 'G':return 0.002;
    case 'ri':case 'T':case 'R':case 'Q':return p.p;
    case 'L':case 'D':return p.v*p.v/p.p;
    default:return p.v/p.p;
  }
}

function build(sh){
  const ids=[],parts=[],gpts=new Set(),colCan=[],colV=[];
  sh.cols.forEach((col,c)=>{
    const n=col.it.length,row=new Array(n+1);
    const ref=r=>{const cc=ids[r[0]];if(!cc||cc[r[1]]===undefined)throw new Error(sh.id+' col '+c+' bad ref '+r);return cc[r[1]]};
    colCan[c]=col.f==='C'||(Array.isArray(col.f)&&colCan[col.f[0]]);
    colV[c]=col.f==='A'?(col.v||120):Array.isArray(col.f)?colV[col.f[0]]:12.6;
    row[0]=typeof col.f==='string'?({B:'BAT',I:'IGN','5':'V5',C:'V25',S:'EMF'+c,A:'VAC'})[col.f]:ref(col.f);
    for(let k=1;k<n;k++)row[k]='c'+c+'n'+k;
    if(col.e==null)row[n]='c'+c+'n'+n;
    else if(col.e==='N')row[n]='N';
    else if(typeof col.e==='string'){gpts.add(col.e.slice(2));row[n]=col.e}
    else row[n]=ref(col.e);
    ids[c]=row;
    col.it.forEach((it,i)=>parts.push({id:c+'.'+i,c,i,t:it[0],tag:it[1],n:it[2],p:it[3],nl:it[4],a:row[i],b:row[i+1],v:colV[c],can:colCan[c],z:sh.z}));
  });
  gpts.forEach(g=>parts.push({id:'G:'+g,c:-1,i:0,t:'G',tag:g,n:'Ground point '+g+' (to battery −)',a:'G:'+g,b:'N',v:12.6,z:sh.z}));
  // high-resistance size per column, from what the column drives
  const colLoad=sh.cols.map((col,c)=>parts.filter(p=>p.c===c&&(LOADS.includes(p.t)||'rkQRT'.includes(p.t))&&p.t!=='T').reduce((s,p)=>s+nomR(p),0));
  const pos=colLoad.filter(x=>x>0),minL=pos.length?Math.min(...pos):1;
  parts.forEach(p=>{
    const cl=p.c>=0&&colLoad[p.c]>0?colLoad[p.c]:minL;
    p.hr=sh.hr!=null&&cl<0.5?sh.hr:Math.min(5000,Math.max(0.05,cl));
    p.xcv=p.t==='R'&&/transceiver/i.test(p.n);
    p.allowed=(p.t==='R'&&(/bias/i.test(p.n)||p.xcv))?[]:(ALLOWED[p.t]||[]).filter(t=>!(p.can&&t==='high'));
  });
  // node labels
  const lab={BAT:'Battery + (BATT bus)',IGN:'IGN bus (key on)',V5:'ECU internal 5 V reference',V25:'CAN bias 2.5 V (inside modules)',VAC:'120 V AC supply (hot)',N:'Battery − (main ground)'};
  gpts.forEach(g=>lab['G:'+g]='Ground point '+g);
  sh.cols.forEach((col,c)=>{const it=parts.filter(p=>p.c===c);const row=ids[c];
    for(let k=1;k<row.length;k++){const nid=row[k];if(lab[nid])continue;const prev=it[k-1],next=it[k];
      if(prev&&prev.nl)lab[nid]=prev.nl;
      else if(prev&&prev.t==='k')lab[nid]=prev.n+' (load side)';
      else if(next&&next.t==='k')lab[nid]=next.n+' (feed side)';
      else if(prev&&prev.t==='ri')lab[nid]=prev.tag+' battery + post';
      else lab[nid]=next?'Between '+prev.tag+' and '+next.tag:prev.tag+' (end)';}
  });
  const relays=[...new Set(parts.filter(p=>p.t==='rk').map(p=>p.p))];
  return {sh,ids,parts,lab,relays,byId:Object.fromEntries(parts.map(p=>[p.id,p]))};
}

/* ---- solver ---- */
function gauss(A,b,n){
  for(let i=0;i<n;i++){let p=i,mx=Math.abs(A[i*n+i]);for(let k=i+1;k<n;k++){const v=Math.abs(A[k*n+i]);if(v>mx){mx=v;p=k}}
    if(p!==i){for(let j=0;j<n;j++){const t=A[i*n+j];A[i*n+j]=A[p*n+j];A[p*n+j]=t}const u=b[i];b[i]=b[p];b[p]=u}
    const d=A[i*n+i];if(Math.abs(d)<1e-300)continue;
    for(let k=i+1;k<n;k++){const f=A[k*n+i]/d;if(f===0)continue;for(let j=i;j<n;j++)A[k*n+j]-=f*A[i*n+j];b[k]-=f*b[i]}}
  const x=new Float64Array(n);for(let i=n-1;i>=0;i--){let s=b[i];for(let j=i+1;j<n;j++)s-=A[i*n+j]*x[j];x[i]=A[i*n+i]?s/A[i*n+i]:0}return x}
function nodal(E,fixed,inject,leak){
  const set=new Set();E.forEach(e=>{set.add(e.a);set.add(e.b)});Object.keys(inject||{}).forEach(k=>set.add(k));
  const ids=[...set].filter(n=>!(n in fixed)),ix={};ids.forEach((n,i)=>ix[n]=i);const n=ids.length;
  const G=new Float64Array(n*n),I=new Float64Array(n);for(let i=0;i<n;i++)G[i*n+i]=leak;
  for(const e of E){const g=1/e.R,fa=e.a in fixed,fb=e.b in fixed;if(fa&&fb)continue;
    if(!fa&&!fb){const a=ix[e.a],b=ix[e.b];if(a===b)continue;G[a*n+a]+=g;G[b*n+b]+=g;G[a*n+b]-=g;G[b*n+a]-=g}
    else if(fa){const b=ix[e.b];G[b*n+b]+=g;I[b]+=g*fixed[e.a]}else{const a=ix[e.a];G[a*n+a]+=g;I[a]+=g*fixed[e.b]}}
  if(inject)for(const k in inject)if(k in ix)I[ix[k]]+=inject[k];
  const x=gauss(G,I,n),V={...fixed};ids.forEach((nm,i)=>V[nm]=x[i]);return V}

function fmap(faults){const m={};for(const f of faults)(m[f.pid]||(m[f.pid]={}))[f.type]=true;return m}
function elemR(p,st,fl,ohm){
  fl=fl||{};if(fl.open)return null;let R;
  switch(p.t){
    case 'f':case 'cb':if(st.blown[p.id])return null;R=nomR(p);break;
    case 'sw':if(!fl.stuck&&!st.sw[p.id])return null;R=0.01;break;
    case 'ecu':if(!fl.stuck&&(ohm||!st.sw[p.id]))return null;R=0.01;break;
    case 'rc':if(!fl.stuck&&(ohm||!st.relay[p.p]))return null;R=0.005;break;
    case 'rn':if(!ohm&&st.relay[p.p])return null;R=0.005;break;
    default:R=nomR(p);
  }
  if(fl.shorted)R=p.t==='R'?0.5:0.03;
  if(fl.high)R+=p.hr;
  return R;
}
function edges(M,st,faults,ohm){
  const fm=fmap(faults),E=[];
  for(const p of M.parts){const fl=fm[p.id];if(fl&&fl.short)E.push({a:p.b,b:'N',R:0.01,id:p.id+'#s'});
    const R=elemR(p,st,fl,ohm);if(R!=null)E.push({a:p.a,b:p.b,R,id:p.id})}
  if(st.key)E.push({a:'BAT',b:'IGN',R:0.004,id:'KEY'});
  return E}
const FIXED={BAT:12.6,N:0,V5:5,V25:2.5,VAC:120};
function fixedFor(M){const f={...FIXED};M.sh.cols.forEach((c,i)=>{if(c.f==='S')f['EMF'+i]=12.7});return f}
function simulate(M,st,faults){
  let V;const fx=fixedFor(M);
  for(let it=0;it<12;it++){const E=edges(M,st,faults,false);V=nodal(E,fx,null,1e-9);let ch=false;
    for(const p of M.parts){
      if((p.t==='f'||p.t==='cb')&&!st.blown[p.id]){const e=E.find(x=>x.id===p.id);if(e&&Math.abs(V[p.a]-V[p.b])/e.R>p.p*1.05){st.blown[p.id]=true;ch=true}}
      if(p.t==='rk'){const e=E.find(x=>x.id===p.id),v=e?Math.abs(V[p.a]-V[p.b]):0,on=!!st.relay[p.p];
        if(!on&&v>=7){st.relay[p.p]=true;ch=true}else if(on&&v<4){st.relay[p.p]=false;ch=true}}}
    if(!ch)break}
  return V}
function ohms(M,st,faults,red,black){if(red===black)return 0;const E=edges(M,st,faults,true);const V=nodal(E,{[black]:0},{[red]:1},1e-10);const r=V[red];return r==null?Infinity:r}

/* ---- observation & symptoms ---- */
function stateOn(M){const s={sw:{},blown:{},relay:{},key:true};M.parts.forEach(p=>{if(p.t==='sw'||p.t==='ecu')s.sw[p.id]=true});return s}
function stateOff(){return {sw:{},blown:{},relay:{},key:false}}
function observe(M,st,faults){
  const V=simulate(M,st,faults),fm=fmap(faults),o={P:{},Q:{},X:{},relay:{...st.relay},blown:Object.keys(st.blown).filter(k=>st.blown[k])};
  for(const p of M.parts){
    if(LOADS.includes(p.t)){const R=elemR(p,st,fm[p.id],false);o.P[p.id]=R?Math.pow(V[p.a]-V[p.b],2)/R:0}
    else if(p.t==='Q'&&!p.can){const nd=p.a==='V5'?p.b:p.a;o.Q[p.id]=V[nd]||0}
    else if(p.xcv)o.X[p.id]=V[p.a]||0}
  if(M.sh.can){const h=M.ids[M.sh.can.h[0]][M.sh.can.h[1]],l=M.ids[M.sh.can.l[0]][M.sh.can.l[1]];
    o.canV=[V[h]||0,V[l]||0];o.canR=ohms(M,stateOff(),faults,h,l)}
  return o}
function goodObs(M){if(!M._good)M._good={on:observe(M,stateOn(M),[]),off:observe(M,stateOff(),[])};return M._good}
function complaint(M,faults){
  if(!faults.length)return null;const g=goodObs(M);
  const on=observe(M,stateOn(M),faults),off=observe(M,stateOff(),faults),msg=[];
  const bOff=off.blown.filter(id=>!g.off.blown.includes(id)),bOn=on.blown.filter(id=>!bOff.includes(id)&&!g.on.blown.includes(id));
  bOff.forEach(id=>msg.push('Fuse '+M.byId[id].tag+' blows as soon as a new one goes in, even with the key off'));
  bOn.forEach(id=>msg.push('Fuse '+M.byId[id].tag+' blows when the circuit is switched on'));
  if(!msg.length){
    for(const p of M.parts){if(!LOADS.includes(p.t))continue;const pg=g.on.P[p.id];if(!(pg>1e-6))continue;
      const r=on.P[p.id]/pg,vb=VERB[p.t];
      if(r<0.05)msg.push(p.n+': '+vb[0]);else if(r<0.72)msg.push(p.n+': '+vb[1]);
      if(off.P[p.id]>0.3*pg&&g.off.P[p.id]<0.1*pg)msg.push(p.n+': '+vb[2]);}
    M.relays.forEach(r=>{if(g.on.relay[r]&&!on.relay[r])msg.push('Relay '+r+" doesn't click when it should");
      if(!g.off.relay[r]&&off.relay[r])msg.push('Relay '+r+' stays clicked in with the key off')});
    for(const id in g.on.Q){const pairs=[[on.Q[id],g.on.Q[id]],[off.Q[id],g.off.Q[id]]];
      const bad=pairs.find(([f,gd])=>Math.abs(f-gd)>Math.max(0.4,0.15*Math.abs(gd)));
      if(bad)msg.push('Scan tool live data: '+M.byId[id].n+' reads '+bad[0].toFixed(2)+' V')}
    for(const id in g.on.X){if(Math.abs(on.X[id]-g.on.X[id])>0.5)msg.push(M.byId[id].n.replace(/ CAN-[HL] transceiver/i,'')+' is not communicating on the data link')}
    if(M.sh.can){const rg=g.on.canR,rf=on.canR;
      if(Math.abs(rf-rg)>0.15*rg||Math.abs(on.canV[0]-g.on.canV[0])>0.3||Math.abs(on.canV[1]-g.on.canV[1])>0.3)
        msg.push(rf>rg*1.3&&rf<1e4?'Intermittent data link errors: modules drop off-line now and then (U-codes)':'Data link down: modules on this bus lose communication, dash full of warning lights');}
  }
  if(!msg.length)return null;
  const uniq=[...new Set(msg)];return uniq.slice(0,4).join('. ')+(uniq.length>4?'. More problems show up too':'')+'.';
}
function detectable(M){if(!M._det){M._det=[];for(const p of M.parts)for(const t of p.allowed)if(complaint(M,[{pid:p.id,type:t}]))M._det.push({pid:p.id,type:t})}return M._det}
function pickFaults(M,count,rnd){
  rnd=rnd||Math.random;const det=detectable(M);if(!det.length)return null;
  for(let tries=0;tries<40;tries++){const fs=[],used=new Set();
    for(let i=0;i<count;i++){const f=det[Math.floor(rnd()*det.length)];if(used.has(f.pid))continue;used.add(f.pid);fs.push({...f})}
    if(fs.length===count&&complaint(M,fs))return fs}
  return null}

/* ---- causes ---- */
const SPOT={frame:'the frame rail edge',engine:'an engine bracket',cab:'a seat-track screw',dash:'a dash support bracket',door:'the door hinge',trailer:'the fifth-wheel plate',roof:'the roof panel edge',sleeper:'the bunk frame',chassis:'a cab mount bracket',frc:'the FRC mounting bracket'};
const WIRE_OPEN={frame:'The harness rubbed on the frame rail where a P-clamp broke. Vibration wore through the insulation and the copper broke inside.',
  engine:['The wire was routed too close to the exhaust. Heat cooked the insulation brittle and the wire cracked and broke at a bend.','Engine vibration fatigued the wire where the harness wasn\u2019t clipped; it broke right behind the connector.'],
  cab:['A screw from an aftermarket install (ELD or CB mount) went straight through the harness and cut the wire.','The harness under the floor mat got crushed by the seat track; the wire broke inside the insulation.'],
  dash:['A screw from an aftermarket install behind the dash cut the wire.','The wire was stretched tight when the dash panel was pulled for service and it snapped inside the insulation.'],
  door:'The wire broke inside the door-jamb boot from years of the door opening and closing (flex fatigue).',
  trailer:'The trailer was dropped without unplugging the cable; the wire pulled out of its terminal inside the plug.',
  roof:'Water leaked in at a roof light and corroded the copper until it broke inside the insulation.',
  sleeper:'The harness got pinched under the bunk lid hinge and the wire broke.',
  chassis:'Ice and road debris snagged the harness under the cab and stretched the wire until it broke.',
  frc:'The wire broke right behind the FRC terminal from strain when the fuse box was pulled for service.'};
function pickV(v,p,type){if(!Array.isArray(v))return v;let h=0;for(const ch of p.id+type+p.tag)h=(h*31+ch.charCodeAt(0))>>>0;return v[h%v.length]}
function zoneOf(p){const t=p.tag;if(/^FRC_/.test(t))return 'frc';if(/^EFRC|^U01/.test(t))return 'frame';if(/^MCFC|^MCP?OPT/.test(t))return 'chassis';if(/^(TC0|TCEXT|TCBB|FCTC|STOP_|GND_W|MRK_|CLR_|LT_|RT_|AUX_)/.test(t))return 'trailer';if(p.z==='trailer')return 'frame';return p.z||'cab'}
function causeFor(p,type){
  const z=zoneOf(p),spot=SPOT[z]||'a sharp metal edge',nm=p.tag;
  const C=(c,f)=>({c,f});
  switch(p.t){
    case 'w':
      if(type==='open')return C(pickV(WIRE_OPEN[z]||WIRE_OPEN.cab,p,type),'Cut out the damaged section, splice in the same gauge wire with sealed heat-shrink butt connectors, and clamp the harness so it can’t move.');
      if(type==='high')return C('Water got in through a nick in the insulation and corrosion wicked up inside the wire. Most strands turned green and broke, so only a few strands carry the current.','Replace the wire back to clean, shiny copper and seal the splices with adhesive-lined heat shrink.');
      return C('The insulation chafed through on '+spot+' and the copper is touching metal, so current goes straight to ground.','Repair the wire, protect it with loom and re-route or clamp it so it can’t rub again. Only put in a new fuse after the short is fixed.');
    case 'k':
      if(/^SP/.test(nm))return type==='open'?C('The splice crimp inside the harness tape corroded and cracked, so the wires no longer connect there.','Cut out the old splice and make a new crimped, soldered and heat-shrunk splice.'):C('Water got under the harness tape and the splice corroded, adding resistance.','Cut out the corroded splice back to clean copper and make a new sealed splice.');
      if(isStud(nm,p.n))return type==='open'?C('The nut on '+nm+' vibrated loose and the ring terminal is barely touching the stud.','Clean the stud and ring terminal to bare metal, torque the nut, and coat it with corrosion inhibitor.'):C('Ring terminal at '+nm+' was installed over paint and rust; corrosion built up between terminal and stud.','Clean stud and terminal to bare metal, torque the nut, coat with corrosion inhibitor.');
      if(type==='open')return C(z==='trailer'?'A pin in the 7-way is spread open and no longer grips — someone forced a test probe into it.':'A terminal backed out of '+nm+' (its lock/TPA wasn’t seated) so the pin doesn’t make contact.','Push the terminal in until it locks and install the secondary lock. Replace the terminal if its tang is broken.');
      return C(z==='trailer'?'Classic 7-way corrosion: road salt got into the plug and the pins are green and crusty.':'The seal on '+nm+' was missing. Water got in and the terminals corroded (white/green fuzz).','Clean with contact cleaner, replace corroded terminals and the seal. Grease goes on the seal, not inside the terminals.');
    case 'f':return C('The fuse terminals in the box are spread and loose (the fuse wiggles). Heat discoloured the socket and resistance went up.','Replace the fuse-box terminal (or the fuse box), not just the fuse. Look for melted plastic.');
    case 'cb':return C('The breaker contacts are burned from tripping many times.','Replace the circuit breaker and find out why it kept tripping.');
    case 'sw':{const press=/pressure|position|sensor|hood|level|temp/i.test(p.n);
      if(type==='open')return C(press?'The switch diaphragm/plunger failed so the contacts never close.':'The contacts inside the switch burned out. It clicks but never closes.','Replace the switch.');
      if(type==='high')return C('The switch contacts are pitted and dirty, so they make poor contact (it works if you wiggle it).','Replace the switch. Measure the voltage drop across it: more than about 0.2 V means bad contacts.');
      return C(press?'The switch is stuck closed internally (plunger seized with dirt or water).':'The switch contacts welded together, so it is always ON.','Replace the switch.');}
    case 'ecu':return type==='open'?C('The output driver inside the module burned out, usually after an earlier short downstream.','Find and fix any short first, then replace and program the module.'):C('The module’s output driver failed shorted, so the output is always on.','Replace and program the module. Check the load for a short that may have caused it.');
    case 'rc':case 'rn':
      if(type==='open')return C('The relay contacts burned away from arcing. The coil clicks but the contacts don’t close.','Replace the relay.');
      if(type==='high')return C('The relay contacts are pitted. It clicks, but there is a big voltage drop across pins 30–87.','Replace the relay. Check the load current isn’t too high for it.');
      return C('The relay contacts welded shut after an overload, so the relay stays on.','Replace the relay and look for what overloaded it (a shorted load).');
    case 'rk':return C('The relay coil burned open, so there is no click at all.','Replace the relay. Coil should read about 85 Ω between 86 and 85.');
    case 'L':return C('The bulb filament broke from road vibration and the socket is corroded.','Replace the bulb, clean the socket and add dielectric grease.');
    case 'D':return C('Water got past the lens seal and corroded the LED circuit board inside.','Replace the LED lamp. Check the seal and connector.');
    case 'M':return type==='open'?C('The motor brushes wore out (or the armature winding is open).','Replace the motor.'):C('Water got in and the motor windings shorted. It pulls huge current and blows the fuse.','Replace the motor, then replace the fuse.');
    case 'H':return C('The coil inside burned open (water got inside).','Replace it.');
    case 'S':return type==='open'?C('The solenoid coil burned open.','Replace the solenoid (or the valve block).'):C('The solenoid coil has shorted turns and pulls too much current.','Replace the solenoid, then the fuse.');
    case 'X':return type==='open'?C('The heating element burned open.','Replace the heater element.'):C('The heating element shorted to its housing.','Replace the heater, then the fuse.');
    case 'E':return C('The module’s internal power supply failed, so it doesn’t wake up.','Replace and program the module after checking its power and ground.');
    case 'R':return type==='open'?C('The sensor element cracked internally from heat and vibration (open).','Replace the sensor.'):C('Water in the sensor connector bridged the pins, which shorts the sensor.','Dry and clean the connector, replace the seal, and replace the sensor if needed.');
    case 'T':return C('The 120 Ω terminating resistor is missing or cracked. Someone unplugged it, or it was damaged.','Install a new terminating resistor. CAN-H to CAN-L should then read about 60 Ω with the key off.');
    case 'ri':return C('This battery is sulfated (or has a weak cell). It reads 12.6 V at rest but drops hard under load and drags the others down.','Load-test each battery on its own and replace the weak ones as a matched set.');
    case 'G':return type==='open'?C('The ground ring terminal at '+nm+' came loose. Everything grounded there loses its return path.','Clean the stud/splice pack to bare metal, re-terminate and torque it.'):C('Corrosion at ground point '+nm+' adds resistance for every circuit that uses it.','Clean the stud/splice pack to bare metal, re-terminate and torque it.');
  }
  return C('Wear and corrosion.','Repair or replace the part.');
}
if(typeof module!=='undefined')module.exports={detectable,TYPES,KIND,build,simulate,ohms,complaint,pickFaults,causeFor,stateOn,stateOff,goodObs,observe,elemR,nomR};
