// Sheets BM, BP, BY (pages 25–27)
SH.push(
{id:'BM',pg:25,t:'Bodybuilder module 2016 (BBM) – remote start',z:'cab',
 note:'BBM A36 is powered by F53. Remote start only works with the hood closed: hood tilt switch S89 feeds BBM B:1, then the BBM drives RLY12, which sends start power to the starter.',
 cols:[
  {f:'B',it:[['f','F53','BBM / IC fuse 5A',5],['k','FRC_J2:E4','FRC connector J2 pin E4'],['w','F53A1-0.8','F53 to BBM A:13'],['k','SPFE7A1','Splice SPFE7A1'],['E','A36 A:13','Body builder module BAT',0.5],['w','X03DD15-0.8','BBM ground A:12']],e:'G:SKX03D'},
  {f:'B',it:[['f','F44','Key switch fuse 20A',20],['w','F44A8-2.0','Start feed to hood switch'],['k','MCFC:121','Main cab-frame connector pin 121'],['sw','S89','Hood tilt position switch (hood closed)'],['w','F44B8-2.0','Hood switch return'],['k','MCFC:66','Main cab-frame connector pin 66'],['w','F44B4-1.0','To BBM B:1'],['Q','A36 B:1','BBM remote start enable input',2000]],e:[0,5]},
  {f:'B',it:[['ecu','A36','BBM remote start relay driver'],['w','MB1B1-0.8','BBM to RLY12 86'],['k','FRC_J5:B5','FRC connector J5 pin B5'],['rk','RLY12','Open remote start relay coil','RLY12']],e:'G:FRC_J5:E5'},
  {f:[1,2],it:[['k','FRC_J5:B4','FRC connector J5 pin B4'],['rc','RLY12','Remote start relay 30–87','RLY12'],['k','FRC_J5:A5','FRC connector J5 pin A5'],['w','F44A7-1.0','RLY12 87 to start splice SPF44A2'],['S','M04-50','Starter solenoid terminal 50',12]],e:'G:X02'}
 ]},
{id:'BP',pg:26,t:'ISX-G fuel system',z:'engine',
 note:'On the ISX-G (natural gas) the fuel filter module A147 is fed from FE5 in the EFRC. FE5 also feeds relay RE06, which the module switches. A147 sends the fuel level to the cluster.',
 cols:[
  {f:'I',it:[['f','FE5','ACM / EMS fuse 5A',5],['k','EFRC.D2:A','EFRC connector D2 pin A'],['w','FE5A1-1.0','FE5 to splice SPFE5A1'],['k','SPFE5A1','Splice SPFE5A1'],['w','FE5A4-1.0','Splice to A147 A:D'],['E','A147 A:D','Fuel filter module BAT+',0.5],['w','X01X03B-1.0','Module ground A:B']],e:'G:X03'},
  {f:[0,4],it:[['w','FE5A3-1.0','Splice to A147 A:C'],['Q','A147 A:C','Fuel filter module IGN input',2000]],e:[0,6]},
  {f:[0,4],it:[['w','FE5A2-1.0','Splice to RE06 86'],['k','EFRC.C5:F','EFRC connector C5 pin F'],['rk','RE06','Relay RE06 coil','RE06'],['k','EFRC.C5:D','EFRC connector C5 pin D'],['w','HA19AE2-1.0','RE06 85 to splice'],['k','SPHA19AE','Splice SPHA19AE'],['ecu','A147 A:E','Fuel module relay driver (low side)']],e:'G:X03'},
  {f:'5',it:[['ecu','A147 A:H','Fuel module fuel level output'],['w','HC7AB-0.8','Fuel level to MCFC'],['k','MCFC:56','Main cab-frame connector pin 56'],['Q','A03 C:5','Cluster fuel level input',10000]],e:'G:SPX03D5'}
 ]},
{id:'BY',pg:27,t:'Cummins ADEPT',z:'cab',can:{h:[2,2],l:[3,2]},
 note:'ADEPT control unit A320: battery through F67 (PCC), ignition through F31 (Cummins IGN 1), ground at SKX03F_C, and talks on the J1939 data link.',
 cols:[
  {f:'B',it:[['f','F67','PCC fuse 5A',5],['k','FRC_J2:B2','FRC connector J2 pin B2'],['w','F67A1-0.8','F67 to A320 A:18'],['E','A320 A:18','ADEPT unit BAT',0.5],['w','X03DD24-0.8','A320 ground A:9']],e:'G:SKX03F_C'},
  {f:'I',it:[['k','SPF44B3','Key splice SPF44B3'],['w','F44B5-1.0','Key feed to FRC'],['f','F31','Cummins IGN 1 fuse 5A',5],['k','FRC_J4:F2','FRC connector J4 pin F2'],['w','F31A2-0.8','F31 to A320 A:8'],['Q','A320 A:8','ADEPT IGN input',2000]],e:[0,4]},
  {f:'C',it:[['R','J1939-H','J1939 CAN-H bias (network)',25000],['w','DL1HN36-0.8','CAN-H to A320 A:12'],['k','SPDL1HB31','Splice SPDL1HB31']],e:null},
  {f:'C',it:[['R','J1939-L','J1939 CAN-L bias (network)',25000],['w','DL1LN36-0.8','CAN-L to A320 A:4'],['k','SPDL1LB31','Splice SPDL1LB31']],e:null},
  {f:[2,3],it:[['T','R-ENG','J1939 termination, engine end',120]],e:[3,3]},
  {f:[2,1],it:[['T','R-CAB','J1939 termination, cab end',120]],e:[3,1]}
 ]}
);
