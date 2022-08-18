var express = require('express');  
var app = express();  
var server = require('http').createServer(app); 
var io = require('socket.io')(server); 
 


app.use(express.static(__dirname + '/Client/')); 

app.get('/', function(req, res,next) {  
    res.sendFile(__dirname + '/Client/Front.html');
  });

server.listen(3000, () => {
  console.log('listening on *:3000');
});

