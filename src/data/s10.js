// Sheets CD, CE, CF (pages 31–33)
SH.push(
{id:'CD',pg:31,t:'Engine control – Volvo export (DPF / NOx sensors)',z:'engine',can:{h:[2,4],l:[3,4]},
 note:'Sensor assembly B191 (DPF temps, pressure, NOx). NOx sensor power comes from FE5 and grounds at X94:D. The NOx sensor talks on its own CAN link (DL9) with a 120Ω resistor inside the sensor.',
 cols:[
  {f:'I',it:[['f','FE5','ACM / EMS fuse 5A',5],['k','EFRC.D2:A','EFRC connector D2 pin A'],['w','FE5A2-1.0','FE5 to NOx sensor'],['k','FCDPF:A','Sensor connector FCDPF pin A'],['E','B191','NOx sensor heater and power',1.5],['k','FCDPF:B','Sensor connector FCDPF pin B'],['w','X01X04D-1.0','NOx sensor ground']],e:'G:X94:D'},
  {f:'5',it:[['Q','X11:34','ECM upstream cat temp input (pull-up)',2200],['w','EA34A1-1.0','T1 signal wire'],['k','FCDPF:G','Sensor connector FCDPF pin G'],['R','B191-T1','Upstream catalyst temp sensor T1 (NTC)',2000],['k','FCDPF:E','Sensor connector FCDPF pin E'],['w','EA26A1-1.0','Sensor ground to X11 pin 26']],e:'G:X03'},
  {f:'C',it:[['R','ECM-H','ECM DL9 CAN-H bias',25000],['w','DL9HB1-0.8','CAN-H to splice SPDL9H'],['k','SPDL9H','Splice SPDL9H'],['w','DL9HB2-0.8','Splice to NOx sensor'],['k','FCDPF:C','Sensor connector FCDPF pin C']],e:null},
  {f:'C',it:[['R','ECM-L','ECM DL9 CAN-L bias',25000],['w','DL9LB1-0.8','CAN-L to splice SPDL9L'],['k','SPDL9L','Splice SPDL9L'],['w','DL9LB2-0.8','Splice to NOx sensor'],['k','FCDPF:D','Sensor connector FCDPF pin D']],e:null},
  {f:[2,5],it:[['T','B191-T','NOx sensor internal termination 120Ω',120]],e:[3,5]},
  {f:[2,1],it:[['T','R-ECM','DL9 termination, ECM end',120]],e:[3,1]}
 ]},
{id:'CE',pg:32,t:'Fuel filter heater',z:'engine',
 note:'FE12 (20A) feeds the fuel filter heater R09 through splice SPFE12A1. The heater grounds at split connector X91:F. On 2017+ engines the ECM senses the heater feed at X11:37.',
 cols:[
  {f:'I',it:[['f','FE12','Fuel heat fuse 20A',20],['k','EFRC.D2:G','EFRC connector D2 pin G'],['w','FE12A1-2.0','FE12 to splice SPFE12A1'],['k','SPFE12A1','Splice SPFE12A1'],['w','FE12A4-2.0','Splice to heater R09'],['X','R09','Fuel filter heater',10],['w','X01X91F-2.0','Heater ground']],e:'G:X91:F'},
  {f:[0,4],it:[['w','FE12A2-2.0','Splice to ECM X11:37'],['Q','X11:37','ECM fuel heater sense',5000]],e:'G:X03'}
 ]},
{id:'CF',pg:33,t:'Urea dosing system 2/3 – OBD 2016',z:'frame',
 note:'The AdBlue control module ACM (A137) is fed straight from the battery through FT01 (30A) and woken by FE5. It drives the AdBlue pump A138, the tank heating valve Y81 and the hose heaters R31A.',
 cols:[
  {f:'B',it:[['w','G01A1-5.0','Battery to ACM fuse'],['f','FT01','Fuse, ACM 30A',30],['w','FT01A1-5.0','FT01 to splice SPFT01A1'],['k','SPFT01A1','Splice SPFT01A1'],['w','FT01A4-1.0','Splice to ACM power pins'],['E','A137','ACM power (pins 60 / 57 / 53)',2],['k','A137:55','ACM ground pin 55'],['w','X01X94D-3.0','ACM ground wire']],e:'G:X94'},
  {f:'I',it:[['f','FE5','ACM / EMS fuse 5A',5],['k','EFRC.D2:A','EFRC connector D2 pin A'],['w','FE5A1-1.0','FE5 to ACM pin 3'],['Q','A137:3','ACM IGN input',2000]],e:[0,7]},
  {f:[0,5],it:[['ecu','A137:8','ACM AdBlue pump output'],['w','EMA8A1-1.0','Pump + wire'],['k','FCUTS:10','Tank connector FCUTS pin 10'],['M','A138','AdBlue pump motor',2],['k','FCUTS:11','Tank connector FCUTS pin 11'],['w','EMA9A1-1.0','Pump − wire']],e:[0,7]},
  {f:[0,5],it:[['ecu','A137:4','ACM tank heating valve output'],['w','EMA4A1-1.0','Valve feed'],['k','FCUTS:8','Tank connector FCUTS pin 8'],['S','Y81','Urea tank heating solenoid valve',1],['w','EMA62A4-1.0','Valve return']],e:[0,7]},
  {f:[0,5],it:[['ecu','A137:32','ACM hose heater output'],['w','EMA32A1-1.0','Hose heater feed'],['k','FCUTS:6','Hose connector FCUTS pin 6'],['X','R31A','Urea hose heater',3],['w','EMA59B2-2.0','Heater return'],['k','SPEMA59A1','Splice SPEMA59A1']],e:[0,7]}
 ]}
);
