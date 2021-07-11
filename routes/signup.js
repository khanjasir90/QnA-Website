const express = require('express')
const router = express.Router()
const Login = require('../model/login')

router.get('/signup',(req,res)=>{
    res.render('signup',{
        error : ""
    })
})

router.post('/signup',(req,res)=>{
    const username = req.body.username
    const password = req.body.password
    const cpassword = req.body.cpassword
    if(!username){
        res.render('signup',{
            error : "Username cannot be blank!"
        })
    }else if(!password){
        res.render('signup',{
            error : "Password cannot be blank!"
        })
    }else if(!cpassword){
        res.render('signup',{
            error : "Confirm Password cannot be blank"
        })
    }else if(password != cpassword) {
        res.render('signup',{
            error : "Passwords doesn't Match"
        })
    }else{
        Login.findOne({username:username},(err,obj)=>{
            if(!obj){
                const user = new Login({
                    username : username,
                    password : password
                })
                if(user.save()){
                    res.redirect('/loginPage')
                }
            }else{
                res.render('signup',{
                    error : "Username already exists!!!"
                })
            }
        })
    }

})

module.exports = router