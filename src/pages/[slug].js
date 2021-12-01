import Head from "next/head";
import Image from "next/image";
import Header from "../components/Header";
import Footer from "../components/Footer";
import NewsletterBanner from "../components/NewsLetterBanner";
import SingleArticleBanner from "../components/PoseBanner";

import { getPoses, getPoseDetail, getPoseSlugs } from "../utils/poses";
import { defaultTypeResolver } from "graphql";
import SingleArticleContent from "../components/SinglePoseContent";

const Article = ({ pose, poses }) => {
  return (
    <div>
      <Head>{pose.poseName} - yogi</Head>
      <main>
        <Header poses={poses} />
        <SingleArticleBanner
          poseImage={pose.poseImage}
          poseName={pose.poseName}
        />
        <SingleArticleContent pose={pose} />
        <NewsletterBanner />
      </main>
      <Footer />
    </div>
  );
};

export const getStaticPaths = async () => {
  const paths = await getPoseSlugs();

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async ({ params }) => {
  const pose = await getPoseDetail(params.slug);
  const poses = await getPoses();

  return {
    props: {
      pose,
      poses,
    },
  };
};

export default Article;
