const express = require('express')
const router = express.Router()
const Question = require('../model/question')
router.post('/postQuestion',(req,res)=>{
    // post question code here
    if(req.body.question && req.body.title) {
        const question = new Question({
            title : req.body.title,
            question : req.body.question,
            date : new Date(),
            askedbyusername : req.session.username
        })
        if(question.save()){
            res.render('index',{
                username : req.session.username,
                succmsg : " for posting a Question! You can now see it on home page",
                errmsg : ""
            })
        }else{
            res.render('index',{
                username : req.session.username,
                succmsg : "",
                errmsg : " there was an internal error while posting a Question! Try Again!"
            })
        }
    }else{ 
        res.render('index',{
            username : req.session.username,
            succmsg : "",
            errmsg : "You cannot post a Blank Question! Try Again "
        })
    }
    
})

router.get('/getQuestionPage',(req,res)=>{
    // get question page code here
})

module.exports = router