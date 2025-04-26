import React from "react";
import ImageSlider from "../components/ImageSlider/imageSlider.jsx";
import MovieCards from "../components/MovieCards/";

const Home = () => {
  //throw new Error("Oops");
  return (
    <>
      {/* <h1 className="text-3xl text-blue-500 text-center">Header</h1> */}
      <ImageSlider />
      <MovieCards />
    </>
  );
};

export default Home;
