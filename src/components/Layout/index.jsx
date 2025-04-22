// src/components/Layout/index.js

import React from "react";
import { Outlet } from "react-router-dom";

import Footer from "../Footer";

const Layout = () => {
  return (
    <div className="flex flex-col min-h-screen">
      
      <main className="flex-grow">
        <Outlet /> {/* This is where nested routes will be rendered */}
      </main>
      <Footer /> {/* Footer at the bottom */}
    </div>
  );
};

export default Layout;
