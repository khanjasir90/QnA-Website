const express = require('express')
const router = express.Router()
const Question = require('../model/question')
router.post('/postQuestion',(req,res)=>{
    // post question code here
    if(req.body.question) {
        const question = new Question({
            question : req.body.question,
            date : new Date(),
            askedbyusername : req.body.username
        })
        if(question.save()){
            res.render('index',{
                username : req.body.username,
                succmsg : "Thank you for posting a Question! You can now see it on home page",
                errmsg : ""
            })
        }else{
            res.render('index',{
                username : req.body.username,
                succmsg : "",
                errmsg : "Sorry there was an internal error while posting a Question! Try Again!"
            })
        }
    }else{ 
        res.render('index',{
            username : req.body.username,
            succmsg : "",
            errmsg : "You cannot post a Blank Question! Try Again "
        })
    }
    
})

router.get('/getQuestionPage',(req,res)=>{
    // get question page code here
})

module.exports = router