const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    await mongoose.connect("mongodb+srv://mern:mern@cluster0.prv2x.mongodb.net/myFirstDatabase?retryWrites=true&w=majority",
     {
      useNewUrlParser: true,
      useUnifiedTopology: true,
   
    });

    console.log("MongoDB Connected....");
  } catch (error) {
    console.error(error.message);
    // Exit process with failure
    process.exit(1);
  }
};

module.exports = connectDB;