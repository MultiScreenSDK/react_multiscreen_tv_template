export default class MultiscreenService {
  constructor(app) {
    // Get a reference to the local "service"
    window.msf.local(function(err, service) {
      if (err) return console.error('msf.local error: ' + err);

      app.setState({deviceName: service.name, ssid: service.device.ssid});

      // Create a reference to a communication "channel"
      var channel = service.channel(app.MS_CHANNEL);

      // Connect to the channel
      channel.connect(function(err) {
        if (err) return console.error(err);
        console.log('You are connected!');
      });

      // Consider changing JS API channel._onUserEvent() to accept a callback func
      for (var e in app.msEvents) {
        channel.on(e, app.msEvents[e]);
      }
    });
  }
}
