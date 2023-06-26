import { Link } from "react-router-dom";
import Wrapper from "../../components/Wrapper/Wrapper";
import useFetchProducts from "../../hooks/useFetchPoducts";
import Layout from "../../Layout/Layout";

const NotFoundPage = () => {
  const allProducts = useFetchProducts();
  return (
    <Layout data={allProducts}>
      <Wrapper>
        <div className="w-full flex justify-center items-center py-14 flex-col gap-y-3 px-3 md:px-0 text-center">
            <h3 className="text-red-400 font-bold text-xl">صفحه ای که به دنبال آن بودید پیدا نشد !</h3>
            <Link to='/' className="text-blue-500 font-bold text-lg">بریم به صفحه اصلی ؟</Link>
        </div>
      </Wrapper>
    </Layout>
  );
};

export default NotFoundPage;