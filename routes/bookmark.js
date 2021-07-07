const express = require('express')
const router = express.Router()
const Bookmark = require('../model/bookmark')
const Question = require('../model/question')
router.get('/bookmark/:id-:question',(req,res)=>{
    if(!req.session.username) {
        Question.find({},(err,obj)=>{
            res.render('index',{
                username : req.session.username,
                succmsg : "",
                errmsg : "",
                question : obj,
                bookmark : "Cannot add Bookmark since you are no logged in!"
            })
        })
    }else{
        const bookmark = new Bookmark({
            question_id : req.params.id,
            question : req.params.question,
            bookmark_username : req.session.username,
        })
        if(bookmark.save()){
            res.redirect('/')
        }else{
            console.log('error')
        }
    }
})

router.get('/getBookmark',(req,res)=>{
    Bookmark.find({bookmark_username : req.session.username},(err,obj)=>{
        res.render('bookmark',{
            username : req.session.username,
            question : obj,
            succmsg : "",
            errmsg : ""
        })
    })
})


module.exports = router