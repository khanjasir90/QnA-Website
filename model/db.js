const mongoose = require('mongoose')
require('./login')
require('dotenv').config()
const conn_url = process.env.CONN_URL
mongoose.connect(conn_url,{useNewUrlParser:true},(err)=>{
    if(!err) console.log('Connection created')
    else console.log('Error while connected to database'+err)
})