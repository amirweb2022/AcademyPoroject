import cashImage from "../../assets/images/cash.webp";
import Login from "../../components/Login/Login";
const LoginPage = () => {
  return (
    <div className="h-screen w-full">
      <div className="flex justify-center items-center h-full">
        <Login />
        <div className="w-3/5 hidden lg:block bg-blue-600 h-full rounded-tr-3xl rounded-br-3xl">
          <div className="w-full h-full flex justify-center items-center flex-col gap-y-3">
            <div className="w-[200px]">
              <img src={cashImage} alt="cash image" className="w-full h-auto" />
            </div>
            <div className="text-center">
              <h3 className="text-white font-black text-2xl">
                یادگیری مهارت برنامه نویسی
              </h3>
              <p className="text-white text-center mt-2 text-opacity-80 text-sm leading-7 max-w-sm">
                برنامه نویسی مهارتیه که نیاز همیشگی جامعه است و هیچ ریسکی نداره.
                شما روی خودتان سرمایه گذاری می کنید تا رشد کنید و آینده بهترهی
                را رقم بزنید.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;