
require ("dotenv").config();
const connectDB = require("./db/connect");
// import connectDB from "./db/connect";
// import product from "./models/product";
const Product = require ("./models/product");
// import product from "./models/product";
// import products from "./products.json"
const productJson = require ("./products.json");


const start = async () => {
try {

    await connectDB(process.env.MONGODB_URL);
    
    await Product.deleteMany();
    await Product.create(productJson);
    console.log("sucess");
}
catch (err){
    console.log(err);
}
}
start();