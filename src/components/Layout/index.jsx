// src/components/Layout/index.js






import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../Header"; // Import the Header component
import Footer from "../Footer";  // Import the Footer component

const Layout = () => {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
};

export default Layout;
