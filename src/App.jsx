import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Layout from "./components/Layout";
import "./App.css";
import Login from "./pages/Login";
import ErrorBoundary from "./components/ErrorBoundary";
import FallBackUI from "./components/FallBackUI.jsx";
import MovieDetails from "./pages/MovieDetails";
import { addMoviesList } from "./utils/movieSlice.js";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { OPTIONS } from "./assets/constants.js";
import Register from "./pages/Register.jsx";
const BACKEND_URI = import.meta.env.VITE_BACKEND_URI;
const VITE_BACKEND_URI = import.meta.env.VITE_BACKEND_URI;
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { jwtDecode } from "jwt-decode";
import Cookies from "js-cookie";

import { loginUser, updateLogin } from "./utils/userSlice.js";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    getMovieDetails();
    updateLoginDetails();
  }, []);

  const updateLoginDetails = () => {
    const token = Cookies.get("token");

    if (token) {
      try {
        const decoded = jwtDecode(token);
        const { fullname } = decoded;
        dispatch(loginUser({ fullname }));
        dispatch(updateLogin());
      } catch (error) {
        console.error("Invalid token", error);
      }
    }
  };

  const getMovieDetails = async () => {
    const url = `${BACKEND_URI}/api/v1/movie/get/all-movies`;
    const response = await fetch(url, OPTIONS);
    const data = await response.json();
    // console.log(data?.data?.movies);
    dispatch(addMoviesList(data?.data?.movies));
  };

  return (
    <ErrorBoundary fallback={<FallBackUI />}>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/movie/:id" element={<MovieDetails />} />
          {/* Add more nested routes here like about, contact etc...*/}
        </Route>
        {/* Add more Routes here like login, logout etc..*/}
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
      <ToastContainer position="top-right" autoClose={3000} />
    </ErrorBoundary>
  );
}

export default App;
