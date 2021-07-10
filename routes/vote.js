const express = require('express')
const router = express.Router()
const mongoose = require('mongoose')
const Answer = require('../model/answer')

router.get('/vote/:_id-:qid',(req,res)=>{
    if(!req.session.username) {
        res.redirect('/getAnswerPage/'+req.params.qid)
    }else{
        Answer.findOneAndUpdate(
            {"_id" : mongoose.Types.ObjectId(req.params._id)},{
                $inc : {votes : +1}
            },(err,status) => {
                if(err) {
                    console.log(err)
                }else{
                    console.log(status)
                }
            }
        )
        res.redirect('/getAnswerPage/'+req.params.qid)
    }
})





module.exports = router