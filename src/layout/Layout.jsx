import React from "react";
import SideContent from "../SideContent";

const Layout = ({ children }) => {
  return (
    <>
      {/* <nav>nav</nav> */}
      <SideContent />
      <body>{children}</body>
    </>
  );
};

export default Layout;
