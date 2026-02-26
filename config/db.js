const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    await mongoose.connect(
      "mongodb+srv://admin:jida12345@cluster-1.pqkt4gy.mongodb.net/mybackend?retryWrites=true&w=majority",
    );
    console.log("MongoDB Connected ✅");
  } catch (error) {
    console.error("DB Connection Error:", error);
    process.exit(1);
  }
};

module.exports = connectDB;
