// Sheets GC, GD, GE (pages 61–63)
SH.push(
{id:'GC',pg:61,t:'Marker lamps',z:'roof',
 note:'Roof sign: F19 feeds RLY03 (roof marker). The LCM marker output pulls in RLY03 and also feeds the cab marker LEDs E12A–E through roof connector MCOF1 and splice SPPA17A1. Roof sign lamps E22A–C share splice SPF19A2.',
 cols:[
  {f:'B',it:[['f','F19','Roof sign / BBM fuse 10A',10],['rc','RLY03','Roof marker relay 30–87','RLY03'],['k','FRC_J1:F2','FRC connector J1 pin F2'],['w','F19A2-1.0','RLY03 87 to roof sign'],['k','MCRSO:B','Roof sign connector MCRSO pin B'],['w','F19A2-0.8','MCRSO to splice'],['k','SPF19A2','Roof sign splice SPF19A2'],['w','F19A3-0.8','Splice to lamp E22A'],['L','E22A','Lamp, roof sign illumination A',5],['k','SPX03DD16','Ground splice SPX03DD16'],['w','X03DD16-1.0','Roof sign ground'],['k','MCRSO:A','Roof sign connector MCRSO pin A'],['w','X03DD16-3.0','Ground to splice pack']],e:'G:SKX03D'},
  {f:[0,7],it:[['w','F19A4-0.8','Splice to lamp E22B'],['L','E22B','Lamp, roof sign illumination B',5]],e:[0,10]},
  {f:[0,7],it:[['w','F19A5-0.8','Splice to lamp E22C'],['L','E22C','Lamp, roof sign illumination C',5]],e:[0,10]},
  {f:'B',it:[['ecu','A27 A:17','LCM marker lamp output'],['w','PA17A2-1.0','LCM to RLY03 86'],['k','FRC_J2:F12','FRC connector J2 pin F12'],['rk','RLY03','Roof marker relay coil','RLY03']],e:'G:FRC_J1:B12'},
  {f:[3,1],it:[['w','PA17A1-0.8','Marker output to roof'],['k','MCOF1:C','Roof connector MCOF1 pin C'],['w','PA17A1-0.8b','MCOF1 to splice'],['k','SPPA17A1','Splice SPPA17A1'],['w','PA17A2-0.8','Splice to E12A'],['D','E12A','Cab marker lamp E12A',1],['w','X03DF23-0.8','Lamp ground'],['k','SPX03DF22','Ground splice SPX03DF22'],['w','X03DF22-0.8','Splice to MCOF1'],['k','MCOF1:E','Roof connector MCOF1 pin E']],e:'G:X03'},
  {f:[4,4],it:[['w','PA17A3-0.8','Splice to E12B'],['D','E12B','Cab marker lamp E12B',1],['w','X03DF24-0.8','Lamp ground']],e:[4,8]}
 ]},
{id:'GD',pg:62,t:'Driving / signal lights (headlight modules)',z:'chassis',
 note:'The LCM (A27) feeds each headlight module directly: low beam, high beam, turn and marker on separate wires through the MCFC and headlamp connector FCHLL. Module grounds go to splice SPX01X90F and split connector X90:F.',
 cols:[
  {f:'B',it:[['f','F81','LCM1 fuse 20A',20],['k','FRC_J1:F1','FRC connector J1 pin F1'],['w','F81A1-3.0','F81 to LCM PWR1'],['ecu','A27 D:5','LCM low beam left output'],['w','PD5A1-1.0','Low beam to MCFC'],['k','MCFC:19','Main cab-frame connector pin 19'],['w','PD5A1-1.0b','MCFC to headlamp connector'],['k','FCHLL:3','Headlamp connector FCHLL pin 3'],['L','E26L-LB','Headlight module left, low beam',55],['k','E26L A:8','Headlamp module GND1 pin A:8'],['w','X01X90F1-2.0','Module ground'],['k','SPX01X90F','Ground splice SPX01X90F'],['w','X01X90F-2.0','Ground to split connector X90']],e:'G:X90:F'},
  {f:[0,3],it:[['ecu','A27 B:17','LCM high beam left output'],['w','PB17A2-1.0','High beam to MCFC'],['k','MCFC:20','Main cab-frame connector pin 20'],['w','PB17A2-1.0b','MCFC to headlamp connector'],['k','FCHLL:4','Headlamp connector FCHLL pin 4'],['L','E26L-HB','Headlight module left, high beam',55]],e:[0,10]},
  {f:[0,3],it:[['ecu','A27 A:6','LCM turn signal front left output'],['w','PA6A3-1.0','Turn signal to MCFC'],['k','MCFC:79','Main cab-frame connector pin 79'],['w','PA6A3-1.0b','MCFC to headlamp connector'],['k','FCHLL:7','Headlamp connector FCHLL pin 7'],['L','E26L-TRN','Headlight module left, turn signal',27]],e:[0,10]},
  {f:[0,3],it:[['ecu','A27 D:4','LCM front marker output'],['w','PD4A3-2.0','Marker feed to MCFC'],['k','MCFC:2','Main cab-frame connector pin 2'],['w','PD4A3-2.0b','MCFC to splice'],['k','SPPD4A3','Splice SPPD4A3'],['w','PD4A5-1.0','Splice to side marker'],['k','FCHLL:9','Headlamp connector FCHLL pin 9'],['D','E11LF','Lamp, side marker, left front',2],['w','X01X90F5-1.0','Marker ground']],e:'G:X90:F'}
 ]},
{id:'GE',pg:63,t:'Driving / fog lights',z:'chassis',
 note:'NT plastic bumper: the LCM fog output (D:1) runs through MCFC:75 to splice SPPD1A1 and both fog lamps E43L / E43R. The driving lamp output (A:7) uses MCFC:74. Lamps ground at split connector X92.',
 cols:[
  {f:'B',it:[['f','F83','LCM5 fuse 20A',20],['k','FRC_J2:C1','FRC connector J2 pin C1'],['w','F83A1-3.0','F83 to LCM PWR5'],['ecu','A27 D:1','LCM fog lamp output'],['w','PD1A1-1.0','Fog output to MCFC'],['k','MCFC:75','Main cab-frame connector pin 75'],['w','PD1A1-1.0b','MCFC to splice'],['k','SPPD1A1','Splice SPPD1A1'],['w','PD1A2-1.0','Splice to left lamp'],['k','FCFDL:1','Left fog lamp connector pin 1'],['L','E43L','Lamp, driving / fog D.S.',55],['w','X01X92D-1.0','Lamp ground'],['k','FCFDL:3','Left fog lamp connector pin 3'],['w','X01X92D-1.0b','Ground to split connector X92']],e:'G:X92:D'},
  {f:[0,8],it:[['w','PD1A3-1.0','Splice to right lamp'],['k','FCFDR:1','Right fog lamp connector pin 1'],['L','E43R','Lamp, driving / fog P.S.',55],['w','X01X92G-1.0','Lamp ground'],['k','FCFDR:3','Right fog lamp connector pin 3'],['w','X01X92G-1.0b','Ground to split connector X92']],e:'G:X92:G'},
  {f:[0,3],it:[['ecu','A27 A:7','LCM driving lamp output'],['w','PA7A1-1.0','Driving output to MCFC'],['k','MCFC:74','Main cab-frame connector pin 74'],['w','PA7A1-1.0b','MCFC to splice'],['k','SPPA7A1','Splice SPPA7A1'],['w','PA7A3-1.0','Splice to left lamp'],['k','FCFDL:2','Left fog lamp connector pin 2'],['L','E43L-DRV','Lamp, driving element D.S.',55]],e:[0,11]}
 ]}
);
