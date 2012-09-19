var WebSocket = require('ws')
  , ws = new WebSocket('http://gnumanth.nodejitsu-demo.jit.su');
ws.on('open', function() {
    ws.send('Test');
});
ws.on('message', function(message) {
    console.log('received: %s', message);
});
