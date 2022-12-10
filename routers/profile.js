
const router = require('express').Router()
const UserObj = require('../controllers/profile')
const imgUpload = require('../middleware/imgUpload')



// CREATE PROFILE
router.post('/profile',imgUpload.array('userImgs', 2), UserObj.createuser)

// UPDATE PROFIEL
router.patch('/profile', UserObj.updateProfile)

// delete Profile
router.delete('/profile', UserObj.dltProfile)

// GET Profile by walllet address
router.get('/profile/:walletAddress', UserObj.getSingleUser)








// exporting Module
module.exports = router