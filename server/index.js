const express = require('express') // Imports the Express.js framework to create a web server.
const cors = require('cors') // Imports the CORS middleware to handle cross-origin requests.
require('dotenv').config() //  Loads environment variables from a .env file.
const DBconnect = require('./config/DBconnect')
const router = require('./routes/index')

// Initializes an Express application (app).
const app = express()
app.use(cors({
    origin: process.env.FRONTEND_URL, // Allows requests only from the frontend URL specified in the .env file.
    credentials: true  // Allows credentials such as cookies, authorization headers, or TLS client certificates in cross-origin requests.
}))
app.use(express.json())     // Middleware to parse JSON request bodies

const PORT = process.env.PORT || 8080 // Retrieves the server port from the .env file 
// If not defined, return 8080 (default)

app.get('/', (req, res) => {
    res.json ({
        message: "Server running at " + PORT
    })
})  

// API endpoints
app.use('/api', router)     // Base path for all routes

DBconnect().then(() => {
    app.listen(PORT, () => {
        console.log("Server running at " + PORT)
    })
})

