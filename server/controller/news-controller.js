import News from "../model/news.js";

export const getNews = async (req, res, next) => {
  try {
    let data = await News.find({});
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
