const express = require("express")
const cors = require("cors")
const cookie = require("cookie-parser")
const jwt = require("jsonwebtoken")

const router = require("./Routes/Routes")
const dbConnect = require("./db/dbConnect")
const dbSchema = require("./db/dbSchema")

const app = express()

const Port = process.env.PORT || 5000

app.use(cors())
app.use(express.json())
app.use(router)







const connection = async () => {
    try {
        const connect = await dbConnect()
         if (connect !== undefined) {
            app.listen(Port, () => {
                console.log(`Database connected and Server running on PORT ${Port}`)
            })
       }
        }
      catch (error) {
         console.log({
             error: error.message
         })
         
     }
}
connection()
