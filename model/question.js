const mongoose = require('mongoose')
const questionSchema = mongoose.Schema({
    _id : Number,
    question : String,
    date : Date,
    askedbyusername : String  
})

module.exports = mongoose.model('question',questionSchema)