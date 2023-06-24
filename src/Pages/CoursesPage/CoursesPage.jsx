import { useEffect, useState } from "react";
import Filter from "../../components/Filter/Filter";
import ProductsList from "../../components/ProductsList/ProductsList";
import Wrapper from "../../components/Wrapper/Wrapper";
import useFetchProducts from "../../hooks/useFetchPoducts";
import Layout from "../../Layout/Layout";
import { getAllProduct } from "../../services/getAllProductService";
const CoursesPage = () => {
  const data = useFetchProducts();
  const [allProducts, setAllProducts] = useState([]);
  const [productData, setProductsData] = useState([]);
  const [selectedOptionType, setSelectedOptionType] = useState("");
  const [selectedOptionSort, setSelectedOptionSort] = useState("");
  const [searchedValue, setSearchedValue] = useState("");
  const [resultsFound, setResultsFound] = useState(null);
  const typeHandler = (e) => {
    setSelectedOptionType(e);
  };
  const sortHandler = (e) => {
    setSelectedOptionSort(e);
  };
  const searchHandler = (e) => {
    setSearchedValue(e.target.value);
  };
  useEffect(() => {
    applyFilters();
  }, [selectedOptionSort, selectedOptionType, searchedValue]);
  useEffect(() => {
    const getAllProducts = async () => {
      try {
        const { data } = await getAllProduct();
        setAllProducts(data);
        setSelectedOptionSort("das");
      } catch (error) {
        console.log(error);
      }
    };
    getAllProducts();
  }, []);
  const applyFilters = () => {
    let updatedList = allProducts;
    // filter product
    if (selectedOptionType.value === "Not completed") {
      updatedList = updatedList.filter((p) => p.status === "start");
    } else if (selectedOptionType.value === "completed") {
      updatedList = updatedList.filter((p) => p.status === "finish");
    } else if (selectedOptionType.value === "free") {
      updatedList = updatedList.filter((p) => p.price === 0);
    } else if (selectedOptionType.value === "money") {
      updatedList = updatedList.filter((p) => p.price !== 0);
    }
    // sort product
    if (selectedOptionSort.value === "popular") {
      updatedList = [...updatedList].sort(
        (a, b) => b.courseAverageScore - a.courseAverageScore
      );
    } else if (selectedOptionSort.value === "theNewest") {
      updatedList = [...updatedList].sort(
        (a, b) => new Date(a.createdAt) - new Date(b.createdAt)
      );
    } else if (selectedOptionSort.value === "TheOldest") {
      updatedList = [...updatedList].sort(
        (a, b) => new Date(b.createdAt) - new Date(a.createdAt)
      );
    }
    // Search Filter
    if (searchedValue) {
      updatedList = updatedList.filter(
        (item) =>
          item.name.toLowerCase().search(searchedValue.toLowerCase().trim()) !==
          -1
      );
    }
    setProductsData(updatedList);
    !updatedList.length ? setResultsFound(false) : setResultsFound(true);
  };
  return (
    <div>
      <Layout data={data}>
        <Wrapper>
          <div className="w-full text-center md:text-right">
            <h3 className="text-slate-700 font-bold text-xl lg:text-2xl">
              دوره های آموزشی برنامه نویسی
            </h3>
          </div>
          <div className="grid grid-cols-12 gap-4 w-full mt-4">
            <div className="col-span-12">
              <div className="w-full p-2 rounded-lg">
                <div className="w-full text-center md:text-right px-3">
                  <h4 className="text-lg text-blue-600 font-bold">فیلتر ها</h4>
                </div>
                <Filter
                  onChangeType={typeHandler}
                  onChangeSort={sortHandler}
                  selectedOptionType={selectedOptionType}
                  selectedOptionSort={selectedOptionSort}
                  onSearchHandler={searchHandler}
                  searchedValue={searchedValue}
                />
              </div>
            </div>
            <div className="col-span-12">
              {resultsFound ? (
                <ProductsList data={productData} />
              ) : (
                <h2 className="text-center dark:text-gray-400 font-bold text-slate-700 mt-5 text-xl">
                  محصولی یافت نشد:(
                </h2>
              )}
            </div>
          </div>
        </Wrapper>
      </Layout>
    </div>
  );
};

export default CoursesPage;
