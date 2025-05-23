import React, { useState } from "react";
import logo from "../assets/icon-removebg.png";
import { Link, NavLink } from "react-router-dom";
import { IoMdArrowBack } from "react-icons/io";
import { registerValidation } from "../utils/validation";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
const VITE_BACKEND_URI = import.meta.env.VITE_BACKEND_URI;
import Cookies from "js-cookie";
import { useEffect } from "react";

const Register = () => {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [isError, setIsError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    const token = Cookies.get("token");
    if (token) {
      navigate("/");
    }
  }, [navigate]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setErrorMessage("");
    const errorMsg = registerValidation({
      fullName,
      email,
      password,
      confirmPassword,
    });

    if (errorMsg !== null) {
      setErrorMessage(errorMsg);
      toast.error("Error");
      setIsLoading(false);
      return;
    }

    try {
      const user = { fullname: fullName, email, password };
      const url = `${VITE_BACKEND_URI}/user/register`;

      const res = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(user),
      });
      const json = await res.json();

      if (!res.ok) {
        setIsError(true);
        setErrorMessage(json.message || "Registration failed");
        toast.error("Error");
        return;
      }

      toast.success("Registration successful!");
      setFullName("");
      setEmail("");
      setPassword("");
      setConfirmPassword("");
      navigate("/login");
    } catch (error) {
      setErrorMessage(error);
      setIsError(true);
      toast.error("Error");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen py-6 flex items-center justify-center  text-[#fefefe] bg-[#222222]">
      <Link to="/" className="absolute top-10 left-10  ">
        <IoMdArrowBack className="text-[30px] font-bold " />
      </Link>
      <div className="  w-full max-w-md  p-8 rounded-lg shadow-md border-1 border-[#fefefe]  bg-[#2a2a2a]">
        <div className="flex flex-row justify-center">
          <img className="w-1/4 " src={logo} alt="logo" />
        </div>

        <form onSubmit={handleSubmit} className=" text-[#fefefe] space-y-4">
          <div>
            <label className=" text-[#fefefe]">Full name</label>
            <input
              type="text"
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-white-400"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              required
              autoComplete="current-name"
            />
          </div>
          <div>
            <label className=" text-[#fefefe] ">Email</label>
            <input
              type="email"
              className="w-full px-4 py-2 border rounded-md focus:outline-none  focus:ring-1 focus:ring-white-400"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              autoComplete="current-email"
            />
          </div>
          <div>
            <label className=" text-[#fefefe]">Password</label>
            <input
              type="password"
              className="w-full px-4 py-2 border rounded-md focus:outline-none  focus:ring-1 focus:ring-white-400"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              autoComplete="current-password"
            />
          </div>
          <div>
            <label className=" text-[#fefefe]">ConfirmPassword</label>
            <input
              type="password"
              className="w-full px-4 py-2 border rounded-md focus:outline-none  focus:ring-1 focus:ring-white-400"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
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
            {isLoading ? "Loading..." : "Register"}
          </button>
          <div>
            <p>
              Already Registered? <NavLink to="/Login">please Login</NavLink>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;
