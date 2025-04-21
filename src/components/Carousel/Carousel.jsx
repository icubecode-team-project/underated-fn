import { useState, useEffect } from "react";
import {
  BsFillArrowRightCircleFill,
  BsFillArrowLeftCircleFill,
} from "react-icons/bs";

const Carousel = ({ slides }) => {
  let [current, setCurrent] = useState(0);

  // Auto slide effect
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 3000); // 3 seconds

    return () => clearInterval(interval); // Clean up on unmount
  }, [current]); // Reset interval on every slide change (optional)

  let previousSlide = () => {
    if (current === 0) setCurrent(slides.length - 1);
    else setCurrent(current - 1);
  };

  let nextSlide = () => {
    if (current === slides.length - 1) setCurrent(0);
    else setCurrent(current + 1);
  };

  return (
    <div className="overflow-hidden relative w-full h-full min-h-[300px]">
      <div
        className={`flex transition ease-out duration-40 min-w-full h-full min-h-[300px]`}
        style={{
          transform: `translateX(-${current * 100}%)`,
        }}
      >
        {slides.map((s, index) => {
          return (
            <img
              key={index}
              src={s}
              className="w-full h-full min-h-[300px] object-cover"
            />
          );
        })}
      </div>

      <div className="absolute top-0 h-full w-full justify-between items-center flex text-white px-10 text-3xl">
        <button onClick={previousSlide}>
          <BsFillArrowLeftCircleFill />
        </button>
        <button onClick={nextSlide}>
          <BsFillArrowRightCircleFill />
        </button>
      </div>

      <div className="absolute bottom-0 py-4 flex justify-center gap-3 w-full z-10 ">
        {slides.map((s, i) => {
          return (
            <div
              onClick={() => {
                setCurrent(i);
              }}
              key={"circle" + i}
              className={`rounded-full w-3 h-3 cursor-pointer ${
                i == current ? "bg-white" : "bg-gray-500"
              }`}
            ></div>
          );
        })}
      </div>
    </div>
  );
};

export default Carousel;
