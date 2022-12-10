

// importing profile moddle
const models = require('../models/model')
const path = require('path')
const cloudinary = require('../config/cloudinary')


// create profile



const createuser = async (req, res) => {
    try {

        const check = await models.userModel.find({ walletAddress: { '$regex': '^' + req.body.walletAddress + '$', "$options": "i" } })

        if (check != null && check != undefined && check.length != 0) {
            res.status(200).json({ success: false, msg: "wallet Address is already exist" })
        }


        var profileImg = "";
        var coverImg = "";

        if (req.files) {
            if (req.files[0]) {
                profileImg = await cloudinary.v2.uploader.upload(req.files[0].path)
                profileImg = profileImg.secure_url
            } else {
                profileImg = 'https://res.cloudinary.com/learn2code/image/upload/v1663070003/download_2_ehimo5.png'
            }

            if (req.files[1]) {
                coverImg = await cloudinary.v2.uploader.upload(req.files[1].path)
                coverImg = coverImg.secure_url
            }
        } else {
            profileImg = 'https://res.cloudinary.com/learn2code/image/upload/v1663070003/download_2_ehimo5.png'
        }



        if (check.length == 0) {

            // creating new profile
            const newProfile = models.userModel({
                userName: req.body.userName,
                walletAddress: req.body.walletAddress,
                description: req.body.description,
                Avatar: profileImg,
                background: coverImg,
                twitter: req.body.twitter,
                facebook: req.body.facebook,
                instagram: req.body.instagram,

            })

            await newProfile.save()
            res.status(200).json({ success: true, msg: "profile created successfully" })
        }


    } catch (error) {
        console.log(error)
        res.status(500).json({ success: false, msg: "something went wrong in server" })
    }
}









// update profile
const updateProfile = async (req, res) => {
    try {


        const { body } = req

        // check if wallet address exist or not
        const profile = await models.userModel.findOne({ walletAddress: { '$regex': '^' + req.body.walletAddress + '$', '$options': 'i' } })


        if (profile != null) {

            await models.userModel.findOneAndUpdate({ walletAddress: { '$regex': '^' + req.body.walletAddress + '$', '$options': 'i' } }, { ...body })

            res.status(200).json({ success: true, msg: "updated successfully" })

        } else {

            res.status(200).json({ success: true, msg: "no profile found with this walled Address" })
        }



    } catch (error) {
        console.log(error)
        res.status(500).json({ success: false, msg: "something went wrong in server" })
    }
}








// delet Profile
const dltProfile = async (req, res) => {
    try {

        const checkUser = await models.userModel.findOne({ walletAddress: { '$regex': '^' + req.body.walletAddress + '$', '$options': 'i' } })

        if (!checkUser) {

            res.status(200).json({ success: true, msg: "user already Deleted" })
        } else {

            await models.userModel.findOneAndDelete({ walletAddress: { '$regex': '^' + req.body.walletAddress + '$', '$options': 'i' } })

            res.status(200).json({ success: true, msg: "user deleted successfully" })

        }

    } catch (error) {
        res.status(500).json({ success: false, msg: "something went wrongin server", error: error })
    }
}








// get Single User 
const getSingleUser = async (req, res) => {
    try {

        var walletAddress = req.params.walletAddress;
        const findUser = await models.userModel.findOne({ walletAddress: { '$regex': '^' + walletAddress + '$', '$options': 'i' } })


        if (!findUser) {
            res.status(200).json({ success: false, msg: "no user found with this walletAddress" })
        } else {
            res.status(200).json({ success: true, user: findUser })
        }


    } catch (error) {
        res.status(500).json({ success: false, msg: "server Error", err: error })
    }
}







// object of all functions
const UserObj = {
    createuser: createuser,
    updateProfile: updateProfile,
    dltProfile: dltProfile,
    getSingleUser: getSingleUser
}


// exporting all function as an object
module.exports = UserObj