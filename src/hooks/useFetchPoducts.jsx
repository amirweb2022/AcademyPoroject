import { useEffect, useState } from "react";
import { getAllProduct } from "../services/getAllProductService";
const useFetchProducts = () => {
  const [allProducts, setAllProducts] = useState([]);
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
  return allProducts;
};
export default useFetchProducts;