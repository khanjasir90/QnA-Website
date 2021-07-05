const express = require('express')
const router = express.Router()
const Question = require('../model/question')
router.get('/logout',(req,res)=> {
    Question.find({},(err,obj)=>{
        req.session.username = ""
        res.render('index',{username:req.session.username,succmsg : "",errmsg:"",question:obj})
    })
})
module.exports = router