const validate = require("validator")
const bcrypt = require("bcrypt")
const mongoose = require("mongoose")
const validator = require("validator")

const { isEmail } = validator

const Schema = mongoose.Schema

const userSchema = new Schema({
    email: {
        type: String,
        required: [true,"Email is required"],
        unique: true,
        lowercase: true,
        validate: [isEmail, "please input a valid Email"]
    },

    password: {
        type: String,
        required: [true, "Password is required"],
        minlength: [6, "Password must have a minnimum of six charecters"]
    },
  Date:{
      type: Date, 
      default: Date.now()
  }
})

userSchema.pre("save", async function(next){
    try {
        const salt = await bcrypt.genSalt()
        this.password = await bcrypt.hash(this.password, salt)
        next()
    } catch {
        console.log(error.message)
  }
    
})
const amazoneSchema = mongoose.model("amazonedb", userSchema)

 
module.exports = amazoneSchema