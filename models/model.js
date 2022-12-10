const mongoose = require('mongoose')


// user Schema
const userSchema = new mongoose.Schema({
    userName: {
        type: String,
        required: [true, "userName must be provided"]
    },
    walletAddress: {
        type: String,
        required: true,
        unique: true,
    }
    , Avatar: {
        type: String,
    },

    background: {
        type: String,
    },
    description: {
        type: String
    },
    twitter: {
        type: String
    },
    facebook: {
        type: String
    },
    instagram: {
        type: String,
    },
    isVarified: {
        type: Boolean,
        default: false
    },
    isOnFeatured: {
        type: Boolean,
        default: false
    },
    Collections: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "collections",
        }
    ],
    Nfts: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "NFts"
        }
    ],
    FollowedBy: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "user"
        }
    ],
    MyFollowing: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "user"
        }
    ],
    MyLikes : [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "NFts" 
        }
    ]


}, { timestamps: true })








// admin Registration
const adminSchema = mongoose.Schema({

    walletAddress: {
        type: String,
        required: true,
        unique: true
    },

    name: {
        type: String,
        required: true,
    },

    email: {
        type: String,
        required: true
    },
    phone : {
        type : String,
        required : true
    },
    isVarify : {
        type : Boolean,
        default : false 
    }

}, { timestamps: true })





// create collection Schema
const collectionSchema = mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    owner: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "user",
        required: true
    },
    avatar: {
        type: String,
    },
    background: {
        type: String,
    },
    description: {
        type: String
    },
    category: {
        type: String
    },

}, { timestamps: true })





// nft controll Schema; 
const nftControllerSchema = mongoose.Schema({

    tokenAddress: {
        type: String,
        required: true,
    },
    tokenID: {
        type: String,
        required: true,
    },
    chainID: {
        type: String,
    },
    tokenUri: {
        type: String,
    },
    Price: {
        type: Number,
        required: [true, 'price must be added']
    },
    owner: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "user",
    },
    NFTImg: {
        type: String
    },
    NftTitle: {
        type: String,
        required: [true, "nft title must be added"]
    },
    description: {
        type: String
    },
    category: {
        type: String,
        required: true
    },
    isOnSell: {
        type: Boolean,
        default: false
    },
    LikedBy: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "user"
        }
    ],
    Likes: {
        type: String
    },
    Views: {
        type: Number,
        default: '0'
    }


},{ 
    timestamps: true 
})














// user Schema 
const user = mongoose.model('user', userSchema)

// admin Schema
const admin = mongoose.model('admin', adminSchema)


// collection model
const collection = mongoose.model('collections', collectionSchema)

const nfts = new mongoose.model('NFts', nftControllerSchema)


// exporint models
const modles = {
    userModel: user,
    adminModel: admin,
    collectionModel: collection,
    nfts: nfts
}


// exporting model
module.exports = modles