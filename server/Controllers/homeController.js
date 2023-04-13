const User = require('../Models/userModel')
const data = require('../data')

const getUserResults = async (req, res) => {
    const { userId } = req.body

    try {
        const user = await User.findById(userId)
        if (user) {
            const { result, ...otherDetails } = user._doc
            if (result)
                return res.status(200).json(result)
        } else {
            res.status(404).json("The user does not exist")
        }
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}

// updating user habits
const updateUserData = async (req, res) => {
    const { userId, property, value } = req.body

    try {
        const userUpdated = await User.findByIdAndUpdate({ _id: userId }, { $set: { [`habits.${property}`]: value } }, { returnDocument: 'after' })
        if (userUpdated) {
            res.status(200).json(userUpdated)
        } else {
            res.status(404).json('User not found')
        }
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}

// calculating final score
const calculateResults = async (req, res) => {
    const { userId } = req.body

    try {
        const user = await User.findById(userId)

        if (!user) {
            return res.status(404).json({ message: "User not found" })
        }


        let totalScore = 0;
        for (key in user.habits.toObject()) {
            if (key === '_id') continue;
            totalScore += data[key][user.habits[key]].score
        }

        user.result = totalScore
        await user.save()
        res.status(200).json(user)
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: error.message })
    }
}


const resetResults = async (req, res) => {
    const { userId } = req.params

    try {
        const userUpdated = await User.findByIdAndUpdate({ _id: userId }, { $unset: { result: "" } }, { returnDocument: 'after' })
        if (userUpdated) {
            res.status(200).json(userUpdated)
        } else {
            res.status(404).json('User not found')
        }
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}

module.exports = {
    getUserResults,
    updateUserData,
    calculateResults,
    resetResults
}