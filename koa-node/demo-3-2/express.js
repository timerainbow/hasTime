//cnom i express@4.13.3
var express = require('express')
var app =  express()

var asyncIO = function(cb){
	setTimeout(function(){
		cb()
	},500)
}

var mid = function(req,res,next){
	req.body = 'mark'
	next()
	/*res.send(req.body + ' done')*/  //1
}

app.use(mid)
app.use(function(req,res,next){
	asyncIO(function(){
		req.body += ' saved'
		next()
		res.send(req.body + ' done') //2
	})
})

app.listen(3000)