// Sheets BB, BE, BF (pages 19–21)
SH.push(
{id:'BB',pg:19,t:'Instrument cluster 2/2 – horn buttons, diff lock, warnings',z:'dash',
 note:'Horn buttons in the steering wheel ground cluster inputs A:29 / A:30 through the contact reel Z06. Diff-lock pressure switches, the air-filter restriction switch B39 and the LCS LED are on this sheet too.',
 cols:[
  {f:'5',it:[['Q','A03 A:29','Cluster city horn input (pull-up)',2200,'A03 A:29'],['w','HA29A4-0.8','City horn signal to contact reel'],['k','X35:A5','Contact reel connector X35 pin A5'],['k','Z06:A5','Contact reel city horn circuit'],['sw','S-CHORN','City horn button (pressed)'],['k','Z06:A3','Contact reel horn ground'],['w','X03DB9-0.8','Horn button ground']],e:'G:SKX03F_B'},
  {f:'5',it:[['Q','A03 A:30','Cluster air horn input (pull-up)',2200],['w','HA30A6-0.8','Air horn signal to contact reel'],['k','X35:A6','Contact reel connector X35 pin A6'],['sw','S-AHORN','Air horn button (pressed)']],e:[0,6]},
  {f:'5',it:[['Q','A03 A:8','Cluster front axle lock input (pull-up)',2200],['w','HC1F6-0.8','Signal to front diff lock switch'],['sw','S369F','Front diff lock engaged pressure switch'],['w','XC1F6-0.8','Switch ground'],['k','SPXC1F6','Ground splice SPXC1F6'],['w','X01DA3A3-0.8','Splice to frame connector'],['k','DSFC:B','Frame connector DSFC pin B'],['w','X01DA3A3-2.0','Frame ground wire']],e:'G:SPX01DA5A1'},
  {f:'5',it:[['Q','A03 A:21','Cluster air filter input (pull-up)',2200],['w','HA21AA-0.8','Signal to MCFC'],['k','MCFC:47','Main cab-frame connector pin 47'],['sw','B39','Air restriction switch (filter plugged)'],['w','HA4A13-0.8','Sensor ground']],e:'G:SKX03D'},
  {f:'B',it:[['ecu','A03 B:3','Cluster LCS LED driver'],['w','DB3A1-0.5','Driver to LED'],['D','V32','LCS LED',0.3],['w','X03DD11-0.5','LED ground']],e:'G:SKX03D'}
 ]},
{id:'BE',pg:20,t:'Communications – Qualcomm / Omnivision',z:'cab',
 note:'The Qualcomm prep kit Z21 gets LVD power from F61, ignition from F36, a PLC feed through F21, and grounds at cab stud X137B. Its speaker B168 runs through MCQS1.',
 cols:[
  {f:'B',it:[['f','F61','LVD sens / vendor TTU fuse 5A',5],['k','FRC_J5:A3','FRC connector J5 pin A3'],['w','F61A1-0.8','F61 to Z21 A:C'],['E','Z21 A:C','Qualcomm prep kit power',0.5],['w','X137BA1-0.8','Z21 ground A:A']],e:'G:X137B'},
  {f:'I',it:[['f','F36','Telematics fuse 5A',5],['k','FRC_J2:B6','FRC connector J2 pin B6'],['w','F36A1-0.8','F36 to Z21 A:B'],['Q','Z21 A:B','Prep kit IGN sense',2000]],e:[0,4]},
  {f:'B',it:[['f','F21','Qualcomm comm fuse 5A',5],['k','FRC_J4:B4','FRC connector J4 pin B4'],['w','F21A1-1.0','F21 to Z21 C:A'],['Q','Z21 C:A','Prep kit PLC input',2000]],e:[0,4]},
  {f:'5',it:[['ecu','Z21 G:1','Prep kit speaker output (test tone)'],['w','LB6AB1-0.8','Speaker + wire'],['k','MCQS1:2','Speaker connector MCQS1 pin 2'],['H','B168','Qualcomm loudspeaker',0.5],['k','MCQS1:1','Speaker connector MCQS1 pin 1'],['w','LB5AA1-0.8','Speaker − wire']],e:[0,4]}
 ]},
{id:'BF',pg:21,t:'TMC RP1226 PeopleNet prep kit',z:'cab',can:{h:[6,1],l:[7,1]},
 note:'Telematics service platform A175: power F61, battery F42, ignition F36, ground X137B. It listens on data link DL5, terminated by R08B (120Ω).',
 cols:[
  {f:'B',it:[['f','F61','LVD sens / vendor TTU fuse 5A',5],['k','FRC_J5:A3','FRC connector J5 pin A3'],['w','F61A3-0.8','F61 to A175 A:1'],['E','A175 A:1','TESP power',0.5],['w','X137CA1-1.0','A175 ground A:8']],e:'G:X137B'},
  {f:'B',it:[['f','F42','Display / open TTU fuse 10A',10],['k','FRC_J5:D1','FRC connector J5 pin D1'],['w','F42A14-0.8','F42 to A175 A:14'],['E','A175 A:14','TESP battery feed',1]],e:[0,4]},
  {f:'I',it:[['f','F36','Telematics fuse 5A',5],['k','FRC_J2:B6','FRC connector J2 pin B6'],['w','F36A7-0.8','F36 to A175 A:7'],['Q','A175 A:7','TESP IGN sense',2000]],e:[0,4]},
  {f:'C',it:[['R','A17-H','VECU DL5 CAN-H bias',25000],['w','DL5HB1-0.8','CAN-H to splice'],['k','SPDL5HB1','Splice SPDL5HB1'],['w','DL5HB2-0.8','Splice to R08B pin 1']],e:null},
  {f:'C',it:[['R','A17-L','VECU DL5 CAN-L bias',25000],['w','DL5LB1-0.8','CAN-L to splice'],['k','SPDL5LB1','Splice SPDL5LB1'],['w','DL5LB2-0.8','Splice to R08B pin 2']],e:null},
  {f:[3,4],it:[['T','R08B','Terminating resistor 120Ω',120]],e:[4,4]},
  {f:[3,2],it:[['w','DL5HN3-0.8','CAN-H to A175 A:2']],e:null},
  {f:[4,2],it:[['w','DL5LN3-0.8','CAN-L to A175 A:9']],e:null},
  {f:[6,1],it:[['T','R-FAR','Termination at the VECU end',120]],e:[7,1]}
 ]}
);
