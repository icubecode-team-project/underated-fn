import { geners } from "../assets/cardsData.js";
import { POSTER_CDN } from "../utils/constants.js";
import { FaStar, FaRegStar } from "react-icons/fa";
import { AiTwotoneLike, AiTwotoneDislike } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import RatingModel from "../components/RatingModel/index.jsx";
import { openModel } from "../utils/modelSlice.js";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { addMovieDetails } from "../utils/movieSlice.js";
import { fetchMovies } from "../utils/hooks.js";

const MovieDetails = () => {
  const [likeStatus, setLikeStatus] = useState("Neutral"); // "Liked", "Disliked", "Neutral"
  const [likeLoading, setLikeLoading] = useState(false);
  const [dislikeLoading, setDislikeLoading] = useState(false);
  const [movie, setMovie] = useState({});
  const [noMoviesFound, setNoMoviesFound] = useState(false);
  const dispatch = useDispatch();
  const { id: movieId } = useParams();
  const isLoggedIn = useSelector((state) => state?.user?.isUserLogin);

  useEffect(() => {
    const fetchAndSetMovie = async () => {
      const moviesList = await fetchMovies();
      const foundMovie = moviesList.find(
        (m) => m._id === movieId || m.id === movieId
      );
      if (foundMovie) {
        setMovie(foundMovie);
        dispatch(addMovieDetails(foundMovie));
      } else {
        setNoMoviesFound(true);
      }
    };

    fetchAndSetMovie();
  }, [movieId]);

  const handleLike = async () => {
    if (!isLoggedIn) return dispatch(openModel());

    if (likeStatus === "Liked") return;

    // Optimistic update
    setLikeStatus("Liked");
    setLikeLoading(true);

    try {
      const response = await fetch(
        `${import.meta.env.VITE_BACKEND_URI}/api/v1/movie/like`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          credentials: "include",
          body: JSON.stringify({ type: "LIKE", movieId: movie?._id }),
        }
      );
      const data = await response.json();

      // ✅ Update the movie's like count locally
      console.log("Like response:", data);
      if (data.status === "Success" || data.status === "Updated") {
        setMovie((prevMovie) => ({
          ...prevMovie,
          like: (prevMovie.like || 0) + 1,
        }));
      }
    } catch (error) {
      console.error("Error liking the movie:", error);
      setLikeStatus("Neutral"); // Revert on error
    } finally {
      setLikeLoading(false);
    }
  };

  const handleDislike = async () => {
    if (!isLoggedIn) return dispatch(openModel());

    if (likeStatus === "Disliked") return;

    // Optimistic update
    setLikeStatus("Disliked");
    setDislikeLoading(true);

    try {
      const response = await fetch(
        `${import.meta.env.VITE_BACKEND_URI}/api/v1/movie/like`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          credentials: "include",
          body: JSON.stringify({ type: "DISLIKE", movieId: movie?._id }),
        }
      );
      const data = await response.json();

      // ✅ Update the movie's like count locally
      if (data.status === "Success" || data.status === "Updated") {
        setMovie((prevMovie) => ({
          ...prevMovie,
          like: (prevMovie.like || 0) - 1,
        }));
      }
    } catch (error) {
      console.error("Error disliking the movie:", error);
      setLikeStatus("Neutral"); // Revert on error
    } finally {
      setDislikeLoading(false);
    }
  };

  const renderRating = () => (
    <div className="w-full bg-[#222222] px-12 flex flex-col gap-3 items-center min-h-screen">
      <div className="text-white flex flex-row gap-6 items-start w-[60vw]">
        <div className="flex-grow flex flex-col justify-start items-start gap-2 ">
          <h1 className="text-3xl">{movie?.title}</h1>
          <p>{movie?.releaseYear}</p>
        </div>

        <div className="flex flex-col justify-start items-start gap-2 ">
          <h1 className="text-xl uppercase tracking-widest text-[#fefefe]">
            Rating
          </h1>
          <div className="flex flex-row gap-2 items-center">
            <FaStar className="text-3xl text-yellow-500" />
            <div>
              <p className="text-2xl">{movie?.rating}</p>
              <p>{movie?.voteCount || "vote count"}</p>
            </div>
          </div>
        </div>

        <div className="flex flex-col justify-start items-start gap-4 ">
          <h1 className="text-xl uppercase tracking-widest text-[#fefefe]">
            Your Rating
          </h1>
          <div
            className="flex flex-row justify-center items-center gap-2 text-2xl text-blue-500 font-bold cursor-pointer"
            onClick={() => dispatch(openModel())}
          >
            <FaRegStar />
            <p>Rate</p>
          </div>
        </div>
      </div>

      <div className="flex flex-row justify-center w-[60vw] relative">
        <img
          src={POSTER_CDN + movie?.imageUrl}
          alt="movie poster"
          className="w-[40vw] rounded-lg"
        />
      </div>

      <div className="flex justify-between w-[60vw]">
        <div className="flex flex-row justify-start items-start gap-2 pt-4">
          {(movie?.type ? JSON.parse(movie?.type) : []).map(
            (genreId, index) => {
              const genreName = geners.find((g) => g.id == genreId)?.name;
              return genreName ? (
                <div
                  key={index}
                  className="bg-[#444444] text-white rounded-[30px] px-6 py-1"
                >
                  {genreName}
                </div>
              ) : null;
            }
          )}
        </div>

        <div className="flex flex-row items-center gap-4 cursor-pointer">
          <div className="text-white flex flex-col items-center">
            <p className="font-bold">Likes</p>
            <p>{movie?.like}</p>
          </div>

          {/* Like button with transition */}
          <div
            className="text-white flex flex-col items-center transition-transform duration-300 ease-in-out"
            onClick={handleLike}
          >
            {likeStatus === "Liked" ? (
              <div
                className={`flex flex-col items-center ${
                  likeLoading && "animate-pulse"
                }`}
              >
                <AiTwotoneLike className="text-2xl text-blue-500 scale-110" />
                <p className="text-blue-500">
                  {likeLoading ? "Liking..." : "Liked"}
                </p>
              </div>
            ) : (
              <div className="flex flex-col items-center">
                <AiTwotoneLike className="text-2xl hover:scale-110 transition" />
                <p>{likeLoading ? "Liking..." : "Like"}</p>
              </div>
            )}
          </div>

          {/* Dislike button with transition */}
          <div
            className="text-white flex flex-col items-center transition-transform duration-300 ease-in-out"
            onClick={handleDislike}
          >
            {likeStatus === "Disliked" ? (
              <div
                className={`flex flex-col items-center ${
                  dislikeLoading && "animate-pulse"
                }`}
              >
                <AiTwotoneDislike className="text-2xl text-blue-500 scale-110" />
                <p className="text-blue-500">
                  {dislikeLoading && "animate-pulse"
                    ? "Disliking..."
                    : "Disliked"}
                </p>
              </div>
            ) : (
              <div className="flex flex-col items-center">
                <AiTwotoneDislike className="text-2xl hover:scale-110 transition" />
                <p>{dislikeLoading ? "Disliking..." : "Dislike"}</p>
              </div>
            )}
          </div>
        </div>
      </div>

      <div className="pb-6 pt-4 w-[60vw]">
        <p className="text-white pr-12">{movie?.description}</p>
      </div>
    </div>
  );

  return (
    <div>
      {noMoviesFound ? (
        <p className="w-full bg-[#222222] px-12 flex flex-col gap-3 items-center justify-center min-h-[60vh] text-white font-bold text-3xl">
          No movies found
        </p>
      ) : (
        renderRating()
      )}
    </div>
  );
};

export default MovieDetails;
