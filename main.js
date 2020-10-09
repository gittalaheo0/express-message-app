const express = require('express')
const app = express()
const port = 3000
const cookieParser = require('cookie-parser')
const bodyParser = require('body-parser')
// file
const chatboxRoute = require('./route/chatbox-route.js')
const userRoute = require('./route/user-route.js')
const authRoute = require('./route/auth-route.js')
const checkLogin = require('./middleware/checkLogin.js')

// seting template engine
app.set('view engine', 'ejs');
app.use(express.static('assets'))

app.use(cookieParser("vietanhcookie"))
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

// play
app.use('/login', authRoute)
app.use('/',checkLogin.checkLogin, chatboxRoute)
app.use('/users', userRoute)

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})