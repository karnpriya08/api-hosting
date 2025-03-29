// importing mongoose to write schema and connect
const mongoose = require ("mongoose");


// creation of new schema for products 
const productSchema = new mongoose.Schema({

// all key  and datastructure of values 
    name: {
        type : String,
        // if it is must so we use require 
        required : true,
    },
    price : {
        type: Number,
        required : [true , "price must be provided"],
    },
    featured : {
        type : Boolean,
        //  default will set the value to this if user won't define it 
        default: false,
    },
    rating :{
        type: Number,
        default :4.9,

    },
    createdAt: {
        type : Date,

        // date now create particular date and time when data is created by default 
        default : Date.now()
    },
    company :{
        type:String,
        enum :{
            // to select value from this particulars 
            values :["apple","samsaung", "dell","mi"],
            // will display a message if user value doesn't belong to among these
            message: `{value} is not supported`
        }
    }
})

// exporting schema using first letter capittal is compulsary and 
// it must be singular will show plural automatically in mongo 
module.exports = mongoose.model("Product",productSchema);

