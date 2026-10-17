// Sheets KO, MA, MB (pages 104–106)
SH.push(
{id:'KO',pg:104,t:'Infotainment (rear camera, SID display)',z:'dash',
 note:'The SEM (A231) powers the rear-view camera B67 from A2:12 over a shielded coax cable, and feeds the touch display A230 from F68 (MCSEM1:15) with its ground at MCSEM1:16.',
 cols:[
  {f:'B',it:[['f','F68','Radio battery fuse 10A',10],['k','FRC_J2:C2','FRC connector J2 pin C2'],['w','F68A8-0.5','F68 to display'],['k','MCSEM1:15','SEM connector MCSEM1 pin 15'],['E','A230','Display, SID touch',1],['w','X06BA3-0.5','Display ground'],['k','MCSEM1:16','SEM connector MCSEM1 pin 16']],e:'G:X137A'},
  {f:[0,4],it:[['ecu','A231 A2:12','SEM camera power output (12V)'],['w','LA1A212-0.8','Camera power wire'],['k','B67 A:1','Rear camera 12V DC pin'],['E','B67','Rear view camera',0.3],['k','B67 A:5','Rear camera GND pin'],['w','LA5B2-0.8','Camera ground back to SEM B:2']],e:[0,6]}
 ]},
{id:'MA',pg:105,t:'Trailer cable (7-way J560)',z:'trailer',
 note:'Each trailer circuit has its own EFRC relay or fuse. The LCM drives RE01 (stop), RE02 (clearance) and RE03 (marker), and sends turn signals through FE20 / FE21. The fixed trailer cable TC01 grounds (white, 8 mm²) at bulkhead stud X04. Volvo J560 colors: WHT gnd, RED stop, BLK clearance, BRN marker, BLU aux, YEL left, GRN right.',
 cols:[
  {f:'B',it:[['k','U01A','EFRC B+ bus'],['f','FE1','Trailer stop relay fuse 30A',30],['rc','RE01','Relay, trailer stop 30–87','RE01'],['k','EFRC.A1:3','EFRC connector A1 pin 3'],['w','STOP_RD-5.0','Stop wire (red) in trailer cable'],['k','TC01:RED','J560 plug, stop (red)'],['L','TRL-STOP','Trailer stop lamps (all)',50],['k','TC01:WHT','J560 plug, ground (white)'],['w','GND_W-8.0','Trailer ground (white)'],['k','FCTC:A','Trailer cable connector FCTC pin A'],['w','X04BA1-8.0','Ground to bulkhead stud']],e:'G:X04'},
  {f:'B',it:[['f','F78','LCM2 fuse 25A',25],['k','FRC_J1:C1','FRC connector J1 pin C1'],['ecu','A27 D:3','LCM trailer brake output'],['w','PD3A1-1.0','Trailer brake signal'],['k','MCFC:64','Main cab-frame connector pin 64'],['k','EFRC.D1:L','EFRC connector D1 pin L'],['rk','RE01','Relay, trailer stop coil','RE01']],e:'G:X05'},
  {f:[0,1],it:[['f','FE3','Relay trailer marker fuse 20A',20],['rc','RE03','Relay, trailer marker 30–87','RE03'],['k','EFRC.A1:2','EFRC connector A1 pin 2'],['w','MRK_BN-3.0','Marker wire (brown)'],['k','TC01:BRN','J560 plug, marker (brown)'],['L','TRL-MRK','Trailer marker / tail lamps',40]],e:[0,7]},
  {f:'B',it:[['ecu','A27 C:11','LCM trailer marker output'],['w','PD11A1-1.0','Trailer marker signal'],['k','MCFC:65','Main cab-frame connector pin 65'],['k','EFRC.D1:E','EFRC connector D1 pin E'],['rk','RE03','Relay, trailer marker coil','RE03']],e:'G:X05'},
  {f:[0,1],it:[['f','FE20','Trailer left turn fuse 20A',20],['ecu','A27 D:16','LCM left turn trailer output'],['w','PD16A1-3.0','Left turn to MCFC'],['k','MCFC:3','Main cab-frame connector pin 3'],['k','SPPD16B1','Splice SPPD16B1'],['k','EFRC.A2:B','EFRC connector A2 pin B'],['w','LT_Y-3.0','Left turn wire (yellow)'],['k','TC01:YEL','J560 plug, left turn (yellow)'],['L','TRL-LT','Trailer left turn lamps',42]],e:[0,7]}
 ]},
{id:'MB',pg:106,t:'Trailer cable options (extension / EOF receptacle)',z:'trailer',
 note:'Extension cable and end-of-frame receptacle: the EFRC trailer outputs run through extension connector TCEXT to the J560 receptacle TC08 at the back of the frame, then through a coiled cable (TC06 → TC07) to the trailer. Every plug-in is a place for corrosion.',
 cols:[
  {f:'B',it:[['k','U01A','EFRC B+ bus'],['f','FE1','Trailer stop relay fuse 30A',30],['rc','RE01','Relay, trailer stop 30–87','RE01'],['k','EFRC.A1:3','EFRC connector A1 pin 3'],['w','STOP_RD-5.0','Stop wire in extension cable (red)'],['k','TCEXT.A1:3','Extension cable connector, stop'],['w','STOP_RD-5.0b','Extension to EOF receptacle'],['k','TC08:RED','End-of-frame J560 receptacle, stop'],['k','TC06:RED','Coiled cable plug (truck end), stop'],['w','STOP_RD-5.0c','Coiled cable, stop (red)'],['k','TC07:RED','Coiled cable plug (trailer end), stop'],['L','TRL-STOP','Trailer stop lamps',50],['k','TC07:WHT','Coiled cable plug (trailer end), ground'],['w','GND_W-8.0c','Coiled cable ground (white)'],['k','TC06:WHT','Coiled cable plug (truck end), ground'],['k','TC08:WHT','EOF receptacle, ground'],['w','GND_W-8.0b','Extension cable ground'],['k','TCEXT.A5:A','Extension cable connector, ground'],['w','GND_W-8.0','Ground to bulkhead stud']],e:'G:X04'},
  {f:'B',it:[['ecu','A27 D:3','LCM trailer brake output (brake pedal down)'],['w','PD3A1-1.0','Trailer brake signal'],['k','EFRC.D1:L','EFRC connector D1 pin L'],['rk','RE01','Relay, trailer stop coil','RE01']],e:'G:X05'}
 ]}
);
