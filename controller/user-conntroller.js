const db = require("../db.js")

module.exports.goUserPage = (req, res) => {
	let users = db.get("users").value();
  res.render('user/index',{
  	users
  })    
}
module.exports.goMePage = (req, res) => {
  let me = db.get("users").find({id: req.signedCookies.idUser}).value();
  res.render('user/page-user',{
  	user: me,
  	isMe: true,
  })
}
module.exports.goUserWall = (req, res) => {
  let user = db.get("users").find({id: req.params.id}).value();
  if(user.id==req.signedCookies.idUser){
    res.redirect('/users/me')
  }else{
    res.render('user/page-user',{
      user,
      isMe: false,
    })
  }
}

module.exports.setting = (req, res) => {
    let idMe = req.signedCookies.idUser;
    let myInfo = db.get("users").find({id: idMe}).value();
    res.render('auth/setting/index',{
      myInfo
    })
}

// post
module.exports.saveInfo = (req, res) => {
    let idMe = req.signedCookies.idUser;
    let myInfo = {...db.get("users").find({id: idMe}).value()}
    myInfo.name = req.body.name;
    myInfo.infor.intro = req.body.information;
    db.get('users').remove({id: idMe}).write()
    db.get('users').push(myInfo).write()
    res.redirect('/users/me')
}
module.exports.saveAvartar = (req, res) => {
    let idMe = req.signedCookies.idUser;
    let myInfo = {...db.get("users").find({id: idMe}).value()}
    myInfo.infor.img = "http://localhost:3000/"+req.file.path.split("\\").splice(1).join("/");
    db.get('users').remove({id: idMe}).write()
    db.get('users').push(myInfo).write()
    res.redirect('/users/me')
}
