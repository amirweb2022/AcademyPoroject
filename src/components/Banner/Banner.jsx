import SearchGlobal from "../SearchGlobal/SearchGlobal";
import "./banner.css";
const Banner = () => {
  return (
    <div className="flex flex-col justify-cenetr py-10 items-center text-center banner-content">
      <h1 className="text-3xl md:text-4xl text-white font-bold">
        برنامه نویسی را سریع و آسان یادبگیرید
      </h1>
      <p className="text-sm md:text-lg mt-5 text-slate-300">
        ما کنارتون هستیم تا عمیق یاد بگیرید، <br /> و با بهترین مسیر ممکن به
        مقصدتون برسید.
      </p>
      <SearchGlobal />
    </div>
  );
};

export default Banner;