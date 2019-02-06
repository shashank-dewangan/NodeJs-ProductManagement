var mongoose = require('mongoose')

module.exports = mongoose.model('User', {
    username: {
        type: String, unique: true, required: [true, "Username is required"], validate: {
            validator: val => val.length > 5
        },
        message: "User name should be minimum 5 character"
    },
    password: { type: String, required: true },
    lastUpdated: { type: Date, default: Date.now() },
    active: { type: Boolean, default: true }
})