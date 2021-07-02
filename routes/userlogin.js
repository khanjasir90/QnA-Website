const e = require('express')
const express = require('express')
const router = express.Router()

router.get('/loginPage',(req,res)=>{
    res.render('login')
})

router.post('/authenticateLogin',(req,res)=>{
    res.render('index')
})

module.exports = router