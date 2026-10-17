// Sheets DA, DB, DC (pages 40–42)
SH.push(
{id:'DA',pg:40,t:'Transmission I-Shift',z:'cab',
 note:'Key power through F54 pulls in RLY18 (I-Shift power). RLY18 feeds F50 to the TECU (A13E) and F51 to the gear selector ECU A109. The TECU switches the PTO solenoids Y18G / Y18H on both sides.',
 cols:[
  {f:'I',it:[['f','F54','Transmission fuse 10A',10],['k','FRC_J2:F4','FRC connector J2 pin F4'],['w','F54A2-0.8','F54 to RLY18 86'],['rk','RLY18','I-Shift power relay coil','RLY18']],e:'G:FRC_J2:A5'},
  {f:'B',it:[['f','F66','I-Shift fuse 30A',30],['k','FRC_J3:A1','FRC connector J3 pin A1'],['rc','RLY18','I-Shift power relay 30–87','RLY18','I-Shift power bus'],['f','F50','I-Shift TECU fuse 20A',20],['k','FRC_J2:B4','FRC connector J2 pin B4'],['w','F50A1-3.0','F50 to TECU'],['k','A13E:A3','TECU power pin'],['E','A13E','Transmission ECU (TECU) power',5],['w','X03GA3-0.8','TECU ground'],['k','SPX03GA1','Ground splice SPX03GA1'],['w','X03GA1-2.0','Splice to cab ground']],e:'G:X03'},
  {f:[1,3],it:[['f','F51','I-Shift GECU fuse 10A',10],['k','FRC_J2:C4','FRC connector J2 pin C4'],['w','F51A1-0.8','F51 to splice SPF51A1'],['k','SPF51A1','Splice SPF51A1'],['w','F51A2-0.8','Splice to A109 PWR'],['E','A109','Gear selector ECU (GSECU) power',0.5],['w','X03GA6-0.8','GSECU ground'],['k','SPX03GA4','Ground splice SPX03GA4']],e:'G:X03'},
  {f:[1,7],it:[['ecu','A13E A16','TECU PTO high side output'],['w','NA16A1-0.8','PTO feed to splice SPNA16'],['k','SPNA16','Splice SPNA16'],['w','NA16A3-0.8','Splice to PTO 1 solenoid'],['S','Y18G','Solenoid, transmission PTO 1',1],['w','NA20A1-0.8','Solenoid return to TECU A20'],['ecu','A13E A20','TECU PTO 1 low side']],e:[1,8]}
 ]},
{id:'DB',pg:41,t:'Transmission control – Eaton automatics',z:'frame',
 note:'Eaton UltraShift Gen 3 ECU A55A: battery from FE19 through FCTR, ignition from F30 via SPF35A1, ground at X93:F. Park brake switch S43B tells it the truck is parked, and it grounds RLY11 to allow starting only in neutral.',
 cols:[
  {f:'B',it:[['k','U01A','EFRC B+ bus'],['f','FE19','Auto trans Allison / Eaton fuse 30A',30],['k','EFRC.B1:A','EFRC connector B1 pin A'],['w','FE19A1-3.0','FE19 to trans connector'],['k','FCTR:A','Trans connector FCTR pin A'],['w','FE19A1-3.0b','To ECU pin 38'],['E','A55A 38','Eaton Gen 3 ECU battery',5],['k','A55A 36','ECU ground pin 36'],['w','X01X1-3.0','ECU ground wire'],['k','FCTR:B','Trans connector FCTR pin B'],['w','X01X93F-3.0','Ground to split connector X93']],e:'G:X93:F'},
  {f:'I',it:[['k','SPF44B3','Key splice SPF44B3'],['w','F44B5-1.0','Key feed to FRC'],['f','F30','UltraShift fuse 10A',10],['k','FRC_J4:E2','FRC connector J4 pin E2'],['w','F30A1-1.0','F30 to MCTR1'],['k','MCTR1:A','Trans connector MCTR1 pin A'],['w','F35A1-1.0','To splice SPF35A1'],['k','SPF35A1','Splice SPF35A1'],['w','F35A1-2.0','To ECU pin 35'],['Q','A55A 35','ECU ignition input',2000]],e:[0,8]},
  {f:'5',it:[['Q','A55A 19','ECU park brake input (pull-up)',2200],['w','N19A1-1.0','Park brake signal'],['k','MCTR1:D','Trans connector MCTR1 pin D'],['sw','S43B','Park brake pressure switch N.C. (brakes set)'],['k','MCTR1:E','Trans connector MCTR1 pin E'],['w','N33A1-1.0','Switch return to ECU pin 34']],e:[0,8]},
  {f:'I',it:[['k','FRC_J5:E6','FRC connector J5 pin E6'],['rk','RLY11','Start enable relay coil','RLY11'],['k','FRC_J5:E4','FRC connector J5 pin E4'],['w','NC3A1-0.8','RLY11 85 to MCTR2'],['k','MCTR2:11','Trans connector MCTR2 pin 11'],['ecu','A55A 32','ECU start enable (in neutral)']],e:[0,8]}
 ]},
{id:'DC',pg:42,t:'Endurant transmission',z:'frame',
 note:'Endurant TCU A55B: battery from FE19 and FE22, ground at bulkhead stud X04. It powers the gearbox hydraulic pressure sensor B112 and drives both sides of the start enable relay RLY11.',
 cols:[
  {f:'B',it:[['k','U01A','EFRC B+ bus'],['f','FE19','Auto trans fuse 15A',15],['k','EFRC.B1:A','EFRC connector B1 pin A'],['w','FE19A1-3.0','FE19 to trans connector'],['k','FCTR:A','Trans connector FCTR pin A'],['w','FE19A1-1.0','To TCU A:6'],['E','A55B A:6','Endurant TCU battery',4],['k','A55B A:5','TCU ground A:5'],['w','X01E2-1.0','TCU ground wire'],['k','FCTR:B','Trans connector FCTR pin B'],['w','X01E2-3.0','Ground to bulkhead stud']],e:'G:X04'},
  {f:'B',it:[['k','U01A','EFRC B+ bus'],['f','FE22','Eaton Endurant spare trans fuse 15A',15],['k','EFRC.D1:K','EFRC connector D1 pin K'],['w','FE22A1-1.0','FE22 to trans connector'],['k','FCTR3:A','Trans connector FCTR3 pin A'],['E','A55B A:16','Endurant TCU battery 2',1]],e:[0,8]},
  {f:'5',it:[['w','N56A1-0.8','TCU sensor power A:19'],['k','B112:3','Pressure sensor pin 3'],['R','B112-1','Hydraulic pressure sensor, supply to signal',1500,'B112 signal'],['R','B112-2','Hydraulic pressure sensor, signal to ground',1500],['k','B112:1','Pressure sensor pin 1'],['w','N55B1-0.8','Sensor ground to TCU A:18']],e:[0,8]},
  {f:[2,3],it:[['w','N55A1-0.8','Sensor signal to TCU A:7'],['Q','A55B A:7','TCU hydraulic pressure input',100000]],e:[0,8]},
  {f:[0,6],it:[['ecu','A55B A:14','TCU start enable positive'],['w','N58A1-0.8','To MCTR2 pin 12'],['k','MCTR2:12','Trans connector MCTR2 pin 12'],['k','FRC_J5:B6','FRC connector J5 pin B6'],['rk','RLY11','Start enable relay coil','RLY11'],['k','FRC_J5:B4','FRC connector J5 pin B4'],['w','N59A1-0.8','RLY11 85 back to TCU'],['ecu','A55B A:4','TCU start enable negative']],e:[0,8]},
  {f:'I',it:[['sw','S15-ST','Key switch START position'],['w','F44A3-1.0','Key start to RLY11 30'],['k','FRC_J5:C5','FRC connector J5 pin C5'],['rc','RLY11','Start enable contacts 30–87','RLY11'],['k','FRC_J5:D5','FRC connector J5 pin D5'],['w','F44A4-1.0','RLY11 87 to MCFC'],['k','MCFC:116','Main cab-frame connector pin 116'],['S','M04-50','Starter solenoid terminal 50',12]],e:'G:X02'}
 ]}
);
