import { Routes, Route } from "react-router-dom";
import HomePage from "../Pages/HomePage/HomePage";
import CoursesPage from "../Pages/CoursesPage/CoursesPage";
import LoginPage from "../Pages/LoginPage/LoginPage";
import SignupPage from "../Pages/SignupPage/SignupPage";
import CoursePage from "../Pages/CoursePage/CoursePage";
import SearchPage from "../Pages/SearchPage/SearchPage";
import CartPage from "../Pages/CartPage/CartPage";
import CheckOut from "../Pages/CheckOut/CheckOut";
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
    </Routes>
  );
};

export default Routers;