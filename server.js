#!/usr/bin/env node

var http = require('http');

//HTTP part
var server = http.createServer(function(req, res){
  res.writeHead(200,{ 'Content-Type': 'text/html' });
  res.end('<h1>Try the same on socket!</h1>');
});
server.listen(8080);

// Socket part
var WebSocketServer = require('ws').Server
  , wss = new WebSocketServer({port: 1337});
wss.on('connection', function(ws) {
    ws.on('message', function(message) {
        console.log('received: %s', message);
        ws.send(message);
    });
});

