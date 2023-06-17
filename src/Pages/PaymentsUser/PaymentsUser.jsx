import { useOutletContext } from "react-router-dom";
import ProfileCoursesList from "../../components/ProfileCoursesList/ProfileCoursesList";

const PaymentUser = () => {
  const [userData] = useOutletContext();
  return (
    <div className="w-full">
      <div className="p-4 lg:p-6 md:w-2/4">
        <h3 className="text-2xl text-slate-600 font-bold">سفارش های موفق من</h3>
        <p className="text-slate-400 text-sm mt-2">
          -دوره های رایگان لازم به پرداخت هزینه ای نیست و همه دوره ها از سایت
          قابل مشاهده است
        </p>
      </div>
      <div className="w-full flex flex-col justify-center items-center gap-y-3">
        <ProfileCoursesList userData={userData} count={null} />
      </div>
    </div>
  );
};

export default PaymentUser;