// import schema from models
const Product = require("../models/product");

// function to handle data 
const getAllProducts = async (req, res) => {
    console.log("check");
    //  query to get all the data with find {}
    const myData = await Product.find({});
    //    sending data to server
    res.status(200).json({ myData })

};

const getAllTesting = async (req, res) => {
    // getting query given by user
    const { company, name, featured, sort, select } = req.query;
    // storing query in object
    const queryObject = {};

    // condition to handle query consist comapny to improve search 
    // it will handle query of search and give us data of company
    if (company) {
        queryObject.company = company;
    }
    // adding feature search functionality

    if (featured) {
        queryObject.featured = featured;
    }

    // advance searching handling 2 query 
    if (name) {
        // for full text search option it will provide all data have particular name 
        // given by user
        queryObject.company = { $regex: name, $options: "i" }
        // i represent case insencitive so it can search all that have articular matching to name 
    }
    // storing apidata on paticular variable so we can use it wisely 
    let apiData = Product.find(queryObject)

    // for sorting enter by user specially by using , 

    if (sort) {
        let sortFix = sort.split(",").join(" ")
        queryObject.sort = sortFix
        apiData = apiData.sort(sortFix)
    }

    if (select) {
        let selectFix = select.split(",").join(" ")
        queryObject.sort = selectFix
        apiData = apiData.select(selectFix)
    }

    //  for pagination and limit
    // convert string  to no. entered by user in query or default value

    let page = Number(req.query.page) || 1;
    let limit = Number(req.query.limit) || 2;
  let skip = (page-1) * limit ;
    
  apiData =apiData.skip(skip).limit(limit);

    // for sorting by a single thing 
    // const data = await Product.find(queryObject).sort("name") (for asscending)
    // const data = await Product.find(queryObject).sort("-name") (for descending order)



    const data = await apiData;
    // console.log(queryObject);
    res.status(200).json({data, nbHits : data.length})
};

module.exports = {
    getAllProducts,
    getAllTesting
}
