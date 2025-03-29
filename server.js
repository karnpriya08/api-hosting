const express = require("express");
const app = express();
require("dotenv").config();
const port = process.env.PORT || 5000; 
const routes = require ("./routes/products");
// const connectDB = require("../server/db/connect")
const connectDB = require ("./db/connect");
// import connectDB from "./db/connect";
const cors = require("cors");

// to parse in json 
app.use(express.json());
// for local host compatibility
app.use(cors( ));

// to get data on server 
app.get("/", (req, res) => {
    res.status(200).json("holla I am live"),
    console.log("hello i am live");
});

// middleware for routing
app.use("/products", routes);

// function for connecting and listening and mainly to make it async
const start = async () => {
    try {
        // connecting to mongodb
        await connectDB(process.env.MONGODB_URL);
        
        // listening on port 
        app.listen(port, () => {
            console.log(`listening on port : ${port}`);
        })
    }
    // handling error 
    catch(error){
        console.log(error);
    }
}

start();

