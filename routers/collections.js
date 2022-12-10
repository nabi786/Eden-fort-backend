const router = require("express").Router()
const collectionOBj = require('../controllers/collections') 
const imgUpload = require('../middleware/imgUpload')



// create collection post method
router.post('/collection/',imgUpload.array('img', 2), collectionOBj.createCollection)

// get Single Collection
router.get('/collection/:collectionID',collectionOBj.getSingleCollection )

// update Collection
router.patch('/collection/:collectionID',imgUpload.array('Img', 10), collectionOBj.updateCollection)

// delete collection
router.delete('/collection/:collectionID', collectionOBj.deleteCollection)


// exporting module
module.exports = router