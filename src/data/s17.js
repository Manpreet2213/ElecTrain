// Sheets FB, FC, FD (pages 52–54)
SH.push(
{id:'FB',pg:52,t:'Lift axles VHD',z:'frame',
 note:'RLY14 sends power through splice SPFC8A1 to the lift axle switches S11A / S11B. Each switch feeds a lift-axle solenoid in solenoid pack Z05 through the MCFC; the pack grounds at split connectors X91 / X92.',
 cols:[
  {f:'I',it:[['f','F49','Reverse lamps / lift axle fuse 15A',15],['rc','RLY14','Lift axle / reverse signal relay 30–87','RLY14'],['k','FRC_J1:C8','FRC connector J1 pin C8'],['w','FC8A1-0.8','RLY14 87 to splice SPFC8A1'],['k','SPFC8A1','Splice SPFC8A1'],['w','FC8A2-0.8','Splice to S11A'],['sw','S11A','Switch, first lift axle (DOWN)'],['w','NA8AJ-0.8','S11A to MCFC'],['k','MCFC:110','Main cab-frame connector pin 110'],['k','Z05:J','Solenoid pack pin J'],['S','Z05-J','First lift axle solenoid',0.8],['k','Z05:R','Solenoid pack ground pin R'],['w','X01X91D-0.8','Solenoid pack ground']],e:'G:X91:D'},
  {f:'I',it:[['k','FRC_J2:B7','Lift axle / reverse control (sheet GK)'],['rk','RLY14','Lift axle / reverse relay coil','RLY14']],e:'G:FRC_J1:B12'},
  {f:[0,5],it:[['w','FC8A4-0.8','Splice to S11B'],['sw','S11B','Switch, aux axle 1 (DOWN)'],['w','NA8AG-0.8','S11B to MCFC'],['k','MCFC:14','Main cab-frame connector pin 14'],['k','Z05:G','Solenoid pack pin G'],['S','Z05-G','Aux axle 1 solenoid',0.8],['k','Z05:M','Solenoid pack ground pin M'],['w','X01X92K-1.0','Solenoid pack ground']],e:'G:X92:K'}
 ]},
{id:'FC',pg:53,t:'Suspension dump, 5th wheel slide',z:'frame',
 note:'F33 feeds the suspension dump switch S93 and the 5th wheel slide switch S94A. Each one powers its solenoid in Z05 through the MCFC. S93 also tells the cluster (B:13) that the suspension is dumped.',
 cols:[
  {f:'I',it:[['f','F33','Air sol / sw fuse 10A',10],['k','FRC_J1:B7','FRC connector J1 pin B7'],['w','F33A2-0.8','F33 to S93'],['sw','S93','Switch, suspension dump'],['w','FB6AC-0.8','S93 to MCFC'],['k','MCFC:59','Main cab-frame connector pin 59'],['k','Z05:C','Solenoid pack pin C'],['S','Z05-C','Suspension dump solenoid',0.8],['k','Z05:R','Solenoid pack ground pin R'],['w','X01X91D-0.8','Solenoid pack ground']],e:'G:X91:D'},
  {f:[0,1],it:[['k','FRC_J1:A5','FRC connector J1 pin A5'],['w','F33A3-0.8','F33 to S94A'],['sw','S94A','Switch, 5th wheel slide (UNLOCK)'],['w','FB6B1-0.8','S94A to MCFC'],['k','MCFC:63','Main cab-frame connector pin 63'],['k','Z05:H','Solenoid pack pin H'],['S','Z05-H','5th wheel slide solenoid',0.8],['k','Z05:A','Solenoid pack ground pin A'],['w','X01DA51-0.8','Solenoid pack ground']],e:'G:SKX03F_B'},
  {f:[0,4],it:[['w','HB13A4-0.8','Dump indicator to cluster B:13'],['Q','A03 B:13','Cluster suspension dump indicator input',5000]],e:'G:SPX03D5'}
 ]},
{id:'FD',pg:54,t:'Differential lock VN / VHD',z:'frame',
 note:'F33 feeds the interwheel diff lock switch S08 and the interaxle switch S09. They power the lock solenoids in Z05 through MCFC:62 / MCFC:60; the pack grounds at X92. S09 also lights the cluster indicator (B:21).',
 cols:[
  {f:'I',it:[['f','F33','Air sol / sw fuse 10A',10],['k','FRC_J1:A4','FRC connector J1 pin A4'],['w','F33A5-0.8','F33 to S08'],['sw','S08','Switch, diff lock interwheel'],['w','FB6AB-0.8','S08 to MCFC'],['k','MCFC:62','Main cab-frame connector pin 62'],['k','Z05:B','Solenoid pack pin B'],['S','Z05-B','Inter-wheel lock solenoid',0.8],['k','Z05:L','Solenoid pack ground pin L'],['w','X01X92J-1.0','Solenoid pack ground']],e:'G:X92:J'},
  {f:[0,2],it:[['w','F33A4-0.8','F33 to S09'],['sw','S09','Switch, diff lock interaxle'],['w','FB6AE-0.8','S09 to MCFC'],['k','MCFC:60','Main cab-frame connector pin 60'],['k','Z05:D','Solenoid pack pin D'],['S','Z05-D','Inter-axle lock solenoid',0.8],['k','Z05:S','Solenoid pack ground pin S'],['w','X01X92H-1.0','Solenoid pack ground']],e:'G:X92:H'},
  {f:[1,2],it:[['w','HB21A4-0.8','Inter-axle indicator to cluster'],['Q','A03 B:21','Cluster inter-axle lock indicator input',5000]],e:'G:SPX03D5'}
 ]}
);
