var express = require('express'),
  app = express(),
  port = process.env.PORT || 3000;

  //should prob use node, http, socket.io like I used to

app.listen(port);

console.log('server starting.. ' + port);

app.get('/', function(req, res){
  res.sendFile(__dirname + '/isa.html');
});