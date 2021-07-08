const express = require('express')
const mongoose = require('mongoose')
const router = express.Router()
const Answer = require('../model/answer')
const Question = require('../model/question')
router.post('/answerQuestion/:_id',async(req,res)=>{
    if(req.body.answer) {
        const newanswer = new Answer ({
            question_id : req.params._id,
            answer : req.body.answer,
            username : req.session.username,
            date : new Date(),
            votes : 0
        })
        var flag = await newanswer.save()
        if(newanswer.save()) {
            Question.findOneAndUpdate(
                { "_id" :  mongoose.Types.ObjectId(req.params._id)},{
                    $inc : {answer_count : +1}
                },(err,status)=>{
                    if(err){
                        console.log(err)
                    }else{
                        console.log(status)
                    }
                }
            )
            res.redirect('/getAnswerPage/'+req.params._id)            
        }
    }
})

router.get('/getAnswerPage/:_id',(req,res)=>{
    Question.find({_id : req.params._id},(qerr,qobj)=>{
        Answer.find({question_id : req.params._id},(aerr,aobj)=>{
            if(!aobj){
                res.render('answer',{
                    username : req.session.username,
                    question : qobj,
                    answer : "",
                    answerflag :  "There are no Answers for this question",
                    questionid : req.params._id
                })
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


module.exports = router