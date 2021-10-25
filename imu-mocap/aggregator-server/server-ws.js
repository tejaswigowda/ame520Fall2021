
const express = require("express");
const app = express();
const WebSocket = require('ws')
var values = {}



const wss = new WebSocket.Server({ port: 3000})

wss.on('connection', ws => {
  ws.on('message', message => {
     console.log(`Received message => ${message}`)
     try{
      var x =  JSON.parse(`${message}`);
      var euler = qte([parseFloat(req.query.w), parseFloat(req.query.x), parseFloat(req.query.y), parseFloat(req.query.z)]);
      x.w = parseFloat(x.w);
      x.x = parseFloat(x.x);
      x.y = parseFloat(x.y);
      x.z = parseFloat(x.z);
      x.xE = euler[0]
      x.yE = euler[1]
      x.zE = euler[2]
      values[req.query.id] = x
     }
     catch(e){
     }
  })
  ws.send('start');
})


