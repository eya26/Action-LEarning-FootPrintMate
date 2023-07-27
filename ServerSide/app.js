const mongoose = require("mongoose")
const express = require("express")
const app = express()


const bodyParser = require("body-parser")
const cookieParser = require("cookie-parser")
const cors = require("cors")
require("dotenv").config();

const helmet = require("helmet")
//DB connection 
mongoose.connect(process.env.DATABASE, {
    
}).then(() => {
    console.log("DB connected")
}).catch(() => {
    console.log("UNABLE to connect to DB")
})

// Use parsing middleware

app.use(bodyParser.json())
app.use(cookieParser())
app.use(cors())
app.use(helmet())

//Import routes
const userRoutes= require("./routes/user")
// Using routes
app.use('/api', userRoutes)

const QuizItemsRoutes = require("./routes/QuizItems")
app.use('/api', QuizItemsRoutes)

//const port = process.env.PORT || 300&

// Starting a server
app.listen(3001, () => {
    console.log("started listening for resquests on port 3000");
})