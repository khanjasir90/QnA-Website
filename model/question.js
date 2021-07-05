const mongoose = require('mongoose')
const questionSchema = mongoose.Schema({
    title : String,
    question : String,
    date : Date,
    askedbyusername : String  
})

module.exports = mongoose.model('question',questionSchema)