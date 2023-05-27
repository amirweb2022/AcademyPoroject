import { Routes, Route } from "react-router-dom";
import HomePage from "../Pages/HomePage/HomePage";
import CoursesPage from "../Pages/CoursesPage/CoursesPage";
import LoginPage from "../Pages/LoginPage/LoginPage";
import SignupPage from "../Pages/SignupPage/SignupPage";
import CoursePage from "../Pages/CoursePage/CoursePage";
import SearchPage from "../Pages/SearchPage/SearchPage";
const Routers = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/courses" element={<CoursesPage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/signup" element={<SignupPage />} />
      <Route path="/course/:shortName" element={<CoursePage />} />
      <Route path="/search" element={<SearchPage />} />
    </Routes>
  );
};

export default Routers;