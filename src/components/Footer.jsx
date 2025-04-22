




import { FaFacebook, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";
import { FaArrowUpRightFromSquare } from "react-icons/fa6"; // You already have this imported, just removing from "Press Room"
import Icon from "../assets/icon.png";
import { CiSquareCheck } from "react-icons/ci";
import { RxCrossCircled } from "react-icons/rx";


const Footer = () => {
  return (
    
      <footer className="bg-[#222222] text-[#fefefe] py-4 px-6 shadow-md">

      <div className="max-w-6xl mx-auto px-4">

        {/* Second Row - 5 items */}
        <div className="flex justify-center flex-wrap gap-6 mb-4 text-sm">
          <a href="#" className="hover:text-white flex items-center">
            Help
            <FaArrowUpRightFromSquare className="ml-1 text-xs" />
          </a>
          <a href="#" className="hover:text-white flex items-center">
            Site Index
            <FaArrowUpRightFromSquare className="ml-1 text-xs" />
          </a>
          <a href="#" className="hover:text-white flex items-center">
            UnderatedPro
            <FaArrowUpRightFromSquare className="ml-1 text-xs" />
          </a>
          <a href="#" className="hover:text-white flex items-center">
            Box Office Mojo
            <FaArrowUpRightFromSquare className="ml-1 text-xs" />
          </a>
          <a href="#" className="hover:text-white flex items-center">
            License Underated Data
            <FaArrowUpRightFromSquare className="ml-1 text-xs" />
          </a>
        </div>

        {/* Third Row - 6 items */}
        <div className="flex justify-center flex-wrap gap-6 mb-4 text-sm">
          <a href="#" className="hover:text-white flex items-center">
            Press Room
          </a>
          <a href="#" className="hover:text-white flex items-center">
            Advertising
            <FaArrowUpRightFromSquare className="ml-1 text-xs" />
          </a>
          <a href="#" className="hover:text-white flex items-center">
            Jobs
            <FaArrowUpRightFromSquare className="ml-1 text-xs" />
          </a>
          <a href="#" className="hover:text-white flex items-center">
            Conditions of Use
          </a>
          <a href="#" className="hover:text-white flex items-center">
            Privacy Policy
          </a>
          <a href="#" className="hover:text-white flex items-center">
  
  <span className="m-1 flex items-center justify-center border-[3px] border-blue-900 h-3.5 rounded-full ">
    <CiSquareCheck className="text-shadow-zinc-300 bg-cyan-500 text-lg  w-4 h-2.5" />
    <RxCrossCircled className="bg-[#222222] text-[#fefefe] text-lg w-3" h-1 />
  </span>
  Your Ads Privacy Choices
</a>


        </div>

        {/* Fourth Row */}
        <p className="mb-2 text-sm text-gray-400 flex items-center justify-center gap-2">an
  <img 
    src={Icon}
    alt="Underated Logo"
    className="w-6 h-6"
  />
  Company
</p>


        {/* Fifth Row */}
        <p className="text-xs text-gray-500">
          © 1990-{new Date().getFullYear()} by underated.com, Inc
        </p>

      </div>
    </footer>
  );
};

export default Footer;
