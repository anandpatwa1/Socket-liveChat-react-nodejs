const express = require('express')
const { updateProfile, loginUser, getAllUser } = require('./userController')
const { UserProtect } = require('../../middlewere/TokenMiddlewere')
const router = express.Router()

router.put('/update' ,UserProtect, updateProfile)
router.post('/login' , loginUser) //9977
router.get('/getAllUser' , getAllUser)

router.get('/get' , (req,res)=>{
    res.send('in get user')
})
// router.post('/login' , loginUser)


module.exports = router