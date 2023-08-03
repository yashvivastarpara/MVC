const mongoose = require("mongoose");
require("dotenv").config();

let url = process.env.DB_URL;
const connection = async () => {
    try {
        await mongoose.connect(url);
        console.log("Connected");
    } catch (error) {
        console.log(error.message);
    }
 
};
module.exports =connection;