// Sheets HF, HG, HI (pages 77–79)
SH.push(
{id:'HF',pg:77,t:'L3–L4 sleeper functions, lighting, refrigerator',z:'sleeper',
 note:'L3/L4 sleeper: the LECM upper-left reading lamp output (C:12) runs through overhead connector SLOB to E18M; the refrigerator A04B is on B:4; the lower reading lamp output (B:9) feeds E148B under the cabinet. Grounds collect at SPX03FA56 / SPX03FA55.',
 cols:[
  {f:'B',it:[['f','F15','LECM1 fuse 30A',30],['k','FRC_J2:B11','FRC connector J2 pin B11'],['w','F15A1-3.0','F15 to LECM'],['k','SLECM:B','LECM connector SLECM pin B'],['ecu','A46 C:12','LECM upper left reading lamp output'],['w','FB01A1-0.8','Output to overhead connector'],['k','SLOB:C','Sleeper overhead connector SLOB pin C'],['w','FB01A1-0.8b','SLOB to reading lamp'],['D','E18M','Lamp, upper reading D.S.',3],['w','X03FA64-0.8','Lamp ground'],['k','SPX03FA56','Ground splice SPX03FA56'],['w','X03FA56-2.0','Splice to SLOB'],['k','SLOB:F','Sleeper overhead connector SLOB pin F'],['w','X03FA56-3.0','Ground to SPX03FC1']],e:'G:SPX03FC1'},
  {f:[0,4],it:[['ecu','A46 B:4','LECM refrigerator output'],['w','FB05A1-1.0','Output to refrigerator'],['M','A04B','Refrigerator',5],['w','X03FA106-1.0','Refrigerator ground'],['k','SPX03FA55','Ground splice SPX03FA55'],['w','X03FA55-3.0','Splice to ground']],e:'G:SPX03FC1'},
  {f:[0,4],it:[['ecu','A46 B:9','LECM lower left reading lamp output'],['w','FB07B1-0.8','Output to splice SPFB07B1'],['k','SPFB07B1','Splice SPFB07B1'],['w','FB04A1-0.8','Splice to SLOB'],['k','SLOB:A','Sleeper overhead connector SLOB pin A'],['D','E148B','Lamp, under cabinet D.S.',3],['w','X03FA71-0.8','Lamp ground']],e:[0,11]}
 ]},
{id:'HG',pg:78,t:'L5H4 sleeper functions',z:'sleeper',
 note:'L5H4 sleeper: LECM panel lamp E37 on B:8, the fluorescent lamp E17C on the overhead output C:3, and the interior lighting switch S05A as an LECM input. Grounds collect at SPX03FA55 / SPX03FA60.',
 cols:[
  {f:'B',it:[['f','F15','LECM1 fuse 30A',30],['k','FRC_J2:B11','FRC connector J2 pin B11'],['w','F15A1-3.0','F15 to LECM'],['k','SLECM:B','LECM connector SLECM pin B'],['ecu','A46 B:8','LECM panel lamp output'],['w','FB07C1-0.8','Output to panel lamp'],['D','E37','Lamp, LECM panel',2],['w','X03FA109-0.8','Panel lamp ground'],['k','SPX03FA55','Ground splice SPX03FA55'],['w','X03FA55-3.0','Splice to sleeper connector'],['k','MCSL3:B','Sleeper connector MCSL3 pin B'],['w','X03FA55-3.0b','Ground to SPX03FC1']],e:'G:SPX03FC1'},
  {f:[0,4],it:[['ecu','A46 C:3','LECM overhead lamp output'],['w','FB07A1-0.8','Output to fluorescent lamp'],['E','E17C','Lamp, fluorescent (with ballast)',1.5],['w','X03FA63-0.8','Lamp ground'],['k','SPX03FA60','Ground splice SPX03FA60'],['w','X03FA56-3.0','Splice to ground']],e:'G:SPX03FC1'},
  {f:'5',it:[['Q','A46 A:9','LECM overhead light OFF input (pull-up)',2200],['w','PA9A1-0.8','Switch signal'],['k','MCSL2:H','Sleeper connector MCSL2 pin H'],['w','GA08A1-0.8','To switch S05A'],['sw','S05A','Switch, interior lighting (OFF position)'],['w','X03FH1-0.8','Switch ground']],e:[0,9]}
 ]},
{id:'HI',pg:79,t:'Cab maintenance inverter with shore power',z:'sleeper',hr:0.05,
 note:'The 12V-to-120V inverter G03H is fed straight from the battery through FB09 (125A) and grounds to the frame stud X01F. Its 120V output goes to power distribution unit G04 and the sleeper receptacles.',
 cols:[
  {f:'B',it:[['w','G01A1-50.0','Battery to inverter fuse'],['f','FB09','Fuse, inverter 125A',125],['k','G01_P3B:1','Inverter fuse output stud'],['w','G01_P3A-50.0','Inverter + cable'],['k','G03H A:+','Inverter 12V input +'],['E','G03H','Inverter 12V DC input (under load)',80],['k','G03H A:-','Inverter 12V input −'],['w','G01_N2A-50.0','Inverter − cable'],['k','G01_N2B:1','Inverter ground stud'],['w','X01FA1-50.0','Ground to frame rail stud']],e:'G:X01F'},
  {f:'A',v:120,it:[['k','G03H D:B','Inverter 120V output, hot'],['w','D:B-G04','Inverter to PDU input'],['k','G04 B:B','PDU 120V input, hot'],['k','G04 C:B','PDU output C, hot'],['w','C:B-Z18','PDU to D.S. cabinet receptacle'],['k','Z18:A1','Receptacle D.S. cabinet, hot'],['E','Z18','Appliance on D.S. cabinet receptacle',8],['k','Z18:A3','Receptacle D.S. cabinet, neutral'],['k','G04 C:W','PDU output C, neutral'],['w','G04-W','Neutral back to inverter D:W']],e:'N'}
 ]}
);
