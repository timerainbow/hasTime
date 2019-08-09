//https://www.cnblogs.com/giggle/p/5496596.html
var http = require('http');
var url = require("url");
var server = http.createServer();
var querystring = require('querystring');

server.on('request',function(req, res){
	var urlPath = url.parse(req.url).pathname;
	var qs = querystring.parse(req.url.split('?')[1]);

	if(urlPath === '/jsonp' && qs.callback){
		res.writeHead(200, {'Content-Type':'text/html;charset=utf-8'});
		var data = {
			"name": "Monkey"
		};
		data = JSON.stringify(data);

		var callback = qs.callback + "(" +data+ ");";
		res.end(callback)
	}else{
		res.writeHead(200, {'Content-Type':'text/html;charset=utf-8'});
		res.end('Hell World\n');
	}       
});

server.listen('3003');
console.log('Server running!');