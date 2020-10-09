const db = require("../db.js")
const shortid = require('shortid');
const md5 = require("blueimp-md5")

const jwt = require('jsonwebtoken');
const LocalStorage = require('node-localstorage').LocalStorage,
localStorage = new LocalStorage('./scratch');

// get
module.exports.goLogin = (req, res) => {
  res.render('auth/index')
}
module.exports.goSignup = (req, res) => {
  res.render('auth/setting/signup')
}

module.exports.gologout = (req, res) => {
    res.clearCookie('idUser');
	res.redirect("/login")
}

// post
module.exports.login = (req, res) => {
	let user = db.get("users").find({name: req.body.name}).value();
	if(user && user.password == md5(req.body.password)){
		res.cookie('idUser', user.id, {
			signed: true
		})
  		res.redirect("/")
	}else{
		let error = "Wrong name or password!!";
  		res.render('auth/index-err', {
  			error: error,
  		})
	}
}

module.exports.createUser = (req, res) => {
	let id = shortid.generate();
	let userCreate = {
		id: id,
		name: req.body.name,
		password: md5(req.body.password),
		infor: {img: "", intro: ""},
		chatWith: [],
	}
	db.get("users").push(userCreate).write();
	res.cookie("idUser", id, {
		signed: true
	});

	// new code
	jwt.sign(userCreate, 'tokenVanh', function(err, token) {
			localStorage.setItem('userToken', token)
			console.log(token);
		if(err){
			res.render("auth/setting/signup-err", {
				err: "Sign up failed, please do it again.",
			})
		}else{
		}
		// console.log(jwt.verify(token, 'tokenVanh'));
	});
	//end


	res.redirect("/users/setting")
}
