// Sheets BH, BJ, BL (pages 22–24)
SH.push(
{id:'BH',pg:22,t:'Bodybuilder connectors',z:'cab',
 note:'Bodybuilder power: F19 (roof sign / BBM) on LVD, F35 IGN-X, F47 IGN-Y and F46 (camera prep) on ignition, out through body builder connector Z03A and camera connector Z04.',
 cols:[
  {f:'B',it:[['f','F19','Roof sign / BBM fuse 10A',10],['k','FRC_J2:E11','FRC connector J2 pin E11'],['w','F19A1-3.0','F19 to Z03A pin C'],['k','Z03A:C','Body builder connector #1 pin C'],['E','BB-ROOF','Bodybuilder roof sign',4],['k','Z03A:A','Body builder connector #1 ground pin A'],['w','X03DH3-3.0','Body builder ground wire']],e:'G:SPX03E1C'},
  {f:'I',it:[['f','F35','BB IGN-X fuse 15A',15],['k','FRC_J1:F6','FRC connector J1 pin F6'],['w','F35A1-2.0','F35 to Z03A pin D'],['k','Z03A:D','Body builder connector #1 pin D'],['E','BB-IGNX','Body equipment on IGN-X',6]],e:[0,6]},
  {f:'I',it:[['f','F47','BB IGN-Y fuse 15A',15],['k','FRC_J1:D5','FRC connector J1 pin D5'],['w','F47A1-2.0','F47 to Z03A pin H'],['k','Z03A:H','Body builder connector #1 pin H'],['E','BB-IGNY','Body equipment on IGN-Y',6]],e:[0,6]},
  {f:'I',it:[['f','F46','BB IGN / camera prep fuse 15A',15],['k','FRC_J1:C5','FRC connector J1 pin C5'],['w','F46A2-1.0','F46 to camera prep'],['k','Z04:C','Camera prep connector Z04 pin C'],['E','Z04','Back-up camera',1],['w','X03DH2-1.0','Camera ground']],e:'G:SKX03D'}
 ]},
{id:'BJ',pg:23,t:'Telematics gateway (TGW)',z:'cab',can:{h:[3,2],l:[4,2]},
 note:'TGW2 (A150) gets +30 from F85, IGN from F36 and an EMS wake signal, grounds at X137B, and terminates CAN2 internally with 120Ω between DK13 and DK14.',
 cols:[
  {f:'B',it:[['f','F85','TGW fuse 5A',5],['k','FRC_J2:D5','FRC connector J2 pin D5'],['w','F85A1-0.5','F85 to TGW DK1'],['E','A150 DK1','TGW battery +30',0.5],['w','X06HA1-0.5','TGW ground DK35']],e:'G:X137B'},
  {f:'I',it:[['f','F36','Telematics fuse 5A',5],['k','FRC_J2:B6','FRC connector J2 pin B6'],['w','F36A1-0.5','F36 to TGW DK24'],['Q','A150 DK24','TGW IGN input',2000]],e:[0,4]},
  {f:'I',it:[['k','SPF44B3','Key EMS splice SPF44B3'],['w','F44B6-0.5','EMS wake to TGW DK2'],['Q','A150 DK2','TGW EMS wake input',2000]],e:[0,4]},
  {f:'C',it:[['R','CAN2-H','CAN2-H bias (network)',25000],['w','DL2HN12-0.5','CAN2-H to TGW DK13']],e:null},
  {f:'C',it:[['R','CAN2-L','CAN2-L bias (network)',25000],['w','DL2LN12-0.5','CAN2-L to TGW DK14']],e:null},
  {f:[3,2],it:[['T','A150-T','TGW internal termination 120Ω',120]],e:[4,2]},
  {f:[3,1],it:[['T','R-FAR','Termination at far end of CAN2',120]],e:[4,1]}
 ]},
{id:'BL',pg:24,t:'Battery bussing',z:'frame',hr:0.02,
 note:'Batteries in parallel through jumper cables (BATTB-S). Each battery has internal resistance. A bad jumper or weak battery shows up as slow cranking and voltage drop under load.',
 cols:[
  {f:'S',it:[['ri','G01B','Battery G01B (internal resistance)',0.008],['w','B01A2-62.0','Main positive cable to starter'],['k','M04:30','Starter B+ terminal'],['M','M04','Starter motor cranking',800],['k','M04:31','Starter ground terminal'],['w','BB-N-62.0','Main negative cable']],e:'N'},
  {f:'S',it:[['ri','G01E','Battery G01E (internal resistance)',0.008],['w','BB02_P-62.0','Positive jumper G01E to G01B']],e:[0,1]},
  {f:'S',it:[['ri','G01C','Battery G01C (internal resistance)',0.008],['w','BB03_P2-62.0','Positive jumper G01C to G01E']],e:[1,1]},
  {f:[0,1],it:[['Q','A03 VBAT','Cluster battery voltage reading',100000]],e:'N'}
 ]}
);
