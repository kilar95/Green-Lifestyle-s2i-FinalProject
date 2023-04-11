const mongoose = require('mongoose')


const HabitsSchema = mongoose.Schema(
    {
        transportation: String,
        diet: String,
        recycling: Boolean,
        energyUsage: String,
        flightsPerYear: String,
        secondHand: Boolean,
        waterSaving: Boolean,
        workplace: String,
    }
)

const UserSchema = mongoose.Schema(
    {
        username: {
            type: String,
            required: true
        },
        password: {
            type: String,
            required: true
        },
        habits: HabitsSchema,
        result: Number
    }
)

const User = mongoose.model("User", UserSchema)
module.exports = User