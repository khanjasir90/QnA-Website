const express = require('express')
const router = express.Router()
const mongoose = require('mongoose')
const Bookmark = require('../model/bookmark')
const Question = require('../model/question')
router.get('/bookmark/:id',(req,res)=>{
    console.log(req.params.id)
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
       Question.findOne({"_id" : mongoose.Types.ObjectId(req.params.id)},(qerr,qobj)=>{
           const bookmark = new Bookmark({
               question_id : req.params.id,
               question :  qobj.question,
               bookmark_username : req.session.username,
               answer_count : qobj.answer_count
           })
           if(bookmark.save()){
               res.redirect('/')
           }else{
               console.log('error')
           }
       })
    }
})

router.get('/getBookmark',(req,res)=>{
    Bookmark.find({bookmark_username : req.session.username},(err,obj)=>{
        console.log(obj)
        res.render('bookmark',{
            username : req.session.username,
            question : obj,
            succmsg : "",
            errmsg : ""
        })
    })
})

router.get('/deleteBookmark/:id',(req,res)=>{
    Bookmark.deleteOne({"_id" : mongoose.Types.ObjectId(req.params.id)},(err,status)=>{
        if(err) {
            console.log(err)
        }else{
            console.log(status)
            res.redirect('/getBookmark')
        }
    })
})

module.exports = router