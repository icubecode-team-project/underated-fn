import Carousel from "../Carousel/carousel";

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
      <div className="w-[90%] md:w-[80%] m-auto min-h-[300px]">
        <Carousel slides={slides} />
      </div>
    </div>
  );
};

export default ImageSlider;
