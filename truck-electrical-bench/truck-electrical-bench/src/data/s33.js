// Sheets KL, KM, KN (pages 101–103)
SH.push(
{id:'KL',pg:101,t:'Audio system: SEM 4-speaker and aux input',z:'dash',
 note:'SEM unit A231: battery from F68 through MCSEM1:15, ignition from F04 through RLY02 87A and MCSEM1:8, ground at cab stud X137A through MCSEM1:16. Door speakers go out through door connectors MCDL4 / MCDR3.',
 cols:[
  {f:'B',it:[['f','F68','Radio battery fuse 10A',10],['k','FRC_J2:C2','FRC connector J2 pin C2'],['w','F68A1-0.8','F68 to SEM connector'],['k','MCSEM1:15','SEM connector MCSEM1 pin 15'],['w','F68A7-0.8','To SEM A2:16'],['E','A231 A2:16','SEM battery',1.5],['k','A231 A2:9','SEM GND pin A2:9'],['w','X06BA2-1.0','SEM ground to connector'],['k','MCSEM1:16','SEM connector MCSEM1 pin 16'],['w','X06BA2-1.0b','Ground to cab stud']],e:'G:X137A'},
  {f:'I',it:[['f','F04','Radio fuse 10A',10],['k','FRC_J1:F12','FRC connector J1 pin F12'],['w','F04A1-2.0','F04 to RLY02 87A'],['k','FRC_J2:A12','FRC connector J2 pin A12'],['rn','RLY02','Radio wake relay 87A–30 (closed at rest)','RLY02'],['k','FRC_J2:A11','FRC connector J2 pin A11'],['w','F04A4-2.0','RLY02 30 to SEM connector'],['k','MCSEM1:8','SEM connector MCSEM1 pin 8'],['Q','A231 A2:13','SEM IGN input',2000]],e:[0,7]},
  {f:[0,4],it:[['ecu','A231 A1:4','SEM LR+ output (test tone)'],['w','LB7B1-0.8','LR+ to SEM connector'],['k','MCSEM1:13','SEM connector MCSEM1 pin 13'],['k','MCDL4:A','Door connector MCDL4 pin A'],['H','B60C','Speaker, left door (4Ω)',3],['k','MCDL4:B','Door connector MCDL4 pin B'],['k','MCSEM1:14','SEM connector MCSEM1 pin 14'],['w','LB8B1-0.8','LR− back to SEM A1:8']],e:[0,7]}
 ]},
{id:'KM',pg:102,t:'Audio system: SEM radio 6-speaker',z:'sleeper',
 note:'SEM with backwall speakers: rear speakers B60LR / B60RR are fed from SEM LR / RR through MCSEM1, sleeper connector MCSL1 and overhead connector SLOB.',
 cols:[
  {f:'B',it:[['f','F68','Radio battery fuse 10A',10],['k','FRC_J2:C2','FRC connector J2 pin C2'],['w','F68A1-0.8','F68 to SEM connector'],['k','MCSEM1:15','SEM connector MCSEM1 pin 15'],['E','A231','SEM battery',1.5],['k','MCSEM1:16','SEM connector MCSEM1 pin 16'],['w','X06BA2-1.0','SEM ground']],e:'G:X137A'},
  {f:[0,3],it:[['ecu','A231 A1:4','SEM LR+ output (test tone)'],['w','LB7A1-0.8','LR+ to sleeper connector'],['k','MCSL1:A','Sleeper connector MCSL1 pin A'],['w','LB7A1-0.8b','MCSL1 to overhead connector'],['k','SLOB:G','Sleeper overhead connector SLOB pin G'],['H','B60LR_H2','Speaker, left rear (4Ω)',3],['k','SLOB:H','Sleeper overhead connector SLOB pin H'],['w','LB8A1-0.8','Speaker back to MCSL1'],['k','MCSL1:B','Sleeper connector MCSL1 pin B'],['w','LB8A1-0.8b','LR− back to SEM A1:8']],e:[0,5]},
  {f:[0,3],it:[['ecu','A231 A1:1','SEM RR+ output (test tone)'],['w','LB1A1-0.8','RR+ to sleeper connector'],['k','MCSL1:C','Sleeper connector MCSL1 pin C'],['H','B60RR_H2','Speaker, right rear (4Ω)',3],['k','MCSL1:D','Sleeper connector MCSL1 pin D'],['w','LB2A1-0.8','RR− back to SEM A1:5']],e:[0,5]}
 ]},
{id:'KN',pg:103,t:'SEM audio unit with amplifier',z:'sleeper',
 note:'SEM plus stereo amplifier A56: the amp gets power from F04 through RLY02, PSOF:J and splice SPFA11E11, grounds through SPX03DD15, and drives the door speakers B60C through MCDL4.',
 cols:[
  {f:'I',it:[['f','F04','Radio fuse 10A',10],['k','FRC_J1:F12','FRC connector J1 pin F12'],['w','F04A1-2.0','F04 to RLY02 87A'],['rn','RLY02','Radio wake relay 87A–30 (closed at rest)','RLY02'],['k','FRC_J2:A11','FRC connector J2 pin A11'],['w','FA11A7-2.0','RLY02 30 to amp connector'],['k','PSOF:J','Amplifier connector PSOF pin J'],['w','FA11E11-2.0','PSOF to splice SPFA11E11'],['k','SPFA11E11','Splice SPFA11E11'],['w','FA11E12-0.8','Splice to amplifier E11'],['E','A56','Stereo amplifier power',4],['k','A56 E8','Amplifier GND pin E8'],['w','X03DD16-0.8','Amplifier ground'],['k','SPX03DD15','Ground splice SPX03DD15'],['w','X03DD15-2.0','Splice to amp connector'],['k','PSOF:K','Amplifier connector PSOF pin K']],e:'G:SKX03D'},
  {f:[0,10],it:[['ecu','A56 E15','Amplifier left door output'],['w','LE15A1-0.8','Output to door connector'],['k','MCDL4:A','Door connector MCDL4 pin A'],['H','B60C','Speaker, left door (4Ω)',3],['k','MCDL4:B','Door connector MCDL4 pin B'],['w','LE16A1-0.8','Back to amplifier E16']],e:[0,13]}
 ]}
);
