import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

const { MONGO_DB } = process.env;

const connectDatabase = () => {
  mongoose.connect(
    MONGO_DB,
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    },
    (error) => {
      if (!error) {
        console.log("Conectado a MongoDB.");
      } else {
        console.log(error);
      }
    }
  );
};

export default connectDatabase;
