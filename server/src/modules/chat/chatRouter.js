const express = require('express')
const { UserProtect } = require('../../middlewere/TokenMiddlewere')
const { sendMSG } = require('./chatController')
const router = express.Router()

router.post('/send', UserProtect, sendMSG) 
// router.post('/getAllMsg', UserProtect, sendMSG) 

router.get('/get' , (req,res)=>{
    res.json({msg : 'get chat'})
})

module.exports = router