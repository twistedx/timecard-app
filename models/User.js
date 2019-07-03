const mongoose = require('mongoose');



const UserSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    title: {
<<<<<<< HEAD
        type: String,
=======
        type: String
>>>>>>> 9304afbc5fc65adb201e513ff954f0c4d33c632a
    },
    date: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('user', UserSchema)