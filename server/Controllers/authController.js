const User = require('../Models/userModel')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

// registering a new user
const registerUser = async (req, res) => {

    // password encrypting
    const salt = await bcrypt.genSalt(10)
    const hashedPassword = await bcrypt.hash(req.body.password, salt)
    req.body.password = hashedPassword
    // saving the new user in the database
    try {
        const newUser = new User(req.body)
        const { username } = req.body
        const oldUser = await User.findOne({ username })
        if (oldUser) {
            return res.status(400).json("You already have an account!")
        }

        const user = await newUser.save()
        const token = jwt.sign({
            username: user.username,
            id: user._id,
        }, process.env.JWT_KEY, { expiresIn: "1h" })

        res.status(200).json({ user, token })

    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}

// user login
const loginUser = async (req, res) => {
    const { username, password } = req.body
    try {
        const user = await User.findOne({ username: username })

        if (user) {
            const validity = await bcrypt.compare(password, user.password)

            if (!validity) {
                res.status(400).json("Wrong password.")
            } else {
                const token = jwt.sign({
                    username: user.username,
                    id: user._id
                }, process.env.JWT_KEY, { expiresIn: '1h' })

                res.status(200).json({ user, token })
            }

        } else {
            res.status(400).json("User does not exist")
        }
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}

module.exports = {
    loginUser,
    registerUser
}