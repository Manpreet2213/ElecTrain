// Sheets EB, EC, ED (pages 46–48)
SH.push(
{id:'EB',pg:46,t:'Suspension (ECS)',z:'frame',
 note:'Electronically controlled air suspension A16: ignition from F73, valve power through RLY22 (fed by F86) which the ECS switches itself. It drives level-control solenoid Y25A and reads the UP/DOWN switch S11E.',
 cols:[
  {f:'I',it:[['f','F73','ACC / side sense / ECS fuse 15A',15],['k','FRC_J3:D11','FRC connector J3 pin D11'],['w','F73A1-0.8','F73 to ECS X2:4'],['E','A16 X2:4','ECS control unit IGN supply',0.5],['k','A16 X2:3','ECS ground pin X2:3'],['w','X03DG1-1.0','ECS ground wire']],e:'G:SKX03F_C'},
  {f:'B',it:[['f','F86','ECS / beacon lamps fuse 10A',10],['k','FRC_J1:F10','FRC connector J1 pin F10'],['rc','RLY22','ECS power relay 30–87','RLY22'],['k','FRC_J1:F1','FRC connector J1 pin F1'],['w','FF1A1-0.8','RLY22 87 to ECS X2:2'],['E','A16 X2:2','ECS valve power',1]],e:[0,5]},
  {f:[0,3],it:[['ecu','A16 X2:5','ECS power relay output'],['w','AB5A1-0.8','ECS to RLY22 86'],['k','FRC_J3:E10','FRC connector J3 pin E10'],['rk','RLY22','ECS power relay coil','RLY22']],e:'G:FRC_J1:B12'},
  {f:[1,5],it:[['ecu','A16 X1:5','ECS inflate valve driver'],['w','RA5A1-0.8','Valve feed to MCPOPT'],['k','MCPOPT:19','Option connector MCPOPT pin 19'],['k','FCES2:7','Chassis connector FCES2 pin 7'],['S','Y25A','Solenoid, level control drive axles (inflate)',1],['w','X04BA2-0.8','Solenoid ground'],['k','SPX04BA1','Ground splice SPX04BA1'],['w','X04BA1-1.0','Splice to FCES2'],['k','FCES2:4','Chassis connector FCES2 pin 4']],e:'G:X04'},
  {f:'5',it:[['Q','A16 X1:15','ECS up/down switch input (pull-up)',2200],['w','RA15A1-0.8','Switch signal'],['sw','S11E','Switch, suspension control UP/DOWN'],['w','X03DG4-0.8','Switch ground to splice'],['k','SPX03FB2','Ground splice SPX03FB2'],['w','X03DG7-0.8','Splice to splice pack']],e:'G:SKX03F_B'}
 ]},
{id:'EC',pg:47,t:'ABS control Bendix 1/2',z:'frame',
 note:'Bendix ABS ECU A12B: valve power from F41 (30A), ignition from FE11 through MCFC:82, ground at driver-side cockpit stud X03E. It reads wheel speed sensors (B15...) and pulses the modulator valves (Y12...). S31 is the traction control switch.',
 cols:[
  {f:'B',it:[['f','F41','ABS fuse 30A',30],['k','FRC_J5:E1','FRC connector J5 pin E1'],['w','F41A1-3.0','F41 to ABS X1:18'],['E','A12B X1:18','ABS ECU battery (valve power)',2],['k','A12B X1:1','ABS ECU ground pin X1:1'],['w','X03EA4-3.0','ABS ground wire']],e:'G:X03E'},
  {f:'I',it:[['f','FE11','ABS IGN fuse 10A',10],['k','EFRC.D2:D','EFRC connector D2 pin D'],['w','FE11A1-1.0','FE11 to MCFC'],['k','MCFC:82','Main cab-frame connector pin 82'],['w','FE11A1-1.0b','MCFC to splice SPFE11A1'],['k','SPFE11A1','Splice SPFE11A1'],['w','FE11A2-1.0','Splice to ABS X1:3'],['Q','A12B X1:3','ABS ECU ignition input',2000]],e:[0,5]},
  {f:'5',it:[['Q','A12B X2:15','ABS wheel speed sensor bias (B15)',10000],['w','AB15A1-0.8','Speed sensor + wire'],['k','MCFC:21','Main cab-frame connector pin 21'],['w','AB15A1-0.8b','MCFC to sensor'],['R','B15','Sensor, wheel speed, LH 1st driven rear axle',1500],['w','AB15A2-0.8','Speed sensor − wire'],['k','MCFC:22','Main cab-frame connector pin 22'],['w','AB15A2-0.8b','Return to ABS X2:16']],e:[0,5]},
  {f:[0,3],it:[['ecu','A12B X2:7','ABS valve Y12 hold/release driver'],['w','AY12A1-1.0','Valve feed'],['k','MCFC:33','Main cab-frame connector pin 33'],['w','AY12A1-1.0b','MCFC to valve'],['S','Y12','Solenoid valve unit, ABS front right',1],['w','AY12A3-1.0','Valve common'],['k','MCFC:34','Main cab-frame connector pin 34'],['w','AY12A3-1.0b','Common back to ABS']],e:[0,5]},
  {f:'5',it:[['Q','A12B X1:7','ABS TCS switch input (pull-up)',2200],['w','AA7A1-0.8','TCS switch signal'],['sw','S31','Switch, traction control (TCS)'],['w','X03DC4-0.8','Switch ground']],e:'G:SKX03F_B'}
 ]},
{id:'ED',pg:48,t:'ABS control Bendix ESC 2/2',z:'frame',
 note:'Stability control parts on the ABS ECU: traction control valve Y57A through MCFC:93/94, brake air pressure sensor B152 on the ABS 5V supply (splices SPAD4A1 / SPAD1A1), and the trailer ABS valve Y100.',
 cols:[
  {f:'B',it:[['ecu','A12B C:3','ABS traction control valve output'],['w','AY57A51-1.0','Valve feed'],['k','MCFC:93','Main cab-frame connector pin 93'],['w','AY57A51-1.0b','MCFC to valve'],['S','Y57A','Solenoid valve, traction control ESP',1],['w','AY57A52-1.0','Valve return'],['k','MCFC:94','Main cab-frame connector pin 94'],['w','AY57A52-1.0b','Return to ABS C:5'],['ecu','A12B C:5','ABS traction valve low side']],e:'G:X03E'},
  {f:'5',it:[['w','AD4A1-1.0','ABS sensor supply D:4'],['k','SPAD4A1','Splice SPAD4A1'],['w','AD4A2-1.0','Splice to pressure sensor'],['k','B152:B','Pressure sensor pin B'],['R','B152-1','Brake air pressure sensor, supply to signal',1500,'B152 signal'],['R','B152-2','Brake air pressure sensor, signal to ground',1500],['k','B152:A','Pressure sensor pin A'],['w','AD1A2-1.0','Sensor ground to splice'],['k','SPAD1A1','Splice SPAD1A1'],['w','AD1A1-1.0','Ground back to ABS D:1']],e:'G:X03E'},
  {f:[1,5],it:[['w','AD5A1-1.0','Signal to ABS D:5'],['Q','A12B D:5','ABS brake pressure input',100000]],e:'G:X03E'},
  {f:'B',it:[['ecu','A12B D:12','ABS trailer valve output'],['w','AY100A2-1.0','Trailer valve feed'],['k','MCFC:96','Main cab-frame connector pin 96'],['S','Y100','Solenoid valve, trailer ABS ESP',1],['k','MCFC:95','Main cab-frame connector pin 95'],['w','AY100A1-1.0','Valve return'],['ecu','A12B D:9','ABS trailer valve low side']],e:'G:X03E'}
 ]}
);
