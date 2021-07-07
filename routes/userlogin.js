const express = require('express')
const router = express.Router()
const Login = require('../model/login')
const Question = require('../model/question')
router.get('/loginPage',(req,res)=>{
    if(req.session.username) {
        res.render('index',{username : req.session.username,succmsg:""})
    }else{
        res.render('login',{error:""})
    }
    
})

router.post('/authenticateLogin',(req,res)=>{
    const username = req.body.username
    const password = req.body.password
    Login.findOne({username,username},(err,obj)=>{
        if(err) {
            console.log(err)
        }else if(obj == null) {
            res.render('login',{error : "Incorrect Username or Password!!!"})
        }else if(obj.password != password){
            res.render('login',{error : "Incorrect Username or Password!!!"})
        }else{
            Question.find({},(err,obj)=>{
                req.session.username = username
                res.render('index',{username:req.session.username,succmsg : "",errmsg:"",question:obj,bookmark:""})
            })
        }
    })
})

module.exports = router