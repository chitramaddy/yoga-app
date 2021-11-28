import Head from "next/head";
import Header from "../components/Header";
import Footer from "../components/Footer";
import getNews from "../utils/HeadLines";

const Home = ({ topHeadlines }) => {
  return (
    <>
      <Head>
        <title>Trending News</title>
      </Head>
      <div className="flex-wrapper">
        <Header />
        {topHeadlines.articles.map((article) => (
          <pre key={`${article.title}`}>{JSON.stringify(article, null, 2)}</pre>
        ))}

        <Footer />
      </div>
    </>
  );
};

export default Home;

export const getStaticProps = async () => {
  const topHeadlines = await getNews();
  return {
    props: {
      topHeadlines,
    },
  };
};
