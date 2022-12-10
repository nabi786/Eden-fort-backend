const jwt = require('jsonwebtoken')


// authentication
const auth = async (req, res, next) => {
    try {

        var bearerToken = req.headers['token']
        
        if (bearerToken) {
            var decode = await jwt.verify(bearerToken, process.env.secretKey)
            req.admin = decode.walletAddress
            next()

        } else {
            res.status(500).json({ msg: "invalid token" })
        }

    } catch (error) {
        res.status(500).json({success : false, msg: "invalid token"})
    }
}


module.exports = auth