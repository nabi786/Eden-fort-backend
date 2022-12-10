const models = require('../models/model')
const path = require('path')
const cloudinary = require('../config/cloudinary')



// create collection post method
const createCollection = async (req, res) => {
    try {


        // uploading images on cloudinary
        var profileImg = "";
        var backgroundImg = "";

        if (req.files) {

            if (req.files[0]) {
                profileImg = await cloudinary.v2.uploader.upload(req.files[0].path)
                profileImg = profileImg.secure_url
            } else {
                profileImg = 'https://res.cloudinary.com/learn2code/image/upload/v1663070003/download_2_ehimo5.png'
            }

            if (req.files[1]) {
                backgroundImg = await cloudinary.v2.uploader.upload(req.files[1].path)
                backgroundImg = backgroundImg.secure_url
            }
        } else {
            profileImg = 'https://res.cloudinary.com/learn2code/image/upload/v1663070003/download_2_ehimo5.png'
        }



        const newCollection = models.collectionModel({
            name: req.body.name,
            description: req.body.description,
            owner: req.body.ownerID,
            avatar: profileImg,
            background: backgroundImg,
            category: req.body.category
        })

        // find if body.name is already exist in databse
        const user = await models.userModel.findOne({ _id: req.body.ownerID })
        user.Collections.push(newCollection._id)

        //  saving user
        await user.save()

        // saving collection
        await newCollection.save()
        res.status(200).json({ success: true, msg: "collection created successfully" })

    } catch (error) {
        console.log(error)
        res.status(500).json({ success: false, msg: "something went wrong in server", error: error.message })

    }
}









// get single collection
const getSingleCollection = async (req, res) => {
    try {

        const collectionID = req.params.collectionID
        console.log(collectionID)
        var currentCollection = await models.collectionModel.findOne({ _id: collectionID }).populate('owner')
        res.status(200).json({ success: true, collection: currentCollection })

    } catch (err) {
        console.log(err)
        res.status(500).json({ success: false, msg: "something went wrong in server", error: err })
    }
}







// update collection
const updateCollection = async (req, res) => {
    try {

        const currentCollection = await models.collectionModel.findOne({ _id: req.params.collectionID })


        var profileImg = "";
        var backgroundImg = "";
        if (req.files) {

            if (req.files[0]) {
                profileImg = await cloudinary.v2.uploader.upload(req.files[0].path)
                profileImg = profileImg.secure_url
            } else {
                profileImg = currentCollection.avatar
            }

            if (req.files[1]) {
                backgroundImg = await cloudinary.v2.uploader.upload(req.files[1].path)
                backgroundImg = backgroundImg.secure_url
            } else {
                backgroundImg = currentCollection.background
            }

        }





        if (!currentCollection) {

            res.status(200).json({ success: false, msg: "collection not found" })
        }
        else {

            await models.collectionModel.findOneAndUpdate({ _id: req.params.collectionID }, {
                name: req.body.name,
                description: req.body.description,
                owner: currentCollection.ownerID,
                avatar: profileImg,
                background: backgroundImg,
                category: req.body.category
            })

            res.status(200).json({ success: true, msg: "collection updated successfully" })
        }

    } catch (error) {
        res.status(500).json({ success: false, msg: "something went wrong in server" })
    }
}







// delete collections
const deleteCollection = async (req, res) => {

    try {

        const collection = await models.collectionModel.findOne({ _id: req.params.collectionID })

        const userModel = await models.userModel.findOne({ _id: collection.owner })


        if (!collection) {
            res.status(200).json({ success: false, msg: "collection not found" })
        } else {

            // findOne and Delete
            await models.collectionModel.findOneAndDelete({ _id: req.params.collectionID })
            
            var idsAry = userModel.Collections
            var findIndex = idsAry.indexOf(req.params.collectionID)
            idsAry.splice(findIndex, 1)
            userModel.Collections = idsAry

            userModel.save()

            res.status(200).json({ success: true, msg: "collection deleted Successfully" });
        }

    } catch (error) {
        
        res.status(500).json({ success: false, msg: "something went wrong in sever" })
    }

}







// making object of all functions
const collectionOBj = {
    createCollection: createCollection,
    getSingleCollection: getSingleCollection,
    updateCollection: updateCollection,
    deleteCollection: deleteCollection
}


// exporting functions
module.exports = collectionOBj