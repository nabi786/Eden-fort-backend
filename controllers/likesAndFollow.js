const models = require('../models/model')



// add Likes
const addLikes = async (req,res)=>{
        try{

            var currentUser = await models.userModel.findOne({walletAddress : {'$regex' : '^'+req.body.walletAddress+'$', '$options' : 'i'}})

            var currentNft = await models.nfts.findOne({tokenID : req.body.tokenID})
           
            var findIndex = currentNft.LikedBy.indexOf(currentUser._id)


            if(findIndex == -1){

                currentNft.LikedBy.push(currentUser._id)

                currentUser.MyLikes.push(currentNft._id)

                currentNft.Likes = currentNft.LikedBy.length
                
                currentNft.save()
                currentUser.save()
                
                res.status(200).json({success : true, msg: "like added successfully"})

                
            }else{
                
                currentNft.LikedBy.splice(findIndex,1)
                currentNft.Likes = currentNft.LikedBy.length

                var findIndex2 = currentUser.MyLikes.indexOf(currentNft._id)
                currentUser.MyLikes.splice(findIndex2,1)

                currentNft.save()
                currentUser.save()
                
                res.status(200).json({success : true, msg: "like removed successfully"})
            }

        }catch{
            res.status(500).json({success : false, msg : "server error"})
        }
}





// add Followers
const addFollow = async (req,res)=>{
    try {
        
        // find currentUser by their WalletAddress
        var currentUser = await models.userModel.findOne({walletAddress : {'$regex' : '^' + req.body.walletAddress+'$', '$options' : 'i'}})
        
        // findCurent Profile By their ID
        var currentProfile =  await models.userModel.findOne({_id : req.body.profileID})
        
        var findIndex = currentProfile.FollowedBy.indexOf(currentUser._id)
        
        if(findIndex == -1){
            // add Follow
            currentProfile.FollowedBy.push(currentUser._id)

            // Add Following
            currentUser.MyFollowing.push(currentProfile._id)

            currentProfile.save()
            currentUser.save()

            res.status(200).json({success : true , msg : "follow successfully"})

        }else{

            var findIndex2 = currentUser.MyFollowing.indexOf(currentProfile._id)
            currentProfile.FollowedBy.splice(findIndex,1)
            currentUser.MyFollowing.splice(findIndex2,1)


            currentUser.save()
            currentProfile.save()

            res.status(200).json({success : false , msg : "successfully Unfollowed"})
        }

       

    } catch (error) {
        
        res.status(500).json({success : false, msg : "server error"})
    }
}







// making object of all functions
const likeObj = {
    addLikes : addLikes,
    addFollow : addFollow,
}








// exporting that object
module.exports = likeObj