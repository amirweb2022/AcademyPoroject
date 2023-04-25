import Product from "./Product/Product";
const ProductsList = ({ data }) => {
  return (
    <div className="mt-7 px-2 flex justify-center flex-col md:flex-wrap md:flex-row md:justify-center lg:justify-between items-center w-full">
      {data?.map((item) => {
        return <Product course={item} key={item.id} />;
      })}
    </div>
  );
};

export default ProductsList;