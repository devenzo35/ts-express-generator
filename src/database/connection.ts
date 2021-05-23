import mongoose from "mongoose";

const dbConnection = async () => {
  try {
    await mongoose.connect(`${process.env.MONGODB_URI}`, {
      useUnifiedTopology: true,
      useNewUrlParser: true,
      useCreateIndex: true,
    });

    console.log("Successfully connected to the database");
  } catch (err) {
    console.log(err);
    console.log("Failed to connect to database");
  }
};

export default dbConnection;
