// Sheets MC, NA, ND (pages 107–109)
SH.push(
{id:'MC',pg:107,t:'Trailer cables / body builder box',z:'trailer',
 note:'Body builder junction box TCBB02 sits between the EFRC trailer outputs and the extension cable TCEXT. Each circuit passes through a pair of terminals (A-1/A-2 ground, B-1/B-2 stop ... G-1/G-2 right turn).',
 cols:[
  {f:'B',it:[['k','U01A','EFRC B+ bus'],['f','FE21','Trailer right turn fuse 20A',20],['ecu','A27 A:4','LCM right turn trailer output (flasher on)'],['k','EFRC.A2:A','EFRC connector A2 pin A'],['w','RT_GN-3.0','Right turn wire (green)'],['k','TCBB02:G-1','Junction box terminal G-1'],['k','TCBB02:G-2','Junction box terminal G-2'],['w','RT_GN-3.0b','Junction box to extension'],['k','TCEXT.A2:A','Extension cable connector, right turn'],['L','TRL-RT','Trailer right turn lamps',42],['k','TCEXT.A3:A','Extension cable connector, ground'],['w','GND_W-8.0b','Junction box ground (white)'],['k','TCBB02:A-2','Junction box terminal A-2'],['k','TCBB02:A-1','Junction box terminal A-1'],['w','GND_W-8.0','Ground to trailer cable connector'],['k','FCTC:A','Trailer cable connector FCTC pin A']],e:'G:X04'},
  {f:[0,1],it:[['f','FE2','Relay trailer clearance fuse 20A',20],['rc','RE02','Relay, trailer clearance 30–87','RE02'],['k','EFRC.A1:1','EFRC connector A1 pin 1'],['w','CLR_SB-3.0','Clearance wire (black)'],['k','TCBB02:C-1','Junction box terminal C-1'],['k','TCBB02:C-2','Junction box terminal C-2'],['k','TCEXT.A1:1','Extension cable connector, clearance'],['L','TRL-CLR','Trailer clearance lamps',30]],e:[0,10]},
  {f:'B',it:[['ecu','A27 D:14','LCM trailer clearance output'],['w','PD14A1-0.8','Clearance signal'],['k','MCFC:71','Main cab-frame connector pin 71'],['k','EFRC.D1:D','EFRC connector D1 pin D'],['rk','RE02','Relay, trailer clearance coil','RE02']],e:'G:X05'}
 ]},
{id:'NA',pg:108,t:'Auxiliary switches',z:'dash',
 note:'Aux switch S104A takes LVD power from F08 through splice SPF08A1 and feeds auxiliary connector X17A pin A for customer equipment (ground X17A pin B through SPX03FA4). Each switch is lit from the ILLUM bus.',
 cols:[
  {f:'B',it:[['f','F08','Aux sw 1 & 2 / brightwork fuse 15A',15],['k','FRC_J2:B11','FRC connector J2 pin B11'],['w','F08A1-3.0','F08 to splice SPF08A1'],['k','SPF08A1','Splice SPF08A1'],['w','F08A2-3.0','Splice to switch S104A'],['sw','S104A','Switch, aux 1'],['w','FE11AA-3.0','S104A to aux connector'],['k','X17A:A','Auxiliary connector 1 pin A'],['E','X17A','Customer accessory on aux 1 (e.g. work light)',6],['k','X17A:B','Auxiliary connector 1 pin B'],['w','X03DM5-3.0','Accessory ground to splice'],['k','SPX03FC5','Ground splice SPX03FC5'],['w','X03DS1-3.0','Splice to splice pack']],e:'G:SKX03F_C'},
  {f:[0,4],it:[['w','F08A3-3.0','Splice to switch S104B'],['sw','S104B','Switch, aux 2'],['w','FE11AA1-3.0','S104B to aux connector'],['k','X17B:A','Auxiliary connector 2 pin A'],['E','X17B','Customer accessory on aux 2',6],['k','X17B:B','Auxiliary connector 2 pin B'],['w','X03DM4-3.0','Accessory ground']],e:[0,11]},
  {f:'B',it:[['ecu','ILLUM','Dash illumination supply (dimmer)'],['k','SK141B:K','Illumination splice SK141B pin K'],['w','PBAK1-0.8','Illumination to S104A'],['D','S104A-LED','Aux switch 1 illumination',0.3],['w','X03FA41-2.0','Switch ground'],['k','SPX03FA4','Ground splice SPX03FA4'],['w','X03FA11-2.0','Splice to splice pack']],e:'G:SKX03F_A'}
 ]},
{id:'ND',pg:109,t:'Heavy duty power lift gate',z:'frame',hr:0.03,
 note:'The lift gate gets battery power through circuit breaker FEM03A (32 mm² cable) to connector X62. Its ground runs back to frame stud X01F and through a fusible link (400A equivalent) to battery negative. A lift gate motor draws 150A+, so tiny resistance matters.',
 cols:[
  {f:'B',it:[['w','G01A-32.0','Battery to lift gate breaker'],['cb','FEM03A','Circuit breaker, lift gate 150A',150],['w','G01A1-32.0','Breaker to lift gate connector'],['k','X62:A','Connector, tail lift preparation'],['M','LIFTGATE','Lift gate pump motor',150],['k','X62B','Connector, lift gate GND'],['w','-32.0','Lift gate ground cable'],['k','X01F','Frame rail ground stud X01F'],['w','X01D2-8.0','Frame stud to fusible link'],['k','FL-400','Fusible link, 400A equivalent'],['w','X01D1-50.0','Fusible link to battery negative']],e:'N'}
 ]}
);
