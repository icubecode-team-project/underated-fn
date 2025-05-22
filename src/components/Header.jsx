import React, { useState } from "react";
import { NavLink } from "react-router-dom"; // Import NavLink from react-router-dom
import { FaBars } from "react-icons/fa"; // Import FaBars icon from react-icons
import logo from "../assets/logo-icon-removebg.png"; // Your logo path
import { useSelector } from "react-redux";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false); // State to toggle mobile menu
  const user = useSelector((state) => state?.user?.userObject); // Access user state from Redux store
  const isLoggedIn = useSelector((state) => state?.user?.isUserLogin); // Check if user is logged in

  console.log(user);
  console.log(isLoggedIn);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen); // Toggle the menu state
  };

  return (
    <header className="bg-[#222222] text-[#fefefe] py-4 px-6 shadow-md">
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        {/* Logo on the left with hover color change and voice trigger */}
        <div className="flex items-center">
          <img
            src={logo}
            alt="Underated Logo"
            className="w-auto h-14 mr-4 transition-transform duration-300 ease-in-out hover:filter hover:brightness-150"
          />
        </div>

        {/* Navigation for desktop */}
        <nav className="hidden lg:flex space-x-6 text-lg">
          <NavLink
            to="/"
            className="hover:text-gray-300"
            activeClassName="text-yellow-500 underline" // Active class with underline
          >
            Top Movies
          </NavLink>
          <NavLink
            to="/popular"
            className="hover:text-gray-300"
            activeClassName="text-yellow-500 underline" // Active class with underline
          >
            Popular Movies
          </NavLink>
          <NavLink
            to="/liked"
            className="hover:text-gray-300"
            activeClassName="text-yellow-500 underline" // Active class with underline
          >
            Most Liked Movies
          </NavLink>
          {isLoggedIn ? (
            <div>{user?.fullname}</div>
          ) : (
            <NavLink
              to="/login"
              className="hover:text-gray-300"
              activeClassName="text-yellow-500 underline" // Active class with underline
            >
              Login
            </NavLink>
          )}
        </nav>

        {/* Mobile menu button */}
        <div className="lg:hidden">
          <button onClick={toggleMenu} className="text-2xl">
            <FaBars className="text-white" /> {/* FontAwesome Hamburger icon */}
          </button>
        </div>
      </div>

      {/* Mobile menu (toggle visibility with isMenuOpen state) */}
      {isMenuOpen && (
        <div className="lg:hidden bg-[#222222] text-[#fefefe] px-6 py-4 space-y-4">
          <NavLink
            to="/"
            className="block hover:text-gray-300"
            activeClassName="text-yellow-500 underline" // Active class with underline
          >
            Top Movies
          </NavLink>
          <NavLink
            to="/popular"
            className="block hover:text-gray-300"
            activeClassName="text-yellow-500 underline" // Active class with underline
          >
            Popular Movies
          </NavLink>
          <NavLink
            to="/liked"
            className="block hover:text-gray-300"
            activeClassName="text-yellow-500 underline" // Active class with underline
          >
            Most Liked Movies
          </NavLink>
          {isLoggedIn ? (
            <div>{user?.fullname}</div>
          ) : (
            <NavLink
              to="/login"
              className="block hover:text-gray-300"
              activeClassName="text-yellow-500 underline" // Active class with underline
            >
              Login
            </NavLink>
          )}
        </div>
      )}
    </header>
  );
};

export default Header;
