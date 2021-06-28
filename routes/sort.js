const express = require('express')
const router = express.Router()

router.get('/sortAnswerByDate',(req,res)=>{
    res.send('jasir')
})

router.get('/sortAnswerByMostVote',(req,res)=>{
    res.send('done')
})

module.exports = router