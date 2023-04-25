import { Link } from "react-router-dom";

const Product = ({ course }) => {
  return (
    <div className="w-full mb-3 md:mb-4 ml-2 md:w-1/2 lg:w-1/4 h-full p-2 bg-white flex justify-center items-center flex-col rounded-2xl my-4 shadow-lg">
      <Link to={`/singleProduct/${course.shortName}`} className="w-full">
        <div className="w-full h-full flex justify-center items-center -mt-7 rounded-2xl overflow-hidden shadow-lg shadow-slate-400 relative">
          <img
            src={`http://localhost:4000/courses/covers/${course.cover}`}
            alt={course.name}
            className="w-full h-auto"
          />
          <div className="absolute left-3 top-2 flex justify-center items-center bg-white rounded-md px-2 py-1 text-sm text-slate-700">
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width={1.5}
                stroke="currentColor"
                className="w-5 h-5"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M15 19.128a9.38 9.38 0 0 0 2.625.372 9.337 9.337 0 0 0 4.121-.952 4.125 4.125 0 0 0-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 0 1 8.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0 1 11.964-3.07M12 6.375a3.375 3.375 0 1 1-6.75 0 3.375 3.375 0 0 1 6.75 0zm8.25 2.25a2.625 2.625 0 1 1-5.25 0 2.625 2.625 0 0 1 5.25 0z"
                />
              </svg>
            </span>
            <span className="text-sm mr-1 font-bold text-slate-800">
              {course.registers}
            </span>
          </div>
        </div>
      </Link>
      <div className="flex justify-start items-start w-full py-3">
        <Link to={`/singleProduct/${course.shortName}`}>
          <h2 className="text-lg font-bold text-slate-700 hover:text-blue-600">
            {course.name}
          </h2>
        </Link>
      </div>
      <div className="flex justify-between items-center w-full">
        <span className="text-xs text-gray-500">مدرس : {course.creator}</span>
        <span className="text-sm text-green-400">
          {course.status === "start" ? "در حال ظبط" : "تکمیل شده"}
        </span>
      </div>
      <div className="flex justify-start items-start w-full py-2">
        <Link to={`/singleProduct/${course.shortName}`}>
          <h2 className="text-sm font-bold text-blue-600">
            مشاهده اطلاعات دوره
          </h2>
        </Link>
      </div>
      <div className="flex justify-between items-center w-full py-3 border-t-2 border-gray-100 mt-2">
        <div className="w-2/5">
          <button className="text-white w-full font-bold transtion-all duration-150 bg-blue-500 hover:bg-blue-400 hover:shadow-blue-300 rounded-xl shadow-lg shadow-blue-300 py-3">
            ثبت نام دوره
          </button>
        </div>
        <div className="w-3/5 text-left mt-3">
          <span className="text-slate-800 font-bold text-xl">
            {course.price === 0
              ? "رایگان!"
              : course.price.toLocaleString("fa-IR")}
          </span>
          <span className="text-slate-500 font-bold text-xs mr-2">
            {course.price === 0 ? "" : "تومان"}
          </span>
        </div>
      </div>
    </div>
  );
};

export default Product;
