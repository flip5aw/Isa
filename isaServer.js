var express = require('express'),
  app = express(),
  port = process.env.PORT || 3000;

app.listen(port);

console.log('server starting.. ' + port);

app.get('/', function(req, res){
  res.sendFile(__dirname + '/isa.html');
});