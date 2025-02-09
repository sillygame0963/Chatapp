const mongoose = require('mongoose')

const userSchema = new mongoose.Schema ({
    name : {
        type: String,
        require: [true, "provide name"]
    },
    email : {
        type: String,
        require: [true, "provide email"],
        unique: true
    },
    password : {
        type: String,
        require: [true, "provide password"]
    },
    profile_picture : {
        type: String,
        default: ""
    }
},{
    timestamps: true
})

const user = mongoose.model('User', userSchema)
module.exports = user   