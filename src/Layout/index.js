import React from "react";
import Footer from "../Shared/Footer";
import Header from "../Shared/Header";

const Layout = ({ children }) => {
  return (
    <div>
      <Header />
      {children}
      <Footer />
    </div>
  );
};

export default Layout;
