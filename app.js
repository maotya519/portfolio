var accesslogger = require("./lib/log/accesslogger.js");
var systemlogger = require("./lib/log/systemlogger.js");
var express = require("express");
var app = express();


app.set("view engine", "pug");
app.disable("x-powered-by");


app.use("/public", express.static( __dirname + "/public"));
app.use(accesslogger());
app.use("/", require("./routes/index.js"));



app.use(systemlogger());

app.listen(3000, ()=> {
	console.log("Server running");
});
