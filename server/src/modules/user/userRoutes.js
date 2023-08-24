const express = require('express')
const { updateProfile } = require('./userController')
const { UserProtect } = require('../../middlewere/TokenMiddlewere')
const router = express.Router()

router.put('/update' ,UserProtect, updateProfile)

router.get('/get' , (req,res)=>{
    res.send('in get user')
})
// router.post('/login' , loginUser)


module.exports = router