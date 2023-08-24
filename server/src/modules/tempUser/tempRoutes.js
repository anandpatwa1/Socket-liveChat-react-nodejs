const express = require('express')
const {  tempRegister , verifyOtp } = require('./tempController')
const router = express.Router()

router.post('/register' , tempRegister)
router.post('/verifyOtp' , verifyOtp)

router.get('/get' , (req,res)=>{
    res.json({msg : 'in get user otp'})
})

module.exports = router