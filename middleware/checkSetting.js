module.exports.checkName = (req, res, next) => {
  if(req.body.name.length>0){
  	next()
  }else{
  	res.redirect("/users/setting")
  }
}
