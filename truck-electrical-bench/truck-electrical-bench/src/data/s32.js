// Sheets KE, KF, KG (pages 98–100)
SH.push(
{id:'KE',pg:98,t:'Audio system: DEA 500 radio – 4 speaker',z:'dash',
 note:'Radio A158: battery from F68, ignition (ACC) from F04, ground at cab stud X137A. Each speaker has its own + and − wire back to the radio (never grounded). Speakers read about 4Ω on the meter with the radio unplugged.',
 cols:[
  {f:'B',it:[['f','F68','Radio battery fuse 10A',10],['k','FRC_J2:C2','FRC connector J2 pin C2'],['w','F68A1-0.8','F68 to radio A:A7'],['E','A158 A:A7','Radio BATT',1.5],['k','A158 A:A8','Radio GND pin A:A8'],['w','X137AA1-1.0','Radio ground wire']],e:'G:X137A'},
  {f:'I',it:[['f','F04','Radio fuse 10A',10],['k','FRC_J1:F12','FRC connector J1 pin F12'],['w','F04A1-2.0','F04 to radio A:A4'],['Q','A158 A:A4','Radio IGN input',2000]],e:[0,5]},
  {f:[0,3],it:[['ecu','A158 A:B7','Radio LR+ output (test tone)'],['w','LB7B1-0.8','LR+ to door connector'],['k','MCDL4:A','Door connector MCDL4 pin A'],['w','LB7B1-0.8b','MCDL4 to speaker'],['H','B60C','Speaker, left door (4Ω)',3],['w','LB8B1-0.8','Speaker to MCDL4'],['k','MCDL4:B','Door connector MCDL4 pin B'],['w','LB8B1-0.8b','LR− back to radio A:B8']],e:[0,5]},
  {f:[0,3],it:[['ecu','A158 A:B5','Radio LF+ output (test tone)'],['w','LB5A1-0.8','LF+ to splice SPLB5A'],['k','SPLB5A','Splice SPLB5A'],['w','LB5AB-0.8','Splice to dash speaker'],['H','B164L','Loudspeaker, left dash (4Ω)',3],['w','LB6AB-0.8','Speaker to splice SPLB6A'],['k','SPLB6A','Splice SPLB6A'],['w','LB6A1-0.8','LF− back to radio A:B6']],e:[0,5]}
 ]},
{id:'KF',pg:99,t:'Audio system: DEA 500 radio – 6 speaker',z:'sleeper',
 note:'6-speaker sleeper setup: radio ACC power runs through the normally-closed side (87A) of RLY02 (radio wake). The LECM energises RLY02 to wake the radio from the bunk. Rear speakers B60E / B60F run through sleeper connector MCSL1.',
 cols:[
  {f:'B',it:[['f','F68','Radio battery fuse 10A',10],['k','FRC_J2:C2','FRC connector J2 pin C2'],['w','F68A1-0.8','F68 to radio A:A7'],['E','A158 A:A7','Radio BATT',1.5],['k','A158 A:A8','Radio GND pin A:A8'],['w','X06BA2-1.0','Radio ground wire']],e:'G:X137A'},
  {f:'I',it:[['f','F04','Radio fuse 10A',10],['k','FRC_J1:F12','FRC connector J1 pin F12'],['w','F04A1-2.0','F04 to RLY02 87A'],['k','FRC_J2:A12','FRC connector J2 pin A12'],['rn','RLY02','Radio wake relay 87A–30 (closed at rest)','RLY02'],['k','FRC_J2:A11','FRC connector J2 pin A11'],['w','F04A1-2.0b','RLY02 30 to radio A:A4'],['Q','A158 A:A4','Radio IGN input',2000]],e:[0,5]},
  {f:'B',it:[['ecu','A46 wake','LECM sleeper radio wake output'],['w','LA46C4-2.0','Wake signal to sleeper connector'],['k','MCSL5:E','Sleeper connector MCSL5 pin E'],['rk','RLY02','Radio wake relay coil','RLY02']],e:'G:FRC_J1:B12'},
  {f:[0,3],it:[['ecu','A158 A:B7','Radio LR+ output (test tone)'],['w','LB7A1-0.8','LR+ to sleeper connector'],['k','MCSL1:A','Sleeper connector MCSL1 pin A'],['w','LB7A1-0.8b','MCSL1 to speaker'],['H','B60E','Speaker, left upper (4Ω)',3],['w','LB8A1-0.8','Speaker to MCSL1'],['k','MCSL1:B','Sleeper connector MCSL1 pin B'],['w','LB8A1-0.8b','LR− back to radio A:B8']],e:[0,5]}
 ]},
{id:'KG',pg:100,t:'Audio system: DEA 500 radio – 6 speaker with sub, TV prep',z:'sleeper',
 note:'With the stereo amplifier A56: the amp is fed through PSOF:J and splice SPFA11E11, grounds through SPX03DD15 to SKX03D, and drives the lower speakers (B60G) and subwoofer B60I through lower-speaker connector OSL.',
 cols:[
  {f:'B',it:[['f','F68','Radio battery fuse 10A',10],['k','FRC_J2:C2','FRC connector J2 pin C2'],['w','F68A1-0.8','F68 to radio A:A7'],['E','A158','Radio BATT',1.5],['k','A158 A:A8','Radio GND pin A:A8'],['w','X06BA2-1.0','Radio ground wire']],e:'G:X137A'},
  {f:'B',it:[['f','F04','Radio / amplifier fuse 10A',10],['k','FRC_J1:F12','FRC connector J1 pin F12'],['w','F04A2-2.0','F04 to amp connector'],['k','PSOF:J','Amplifier connector PSOF pin J'],['w','FA11E11-2.0','PSOF to splice SPFA11E11'],['k','SPFA11E11','Splice SPFA11E11'],['w','FA11E12-0.8','Splice to amplifier E11'],['E','A56 E11','Stereo amplifier power',4],['k','A56 E8','Amplifier GND pin E8'],['w','X03DD16-0.8','Amplifier ground'],['k','SPX03DD15','Ground splice SPX03DD15'],['w','X03DD15-2.0','Splice to splice pack']],e:'G:SKX03D'},
  {f:[1,7],it:[['ecu','A56 F14','Amplifier left lower output'],['w','LF14A1-0.8','Output to lower speaker connector'],['k','OSL:C','Lower speaker connector OSL pin C'],['w','LF14A1-0.8b','OSL to speaker'],['H','B60G','Speaker, left lower (4Ω)',3],['w','LF13A1-0.8','Speaker to OSL'],['k','OSL:D','Lower speaker connector OSL pin D'],['w','LF13A1-0.8b','Back to amplifier F13']],e:[1,9]},
  {f:[1,7],it:[['ecu','A56 F5','Amplifier subwoofer output'],['w','LF5A1-0.8','Output to subwoofer'],['H','B60I','Speaker, subwoofer (4Ω)',3],['w','LF4A1-0.8','Back to amplifier F4']],e:[1,9]}
 ]}
);
