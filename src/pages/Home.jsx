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
    dispatch(addMovesList(data?.data?.movies));
  };

  return (
    <>
      <ImageSlider />
      <MovieCards />
    </>
  );
};

export default Home;
