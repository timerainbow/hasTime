module.exports = app => {
	const Tasks = app.db.models.Tasks;
	
	//Create Tasks Via Post
	app.route("/tasks")
	   //.all(app.auth.authenticate())
	   .all((req,res,next)=>{
	   	delete req.body.id;
	   	next();
	   })
	   .get((req,res) => {
	   	/*Tasks.findAll({
	   			where: { user_id: req.user.id }
	   		 })
	   		 .then(result => res.json(result))
	   		 .catch(error => {
	   		 	res.status(412).json({msg:error.message})
	   		 });*/
	   		 res.json({
				 tasks: [
				 	{title: "Buy some shoes"},
				 	{title: "Fix notebook"}
				 ]
			 });
	   })
	   .post((req,res) => {
	   	  //req.body.user_id = req.user.id;
	   	  Tasks.create(req.body)
	   	    .then(result => {
	   	    	res.header('Access-Control-Allow-Origin', '*');
	    		res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
	    		res.header('Access-Control-Allow-Headers', 'Content-Type');
	    		res.header('Access-Control-Allow-Credentials','true');
	   	    	res.json(result)
	   	    })
	   	    .catch(error => {
	   	    	res.status(412).json({msg:error.message})
	   	    });
	   })

	//Find a Tasks Via Get
	app.route("/tasks/:id")
	   //.all(app.auth.authenticate())
	   .get((req,res) => {
	   	    Tasks.findOne({
				where: {
					id: req.params.id,
					user_id: req.user.id
				}   	    	
	   	  	})
	   	  	.then(result => {
	   	  		if(result){
	   	  			return res.json(result);		
	   	  		}
	   	  		return res.sendStatus(404);
	   	  	})
	   	  	.catch(error => {
	   	  		res.status(412).json({msg:error.message});
	   	  	})
	   })
	};


