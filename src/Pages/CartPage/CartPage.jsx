import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import CartPoductList from "../../components/CartProductList/CartProductList";
import Wrapper from "../../components/Wrapper/Wrapper";
import useFetchProducts from "../../hooks/useFetchPoducts";
import Layout from "../../Layout/Layout";
import { useAuth } from "../../Providers/Auth/AuthProvider";
import { useCart } from "../../Providers/Cart/CartProdvicer";
import { useCodeOffs } from "../../services/useCodeOffs";
import { toast } from "react-hot-toast";
const CatPage = () => {
  const { cart, total } = useCart();
  const [codeOffs, setCodeOffs] = useState("");
  const allProducts = useFetchProducts();
  return (
    <Layout data={allProducts}>
      <Wrapper>
        {cart.length ? (
          <div className="full">
            <div className="w-full flex justify-start items-start mb-4">
              <div className="w-full md:w-1/4 flex justify-center">
                <h1 className="text-2xl font-bold text-slate-700">سبد خرید</h1>
              </div>
            </div>
            <div className="w-full px-3 lg:px-0 gap-y-3 lg:gap-y-0 flex flex-col md:flex-row justify-center items-center md:items-start gap-x-3">
              <div className="w-full lg:w-3/4 flex justify-center items-center flex-col gap-y-3">
                <CartPoductList data={cart} code={codeOffs} />
              </div>
              <div className="w-full lg:w-1/4 bg-white rounded-xl px-4 py-3 flex justify-center items-center flex-col">
                <CartSummary
                  total={total}
                  cart={cart}
                  setCodeOffs={setCodeOffs}
                />
              </div>
            </div>
          </div>
        ) : (
          <div className="h-full py-7 px-3">
            <div>
              <Link to="/" className="text-blue-500 text-lg">
                رفتن به فروشگاه
              </Link>
            </div>
            <div className="mt-2">
              <span className="text-lg text-slate-600">سبد خرید خالی است!</span>
            </div>
          </div>
        )}
      </Wrapper>
    </Layout>
  );
};

export default CatPage;
export const CartSummary = ({ total, cart, setCodeOffs }) => {
  const [offsCourse, setOffsCourse] = useState({ course: "", codeOffs: "" });
  const [code, setCode] = useState("");
  const token = useAuth();
  const changeHandler = (e) => {
    setCode(e.target.value);
  };
  useEffect(() => {
    const id = cart.slice(0)[0].id;
    setOffsCourse({ ...offsCourse, course: id, codeOffs: code });
  }, [code]);
  const clickHandler = async () => {
    const dataCourse = {
      course: offsCourse.course,
    };
    try {
      const { data } = await useCodeOffs(
        token,
        dataCourse,
        offsCourse.codeOffs
      );
      setCodeOffs(data.percent);
      toast.success("تخفیف اعمال شد!");
    } catch (error) {
      if (error.response.status === 409) {
        toast.error("تعداد استفاده از کد تخفیف تمام شده است!");
      }
    }
  };
  return (
    <>
      <div className="w-full flex gap-x-2 border-b-[1px] py-2">
        <span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="none"
            className="h-5 w-5"
          >
            <path
              fill="currentColor"
              d="M18.333 5v2.017c0 1.316-.833 2.15-2.15 2.15h-2.85V3.342c0-.925.759-1.675 1.684-1.675a3.35 3.35 0 0 1 2.341.975c.6.608.975 1.441.975 2.358Z"
            ></path>
            <path
              fill="currentColor"
              d="M1.667 5.833V17.5A.83.83 0 0 0 3 18.167L4.425 17.1a.84.84 0 0 1 1.1.083l1.383 1.392a.84.84 0 0 0 1.184 0l1.4-1.4a.826.826 0 0 1 1.083-.075L12 18.167a.835.835 0 0 0 1.333-.667V3.333c0-.916.75-1.666 1.667-1.666H5C2.5 1.667 1.667 3.158 1.667 5v.833Z"
              opacity="0.4"
            ></path>
            <path
              fill="currentColor"
              d="M10 8.125H5a.63.63 0 0 1-.625-.625A.63.63 0 0 1 5 6.875h5a.63.63 0 0 1 .625.625.63.63 0 0 1-.625.625Zm-.625 3.333h-3.75A.63.63 0 0 1 5 10.833a.63.63 0 0 1 .625-.625h3.75a.63.63 0 0 1 .625.625.63.63 0 0 1-.625.625Z"
            ></path>
          </svg>
        </span>
        <span className="font-bold text-slate-600">اطلاعات پرداخت</span>
      </div>
      <div className="w-full flex flex-col gap-2 border-b-[1px] py-3">
        <label htmlFor="offer" className="text-sm text-slate-500">
          کد تخفیف
        </label>
        <div className="bg-gray-300/50 rounded-2xl w-full">
          <input
            type="text"
            placeholder="کد تخفیف را وارد کنید"
            className="bg-transparent h-full p-3 outline-none text-slate-600 text-sm transition-all duration-150"
            id="offer"
            onChange={changeHandler}
            value={code}
          />
          <button
            className="bg-blue-500 text-white rounded-xl px-3 py-2 text-xs"
            type="submit"
            onClick={clickHandler}
          >
            اعمال کد
          </button>
        </div>
      </div>
      <div className="w-full border-b-[1px] py-3">
        <div className="w-full flex justify-between items-center px-2">
          <span className="font-bold text-slate-700">جمع کل</span>
          <span className="text-slate-500 font-bold">
            {total !== 0 ? total.toLocaleString("fa-IR") : "رایگان!"}
          </span>
        </div>
      </div>
      <div className="w-full py-3">
        <div className="w-full flex justify-between items-center px-2">
          <span className="font-bold text-slate-700">مبلغ قابل پرداخت</span>
          <div className="flex gap-x-2 justify-center items-center">
            <span className="text-blue-500 font-bold text-xl">
              {total !== 0 ? total.toLocaleString("fa-IR") : "رایگان!"}
            </span>
            <span className="text-xs text-slate-400">
              {total !== 0 ? "تومان" : ""}
            </span>
          </div>
        </div>
        <div className="w-full">
          <button className="w-full bg-blue-500 text-white hover:opacity-90 mt-3 py-3 rounded-2xl">
            <Link to="/login/?redirect=checkout">ادامه پرداخت</Link>
          </button>
        </div>
      </div>
    </>
  );
};
