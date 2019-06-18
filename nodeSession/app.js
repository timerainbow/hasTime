//https://www.cnblogs.com/w-s-l123/p/9418296.html
//另：https://blog.csdn.net/m0_37828249/article/details/78531929
var express = require('express');
var app = express();
var session = require('express-session');
var bodyparser = require('body-parser');

app.set('views',__dirname);
app.set('view engine','html');
app.engine('html',require('ejs').__express);

app.use(bodyparser.json());
app.use(bodyparser.urlencoded({extended:true}));

app.use(session({
	secret:'secret',
	resave:true,
	saveUninitialized:false,
	cookie:{
		maxAge:1000*60*2
	}
}))

app.get('/login',function(req,res){
	res.sendFile(__dirname + '/login.html');
})

app.post('/login',function(req,res){
	if(req.body.username == 'admin' && req.body.pwd == 'admin'){
		req.session.username = req.body.username;
		res.redirect('/')
	}else{
		res.json({
			ret_code:1,
			ret_msg:'账号或密码错误'
		})
	}
})

app.get('/',function(req,res){
	if(req.session.username){
		res.render('home',{
			username:req.session.username
		})
	}else{
		res.redirect('login');
	}
})

app.get('/logout',function(req,res){
	req.session.username = null;
	res.redirect('login');
})

app.listen(8000,function(){
	console.log("http://127.0.0.1:8000")
})



































