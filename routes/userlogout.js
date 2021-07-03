const express = require('express')
const router = express.Router()

router.get('/logout',(req,res)=> {
    req.session.username = ""
    res.render('index',{username:req.session.username})
})
module.exports = router