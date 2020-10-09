const db = require("../db")

module.exports.checkLogin = (req, res, next) => {
  if(db.get("users").find({id: req.signedCookies.idUser}).value()){
  	next()
  }else{
  	res.redirect("/login")
  }
}
