const express = require("express")
const router = express.Router()
 const dbSchema = require("../db/dbSchema")

// error handling function 
const handleError = (error) => {
    const  errors = {
          email:"",
        password: ""
    }
      
   // checking for error for unique email
  
      if (error.code === 11000) {
          errors.email = "Email already exist"
          return errors
      }  
       if (error.message.includes("amazonedb validation failed")) {
      const errorArray =(Object.values(error.errors))
           errorArray.forEach((error) => {
               const value = error.properties
               errors[value.path] = value.message
          })
       }
      return errors
}

router.post("/user_create", async (req, res) => {
    try {
        console.log(req.body)
        const { loginData } = req.body
        const user = await dbSchema.create({
            email: loginData.email,
            password: loginData.password
        })
        res.status(201).json(user)
    } catch (error) {
        console.log(error.message)
        res.status(401).json(error.mesage)
    }
})

router.get("/", (req, res) => {
    try {
        res.send("server up and running")
    } catch (error) {
        console.log(error.message)
    }
})

module.exports = router