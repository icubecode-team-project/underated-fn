import React from "react";
// import { data } from "../../assets/cardsData.js";
import MovieCard from "../MovieCard/index.jsx";
import { FaGreaterThan } from "react-icons/fa";
import { useSelector } from "react-redux";
import { ClipLoader } from "react-spinners";

const MovieCards = () => {
  const moviesList = useSelector((store) => store?.movies?.moviesList);

  const renderLoading = () => (
    <div className="w-full bg-[#222222] px-12 flex flex-col justify-center gap-3 items-center min-h-[40vh]">
      <ClipLoader color="#36d7b7" size={50} loading={true} />
    </div>
  );
  if (moviesList.length === 0) return renderLoading();

  return (
    <div className="pt-2 md:pt-10 bg-[#222222]">
      <div className="px-8 py-1 md:pb-3 md:px-30 ">
        <h1 className="text-sm md:text-3xl text-yellow-500 font-bold">
          Explore Movies & TV Shows
        </h1>
        <div className="flex items-center gap-2 mt-2 rounded-md w-fit">
          <div className="bg-yellow-500 w-[3px] h-6 rounded"></div>
          <div className="text-white text-sm font-semibold flex items-center gap-2">
            Action <FaGreaterThan />
          </div>
        </div>
      </div>
      <div className="flex">
        <div className="text-white w-full  bg-[#222222] p-3 md:px-12 flex flex-row flex-wrap gap-2 md:gap-4 justify-center">
          {moviesList.map((eachCard, index) => (
            <MovieCard key={index} cardData={eachCard} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default MovieCards;
