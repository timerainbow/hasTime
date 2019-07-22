

//var http = require("http");
var express = require("express");
var app = express();

app.get('/jsonp',function(request,response){
	response.status("200").send("en.")
})

/*http.createServer(function(request,response){
	response.writeHead(200,{"Content-Type":"text/plain"});
	response.end("Hello World\n");
}).listen(3000)*/

app.listen("3000",function(){
	console.log("Server <runn></runn>ing at http://127.0.0.1:3000");	
})

