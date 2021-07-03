const express = require('express')
const router = express.Router()

router.get('/',(req,res)=>{
    //req.session.username="Jasir"
    if(!req.session.username) {
        res.render('index',{username : req.session.username})
    }else{
        res.render('index',{username : req.session.username})
    }
})

module.exports = router