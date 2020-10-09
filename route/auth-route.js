const express = require('express');
const router = express.Router();

const authController = require('../controller/auth-controller.js')
const middleware = require('../middleware/checkSignUp.js')
/* GET home page. */
router.get('/', authController.goLogin);
router.get('/out', authController.gologout);
router.get('/signup', authController.goSignup);

// post to login
router.post('/', authController.login);
router.post('/signup',middleware.validateUser, authController.createUser);


module.exports = router;