const bcryptjs = require('bcryptjs') 
const user = require("../models/user")

async function register(req, res) {
    try {
        const {name, email, password, profile_pic} = req.body  // Extracting User Data from Request Body

        const email_check = await user.findOne({email})  // Return name and email of the user or return null data

        if (email_check) {
            return res.status(400).json ({  // 400 (Bad Request)
                message: "This user already existed!",
                error: true
            })
        }

        // PASSWORD INTO HASH PASSWORD

// password hashing in Node.js with bcrypt.js.
// A salt is a random string that is added to a password before hashing to increase security.
        const salt = await bcryptjs.genSalt(10)     
        const hash_pass = await bcryptjs.hash(password, salt)

        const payload = {
            name,
            email,
            profile_pic,
            password: hash_pass
        }
        const user_cre = new user(payload)
        const user_save = new user.save()

        return res.status(201).json({
            message: "User profile created successfully!",
            data: user_save,
            success: true
        })

    } catch (error) {
        return res.status(500).json({  // 500 (Internal Server Error)
            message: error.message || error,
            error: true
        })
    }
}

module.exports = register