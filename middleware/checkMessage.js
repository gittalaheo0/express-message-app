
module.exports.checkStartMessage = (req, res, next) => {
  if(req.query.id!=req.signedCookies.idUser){
  	next()
  }else{
  	res.redirect("/")
  }
}
