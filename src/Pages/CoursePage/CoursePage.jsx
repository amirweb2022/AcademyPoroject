import { useParams } from "react-router-dom";
import { useAuth } from "../../Providers/Auth/AuthProvider";
import { getOneCourse } from "../../services/getOneCourseServices";
import Layout from "../../Layout/Layout";
import useFetchProducts from "../../hooks/useFetchPoducts";
import Wrapper from "../../components/Wrapper/Wrapper";
import { useEffect, useState } from "react";
import moment from "moment-jalaali";
import saheb from "../../assets/images/saheb.webp";
import RegisterCommentForm from "../../components/RegiterCommentForm/RegistrCommentForm";
import SessionCourse from "../../components/SessionsCourse/SessionCourse";
const CoursePage = () => {
  const allProductasds = useFetchProducts();
  const [productData, setProductData] = useState([]);
  const { shortName } = useParams();
  const token = useAuth();
  useEffect(() => {
      const getOneCourseData = async () => {
        try {
          const { data } = await getOneCourse(token, shortName);
          setProductData(data);
        } catch (error) {
          console.log(error);
        }
      };
      getOneCourseData();
  }, [token]);
  return (
    <Layout data={allProductasds}>
      <Wrapper>
        <div className="w-full px-3 md:px-4">
          <div className="w-full bg-white shadow-sm rounded-3xl flex justify-center items-center gap-y-5 flex-col md:flex-row py-5 md:py-0 px-3">
            <div className="flex justify-center items-center gap-y-5 flex-col w-full md:w-1/2">
              <div className="w-full text-rigth">
                <h1 className="text-xl md:text-2xl font-bold text-slate-700 mb-3">
                  {productData.name}
                </h1>
                <p className="text-justify text-slate-500 text-sm">
                  {productData.description}
                </p>
              </div>
              <DetailCourse data={productData} />
            </div>
            <div className="w-full flex justify-center items-center overflow-hidden rounded-2xl md:w-1/2 md:my-3">
              <img
                src={`http://localhost:4000/courses/covers/${productData.cover}`}
                alt={productData.name}
                width="100%"
                height="auto"
              />
            </div>
          </div>
          <div className="w-full flex-col-reverse gap-y-3 md:gap-y-0 md:flex-row md:px-3 flex justify-start items-start gap-x-2 py-5">
            <div className="w-full md:w-3/4">
              <div className="w-full bg-white rounded-2xl shadow-sm px-3 py-5 mb-3">
                {productData.description}
              </div>
              <div className="w-full bg-white rounded-2xl shadow-sm px-3 py-5 mb-3">
                <div className="w-full text-right">
                  <h1 className="text-2xl font-bold text-blue-600">
                    جلسات دوره
                  </h1>
                </div>
                <SessionCourse productData={productData} shortName={shortName} token={token}/>
              </div>
              <div className="w-full bg-white rounded-2xl shadow-sm px-3 py-5">
                <div className="w-full text-right">
                  <h1 className="text-2xl font-bold text-blue-600">
                    ثبت دیدگاه
                  </h1>
                </div>
                <RegisterCommentForm shortname={shortName}/>
              </div>
            </div>
            <div className="w-full md:w-1/4 flex justify-center items-center flex-col gap-y-3">
              <div className="flex justify-center items-center flex-col py-3 px-2 md:p-5 bg-white shadow-sm rounded-2xl w-full">
                <span className="text-4xl text-slate-600 font-bold">
                  {productData.price
                    ? productData.price.toLocaleString("fa-IR")
                    : "رایگان!"}
                  <span className="text-sm text-slate-500 mr-2">
                    {productData.price === 0 ? "" : "تومان"}
                  </span>
                </span>
                <button className="w-full py-3 bg-blue-500 rounded-xl text-white text-lg font-bold mt-3 hover:opacity-90 trasnition-all duration-150">
                  ثبت نام در دوره
                </button>
              </div>
              <CreatorProfile />
              <RegisterComment shortName={shortName} />
            </div>
          </div>
        </div>
      </Wrapper>
    </Layout>
  );
};

export default CoursePage;
export const DetailCourse = ({ data }) => {
  return (
    <div className="w-full flex justify-center items-center flex-col gap-y-5">
      <div className="w-full flex justify-between md:justify-around items-center">
        <div className="flex justify-center items-center flex-col gap-y-3">
          <span className="text-white bg-blue-500 rounded-3xl p-3 shadow-md shadow-blue-400">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width={1.5}
              stroke="currentColor"
              className="w-8 h-8"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M7.5 8.25h9m-9 3H12m-9.75 1.51c0 1.6 1.123 2.994 2.707 3.227 1.129.166 2.27.293 3.423.379.35.026.67.21.865.501L12 21l2.755-4.133a1.14 1.14 0 0 1 .865-.501 48.172 48.172 0 0 0 3.423-.379c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0 0 12 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018z"
              />
            </svg>
          </span>
          <span className="text-slate-600 font-bold mr-1">
            {data.comments ? data.comments.length : ""} کامنت
          </span>
        </div>
        <div className="flex justify-center items-center flex-col gap-y-3">
          <span className="text-white bg-blue-500 rounded-3xl p-3 shadow-md shadow-blue-400">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width={1.5}
              stroke="currentColor"
              className="w-8 h-8"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M3.75 3v11.25A2.25 2.25 0 0 0 6 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0 1 18 16.5h-2.25m-7.5 0h7.5m-7.5 0-1 3m8.5-3 1 3m0 0 .5 1.5m-.5-1.5h-9.5m0 0-.5 1.5m.75-9 3-3 2.148 2.148A12.061 12.061 0 0 1 16.5 7.605"
              />
            </svg>
          </span>
          <span className="text-slate-600 font-bold mr-1">
            {data.sessions ? data.sessions.length : ""} جلسه
          </span>
        </div>
        <div className="flex justify-center items-center flex-col gap-y-3">
          <span className="text-white bg-blue-500 rounded-3xl p-3 shadow-md shadow-blue-400">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-8 h-8"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z"
              />
            </svg>
          </span>
          <span className="text-slate-600 font-bold mr-1">
            {data.courseStudentsCount} دانشجو
          </span>
        </div>
      </div>
      <div className="flex justify-start items-center flex-wrap w-full gap-y-2 gap-x-2">
        <div className="flex items-center gap-x-1 p-1.5 rounded-lg bg-gray-400/20 text-slate-500 text-xs">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            class="w-5 h-5"
          >
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-width="1.5"
              d="M8.07 3v2.514M15.93 3v2.514M3.833 15.249a13.202 13.202 0 0 1 0-5.896c.616-2.684 2.664-4.78 5.287-5.41a12.33 12.33 0 0 1 5.76 0c2.623.63 4.671 2.726 5.287 5.41a13.2 13.2 0 0 1 0 5.896c-.616 2.684-2.664 4.78-5.287 5.41a12.33 12.33 0 0 1-5.76 0c-2.623-.63-4.671-2.726-5.287-5.41Z"
            ></path>
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="1.5"
              d="m10 12.4 1.454 1.6L14 11"
            ></path>
          </svg>
          <span className="font-bold">تاریخ انتشار</span> :{" "}
          {moment(data.createdAt).format("jYYYY/jM/jD")}
        </div>
        <div className="flex items-center gap-x-1 p-1.5 rounded-lg bg-gray-400/20 text-slate-500 text-xs">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            class="w-5 h-5"
          >
            <path
              fill="currentColor"
              d="m3.353 15.05-.73.17.73-.17Zm0-6.1-.73-.17.73.17Zm17.294 0-.73.172.73-.172Zm0 6.1-.73-.172.73.172Zm-5.597 5.597-.172-.73.172.73Zm-6.1 0 .172-.73-.172.73Zm0-17.294.172.73-.172-.73Zm6.1 0-.172.73.172-.73Zm-7.193 8.87a.75.75 0 0 0 1.004 1.115l-1.004-1.115Zm2.209-.979.501.558-.501-.558Zm1.561.197.624-.417-.624.417Zm.746 1.118-.624.417.624-.417Zm1.561.197-.501-.558.501.558Zm2.209-.979a.75.75 0 0 0-1.004-1.115l1.004 1.115Zm-3.068 1.51-.094.745.094-.745Zm-2.15-2.575-.093.745.093-.745Zm-6.842 4.166a12.604 12.604 0 0 1 0-5.756l-1.46-.343a14.104 14.104 0 0 0 0 6.442l1.46-.343Zm15.834-5.756a12.603 12.603 0 0 1 0 5.756l1.46.343a14.104 14.104 0 0 0 0-6.442l-1.46.343Zm-5.039 10.795a12.603 12.603 0 0 1-5.756 0l-.343 1.46c2.119.497 4.323.497 6.442 0l-.343-1.46ZM9.122 4.083a12.604 12.604 0 0 1 5.756 0l.343-1.46a14.103 14.103 0 0 0-6.442 0l.343 1.46Zm0 15.834a6.761 6.761 0 0 1-5.039-5.039l-1.46.343a8.261 8.261 0 0 0 6.156 6.156l.343-1.46Zm6.099 1.46a8.261 8.261 0 0 0 6.156-6.156l-1.46-.343a6.761 6.761 0 0 1-5.039 5.039l.343 1.46Zm-.343-17.294a6.761 6.761 0 0 1 5.039 5.039l1.46-.343a8.261 8.261 0 0 0-6.156-6.156l-.343 1.46ZM8.78 2.623a8.261 8.261 0 0 0-6.156 6.156l1.46.343a6.761 6.761 0 0 1 5.039-5.039l-.343-1.46Zm.082 10.715 1.706-1.536-1.003-1.115-1.707 1.536 1.004 1.115Zm2.142-1.481.746 1.119 1.248-.833-.746-1.119-1.248.833Zm3.433 1.456 1.707-1.536-1.004-1.115-1.706 1.536 1.003 1.115Zm-2.687-.338c.143.214.292.442.443.611.165.185.415.399.79.446l.186-1.489a.356.356 0 0 1 .142.05c.026.016.027.024.001-.005a1.838 1.838 0 0 1-.118-.155 13.848 13.848 0 0 1-.196-.29l-1.248.832Zm1.684-.777c-.106.096-.19.17-.262.232-.073.063-.12.1-.153.121-.032.021-.029.015 0 .005a.356.356 0 0 1 .15-.013l-.187 1.489c.374.047.67-.099.875-.237.188-.126.39-.31.58-.482l-1.003-1.115Zm-2.866-.396c.106-.096.19-.17.262-.232.073-.063.12-.1.153-.121.032-.021.029-.015 0-.005a.356.356 0 0 1-.15.013l.187-1.489c-.374-.047-.67.099-.875.237-.188.126-.39.31-.58.482l1.003 1.115Zm1.684-.777c-.143-.214-.292-.442-.443-.611-.165-.185-.415-.399-.79-.446l-.186 1.489a.356.356 0 0 1-.142-.05c-.026-.016-.027-.024-.001.005.025.03.062.076.118.155.055.078.117.17.196.29l1.248-.832Z"
            ></path>
          </svg>
          <span className="font-bold">آخرین بروزرسانی</span> :{" "}
          {moment(data.updatedAt).format("jYYYY/jM/jD")}
        </div>
        <div className="flex items-center gap-x-1 p-1.5 rounded-lg bg-gray-400/20 text-slate-500 text-xs">
          <svg
            stroke="currentColor"
            fill="currentColor"
            stroke-width="0"
            viewBox="0 0 16 16"
            class="w-5 h-5"
            height="1em"
            width="1em"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M8 1a5 5 0 0 0-5 5v1h1a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V6a6 6 0 1 1 12 0v6a2.5 2.5 0 0 1-2.5 2.5H9.366a1 1 0 0 1-.866.5h-1a1 1 0 1 1 0-2h1a1 1 0 0 1 .866.5H11.5A1.5 1.5 0 0 0 13 12h-1a1 1 0 0 1-1-1V8a1 1 0 0 1 1-1h1V6a5 5 0 0 0-5-5z"></path>
          </svg>
          <span className="font-bold">پشتیبانی</span> : {data.support}
        </div>
      </div>
    </div>
  );
};
export const CreatorProfile = () => {
  return (
    <div className="flex justify-center items-center flex-col py-3 px-2 md:p-5 bg-white shadow-md rounded-2xl w-full">
      <div className="overflow-hidden rounded-full w-16 h-16 ring ring-gray-200">
        <img src={saheb} alt="saheb" />
      </div>
      <div className="text-center">
        <p className="font-bold text-slate-600 mt-1">صاحب محمدی</p>
        <p className="font-bold text-gray-500">مدرس دوره</p>
      </div>
      <div className="w-full px-2 text-gray-500">
        <p class="justify-center leading-6 text-sm">
          داستان برنامه نویس شدن من برمیگرده به سال 93. همون موقع که برای پروژه
          های دانشگاه (رشته مهندسی نفت) برنامه نویسی میکردم. کم کم با MATLAB
          آشنا شدم و بعدا وارد حوزه برنامه نویسی وب شدم و الان حدود 7 ساله که
          شغل تخصصی من برنامه نویسی وب هست.
          <strong> علاقه من جاوااسکریپت و خاندانش است. </strong>به همین دلیل
          فرانت هوکس رو بنا کردم تا تجربه چند ساله رو در قالب دوره های پروژه
          محور به علاقه مندان این حوزه انتقال بدم ☘️🤍.
        </p>
      </div>
    </div>
  );
};
export const RegisterComment = ({ shortName }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="flex justify-center items-center flex-col gap-y-3 py-2 px-2 md:p-5 bg-white shadow-sm rounded-2xl w-full">
      <div className="w-full text-right">
        <p className="text-gray-400 text-xs">
          می توانید دیدگاه خود را ثبت کنید
        </p>
      </div>
      <div className="w-full">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="w-full border-2 border-blue-300 rounded-2xl py-3 text-blue-500 font-bold 
          hover:border-blue-500 hover:text-blue-600 transition-all duration-150"
        >
          {isOpen ? "بستن" : "ثبت دیدگاه"}
        </button>
      </div>
      {isOpen ? <RegisterCommentForm shortname={shortName} /> : ""}
    </div>
  );
};