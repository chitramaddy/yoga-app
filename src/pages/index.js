import Head from "next/head";
import Header from "../components/Header";
import Footer from "../components/Footer";
import ArticleCard from "../components/ArticleCard";
import QuoteCard from "../components/QuoteCard";
import getNews from "../utils/HeadLines";
import { getPoses } from "../utils/poses";
import { getQuotes } from "../utils/quotes";
import NewsletterBanner from "../components/newsletterBanner";

const Home = ({ topHeadlines, poses, quotes }) => {
  return (
    <>
      <Head>
        <title>Trending News</title>
      </Head>
      <div className="flex-wrapper">
        <Header />
        <ArticleCard poses={poses} />
        <NewsletterBanner />
        <QuoteCard quotes={quotes} />
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
  return {
    props: {
      topHeadlines,
      poses,
      quotes,
    },
  };
};
