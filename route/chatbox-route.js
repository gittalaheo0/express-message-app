const express = require('express');
const router = express.Router();

const chatboxController = require('../controller/chatbox-controller.js')
const checkMessage = require('../middleware/checkMessage.js')
/* GET home page. */
router.get('/', chatboxController.goHomePage);
router.get('/chat',checkMessage.checkStartMessage, chatboxController.chatOne);

// post
router.post('/chat', chatboxController.sendMessage);

module.exports = router;