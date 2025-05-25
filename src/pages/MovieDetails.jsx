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
import { ClipLoader } from "react-spinners";

const MovieDetails = () => {
  const [likeStatus, setLikeStatus] = useState("Neutral"); // "Liked", "Disliked", "Neutral"
  const [likeLoading, setLikeLoading] = useState(false);
  const [dislikeLoading, setDislikeLoading] = useState(false);
  const [movie, setMovie] = useState({});
  const [noMoviesFound, setNoMoviesFound] = useState(false);
  const [pageLoading, setPageLoading] = useState(false);
  const dispatch = useDispatch();
  const { id: movieId } = useParams();
  const isLoggedIn = useSelector((state) => state?.user?.isUserLogin);
  const movieDetails = useSelector((store) => store?.movies?.movieDetails);
  const user = useSelector((store) => store?.user?.userObject);

  const userId = user?.id;

  const isLiked = movieDetails?.userLikeData?.find((each) => each === userId);

  const isDisliked = movieDetails?.userDisLikeData?.find(
    (each) => each === userId
  );
  const isRated = movieDetails?.ratingUserData?.find((each) => each === userId);

  useEffect(() => {
    const fetchAndSetMovie = async () => {
      setPageLoading(true);
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
      setPageLoading(false);
    };

    fetchAndSetMovie();
  }, [movieId]);

  useEffect(() => {
    if (isLiked) {
      setLikeStatus("Liked");
    } else if (isDisliked) {
      setLikeStatus("Disliked");
    } else {
      setLikeStatus("Neutral");
    }
  }, [isLiked, isDisliked]);

  const handleLike = async () => {
    if (!isLoggedIn) return dispatch(openModel());

    if (likeStatus === "Liked") return;

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

      if (data.status === "Success" || data.status === "Updated") {
        setMovie((prevMovie) => {
          const updatedMovie = {
            ...prevMovie,
            like: (prevMovie.like || 0) + 1,
          };
          dispatch(addMovieDetails(updatedMovie));
          return updatedMovie;
        });
      }
    } catch (error) {
      console.error("Error liking the movie:", error);
      setLikeStatus("Neutral");
    } finally {
      setLikeLoading(false);
    }
  };

  const handleDislike = async () => {
    if (!isLoggedIn) return dispatch(openModel());

    if (likeStatus === "Disliked") return;

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

      if (data.status === "Success" || data.status === "Updated") {
        setMovie((prevMovie) => {
          const updatedMovie = {
            ...prevMovie,
            like: (prevMovie.like || 0) - 1,
          };
          dispatch(addMovieDetails(updatedMovie));
          return updatedMovie;
        });
      }
    } catch (error) {
      console.error("Error disliking the movie:", error);
      setLikeStatus("Neutral");
    } finally {
      setDislikeLoading(false);
    }
  };

  const renderLoading = () => (
    <div className="w-full bg-[#222222] px-12 flex flex-col justify-center gap-3 items-center min-h-[60vh]">
      <ClipLoader color="#36d7b7" size={50} loading={true} />
    </div>
  );
  if (pageLoading) return renderLoading();

  const renderRating = () => (
    <div className="w-full bg-[#222222] px-12 flex flex-col gap-3 items-center min-h-screen">
      <div className="text-white flex flex-row gap-6 items-start w-[60vw]">
        <div className="flex-grow flex flex-col justify-start items-start gap-2 ">
          <h1 className="text-3xl">{movie?.title}</h1>
          <p>{movieDetails?.releaseYear}</p>
        </div>

        <div className="flex flex-col justify-start items-start gap-2 ">
          <h1 className="text-xl uppercase tracking-widest text-[#fefefe]">
            Rating
          </h1>
          <div className="flex flex-row gap-2 items-center">
            <FaStar className="text-3xl text-yellow-500" />
            <div>
              <p className="text-2xl">
                {Math.round(movieDetails?.rating * 10) / 10}
              </p>
              <p>{movieDetails?.ratingCount + " ratings" || "vote count"}</p>
            </div>
          </div>
        </div>

        <div className="flex flex-col justify-start items-start gap-4 ">
          <h1 className="text-xl uppercase tracking-widest text-[#fefefe]">
            Your Rating
          </h1>
          {isRated ? (
            <div className="flex flex-row justify-center items-center gap-2 text-md text-green-500 font-bold cursor-not-allowed opacity-50">
              <FaRegStar />
              <p>Rating Submitted</p>
            </div>
          ) : (
            <div
              className="flex flex-row justify-center items-center gap-2 text-2xl text-green-500 font-bold cursor-pointer"
              onClick={() => dispatch(openModel())}
            >
              <FaRegStar />
              <p>Rate</p>
            </div>
          )}
        </div>
      </div>

      <div className="flex flex-row justify-center w-[60vw] relative">
        <img
          src={POSTER_CDN + movieDetails?.imageUrl}
          alt="movie poster"
          className="w-[40vw] rounded-lg"
        />
      </div>

      <div className="flex justify-between w-[60vw]">
        <div className="flex flex-row justify-start items-start gap-2 pt-4">
          {(movieDetails?.type ? JSON.parse(movieDetails?.type) : []).map(
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
            <p>{movieDetails?.like}</p>
          </div>

          {/* Like button */}
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

          {/* Dislike button */}
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
                  {dislikeLoading ? "Disliking..." : "Disliked"}
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
        <p className="text-white pr-12">{movieDetails?.description}</p>
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
