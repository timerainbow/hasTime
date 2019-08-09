module.exports = app =>{
	const Users = app.db.models.Users;

	app.route("/user")
		//.all(app.auth.authenticate())//对这个接口下的所有请求均进行验证（token验证?）
		.get((req,res) => {
			console.log(req.user)
			Users.findById(req.user.id,{
				attributes:["id","name","email"]
			})
			.then(result => res.json(result))
			.catch(error => {
				res.status(412).json({msg:error.message});
			});
		})
		.delete((req,res) => {
			Users.destroy({where:{id:req.user.id}})
				.then(result => res.sendStatus(204))
				.catch(error => {
					res.status(412).json({msg:error.message});
				});
		});
		
	app.post("/users",(req,res) => {
		console.log("request api /users")
		Users.create(req.body)
			.then(result => {
				console.log(result)
				res.json(result)
			})
			.catch(error => {
				res.status(412).json({msg:error.message});
			});
	});
}