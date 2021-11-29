const API_KEY = process.env.NEWS_API_KEY;

const getNews = async () => {
  return await fetch(
    `https://newsapi.org/v2/top-headlines?country=us&pageSize=9&apiKey=${API_KEY}`
  )
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      return data;
    });
};

export default getNews;
