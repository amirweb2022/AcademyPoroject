import { Link } from "react-router-dom";
import { useCartActions } from "../../../Providers/Cart/CartProdvicer";
const CartProduct = ({ cart }) => {
  const dispatch = useCartActions();
  const removeProduct = (item) => {
    dispatch({ type: "REMOVE_PRODUCT", payload: item });
  };
  return (
    <div className="bg-white rounded-xl w-full lg:w-3/4 flex flex-col lg:flex-row justify-center lg:justify-between items-center px-5 py-7">
      <div className="flex justify-center items-center gap-x-3">
        <div className="w-36 h-auto rounded-lg overflow-hidden">
          <img
            src={`http://localhost:4000/courses/covers/${cart.image}`}
            alt={cart.name}
          />
        </div>
        <div className="flex justify-center items-start flex-col gap-y-2 w-full">
          <Link
            to={`/course/${cart.shortName}`}
            className="font-bold text-xs md:text-xl text-slate-700 hover:text-blue-500"
          >
            {cart.name}
          </Link>
          <span className="text-xs text-slate-500">
            مدرس دوره : {cart.creator}
          </span>
        </div>
      </div>
      <div className="flex justify-between items-center px-3 w-full lg:w-auto mt-3 lg:mt-0 flex-row-reverse lg:flex-row">
        <div className="flex gap-x-2 ml-4 justify-center items-center">
          <span className="text-blue-600 font-bold text-3xl">
            {cart.price === 0 ? "رایگان!" : cart.price.toLocaleString("fa-IR")}
          </span>
          <span className="text-slate-500 font-bold text-xs">
            {cart.price === 0 ? "" : "تومان"}
          </span>
        </div>
        <div>
          <button
            className="text-red-500 border-[1px] border-gray-200 rounded-lg p-1"
            onClick={() => removeProduct(cart)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width={1.5}
              stroke="currentColor"
              className="w-4 h-4"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartProduct;