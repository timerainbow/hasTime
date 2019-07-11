var express = require("express");
var bodyParser = require("body-parser");
var jwt = require("jsonwebtoken");

var passport = require("passport");
var passportJWT = require("passport-jwt");
var app = express();


var ExtractJwt = passportJWT.ExtractJwt;
var JwtStrategy = passportJWT.Strategy;

var users = [
	{
		id:1,
		name: "test1",
		password: "1234"
	},
	{
		id:2,
		name: "test",
		password: "%2yx4"
	}
]

var jwtOptions = {}
jwtOptions.secretOrKey = "asdfgh";

//---------------------------------------token的验证-----------------------------------------------
//***********************************//                                                         //
//*************1 start***************//                                                         //
//第一部分的代码与token的生成无关，只与token的验证相关，故如果只是为了生成token,这部分代码是不必要的   //
jwtOptions.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();                           //
                                                         										//
var strategy = new JwtStrategy(jwtOptions,function(jwt_payload,next){                           //
	console.log('payload received',jwt_payload);                                                //
	var user = users.find(user => user.id === jwt_payload.id);                                  //
	if(user){                                                         							//
		next(null,user);                                                         				//
	}else{                                                         								//
		next(null,false);                                                         				//
	}                                                         									//
})                                                         										//
passport.use(strategy);                                                         				//
//初始化passportjs                                                         						//
app.use(passport.initialize());                                                         		//
//*************1 end***************//                                                           //
//*********************************//                                                           //
                                                                                                //
//***********************************//                                                         //
//*************2 start***************//                                                         //
//使用postman发送get请求，访问/verifyuser api                                                     //
//header中添加key:Authorization  value:bearer+' '+token(注：为访问/login取到的token)              //
//第二部分的代码是对第一部分代码的使用，用以验证登录用户名与密码                                      //
app.get("/verifyuser",passport.authenticate("jwt",{session:false}),(req,res)=>{                 //
    res.json({msg:"success"});                                                          		//
})                                                         										//
//*************1 end***************//                                                         	//
//*********************************//                                                         	//
//------------------------------------------------------------------------------------------------

app.use(bodyParser.urlencoded({
	extended: true
}));
//全局使用bodyParser.json从而能解析前端传送的json格式参数
app.use(bodyParser.json())
app.post("/login",function(req,res){
	if(req.body.name && req.body.password){
		var name = req.body.name;
		var password = req.body.password;
	}
	var user = users.find(user => user.name === name);
	if(!user){
		res.status(401).json({message:"no such user found"});
	}

	if(user.password === req.body.password){
		var payload = { id: user.id };
		/**
			前面的皆是用户名与密码的判断，下面的才是token的生成
		    使用jsonwebtoken模块的sign方法生成token
		*/
		var token = jwt.sign(payload,jwtOptions.secretOrKey);
		res.json({message:"ok",token:token});
	}else{
		res.status(401).json({message:"passwords did not match"});
	}
});

app.get("/",function(req,res){
	res.json({message:"Express is up!"});
})

app.listen(3000,function(){
	console.log("Express running");
})



