import { useParams } from "react-router-dom";
import { useAuth } from "../../Providers/Auth/AuthProvider";
import { getOneCourse } from "../../services/getOneCourseServices";
import Layout from "../../Layout/Layout";
import useFetchProducts from "../../hooks/useFetchPoducts";
const CoursePage = () => {
  const allProductasds = useFetchProducts();
  const { shortName } = useParams();
  const token = useAuth();
  return <Layout data={allProductasds}>ads</Layout>;
};

export default CoursePage;