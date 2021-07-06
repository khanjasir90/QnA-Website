const mongoose = require('mongoose')
const answerSchema = mongoose.Schema({
    question_id : String,
    answer : String,
    username : String,
    date : Date,
    votes : Number
})

module.exports = mongoose.model('answer',answerSchema)