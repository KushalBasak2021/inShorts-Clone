import mongoose from "mongoose";

const Connection = async (username, password) => {
  const URL = `mongodb+srv://${username}:${password}@cluster0.o48hzxo.mongodb.net/inShortsDB?retryWrites=true&w=majority`;

  try {
    await mongoose.connect(URL, { useNewUrlParser: true });
    console.log("DB connected");
  } catch (error) {
    console.log("Error while connecting with the database", error);
  }
};

export default Connection;
