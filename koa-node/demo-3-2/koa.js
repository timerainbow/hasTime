//cnom i koa@1.2.0
var Koa = require('koa')
var app = Koa()

var asyncIO = function(){
	return new Promise(function(resolve){
		setTimeout(function(){
			resolve()
		},500)
	})
}

var mid = function(){
	return function *(next){
		this.body = 'mark'
		yield next
		this.body += ' done'
	}
}

app.use(mid())
app.use(function *(next){
	yield asyncIO()
	this.body += ' saved'
	yield next
})







