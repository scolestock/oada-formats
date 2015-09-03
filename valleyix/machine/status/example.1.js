'use strict';

// application/vnd.valleyix.machine.status.1+json
module.exports = function(opts) {
  opts = opts || {};

  var _example = {
    AppliedPercent: '15.0',
    AutoPilotMode: 'Linear',
    AutoRestart: 'On',
    AutoStopShutdown: 'Ok',
    Aux1In: 'Off',
    Aux1Out: 'Off',
    Aux2In: 'Off',
    Aux2Out: 'On',
    BbRamShutdown: 'Ok',
    CommandShutdown: 'Ok',
    CruiseControl: 'Off',
    CurrentPosition: '295.9',
    DailyOpsEnable: 'Disabled',
    DailyOpsShutdown: 'Ok',
    Depth: '6.67',
    DeviceId: '3fecf71e-d669-403f-b6c7-8e5ce05edd05',
    Direction: 'Reverse',
    DirectionShutdown: 'Ok',
    DualMode: 'None',
    DualSpanPanel: 'Single',
    EndGunState: 'Off',
    FarmId: '1dfbe054-15c2-493e-acbd-093c31e2cb21',
    FlowShutdown: 'Ok',
    GpsComShutdown: 'Ok',
    GpsSignalShutdown: 'Ok',
    HighPressureShutdown: 'Ok',
    HourMeter: '5407.8',
    HoursPerPass: '146.7',
    HoursWet: '3119.8',
    LinearPosition: '0',
    NoAcknowledgeShutdown: 'Ok',
    PanelLockout: 'Off',
    PercentTimer: '15.0',
    PlcWideBoundary2State: 'On',
    PlcWideBoundary3State: 'On',
    PowerShutdown: 'Ok',
    Pressure: '21',
    PressureSwitch: 'Off',
    ProgramShutdown: 'Ok',
    ProximityShutdown: 'Ok',
    PulseCounter0: '0',
    PulsePerMinute0: '0',
    RelayComShutdown: 'Ok',
    Sis: 'On',
    SisAngle: '66.0',
    SisShutdown: 'Ok',
    SpanComShutdown: 'Ok',
    SpanPressure: 'Not Configured',
    StatusDate: '1407408641000',
    StoredProgramRunning: 'Off',
    SystemStatus: 'Running',
    TemperatureShutdown: 'Ok',
    TirePressureLowWarning: 'Ok',
    TirePressureShutdown: 'Ok',
    Transition: 'Manual',
    Voltage: '448',
    VriActive: 'Off',
    VriMode: 'Z',
    WaterMode: 'Wet',
    WideBoundaryState: 'On',
    WindControlEnable: '',
    WindShutdown: 'Ok',
    Zone: 'A'
  };

  for (var i in opts) {
    if (_example[i]) {
        _example[i] = opts[i]; // override any keys with value in opts:
    }
  }
  return _example;
};
