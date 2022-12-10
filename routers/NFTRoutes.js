const router = require('express').Router()
const nftObj = require('../controllers/NFT')
const imgUpload = require('../middleware/imgUpload')


// create nft post method
router.post('/createNft/:ownerID', imgUpload.single('NFTImg') ,nftObj.createNft)

// get All Nfts (who is on Sell)
router.post('/nftsForSell', nftObj.getAllNfts)

// getSingle nft
router.post('/singleNft', nftObj.getSingleNft)

// set NFT On Sell
router.patch('/nftToSell', nftObj.setNftToSell)

//(Get Single User Nfts) that not all Sale
router.post('/singleUserNfts', nftObj.singleUserNfts)

// (get Single User NFts) that On Sell
router.post('/singleUserNftOneSell',  nftObj.getSingleUserNftOnSell)


// get All Nfts liked by current User
router.post('/getAllNftsThatUserLike', nftObj.nfts_I_Like)










// exporting module
module.exports = router