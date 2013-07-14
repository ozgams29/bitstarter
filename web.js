var express = require('express');

var app = express.createServer(express.logger());

var fs = require('fs');
var file = fs.readFileSync("index.html");

var buf = new Buffer(file, "utf8");

app.get('/', function(request, response) {
  response.send(buf.toString(content));
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
