const bcryptjs = require('bcryptjs') 
const user_model = require("../models/user_model")

async function register(req, res) {
    try {
        const {name, email, password, profile_pic} = req.body  // Extracting User Data from Request Body

        const email_check = await user_model.findOne({email})  // Return name and email of the user or return null data

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

        // User data will be contained in the database
        const payload = {
            name,
            email,
            profile_pic,
            password: hash_pass
        }
        const user = new user_model(payload)
        const user_save = await user.save()     // User data will be saved in the database

        return res.status(201).json({       // '201' HTTP status code for "Created"
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