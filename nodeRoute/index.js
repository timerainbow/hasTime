//https://www.runoob.com/nodejs/nodejs-router.html
var server = require('./server');
var router = require('./router');

server.start(router.route);