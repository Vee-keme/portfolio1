import React from "react";
import SideContent from "../SideContent";
import Navbar from "../Navbar";
import { useLocation } from "react-router-dom";

const Layout = ({ children }) => {
  const location = useLocation();

  const homePage = location.pathname === "/";
  return (
    <div className="w-11/12 mx-auto">
      {/* {homePage && <SideContent />} */}
      <body>{children}</body>
    </div>
  );
};

export default Layout;
