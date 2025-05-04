import React, { useEffect } from "react";
import ImageSlider from "../components/ImageSlider/imageSlider.jsx";
import MovieCards from "../components/MovieCards/";
import { OPTIONS } from "../assets/constants.js";
import { addMovesList } from "../utils/movieSlice.js";
import { useDispatch } from "react-redux";

const Home = () => {
  //throw new Error("Oops");

  const dispatch = useDispatch();

  useEffect(() => {
    getMovieDetails();
  }, []);

  const getMovieDetails = async () => {
    const url = "http://localhost:8080/api/v1/movie/get/all-movies";
    const response = await fetch(url, OPTIONS);
    const data = await response.json();
    console.log(data);
    dispatch(addMovesList(data));
  };

  return (
    <>
      {/* <h1 className="text-3xl text-blue-500 text-center">Header</h1> */}
      <ImageSlider />
      <MovieCards />
    </>
  );
};

export default Home;
