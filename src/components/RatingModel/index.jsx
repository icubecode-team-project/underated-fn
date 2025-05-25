import React, { useEffect, useRef, useState } from "react";
import { FaRegStar, FaStar } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { closeModel } from "../../utils/modelSlice";
import ReactDOM from "react-dom";
import { addMovieDetails, addMoviesList } from "../../utils/movieSlice";
import { ClipLoader } from "react-spinners";

const RatingModel = () => {
  const [isLoading, setIsLoading] = useState(false);

  const dispatch = useDispatch();
  const modalRef = useRef();
  const movieDetails = useSelector((store) => store?.movies?.movieDetails);
  const moviesList = useSelector((store) => store?.movies?.moviesList);
  const showModel = useSelector((store) => store?.model?.showModel);

  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);

  const isLoggedIn = useSelector((store) => store?.user?.isUserLogin);
  const userId = useSelector((store) => store?.user?.userObject?.id);

  const movieId = movieDetails?._id;

  const handleRating = async (value) => {
    try {
      setIsLoading(true);
      setRating(value);
      const url = `${import.meta.env.VITE_BACKEND_URI}/api/v1/movie/rate`;
      const options = {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include",
        body: JSON.stringify({ movieId, rating: value }),
      };

      const response = await fetch(url, options);

      const data = await response.json();

      if (response.ok) {
        dispatch(closeModel());

        const updatedMovie = {
          ...movieDetails,
          rating:
            (movieDetails.rating * movieDetails.ratingCount + value) /
            (movieDetails.ratingCount + 1),
          ratingUserData: [userId, ...movieDetails.ratingUserData],
          ratingCount: movieDetails.ratingCount + 1,
        };

        // Update movieDetails in the store
        dispatch(addMovieDetails(updatedMovie));

        // Update only the matching movie in moviesList
        const updatedMoviesList = moviesList.map((movie) =>
          movie._id === movieId ? updatedMovie : movie
        );

        // Update moviesList in the store
        dispatch(addMoviesList(updatedMoviesList));
      } else {
        console.error("Error submitting rating:", data);
      }
    } catch (error) {
      console.error("Error in handleRating:", error);
    } finally {
      setIsLoading(false);
    }
  };

  // Close on outside click
  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        dispatch(closeModel());
      }
    };

    const handleEsc = (event) => {
      if (event.key === "Escape") {
        dispatch(closeModel());
      }
    };

    document.addEventListener("mousedown", handleOutsideClick);
    document.addEventListener("keydown", handleEsc);
    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
      document.removeEventListener("keydown", handleEsc);
    };
  }, [dispatch]);

  if (!movieDetails || !showModel) return null;

  const renderRatingStars = () => {
    return (
      <div className="flex flex-col justify-center items-center">
        <h2 className="text-xl text-white font-bold mb-4">
          Rate: {movieDetails.title}
        </h2>

        <div className="flex justify-center items-center gap-2">
          {[1, 2, 3, 4, 5].map((each) => (
            <span
              key={each}
              onClick={() => handleRating(each)}
              className="cursor-pointer"
              onMouseEnter={() => setHover(each)}
              onMouseLeave={() => setHover(0)}
            >
              {(hover || rating) >= each ? (
                <FaStar className="text-yellow-400 text-2xl cursor-pointer" />
              ) : (
                <FaRegStar className="text-white text-2xl cursor-pointer" />
              )}
            </span>
          ))}
        </div>

        <button
          className="mt-6 bg-gray-500 hover:bg-blue-500 text-white px-20 py-2 rounded"
          onClick={() => dispatch(closeModel())}
        >
          Close
        </button>
      </div>
    );
  };

  const renderLoading = () => (
    <div className="w-full bg-[#222222] px-12 flex flex-col justify-center gap-3 items-center ">
      <ClipLoader color="#36d7b7" size={50} loading={true} />
    </div>
  );

  return ReactDOM.createPortal(
    <div className="fixed top-0 left-0 w-full h-full bg-black/50 flex justify-center items-center z-50">
      {/* Star outside the modal box */}
      <div className="absolute top-46 md:top-46 z-2">
        <FaStar className="text-blue-500 text-6xl drop-shadow-md" />
      </div>

      {/* Modal box */}

      <div
        ref={modalRef}
        className="bg-[#222222]  rounded-lg shadow-lg w-[90%] max-w-md relative flex flex-col justify-center items-center min-h-54"
      >
        {isLoggedIn ? (
          isLoading ? (
            renderLoading()
          ) : (
            renderRatingStars()
          )
        ) : (
          <h1 className="text-yellow-500 text-3xl  font-bold text-center pb-10">
            Please log in to Like or rate this movie
          </h1>
        )}
      </div>
    </div>,
    document.getElementById("portal")
  );
};

export default RatingModel;
