const mongoose = require('mongoose')
const app = require('./app.js')
require('dotenv').config()

const port = process.env.PORT || 3000

console.log("in server.js");

// connect to the database
mongoose.connect(process.env.MONGODB_URI)
    .then(() => app.listen(port, () => {
        console.log(`Listening to port ${port}`);
    }))
    .catch((err) => console.log(err));