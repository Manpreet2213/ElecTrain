// Sheets AN, AQ, BA (pages 16–18)
SH.push(
{id:'AN',pg:16,t:'Grounding options (BBOX-IF)',z:'frame',hr:0.3,
 note:'On BBOX-IF trucks the battery negative goes through FEM02 (fuse, ground protection) to splice SPX01A1, then out to the engine stud X02, bulkhead stud X04 and cab stud X03.',
 cols:[
  {f:'B',it:[['f','F-CAB','Cab feed (typical)',30],['E','CAB','Cab loads returning to X03',15],['k','X03','Cab ground stud X03'],['w','X01A7-19.0','Cab stud to SPX01A2'],['k','SPX01A2','Ground splice SPX01A2'],['w','X01A5-32.0','SPX01A2 to SPX01A1'],['k','SPX01A1','Ground splice SPX01A1'],['w','X01A2-50.0','Splice to ground protection fuse'],['f','FEM02','Fuse, ground protection',300],['w','X01A1-50.0','FEM02 to battery negative']],e:'N'},
  {f:'B',it:[['f','F-ENG','Engine feed (typical)',30],['E','ENG','Engine block loads',20],['k','X02','Engine block ground stud X02'],['w','X01A3-50.0','Engine stud to SPX01A1']],e:[0,7]},
  {f:'B',it:[['f','F-BHD','Bulkhead feed (typical)',15],['E','BHD','Bulkhead loads',5],['k','X04','Bulkhead ground stud X04'],['w','X01A6-19.0','Bulkhead stud to SPX01A2']],e:[0,5]}
 ]},
{id:'AQ',pg:17,t:'Power distribution – key switch, LVD, junction box',z:'cab',
 note:'F44 feeds key switch S15. IGN pulls in RLY17, ACC pulls in RLY01. The low-voltage disconnect A72 feeds the LVD bus X41A, and X117 is the customer junction box (F28, F87...).',
 cols:[
  {f:'B',it:[['f','F44','Key switch fuse 20A',20],['w','F44A1-2.0','F44 to key switch BAT'],['sw','S15','Key switch IGN position','S15 IGN out'],['w','F44C1-2.0','Key IGN to FRC'],['k','FRC_J1:A2','FRC connector J1 pin A2'],['rk','RLY17','Power ignition 1 relay coil','RLY17']],e:'G:FRC_J1:B12'},
  {f:[0,2],it:[['sw','S15-ACC','Key switch ACC position'],['w','F44D1-2.0','Key ACC to FRC'],['k','FRC_J1:A11','FRC connector J1 pin A11'],['rk','RLY01','Accessory power relay coil','RLY01']],e:'G:FRC_J1:B12'},
  {f:'B',it:[['k','X41','B+ EJB stud'],['ecu','A72','Low voltage disconnect output (battery OK)'],['w','FM01C1-13.0','LVD output to X41A'],['k','X41A','EJB B+ LVD stud'],['f','F28','Customer LVD1 fuse 10A',10],['w','F28A1-1.0','F28 to junction box'],['k','X117:A','Junction box X117 LVD1'],['E','CUST1','Customer accessory on LVD1',5],['w','X03DE6-1.0','X117 ground']],e:'G:SPX03E7'},
  {f:'B',it:[['f','F87','Customer BAT1 fuse 15A',15],['w','F87A1-1.0','F87 to junction box'],['k','X117:C','Junction box X117 BAT1'],['E','CUST2','Customer accessory on BAT1',8],['w','X03DE8-1.0','X117 ground']],e:'G:SPX03E7'}
 ]},
{id:'BA',pg:18,t:'Instrument cluster 1/2',z:'dash',can:{h:[4,4],l:[5,4]},
 note:'Cluster A03 power (F52 BAT, F53 IGN), 5V-powered air pressure sensors, the gearbox oil temp sensor B09A, and the cluster data link with terminating resistor R08H (120Ω).',
 cols:[
  {f:'B',it:[['f','F52','Instrument cluster fuse 10A',10],['k','FRC_J2:D4','FRC connector J2 pin D4'],['w','F52A1-0.8','F52 to cluster D:22'],['E','A03 D:22','Instrument cluster BAT supply',0.8],['w','X03DA15-0.8','Cluster ground A:1']],e:'G:SPX03D5'},
  {f:'I',it:[['f','F53','BBM / IC fuse 5A',5],['k','FRC_J2:E5','FRC connector J2 pin E5'],['w','F53A1-0.8','F53 to cluster D:21'],['Q','A03 D:21','Cluster IGN input',1000]],e:'G:SPX03D5'},
  {f:'5',it:[['w','HD2A1-0.8','Cluster 5V sensor power D:2'],['k','SPHD2A1','Splice SPHD2A1'],['w','HD2A2-0.8','Splice to air sensor B06A'],['R','B06A-1','Primary air sensor, supply to signal',1500,'B06A signal'],['R','B06A-2','Primary air sensor, signal to ground',1500],['w','HB4A6-0.8','Sensor ground to splice'],['k','SPHB4A1','Sensor ground splice SPHB4A1']],e:'G:SPX03D5'},
  {f:'5',it:[['Q','A03 C:26','Cluster gearbox oil temp input (pull-up)',2200],['w','HA17AA-0.8','Signal to trans connector'],['k','MCTR1:B','Trans connector MCTR1 pin B'],['R','B09A','Gearbox oil temp sensor (NTC)',2000],['k','MCTR1:C','Trans connector MCTR1 pin C'],['w','HA8A13-0.8','Sensor ground']],e:'G:SPX03D5'},
  {f:'C',it:[['R','A03-H','Cluster CAN-H bias',25000],['w','DL3HB2-0.8','CAN-H to splice SPDL3HB2'],['k','SPDL3HB2','Splice SPDL3HB2'],['w','DL3HB4-0.8','CAN-H to R08H pin 1']],e:null},
  {f:'C',it:[['R','A03-L','Cluster CAN-L bias',25000],['w','DL3LB2-0.8','CAN-L to splice SPDL3LB2'],['k','SPDL3LB2','Splice SPDL3LB2'],['w','DL3LB5-0.8','CAN-L to R08H pin 2']],e:null},
  {f:[4,4],it:[['T','R08H','Terminating resistor 120Ω',120]],e:[5,4]},
  {f:[4,2],it:[['T','R-FAR','Terminating resistor at the far end of the link',120]],e:[5,2]},
  {f:[2,4],it:[['w','HD2B1-0.8','Air pressure signal to cluster D:7'],['Q','A03 D:7','Cluster primary air pressure input',100000]],e:'G:SPX03D5'}
 ]}
);
