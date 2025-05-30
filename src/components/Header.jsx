import React, { useState } from "react";
import { NavLink } from "react-router-dom"; // Import NavLink from react-router-dom
import { FaBars } from "react-icons/fa"; // Import FaBars icon from react-icons
import logo from "../assets/logo-icon-removebg.png"; // Your logo path
import { useSelector } from "react-redux";
import Cookies from "js-cookie";
import { useDispatch } from "react-redux"; // Import useDispatch from react-redux
import { loginUser, updateLogout } from "../utils/userSlice";
import { toast } from "react-toastify"; // Import toast for notifications

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false); // State to toggle mobile menu
  const user = useSelector((state) => state?.user?.userObject); // Access user state from Redux store
  const isLoggedIn = useSelector((state) => state?.user?.isUserLogin); // Check if user is logged in

  const dispatch = useDispatch();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleLogout = () => {
    Cookies.remove("token");
    Cookies.remove("jwt_token");
    dispatch(updateLogout());
    dispatch(loginUser(null));
    toast.success("Logout successful!");
  };

  return (
    <header className="bg-[#222222] text-[#fefefe] py-4 px-6 shadow-md">
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        {/* Logo on the left with hover color change and voice trigger */}
        <NavLink to="/" className="flex items-center">
          <img
            src={logo}
            alt="Underrated Logo"
            className="h-8 md:h-14 w-auto mr-4 transition-transform duration-300 ease-in-out hover:filter hover:brightness-150"
          />
        </NavLink>

        {/* Navigation for desktop */}
        <nav className="hidden lg:flex space-x-6 text-lg  justify-center items-center">
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
          {isLoggedIn && (
            <button
              className="hover:text-gray-300 cursor-pointer"
              onClick={handleLogout}
            >
              Logout
            </button>
          )}
          {isLoggedIn ? (
            <div className="text-[#222222] bg-[#fefefe] px-4 rounded-[30px] font-bold">
              {user?.userName}
            </div>
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
        <div className="lg:hidden flex items-center gap-3 ">
          {isLoggedIn && (
            <div className="text-[#222222] bg-[#fefefe] px-4 rounded-[30px] font-bold">
              {user?.userName}
            </div>
          )}
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
            <button
              className="block hover:text-gray-300 cursor-pointer"
              onClick={handleLogout}
            >
              Logout
            </button>
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
