// Sheets XH, XI, XK, XM, XP (pages 116–120)
SH.push(
{id:'XH',pg:116,t:'Diagnostics J1939 – ISX gas',z:'engine',can:{h:[0,3],l:[1,3]},
 note:'ISX-G J1939: MCFC:83/84 to splices SPDL1H6 / SPDL1L6, a stub to the ISX-G engine interface X11A (C:B H, C:C L) and the termination resistor R08 at the far end.',
 cols:[
  {f:'C',it:[['R','CAB-H','Cab J1939 CAN-H bias',25000],['k','MCFC:84','Main cab-frame connector pin 84'],['w','DL1HB10-0.8','CAN-H to splice SPDL1H6'],['k','SPDL1H6','Splice SPDL1H6'],['w','DL1HB11-0.8','Splice to R08 pin 1']],e:null},
  {f:'C',it:[['R','CAB-L','Cab J1939 CAN-L bias',25000],['k','MCFC:83','Main cab-frame connector pin 83'],['w','DL1LB10-0.8','CAN-L to splice SPDL1L6'],['k','SPDL1L6','Splice SPDL1L6'],['w','DL1LB11-0.8','Splice to R08 pin 2']],e:null},
  {f:[0,5],it:[['T','R08','Termination resistor, CAN-bus 120Ω',120]],e:[1,5]},
  {f:[0,1],it:[['T','R-CAB','J1939 termination, cab end',120]],e:[1,1]},
  {f:[0,3],it:[['w','DL1HN7-0.8','Stub to X11A C:B'],['R','X11A-H','ISX-G ECM CAN-H transceiver',30000]],e:null},
  {f:[1,3],it:[['w','DL1LN7-0.8','Stub to X11A C:C'],['R','X11A-L','ISX-G ECM CAN-L transceiver',30000]],e:null}
 ]},
{id:'XI',pg:117,t:'Diagnostics J1939 – Volvo OBD with TABS6',z:'engine',can:{h:[0,5],l:[1,5]},
 note:'Volvo base with TABS6: MCFC:83/84 through SPDL1H / SPDL1L (ACM stub) and SPDL1H10 / SPDL1L10 (TABS6 stub through TABS6_CH) to engine connector X11, which terminates the bus.',
 cols:[
  {f:'C',it:[['R','CAB-H','Cab J1939 CAN-H bias',25000],['k','MCFC:84','Main cab-frame connector pin 84'],['w','DL1HB17-0.8','CAN-H to splice SPDL1H'],['k','SPDL1H','Splice SPDL1H'],['w','DL1HB18-0.8','To splice SPDL1H10'],['k','SPDL1H10','Splice SPDL1H10'],['w','DL1HB19-0.8','To engine connector'],['k','X11:1','Engine connector pin 1 (CAN1 H)']],e:null},
  {f:'C',it:[['R','CAB-L','Cab J1939 CAN-L bias',25000],['k','MCFC:83','Main cab-frame connector pin 83'],['w','DL1LB17-0.8','CAN-L to splice SPDL1L'],['k','SPDL1L','Splice SPDL1L'],['w','DL1LB18-0.8','To splice SPDL1L10'],['k','SPDL1L10','Splice SPDL1L10'],['w','DL1LB19-0.8','To engine connector'],['k','X11:4','Engine connector pin 4 (CAN1 L)']],e:null},
  {f:[0,8],it:[['T','ECM-T','Termination inside engine ECM',120]],e:[1,8]},
  {f:[0,1],it:[['T','R-CAB','J1939 termination, cab end',120]],e:[1,1]},
  {f:[0,6],it:[['w','DL1HN13-0.8','Stub to TABS6 harness'],['k','TABS6_CH:B','TABS6 harness connector pin B'],['R','A248-H','TABS6 CAN-H transceiver',30000]],e:null},
  {f:[1,6],it:[['w','DL1LN13-0.8','Stub to TABS6 harness'],['k','TABS6_CH:A','TABS6 harness connector pin A'],['R','A248-L','TABS6 CAN-L transceiver',30000]],e:null}
 ]},
{id:'XK',pg:118,t:'Diagnostics DL2 backbone (J2284)',z:'cab',can:{h:[0,3],l:[1,3]},
 note:'Full DL2 (CAN2) backbone, page 118 (drawn with the XP heading in this issue): from X11 through MCFC:45/46 along splices SPDL2HB12 → SPDL2HB14 → SPDL2HB17 to R21 at the far end, with R08M at the cab end. Stubs go to the steering gateway, SRS, TGW and cluster.',
 cols:[
  {f:'C',it:[['R','X11-H','Engine ECM CAN2-H bias',25000],['w','DL2HB1-0.8','CAN2-H to splice SPDL2H1'],['k','SPDL2H1','Splice SPDL2H1'],['k','MCFC:46','Main cab-frame connector pin 46'],['w','DL2HB31-0.8','MCFC to splice SPDL2HB12'],['k','SPDL2HB12','Splice SPDL2HB12'],['w','DL2HB41-0.8','To splice SPDL2HB14'],['k','SPDL2HB14','Splice SPDL2HB14'],['w','DL2HB40-0.8','To splice SPDL2HB17'],['k','SPDL2HB17','Splice SPDL2HB17'],['w','DL2HB39-0.8','To R21']],e:null},
  {f:'C',it:[['R','X11-L','Engine ECM CAN2-L bias',25000],['w','DL2LB1-0.8','CAN2-L to splice SPDL2L1'],['k','SPDL2L1','Splice SPDL2L1'],['k','MCFC:45','Main cab-frame connector pin 45'],['w','DL2LB31-0.8','MCFC to splice SPDL2LB12'],['k','SPDL2LB12','Splice SPDL2LB12'],['w','DL2LB41-0.8','To splice SPDL2LB14'],['k','SPDL2LB14','Splice SPDL2LB14'],['w','DL2LB40-0.8','To splice SPDL2LB17'],['k','SPDL2LB17','Splice SPDL2LB17'],['w','DL2LB39-0.8','To R21']],e:null},
  {f:[0,11],it:[['T','R21','Terminating resistor R21 120Ω',120]],e:[1,11]},
  {f:[0,2],it:[['T','R08M','Terminating resistor R08M 120Ω',120]],e:[1,2]},
  {f:[0,6],it:[['w','DL2HN13-0.8','Stub to steering gateway A234 B:1'],['R','A234-H','Steering gateway CAN2-H transceiver',30000]],e:null},
  {f:[1,6],it:[['w','DL2LN13-0.8','Stub to steering gateway A234 B:2'],['R','A234-L','Steering gateway CAN2-L transceiver',30000]],e:null}
 ]},
{id:'XM',pg:119,t:'Diagnostics DL10 – Cummins',z:'engine',can:{h:[0,3],l:[1,3]},
 note:'DL10 Cummins link: MCFC:103/104 to splices SPDL10HB2 / SPDL10LB2, a stub to the ISX ECM (A14C A:22 H, A:46 L) and terminating resistor R21B at the end.',
 cols:[
  {f:'C',it:[['R','CAB-H','DL10 CAN-H bias',25000],['k','MCFC:103','Main cab-frame connector pin 103'],['w','DL10HB5-0.5','CAN-H to splice SPDL10HB2'],['k','SPDL10HB2','Splice SPDL10HB2'],['w','DL10HB4-0.5','Splice to R21B']],e:null},
  {f:'C',it:[['R','CAB-L','DL10 CAN-L bias',25000],['k','MCFC:104','Main cab-frame connector pin 104'],['w','DL10LB5-0.5','CAN-L to splice SPDL10LB2'],['k','SPDL10LB2','Splice SPDL10LB2'],['w','DL10LB4-0.5','Splice to R21B']],e:null},
  {f:[0,5],it:[['T','R21B','Terminating resistor DL10 120Ω',120]],e:[1,5]},
  {f:[0,1],it:[['T','R-CAB','DL10 termination, cab end',120]],e:[1,1]},
  {f:[0,3],it:[['w','DL10HN2-0.5','Stub to ECM A14C A:22'],['R','A14C-H','ECM DL10 CAN-H transceiver',30000]],e:null},
  {f:[1,3],it:[['w','DL10LN2-0.5','Stub to ECM A14C A:46'],['R','A14C-L','ECM DL10 CAN-L transceiver',30000]],e:null}
 ]},
{id:'XP',pg:120,t:'Diagnostics DL1 J1939 full backbone',z:'cab',can:{h:[0,4],l:[1,4]},
 note:'The whole J1939 backbone: from MCFC:83/84 through splices SPDL1HB17 → SPDL1HB19 → SPDL1HB20 → SPDL1HB21 ... to R08C (120Ω) at the far end. Every module (OBD, cluster, ABS, ECS, TECU, VECU, LCM, BBM, TGW) hangs off the backbone on a short stub.',
 cols:[
  {f:'C',it:[['R','CAB-H','Cab J1939 CAN-H bias',25000],['k','MCFC:84','Main cab-frame connector pin 84'],['w','DL1HB22-0.8','CAN-H to splice SPDL1HB17'],['k','SPDL1HB17','Splice SPDL1HB17'],['w','DL1HB38-0.8','To splice SPDL1HB19'],['k','SPDL1HB19','Splice SPDL1HB19'],['w','DL1HB25-0.8','To splice SPDL1HB20'],['k','SPDL1HB20','Splice SPDL1HB20'],['w','DL1HB26-0.8','To splice SPDL1HB21'],['k','SPDL1HB21','Splice SPDL1HB21'],['w','DL1HB34-0.8','Backbone to R08C']],e:null},
  {f:'C',it:[['R','CAB-L','Cab J1939 CAN-L bias',25000],['k','MCFC:83','Main cab-frame connector pin 83'],['w','DL1LB22-0.8','CAN-L to splice SPDL1LB17'],['k','SPDL1LB17','Splice SPDL1LB17'],['w','DL1LB38-0.8','To splice SPDL1LB19'],['k','SPDL1LB19','Splice SPDL1LB19'],['w','DL1LB25-0.8','To splice SPDL1LB20'],['k','SPDL1LB20','Splice SPDL1LB20'],['w','DL1LB26-0.8','To splice SPDL1LB21'],['k','SPDL1LB21','Splice SPDL1LB21'],['w','DL1LB34-0.8','Backbone to R08C']],e:null},
  {f:[0,11],it:[['T','R08C','Terminating resistor R08C 120Ω',120]],e:[1,11]},
  {f:[0,1],it:[['T','R-ENG','J1939 termination inside the engine ECM',120]],e:[1,1]},
  {f:[0,9],it:[['w','DL1HN25-0.8','Stub to cluster A03 D:5'],['R','A03-H','Cluster J1939 CAN-H transceiver',30000]],e:null},
  {f:[1,9],it:[['w','DL1LN25-0.8','Stub to cluster A03 D:6'],['R','A03-L','Cluster J1939 CAN-L transceiver',30000]],e:null},
  {f:[0,3],it:[['w','DL1HN22-0.8','Stub to OBD-II pin 3'],['k','OBD-II:3','OBD-II connector pin 3']],e:null},
  {f:[1,3],it:[['w','DL1LN22-0.8','Stub to OBD-II pin 11'],['k','OBD-II:11','OBD-II connector pin 11']],e:null}
 ]}
);
