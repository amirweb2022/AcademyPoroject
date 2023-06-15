import { Link, useOutletContext } from "react-router-dom";
import moment from "moment-jalaali";
const DashBordUser = () => {
  const [userData] = useOutletContext();
  return (
    <div className="w-full">
      <div className="bg-white rounded-lg p-4 lg:p-6 md:w-2/4 shadow-sm">
        <div className="w-full flex flex-col lg:flex-row justify-cenetr lg:justify-start items-start lg:items-center gap-x-2">
          <h3 className="text-xl text-slate-600 font-bold">
            {userData ? userData.name : ""} عزیز😍;
          </h3>
          <span className="text-slate-500 text-lg">
            به فرانت هوکس خوش اومدی👋🏻
          </span>
        </div>
      </div>
      <div className="w-full flex flex-col justify-center items-start py-4 gap-y-2 mt-4 border-b-[1px]">
        <h3 className="text-slate-600 font-bold text-2xl">سوابق من</h3>
        <div className="grid grid-cols-3 gap-6 w-full">
          <div className="bg-white p-3 col-span-4 md:col-span-2 lg:col-span-1 lg:p-6 rounded-xl shadow-lg shadow-gray-100 hover:shadow-xl transition-all duration-200 hover:shadow-gray-200">
            <div className="flex justify-start items-center gap-x-3 w-full">
              <div
                class="flex items-center justify-center text-white p-2 rounded-xl 
               bg-slate-500"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  class="w-7 h-7"
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
              </div>
              <div className="flex flex-col justify-center items-start gap-y-1">
                <span className="text-gray-400 text-sm">تاریخ پیوستن</span>
                <span className="font-bold text-slate-600">
                  {moment(userData ? userData.createdAt : "").format(
                    "jYYYY/jM/jD"
                  )}
                </span>
              </div>
            </div>
          </div>

          <div className="bg-white p-3 col-span-4 md:col-span-2 lg:col-span-1 lg:p-6 rounded-xl shadow-lg shadow-gray-100 hover:shadow-xl transition-all duration-200 hover:shadow-gray-200">
            <div className="flex justify-start items-center gap-x-3 w-full">
              <div
                class="flex items-center justify-center text-white p-2 rounded-xl 
               bg-blue-500"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 16 16"
                  fill="none"
                  class="w-7 h-7"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M14.667 11.16V3.113c0-.8-.654-1.393-1.447-1.326h-.04c-1.4.12-3.527.833-4.713 1.58l-.114.073a.739.739 0 0 1-.706 0l-.167-.1C6.293 2.6 4.173 1.893 2.773 1.78a1.312 1.312 0 0 0-1.44 1.327v8.053c0 .64.52 1.24 1.16 1.32l.194.027c1.446.193 3.68.926 4.96 1.626l.026.014c.18.1.467.1.64 0 1.28-.707 3.52-1.447 4.974-1.64l.22-.027c.64-.08 1.16-.68 1.16-1.32ZM8 3.66v10m-2.833-8h-1.5m2 2h-2"
                  ></path>
                </svg>
              </div>
              <div className="flex flex-col justify-center items-start gap-y-1">
                <span className="text-gray-400 text-sm">دوره ها</span>
                <span className="font-bold text-slate-600">
                  {userData ? userData.courses.length : ""}
                </span>
              </div>
            </div>
          </div>

          <div className="bg-white p-3 col-span-4 md:col-span-2 lg:col-span-1 lg:p-6 rounded-xl shadow-lg shadow-gray-100 hover:shadow-xl transition-all duration-200 hover:shadow-gray-200">
            <div className="flex justify-start items-center gap-x-3 w-full">
              <div
                class="flex items-center justify-center text-white p-2 rounded-xl 
               bg-green-500"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  class="w-7 h-7"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-width="1.5"
                    d="M8 9h4"
                  ></path>
                  <path
                    fill="currentColor"
                    d="m2.885 15.151.728-.18-.728.18Zm0-6.302.728.18-.728-.18Zm18.23 0 .728-.181-.728.18Zm0 6.302-.728-.18.728.18Zm-6 5.508-.162-.732.163.732Zm-6.23 0 .162-.732-.163.732Zm0-17.318.162.732-.163-.732Zm6.23 0 .163-.732-.162.732ZM8.432 20.558l-.163.733.163-.733Zm7.138 0 .163.733-.163-.733Zm0-17.116-.162.732.162-.732Zm-7.138 0-.163-.733.163.733Zm10.262 11.062-.134.738.134-.738Zm-.058-.011.134-.738-.134.738Zm0-4.986.134.738-.134-.738Zm.058-.01-.134-.738.134.737Zm2.307.99a.75.75 0 0 0 .601-1.374L21 10.487Zm.601 4.4A.75.75 0 1 0 21 13.513l.601 1.374Zm-5.023-2.259-.721.206.721-.206Zm0-1.256.721.206-.72-.206ZM8.593 4.174l.454-.1-.325-1.465-.454.1.325 1.465Zm6.36-.1.454.1.325-1.465-.454-.1-.325 1.464Zm.454 15.752-.454.1.325 1.465.454-.1-.325-1.465Zm-6.36.1-.454-.1-.325 1.465.454.1.325-1.464Zm-5.434-4.955a12.326 12.326 0 0 1 0-5.942l-1.455-.361a13.826 13.826 0 0 0 0 6.664l1.455-.362ZM20.387 9.03c.484 1.95.484 3.99 0 5.94l1.456.362a13.827 13.827 0 0 0 0-6.664l-1.456.362Zm-5.434 10.897a13.65 13.65 0 0 1-5.906 0l-.325 1.464c2.16.479 4.397.479 6.556 0l-.325-1.464ZM9.047 4.073a13.651 13.651 0 0 1 5.906 0l.325-1.464a15.151 15.151 0 0 0-6.556 0l.325 1.464Zm-.454 15.753a6.603 6.603 0 0 1-4.98-4.856l-1.455.362a8.103 8.103 0 0 0 6.11 5.959l.325-1.465Zm7.139 1.465a8.103 8.103 0 0 0 6.11-5.959l-1.455-.362a6.603 6.603 0 0 1-4.98 4.856l.325 1.465Zm-.325-17.117a6.603 6.603 0 0 1 4.98 4.856l1.456-.362a8.103 8.103 0 0 0-6.111-5.959l-.325 1.465ZM8.268 2.709a8.103 8.103 0 0 0-6.11 5.959l1.455.361a6.603 6.603 0 0 1 4.98-4.855l-.325-1.465Zm10.56 11.057-.059-.01-.269 1.475.059.01.269-1.475Zm-.059-3.521.059-.01-.27-1.476-.058.01.27 1.476Zm.059-.01a3.743 3.743 0 0 1 2.172.252l.601-1.374a5.244 5.244 0 0 0-3.042-.354l.269 1.475Zm-.27 5.007a5.244 5.244 0 0 0 3.043-.355L21 13.513a3.743 3.743 0 0 1-2.172.253l-.27 1.476Zm-1.259-2.82a1.538 1.538 0 0 1 0-.844l-1.442-.412a3.038 3.038 0 0 0 0 1.668l1.442-.412ZM18.5 8.77a3.38 3.38 0 0 0-2.643 2.397l1.442.412a1.88 1.88 0 0 1 1.47-1.333L18.5 8.769Zm.27 4.986a1.88 1.88 0 0 1-1.47-1.333l-1.443.412a3.38 3.38 0 0 0 2.643 2.397l.27-1.476Z"
                  ></path>
                </svg>
              </div>
              <div className="flex flex-col justify-center items-start gap-y-1">
                <span className="text-gray-400 text-sm">سفارش ها</span>
                <span className="font-bold text-slate-600">
                  {userData
                    ? userData.courses.filter((c) => c.price !== 0).length
                    : ""}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full flex flex-col justify-center items-start py-4 gap-y-2">
        <h3 className="text-slate-600 font-bold text-2xl mb-2">
          آخرین سفارش های من
        </h3>
        <div className="w-full flex flex-col justify-center items-center gap-y-3">
          {userData && userData.courses.length !== 0
            ? userData.courses.slice(-2).map((c) => {
                return (
                  <div className="w-full flex flex-col gap-x-3 justify-center lg:flex-row lg:justify-start items-start bg-white rounded-lg overflow-hidden">
                    <div className="w-full lg:w-1/4">
                      <img
                        src={`http://localhost:4000/courses/covers/${c.cover}`}
                        alt={c.name}
                      />
                    </div>
                    <div className="w-full h-full lg:w-3/4">
                      <div className="h-full flex flex-col justify-start items-start py-3 gap-y-2 px-2 lg:px-0">
                        <div>
                          {" "}
                          <Link to={`/course/${c.shortName}`}>
                            <h2 className="text-2xl font-bold text-slate-700 hover:text-blue-600">
                              {c.name}
                            </h2>
                          </Link>
                        </div>
                        <div className="text-xl">
                            <span className="text-slate-500">قیمت :</span>
                            <span className="text-blue-500 font-bold mr-1">{c.price === 0 ? "رایگان" : c.price.toLocaleString("fa-IR")}</span>
                        </div>
                        <div className="text-xl">
                            <span className="text-slate-500">وضعیت دوره :</span>
                            <span className="text-green-500 font-bold mr-1">{c.isComplete === 0 ? 'درحال ظبط' : 'تکمیل شده'}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })
            : "سفارشی ندارید"}
        </div>
      </div>
    </div>
  );
};

export default DashBordUser;