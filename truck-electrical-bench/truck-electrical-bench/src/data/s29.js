// Sheets IH, IR, IS (pages 89–91)
SH.push(
{id:'IH',pg:89,t:'Brightwork (under-cab LED lamps)',z:'chassis',
 note:'Brightwork switch S365 sends F26 power through MCFC:15 and FCBW to splice SPF08A2, which splits to the left and right under-cab LED groups (E81, E147). The groups ground through SPX04EA2 / SPX04EA1 to bulkhead ground X04E.',
 cols:[
  {f:'B',it:[['f','F26','Dome / door interior lamps fuse 10A',10],['k','FRC_J2:D8','FRC connector J2 pin D8'],['w','F26D1-1.0','F26 to switch S365'],['sw','S365','Switch, brightwork lamps'],['w','F26E1-1.0','S365 to MCFC'],['k','MCFC:15','Main cab-frame connector pin 15'],['w','F08A1-1.0','MCFC to brightwork connector'],['k','FCBW:A','Brightwork connector FCBW pin A'],['w','F08A2-2.0','FCBW to splice SPF08A2'],['k','SPF08A2','Splice SPF08A2'],['w','F08A3-2.0','Splice to left side'],['k','BWBF:A','Left brightwork connector BWBF pin A'],['k','SPF08A3','Splice SPF08A3'],['w','F08A5-0.8','Splice to lamp E81A'],['D','E81A','Under-cab LED lamp, left front A',1],['w','X04EA5-0.8','Lamp ground'],['k','SPX04EA2','Ground splice SPX04EA2'],['w','X04EA3-2.0','Splice to BWBF'],['k','BWBF:B','Left brightwork connector BWBF pin B'],['k','SPX04EA1','Ground splice SPX04EA1'],['w','X04EA1-2.0','Ground to bulkhead']],e:'G:X04E'},
  {f:[0,13],it:[['w','F08A6-0.8','Splice to lamp E81B'],['D','E81B','Under-cab LED lamp, left front B',1],['w','X04EA6-0.8','Lamp ground']],e:[0,17]},
  {f:[0,10],it:[['w','F08A4-2.0','Splice to right side'],['k','SPF08A3R','Splice SPF08A3 (right side)'],['w','F08A5R-0.8','Splice to lamp E147A'],['D','E147A','Under-cab LED lamp, right front A',1],['w','X04EA5R-0.8','Lamp ground'],['k','SPX04EA2R','Ground splice SPX04EA2 (right)'],['w','X04EA4-2.0','Right side ground']],e:[0,20]}
 ]},
{id:'IR',pg:90,t:'Seat belts, heated seats',z:'cab',
 note:'F03 (ACC) feeds splice SPF03A1 and both heated seats R92R / R92L, which ground through SPX03FC4. Seat belt switch S61A closes when the belt is latched and grounds cluster input A:10.',
 cols:[
  {f:'I',it:[['f','F03','Heated seats fuse 20A',20],['k','FRC_J1:E12','FRC connector J1 pin E12'],['w','F03A1-2.0','F03 to splice SPF03A1'],['k','SPF03A1','Splice SPF03A1'],['w','F03A2-2.0','Splice to right seat'],['X','R92R','Heated seat, right',5],['w','X03DD25-2.0','Right seat ground'],['k','SPX03FC4','Ground splice SPX03FC4'],['w','X03DD8-2.0','Splice to splice pack']],e:'G:SKX03F_C'},
  {f:[0,4],it:[['w','F03A3-2.0','Splice to left seat'],['X','R92L','Heated seat, left',5],['w','X03DA24-2.0','Left seat ground']],e:[0,8]},
  {f:'5',it:[['Q','A03 A:10','Cluster seat belt input (pull-up)',2200],['w','HA10AB-0.8','Seat belt signal'],['sw','S61A','Position switch, seat belt lock (latched)'],['w','X03DD13-0.8','Switch ground']],e:'G:SPX03D5'}
 ]},
{id:'IS',pg:91,t:'Seat Bose (active seat suspension)',z:'cab',
 note:'Bose seat suspension units: the driver seat A381DS takes 30A from F76, the passenger seat A381PS from F24, both get ignition from F38 through splice SPF38A3, and both ground through SPX03E8 to cab stud X03.',
 cols:[
  {f:'B',it:[['f','F76','D.S. seat suspension fuse 30A',30],['k','FRC_J1:A1','FRC connector J1 pin A1'],['w','F76A2-5.0','F76 to driver seat'],['E','A381DS A:2','Bose seat suspension D.S. power',10],['k','A381DS A:1','Driver seat ground pin A:1'],['w','X03EA82-5.0','Driver seat ground'],['k','SPX03E8','Ground splice SPX03E8'],['w','X03EA81-5.0','Splice to cab stud']],e:'G:X03'},
  {f:'I',it:[['f','F38','LECM / aux AC fuse 5A',5],['k','FRC_J2:E9','FRC connector J2 pin E9'],['w','F38A2-0.8','F38 to splice SPF38A3'],['k','SPF38A3','Splice SPF38A3'],['w','F38A3-0.8','Splice to driver seat A:3'],['Q','A381DS A:3','Driver seat IGN input',2000]],e:[0,5]},
  {f:'B',it:[['f','F24','P.S. seat suspension fuse 20A',20],['k','FRC_J1:D9','FRC connector J1 pin D9'],['w','F24A2-5.0','F24 to passenger seat'],['E','A381PS A:2','Bose seat suspension P.S. power',10],['w','X03EA83-5.0','Passenger seat ground']],e:[0,7]},
  {f:[1,4],it:[['w','F38A4-0.8','Splice to passenger seat A:3'],['Q','A381PS A:3','Passenger seat IGN input',2000]],e:[0,7]}
 ]}
);
