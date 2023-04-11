import { useEffect, useState } from "react";
import TopBar from "../components/TopBar/TopBar";
import Layout from "../Layout/Layout";
import { getTopBarMenu } from "../services/getTopBarMenuService";
import React from "react";
import Banner from "../components/Banner/Banner";

const Home = () => {
  const [topBar, setTopBar] = useState([]);
  useEffect(() => {
    const renderTopBarMenu = async () => {
      try {
        const { data } = await getTopBarMenu();
        const topBarMenuData = data;
        const shuffledArray = topBarMenuData.sort(
          (a, b) => 0.5 - Math.random()
        );
        setTopBar(shuffledArray.slice(0, 4));
      } catch (error) {
        console.log(error);
      }
    };
    renderTopBarMenu();
  }, []);
  return (
    <>
      <TopBar topBarMenuData={topBar} />
      <Layout>
        <Banner />
      </Layout>
    </>
  );
};

export default React.memo(Home);