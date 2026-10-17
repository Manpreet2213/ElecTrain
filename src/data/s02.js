// Sheets AE–AG (pages 7–9)
SH.push(
{id:'AE',pg:7,t:'Grounding',z:'frame',hr:0.3,
 note:'All returns end at the battery: cab splice packs SKX03 → cab stud X03 → SPX01BA1 → frame rail stud X01F → battery negative. Engine block X02 and bulkhead X04 tie in along the way.',
 cols:[
  {f:'B',it:[['f','F52','Cab circuits feed (typical)',30],['E','CAB','Cab electrical loads',15],['k','SKX03D','Ground splice pack SKX03D'],['w','X03E1A1-3.0','Splice pack to cab stud'],['k','X03','Cab ground stud X03'],['w','X01BA3-19.0','Cab stud to frame splice'],['k','SPX01BA1','Ground splice SPX01BA1'],['w','X01B3-32.0','Splice to frame rail stud'],['k','X01F','Frame rail ground stud X01F'],['w','X18A1-8.0','Frame stud to fusible link'],['k','X18','Fusible link 400A (ground side)'],['w','X18A2-32.0','Fusible link to battery negative']],e:'N'},
  {f:'B',it:[['f','FE4','Engine circuits feed (typical)',30],['E','ENG','Engine ECU and sensor returns',8],['k','X02','Engine block ground stud X02'],['w','X01D1-32.0','Engine block to frame rail stud']],e:[0,9]},
  {f:'B',it:[['f','F02','Bulkhead circuits feed (typical)',15],['E','BHD','Bulkhead (HVAC, wipers) loads',5],['k','X04','Bulkhead ground stud X04'],['w','X01BA2-19.0','Bulkhead stud to frame splice']],e:[0,7]}
 ]},
{id:'AF',pg:8,t:'Starting and charging',z:'engine',hr:0.06,
 note:'Key START energises the starter solenoid (terminal 50). The solenoid closes the heavy contacts so battery current flows through the main switch S169 into the starter motor M04.',
 cols:[
  {f:'B',it:[['w','B01A2-103.0','Battery cable to main switch'],['sw','S169','Battery main switch (ON)'],['w','B01A2-50.0','Main switch to starter'],['k','M04:30','Starter terminal 30 (B+)'],['rc','M04S','Starter solenoid main contacts','M04S'],['M','M04','Starter motor (cranking)',150]],e:'G:X02'},
  {f:'I',it:[['sw','S15-ST','Key switch START position'],['w','C15JA3-1.0','Key start signal'],['k','MCFC:116','Main cab-frame connector pin 116'],['w','C15JA5-1.0','Start signal to starter'],['k','M04:50','Starter terminal 50 (SIG)'],['rk','M04S','Starter solenoid pull-in winding','M04S']],e:'G:X02'}
 ]},
{id:'AG',pg:9,t:'Vehicle ECU 1/4 – EMS power control',z:'cab',
 note:'The VECU (A17) switches RLY19 (EMS2). RLY19 then energises RE04 in the EFRC, which powers the engine ECU through FE4.',
 cols:[
  {f:'B',it:[['f','F69','VECU / engine brake switch fuse 10A',10],['k','FRC_J2:D2','FRC connector J2 pin D2'],['w','F69A1-0.8','F69 to VECU A:11'],['E','A17','VECU power (A:11 EMS power)',0.5],['w','X03EA27-0.8','VECU ground A:12']],e:'G:SPX03E2'},
  {f:'B',it:[['ecu','A17 B:15','VECU EMS relay output'],['w','MB15A2-0.8','VECU to splice SPFB15A1'],['k','MCFC:54','Main cab-frame connector pin 54'],['w','MB15A1-0.8','To RLY19 pin 86'],['rk','RLY19','EMS2 relay coil','RLY19']],e:'G:FRC_J3:A11'},
  {f:'B',it:[['rc','RLY19','RLY19 contacts 30–87','RLY19'],['w','FR19A86-0.8','RLY19 to EFRC RE04 86'],['k','EFRC.D1:B','EFRC connector D1 pin B'],['rk','RE04','EFRC EMS relay coil','RE04']],e:'G:X05'},
  {f:'B',it:[['k','U01A','EFRC B+ bus'],['rc','RE04','RE04 contacts 30–87','RE04'],['f','FE4','EMS main fuse 30A',30],['k','EFRC.B2:B','EFRC connector B2 pin B'],['w','FE4B1-3.0','FE4 to splice SPFE4A1'],['k','X11:A15','Engine ECU connector A pin 15'],['E','A14','Engine ECU main power',3]],e:'G:X02'}
 ]}
);
