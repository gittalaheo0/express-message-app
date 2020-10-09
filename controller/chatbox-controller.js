const db = require("../db.js")
const shortid = require('shortid');
const md5 = require("blueimp-md5")

module.exports.goHomePage = (req, res) => {
	let idMe = req.signedCookies.idUser;
	let conversationList = [...db.get("messages").value().filter(e=>e.people.find(e=>e==idMe)).sort((a,b)=>b.lastDate-a.lastDate)];
	if(conversationList.length>0){
		conversationList.forEach(function(element){
			let time = new Date(element.lastDate)
			element.otherPeople = element.people.filter((e)=>e!=idMe).map(e=>db.get("users").find({id: e}).value().name)
			element.otherPeopleImg = element.people.filter((e)=>e!=idMe).map(e=>db.get("users").find({id: e}).value().infor.img)[0],
			element.myImg = element.people.filter((e)=>e!=idMe).map(e=>db.get("users").find({id: idMe}).value().infor.img)[0],
			element.lastTime = `${time.getHours()}:${time.getMinutes()<10 ? "0"+time.getMinutes() : time.getMinutes()}`
			element.lastMessage = element.conv.length != 0 ? element.conv.slice(-1)[0].message : ""
		})
		res.render('index',{
			conversationList,
			firstConv: {
				idConv: conversationList[0].id, 
				name: conversationList[0].otherPeople,
				conv: conversationList[0].conv,
				idMe: idMe,
			},
			myID: idMe,
		})		
	}else{
		res.render('blank')				
	}
}

module.exports.chatOne = (req, res) => {
	let other = req.query.id;  
	let me = req.signedCookies.idUser;
	let today = new Date;
	let idConv = shortid.generate();
	let meUser = db.get("users").find({id: me}).value();
	let otherUser = db.get("users").find({id: other}).value();
	let checkMesBox  //check message box exist
	let conv;
	meUser.chatWith.forEach(function(idConvDb, i) {
		let listConv = db.get("messages").find({id: idConvDb}).value();
		if(listConv.people[0]==other||listConv.people[1]==other){
			conv = listConv
		}
	});
	if(conv){
		let copyConv = {...conv}
		db.get('messages').find({id: copyConv.id}).value().lastDate = (new Date).getTime()
		res.redirect(`/`)
	}else{
		// add id conversation to user
		meUser.chatWith.push(idConv) 
		otherUser.chatWith.push(idConv)

		db.get('users').remove({id: me}).write()
		db.get('users').push(meUser).write()
		let createMessage = {
			id: idConv,
			people: [me,other],
			lastDate: today.getTime(),
			conv: []
		}
		db.get("messages").push(createMessage).write()
		res.redirect(`/`)
	}
}
module.exports.sendMessage = (req, res) => {
	let me = req.signedCookies.idUser;
	let today = new Date;
	let messageSend = req.body;
	let conversation = {...db.get("messages").find({id: messageSend.idConv}).value()};
	conversation.conv.push({
		time: today.getTime(),
		message: messageSend.message,
		idSender: me,
	})
	db.get("messages").remove({id: messageSend.idConv}).write();
	db.get("messages").push(conversation).write();
	res.redirect(`/`)
}
