// Sheets CM, CN, CP (pages 37–39)
SH.push(
{id:'CM',pg:37,t:'Methane detection',z:'cab',
 note:'Natural gas trucks: FB08 (10A) feeds the methane fume detector H16, status display H17 and engine methane sensor B300B, all grounding at split connector X95:D. F37 feeds relay RLYER6 and the CO alarm B319.',
 cols:[
  {f:'B',it:[['w','G01A3-3.0','Battery to methane fuse'],['f','FB08','Fuse, methane detection 10A',10],['w','FB08A1-2.0','FB08 to splice SPFB08A1'],['k','SPFB08A1','Splice SPFB08A1'],['w','FB08A4-1.0','Splice to MCFCOPT'],['k','MCFCOPT:11','Option connector MCFCOPT pin 11'],['k','MCRMO:A','Roof connector MCRMO pin A'],['k','ROMJ:C','Roof jumper ROMJ pin C'],['k','SPFB08A4','Splice SPFB08A4'],['E','H16','Methane fume detector (+12V BAT IN)',0.3],['k','H16:B','Detector NEG pin B'],['w','XH16AB-1.0','Detector ground'],['k','SPX16AB','Ground splice SPX16AB'],['w','X03X95D2-1.0','Splice to SPX03X95D'],['k','SPX03X95D','Ground splice SPX03X95D'],['w','X03X95D-2.0','Ground to split connector X95']],e:'G:X95:D'},
  {f:[0,9],it:[['w','FB08A6-0.8','Splice to status display B:1'],['E','H17','Methane detection status display',0.1]],e:[0,13]},
  {f:[0,4],it:[['w','FB08A2-0.8','Splice to engine methane sensor'],['E','B300B','Methane sensor, engine',0.2],['w','X03X95D1-0.8','Sensor ground']],e:[0,15]},
  {f:'I',it:[['f','F37','Fume detector fuse 5A',5],['k','FRC_J2:E6','FRC connector J2 pin E6'],['w','F37A1-0.8','F37 to splice SPF37A1'],['k','SPF37A1','Splice SPF37A1'],['w','F37A2-0.8','Splice to RLYER6 86'],['rk','RLYER6','Relay, methane detector coil','RLYER6'],['w','X03DD5-0.8','RLYER6 85 ground']],e:'G:SKX03D'},
  {f:[3,4],it:[['w','F37A4-0.8','Splice to CO alarm'],['k','MCRM:B','Roof connector MCRM pin B'],['k','ROMJ:B','Roof jumper ROMJ pin B'],['w','FE2A4-0.8','To CO alarm pin A'],['E','B319','Sensor, CO alarm',0.1],['w','XH16AB4-0.8','CO alarm ground']],e:[0,13]}
 ]},
{id:'CN',pg:38,t:'Engine control – ISX US17 1/2',z:'engine',
 note:'ISX 2017 ECM A14C: battery through fuse holder A225 on the batteries, key signal through F31 / MCFC:10, ground through SPX02AA1 and FCGND to engine stud X02. Ambient sensor B22C and fan solenoid Y35A.',
 cols:[
  {f:'B',it:[['w','G01DA1-5.0','Battery to fuse holder A225'],['k','A225FCB:A','Fuse holder connector A225FCB'],['f','A225-3','Fuse holder A225, 30A',30],['k','A225FC:3','Fuse holder output pin 3'],['w','FA225B-5.0','Fuse to splice SPFA225B1'],['k','SPFA225B1','Splice SPFA225B1'],['w','FA225B1-1.0','Splice to ECM power pins'],['E','A14C A:1','ECM power (A:1, 25, 26, 27)',4],['k','A14C A:49','ECM ground pins A:49–52'],['w','X02AA3-1.0','ECM ground to splice'],['k','SPX02AA1','Ground splice SPX02AA1'],['w','X02AA1-5.0','Splice to ground connector'],['k','FCGND:1','Engine ground connector FCGND'],['w','X02A1-5.0','Ground to engine stud']],e:'G:X02'},
  {f:'I',it:[['k','SPF44B3','Key splice SPF44B3'],['w','F44B5-1.0','Key feed to FRC'],['f','F31','Cummins IGN 1 fuse 5A',5],['k','FRC_J4:F2','FRC connector J4 pin F2'],['w','F31A1B-0.8','F31 to MCFC'],['k','MCFC:10','Main cab-frame connector pin 10'],['w','F31A8-0.8','To ECM A:5'],['Q','A14C A:5','ECM key switch signal',2000]],e:[0,9]},
  {f:'5',it:[['Q','A14C A:65','ECM ambient air temp input (pull-up)',2200],['w','EC65A-0.5','Ambient temp signal'],['k','FCFA:8','Sensor connector FCFA pin 8'],['R','B22C','Ambient air temperature sensor (NTC)',2000],['k','FCFA:7','Sensor connector FCFA pin 7'],['w','EC62A3-0.8','Sensor return to splice'],['k','SPEC62A','Splice SPEC62A'],['w','EC62A-0.5','Return to ECM A:62']],e:[0,9]},
  {f:[0,7],it:[['ecu','A14C A:57','ECM fan drive output'],['w','EC57A1-0.8','Fan solenoid feed'],['k','FCVSS:3','Fan connector FCVSS pin 3'],['S','Y35A','Solenoid, engine fan',1.5],['k','FCVSS:4','Fan connector FCVSS pin 4'],['w','EC7A-0.5','Fan solenoid return']],e:[0,9]}
 ]},
{id:'CP',pg:39,t:'Engine control – ISX US17 2/2 (urea heaters)',z:'frame',can:{h:[4,3],l:[5,3]},
 note:'FE25 (15A) feeds urea heater relays RE09 and RE10 in the EFRC. The ECM grounds both coils through splice SPEC3. The heaters R29 / R31 warm the NOxCare hoses. R08I terminates the DL7 sensor link.',
 cols:[
  {f:'B',it:[['k','U01A','EFRC B+ bus'],['f','FE25','Urea heated lines fuse 15A',15],['k','EFRC.C1:A','EFRC connector C1 pin A'],['rc','RE09','Urea heater relay RE09, tank to pump','RE09'],['w','EC40A1-1.0','RE09 87 to splice SPEC40'],['k','SPEC40','Splice SPEC40'],['w','EC40A2-1.0','Splice to heater R29'],['k','FCUT5:1','Heater connector FCUT5 pin 1'],['X','R29','Heater, NOxCare tank-to-pump hose',3],['w','X02CA16-1.0','Heater return'],['k','SPEC84A2','Splice SPEC84A2'],['w','X02CA14-1.0','Heater ground wire']],e:'G:X02'},
  {f:[0,3],it:[['rc','RE10','Urea heater relay RE10, pump to injector','RE10'],['k','EFRC.C1:C','EFRC connector C1 pin C'],['w','EC38A1-1.0','RE10 87 to splice SPEC38'],['k','SPEC38','Splice SPEC38'],['w','EC38A2-1.0','Splice to heater R31'],['X','R31','Heater, NOxCare pump-to-injector hose',3],['w','X02CA15-1.0','Heater ground wire']],e:'G:X02'},
  {f:'I',it:[['k','EFRC.C1:D','EFRC connector C1 pin D'],['rk','RE09','Urea heater relay RE09 coil','RE09'],['w','EC3A1-0.8','RE09 85 to splice SPEC3'],['k','SPEC3','Splice SPEC3'],['ecu','A14C A:3','ECM urea heater relay driver (low side)']],e:'G:X02'},
  {f:'I',it:[['k','EFRC.C1:E','EFRC connector C1 pin E'],['rk','RE10','Urea heater relay RE10 coil','RE10'],['w','EC3A2-0.8','RE10 85 to splice SPEC3']],e:[2,4]},
  {f:'C',it:[['R','ECM-H','ECM DL7 CAN-H bias',25000],['w','DL7HB7-0.8','CAN-H to splice SPDL7H3'],['k','SPDL7H3','Splice SPDL7H3'],['w','DL7HN3-0.8','Splice to AdBlue sensor B142C']],e:null},
  {f:'C',it:[['R','ECM-L','ECM DL7 CAN-L bias',25000],['w','DL7LB7-0.8','CAN-L to splice SPDL7L3'],['k','SPDL7L3','Splice SPDL7L3'],['w','DL7LN3-0.8','Splice to AdBlue sensor B142C']],e:null},
  {f:[4,1],it:[['T','R08I','Terminating resistor R08I 120Ω',120]],e:[5,1]},
  {f:[4,4],it:[['T','B142C-T','Termination at the sensor end',120]],e:[5,4]}
 ]}
);
