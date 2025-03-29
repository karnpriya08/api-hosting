// creating instance of express
const express = require ("express");

// importing router for providing route
const router = express.Router();

// importing controlling function 
const {getAllProducts,getAllTesting} =require("../controller/products.js");

// specifying routes for diffrent functions
router.route("/").get(getAllProducts);
router.route("/testing").get(getAllTesting);



module.exports = router ;