import React from "react";
import { useParams } from "react-router-dom";
import { data, geners } from "../assets/cardsData.js";
import { POSTER_CDN } from "../assets/constants.js";
import { FaStar } from "react-icons/fa";
import { FaRegStar } from "react-icons/fa";
import { AiTwotoneLike } from "react-icons/ai";
import { AiTwotoneDislike } from "react-icons/ai";

const MovieDetails = () => {
  const { id } = useParams();

  const movie = data.results.find((movie) => movie.id === parseInt(id));
  const {
    original_title,
    poster_path,
    vote_average,
    vote_count,
    overview,
    release_date,
    genre_ids,
  } = movie;

  return (
    <div className="w-full bg-[#222222] px-12 flex flex-col gap-3 items-center">
      <div className="text-white flex flex-row gap-6 items-start w-[60vw]">
        <div className="flex-grow flex flex-col justify-start items-start gap-2 ">
          <h1 className="text-3xl">{original_title}</h1>
          <p>{release_date.slice(0, 4)}</p>
        </div>
        <div className="flex flex-col justify-start items-start gap-2 ">
          <h1 className="text-xl uppercase tracking-widest text-[#fefefe]">
            Rating
          </h1>
          <div className="flex flex-row gap-2 items-center">
            <div className="flex flex-row items-center gap-2">
              <FaStar className="text-3xl text-yellow-500" />
            </div>
            <div className="">
              <p className="text-2xl">{Math.floor(vote_average) + `/10`}</p>
              <p>{vote_count}</p>
            </div>
          </div>
        </div>
        <div className="flex flex-col justify-start items-start gap-4 ">
          <h1 className="text-xl uppercase tracking-widest text-[#fefefe]">
            Your Rating
          </h1>
          <div className="flex flex-row justify-center items-center gap-2 text-2xl text-blue-500 font-bold cursor-pointer">
            <FaRegStar />
            <p>Rate</p>
          </div>
        </div>
      </div>
      <div className=" flex flex-row justify-center w-[60vw] relative">
        <img
          src={POSTER_CDN + poster_path}
          alt="movie poster"
          className="w-[40vw]  rounded-lg"
        />
      </div>
      <div className="flex justify-between w-[60vw]">
        <div className="flex flex-row justify-start items-start gap-2  pt-4">
          {genre_ids.map((genre, index) => {
            return (
              <div
                key={index}
                className="bg-[#444444] text-white rounded-[30px] px-6 py-1"
              >
                {geners.map((g) => {
                  if (g.id === genre) {
                    return g.name;
                  }
                })}
              </div>
            );
          })}
        </div>
        <div className="flex flex-row items-center gap-4 cursor-pointer ">
          <div className="text-white">
            <AiTwotoneLike className="text-2xl" />
            <p>Like</p>
          </div>
          <div className="text-white flex flex-col items-center cursor-pointer">
            <AiTwotoneDislike className="text-2xl" />
            <p>Dislike</p>
          </div>
        </div>
      </div>
      <div className="pb-6 pt-4 w-[60vw]">
        <p className="text-white  pr-12">{overview}</p>
      </div>
    </div>
  );
};

export default MovieDetails;
