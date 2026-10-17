// Sheets GF, GG, GH (pages 64–66)
SH.push(
{id:'GF',pg:64,t:'Tail lamps with alarm',z:'chassis',
 note:'TL_LED 60 series: the LCM tail output runs through MCFC:9, FCCE1 and tail connector CETL to splice SPPA10A3, feeding both LED tail lamps and the license lamp E39. Stop/turn come on their own wires. Grounds collect at SPX01DA5 and go to X91:A.',
 cols:[
  {f:'B',it:[['f','F82','LCM6 fuse 20A',20],['k','FRC_J2:B1','FRC connector J2 pin B1'],['w','F82A1-3.0','F82 to LCM PWR6'],['ecu','A27 A:10','LCM rear tail lamp output'],['w','PA10A4-1.0','Tail output to MCFC'],['k','MCFC:9','Main cab-frame connector pin 9'],['w','PA10A3-1.0','MCFC to chassis connector'],['k','FCCE1:13','Chassis connector FCCE1 pin 13'],['k','CETL:B','Tail light connector CETL pin B'],['w','PA10A3-1.0b','CETL to splice'],['k','SPPA10A3','Splice SPPA10A3'],['w','PA10A7-1.0','Splice to RH tail lamp'],['D','R_E10LED','RH LED tail lamp',5],['k','SPX01DA5','Ground splice SPX01DA5'],['w','X01DA5-2.0','Splice to CETL'],['k','CETL:E','Tail light connector CETL pin E'],['k','SPX01DA5A1','Ground splice SPX01DA5A1'],['w','X01X91A-2.0','Ground to split connector X91']],e:'G:X91:A'},
  {f:[0,11],it:[['w','PA10A6-1.0','Splice to license lamp'],['L','E39','Lamp, license plate illumination',5]],e:[0,14]},
  {f:[0,11],it:[['w','PA10A4-1.0b','Splice to LH tail lamp'],['D','L_E10LED','LH LED tail lamp',5],['w','X05DA6-1.0','LH tail ground']],e:[0,14]},
  {f:[0,3],it:[['ecu','A27 D:16','LCM stop / turn left rear output'],['w','PD16A4-2.0','Stop/turn to MCFC'],['k','MCFC:5','Main cab-frame connector pin 5'],['w','PD16A1-1.0','MCFC to chassis connector'],['k','FCCE1:12','Chassis connector FCCE1 pin 12'],['k','CETL:C','Tail light connector CETL pin C'],['w','PD10A2-1.0','To LH stop/turn LED'],['D','L_E10-ST','LH stop / turn LED',21]],e:[0,14]}
 ]},
{id:'GG',pg:65,t:'Back of cab lamps L1',z:'sleeper',
 note:'The LCM back-of-cab output (D:7) goes through sleeper connector MCSL1 and back-of-cab connector MCBOC to the 5th wheel lamps. The spotlight switch S76 is an LCM input. Lamp grounds return through MCSL1:F to SPX03D5.',
 cols:[
  {f:'B',it:[['f','F82','LCM6 fuse 20A',20],['k','FRC_J2:B1','FRC connector J2 pin B1'],['w','F82A1-3.0','F82 to LCM PWR6'],['ecu','A27 D:7','LCM back-of-cab lamp output'],['w','PD7A1-1.0','BOC output to sleeper connector'],['k','MCSL1:E','Sleeper connector MCSL1 pin E'],['w','PD7A1-1.0b','MCSL1 to back-of-cab connector'],['k','MCBOC:A','Back-of-cab connector MCBOC pin A'],['w','PD7A1-0.8','MCBOC to lamp E05A'],['L','E05A','5th wheel lamp',35],['w','X03FA37-0.8','Lamp ground'],['k','MCBOC:B','Back-of-cab connector MCBOC pin B'],['w','X03FA37-1.0','MCBOC to sleeper connector'],['k','MCSL1:F','Sleeper connector MCSL1 pin F'],['w','X03DE4-1.0','Ground to splice SPX03D5']],e:'G:SPX03D5'},
  {f:[0,9],it:[['w','PD7B1-0.8','To lamp E05B'],['L','E05B','Back of cab work lamp E05B',35]],e:[0,10]},
  {f:'5',it:[['Q','A27 B:5','LCM spotlight switch input (pull-up)',2200],['w','PB5A1-0.8','Spotlight switch signal'],['sw','S76','Switch, spotlights'],['w','X03DA9-0.8','Switch ground']],e:'G:SPX03D2'}
 ]},
{id:'GH',pg:66,t:'Back of cab LED lamps L3, L4, L5',z:'sleeper',
 note:'Larger sleepers: the same LCM output (D:7) feeds LED 5th-wheel lamp E05B and vendor lamps E05C. The lamp grounds collect at splice SPX03FA39 and return through MCSL1:F to SPX03D5.',
 cols:[
  {f:'B',it:[['f','F82','LCM6 fuse 20A',20],['k','FRC_J2:B1','FRC connector J2 pin B1'],['w','F82A1-3.0','F82 to LCM PWR6'],['ecu','A27 D:7','LCM back-of-cab lamp output'],['w','PD7A1-1.0','BOC output to sleeper connector'],['k','MCSL1:E','Sleeper connector MCSL1 pin E'],['w','PD7A1-0.8','MCSL1 to lamp'],['D','E05B','5th wheel lamp high (LED)',18],['w','X03FA40-1.0','Lamp ground'],['k','SPX03FA39','Ground splice SPX03FA39'],['w','X03FA37-1.0','Splice to sleeper connector'],['k','MCSL1:F','Sleeper connector MCSL1 pin F'],['w','X03DE4-1.0','Ground to splice SPX03D5']],e:'G:SPX03D5'},
  {f:[0,7],it:[['w','PD7A1-0.8b','To vendor lamp E05C'],['k','SLBOC:A','Back-of-cab lamp connector SLBOC pin A'],['D','E05C','Back of cab lamp E05C (LED)',18],['k','SLBOC:B','Back-of-cab lamp connector SLBOC pin B'],['w','X03FA39-1.0','Lamp ground']],e:[0,10]}
 ]}
);
