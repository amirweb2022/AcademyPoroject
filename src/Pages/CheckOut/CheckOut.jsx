import { useCart } from "../../Providers/Cart/CartProdvicer";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-hot-toast";
import { useEffect, useState } from "react";
import { registerToCourse } from "../../services/registerToCourse";
import { useAuth } from "../../Providers/Auth/AuthProvider";
const CheckOut = () => {
  const { cart, total } = useCart();
  const [regCourse, setRegCourse] = useState({ id: "", price: "" });
  const token = useAuth();
  useEffect(() => {
    setRegCourse({ id: cart.slice(0)[0].id, price: cart.slice(0)[0].price });
  }, []);
  const navigate = useNavigate();
  const clickHandler = async () => {
    const dataCourse = {
      price: regCourse.price,
    };
    try {
      await registerToCourse(token, regCourse.id, dataCourse);
      toast.success("پرداخت با موفقیت انجام شد");
      navigate("/");
      window.location.reload();
    } catch (error) {
      if (error.response.status === 409) {
        toast.error("شما دانشجوی دوره هستید!");
      }
    }
  };

  if (!cart.length) {
    navigate("/");
  }
  return (
    <div className="w-full h-screen flex justify-center items-center px-3 lg:px-0">
      <div className="bg-white shadow-md rounded-lg w-full lg:w-3/4 p-4 flex justify-center items-center flex-col">
        <div className="w-full text-right border-b-[1px] border-gray-300 py-2">
          <h1 className="text-xl font-bold text-slate-700">سفارش های شما</h1>
        </div>
        {cart.length
          ? cart.map((c, i) => {
              return (
                <div className="w-full my-2" key={i}>
                  <p className="font-bold text-lg text-slate-600">{c.name}</p>
                </div>
              );
            })
          : ""}
        {total ? (
          <div className="w-full flex justify-between items-center my-3">
            <div className="w-full">
              <p className="text-slate-800 font-bold text-lg">
                مبلغ قابل پرداخت :{" "}
              </p>
            </div>
            <div className="flex items-center">
              <span className="text-sm text-slate-500 ml-2">تومان</span>
              <p className="text-blue-500 font-bold text-2xl">
                {total.toLocaleString("fa-IR")}
              </p>
            </div>
          </div>
        ) : (
          ""
        )}
        <div className="w-full">
          <button
            className="w-full bg-blue-500 text-white py-3 rounded-lg"
            onClick={clickHandler}
          >
            <Link>پرداخت</Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default CheckOut;
