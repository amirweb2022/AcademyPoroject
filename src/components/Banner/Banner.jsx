import SearchGlobal from "../SearchGlobal/SearchGlobal";
import svgTimer from "../../assets/svg/timer-start-svgrepo-com.svg";
import svgBook from "../../assets/svg/book-library-ui-svgrepo-com.svg";
import svgStudent from "../../assets/svg/graduate-student-svgrepo-com.svg";
import React, { useEffect, useState } from "react";
import "./banner.css";
import { getIndexInfos } from "../../services/getIndexInfosService";
const Banner = () => {
  const [infos, setInfos] = useState([]);
  useEffect(() => {
    const renderIndexInfos = async () => {
      try {
        const { data } = await getIndexInfos();
        setInfos(data);
      } catch (error) {
        console.log(error);
      }
    };
    renderIndexInfos();
  }, []);
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
      <div className="w-full py-3 mt-5">
        <div className="w-full flex flex-col md:flex-row justify-center items-center gap-5">
          <div className="flex flex-col justify-center items-center gap-y-2 w-full md:w-3/12">
            <div className="w-[30%]">
              <img src={svgStudent} className="w-full h-auto" />
            </div>
            <div className="w-full">
              <span className="text-white font-bold text-xl">{infos.usersCount}</span>
            </div>
            <div className="w-full">
              <span className="text-white text-xl">
                کاربر توی فرانت هوکس ثبت نام کردن
              </span>
            </div>
          </div>
          <div className="flex flex-col justify-center items-center gap-y-2 w-full md:w-3/12">
            <div className="w-[30%]">
              <img src={svgBook} className="w-full h-auto" />
            </div>
            <div className="w-full">
              <span className="text-white font-bold text-xl">{infos.coursesCount}</span>
            </div>
            <div className="w-full">
              <span className="text-white text-xl">دوره آموزشی داریم</span>
            </div>
          </div>
          <div className="flex flex-col justify-center items-center gap-y-2 w-full md:w-3/12">
            <div className="w-[30%]">
              <img src={svgTimer} className="w-full h-auto" />
            </div>
            <div className="w-full">
              <span className="text-white font-bold text-xl">{infos.totalTime}</span>
            </div>
            <div className="w-full">
              <span className="text-white text-xl">
                دقیقه آموزش تولید کردیم
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default React.memo(Banner);