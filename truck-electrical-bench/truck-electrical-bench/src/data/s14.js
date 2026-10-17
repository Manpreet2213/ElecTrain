// Sheets DE, DF, DP (pages 43–45)
SH.push(
{id:'DE',pg:43,t:'Transmission control 5th gen 1/2 (Allison)',z:'frame',
 note:'Allison transmission harness A58A: the TCM drives the retarder air accumulator solenoid Y64 on both sides, reads the retarder oil temperature sensor B23A and the speed sensors through MCTR4 / MCTR5.',
 cols:[
  {f:'B',it:[['ecu','A57A 19','TCM retarder accumulator output'],['w','N119A1-0.8','Output to MCTR5'],['k','MCTR5:5','Trans connector MCTR5 pin 5'],['w','N119A1-0.8b','MCTR5 to solenoid'],['S','Y64','Solenoid, retarder air accumulator',1],['w','N118A1-0.8','Solenoid return'],['k','MCTR4:14','Trans connector MCTR4 pin 14'],['w','N118A1-0.8b','Return to TCM pin 18'],['ecu','A57A 18','TCM retarder solenoid low side']],e:'G:X03'},
  {f:'5',it:[['Q','A57A 75','TCM retarder temp input (pull-up)',2200],['w','N175A1-0.8','Retarder temp signal'],['k','MCTR4:15','Trans connector MCTR4 pin 15'],['w','N175A1-0.8b','MCTR4 to sensor'],['R','B23A','Sensor, retarder oil temperature (NTC)',2000],['w','N158A3-0.8','Sensor return'],['k','SPN58A2','Splice SPN58A2'],['w','N158A2-0.8','Splice to MCTR4'],['k','MCTR4:11','Trans connector MCTR4 pin 11'],['w','N158A1-0.8','Return to TCM pin 58']],e:'G:X03'},
  {f:'5',it:[['Q','A57A 59','TCM engine speed sensor bias',10000],['w','N159A1-0.8','Engine speed + wire'],['k','MCTR5:1','Trans connector MCTR5 pin 1'],['w','N159A1-0.8b','MCTR5 to sensor'],['R','A58A-ES','Engine speed sensor coil',1000],['w','N139A1-0.8','Engine speed − wire'],['k','MCTR5:2','Trans connector MCTR5 pin 2'],['w','N139A1-0.8b','Return to TCM pin 39']],e:'G:X03'}
 ]},
{id:'DF',pg:44,t:'Transmission control 5th gen 2/2 (Allison)',z:'frame',
 note:'Allison TCM A57A: B+ from FE19 through FCTR and splice SPFE19A, ignition from F54, B− through SPX03BA1 and MCTR4:1. The TCM grounds RLY11 for neutral start and watches park brake switch S43A.',
 cols:[
  {f:'B',it:[['k','U01A','EFRC B+ bus'],['f','FE19','Auto trans Allison / Eaton fuse 30A',30],['k','EFRC.B1:A','EFRC connector B1 pin A'],['w','FE19A1-3.0','FE19 to FCTR'],['k','FCTR:A','Trans connector FCTR pin A'],['w','FE19A1-3.0b','FCTR to MCTR4'],['k','MCTR4:7','Trans connector MCTR4 pin 7'],['w','FE19A1-2.0','MCTR4 to splice SPFE19A'],['k','SPFE19A','Splice SPFE19A'],['w','FE19A2-0.8','Splice to TCM pins 10 / 70'],['E','A57A 10','Allison TCM B+',3],['k','A57A 69','TCM B− pin 69'],['w','X03BA3-0.8','TCM ground to splice'],['k','SPX03BA1','Ground splice SPX03BA1'],['w','X03BA1-2.0','Splice to MCTR4'],['k','MCTR4:1','Trans connector MCTR4 pin 1'],['w','X01E1-3.0','MCTR4 to FCTR'],['k','FCTR:B','Trans connector FCTR pin B'],['w','X01E1-3.0b','Ground to frame']],e:'G:X01F'},
  {f:'I',it:[['f','F54','Transmission fuse 10A',10],['k','FRC_J2:F4','FRC connector J2 pin F4'],['w','F54A1-1.0','F54 to splice SPF54A1'],['k','SPF54A1','Splice SPF54A1'],['w','F54A2-0.8','Splice to TCM pin 63'],['Q','A57A 63','TCM ignition input',2000]],e:[0,12]},
  {f:'I',it:[['k','FRC_J5:E6','FRC connector J5 pin E6'],['rk','RLY11','Start enable relay coil','RLY11'],['k','FRC_J5:E4','FRC connector J5 pin E4'],['w','CJ5E6A1-0.8','RLY11 85 to TCM pin 41'],['ecu','A57A 41','TCM neutral start output']],e:[0,12]},
  {f:'5',it:[['Q','A57A 3','TCM park brake input (pull-up)',2200],['w','N103A3-0.8','Signal to splice SPN103A1'],['k','SPN103A1','Splice SPN103A1'],['w','N103A5-0.8','Splice to S43A'],['sw','S43A','Pressure switch, park brake N.C. (brakes set)'],['w','N117A3-0.8','Switch to splice SPN117A1'],['k','SPN117A1','Splice SPN117A1'],['w','N117A2-0.8','Switch ground']],e:'G:SKX03F_A'}
 ]},
{id:'DP',pg:45,t:'PTO',z:'cab',
 note:'F70 feeds the PTO switch S28A, which asks the VECU (A:29) for PTO. The VECU then drives RLY21, and RLY21 sends F70 power through MCFC:114 to PTO solenoid valve Y18A (ground X95:A).',
 cols:[
  {f:'I',it:[['f','F70','PTO fuse 10A',10],['k','FRC_J2:F2','FRC connector J2 pin F2'],['w','F70A1-0.8','F70 to PTO switch'],['sw','S28A','Switch, power take off 1 (ON)'],['w','CA4A29-0.8','PTO request to VECU A:29'],['Q','A17 A:29','VECU PTO switch input',2200]],e:'G:SKX03F_A'},
  {f:[0,3],it:[['w','F70A5-1.0','Fuse feed to RLY21 30'],['k','FRC_J1:F3','FRC connector J1 pin F3'],['rc','RLY21','PTO relay 30–87','RLY21'],['k','FRC_J2:A2','FRC connector J2 pin A2'],['w','FR21A73-1.0','RLY21 87 to MCFC'],['k','MCFC:114','Main cab-frame connector pin 114'],['k','FCPTO1:A','PTO solenoid connector pin A'],['S','Y18A','Solenoid valve, PTO 1',1],['k','FCPTO1:B','PTO solenoid connector pin B'],['w','X02CA3-1.0','Solenoid ground'],['w','X01X95A-1.0','Ground to split connector X95']],e:'G:X95:A'},
  {f:'B',it:[['ecu','A17 B:16','VECU PTO output'],['w','CB16A1-0.5','VECU to RLY21 86'],['k','FRC_J1:E3','FRC connector J1 pin E3'],['rk','RLY21','PTO relay coil','RLY21']],e:'G:FRC_J2:A1'}
 ]}
);
