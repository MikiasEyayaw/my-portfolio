import mongoose from "mongoose";
const connectDB = async () => {
    try {
      await mongoose.connect('mongodb://localhost:27017/myPortfolio');
      console.log("MongoDB connected");
    } catch (err) {
      console.error(err);
      process.exit(1); // Exit on failure
    }
  };
  export default connectDB;