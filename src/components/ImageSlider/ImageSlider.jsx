import React from "react";
import Carousel from "../Carousel/Carousel";

const ImageSlider = () => {
  let slides = [
    "https://wallpaperaccess.com/full/1077150.jpg",
    "https://wallpaperaccess.com/full/384340.jpg",
    "https://wallpaperaccess.com/full/790933.jpg",
    "https://wallpaperaccess.com/full/5180188.jpg",
    "https://wallpaperaccess.com/full/329583.jpg",
  ];

  return (
    <div className=" bg-[#222222]">
      <div className="w-[60%] m-auto min-h-[300px]">
        <Carousel slides={slides} />
      </div>
    </div>
  );
};

export default ImageSlider;
