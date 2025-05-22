import { IoMdArrowBack } from "react-icons/io";
import React, { useState } from "react";
import logo from "../assets/icon-removebg.png";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { loginValidation } from "../utils/validation";
const VITE_BACKEND_URI = import.meta.env.VITE_BACKEND_URI;
import Cookies from "js-cookie";
import { toast } from "react-toastify";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isError, setIsError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("submit triggred");
    const errorMsg = loginValidation({ email, password });

    if (errorMsg !== null) {
      setErrorMessage(errorMsg);
      setIsError(true);
    }

    try {
      const response = await fetch(`${VITE_BACKEND_URI}/user/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include",
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();

      if (response.ok) {
        toast.success("Login successful!");
        navigate("/");
      }
      throw new Error(data.message || "Login failed");
    } catch (error) {
      setIsError(true);
      setErrorMessage(error.message);
    }
  };

  return (
    <div className="min-h-screen py-6 flex items-center justify-center  text-[#fefefe] bg-[#222222]">
      <div className="  w-full max-w-md  p-8 rounded-lg shadow-md border-1 border-[#fefefe]  bg-[#2a2a2a]">
        <div className="flex flex-row justify-center">
          <img className="w-1/4 " src={logo} alt="logo" />
        </div>

        {/* <h2 className="text-2xl font-bold  text-center mb-6 ">Login</h2> */}
        <form onSubmit={handleSubmit} className=" text-[#fefefe] space-y-4">
          <div>
            <label className=" text-[#fefefe]">Email</label>
            <input
              type="email"
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              autoComplete="current-email"
            />
            <Link to="/" className="absolute top-10 left-10  ">
              <IoMdArrowBack className="text-[30px] font-bold " />
            </Link>
          </div>
          <div>
            <label className=" text-[#fefefe]">Password</label>
            <input
              type="password"
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              autoComplete="current-password"
            />
          </div>

          <div>
            {isError && (
              <p className="text-red-500 text-center text-lg">{errorMessage}</p>
            )}
          </div>
          <button
            type="submit"
            className="w-full bg-green-500 font-bold text-white py-2 rounded-md "
          >
            Log In
          </button>
          <div>
            <p>
              New to Underated?{" "}
              <NavLink to="/register">Create an account</NavLink>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
