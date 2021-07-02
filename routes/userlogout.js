const express = require('express')
const router = express.Router()

router.get('/logout',(req,res)=> {
    var sess = req.session.username
    console.log(sess)
})
module.exports = router