const mongoose = require('mongoose')

async   function DBconnect(){
    try {
        await mongoose.connect(process.env.MONGODB_URI)

        const connection = mongoose.connection

        connection.on("connect", () => {
            console.log("connect to database")
        })
    } catch (error) {
        console.log("Oops, something went wrong", error)
    }
}