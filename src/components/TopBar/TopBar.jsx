import React, { useEffect, useState } from "react";
import { getTopBarMenu } from "../../services/getTopBarMenuService";
const TopBar = () => {
  const [topBar, setTopBar] = useState([]);
  useEffect(() => {
    const renderTopBarMenu = async () => {
      try {
        const { data } = await getTopBarMenu();
        const topBarMenuData = data;
        const shuffledArray = topBarMenuData.sort(
          (a, b) => 0.5 - Math.random()
        );
        setTopBar(shuffledArray.slice(0, 4));
      } catch (error) {
        console.log(error);
      }
    };
    renderTopBarMenu();
  }, []);
  return (
    <div className="w-full bg-gray-200 hidden lg:block">
      <div className="container xl:max-w-screen-2xl mx-auto py-2 md:py-3 px-8">
        <div className="w-full">
          <nav className="flex justify-between items-center">
            <ul className="flex justify-center items-center text-sm text-slate-700">
              {topBar.map((menu) => (
                <li
                  className="ml-4 hover:text-blue-500 transition-all duration-150"
                  key={menu.id}
                >
                  <a href={menu.href}>{menu.title}</a>
                </li>
              ))}
            </ul>
            <ul className="flex justify-center items-center text-sm text-slate-700">
              <li className="flex justify-center items-center">
                amirm.992@yahoo.com
                <span className="mr-2 text-blue-500">
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
                      d="M2.25 13.5h3.86a2.25 2.25 0 0 1 2.012 1.244l.256.512a2.25 2.25 0 0 0 2.013 1.244h3.218a2.25 2.25 0 0 0 2.013-1.244l.256-.512a2.25 2.25 0 0 1 2.013-1.244h3.859m-19.5.338V18a2.25 2.25 0 0 0 2.25 2.25h15A2.25 2.25 0 0 0 21.75 18v-4.162c0-.224-.034-.447-.1-.661l-2.41-7.839a2.25 2.25 0 0 0-2.15-1.588H6.911a2.25 2.25 0 0 0-2.15 1.588L2.35 13.177a2.25 2.25 0 0 0-.1.661z"
                    />
                  </svg>
                </span>
              </li>
              <li className="flex justify-center items-center mr-4">
                09921103757
                <span className="mr-2 text-blue-500">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width={1.5}
                    stroke="currentColor"
                    class="w-5 h-5"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25z"
                    />
                  </svg>
                </span>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default React.memo(TopBar);