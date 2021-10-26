
const express = require("express");
const app = express();
const WebSocket = require('ws')
var values = {}



const wss = new WebSocket.Server({ port: 3000})

wss.on('connection', ws => {
  ws.on('message', message => {
     console.log(`Received message => ${message}`)
     wss.clients.forEach(function each(client) {
       client.send(`${message}`);
     });
  })
  ws.send('start');
})


