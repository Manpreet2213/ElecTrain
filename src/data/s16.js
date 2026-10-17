// Sheets EE, EH, FA (pages 49–51)
SH.push(
{id:'EE',pg:49,t:'Brakes TABS6 (pusher ABS)',z:'frame',can:{h:[3,2],l:[4,2]},
 note:'TABS6 pusher-axle ABS unit A248: IGN+ through F74, MCFC:110 and harness connector TABS6_CH, ground at split connector X92:M. It reads pusher wheel speed sensors B70 / B71 and talks on J1939.',
 cols:[
  {f:'I',it:[['f','F74','IGN TABS6 fuse 10A',10],['k','FRC_J3:C11','FRC connector J3 pin C11'],['w','F74-1.0','F74 to MCFC'],['k','MCFC:110','Main cab-frame connector pin 110'],['w','F74A-1.0','MCFC to TABS6 harness'],['k','TABS6_CH:C','TABS6 harness connector pin C'],['w','F74B-1.0','To A248 A:6'],['E','A248 A:6','TABS6 pusher ABS unit power',1.5],['k','A248 A:16','TABS6 ground pin A:16'],['w','X01X92M-1.0','TABS6 ground to harness'],['k','TABS6_CH:D','TABS6 harness connector pin D'],['w','X01X92M-1.0b','Ground to split connector X92']],e:'G:X92:M'},
  {f:'5',it:[['Q','A248 B:1','TABS6 wheel speed bias (B70)',10000],['w','AC17A-0.8','Speed sensor + wire'],['k','B70:1','Wheel speed sensor pin 1'],['R','B70','Sensor, wheel speed, LH pusher axle',1500],['k','B70:2','Wheel speed sensor pin 2'],['w','AC17B-0.8','Speed sensor − wire']],e:[0,9]},
  {f:'5',it:[['Q','A248 C:1','TABS6 wheel speed bias (B71)',10000],['w','AD17A-0.8','Speed sensor + wire'],['k','B71:1','Wheel speed sensor pin 1'],['R','B71','Sensor, wheel speed, RH pusher axle',1500],['k','B71:2','Wheel speed sensor pin 2'],['w','AD17B-0.8','Speed sensor − wire']],e:[0,9]},
  {f:'C',it:[['R','J1939-H','J1939 CAN-H bias (network)',25000],['w','DL1HN13-0.8','CAN-H to TABS6 harness'],['k','TABS6_CH:B','TABS6 harness connector pin B'],['w','DL1HN13-0.8b','To A248 A:7']],e:null},
  {f:'C',it:[['R','J1939-L','J1939 CAN-L bias (network)',25000],['w','DL1LN13-0.8','CAN-L to TABS6 harness'],['k','TABS6_CH:A','TABS6 harness connector pin A'],['w','DL1LN13-0.8b','To A248 A:1']],e:null},
  {f:[3,1],it:[['T','R-CAB','J1939 termination, cab end',120]],e:[4,1]},
  {f:[3,4],it:[['T','R-ENG','J1939 termination, engine end',120]],e:[4,4]}
 ]},
{id:'EH',pg:50,t:'Suspension – liftable pusher',z:'frame',
 note:'ECS with a liftable pusher axle: the ECS (A16) drives the trailing-axle valve Y29 (ground X93:E), reads pusher switch S311 and the pusher lift bellows pressure sensor B55B on its sensor supply.',
 cols:[
  {f:'I',it:[['f','F73','ACC / side sense / ECS fuse 15A',15],['k','FRC_J3:D11','FRC connector J3 pin D11'],['w','F73A1-0.8','F73 to ECS X2:4'],['E','A16 X2:4','ECS control unit IGN supply',0.5],['k','A16 X2:3','ECS ground pin X2:3'],['w','X03DG1-1.0','ECS ground wire']],e:'G:SKX03F_C'},
  {f:'B',it:[['f','F86','ECS / beacon lamps fuse 10A',10],['k','FRC_J1:F10','FRC connector J1 pin F10'],['rc','RLY22','ECS power relay 30–87','RLY22'],['k','FRC_J1:F1','FRC connector J1 pin F1'],['w','F86A1-0.8','RLY22 87 to ECS X2:2'],['E','A16 X2:2','ECS valve power',1]],e:[0,5]},
  {f:[0,3],it:[['ecu','A16 X2:5','ECS power relay output'],['w','AB5A1-0.8','ECS to RLY22 86'],['k','FRC_J3:E10','FRC connector J3 pin E10'],['rk','RLY22','ECS power relay coil','RLY22']],e:'G:FRC_J1:B12'},
  {f:[1,5],it:[['ecu','A16 X2:9','ECS trailing axle valve driver'],['w','RB9A1-0.8','Valve feed to MCPOPT'],['k','MCPOPT:21','Option connector MCPOPT pin 21'],['k','FCES2:2','Chassis connector FCES2 pin 2'],['S','Y29','Solenoid valve unit, trailing axle',1],['w','X04BA3-1.0','Valve ground'],['k','SPX04BA1','Ground splice SPX04BA1'],['w','X04BA1-1.0','Splice to FCES2'],['k','FCES2:4','Chassis connector FCES2 pin 4'],['w','X01X93E-1.0','Ground to split connector X93']],e:'G:X93:E'},
  {f:'5',it:[['Q','A16 X2:19','ECS pusher switch input (pull-up)',2200],['w','RB19A1-0.8','Pusher switch signal'],['sw','S311','Switch, pusher axle (DOWN)'],['w','X03FA42-0.8','Switch ground to splice'],['k','SPX03FC2','Ground splice SPX03FC2'],['w','X03DG2-0.8','Splice to splice pack']],e:'G:SKX03F_C'},
  {f:'5',it:[['w','RA30A1-0.8','ECS sensor supply X1:30'],['k','SPRA30A1','Splice SPRA30A1'],['w','RA30A4-0.8','Splice to sensor B55B'],['k','B55B:B','Pressure sensor pin B'],['R','B55B-1','Pusher lift bellows sensor, supply to signal',1500,'B55B signal'],['R','B55B-2','Pusher lift bellows sensor, signal to ground',1500],['k','B55B:A','Pressure sensor pin A'],['w','RA7A4-0.8','Sensor ground to splice'],['k','SPRA7A1','Splice SPRA7A1'],['w','RA7A1-0.8','Ground back to ECS X1:7']],e:[0,5]},
  {f:[5,5],it:[['w','RA20A1-0.8','Signal to ECS X1:20'],['Q','A16 X1:20','ECS pusher bellows pressure input',100000]],e:[0,5]}
 ]},
{id:'FA',pg:51,t:'Air dryer / heated drain valve',z:'frame',
 note:'FE13 (15A) feeds the air dryer A80 through FCAD:B and splice SPFE13A2. The heater grounds at X90:A. The regeneration valves Y51A / Y51B share the supply and are grounded by the VECU through MCAD.',
 cols:[
  {f:'I',it:[['f','FE13','Air dryer fuse 15A',15],['k','EFRC.D2:F','EFRC connector D2 pin F'],['w','FE13A1-2.0','FE13 to air dryer connector'],['k','FCAD:B','Air dryer connector FCAD pin B'],['w','F13A9-2.0','FCAD to splice SPFE13A2'],['k','SPFE13A2','Splice SPFE13A2'],['w','FE13A10-2.0','Splice to dryer heater A1'],['X','A80-HTR','Air dryer heater (A1–A2)',6],['w','X01DA17-1.0','Heater ground'],['k','FCAD:A','Air dryer connector FCAD pin A'],['w','X01X90A-2.0','Ground to split connector X90']],e:'G:X90:A'},
  {f:[0,6],it:[['w','FE13A11-2.0','Splice to valve supply B4'],['S','Y51A','Air dryer regeneration valve Y51A',0.5],['w','CB1A1-0.8','Valve to MCAD'],['k','MCAD:D','Air dryer cab connector MCAD pin D'],['ecu','A17 B:1','VECU air dryer valve driver (low side)']],e:'G:SKX03F_B'}
 ]}
);
