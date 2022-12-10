const modles = require('../models/model')
const jwt = require('jsonwebtoken')
const varifyAdmin = require('../middleware/varifyEmail')
const validation = require('../middleware/validation')




// Admin Register
const adminRegister = async (req, res) => {
    try {

        const { error } = await validation(req.body);

        if (error) {
            res.status(400).json({ error: error.message })
        } else {

            const { walletAddress, name, email, phone } = req.body

            if (!walletAddress || !name || !email || !phone) {

                res.status(200).json({ success: false, msg: "invalid parameters" })

            } else {
                const checkWalt = await modles.adminModel.findOne({walletAddress: { '$regex': '^' + req.body.walletAddress + '$', '$options': 'i' }})
                const checkEml = await modles.adminModel.findOne({email: email})
                const checkPhn = await modles.adminModel.findOne({phone: phone})

                         
                if (!checkWalt && !checkEml  && !checkPhn) {

                    // creating admin 
                    const newAdmin = modles.adminModel({
                        walletAddress: walletAddress,
                        name: name,
                        email: email,
                        phone: phone
                    })

                    // Send Varification Email
                    var subject = 'Varify Email Address'
                    var emailTo = newAdmin.email
                    var message = `<h2>Hi Mr ${newAdmin.name}</h2> <br> click link below to varify the email address and be the Admin of OZean NFT MarketPlace.<br>
                    <a href="http://localhost:3000/api/varify-admin/${newAdmin._id}">http://localhost:3000/api/varify-admin/${newAdmin._id}</a>`

                    // sendnig email to varify Emails
                    varifyAdmin(subject, emailTo, message)


                    // admin save here
                    await newAdmin.save()

                    // sending response
                    res.status(200).json({ success: true, msg: "admin registered successfully" })

                } else {
                    
                    var val = ""
                    if(checkWalt){
                        val = '(walletAddress)'
                    }
                    var val1 = ""
                    if(checkEml){
                        val1 = '(Email)'
                    }
                    var varl2 = ""
                    if(checkPhn){
                        varl2 = '(phone)'
                    }
                    res.status(400).json({ success: false, msg: `admin already exist with these creditionals ${val} ${val1} ${varl2}` })
                }
            }
        }
    } catch (error) {
        console.log(error)
        res.status(500).json({ success: false, msg: "something went wrong in server", error: error })
    }
}












const varifyEmail = async (req, res) => {
    try {

        var adminID = req.params.id;
        console.log(adminID)
        var findAdmin = await modles.adminModel.findOne({ _id: adminID })


        if (findAdmin.isVarify == false) {

            await modles.adminModel.findOneAndUpdate({ _id: adminID, walletAddress: { '$regex': '^' + findAdmin.walletAddress + '$', '$options': 'i' } }, { isVarify: true })
            res.status(200).json({ success: true, msg: "admin varified successfully" })

        } else {

            res.status(200).json({ success: false, msg: "admin already varified" })
        }


    } catch (error) {
        console.log(error)
        res.status(500).json({ success: false, msg: "server Error " })
    }
}
















// Update Admin
const updateAdmin = async (req, res) => {

    try {

        var { error } = validation(req.body)
        if (error) {

            res.status(400).json({ error: error.message })

        } else {

            // checking if admin exist with this wallet address or not
            const check = await modles.adminModel.findOne({ walletAddress: { '$regex': '^' + req.body.walletAddress + '$', '$options': 'i' } })

            if (!check) {
                // if admin not so send this response
                res.status(200).json({ success: false, msg: "with this wallet address admin does nott exist" })
            } else {

                // (if admin found so udpate the admin)
                // updating admin here

                await modles.adminModel.findOneAndUpdate({ walletAddress: { '$regex': '^' + req.body.walletAddress + '$', '$options': "i" } }, {
                   ...req.body
                })

                // sending success response
                res.status(200).json({ success: true, msg: "admin updated successfully"})
            }

        }
    } catch (error) {
        res.status(500).json({ success: false, msg: "something went wrong in server" })
    }

}






// delete Admin
const deleteAdmin = async (req, res) => {
    try {

        const check = await modles.adminModel.findOne({ walletAddress: { '$regex': '^' + req.body.walletAddress + '$', "$options": 'i' } })

        if (!check) {

            res.status(200).json({ success: false, msg: "admin not found with this walletAddress" })
        } else {

            await modles.adminModel.findOneAndDelete({ walletAddress: { '$regex': '^' + req.body.walletAddress + '$', "$options": 'i' } })

            res.status(200).json({ success: true, msg: "admin deleted successfully" })
        }
    } catch (error) {
        res.status(500).json({ success: false, msg: "something went wrong in server" })
    }
}




// get all admins here  
const getAllAdmins = async (req, res) => {
    try {

        const allAdmin = await modles.adminModel.find({})

        // sending success response
        res.status(200).json({ success: true, data: allAdmin })


    } catch (error) {

        res.status(500).json({ success: false, msg: "something went wrong with server", error: error.message })
    }
}





// getSingleUser By WalletAddress
const getSingleAdmin = async (req, res) => {
    try {


        const address = req.body.walletAddress;
        // const address = req.admin;
        const currentAdmin = await modles.adminModel.findOne({ walletAddress: { '$regex': '^' + address + '$', '$options': 'i' } })


        res.status(200).json({ success: true, data: currentAdmin })
    } catch (error) {
        res.status(500).json({ succeess: false, msg: "something went wrong in server" })
    }
}









// admin login () 
const adminLogin = async (req, res) => {

    try {
        if (req.body.walletAddress) {

            var adminData = await modles.adminModel.findOne({ walletAddress: { '$regex': '^' + req.body.walletAddress + '$', '$options': 'i' } })


            if (adminData) {

                if (adminData.isVarify != false) {


                    // adding jsonweb Token
                    const token = jwt.sign({ walletAddress: adminData.walletAddress }, process.env.secretKey, {
                        expiresIn: "12 hours"
                    })

                    res.status(200).json({ token: token })

                } else {

                    res.status(200).json({ succeess: false, msg: "Kinldy varify your email address frist" })

                }


            } else {
                res.status(400).json({ msg: "wallet Not Found" })
            }
        } else {
            res.status(400).json({ msg: "wallet not found" })
        }


    } catch (error) {
        res.status(500).json({ success: false, msg: "something went wrong in server" })
    }
}










// object to export admin controllers
const adminObj = {
    adminRegister: adminRegister,
    varifyEmail: varifyEmail,
    updateAdmin: updateAdmin,
    deleteAdmin: deleteAdmin,
    getAllAdmins: getAllAdmins,
    getSingleAdmin: getSingleAdmin,
    adminLogin: adminLogin
}


module.exports = adminObj;