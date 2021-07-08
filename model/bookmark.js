const mongoose = require('mongoose')
const bookmarkSchema = mongoose.Schema({
    question_id : String,
    question : String,
    bookmark_username : String,
    answer_count : Number
})

module.exports = mongoose.model('bookmark',bookmarkSchema)