import { useEffect, useState } from "react";
import { toast } from "react-hot-toast";
import { useSearchParams } from "react-router-dom";
import ArticlesList from "../../components/ArticlesList/ArticlesList";
import CoursesHeader from "../../components/CoursesHeader/CoursesHeader";
import ProductsList from "../../components/ProductsList/ProductsList";
import Wrapper from "../../components/Wrapper/Wrapper";
import useFetchProducts from "../../hooks/useFetchPoducts";
import Layout from "../../Layout/Layout";
import { search } from "../../services/searchServices";

const SearchPage = () => {
  const allProducts = useFetchProducts();
  const [searchParams, setSearchParams] = useSearchParams();
  const [searchProduct, setSearchProduct] = useState([]);
  const [searchArticle, setSearchArticle] = useState([]);
  const result = searchParams.get("result") || "";
  useEffect(() => {
    const SearchDataAndShow = async () => {
      try {
        const { data } = await search(result);
        setSearchProduct(data.allResultCourses);
        setSearchArticle(data.allResultArticles);
      } catch (error) {
        toast.error(error);
      }
    };
    SearchDataAndShow();
  }, []);
  return (
    <Layout data={allProducts}>
      <Wrapper>
        <CoursesHeader title="نتیجه جستجو محصولات" />
        <ProductsList data={searchProduct} />
        <CoursesHeader title="نتیجه جستجو مقالات" />
        <ArticlesList data={searchArticle} />
      </Wrapper>
    </Layout>
  );
};

export default SearchPage;
