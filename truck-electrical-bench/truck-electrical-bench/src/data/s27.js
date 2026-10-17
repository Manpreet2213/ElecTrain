// Sheets IA, IB, IC (pages 83–85)
SH.push(
{id:'IA',pg:83,t:'Interior courtesy lights',z:'cab',
 note:'F26 (LVD bus) feeds the dome lamps directly and the door lamps through RLY09. The RLY09 coil is grounded through diode V01 by the door lock switch M105DS whenever a door is open, so the door lamps come on with the door.',
 cols:[
  {f:'B',it:[['f','F26','Dome / door interior lamps fuse 10A',10],['k','FRC_J2:C9','FRC connector J2 pin C9'],['w','F26C1-0.8','F26 to roof connector'],['k','MCOF1:B','Roof connector MCOF1 pin B'],['k','SPF26C3','Splice SPF26C3'],['w','F26C3-0.8','Splice to dome lamp'],['D','E17R','Lamp, interior light right',3],['w','X03FA35-0.8','Dome lamp ground']],e:'G:SPX03DD2'},
  {f:[0,1],it:[['k','FRC_J2:B9','FRC connector J2 pin B9'],['rc','RLY09','Dome / door lamps relay 30–87','RLY09'],['k','FRC_J2:C10','FRC connector J2 pin C10'],['w','F26C4-1.0','RLY09 87 to splice SPF26C4'],['k','SPF26C4','Splice SPF26C4'],['w','F26C5-0.8','Splice to door connector'],['k','MCDL3:E','Door connector MCDL3 pin E'],['D','E16L','Lamp, door D.S.',3],['w','X03DA37-0.8','Door lamp ground']],e:'G:SPX03DA26'},
  {f:[0,1],it:[['k','FRC_J2:A8','FRC connector J2 pin A8'],['rk','RLY09','Dome / door lamps relay coil','RLY09'],['k','FRC_J1:F9','FRC connector J1 pin F9'],['w','F26A1A-0.8','RLY09 85 to diode V01'],['k','V01','Diode V01 (1N4002)'],['k','SPF26A1A','Splice SPF26A1A'],['w','F26A1A3-0.8','Splice to door connector'],['k','MCDL3:G','Door connector MCDL3 pin G'],['sw','M105DS','Door lock control assy D.S. (door open)'],['w','X03DA33-0.8','Door switch ground']],e:'G:SPX03DA26'}
 ]},
{id:'IB',pg:84,t:'Heated windshield',z:'dash',
 note:'F48 feeds heated windshield control unit A148 (power A1) and the switch S234A. When the switch asks (B1), A148 powers the windscreen heater R15 through connector OLHW. Grounds go to splice SPX03E1B and SKX03D.',
 cols:[
  {f:'I',it:[['f','F48','Heated windshield fuse 10A',10],['k','FRC_J1:E5','FRC connector J1 pin E5'],['w','F48A1-1.0','F48 to splice SPF48A1'],['k','SPF48A1','Splice SPF48A1'],['w','F48A3-1.0','Splice to A148 A1'],['E','A148 A1','Heated windshield control unit power',0.2],['k','A148 B2','Control unit ground pin B2'],['w','X03DD22-1.0','Control unit ground'],['k','SPX03E1B','Ground splice SPX03E1B'],['w','X03DD20-1.0','Splice to splice pack']],e:'G:SKX03D'},
  {f:[0,4],it:[['w','F48A2-1.0','Splice to switch S234A'],['sw','S234A','Switch, heated windshield'],['w','F31E1-1.0','Switch to A148 B1'],['Q','A148 B1','Control unit request input',3000]],e:[0,7]},
  {f:[0,5],it:[['ecu','A148 C1','Heated windshield control output'],['w','DC1AA-1.0','Output to heater connector'],['k','OLHW:A','Heater connector OLHW pin A'],['w','F31E1-1.0b','OLHW to heater'],['X','R15','Windscreen heater element',8],['w','X03FA06-1.0','Heater return'],['k','OLHW:B','Heater connector OLHW pin B'],['w','X03DD21-1.0','Heater ground to splice']],e:[0,9]}
 ]},
{id:'IC',pg:85,t:'Power windows / mirrors with door control panel',z:'door',
 note:'F13 (ACC, 20A) feeds the driver door control panel S80DS through door connector MCDL3. The panel switches the window motor M06DS like an H-bridge and feeds the mirror heater R58L through MCFC:12. Panel ground is X03DA30 to SPX03DA26.',
 cols:[
  {f:'I',it:[['f','F13','LH window / mirror fuse 20A',20],['k','FRC_J1:E9','FRC connector J1 pin E9'],['w','F13A1-2.0','F13 to door connector'],['k','MCDL3:A','Door connector MCDL3 pin A'],['w','F13A2-2.0','Door connector to panel A:1'],['sw','S80DS-UP','Driver door panel, window UP'],['w','CA3A1-2.0','Panel A:3 to motor'],['M','M06DS','Motor, window winder D.S.',8],['w','CA2A1-2.0','Motor to panel A:2'],['sw','S80DS-RST','Window DOWN contact at rest (to ground)'],['k','S80DS A:4','Door panel ground pin A:4'],['w','X03DA30-2.0','Door panel ground']],e:'G:SPX03DA26'},
  {f:[0,5],it:[['sw','S80DS-HT','Mirror heat button'],['w','CA6A1-1.0','Mirror heat to splice'],['k','SPCA6C1','Splice SPCA6C1'],['w','CA6A2-0.8','Splice to MCFC'],['k','MCFC:12','Main cab-frame connector pin 12'],['k','FCHLL:10','Headlamp connector FCHLL pin 10'],['X','R58L','Heater, rear-view mirror LH',2],['w','X01X90F6-0.8','Mirror heater ground']],e:'G:SPX01X90F3'}
 ]}
);
