// Sheets GQ, HC, HD, HE (pages 71, 74–76)
SH.push(
{id:'GQ',pg:71,t:'Horn',z:'cab',
 note:'F20 feeds the city horn relay RLY10 and the air horn solenoid in Z05. The horn buttons only signal the cluster (sheet BB); the cluster A03 then grounds the relay coil (C:12) or the air horn solenoid (C:13).',
 cols:[
  {f:'B',it:[['f','F20','Horn fuse 10A',10],['k','FRC_J3:F3','FRC connector J3 pin F3'],['w','F20AK-1.0','F20 to relay and solenoid pack'],['k','FRC_J2:F10','FRC connector J2 pin F10'],['rc','RLY10','City horn relay 30–87','RLY10'],['k','FRC_J2:F9','FRC connector J2 pin F9'],['w','F20A1-1.0','RLY10 87 to MCFC'],['k','MCFC:70','Main cab-frame connector pin 70'],['w','F20A1-1.0b','MCFC to horn'],['H','H02A','Horn, dual tone',6],['w','X03CA4-1.0','Horn ground']],e:'G:SPX03X95B'},
  {f:[0,3],it:[['w','HC12A2-0.8','Feed to RLY10 86'],['rk','RLY10','City horn relay coil','RLY10'],['w','HC12A3-0.8','RLY10 85 to splice'],['k','SPHC12A1','Splice SPHC12A1'],['w','HC12A1-0.8','Splice to cluster C:12'],['ecu','A03 C:12','Cluster city horn relay output (low side)']],e:'G:SPX03D5'},
  {f:[0,3],it:[['k','MCFC:73','Main cab-frame connector pin 73'],['w','F20AK-1.0b','MCFC to solenoid pack'],['k','Z05:K','Solenoid pack pin K'],['S','Z05-K','Air horn solenoid',1],['k','Z05:N','Solenoid pack pin N'],['w','HC13AN-0.8','Solenoid return to MCFC'],['k','MCFC:72','Main cab-frame connector pin 72'],['w','HC13AN-0.8b','MCFC to cluster C:13'],['ecu','A03 C:13','Cluster air horn output (low side)']],e:'G:SPX03D5'}
 ]},
{id:'HC',pg:74,t:'Shore power (120V AC)',z:'sleeper',
 note:'120V AC from a shore cord goes into power distribution unit G04, which splits it to the sleeper receptacles Z18, Z19 and Z20. The G04 ground (green wire) bonds to the cab at SPX03FA55. Treat this circuit as live 120V.',
 cols:[
  {f:'A',v:120,it:[['cb','SHORE-CB','Shore pedestal breaker 15A',15],['w','SHORE-L','Shore cord hot (black)'],['k','G04 B:B','PDU 120V input hot'],['k','G04 C:B','PDU output C hot'],['w','C:B-Z18','PDU to D.S. cabinet receptacle'],['k','Z18:A1','Receptacle D.S. cabinet, hot'],['E','Z18','Appliance on D.S. cabinet receptacle',8],['k','Z18:A3','Receptacle D.S. cabinet, neutral'],['w','Z18-N','Receptacle neutral (white)'],['k','G04 C:W','PDU output C neutral']],e:'N'},
  {f:[0,3],v:120,it:[['k','G04 D:B','PDU output D hot'],['w','D:B-Z19','PDU to P.S. cabinet receptacle'],['k','Z19:A1','Receptacle P.S. cabinet, hot'],['E','Z19','Appliance on P.S. cabinet receptacle',4],['k','Z19:A3','Receptacle P.S. cabinet, neutral']],e:[0,10]}
 ]},
{id:'HD',pg:75,t:'Sleeper with LECM – L4EH bunk',z:'sleeper',
 note:'LECM outputs for the bunk: the luggage lamp output (C:7) feeds splice SPFB02A1 and lamps E23C_A / E23PS, grounded at SPX03FA39. The overhead output (C:3) lights the LED strip E17C_H4. S05A is the interior lighting switch input.',
 cols:[
  {f:'B',it:[['f','F15','LECM1 fuse 30A',30],['k','FRC_J2:B11','FRC connector J2 pin B11'],['w','F15A1-3.0','F15 to LECM'],['k','SLECM:B','LECM connector SLECM pin B'],['ecu','A46 C:7','LECM luggage lamp output'],['w','FB02A1-0.8','Output to LECM connector'],['k','SLECM:AA','LECM connector SLECM pin A.A'],['w','FB02A1-0.8b','To splice SPFB02A1'],['k','SPFB02A1','Splice SPFB02A1'],['w','FB02A2-0.8','Splice to D.S. luggage lamp'],['D','E23C_A','Lamp, luggage D.S.',3],['w','X03FA67-0.8','Lamp ground'],['k','SPX03FA39','Ground splice SPX03FA39'],['w','X03FA37-1.0','Splice to SPX03D5']],e:'G:SPX03D5'},
  {f:[0,9],it:[['w','FB02A3-0.8','Splice to P.S. luggage lamp'],['D','E23PS','Lamp, luggage P.S.',3],['w','X03FA68-0.8','Lamp ground']],e:[0,13]},
  {f:[0,4],it:[['ecu','A46 C:3','LECM overhead lamp output'],['w','FB07A1-0.8','Output to LECM connector'],['k','SLECM:CB','LECM connector SLECM pin C.B'],['w','FB07A1-1.0','To overhead strip'],['D','E17C_H4','Lamp, overhead center LED strip',6],['w','X03FA70-1.0','Strip ground'],['k','SPX03FA59','Ground splice SPX03FA59'],['w','X03FA73-1.0','Splice to ground']],e:'G:SPX03FA55'},
  {f:'5',it:[['Q','A46 A:10','LECM overhead light ON input (pull-up)',2200],['w','PA10A1-0.8','Switch signal'],['k','SLECM:BC','LECM connector SLECM pin B.C'],['w','PA10A1-0.8b','To sleeper connector'],['k','MCSL2:G','Sleeper connector MCSL2 pin G'],['sw','S05A','Switch, interior lighting (ON)'],['w','X03FG1-0.8','Switch ground']],e:'G:SPX03FA1'}
 ]},
{id:'HE',pg:76,t:'Sleeper with LECM – L4E',z:'sleeper',
 note:'L4E sleeper loads on the LECM: the refrigerator A04A on B:4 (FB5, 15A), the 12V TV outlet X79 on C:5 (FB10) and the rear-wall LED strip E17D on C:10, each with its own ground splice.',
 cols:[
  {f:'B',it:[['f','F15','LECM1 fuse 30A',30],['k','FRC_J2:B11','FRC connector J2 pin B11'],['w','F15A1-3.0','F15 to LECM'],['k','SLECM:B','LECM connector SLECM pin B'],['ecu','A46 B:4','LECM refrigerator output'],['w','FB05A1-1.0','Output to LECM connector'],['k','SLECM:BD','LECM connector SLECM pin B.D'],['w','FB05A1-2.0','To refrigerator'],['M','A04A','Refrigerator compressor',5],['w','X03FA106-2.0','Refrigerator ground']],e:'G:SPX03FA55'},
  {f:[0,4],it:[['ecu','A46 C:5','LECM TV / VCR outlet output'],['w','FB10A1-1.0','Output to LECM connector'],['k','SLECM:CD','LECM connector SLECM pin C.D'],['w','FB10A1-1.0b','To 12V outlet'],['k','12VSL:B','12V outlet connector pin B'],['E','X79','12V TV preparation outlet (TV load)',3],['k','12VSL:A','12V outlet connector pin A'],['w','X03FA77-1.0','Outlet ground']],e:'G:SPX03FA52'},
  {f:[0,4],it:[['ecu','A46 C:10','LECM working lamp output'],['w','FB07C1-1.0','Output to sleeper connector'],['k','SLOB:H','Sleeper overhead connector SLOB pin H'],['w','FB07C1-1.0b','To rear wall strip'],['D','E17D','Lamp, rear wall center LED strip',4],['w','X03FA66-1.0','Strip ground'],['k','SPX03FA62','Ground splice SPX03FA62'],['w','X03FA62-1.0','Splice to ground']],e:'G:SPX03FA56'}
 ]}
);
