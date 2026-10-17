// Sheets IE, IF, IG (pages 86–88)
SH.push(
{id:'IE',pg:86,t:'Power windows / mirrors with turn signal',z:'door',
 note:'The LCM left side-repeater output (D:17) runs through MCSR1 and mirror connector MCMI1 to splice SPPD17A1. It feeds the side repeater E11L and the turn LED in mirror M106DS. Both ground at SPX03FA47, then SPX03D5.',
 cols:[
  {f:'B',it:[['f','F81','LCM1 fuse 20A',20],['k','FRC_J1:F1','FRC connector J1 pin F1'],['ecu','A27 D:17','LCM side repeater left output'],['w','PD17A1-0.8','Output to side repeater connector'],['k','MCSR1:A','Side repeater connector MCSR1 pin A'],['k','MCMI1:A','Mirror connector MCMI1 pin A'],['k','SPPD17A1','Splice SPPD17A1'],['w','PD17A2-0.8','Splice to side repeater'],['L','E11L','Lamp, side repeater D.S.',5],['w','X03FA01-0.8','Side repeater ground'],['k','MCMI1:B','Mirror connector MCMI1 pin B'],['k','SPX03FA47','Ground splice SPX03FA47'],['w','X03FA47-0.8','Splice to MCSR1'],['k','MCSR1:B','Side repeater connector MCSR1 pin B'],['w','X03DA10-0.8','Ground to SPX03D5']],e:'G:SPX03D5'},
  {f:[0,7],it:[['w','PD17A3-0.5','Splice to mirror turn LED'],['D','M106DS-T','Mirror turn signal LED D.S.',2],['w','X03FA02-0.5','Mirror LED ground']],e:[0,12]}
 ]},
{id:'IF',pg:87,t:'Central / remote door locking',z:'door',
 note:'Door lock control unit A11: battery from F84, ground to SKX03D. It drives the lock motors in M105DS / M105PS in both directions through door connectors LKDL / LKDR, and takes LOCK / UNLOCK requests from the door panels.',
 cols:[
  {f:'B',it:[['f','F84','Power door locks fuse 15A',15],['k','FRC_J2:D1','FRC connector J2 pin D1'],['w','F84A1-1.0','F84 to A11 pin 1'],['E','A11 pin 1','Door lock control unit power',0.3],['k','A11 pin 16','Door lock unit ground pin 16'],['w','X03DA31-1.0','Door lock unit ground']],e:'G:SKX03D'},
  {f:[0,3],it:[['ecu','A11 pin 3','Door lock unit LOCK output D.S.'],['w','C03A1-1.0','Lock output to door connector'],['k','LKDL:E','Door lock connector LKDL pin E'],['w','C03A1-1.0b','LKDL to lock motor'],['M','M105DS','Door lock motor D.S.',5],['w','C09A1-1.0b','Motor return to LKDL'],['k','LKDL:D','Door lock connector LKDL pin D'],['w','C09A1-1.0','LKDL to A11 pin 9'],['ecu','A11 pin 9','Door lock unit motor return D.S.']],e:[0,5]},
  {f:[0,3],it:[['ecu','A11 pin 5','Door lock unit LOCK output P.S.'],['w','C05A1-1.0','Lock output to door connector'],['k','LKDR:C','Door lock connector LKDR pin C'],['M','M105PS','Door lock motor P.S.',5],['k','LKDR:A','Door lock connector LKDR pin A'],['w','C08A1-1.0','LKDR to A11 pin 8'],['ecu','A11 pin 8','Door lock unit motor return P.S.']],e:[0,5]},
  {f:'5',it:[['Q','A11 pin 13','Door lock unit LOCK request input (pull-up)',2200],['w','C13A1-1.0','Lock request to splice'],['k','SPC13A1','Splice SPC13A1'],['w','C13A2-1.0','Splice to door connector'],['k','LKDL:B','Door lock connector LKDL pin B'],['sw','S80DS-L','Driver door panel LOCK button'],['w','X03DA30-2.0','Door panel ground']],e:'G:SPX03DA26'}
 ]},
{id:'IG',pg:88,t:'Cigar lighter / aux power sockets',z:'cab',
 note:'12V sockets: F12 feeds the dash sockets X07 / X07D through splice SPFD9AB1, F22 the CB power studs X200A, F09 the USB charger X66A, and F06 the RH sleeper sockets through MCSL3 and SPF06A1.',
 cols:[
  {f:'I',it:[['f','F12','Dash sockets fuse 20A',20],['k','FRC_J1:D10','FRC connector J1 pin D10'],['w','F12A1-2.0','F12 to splice SPFD9AB1'],['k','SPFD9AB1','Splice SPFD9AB1'],['w','F12A2-2.0','Splice to socket X07'],['E','X07','Socket, 12V dash (load plugged in)',10],['w','X03DF7-2.0','Socket ground']],e:'G:SPX03E2'},
  {f:[0,4],it:[['w','F12A3-2.0','Splice to socket X07D'],['E','X07D','Socket, 12V dash 2',5],['w','X03DF8-2.0','Socket ground']],e:'G:SPX03E2'},
  {f:'B',it:[['f','F22','CB power studs fuse 20A',20],['k','FRC_J1:A8','FRC connector J1 pin A8'],['w','F22A2-3.0','F22 to CB connector'],['k','MCCB:A','CB connector MCCB pin A'],['w','F22A3-3.0','MCCB to studs'],['E','X200A','12V studs, CB dash (CB radio)',3],['w','X03DC3-3.0','Stud ground'],['k','MCCB:B','CB connector MCCB pin B'],['w','X03DC3-3.0b','Ground to splice pack']],e:'G:SKX03F_C'},
  {f:'B',it:[['f','F09','USB charge ports fuse 10A',10],['k','FRC_J2:E12','FRC connector J2 pin E12'],['w','F09A1-0.8','F09 to USB charger'],['E','X66A','USB charger (phone charging)',2],['w','X03DF10-0.8','USB charger ground']],e:'G:SPX03D5'},
  {f:'B',it:[['f','F06','RH sleeper sockets fuse 20A',20],['k','FRC_J2:C11','FRC connector J2 pin C11'],['w','F06A1-3.0','F06 to sleeper connector'],['k','MCSL3:D','Sleeper connector MCSL3 pin D'],['w','F06A1-3.0b','MCSL3 to splice'],['k','SPF06A1','Splice SPF06A1'],['w','F06A2-2.0','Splice to socket X07E'],['E','X07E','Socket, 12V sleeper lower cabinet',8],['w','X03FA105A1-2.0','Socket ground']],e:'G:SPX03FA55'}
 ]}
);
