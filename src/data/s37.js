// Sheets XE, XF, XG (pages 113–115)
SH.push(
{id:'XE',pg:113,t:'Diagnostics J1939 – ISX diesel export',z:'engine',can:{h:[0,3],l:[1,3]},
 note:'ISX export J1939: MCFC:83/84 to splices SPDL1H7/SPDL1L7, with a stub to the ISX ECM A14B (A:46 H, A:47 L) and the termination resistor R08 at the far end.',
 cols:[
  {f:'C',it:[['R','CAB-H','Cab J1939 CAN-H bias',25000],['k','MCFC:84','Main cab-frame connector pin 84'],['w','DL1HB10-0.8','CAN-H to splice SPDL1H7'],['k','SPDL1H7','Splice SPDL1H7'],['w','DL1HB11-0.8','Splice to R08 pin 1']],e:null},
  {f:'C',it:[['R','CAB-L','Cab J1939 CAN-L bias',25000],['k','MCFC:83','Main cab-frame connector pin 83'],['w','DL1LB10-0.8','CAN-L to splice SPDL1L7'],['k','SPDL1L7','Splice SPDL1L7'],['w','DL1LB11-0.8','Splice to R08 pin 2']],e:null},
  {f:[0,5],it:[['T','R08','Termination resistor, CAN-bus 120Ω',120]],e:[1,5]},
  {f:[0,1],it:[['T','R-CAB','J1939 termination, cab end',120]],e:[1,1]},
  {f:[0,3],it:[['w','DL1HN7-0.8','Stub to ISX ECM A:46'],['R','A14B-H','ISX ECM CAN-H transceiver',30000]],e:null},
  {f:[1,3],it:[['w','DL1LN7-0.8','Stub to ISX ECM A:47'],['R','A14B-L','ISX ECM CAN-L transceiver',30000]],e:null}
 ]},
{id:'XF',pg:114,t:'Diagnostics J1939 – Volvo OBD',z:'engine',can:{h:[0,3],l:[1,3]},
 note:'Volvo base J1939 with the AdBlue module: MCFC:83/84 to splices SPDL1H / SPDL1L, a stub to the ACM A137 (pins 14 H / 10 L), then on to engine connector X11 (pin 1 H, pin 4 L) where the engine ECM terminates the bus.',
 cols:[
  {f:'C',it:[['R','CAB-H','Cab J1939 CAN-H bias',25000],['k','MCFC:84','Main cab-frame connector pin 84'],['w','DL1HB17-0.8','CAN-H to splice SPDL1H'],['k','SPDL1H','Splice SPDL1H'],['w','DL1HB18-0.8','Splice to engine connector'],['k','X11:1','Engine connector pin 1 (CAN1 H)']],e:null},
  {f:'C',it:[['R','CAB-L','Cab J1939 CAN-L bias',25000],['k','MCFC:83','Main cab-frame connector pin 83'],['w','DL1LB17-0.8','CAN-L to splice SPDL1L'],['k','SPDL1L','Splice SPDL1L'],['w','DL1LB18-0.8','Splice to engine connector'],['k','X11:4','Engine connector pin 4 (CAN1 L)']],e:null},
  {f:[0,6],it:[['T','ECM-T','Termination inside engine ECM',120]],e:[1,6]},
  {f:[0,1],it:[['T','R-CAB','J1939 termination, cab end',120]],e:[1,1]},
  {f:[0,4],it:[['w','DL1HN1-0.8','Stub to ACM pin 14'],['R','A137-H','ACM CAN-H transceiver',30000]],e:null},
  {f:[1,4],it:[['w','DL1LN1-0.8','Stub to ACM pin 10'],['R','A137-L','ACM CAN-L transceiver',30000]],e:null}
 ]},
{id:'XG',pg:115,t:'Diagnostics J1939 – ISX diesel 2017',z:'engine',can:{h:[0,3],l:[1,3]},
 note:'ISX 2017 J1939: MCFC:83/84 to splices SPDL1H8/SPDL1L8, a stub to the ECM A14C (A:21 H, A:45 L), and termination resistor R08 at the end of the backbone.',
 cols:[
  {f:'C',it:[['R','CAB-H','Cab J1939 CAN-H bias',25000],['k','MCFC:84','Main cab-frame connector pin 84'],['w','DL1HB10-0.8','CAN-H to splice SPDL1H8'],['k','SPDL1H8','Splice SPDL1H8'],['w','DL1HB11-0.8','Splice to R08 pin 1']],e:null},
  {f:'C',it:[['R','CAB-L','Cab J1939 CAN-L bias',25000],['k','MCFC:83','Main cab-frame connector pin 83'],['w','DL1LB10-0.8','CAN-L to splice SPDL1L8'],['k','SPDL1L8','Splice SPDL1L8'],['w','DL1LB11-0.8','Splice to R08 pin 2']],e:null},
  {f:[0,5],it:[['T','R08','Termination resistor, CAN-bus 120Ω',120]],e:[1,5]},
  {f:[0,1],it:[['T','R-CAB','J1939 termination, cab end',120]],e:[1,1]},
  {f:[0,3],it:[['w','DL1HN7-0.5','Stub to ECM A:21'],['R','A14C-H','ECM CAN-H transceiver',30000]],e:null},
  {f:[1,3],it:[['w','DL1LN7-0.5','Stub to ECM A:45'],['R','A14C-L','ECM CAN-L transceiver',30000]],e:null}
 ]}
);
