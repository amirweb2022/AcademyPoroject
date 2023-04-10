import Navigation from "../components/Navigation/Navigation";
import React from "react";
const Layout = ({ children }) => {
  return (
    <>
      <Navigation />
      {children}
    </>
  );
};

export default React.memo(Layout);