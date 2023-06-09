const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    const connection = await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log(
      "MongoDB is connected succesfully " + connection.connection.host
    );
  } catch (err) {
    console.log(`Error : ${err.message}`);
    process.exit();
  }
};

module.exports = connectDB;
