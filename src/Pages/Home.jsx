import TopBar from "../components/TopBar/TopBar";
import Layout from "../Layout/Layout";
import React, { useEffect, useState } from "react";
import Banner from "../components/Banner/Banner";
import Wrapper from "../components/Wrapper/Wrapper";
import CoursesHeader from "../components/CoursesHeader/CoursesHeader";
import { Link } from "react-router-dom";
import { getAllProduct } from "../services/getAllProductService";
import ProductsList from "../components/ProductsList/ProductsList";
import ServicesSite from "../components/ServicesSite/ServicesSite";
const Home = () => {
  const [allProducts, setAllProducts] = useState(null);
  useEffect(() => {
    const getAndShowCourses = async () => {
      try {
        const { data } = await getAllProduct();
        setAllProducts(data.slice(0, 6));
      } catch (error) {
        console.log(error);
      }
    };
    getAndShowCourses();
  }, []);
  return (
    <>
      <TopBar />
      <Layout>
        <Banner />
        <Wrapper>
          <CoursesHeader title="جدید ترین دوره ها">
            <div>
              <Link
                to="/courses"
                className="bg-green-500 font-bold text-sm shadow-md shadow-green-500 rounded-md p-2 md:px-3 md:py-2 text-white"
              >
                همه دوره ها
              </Link>
            </div>
          </CoursesHeader>
          <ProductsList data={allProducts} />
          <CoursesHeader title="ما چه کمکی می توانیم بکنیم ؟" />
          <div className="my-6 w-full flex justifu-center items-center flex-wrap">
            <ServicesSite />
          </div>
          <CoursesHeader title="محبوب ترین دوره ها" />
        </Wrapper>
      </Layout>
    </>
  );
};

export default React.memo(Home);