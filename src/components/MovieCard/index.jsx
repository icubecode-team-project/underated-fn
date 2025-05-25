import { POSTER_CDN } from "../../utils/constants.js";
import { FaStar } from "react-icons/fa";
import { IoTicket } from "react-icons/io5";
import { FaPlay } from "react-icons/fa";
import { FaPlus } from "react-icons/fa";
import { FaRegStar } from "react-icons/fa";
import { Link } from "react-router-dom";
import { addMovieDetails } from "../../utils/movieSlice.js";
import { useDispatch, useSelector } from "react-redux";
import { openModel } from "../../utils/modelSlice.js";

const MovieCard = ({ cardData }) => {
  const dispatch = useDispatch();
  const { imageUrl, title, rating, releaseYear, _id } = cardData;

  const userId = useSelector((store) => store?.user?.userObject?.id);
  const moviesList = useSelector((store) => store?.movies?.moviesList);
  const movieDetails = moviesList.find((movie) => movie._id === _id);
  const isRated = movieDetails?.ratingUserData.includes(userId);

  return (
    <div
      className="w-[150px] md:w-[180px]  bg-[#2f2f2f] flex flex-col rounded-lg shadow  text-white relative "
      onClick={() => dispatch(addMovieDetails(cardData))}
    >
      <Link
        to={`/movie/${cardData._id || cardData.id}`}
        className="cursor-pointer"
      >
        <div>
          <img
            className="w-[180px] h-[200px] md:h-[270px] rounded-lg"
            src={POSTER_CDN + imageUrl}
            alt="poster-image"
          />
        </div>
      </Link>
      <div className="py-4 px-4 bg-black opacity-60 rounded-br-lg text-white font-bold w-[40px] absolute top-0 left-0 z-10 felx flex-col justify-center items-center">
        <FaPlus />
      </div>
      <div className="px-2 flex flex-row justify-between items-center">
        <p className="flex items-center gap-1 text-[#fefefe] text-sm md:text-auto">
          <FaStar className="text-yellow-500" />
          {Math.round(rating * 10) / 10 || "0"}
        </p>
        <div className="">
          {isRated ? (
            <FaStar className="text-blue-500" />
          ) : (
            <FaRegStar
              className="text-blue-500 cursor-pointer"
              onClick={(e) => {
                e.stopPropagation();
                // Open the rating modal
                dispatch(addMovieDetails(cardData));
                dispatch(openModel());
              }}
            />
          )}
        </div>
        <div className="">
          <p>{releaseYear}</p>
        </div>
      </div>
      <p className="px-2 truncate  font-bold text-sm md:text-auto">{title}</p>
      <div className="flex flex-col items-center gap-1 p-2">
        <button className="flex items-center gap-2 py-1 md:py-2 px-6 bg-[#3f3f3f] rounded-lg text-blue-500 cursor-pointer text-sm">
          <IoTicket />
          Show Times
        </button>
        <button className="flex items-center gap-1 py-2 px-6 rounded-lg cursor-pointer text-sm">
          <FaPlay />
          Trailer
        </button>
      </div>
    </div>
  );
};

export default MovieCard;
