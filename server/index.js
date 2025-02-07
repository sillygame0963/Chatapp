const express = require('express')
const cors = require('cors')

const app = express()
app.use(cors({
    origin: ['http://localhost:3000', 'https://example.com'] // Add your allowed origins here
}))