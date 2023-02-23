

const mongoose = require("mongoose")

require("dotenv").config()

const connection = mongoose.connect(process.env.mongoUrl)

module.exports={
    connection
}

// mongoUrl=mongodb+srv://NEM_Project:NEM_Project@nem.begxcje.mongodb.net/?retryWrites=true&w=majority
