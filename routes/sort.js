const express = require('express')
const Question = require('../model/question')
const Answer = require('../model/answer')
const router = express.Router()

router.get('/sortByDate/:id',(req,res)=>{
    Question.find({_id:req.params.id},(qerr,qobj)=>{
        var dateSort = {date : -1}
        Answer.find({question_id : req.params.id}).sort(dateSort).exec((aerr,aobj)=>{
            if(aerr){
                console.log(aerr)
            }else{
                res.render('answer',{
                    username : req.session.username,
                    question : qobj,
                    answer : aobj,
                    answerflag :  "",
                    questionid : req.params._id
                })
            }
        })
    })
})

router.get('/sortByMostVotes/:id',(req,res)=>{
    Question.find({_id:req.params.id},(qerr,qobj)=>{
        var voteSort = {votes : -1}
        Answer.find({question_id:req.params.id}).sort(voteSort).exec((aerr,aobj)=>{
            res.render('answer',{
                username : req.session.username,
                question : qobj,
                answer : aobj,
                answerflag :  "",
                questionid : req.params._id
            })
        })

    })
})


module.exports = router