const getNews = async () => {
  return await fetch(
    "https://newsapi.org/v2/top-headlines?country=us&apiKey=c79ad6076dab490fb894548e2ed5807c"
  )
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      console.log(data);
      return data;
    });
};

export default getNews;
