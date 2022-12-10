const router = require('express').Router()
const likesAndFollow = require('../controllers/likesAndFollow')





// Likes Model
router.post('/addlikes', likesAndFollow.addLikes)





// add Followers (this api will follow and unfollow the user by calling aganin and again)
router.post('/addFollower', likesAndFollow.addFollow)








module.exports = router