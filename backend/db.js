const mongoose = require("mongoose");
const dotenv = require('dotenv');
dotenv.config();
const mongoURI = process.env.MONGO_URI
//"mongodb://localhost:27017"

const connectToMongo = ()=>{
    mongoose.connect(mongoURI, ()=>{
        console.log("connecteed to mongo successfully!!")
    })
}

module.exports = connectToMongo