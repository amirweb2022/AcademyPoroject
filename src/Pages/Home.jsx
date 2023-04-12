import TopBar from "../components/TopBar/TopBar";
import Layout from "../Layout/Layout";
import React from "react";
import Banner from "../components/Banner/Banner";

const Home = () => {
  return (
    <>
      <TopBar />
      <Layout>
        <Banner />
      </Layout>
    </>
  );
};

export default React.memo(Home);