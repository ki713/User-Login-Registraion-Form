const mongoose = require('mongoose')

const signUp = new mongoose.Schema ({
    fullName : {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String, 
        required: true
    }
})

// first argument is table name and second one is schema name 
module.exports = mongoose.model('userInfo', signUp);