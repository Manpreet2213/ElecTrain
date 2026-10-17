// Sheets HJ, HK, HL (pages 80–82)
SH.push(
{id:'HJ',pg:80,t:'Auxiliary 12V park cooling system L4E',z:'sleeper',hr:0.15,
 note:'The park cooler A186 runs from a separate auxiliary battery G01F: the compressor through FM_A5 (80A), the condenser fan M55 and blower through FFB06A (25A). It grounds to frame stud X01F. A battery monitor A61A watches the truck battery through FM08A.',
 cols:[
  {f:'S',it:[['ri','G01F','Auxiliary battery G01F (internal resistance)',0.01],['w','FMA5AA1-50.0','Aux battery to aux AC fuse'],['f','FM_A5','Fuse, aux AC 80A',80],['w','FMA5B1-19.0','Fuse to cooler connector'],['k','SLCO2:1','Cooler connector SLCO2 pin 1'],['E','A186 B:1','Park cooler compressor power',40],['k','A186 C:1','Park cooler ground pin C:1'],['w','XA186C1-19.0','Cooler ground'],['k','SLCO1:1','Cooler connector SLCO1 pin 1'],['w','XA186C1-50.0','Ground to frame rail stud']],e:'G:X01F'},
  {f:[0,1],it:[['w','FFB06A3-3.0','Aux battery to park heater fuse'],['f','FFB06A','Fuse, aux batt to park heater 25A',25],['w','FFB06A5-3.0','Fuse to cooler connector'],['k','SLCO1:A','Cooler connector SLCO1 pin A'],['k','SPFFB06','Splice SPFFB06'],['ecu','A186 A:H','Cooler condenser fan output'],['w','GM55AA1-3.0','Fan feed'],['k','SLCO1:3','Cooler connector SLCO1 pin 3'],['M','M55','Condenser fan, parking cooler',8],['k','SLCO1:2','Cooler connector SLCO1 pin 2'],['w','GM55BA1-3.0','Fan ground back to A186']],e:[0,7]},
  {f:'B',it:[['f','FM08A','Truck battery to battery monitor fuse 5A',5],['w','FM08AA1-1.0','Fuse to battery monitor'],['E','A61A:8','Battery monitor (Midtronics) power',0.1],['k','A61A:1','Battery monitor ground pin 1'],['w','X01FA2-1.0','Monitor ground']],e:'G:X01F'}
 ]},
{id:'HK',pg:81,t:'Sleeper climate control L3, L4, L5',z:'sleeper',
 note:'Sleeper HVAC: F18 (30A) feeds LECM power feed 3, which runs the BLDC blower in HVAC unit E32. Fan selector S04 is an LECM input. RLY41 only lets the parking heater run when the park brake switch is closed.',
 cols:[
  {f:'B',it:[['f','F18','LECM HVAC fan fuse 30A',30],['k','FRC_J2:E9','FRC connector J2 pin E9'],['w','F18A1-3.0','F18 to sleeper connector'],['k','MCSL2:G','Sleeper connector MCSL2 pin G'],['w','F18B10-3.0','To LECM B:10'],['E','A46 B:10','LECM power feed 3 (fan)',3],['k','A46 A:1','LECM ground pin A:1'],['w','X03FA110-0.8','LECM ground']],e:'G:SPX03FA55'},
  {f:[0,5],it:[['ecu','A46 A:12','LECM HVAC fan speed output'],['w','GA12A1-0.8','Fan output to splice'],['k','SPGB12A1','Splice SPGB12A1'],['w','GB12A2-3.0','Splice to HVAC unit'],['M','E32-BLDC','Sleeper HVAC blower (BLDC)',10],['w','X03FA53-3.0','Blower ground'],['k','SPX03FA52','Ground splice SPX03FA52'],['w','X03FA52-3.0','Splice to ground']],e:'G:SPX03FA22'},
  {f:'5',it:[['Q','A46 A:16','LECM fan selector input (pull-up)',2200],['w','GA16A1-0.8','Selector signal'],['k','MCSL2:J','Sleeper connector MCSL2 pin J'],['sw','S04','Switch, climate fan selector (speed up)'],['w','X03FA76-0.8','Switch ground']],e:'G:SPX03FA22'},
  {f:'B',it:[['ecu','A46 B:3','LECM parking heater power output'],['w','FB03A1-2.0','Output to splice SPFB03A1'],['k','SPFB03A1','Splice SPFB03A1'],['rc','RLY41','Relay, park brake 30–87','RLY41'],['w','GFA1-2.0','RLY41 87 to parking heater'],['E','E82A:F','Parking heater run enable',2]],e:'G:SPX03FA55'},
  {f:[3,3],it:[['w','FB03B1-0.8','Splice to RLY41 86'],['rk','RLY41','Relay, park brake coil','RLY41'],['w','CB11A4-0.8','RLY41 85 to park brake circuit'],['k','MCSL2:K','Sleeper connector MCSL2 pin K'],['k','SPCB11A1','Splice SPCB11A1'],['sw','S43','Park brake pressure switch (brakes set)'],['w','X03DA5-0.8','Switch ground']],e:'G:SPX03D2'}
 ]},
{id:'HL',pg:82,t:'Auxiliary 12V park cooling system L4 and L5',z:'sleeper',hr:0.15,
 note:'L4/L5 park cooler: same A186 cooler on the auxiliary battery G01F, plus the LVD power separator A131A, which connects the truck battery to the aux battery for charging.',
 cols:[
  {f:'S',it:[['ri','G01F','Auxiliary battery G01F (internal resistance)',0.01],['w','KFMA5A1-50.0','Aux battery to aux AC fuse'],['f','FM_A5','Fuse, aux AC 80A',80],['w','KFMA5A1-19.0','Fuse to cooler connector'],['k','SLCO2:1','Cooler connector SLCO2 pin 1'],['E','A186 B:1','Park cooler compressor power',40],['k','A186 C:1','Park cooler ground pin C:1'],['w','X01FA1-19.0','Cooler ground'],['k','SLCO1:1','Cooler connector SLCO1 pin 1'],['w','X01FA1-50.0','Ground to frame rail stud']],e:'G:X01F'},
  {f:'B',it:[['w','UGG01A2-81.0','Truck battery to power separator'],['ecu','A131A','LVD power separator (closed = charging aux battery)'],['w','UGG06FA1-81.0','Power separator to aux battery']],e:[0,1]},
  {f:[0,1],it:[['w','FFB06A1-3.0','Aux battery to park heater fuse'],['f','FFB06A','Fuse, aux batt to park heater 25A',25],['w','FFB06A2-3.0','Fuse to cooler connector'],['k','SLCO1:A','Cooler connector SLCO1 pin A'],['k','SPFFB06A1','Splice SPFFB06A1'],['w','FFB06A4-3.0','Splice to A186 A:A'],['E','A186 A:A','Park cooler blower power',6]],e:[0,7]}
 ]}
);
