// src/components/Layout/index.js

import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../Header"; // Import the Header component


const Layout = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header /> {/* Add Header at the top */}
      <main className="flex-grow">
        <Outlet /> {/* This is where nested routes will be rendered */}
      </main>
      
    </div>
  );
};

export default Layout;
