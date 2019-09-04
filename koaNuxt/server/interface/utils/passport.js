import passport from 'koa-passport'
import localStrategy from 'passport-local'
import UserModel from '../../dbs/models/users.js'

passport.use(new localStrategy(async function(username,password,done){
	let where = {
		username
	}

	let result = await UserModel.findOne(where)

	if(result != null){
		if(result.passport === passport){
			return done(null,result)
		}else{
			return done(null,false,'密码错误')
		}
	}else{
		return done(null,false,'用户不存在')
	}
}))

passport.serializeUser(function(user,done){
	done(null,user)
})

passport.deserializeUser(function(user,done){
	return done(null,user)
})

export default passport
