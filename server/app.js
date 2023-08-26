const express = require('express')
const app = express()
const mongoSanitize = require('express-mongo-sanitize')
const cors = require('cors')
const homeRoute = require('./Routes/homeRoute')
const authRoute = require('./Routes/authRoute')
const mongoose = require('mongoose')
require('dotenv').config()


// middleware
app.use(express.urlencoded({ extended: false }))
app.use(express.json())
app.use(mongoSanitize())
app.use(cors(
    {
        origin: ["https://how-green-is-your-lifestyle.vercel.app"],
        methods: ["POST", "GET", "PATCH", "PUT", "DELETE", "OPTIONS"],
        credentials: true,
    }
));

const port = process.env.PORT || 3000

// connect to the database
mongoose.connect(process.env.MONGODB_URI)
    .then(() => {
        app.listen(port, () => {
            console.log(`Listening to port ${port}`);
        });
    })
    .catch((err) => console.log(err));

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


module.exports = app
