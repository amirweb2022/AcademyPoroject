import TopBar from "../../components/TopBar/TopBar";
import Layout from "../../Layout/Layout";
import React, { useEffect, useState } from "react";
import Banner from "../../components/Banner/Banner";
import Wrapper from "../../components/Wrapper/Wrapper";
import CoursesHeader from "../../components/CoursesHeader/CoursesHeader";
import { Link } from "react-router-dom";
import { getAllProduct } from "../../services/getAllProductService";
import { getPopularProduct } from "../../services/getPopularProductService";
import { getPersellProduct } from "../../services/getPersellProductServises";
import { getAllArticles } from "../../services/getAllArticlesService";
import ProductsList from "../../components/ProductsList/ProductsList";
import ServicesSite from "../../components/ServicesSite/ServicesSite";
import ProductSlider from "../../components/ProductSlider/ProductSlider";
import ArticlesList from "../../components/ArticlesList/ArticlesList";
import useFetchProducts from "../../hooks/useFetchPoducts";
const HomePage = () => {
  const allProducts = useFetchProducts();
  const [popularProduct, setPopularProduct] = useState([]);
  const [persellProduct, setPersellProduct] = useState([]);
  const [articles, setArticles] = useState([]);
  useEffect(() => {
    const getAndShowPopulaCourses = async () => {
      try {
        const { data } = await getPopularProduct();
        setPopularProduct(data);
      } catch (error) {
        console.log(error);
      }
    };
    const getAndShowPersellProduct = async () => {
      try {
        const { data } = await getPersellProduct();
        setPersellProduct(data);
      } catch (error) {
        console.log(error);
      }
    };
    const getAndShowArticles = async () => {
      try {
        const { data } = await getAllArticles();
        setArticles(data.slice(0, 3));
      } catch (error) {
        console.log(error);
      }
    };
    getAndShowPopulaCourses();
    getAndShowPersellProduct();
    getAndShowArticles();
  }, []);
  return (
    <>
      <TopBar />
      <Layout data={allProducts}>
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
          <ProductSlider arr={popularProduct} />
          <CoursesHeader title="دوره های درحال پیش فروش" />
          <ProductSlider arr={persellProduct} />
          <CoursesHeader title="جدید ترین مقاله ها">
            <div>
              <Link
                to="/articles"
                className="bg-green-500 font-bold text-sm shadow-md shadow-green-500 rounded-md p-2 md:px-3 md:py-2 text-white"
              >
                تمامیه مقاله ها
              </Link>
            </div>
          </CoursesHeader>
          <ArticlesList data={articles} />
        </Wrapper>
      </Layout>
    </>
  );
};
export default React.memo(HomePage);
