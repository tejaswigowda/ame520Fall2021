var express = require("express");
var app = express();
var bodyParser = require('body-parser');
var errorHandler = require('errorhandler');
var methodOverride = require('method-override');
var hostname = process.env.HOSTNAME || 'localhost';
const WebSocket = require('ws')
var values = {}



const wss = new WebSocket.Server({ port: 3000})

wss.on('connection', ws => {
  ws.on('message', message => {
 //    console.log(`Received message => ${message}`)
     wss.clients.forEach(function each(client) {
       client.send(`${message}`);
     });
  })
  ws.send('start');
})


app.use(methodOverride());
app.use(bodyParser());
app.use(express.static(__dirname + '/public'));
app.use(errorHandler());

console.log("Simple static server listening at http://" + hostname + ":1234" );
app.listen(1234);
