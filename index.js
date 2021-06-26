const express = require('express')
const bodyParser = require('body-parser')
require('dotenv').config()
const app = express()



app.set('views','./views')
app.set('view engine','ejs')
app.use(express.json())
app.use(express.urlencoded({extended : true}))
app.use(express.static('public'))



app.listen(process.env.PORT,()=>console.log('Server running on port 3000'))