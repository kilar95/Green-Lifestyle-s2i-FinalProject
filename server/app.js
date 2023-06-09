const express = require('express')
const app = express()
const mongoSanitize = require('express-mongo-sanitize')
const cors = require('cors')
const homeRoute = require('./Routes/homeRoute')
const authRoute = require('./Routes/authRoute')

// middleware
app.use(express.urlencoded({ extended: false }))
app.use(express.json())
app.use(mongoSanitize())
app.use(cors()); // Enable CORS for all routes

// setting routes
app.use('/auth', authRoute)
app.use('/home', homeRoute)
app.get('/', (req, res) => {
    res.send('Server is up and running');
});

app.all('*', (req, res, next) => {
    const error = new Error('Resource not found')
    error.status = 404
    next(error)
})

// errors handling 
app.use((err, req, res, next) => {
    res.status(err.status || 500)
    res.json({
        error: {
            message: err.message
        }
    })
})

app.timeout = 30000;

module.exports = app
