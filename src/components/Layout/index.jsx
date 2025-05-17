import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "../Footer"; // Import the Footer component
import Header from "../Header";

const Layout = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
