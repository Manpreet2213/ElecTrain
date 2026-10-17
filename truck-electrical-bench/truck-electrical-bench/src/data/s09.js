// Sheets CA, CB, CC (pages 28–30)
SH.push(
{id:'CA',pg:28,t:'Ether start / engine heater',z:'engine',
 note:'Ether start solenoid Y53 fires from the start signal (SPC15JA3) only when the ether-start temperature sensor B80 closes in cold weather. The 110V block heater R01A plugs in at receptacle X45.',
 cols:[
  {f:'I',it:[['sw','S15-ST','Key switch START position'],['k','SPC15JA3','Start signal splice SPC15JA3'],['w','C15JA4-1.0','Start signal to ether solenoid'],['S','Y53','Ether start solenoid',2],['w','EAAA1-1.0','Solenoid to temperature sensor'],['sw','B80','Ether start temp sensor (closed when cold)'],['w','X02CA3-1.0','Sensor ground']],e:'G:SPX02CA1'},
  {f:'A',v:120,it:[['k','X45:A','Engine heater receptacle, line'],['w','X45-L','Heater cord line'],['X','R01A','Engine block heater element 110V',12.5],['w','X45-N','Heater cord neutral'],['k','X45:B','Engine heater receptacle, neutral']],e:'N'}
 ]},
{id:'CB',pg:29,t:'Engine control – Volvo engine',z:'engine',
 note:'Volvo engine ECM through engine connector X11: EMS power from FE4, ground through SPX01A3_1 to cab stud X03. The ECM grounds the fan solenoid Y35 (fed by FE9) and reads coolant level sensor B123.',
 cols:[
  {f:'B',it:[['k','U01A','EFRC B+ bus'],['f','FE4','EMS main fuse 30A',30],['w','FE4A4-3.0','FE4 to X11 pin 13'],['k','X11:13','Engine connector pin 13 (EMS supply A)'],['E','A14','Engine ECM supply',3],['k','X11:31','Engine connector pin 31 (ECM ground)'],['w','X03EA5-3.0','ECM ground wire'],['k','SPX01A3_1','Ground splice SPX01A3_1'],['w','X03EA8-5.0','Ground splice to cab stud']],e:'G:X03'},
  {f:'B',it:[['k','U01A','EFRC B+ bus'],['f','FE9','EMS comp 2 fuse 15A',15],['w','FE9A1-1.0','FE9 to splice SPFE9A'],['k','SPFE9A','Splice SPFE9A'],['w','FE9A4-1.0','Splice to fan solenoid'],['S','Y35','Engine fan solenoid',1.5],['w','EA33B1-1.0','Solenoid to X11 pin 33'],['k','X11:33','Engine connector pin 33 (fan control)'],['ecu','A14 FAN','ECM fan control (low side)']],e:[0,6]},
  {f:'5',it:[['Q','X11:28','ECM coolant level input (pull-up)',2200],['w','EA28A1-1.0','Coolant level signal'],['k','FCCL:A','Coolant level connector pin A'],['sw','B123','Low coolant sensor (coolant OK)'],['k','FCCL:B','Coolant level connector pin B'],['w','EA18A1-0.8','Sensor ground to X11 pin 18']],e:[0,6]}
 ]},
{id:'CC',pg:30,t:'Engine control – ISX export',z:'engine',
 note:'Cummins ISX ECM A14B: power from FE18 through SPFE18A, ignition from F31 via MCFC:10, ground through SPX02A1 to engine stud X02. The ECM drives the fan solenoid Y35 and reads the DPF temperature sensors in B206.',
 cols:[
  {f:'B',it:[['f','FE18','Cummins export ISX fuse 10A',10],['k','EFRC.B1:B','EFRC connector B1 pin B'],['w','FE18A-5.0','FE18 to splice SPFE18A'],['k','SPFE18A','Splice SPFE18A'],['w','FE18A2-3.0','Splice to ECM B:3'],['E','A14B B:3','ECM power connector',3],['k','A14B B:1','ECM ground pin B:1'],['w','X02A3-3.0','ECM ground to splice'],['k','SPX02A1','Ground splice SPX02A1'],['w','X02A1-5.0','Splice to ground connector'],['k','FCGND:1','Engine ground connector FCGND'],['w','X02AA1-5.0','Ground wire to engine stud']],e:'G:X02'},
  {f:'I',it:[['k','SPF44B3','Key splice SPF44B3'],['w','F44B5-1.0','Key feed to FRC'],['f','F31','Cummins IGN 1 fuse 5A',5],['k','FRC_J4:F2','FRC connector J4 pin F2'],['w','F31A8-1.0','F31 to MCFC'],['k','MCFC:10','Main cab-frame connector pin 10'],['w','F31A1-0.8','To ECM A:39'],['Q','A14B A:39','ECM IGN signal',2000]],e:[0,7]},
  {f:[0,5],it:[['ecu','A14B A:38','ECM fan clutch output'],['w','EA38A1-1.0','Fan clutch signal'],['k','FCFS:A','Fan solenoid connector pin A'],['S','Y35','Engine fan solenoid',1.5],['k','FCFS:B','Fan solenoid connector pin B'],['w','EA29A1-1.0','Fan solenoid return to ECM A:29']],e:[0,7]},
  {f:'5',it:[['Q','A14B A:31','ECM catalyst temp T1 input (pull-up)',2200],['w','EA31A1-1.0','T1 signal wire'],['k','FCDPFC:H','DPF sensor connector pin H'],['R','B206-T1','Upstream catalyst temp sensor T1 (NTC)',2000],['k','FCDPFC:E','DPF sensor connector pin E'],['w','EA33A2-1.0','Sensor return to splice'],['k','SPEA33A1','Splice SPEA33A1'],['w','EA33A1-1.0','Return to ECM A:33']],e:[0,7]}
 ]}
);
