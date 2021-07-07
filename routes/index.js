const express = require('express')
const router = express.Router()
const Question = require('../model/question')
router.get('/',(req,res)=>{
    // home route
    Question.find({},(err,obj)=>{
        if(err){
            console.log('There was an error while quering the database')
        }else if(!req.session.username) {
            res.render('index',{username : req.session.username,succmsg : "",errmsg:"",question:obj,bookmark:""})
        }else{
            //console.log(obj)
            res.render('index',{username : req.session.username,succmsg : "",errmsg:"",question:obj,bookmark:""})
        }
    })
   
})

module.exports = router