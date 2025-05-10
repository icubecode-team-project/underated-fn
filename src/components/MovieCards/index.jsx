import React from "react";
// import { data } from "../../assets/cardsData.js";
import MovieCard from "../MovieCard/index.jsx";
import { FaGreaterThan } from "react-icons/fa";
import { useSelector } from "react-redux";

const MovieCards = () => {
  const moviesList = useSelector((store) => store?.movies?.moviesList);

  return (
    <div className="pt-10 bg-[#222222]">
      <div className="pl-14 ">
        <h1 className="text-3xl text-yellow-500 font-bold">
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
        <div className="text-white w-full bg-[#222222] p-6 flex flex-row flex-wrap gap-4 justify-center">
          {moviesList.map((eachCard, index) => (
            <MovieCard key={index} cardData={eachCard} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default MovieCards;
