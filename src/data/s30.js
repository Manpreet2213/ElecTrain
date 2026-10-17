// Sheets JA, JE, JF (pages 92–94)
SH.push(
{id:'JA',pg:92,t:'SRS airbag control',z:'dash',
 note:'SRS unit A15: key power through F72, ground at bulkhead stud X201A. The airbag squib in the steering wheel is reached through the contact reel Z06. On a real truck never put an ohmmeter on an airbag squib — use the SRS tool and dummy resistor.',
 cols:[
  {f:'I',it:[['f','F72','SRS fuse 5A',5],['k','FRC_J3:E11','FRC connector J3 pin E11'],['w','F72A1-0.5','F72 to SRS pin 75'],['E','A15 75','SRS control unit power',0.3],['k','A15 74','SRS ground pin 74'],['w','X06AA1-0.5','SRS ground wire']],e:'G:X201A'},
  {f:'5',it:[['Q','A15 53','SRS squib test circuit (+)',5],['w','DA11A1-0.5','Airbag + wire'],['k','Z06:A8','Contact reel, airbag +'],['R','AIRBAG','Driver airbag squib (igniter)',2.5],['k','Z06:A7','Contact reel, airbag −'],['w','DA10A1-0.5','Airbag − wire back to SRS pin 54']],e:[0,5]},
  {f:[0,3],it:[['ecu','A15 20','SRS crash output'],['w','DA7A1-0.5','Crash signal to door lock unit'],['Q','A11 pin 7','Door lock unit crash unlock input',5000]],e:'G:SKX03D'}
 ]},
{id:'JE',pg:93,t:'Adaptive cruise control (FLR-20 radar)',z:'chassis',can:{h:[1,3],l:[2,3]},
 note:'The forward radar B82A gets key power from F73 through MCPOPT:26, splice SPF73A1 and radar connector FCPA, and grounds at split connector X92:B. It talks to the camera on its own private CAN (DL11).',
 cols:[
  {f:'I',it:[['f','F73','ACC / side sense / ECS fuse 15A',15],['k','FRC_J3:D11','FRC connector J3 pin D11'],['w','F73A1-1.0','F73 to option connector'],['k','MCPOPT:26','Option connector MCPOPT pin 26'],['w','F73A3-1.0','MCPOPT to splice SPF73A1'],['k','SPF73A1','Splice SPF73A1'],['w','F73A2-1.0','Splice to radar connector'],['k','FCPA:5','Radar connector FCPA pin 5'],['w','F73A2-0.8','FCPA to radar VBATT'],['E','B82A','Sensor, ACC radar FLR-20',1],['w','X-1X92B-0.8','Radar ground'],['k','FCPA:4','Radar connector FCPA pin 4'],['w','X01X92B-1.0','Ground to split connector X92']],e:'G:X92:B'},
  {f:'C',it:[['R','PCAN-H','Private CAN-H bias',25000],['w','DL11HN1-0.8','Private CAN-H to option connector'],['k','MCPOPT:12','Option connector MCPOPT pin 12'],['w','DL11HN1-0.5','To radar pin 6']],e:null},
  {f:'C',it:[['R','PCAN-L','Private CAN-L bias',25000],['w','DL11LN1-0.8','Private CAN-L to option connector'],['k','MCPOPT:13','Option connector MCPOPT pin 13'],['w','DL11LN1-0.5','To radar pin 7']],e:null},
  {f:[1,4],it:[['T','B82A-T','Radar private CAN termination',120]],e:[2,4]},
  {f:[1,1],it:[['T','R-CAM','Private CAN termination, camera end',120]],e:[2,1]}
 ]},
{id:'JF',pg:94,t:'Side object detection system',z:'chassis',can:{h:[1,4],l:[2,4]},
 note:'Side radar B235 (lane change support) shares the F73 feed from splice SPF73A1, runs through connectors FCSS / FCSS2, grounds at X92:A, and talks on J1939.',
 cols:[
  {f:'I',it:[['f','F73','ACC / side sense / ECS fuse 15A',15],['k','FRC_J3:D11','FRC connector J3 pin D11'],['w','F73A1-1.0','F73 to option connector'],['k','MCPOPT:26','Option connector MCPOPT pin 26'],['w','F73A3-1.0','MCPOPT to splice SPF73A1'],['k','SPF73A1','Splice SPF73A1'],['w','F73A3-0.8','Splice to side sensor connector'],['k','FCSS:A','Side sensor connector FCSS pin A'],['k','FCSS2:A','Side sensor connector FCSS2 pin A'],['w','F73A3-0.35','To radar A:5'],['E','B235','Sensor, lane change support (side radar)',0.5],['w','X01X92A-0.35','Radar ground'],['k','FCSS2:B','Side sensor connector FCSS2 pin B'],['k','FCSS:B','Side sensor connector FCSS pin B'],['w','X01X92A-1.0','Ground to split connector X92']],e:'G:X92:A'},
  {f:'C',it:[['R','J1939-H','J1939 CAN-H bias (network)',25000],['w','DL1HN1-0.35','J1939-H to side sensor connector'],['k','FCSS:D','Side sensor connector FCSS pin D'],['k','FCSS2:D','Side sensor connector FCSS2 pin D'],['w','DL1HN1-0.35b','To radar A:2']],e:null},
  {f:'C',it:[['R','J1939-L','J1939 CAN-L bias (network)',25000],['w','DL1LN1-0.35','J1939-L to side sensor connector'],['k','FCSS:C','Side sensor connector FCSS pin C'],['k','FCSS2:C','Side sensor connector FCSS2 pin C'],['w','DL1LN1-0.35b','To radar A:7']],e:null},
  {f:[1,5],it:[['T','R-ENG','J1939 termination, engine end',120]],e:[2,5]},
  {f:[1,1],it:[['T','R-CAB','J1939 termination, cab end',120]],e:[2,1]}
 ]}
);
