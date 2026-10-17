// Sheets CG, CH, CL (pages 34–36)
SH.push(
{id:'CG',pg:34,t:'Urea dosing system – OBD 2019',z:'frame',can:{h:[3,3],l:[4,3]},
 note:'2019 ACM layout: battery feed through FT01, an auxiliary 5V-style sensor supply to the AdBlue level/temp sensor B142C (grounded at X94:F), the fuel filter heater R29A, and the sensor CAN link DL7.',
 cols:[
  {f:'B',it:[['w','G01A1-5.0','Battery to ACM fuse'],['f','FT01','Fuse, ACM 30A',30],['w','FT01A1-5.0','FT01 to splice SPFT01A1'],['k','SPFT01A1','Splice SPFT01A1'],['w','FT01A4-1.0','Splice to ACM power pins'],['E','A137','ACM power',2],['k','A137:58','ACM ground pin 58'],['w','X01X94D-1.0','ACM ground wire']],e:'G:X94:D'},
  {f:[0,5],it:[['ecu','A137:49','ACM auxiliary sensor supply'],['w','EMA49A-1.0','Supply to splice SPEMA49A'],['k','SPEMA49A','Splice SPEMA49A'],['w','EMA49A2-1.0','Splice to B142C pin 1'],['E','B142C','AdBlue level and temperature sensor',0.2],['w','XB142C-1.0','Sensor ground'],['k','FCUTS:4','Tank connector FCUTS pin 4'],['w','X01X94F-2.0','Ground to X94:F']],e:'G:X94:F'},
  {f:[0,5],it:[['ecu','A137:24','ACM fuel filter heater output'],['w','EMA24A1-1.0','Heater feed'],['k','FCUT5:7','Heater connector FCUT5 pin 7'],['X','R29A','Heater, fuel filter',4],['w','EMA59B3-1.0','Heater return'],['k','SPEMA59A1','Splice SPEMA59A1']],e:[0,7]},
  {f:'C',it:[['R','ECM-H','ECM DL7 CAN-H bias',25000],['w','DL7HB1-0.8','CAN-H to splice SPDL7H1'],['k','SPDL7H1','Splice SPDL7H1'],['w','DL7HN1-0.8','Splice to B142C']],e:null},
  {f:'C',it:[['R','ECM-L','ECM DL7 CAN-L bias',25000],['w','DL7LB1-0.8','CAN-L to splice SPDL7L1'],['k','SPDL7L1','Splice SPDL7L1'],['w','DL7LN1-0.8','Splice to B142C']],e:null},
  {f:[3,4],it:[['T','B142C-T','Termination at the sensor end',120]],e:[4,4]},
  {f:[3,1],it:[['T','R-ECM','DL7 termination, ECM end',120]],e:[4,1]}
 ]},
{id:'CH',pg:35,t:'Inside / outside air cleaner',z:'dash',
 note:'Switch S97 sends F33 power through MCFC:111 to the inside/outside air solenoid in solenoid pack Z05, which grounds at X91:D. The ILLUM bus lights the switch.',
 cols:[
  {f:'I',it:[['f','F33','Air sol / sw fuse 10A',10],['k','FRC_J1:B6','FRC connector J1 pin B6'],['w','F33A1-0.8','F33 to switch S97'],['sw','S97','Inside / outside air cleaner switch'],['w','CA4AF-0.8','S97 to MCFC'],['k','MCFC:111','Main cab-frame connector pin 111'],['w','CA4AF-0.8b','MCFC to solenoid pack'],['k','Z05:F','Solenoid pack pin F'],['S','Z05-F','Inside / outside air solenoid',0.8],['k','Z05:B','Solenoid pack ground pin B'],['w','X01X91D-0.8','Solenoid pack ground']],e:'G:X91:D'},
  {f:'B',it:[['ecu','ILLUM','Dash illumination supply (dimmer)'],['k','SK141C:L','Illumination splice SK141C pin L'],['w','PCAL1-0.8','Illumination to S97'],['D','S97-LED','Switch illumination',0.3],['w','X03DE2-0.8','Switch ground']],e:'G:SKX03F_C'}
 ]},
{id:'CL',pg:36,t:'Engine control – ISX-G 1/2',z:'engine',
 note:'ISX-G ECM (X11A) gets unswitched battery through fuse holder A225B straight from the batteries, key input via F31, and grounds through XC1G4 to the engine block stud. It reads ambient temp B22C and drives fan solenoid Y35.',
 cols:[
  {f:'B',it:[['w','G01B1A-5.0','Battery to fuse holder A225B'],['k','A225BFC:B','Fuse holder connector A225BFC'],['f','A225B-1','Fuse holder A225B fuse 1, 20A',20],['k','A225BFC:4','Fuse holder output pin 4'],['w','FA225BB1-2.0','Fuse to splice SPFA225BB1'],['k','SPFA225BB1','Splice SPFA225BB1'],['w','FA225BB3-2.0','Splice to ECM D:3'],['E','X11A D:3','ISX-G ECM battery (unswitched)',4],['k','X11A D:1','ECM ground pin D:1'],['w','XC1G4A1-5.0','ECM ground wire'],['k','XC1G4','Engine ground connector XC1G4'],['w','X198A-5.0','Ground to engine block stud']],e:'G:X02'},
  {f:'I',it:[['f','F31','Cummins IGN 1 fuse 5A',5],['k','FRC_J4:F2','FRC connector J4 pin F2'],['w','F31A1-0.8','F31 to MCFCOPT'],['k','MCFCOPT:5','Option connector MCFCOPT pin 5'],['Q','X11A C:A','ECM key switch input',2000]],e:[0,9]},
  {f:'5',it:[['Q','X11A A:22','ECM ambient air temp input (pull-up)',2200],['w','ECEA22A1-0.5','Ambient temp signal'],['k','FCFA:8','Sensor connector FCFA pin 8'],['R','B22C','Ambient air temperature sensor (NTC)',2000],['k','FCFA:9','Sensor connector FCFA pin 9'],['w','ECEA2A1-0.8','Sensor return']],e:[0,9]},
  {f:[0,7],it:[['ecu','X11A C:N','ECM fan output'],['w','ECNA1-0.8','Fan solenoid feed'],['k','FCFS:A','Fan solenoid connector pin A'],['S','Y35','Engine fan solenoid',1.5],['k','FCFS:B','Fan solenoid connector pin B'],['w','ECPA1-0.8','Fan solenoid return to ECM C:P']],e:[0,9]}
 ]}
);
