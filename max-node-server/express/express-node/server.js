

const express = require("express");
const app = express();
const Max = require("max-api");

function anypost(str) {
	if (Max) {
		Max.post(str);
	} else {
		console.log(str);
	}
}

app.get("/sendData", function (req, res) {
	anypost(req.query);
	if (Max) Max.outlet(req.query);
	res.end("1")
});




app.listen(3000, function () {
	anypost("Example app listening on port 3000!");
	if (Max) Max.outlet("ready");
});
