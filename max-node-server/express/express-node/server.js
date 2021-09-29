

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


/*
app.get("/sendData", function (req, res) {
	console.log(req.query);
	res.end("1	")
});

app.listen(3000, function () {
	anypost("Example app listening on port 3000!");
	if (Max) Max.outlet("ready");
});
*/


const wss = new WebSocket.Server({ port: 3000})

wss.on('connection', ws => {
  ws.on('message', message => {
     anypost(`Received message => ${message}`)
  })
  ws.send('start');
})