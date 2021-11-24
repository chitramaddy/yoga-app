import Head from "next/head";
import Header from "../components/Header";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <>
      <Head>
        <title>UP Skill</title>
      </Head>
      <div className="flex-wrapper">
        <Header />
        <h1>This is home page</h1>
        <Footer />
      </div>
    </>
  );
};

export default Home;
