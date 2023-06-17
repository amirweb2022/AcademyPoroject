import { Link } from "react-router-dom";

const ProfileCourse = ({data}) => {
  return (
    <div className="w-full flex flex-col gap-x-3 justify-center lg:flex-row lg:justify-start items-start bg-white rounded-lg overflow-hidden">
      <div className="w-full lg:w-1/4">
        <img
          src={`http://localhost:4000/courses/covers/${data.cover}`}
          alt={data.name}
        />
      </div>
      <div className="w-full h-full lg:w-3/4">
        <div className="h-full flex flex-col justify-start items-start py-3 gap-y-2 px-2 lg:px-0">
          <div>
            {" "}
            <Link to={`/course/${data.shortName}`}>
              <h2 className="text-2xl font-bold text-slate-700 hover:text-blue-600">
                {data.name}
              </h2>
            </Link>
          </div>
          <div className="text-xl">
            <span className="text-slate-500">قیمت :</span>
            <span className="text-blue-500 font-bold mr-1">
              {data.price === 0 ? "رایگان" : data.price.toLocaleString("fa-IR")}
            </span>
          </div>
          <div className="text-xl">
            <span className="text-slate-500">وضعیت دوره :</span>
            <span className="text-green-500 font-bold mr-1">
              {data.isComplete === 0 ? "درحال ظبط" : "تکمیل شده"}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileCourse;