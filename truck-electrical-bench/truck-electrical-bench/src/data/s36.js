// Sheets XA, XB, XD (pages 110–112)
SH.push(
{id:'XA',pg:110,t:'Diagnostics DL4 J1587 and DL2 J2284',z:'cab',can:{h:[0,3],l:[1,3]},
 note:'DL2 (J2284 CAN) backbone: from the engine ECM (X11 A:2/A:5) through MCFC:45/46, splices SPDL2H1/SPDL2L1 and SPDL2HB6 to the far end, terminated by R08M at the cab end and R21 at the far end (120Ω each). With both in, the bus measures 60Ω.',
 cols:[
  {f:'C',it:[['R','X11-H','Engine ECM DL2 CAN-H bias',25000],['w','DL2HB1-0.8','CAN-H from X11 to splice'],['k','SPDL2H1','Splice SPDL2H1'],['w','DL2HB2-0.8','Splice to MCFC'],['k','MCFC:46','Main cab-frame connector pin 46'],['w','DL2HB6-0.8','MCFC to splice SPDL2HB6'],['k','SPDL2HB6','Splice SPDL2HB6'],['w','DL2HB11-0.5','To splice SPDL2HB10'],['k','SPDL2HB10','Splice SPDL2HB10'],['w','DL2HB9-0.5','Splice to R21']],e:null},
  {f:'C',it:[['R','X11-L','Engine ECM DL2 CAN-L bias',25000],['w','DL2LB1-0.8','CAN-L from X11 to splice'],['k','SPDL2L1','Splice SPDL2L1'],['w','DL2LB2-0.8','Splice to MCFC'],['k','MCFC:45','Main cab-frame connector pin 45'],['w','DL2LB6-0.8','MCFC to splice SPDL2LB6'],['k','SPDL2LB6','Splice SPDL2LB6'],['w','DL2LB11-0.5','To splice SPDL2LB10'],['k','SPDL2LB10','Splice SPDL2LB10'],['w','DL2LB9-0.5','Splice to R21']],e:null},
  {f:[0,10],it:[['T','R21','Terminating resistor R21 120Ω (far end)',120]],e:[1,10]},
  {f:[0,1],it:[['w','DL2HB2-0.8b','Splice to R08M pin 1'],['T','R08M','Terminating resistor R08M 120Ω (cab end)',120],['w','DL2LB2-0.8b','R08M pin 2 to splice']],e:[1,1]},
  {f:[0,5],it:[['w','DL2HN6-0.8','CAN-H to TECU A13E'],['k','MCTR3:11','Trans connector MCTR3 pin 11'],['R','A13E-H','TECU CAN-H transceiver',30000]],e:null},
  {f:[1,5],it:[['w','DL2LN6-0.8','CAN-L to TECU A13E'],['k','MCTR3:12','Trans connector MCTR3 pin 12'],['R','A13E-L','TECU CAN-L transceiver',30000]],e:null}
 ]},
{id:'XB',pg:111,t:'Diagnostic connector scenarios (OBD)',z:'dash',can:{h:[2,3],l:[3,3]},
 note:'The OBD-II diagnostic connector: BATT (pin 16) from F80 through SPF80A, ground pins 4/5 to SPX03FA2 and SKX03F_A, IGN (pin 1) from SPF44B6, and the J1939 / CAN2 / J1587 pairs. No power on pin 16 means your scan tool will not light up.',
 cols:[
  {f:'B',it:[['f','F80','Diagnostic connector fuse 10A',10],['k','FRC_J1:E1','FRC connector J1 pin E1'],['w','F80A1-0.8','F80 to splice SPF80A'],['k','SPF80A','Splice SPF80A'],['w','F80A3-0.8','Splice to OBD pin 16'],['k','OBD-II:16','OBD-II connector pin 16 (BATT)'],['E','SCAN','Scan tool plugged in',0.5],['k','OBD-II:4','OBD-II connector pin 4 (GND)'],['w','X03DA44-0.8','OBD ground'],['k','SPX03FB1','Ground splice SPX03FB1'],['w','X03DA45-0.8','Splice to splice pack']],e:'G:SKX03F_A'},
  {f:'I',it:[['k','SPF44B3','Key splice SPF44B3'],['w','F44B8-1.0','Key feed to splice SPF44B6'],['k','SPF44B6','Splice SPF44B6'],['w','F44B10-1.0','Splice to OBD pin 1'],['Q','OBD-II:1','OBD-II connector pin 1 (IGN)',10000]],e:[0,10]},
  {f:'C',it:[['R','J1939-H','J1939 CAN-H bias (network)',25000],['w','DL1HN22-0.8','J1939-H to OBD pin 3'],['k','OBD-II:3','OBD-II connector pin 3 (J1939-H)']],e:null},
  {f:'C',it:[['R','J1939-L','J1939 CAN-L bias (network)',25000],['w','DL1LN22-0.8','J1939-L to OBD pin 11'],['k','OBD-II:11','OBD-II connector pin 11 (J1939-L)']],e:null},
  {f:[2,3],it:[['T','R-ENG','J1939 termination, engine end',120]],e:[3,3]},
  {f:[2,1],it:[['T','R-CAB','J1939 termination, cab end',120]],e:[3,1]}
 ]},
{id:'XD',pg:112,t:'Diagnostics DL1 J1939 (Volvo export)',z:'cab',can:{h:[0,3],l:[1,3]},
 note:'J1939 backbone variants: from the cab through MCFC:83/84, splices SPDL1H5 / SPDL1H1 (where the TPMS A240 and radar connect) to the engine connector X11 pin 1/4. Twisted pair all the way.',
 cols:[
  {f:'C',it:[['R','CAB-H','Cab J1939 CAN-H bias',25000],['k','MCFC:84','Main cab-frame connector pin 84'],['w','DL1HB17-0.8','CAN-H to splice SPDL1H5'],['k','SPDL1H5','Splice SPDL1H5'],['w','DL1HB18-0.8','To splice SPDL1H1'],['k','SPDL1H1','Splice SPDL1H1'],['w','DL1HB19-0.8','To engine connector'],['k','X11:1','Engine connector pin 1 (CAN1 H)']],e:null},
  {f:'C',it:[['R','CAB-L','Cab J1939 CAN-L bias',25000],['k','MCFC:83','Main cab-frame connector pin 83'],['w','DL1LB17-0.8','CAN-L to splice SPDL1L5'],['k','SPDL1L5','Splice SPDL1L5'],['w','DL1LB18-0.8','To splice SPDL1L1'],['k','SPDL1L1','Splice SPDL1L1'],['w','DL1LB19-0.8','To engine connector'],['k','X11:4','Engine connector pin 4 (CAN1 L)']],e:null},
  {f:[0,8],it:[['T','R-ENG','J1939 termination inside the engine ECM',120]],e:[1,8]},
  {f:[0,1],it:[['T','R-CAB','J1939 termination, cab end',120]],e:[1,1]},
  {f:[0,6],it:[['w','DL1HN10-0.8','Stub to TPMS A240 pin 12'],['R','A240-H','TPMS CAN-H transceiver',30000]],e:null},
  {f:[1,6],it:[['w','DL1LN10-0.8','Stub to TPMS A240 pin 11'],['R','A240-L','TPMS CAN-L transceiver',30000]],e:null}
 ]}
);
