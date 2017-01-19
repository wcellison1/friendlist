var express = require('express');
var app = express();
var http = require('http').Server(app);
//when we got a req fora static file, respond with that folder and file
//in it.
app.use(express.static(__dirname + '/public'));

//request on the root route
app.get('/', function(req, res){
	res.sendfile(__dirname + '/index.html');
});

app.listen(process.env.PORT || 3001, function(){
	console.log("Hey man, Im listening on the *3001 port");
});