require("dotenv").config()
const mongoose = require("mongoose")
const MONGU_URL  = process.env.MONGU_URL
const dbConnect = async () => {
    try {
    
        const db = await mongoose.connect(MONGU_URL)
        return db
    } catch (error) {
        console.log({
            error: error.message
        })
    }
}

module.exports = dbConnect