// Sheets AA–AD (pages 3–6). Item: [type, tag, name, param, nodeLabel]
SH.push(
{id:'AA',pg:3,t:'Power distribution FRC (1/2)',z:'frc',
 note:'Battery bus feeds the cab Fuse & Relay Center (FRC). The key switch pulls in RLY20, which powers the IGN+ bus (F29, F72, F75...).',
 cols:[
  {f:'B',it:[['f','F44','Key switch feed fuse 20A',20,'FRC_J5:B1'],['k','FRC_J5:B1','FRC connector J5 pin B1'],['sw','S15','Key switch (ON)',0,'Key switch IGN out'],['w','IGN+ ctrl','Key switch to RLY20 pin 86'],['rk','RLY20','IGN+ relay coil (86–85)','RLY20']],e:'G:FRC_J3:A11'},
  {f:'B',it:[['k','X41A','EJB B+ LVD stud'],['rc','RLY20','IGN+ relay contacts (30–87)','RLY20','IGN+ bus'],['f','F75','Wiper fuse 25A',25],['k','FRC_J3:C11','FRC connector J3 pin C11'],['M','M01','Wiper motor circuit (sheet GP)',6]],e:'G:SKX03F_A'},
  {f:[1,2],it:[['f','F72','SRS fuse 5A',5],['k','FRC_J3:E11','FRC connector J3 pin E11'],['E','A15','SRS airbag module (sheet JA)',0.5]],e:'G:SKX03F_C'},
  {f:[1,2],it:[['f','F29','EFRC fuse 5A',5],['k','FRC_J3:F4','FRC connector J3 pin F4'],['E','EFRC','EFRC relay coils (sheet AC)',0.4]],e:'G:X05'},
  {f:'B',it:[['f','F52','Instrument cluster fuse 10A',10],['k','FRC_J2:D4','FRC connector J2 pin D4'],['E','A03','Instrument cluster power (sheet BA)',1]],e:'G:SKX03D'}
 ]},
{id:'AB',pg:4,t:'Power distribution FRC (2/2)',z:'frc',
 note:'RLY17 (Power Ignition 1) builds the IGN-1 bus. RLY01 builds the ACC bus. RLY14 switches reverse lamps from the reverse position switch.',
 cols:[
  {f:'I',it:[['k','FRC_J1:A2','Key switch IGN signal into FRC'],['rk','RLY17','Power ignition 1 relay coil','RLY17']],e:'G:FRC_J1:B12'},
  {f:'B',it:[['k','X41','B+ EJB stud'],['rc','RLY17','RLY17 contacts 30–87','RLY17','IGN-1 bus'],['f','F54','Transmission fuse 5A',5],['k','FRC_J2:F4','FRC connector J2 pin F4'],['E','TECU','Transmission ECU power (sheet AK)',0.5]],e:'G:SKX03F_B'},
  {f:[1,2],it:[['f','F48','Heated windshield fuse 10A',10],['k','FRC_J1:E5','FRC connector J1 pin E5'],['X','A148','Heated windshield control (sheet IB)',6]],e:'G:SKX03D'},
  {f:[1,2],it:[['f','F49','Reverse lamps / lift axle fuse 15A',15],['k','FRC_J1:F5','FRC connector J1 pin F5'],['rc','RLY14','Reverse signal relay 30–87','RLY14'],['k','FRC_J1:C8','FRC connector J1 pin C8'],['L','E65','Reverse lamps (sheet GK)',42]],e:'G:SKX03F_C'},
  {f:[1,2],it:[['k','FRC_J2:B7','FRC connector J2 pin B7'],['sw','S49','Reverse position switch (in reverse)'],['rk','RLY14','Lift axle / reverse relay coil','RLY14']],e:'G:FRC_J1:B12'},
  {f:'I',it:[['k','FRC_J1:A11','Key ACC signal into FRC'],['rk','RLY01','Accessory power relay coil','RLY01']],e:'G:FRC_J1:B12'},
  {f:'B',it:[['k','X41A','EJB B+ LVD stud'],['rc','RLY01','RLY01 contacts 30–87','RLY01','ACC bus'],['f','F04','Radio fuse 10A',10],['k','FRC_J1:F11','FRC connector J1 pin F11'],['E','A158','Radio (sheet KE)',1.5]],e:'G:SKX03F_B'},
  {f:[6,2],it:[['f','F12','Dash sockets fuse 20A',20],['k','FRC_J1:D10','FRC connector J1 pin D10'],['E','X12V','Dash 12V socket load',8]],e:'G:SKX03D'}
 ]},
{id:'AC',pg:5,t:'Power supply, circuit protection 3/4 (EFRC)',z:'frame',
 note:'Ignition through F29 pulls in RE05 in the External Fuse & Relay Center (EFRC) on the frame, powering FE10–FE16. RE01 sends stop-lamp power to the trailer.',
 cols:[
  {f:'I',it:[['f','F29','EFRC fuse 5A',5],['k','FRC_J3:F4','FRC connector J3 pin F4'],['w','F29A1-0.8','F29 to MCFC'],['k','MCFC:61','Main cab-frame connector pin 61'],['rk','RE05','EFRC IGN relay coil','RE05'],['w','X01X35F-1.0','EFRC relay ground wire']],e:'G:X05'},
  {f:'B',it:[['w','EFRCPWR-32.0','EFRC power cable (sheet AQ)'],['k','U01A','EFRC B+ stud'],['rc','RE05','RE05 contacts 30–87','RE05','EFRC IGN bus'],['f','FE11','ABS IGN fuse 10A',10],['k','EFRC.D2:D','EFRC connector D2 pin D'],['E','A12B','ABS ECU ignition (sheet EC)',0.5]],e:'G:SKX03F_B'},
  {f:[1,3],it:[['f','FE13','Air dryer fuse 15A',15],['k','EFRC.D2:G','EFRC connector D2 pin G'],['X','A80','Air dryer heater (sheet FA)',6]],e:'G:X03'},
  {f:[1,2],it:[['f','FE1','Trailer stop relay fuse 30A',30],['rc','RE01','Trailer stop relay 30–87','RE01'],['k','EFRC.A1:3','EFRC connector A1 pin 3'],['L','TRL-STOP','Trailer stop lamps (sheet MA)',60]],e:'G:X02'},
  {f:'B',it:[['sw','S48A','Brake light pressure switch (pedal down)'],['k','EFRC.D1:L','EFRC connector D1 pin L'],['rk','RE01','Trailer stop relay coil','RE01']],e:'G:X05'}
 ]},
{id:'AD',pg:6,t:'Power supply, circuit protection 4/4 (EFRC)',z:'frame',
 note:'Second half of the EFRC: trailer turn feeds FE20/FE21 and the Cummins urea-heater relays RE09–RE11 driven by the ACM.',
 cols:[
  {f:'B',it:[['k','U01A','EFRC B+ bus (from AC)'],['f','FE20','Trailer left turn fuse 20A',20],['ecu','LCM','Lighting module LH turn output'],['k','EFRC.A2:B','EFRC connector A2 pin B'],['L','TRL-LT','Trailer LH turn lamps',54]],e:'G:X02'},
  {f:[0,1],it:[['f','FE21','Trailer right turn fuse 20A',20],['ecu','LCM','Lighting module RH turn output'],['k','EFRC.A2:A','EFRC connector A2 pin A'],['L','TRL-RT','Trailer RH turn lamps',54]],e:'G:X02'},
  {f:[0,1],it:[['f','FE25','Urea heated lines fuse 15A',15],['rc','RE09','Urea heater relay 30–87','RE09'],['k','EFRC.C1:A','EFRC connector C1 pin A'],['X','R-UH1','Urea line heater, tank to pump',4]],e:'G:X03'},
  {f:'I',it:[['k','EFRC.C1:B','EFRC connector C1 pin B'],['rk','RE09','Urea heater relay coil','RE09'],['ecu','A137','ACM low-side heater driver']],e:'G:X03'}
 ]}
);
