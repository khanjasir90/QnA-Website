const mongoose = require('mongoose')
const bookmarkSchema = mongoose.Schema({
    question_id : String,
    question : String,
    bookmark_username : String
})

module.exports = mongoose.model('bookmark',bookmarkSchema)