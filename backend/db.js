const mongoose = require("mongoose");

const connectDB = async () => {
  mongoose.connect(process.env.MONGO_URI).then(() => {
    console.log("Connected to MongoDB successfully");
  });
};
module.exports = connectDB;