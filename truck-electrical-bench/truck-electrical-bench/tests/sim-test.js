global.SH=[];const fs=require('fs');
for(const f of fs.readdirSync(__dirname+'/../src/data').sort()) if(/^s\d+\.js$/.test(f)) eval(fs.readFileSync(__dirname+'/../src/data/'+f,'utf8'));
const E=require('../src/engine.js');
let tot=0,det=0,bad=[];const t0=Date.now();
for(const sh of SH){
  let M;try{M=E.build(sh)}catch(e){console.log('BUILD',e.message);continue}
  const g=E.goodObs(M);
  const issues=[];
  if(g.on.blown.length)issues.push('good ON blows '+g.on.blown.map(i=>M.byId[i].tag));
  if(g.off.blown.length)issues.push('good OFF blows '+g.off.blown.map(i=>M.byId[i].tag));
  for(const id in g.on.P){const p=M.byId[id];const nom=p.v*p.v/E.nomR(p);if(g.on.P[id]<0.3*nom)issues.push('weak '+p.tag+' '+(g.on.P[id]/nom).toFixed(2))}
  if(M.relays.some(r=>!g.on.relay[r]))issues.push('relay not on: '+M.relays.filter(r=>!g.on.relay[r]));
  if(sh.can)issues.push('canR='+g.on.canR.toFixed(1)+' V='+g.on.canV.map(v=>v.toFixed(2)));
  let n=0,d=0,und=[];
  for(const p of M.parts)for(const t of p.allowed){n++;const c=E.complaint(M,[{pid:p.id,type:t}]);if(c)d++;else und.push(p.tag+':'+t)}
  tot+=n;det+=d;
  console.log(sh.id.padEnd(3),('parts '+M.parts.length).padEnd(9),(d+'/'+n).padEnd(8),issues.join('; '),und.length?' UNDET: '+und.slice(0,8).join(' ')+(und.length>8?' …'+und.length:''):'');
}
console.log('total',det+'/'+tot,'time',Date.now()-t0,'ms');
