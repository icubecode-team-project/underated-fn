import React, { useState } from 'react'
import  logo from '../assets/icon-removebg.png';
import {  Link, NavLink } from "react-router-dom";
import { IoMdArrowBack } from "react-icons/io";
import {registerValidation} from '../utils/validation'

const Register = () =>{
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

 

  const handleSubmit = (e) => {
    e.preventDefault();     
    // You can handle login logic here
    console.log("Email:", email);
    console.log("Password:", password);
    const valid = registerValidation(email, password, confirmPassword) ;
    console.log(valid)
  };

  return (
    
    <div className="min-h-screen py-6 flex items-center justify-center  text-[#fefefe] bg-[#222222]">
     
      <div className="  w-full max-w-md  p-8 rounded-lg shadow-md border-1 border-[#fefefe]  bg-[#2a2a2a]">
        
        <div className="flex flex-row justify-center">
          <img  className="w-1/4 " src={logo} alt="logo"/>
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
             < Link to='/' className="absolute top-10 left-10  ">
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
            <label className=" text-[#fefefe]">ConfirmPassword</label>
            <input
              type="password"
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
             autoComplete="current-password"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-green-500 font-bold text-white py-2 rounded-md "
          >
            Register
          </button>
          <div>
            <p >Already Registered? <NavLink to ='/Login'>please Login</NavLink></p>
          </div>
        </form>
      </div>
    </div>
    
  );
};





export default Register