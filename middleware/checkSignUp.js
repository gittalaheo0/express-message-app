const db = require("../db")

module.exports.validateUser = (req, res, next) => {
	let user = req.body;
	if(user.name.length>6&&user.password.length>6){
		let checkNameUser = db.get("users").find({name: user.name}).value();
		if(checkNameUser){
			res.render("auth/setting/signup-err", {
				err: "name exist, please chosse another name",
				name: "",
			})		
		}else{
			next()
		}
	}else{
		res.render("auth/setting/signup-err", {
			err: "password and name must longer than 6 character",
			name: user.name
		})
	}
}
