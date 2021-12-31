import mongoose from "mongoose";

const connectDB = (handler) => async (req, res) => {
  if (mongoose.connections[0].readyState) {
    // Use current db connection
    return handler(req, res);
  }
  // Use new db connection
  await mongoose.connect(
    "mongodb+srv://portrolio-user:QiwpR5rvboh0Hw7s@cluster0.qmfoa.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"
  );
  return handler(req, res);
};

export default connectDB;
