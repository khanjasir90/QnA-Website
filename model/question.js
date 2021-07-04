const mongoose = require('mongoose')
const questionSchema = mongoose.Schema({
    question : String,
    date : Date,
    askedbyusername : String  
})

module.exports = mongoose.model('question',questionSchema)