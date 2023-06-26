import { Routes, Route, Navigate } from "react-router-dom";
import HomePage from "../Pages/HomePage/HomePage";
import CoursesPage from "../Pages/CoursesPage/CoursesPage";
import LoginPage from "../Pages/LoginPage/LoginPage";
import SignupPage from "../Pages/SignupPage/SignupPage";
import CoursePage from "../Pages/CoursePage/CoursePage";
import SearchPage from "../Pages/SearchPage/SearchPage";
import CartPage from "../Pages/CartPage/CartPage";
import CheckOut from "../Pages/CheckOut/CheckOut";
import Profile from "../Pages/Profile/Profile";
import DashBordUser from "../Pages/DashbordUser/DashbordUser";
import CoursesUser from "../Pages/CoursesUser/CoursesUser";
import PaymentsUser from "../Pages/PaymentsUser/PaymentsUser";
import NotFoundPage from "../Pages/NotFoundPage/NotFoundPage";
import ArticlePage from "../Pages/ArticlePage/ArticlePage";
const Routers = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/courses" element={<CoursesPage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/signup" element={<SignupPage />} />
      <Route path="/course/:shortName" element={<CoursePage />} />
      <Route path="/search" element={<SearchPage />} />
      <Route path="/cart" element={<CartPage />} />
      <Route path="/login/checkout" element={<CheckOut />} />
      <Route path="/articles" element={<ArticlePage />} />
      <Route path="*" element={<NotFoundPage />} />
      <Route path="/profile/*" element={<Profile />}>
        <Route path="dashbord" element={<DashBordUser />}/>
        <Route path="courses" element={<CoursesUser />}/>
        <Route path="payments" element={<PaymentsUser />}/>
      </Route>
    </Routes>
  );
};

export default Routers;