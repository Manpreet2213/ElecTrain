// Sheets AK–AM (pages 13–15)
SH.push(
{id:'AK',pg:13,t:'Power supply – manual trans start',z:'cab',
 note:'With a manual transmission the start signal goes through RLY11 (start enable). F54 powers the coil; the VECU grounds pin 85 only when the clutch is down, then key START reaches starter terminal 50.',
 cols:[
  {f:'I',it:[['f','F54','Transmission fuse 10A',10],['k','FRC_J2:F4','FRC connector J2 pin F4'],['w','F54A1-0.8','F54 to RLY11 86'],['rk','RLY11','Start enable relay coil','RLY11'],['w','CA11JE6-0.8','RLY11 85 to VECU A:11'],['ecu','A17 A:11','VECU start enable (clutch down)']],e:'G:SKX03F_B'},
  {f:'I',it:[['sw','S15-ST','Key switch START position'],['w','F44A3-1.0','Key start to RLY11 30'],['k','FRC_J5:C5','FRC connector J5 pin C5'],['rc','RLY11','Start enable contacts 30–87','RLY11'],['k','FRC_J5:D5','FRC connector J5 pin D5'],['w','F44A6-1.0','RLY11 87 to MCFC'],['k','MCFC:116','Main cab-frame connector pin 116'],['w','PR11A87-0.8','Start signal to starter'],['S','M04-50','Starter solenoid (terminal 50)',12]],e:'G:X02'}
 ]},
{id:'AL',pg:14,t:'Grounding options',z:'frame',hr:0.3,
 note:'Frame grounds: split connectors X90–X95 collect lamp and sensor grounds and return them through SPX01FLA1 to the frame rail stud X01F, then through fusible link X18 to battery negative.',
 cols:[
  {f:'B',it:[['f','F-LAMPS','Frame lamp feed (typical)',20],['E','X91','Frame lamps and sensors on split connector X91',6],['k','X91:A','Split ground connector X91'],['w','X01FLA2-3.0','X91 to ground splice'],['k','SPX01FLA1','Ground splice SPX01FLA1'],['w','X01FLA1-8.0','Splice to frame rail stud'],['k','X01F','Frame rail ground stud X01F'],['w','X18B1-8.0','Frame stud to fusible link'],['k','X18','Fusible link 400A'],['w','X18A1-50.0','Fusible link to battery negative']],e:'N'},
  {f:'B',it:[['f','F-CAB','Cab feed (typical)',30],['E','CAB','Cab loads returning to X03',12],['k','X03','Cab ground stud X03'],['w','X01BA3-19.0','Cab stud to SPX01_B'],['k','SPX01_B','Ground splice SPX01_B'],['w','X01BA1-32.0','Splice to frame rail stud']],e:[0,7]},
  {f:'B',it:[['f','F-REAR','Back of cab feed (typical)',15],['E','X95','Back-of-cab loads on split connector X95',4],['k','X95:A','Split ground connector X95'],['w','X03CC1-3.0','X95 to cab stud']],e:[1,3]}
 ]},
{id:'AM',pg:15,t:'Charging and power cable options',z:'frame',hr:0.2,
 note:'Main power: FEM01 feeds the EFRC stud U01A. The bi-stable battery switch S169A is closed by the dash control switch S41 through FT04. The alternator sense wire runs through FB8.',
 cols:[
  {f:'B',it:[['w','FEM01A1-50.0','Battery to main fuse'],['f','FEM01','Fuse, main power',250],['w','FM01B1-50.0','Main fuse to splice'],['k','SPFM01B1','Splice SPFM01B1'],['w','FM01B2-19.0','Splice to EFRC'],['k','U01A','EFRC power stud'],['E','EFRC-LOAD','EFRC and FRC loads',20]],e:'G:X01F'},
  {f:'B',it:[['f','FT04','Fuse, disconnect switch 2A',2],['w','B02B3-1.0','FT04 to splice SPB02'],['k','SPB02','Splice SPB02'],['w','B02B4-0.8','Splice to S41'],['sw','S41','Battery main switch control (CLOSE)'],['w','DS02A1-0.8','S41 to IC2CH'],['k','IC2CH:C','Inline connector IC2CH pin C'],['w','DS02A1-1.0','To S169A close input'],['rk','S169A','Bi-stable battery switch close coil','S169A'],['w','X01FJH1-1.0','S169A coil ground']],e:'G:X01F'},
  {f:'B',it:[['w','-103.0','Battery cable to S169A'],['rc','S169A','Bi-stable switch main contacts','S169A'],['w','-103.0b','S169A to junction X210'],['k','X210','Junction, starter cables'],['E','MAIN','Vehicle main loads via X210',30]],e:'G:X02'},
  {f:'B',it:[['w','G01A3-2.0','Battery + to sense fuse'],['f','FB8','Fuse, remote sense alternator 10A',10],['w','G02A3-2.0','Sense fuse to alternator'],['Q','G02:S','Alternator remote sense input',5000]],e:'G:X02'}
 ]}
);
