router = require('express').Router()


// index Route 
router.get('/', async (req,res)=>{
    try{
        
        res.status(200).json({msg : "Eden Fort Backend working successfully" })
    }catch(err){
        res.status(500).json({msg : "server error"})
    }
})


// exporting module
module.exports = router