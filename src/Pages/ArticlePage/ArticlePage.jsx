import Layout from "../../Layout/Layout";
import useFetchProducts from "../../hooks/useFetchPoducts";
import Wrapper from "../../components/Wrapper/Wrapper";
import CoursesHeader from "../../components/CoursesHeader/CoursesHeader";
import ArticlesList from "../../components/ArticlesList/ArticlesList";
import { getAllArticles } from "../../services/getAllArticlesService";
import { useEffect, useState } from "react";
const ArticlePage = () => {
  const allProducts = useFetchProducts();
  const [articles, setArticles] = useState([]);
  useEffect(() => {
    const getAllAndShowArticles = async () => {
      try {
        const { data } = await getAllArticles();
        setArticles(data);
      } catch (error) {
        console.log(error);
      }
    };
    getAllAndShowArticles();
  }, []);
  return (
    <Layout data={allProducts}>
      <Wrapper>
        <CoursesHeader title="مقاله ها" />
        <ArticlesList data={articles} />
      </Wrapper>
    </Layout>
  );
};

export default ArticlePage;