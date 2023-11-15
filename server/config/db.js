const mongoose = require("mongoose");
require("dotenv").config();
mongoose.set("strictQuery", false);

const database = async () => {
  try {
    const connect = await mongoose.connect(process.env.MONGODB_URL);
    console.log("Connect database success");
  } catch (error) {
    console.log(error);
  }
};
module.exports = database;
