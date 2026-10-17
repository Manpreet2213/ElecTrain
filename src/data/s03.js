// Sheets AH–AJ (pages 10–12)
SH.push(
{id:'AH',pg:10,t:'Vehicle ECU 2/4 – cruise, remote throttle, park brake',z:'cab',
 note:'VECU inputs: the park-brake pressure switch S43 grounds input B:11 when there is no air. Bodybuilder remote-throttle relays RLY26/RLY25 feed the cruise SET−/SET+ pins from the VECU output supply.',
 cols:[
  {f:'5',it:[['Q','A17 B:11','VECU park brake input (pull-up)',2200,'VECU B:11'],['w','CB11A2-0.8','Park brake signal wire'],['k','SPCB11A1','Splice SPCB11A1'],['sw','S43','Park brake pressure switch (closed = brakes set)'],['w','X03DA5-0.8','Switch ground wire']],e:'G:SPX03D2'},
  {f:'5',it:[['w','CB5A1-0.8','VECU B:5 output supply'],['k','SPCB5A1','Splice SPCB5A1'],['w','CB5A4-0.8','Splice to RLY26 pin 30'],['rc','RLY26','Remote throttle INC relay 30–87','RLY26'],['w','CJ5A1-0.8','RLY26 87 to VECU A:1'],['Q','A17 A:1','VECU cruise SET− input',2200]],e:'G:SKX03F_B'},
  {f:'B',it:[['k','Z03A:K','Bodybuilder remote throttle INC request'],['w','CAK25C5-0.8','Request wire to FRC'],['k','FRC_J5:C5','FRC connector J5 pin C5'],['rk','RLY26','Remote throttle INC relay coil','RLY26']],e:'G:FRC_J5:A4'}
 ]},
{id:'AI',pg:11,t:'Vehicle ECU 3/4 – pedal, clutch, brake, speed sensor',z:'cab',
 note:'VECU sensor inputs. The accelerator pedal B25A is a potentiometer on the VECU 5V supply. S58 (clutch) and S59 (brake) are switch inputs. B68 is the inductive output-shaft speed sensor.',
 cols:[
  {f:'5',it:[['w','CB19A1-0.5','VECU B:19 5V supply'],['k','SPCB19A1','Splice SPCB19A1'],['w','CB19A3-0.5','Splice to pedal sensor'],['k','B25A:E','Pedal sensor supply pin E'],['R','B25A-1','Pedal sensor track, supply to wiper',1200,'Pedal signal (wiper)'],['R','B25A-2','Pedal sensor track, wiper to ground',800],['k','B25A:C','Pedal sensor ground pin C']],e:'G:SKX03F_A'},
  {f:[0,5],it:[['w','CB8A1-0.5','Pedal signal to VECU B:8'],['Q','A17 B:8','VECU throttle pedal input',100000]],e:'G:SKX03F_A'},
  {f:'5',it:[['Q','A17 A:8','VECU clutch input (pull-up)',2200,'VECU A:8'],['w','CA8A1-0.5','Clutch switch wire'],['sw','S58','Clutch pedal position switch (pedal down)']],e:'G:SKX03F_B'},
  {f:[0,2],it:[['w','CB19A4-0.5','Splice to brake switch'],['sw','S59','Brake pedal position switch (pedal down)'],['w','CB19A2-0.5','Brake switch to VECU A:5'],['Q','A17 A:5','VECU brake redundant input',10000]],e:'G:SKX03F_B'},
  {f:'5',it:[['Q','A17 B:6','VECU speed sensor bias (B:6)',10000],['w','CB6A1-0.8','Speed sensor + wire'],['k','MCTR6:A','Trans connector MCTR6 pin A'],['R','B68','Output shaft speed sensor coil',1000],['k','MCTR6:B','Trans connector MCTR6 pin B'],['w','CB20A1-0.8','Speed sensor − wire to VECU B:20']],e:'G:SKX03F_B'}
 ]},
{id:'AJ',pg:12,t:'Vehicle ECU 4/4 – engine brake switches',z:'dash',
 note:'F69 feeds the engine brake ON/OFF switch S07B, then the selector S07 sends SET− / SET+ requests to the VECU. The ILLUM bus lights the switches.',
 cols:[
  {f:'B',it:[['f','F69','VECU / engine brake switch fuse 10A',10],['k','FRC_J2:D2','FRC connector J2 pin D2'],['w','F69A1-0.8','Fuse to S07B'],['sw','S07B','Engine brake ON/OFF switch'],['w','CB5A8-0.8','S07B to selector S07'],['sw','S07-1','Engine brake selector, low position'],['w','CB5B1-0.8','Selector to VECU A:21'],['Q','A17 A:21','VECU retarder SET− input',2200]],e:'G:SKX03F_B'},
  {f:[0,5],it:[['sw','S07-2','Engine brake selector, high position'],['w','CB5C1-0.8','Selector to VECU A:20'],['Q','A17 A:20','VECU retarder SET+ input',2200]],e:'G:SKX03F_B'},
  {f:'B',it:[['ecu','ILLUM','Dash illumination supply (dimmer)'],['k','SK141B:M','Illumination splice SK141B pin M'],['w','PBA1-0.8','Illumination to switches'],['D','S07-LED','Engine brake switch illumination',0.5],['w','X03DB18-0.8','Switch ground']],e:'G:SKX03F_B'}
 ]}
);
