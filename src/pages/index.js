import Head from "next/head";
import Header from "../components/Header";
import Footer from "../components/Footer";
import ArticleCard from "../components/ArticleCard";
import getNews from "../utils/HeadLines";
import { getPoses } from "../utils/poses";
import { getQuotes } from "../utils/quotes";

const Home = ({ topHeadlines, poses, quotes }) => {
  return (
    <>
      <Head>
        <title>Trending News</title>
      </Head>
      <div className="flex-wrapper">
        <Header />
        {/* {topHeadlines.articles.map((article) => ( 
         <pre key={`${article.title}`}>{JSON.stringify(article, null, 2)}</pre>))}*/}
        <pre>{JSON.stringify(poses, null, 2)}</pre>
        {/* <ArticleCard articles={topHeadlines.articles} /> */}
        {/* <ArticleCard quotes={quotes} /> */}

        <pre>{JSON.stringify(quotes, null, 2)}</pre>

        <Footer />
      </div>
    </>
  );
};

export default Home;

export const getStaticProps = async () => {
  const topHeadlines = await getNews();
  const poses = await getPoses();
  const quotes = await getQuotes();
  console.log(quotes);
  return {
    props: {
      topHeadlines,
      poses,
      quotes,
    },
  };
};
