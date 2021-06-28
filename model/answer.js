const mongoose = require('mongoose')
const answerSchema = mongoose.Schema({
    _id : Number,
    answer : String,
    username : String,
    date : Date,
})

module.exports = mongoose.model('answer',answerSchema)