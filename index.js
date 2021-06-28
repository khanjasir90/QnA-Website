const express = require('express')
const bodyParser = require('body-parser')
const { Model } = require('mongoose')

const path = require('path')
require('./model/db')
require('dotenv').config()
const app = express()
const Login = require('./model/login')
const Question = require('./model/question')
const Answer = require('./model/answer')

const userlogin = require('./routes/userlogin')
const question =require('./routes/question')
const answer = require('./routes/answer')
const sort = require('./routes/sort')

app.set('views','./views')
app.set('view engine','ejs')

app.use(bodyParser.urlencoded({extended:true}))
app.use(bodyParser.json())

app.use(userlogin)
app.use(question)
app.use(answer)
app.use(sort)

app.listen(process.env.PORT,()=>console.log('Server running on port 3000'))