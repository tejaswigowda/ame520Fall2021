

const express = require("express");
const app = express();
const Max = require("max-api");
const WebSocket = require('ws')


function anypost(str) {
	if (Max) {
		Max.post(str);
	} else {
		console.log(str);
	}
}


const wss = new WebSocket.Server({ port: 3000})

wss.on('connection', ws => {
  ws.on('message', message => {
    // anypost(`${message}`)
	var x = `${message}`
    x = x.replace(/\\/g, ""); 

  // x = x.replace(/\"/g, ""); 
		anypost( x)

//	x = JSON.parse(x);
	Max.outlet(x)
  })
  ws.send('start');
})
