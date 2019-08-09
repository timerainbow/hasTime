import bodyParser from "body-parser";
import cors from "cors";

module.exports = app => {
	app.set("port", 3000);
	app.set("json spaces", 4);

	//app.use(cors);
	app.use(bodyParser.json());
	//app.use(app.auth.initialize());
	app.use((req,res,next) => {
		res.header('Access-Control-Allow-Origin', '*');
	    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
	    res.header('Access-Control-Allow-Headers', 'Content-Type');
	    res.header('Access-Control-Allow-Credentials','true');
		delete req.body.id;
		next();
	});
};

