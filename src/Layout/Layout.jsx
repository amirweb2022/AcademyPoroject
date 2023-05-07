import Navigation from "../components/Navigation/Navigation";
import React from "react";
import Footer from "../components/Footer/Footer";
const Layout = ({ children  , data}) => {
  return (
    <>
      <Navigation />
      {children}
      <Footer course={data}/>
    </>
  );
};

export default Layout;