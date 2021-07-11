const mongoose = require('mongoose')
require('./login')
require('dotenv').config()
const conn_url = process.env.CONN_URL
mongoose.connect("mongodb+srv://jasir-admin:cowin-db%23123@cluster0.5ofax.mongodb.net/QnA-Webapp?retryWrites=true&w=majority",{useNewUrlParser:true},(err)=>{
    if(!err) console.log('Connection created')
    else console.log('Error while connected to database'+err)
})