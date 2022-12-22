import { data } from "./constants/data.js";
import News from "./model/news.js";

const DefaultData = async () => {
  try {
    await News.insertMany(data);
    console.log("Data inserted successfully");
  } catch (error) {
    console.log("Error: ", error.message);
  }
};

export default DefaultData;
