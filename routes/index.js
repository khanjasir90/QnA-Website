const express = require('express')
const router = express.Router()

router.get('/',(req,res)=>{
    // home route
    if(!req.session.username) {
        res.render('index',{username : req.session.username,succmsg : "",errmsg:""})
    }else{
        res.render('index',{username : req.session.username,succmsg : "",errmsg:""})
    }
})

module.exports = router