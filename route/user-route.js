const express = require('express');
const router = express.Router();
const multer  = require('multer')
const upload = multer({ dest: 'assets/image/avartar' })

const userController = require('../controller/user-conntroller.js')
const middleware = require('../middleware/checkSetting.js')
/* GET home page. */
router.get('/', userController.goUserPage);
router.get('/me', userController.goMePage);
router.get('/setting', userController.setting);
router.get('/:id', userController.goUserWall);

// post
router.post('/setting/save', middleware.checkName, userController.saveInfo);
router.post('/setting/avartar', upload.single('avatar'), userController.saveAvartar);
module.exports = router;