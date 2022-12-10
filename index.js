
require('dotenv').config()
require('./config/database')

// woring
const swaggerJsDoc = require('swagger-jsdoc')
const swaggerUI = require('swagger-ui-express')

// working
const express = require('express')
const app = express()
const PORT = process.env.PORT;
// const PORT = 5000;
const morgan = require('morgan')
const cors = require('cors')
// Import modules
const favicon = require('serve-favicon');
const path = require('path')


// send messate for just test
app.use(favicon(path.join(__dirname, 'public/', 'favicon.png')));

// Returns a middleware to serve favicon
// app.use(favicon(__dirname + '/favicon.png'));

app.use(express.json())
const options = {
    definition: {
        openapi: '3.0.0',
        info: {
            title: 'Eden Fort MarkeetPlace',
            version: '1.0.0'
        },
        servers: [
            {
                url: `http://localhost:${PORT}`
            }
        ]

    },
    apis : ['./routers/*.js']
}

const swaggerSpac = swaggerJsDoc(options)
app.use('/api-doc',swaggerUI.serve, swaggerUI.setup(swaggerSpac))
app.disable('etag');


app.use(express.urlencoded({ extended: true }));
app.use(morgan('dev'))


// IMPORTING Routes
const profileRoute = require('./routers/profile')
const adminRegistration = require('./routers/adminRegistration')
const collectionRoutes = require('./routers/collections')
const nftRouter = require('./routers/NFTRoutes')
const viewAndLikes = require("./routers/likesAndFollow.js")
// const IndexRouter = require('./routers/indexRoute')

// USE ROUTES AS GLOBARL MIDDLEWARE
app.use('/api', profileRoute)
app.use('/api', adminRegistration)
app.use('/api', collectionRoutes)
app.use('/api', nftRouter)
app.use('/api', viewAndLikes)
// app.use(IndexRouter)

app.use(cors())

// express fiel uploads




app.get('/', async (req,res)=>{
        try{
            
            res.status(200).json({msg : "Eden Fort Backend working successfully" })
        }catch(err){
            res.status(500).json({msg : "server error"})
        }
})


app.get('*', async (req,res)=>{
    try{
        
        res.status(404).json({msg : "page not Found" })
    }catch(err){
        res.status(500).json({msg : "server error"})
    }
})


// listening app on this port number (this is server)
app.listen(PORT,"0.0.0.0", () => {
// app.listen(PORT,() => {
    // console.log(`server started successfully on PORT Number ${process.env.PORT}`)
    console.log(`server started successfully on PORT Number ${PORT}`)
})