const mongoose = require('mongoose')
const questionSchema = mongoose.Schema({
    title : String,
    question : String,
    date : Date,
    askedbyusername : String ,
    answer_count : Number
})

module.exports = mongoose.model('question',questionSchema)