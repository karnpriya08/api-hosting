// importing mongoose
 const mongoose = require ("mongoose");

// function to connect with mongodb
const connectDB = (uri) => {
    console.log("connected to db");
    // syntax uri will pass in servwer.js  will be the mongodb url provide by mongodb
    return mongoose.connect(uri);
 }

 module.exports = connectDB;