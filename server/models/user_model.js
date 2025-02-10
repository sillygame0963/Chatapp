const mongoose = require('mongoose')  // Import Mongoose lib to interact with MongoDB

const userSchema = new mongoose.Schema ({  // Create a Schema (a blueprint) for user data
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

const user = mongoose.model('User', userSchema)  // This compiles the schema into a Mongoose model called "User"
module.exports = user   