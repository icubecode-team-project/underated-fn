import React, { useEffect, useRef, useState } from "react";
import { FaRegStar, FaStar } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { closeModel } from "../../utils/modelSlice";
import ReactDOM from "react-dom";

const RatingModel = () => {
  const dispatch = useDispatch();
  const modalRef = useRef();
  const movieDetails = useSelector((store) => store?.movies?.movieDetails);
  const showModel = useSelector((store) => store?.model?.showModel);

  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);

  const isLoggedIn = useSelector((store) => store?.user?.isUserLogin);

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

  return ReactDOM.createPortal(
    <div className="fixed top-0 left-0 w-full h-full bg-black/50 flex justify-center items-center z-50">
      {/* Star outside the modal box */}
      <div className="absolute top-38 z-2">
        <FaStar className="text-blue-500 text-6xl drop-shadow-md" />
      </div>

      {/* Modal box */}

      <div
        ref={modalRef}
        className="bg-[#222222] pt-16 pb-6 px-6 rounded-lg shadow-lg w-[90%] max-w-md relative flex flex-col justify-center items-center min-h-54"
      >
        {isLoggedIn ? (
          <div className="flex flex-col justify-center items-center">
            <h2 className="text-xl text-white font-bold mb-4">
              Rate: {movieDetails.title}
            </h2>

            <div className="flex justify-center items-center gap-2">
              {[1, 2, 3, 4, 5].map((each) => (
                <span
                  key={each}
                  onClick={() => setRating(each)}
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
        ) : (
          <h1 className="text-yellow-500 text-3xl  font-bold text-center pb-10">
            Please log in to rate this movie
          </h1>
        )}
      </div>
    </div>,
    document.getElementById("portal")
  );
};

export default RatingModel;
