// Sheets FE, FF, FG (pages 55–57)
SH.push(
{id:'FE',pg:55,t:'Pusher override 8x2',z:'frame',
 note:'RLY14 output (FRC_J1:C8) feeds the pusher override switch S431P. The switch powers the dump solenoid in Z05 through MCFC:59 (ground X92:L) and lights the cluster indicator B:13.',
 cols:[
  {f:'I',it:[['f','F49','Reverse lamps / lift axle fuse 15A',15],['rc','RLY14','Lift axle / reverse signal relay 30–87','RLY14'],['k','FRC_J1:C8','FRC connector J1 pin C8'],['w','FC8A-1.0','RLY14 87 to S431P'],['sw','S431P','Switch, pusher override'],['w','FB6AC-1.0','S431P to MCFC'],['k','MCFC:59','Main cab-frame connector pin 59'],['k','Z05:C','Solenoid pack pin C'],['S','Z05-C','Pusher dump solenoid',0.8],['k','Z05:R','Solenoid pack ground pin R'],['w','X01X92L-1.0','Solenoid pack ground']],e:'G:X92:L'},
  {f:'I',it:[['k','FRC_J2:B7','Lift axle / reverse control (sheet GK)'],['rk','RLY14','Lift axle / reverse relay coil','RLY14']],e:'G:FRC_J1:B12'},
  {f:[0,6],it:[['w','HB13A4-0.8','Dump indicator to cluster B:13'],['Q','A03 B:13','Cluster dump indicator input',5000]],e:'G:SPX03D5'}
 ]},
{id:'FF',pg:56,t:'5th wheel lock',z:'frame',
 note:'Touch-lock switch S468 powers the 5th wheel release solenoid in Z05 through MCFC:108. The solenoid ground goes back through MCFC:107 and the switch to SPCB11A1 and the park brake pressure switch, so the 5th wheel only releases with the park brakes set.',
 cols:[
  {f:'I',it:[['f','F33','Air sol / sw fuse 10A',10],['k','FRC_J1:A7','FRC connector J1 pin A7'],['w','F33A6-1.0','F33 to S468'],['sw','S468','Switch, touch lock (RELEASE)'],['w','FB6B1-0.8','S468 to MCFC'],['k','MCFC:108','Main cab-frame connector pin 108'],['k','Z05:G','Solenoid pack pin G'],['S','Z05-G','5th wheel release solenoid',0.8],['k','Z05:M','Solenoid pack pin M'],['w','CB11B5-0.8','Solenoid return'],['k','MCFC:107','Main cab-frame connector pin 107'],['sw','S468-R','Touch lock switch, return contact'],['w','CB11A8-0.8','S468 to splice SPCB11A1'],['k','SPCB11A1','Splice SPCB11A1'],['w','CB11A2-0.8','Splice to park brake switch'],['sw','S43','Park brake pressure switch (brakes set)'],['w','X03DA5-0.8','Switch ground']],e:'G:SPX03D2'},
  {f:'B',it:[['ecu','ILLUM','Dash illumination supply (dimmer)'],['k','SK141B:J','Illumination splice SK141B pin J'],['w','PBAJ1-0.8','Illumination to S468'],['D','S468-LED','Touch lock switch illumination',0.3],['w','X03DB4-0.8','Switch ground']],e:'G:SKX03F_B'}
 ]},
{id:'FG',pg:57,t:'Tire pressure monitoring system',z:'frame',
 note:'TPMS control unit A240 is fed from FE14 through splice SPFE14A1 and grounds at X93:A. The tire pressure receiver A247 is powered by the ABS ECU and talks to it on a LIN wire through MCFC:111–113.',
 cols:[
  {f:'I',it:[['f','FE14','TPM fuse 5A',5],['k','EFRC.D2:N','EFRC connector D2 pin N'],['w','FE14A1-0.8','FE14 to splice SPFE14A1'],['k','SPFE14A1','Splice SPFE14A1'],['w','FE14A2-0.8','Splice to A240 pin 2'],['E','A240 pin 2','TPMS control unit 12V',0.3],['k','A240 pin 1','TPMS ground pin 1'],['w','X01X93A-0.8','TPMS ground wire']],e:'G:X93:A'},
  {f:[0,4],it:[['w','FE14A3-0.8','Splice to A240 pin 15'],['Q','A240 pin 15','TPMS wake input',2000]],e:[0,6]},
  {f:'B',it:[['ecu','A12B C:1','ABS TPM LIN power output'],['w','JC1A5-0.8','LIN power to MCFC'],['k','MCFC:111','Main cab-frame connector pin 111'],['w','JC1A5-0.8b','MCFC to receiver'],['E','A247 A:5','Tire pressure receiver power',0.1],['k','A247 A:11','Receiver ground pin A:11'],['w','XA6A11-0.8','Receiver ground to MCFC'],['k','MCFC:113','Main cab-frame connector pin 113'],['w','XA6A11-0.8b','Ground back to ABS A:6']],e:'G:X03E'},
  {f:'5',it:[['Q','A12B A:9','ABS TPM LIN line (pull-up)',1000],['w','JA9A10-0.8','LIN signal to MCFC'],['k','MCFC:112','Main cab-frame connector pin 112'],['w','JA9A10-0.8b','MCFC to receiver A:10'],['Q','A247 A:10','Receiver LIN transceiver',30000]],e:[2,6]}
 ]}
);
