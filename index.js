const express = require('express')
const bodyParser = require('body-parser')
const { Model } = require('mongoose')

const path = require('path')
require('./model/db')
require('dotenv').config()
const app = express()
const Login = require('./model/login')


app.set('views','./views')
app.set('view engine','ejs')
app.use(express.json())
app.use(express.urlencoded({extended : true}))
app.use(express.static('public'))


app.listen(process.env.PORT,()=>console.log('Server running on port 3000'))