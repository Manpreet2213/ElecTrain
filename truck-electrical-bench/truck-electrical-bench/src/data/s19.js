// Sheets FH, GA, GB (pages 58–60)
SH.push(
{id:'FH',pg:58,t:'Dynamic steering (VDS)',z:'frame',can:{h:[2,10],l:[3,10]},
 note:'Volvo Dynamic Steering: the steering motor unit A235 takes 30A power from FE24 through FCVDS and grounds at X95:D. The gateway A234 runs on F39. They talk on CAN DL17, terminated by R91 and inside the gateway.',
 cols:[
  {f:'B',it:[['k','U01A','EFRC B+ bus'],['f','FE24','VDS fuse 30A',30],['k','EFRC.C1:F','EFRC connector C1 pin F'],['w','FE24A2-3.0','FE24 to steering connector'],['k','FCVDS:A','Steering connector FCVDS pin A'],['w','FE24A1-3.0','FCVDS to A235 A:1'],['E','A235 A:1','Front active steering unit power',15],['k','A235 A:2','Steering unit ground pin A:2'],['w','XA2A1-3.0','Steering unit ground'],['k','FCVDS:D','Steering connector FCVDS pin D'],['w','XA2A1-3.0b','Ground to split connector X95']],e:'G:X95:D'},
  {f:'I',it:[['f','F39','VDS fuse 10A',10],['k','FRC_J3:F6','FRC connector J3 pin F6'],['w','F39A1-1.0','F39 to splice SPF39A1'],['k','SPF39A1','Splice SPF39A1'],['w','F39A2-0.8','Splice to gateway A:2'],['E','A234 A:2','FAS gateway IGN power',0.3],['k','A234 B:12','Gateway ground pin B:12'],['w','XB12A1-0.8','Gateway ground'],['k','SPX12A1','Ground splice SPX12A1'],['w','XB12A3-1.0','Splice to splice pack']],e:'G:SKX03F_A'},
  {f:'C',it:[['R','A234-H','Gateway DL17 CAN-H bias',25000],['w','DL17HN1-0.8','CAN-H from gateway B:9'],['k','SPDL17H1','Splice SPDL17H1'],['w','DL17HB3-0.8','Splice to MCFC'],['k','MCFC:105','Main cab-frame connector pin 105'],['w','DL17HB3-0.8b','MCFC to FCVDS'],['k','FCVDS:B','Steering connector FCVDS pin B'],['w','DL17HB3-0.8c','FCVDS to splice'],['k','SPDL17H2','Splice SPDL17H2'],['w','DL17HN5-0.8','Splice to A235 B:3']],e:null},
  {f:'C',it:[['R','A234-L','Gateway DL17 CAN-L bias',25000],['w','DL17LN1-0.8','CAN-L from gateway B:10'],['k','SPDL17L1','Splice SPDL17L1'],['w','DL17LB3-0.8','Splice to MCFC'],['k','MCFC:106','Main cab-frame connector pin 106'],['w','DL17LB3-0.8b','MCFC to FCVDS'],['k','FCVDS:C','Steering connector FCVDS pin C'],['w','DL17LB3-0.8c','FCVDS to splice'],['k','SPDL17L2','Splice SPDL17L2'],['w','DL17LN5-0.8','Splice to A235 B:1']],e:null},
  {f:[2,10],it:[['T','R91','VDS CAN termination 120Ω',120]],e:[3,10]},
  {f:[2,1],it:[['T','A234-T','Gateway DL17 termination (B:8–B:11)',120]],e:[3,1]}
 ]},
{id:'GA',pg:59,t:'Lighting control 1/2',z:'cab',
 note:'F40 feeds the main lighting switch S01. Switch positions (LCP1, LCP2) are inputs to the light control module LCM (A27). The LCM drives lamps such as side repeater E11L and reads trailer park switch S43C.',
 cols:[
  {f:'I',it:[['f','F40','LCP / LCM / cluster fuse 5A',5],['k','FRC_J3:E7','FRC connector J3 pin E7'],['w','F40A1-0.8','F40 to splice SPF40A1'],['k','SPF40A1','Splice SPF40A1'],['w','F40A2-0.8','Splice to S01 pin 12'],['E','S01 pin 12','Main light switch backlight power',0.1],['k','S01 pin 16','Main light switch ground pin 16'],['w','X03DA16-0.8','Switch ground']],e:'G:SPX03D2'},
  {f:'5',it:[['Q','A27 B:10','LCM LCP1 input (pull-up)',2200],['w','PA1B10-0.5','LCP1 signal'],['sw','S01-LCP1','Main light switch, park position (LCP1)']],e:[0,6]},
  {f:'B',it:[['f','F81','LCM1 fuse 20A',20],['k','FRC_J1:F1','FRC connector J1 pin F1'],['w','F81A1-3.0','F81 to LCM PWR1'],['ecu','A27 D:17','LCM side repeater left output'],['w','PD17A1-0.8','Output to side repeater'],['k','MCSR1:A','Side repeater connector pin A'],['L','E11L','Lamp, side repeater D.S.',5],['k','MCSR1:B','Side repeater connector pin B']],e:'G:SPX03D5'},
  {f:'5',it:[['Q','A27 B:7','LCM trailer park input (pull-up)',2200],['w','HB7AC-0.8','Trailer park signal'],['sw','S43C','Trailer park detection switch N.C. (trailer brakes set)'],['w','X03DD10-0.8','Switch ground']],e:'G:SKX03F_C'}
 ]},
{id:'GB',pg:60,t:'Lighting control 2/2',z:'cab',
 note:'LCM power comes from F81, F78, F27, F83, F82 and F79; grounds GND1/GND2 go to SPX03D6. Brake switch S48A is an LCM input; the LCM then drives the EFRC trailer stop relay RE01 through MCFC:64.',
 cols:[
  {f:'B',it:[['f','F78','LCM2 fuse 25A',25],['k','FRC_J1:C1','FRC connector J1 pin C1'],['w','F78A1-3.0','F78 to LCM PWR2'],['E','A27 D:19','LCM power PWR2',1],['k','A27 A:21','LCM GND1 pin A:21'],['w','X03DA12-3.0','LCM ground']],e:'G:SPX03D6'},
  {f:'5',it:[['Q','A27 B:12','LCM brake switch input (pull-up)',2200],['w','PB12A1-0.5','Brake switch signal'],['k','S48A:B','Brake switch pin B'],['sw','S48A','Pressure switch, brake light N.O. (pedal down)'],['w','X03DE12-0.8','Switch ground']],e:'G:SPX03D2'},
  {f:[0,3],it:[['ecu','A27 D:3','LCM trailer brake output'],['w','PD3A1-1.0','Trailer brake signal to MCFC'],['k','MCFC:64','Main cab-frame connector pin 64'],['w','PD3A1-1.0b','MCFC to EFRC'],['k','EFRC.D1:L','EFRC connector D1 pin L'],['rk','RE01','Trailer stop relay coil (EFRC)','RE01']],e:'G:X05'},
  {f:'B',it:[['k','U01A','EFRC B+ bus'],['f','FE1','Trailer stop relay fuse 30A',30],['rc','RE01','Trailer stop relay 30–87','RE01'],['k','EFRC.A1:3','EFRC connector A1 pin 3'],['L','TRL-STOP','Trailer stop lamps',60]],e:'G:X02'}
 ]}
);
