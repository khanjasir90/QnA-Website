const express = require('express')
const router = express.Router()
const Login = require('../model/login')
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
            req.session.username = username
            res.render('index',{username:req.session.username,succmsg : "",errmsg:""})
        }
    })
})

module.exports = router