// src/components/Layout/index.js
import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "../Footer";
const Layout = () => {
  return (
    <div>
      {/*Add Header, footer and layout things here*/}
      <main>
        <Outlet /> {/* This is where nested routes will be rendered */}
      </main>
      <Footer /> 
    </div>
  );
};

export default Layout;
