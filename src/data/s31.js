// Sheets JG, JH, KD (pages 95–97)
SH.push(
{id:'JG',pg:95,t:'Lane departure warning system',z:'dash',
 note:'Bendix Fusion lane position sensor A176 (camera + safety processor): battery from F77, ignition from F56, both through camera connectors BFORF1 / BFORF2, ground through SPX03DA13 to SPX03D2. S202 is the LDWS off switch input.',
 cols:[
  {f:'B',it:[['f','F77','Bendix Fusion fuse 10A',10],['k','FRC_J1:B1','FRC connector J1 pin B1'],['w','F77A1-1.0','F77 to camera connector'],['k','BFORF1:H','Camera connector BFORF1 pin H'],['E','A176','Lane position sensor (camera + SDP) battery',1],['w','X03DA15-1.0','Camera ground'],['k','SPX03DA13','Ground splice SPX03DA13'],['w','X03DA13-1.0','Splice to camera connector'],['k','BFORF1:A','Camera connector BFORF1 pin A'],['w','X03DA13-0.8','Ground to SPX03D2']],e:'G:SPX03D2'},
  {f:'I',it:[['f','F56','Bendix Fusion IGN fuse 10A',10],['k','FRC_J1:E8','FRC connector J1 pin E8'],['w','F56A1-1.0','F56 to camera connector'],['k','BFORF2:B','Camera connector BFORF2 pin B'],['Q','A176 IGN','Camera ignition input',2000]],e:[0,6]},
  {f:'5',it:[['Q','A176 SW','SDP switch input (pull-up)',2200],['w','DA4A2-0.8','LDWS switch signal'],['k','BFORF1:C','Camera connector BFORF1 pin C'],['sw','S202','Switch, LDWS (lane departure OFF)'],['w','X03DA14-1.0','Switch ground']],e:[0,6]}
 ]},
{id:'JH',pg:96,t:'Seat SRS',z:'cab',can:{h:[1,3],l:[2,3]},
 note:'Seat SRS unit A374: ignition from F59 through seat connector MCRT, ground through MCRT:D to SKX03F_C, and J1939 through MCRT:A/B.',
 cols:[
  {f:'I',it:[['f','F59','Seat SRS fuse 10A',10],['k','FRC_J3:B8','FRC connector J3 pin B8'],['w','F59A1-0.8','F59 to seat connector'],['k','MCRT:C','Seat connector MCRT pin C'],['w','F59A1-0.8b','MCRT to A374 A:C'],['E','A374','Seat SRS control unit',0.3],['w','X03DA23-0.8','A374 ground'],['k','MCRT:D','Seat connector MCRT pin D'],['w','X03DA23-0.8b','Ground to splice pack']],e:'G:SKX03F_C'},
  {f:'C',it:[['R','J1939-H','J1939 CAN-H bias (network)',25000],['w','DL1HN23-0.8','J1939-H to seat connector'],['k','MCRT:B','Seat connector MCRT pin B'],['w','DL1HN1-0.8','To A374 A:B']],e:null},
  {f:'C',it:[['R','J1939-L','J1939 CAN-L bias (network)',25000],['w','DL1LN23-0.8','J1939-L to seat connector'],['k','MCRT:A','Seat connector MCRT pin A'],['w','DL1LN5-0.8','To A374 A:A']],e:null},
  {f:[1,4],it:[['T','R-ENG','J1939 termination, engine end',120]],e:[2,4]},
  {f:[1,1],it:[['T','R-CAB','J1939 termination, cab end',120]],e:[2,1]}
 ]},
{id:'KD',pg:97,t:'Audio system – Bluetooth / aux / USB',z:'dash',
 note:'DEA 500 radio A158 with the optional handsfree microphone B63 in the roof: the radio puts a bias on MIC+ (C3:15) through roof connector MCOF1:F, and MIC− returns on MCOF1:G (C3:16). The mic wires are shielded.',
 cols:[
  {f:'I',it:[['f','F04','Radio fuse 10A',10],['k','FRC_J1:F11','FRC connector J1 pin F11'],['w','F04A1-1.0','F04 to radio'],['E','A158','Radio (DEA 500 series)',1.5],['k','A158:GND','Radio ground'],['w','X03DF3-1.0','Radio ground wire']],e:'G:SKX03D'},
  {f:'5',it:[['Q','A158 C3:15','Radio microphone bias (MIC+)',2200],['w','LA1A1-0.34','MIC+ to roof connector'],['k','MCOF1:F','Roof connector MCOF1 pin F'],['w','LA1A1-0.34b','MCOF1 to microphone'],['R','B63','Microphone, handsfree (electret)',1500],['w','LA2A1-0.5b','Microphone to MCOF1'],['k','MCOF1:G','Roof connector MCOF1 pin G'],['w','LA2A1-0.5','MIC− back to radio C3:16']],e:[0,5]}
 ]}
);
