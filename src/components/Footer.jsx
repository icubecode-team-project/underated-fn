







import { Link } from "react-router-dom";
import Logo from "../assets/logo-icon.png";
import { FaFacebookF, FaTwitter, FaInstagram, FaYoutube } from "react-icons/fa";
import { FaArrowUpRightFromSquare } from "react-icons/fa6";
import { CiSquareCheck } from "react-icons/ci";
import { RxCrossCircled } from "react-icons/rx";

const Footer = () => {
  return (
    <footer className="relative mt-20 bg-[#222222] text-white text-lg overflow-hidden">
      <div className="max-w-7xl mx-auto px-8 py-20 flex flex-col items-center">
        
        {/* Logo Section */}
        <img src={Logo} alt="Logo" className="w-24 h-24 mb-12" />

        {/* Footer Links */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-16 mb-12 text-center">
          {/* Help Section */}
          <div>
            <h3 className="font-bold text-2xl mb-6">Help</h3>
            <ul className="space-y-4">
              <li><Link to="#" className="hover:text-gray-400 transition-all text-lg">Site</Link></li>
              <li><Link to="#" className="hover:text-gray-400 transition-all text-lg">underated.com</Link></li>
              <li><Link to="#" className="hover:text-gray-400 transition-all text-lg">Box Office Mojo</Link></li>
              <li><Link to="#" className="hover:text-gray-400 transition-all text-lg">License</Link></li>
            </ul>
          </div>

          {/* More Section */}
          <div>
            <h3 className="font-bold text-2xl mb-6">More</h3>
            <ul className="space-y-4">
              <li><Link to="#" className="hover:text-gray-400 transition-all text-lg">underated.com Pro</Link></li>
              <li><Link to="#" className="hover:text-gray-400 transition-all text-lg">Press Room</Link></li>
              <li><Link to="#" className="hover:text-gray-400 transition-all text-lg">Advertising</Link></li>
              <li><Link to="#" className="hover:text-gray-400 transition-all text-lg">Jobs</Link></li>
            </ul>
          </div>

          {/* Legal Section */}
          <div>
            <h3 className="font-bold text-2xl mb-6">Legal</h3>
            <ul className="space-y-4">
              <li><Link to="#" className="hover:text-gray-400 transition-all text-lg">Conditions of Use</Link></li>
              <li><Link to="#" className="hover:text-gray-400 transition-all text-lg">Privacy Policy</Link></li>
              <li><Link to="#" className="hover:text-gray-400 transition-all text-lg">Ads Privacy</Link></li>
              <li><Link to="#" className="hover:text-gray-400 transition-all text-lg">Choices</Link></li>
            </ul>
          </div>

          {/* Company Section (New Column) */}
          <div>
            <h3 className="font-bold text-2xl mb-6">Company</h3>
            <ul className="space-y-4">
              <li><Link to="#" className="hover:text-gray-400 transition-all text-lg">About Us</Link></li>
              <li><Link to="#" className="hover:text-gray-400 transition-all text-lg">Careers</Link></li>
              <li><Link to="#" className="hover:text-gray-400 transition-all text-lg">Our Team</Link></li>
              <li><Link to="#" className="hover:text-gray-400 transition-all text-lg">Partners</Link></li>
            </ul>
          </div>

          {/* Contact Section (New Column) */}
          <div>
            <h3 className="font-bold text-2xl mb-6">Contact</h3>
            <ul className="space-y-4">
              <li><Link to="#" className="hover:text-gray-400 transition-all text-lg">Support</Link></li>
              <li><Link to="#" className="hover:text-gray-400 transition-all text-lg">Contact Us</Link></li>
              <li><Link to="#" className="hover:text-gray-400 transition-all text-lg">Feedback</Link></li>
              <li><Link to="#" className="hover:text-gray-400 transition-all text-lg">Live Chat</Link></li>
            </ul>
          </div>
        </div>

        {/* Social Media Icons */}
        <div className="flex space-x-8 mb-8">
          <a href="#" className="hover:text-blue-400 text-3xl transition-all hover:scale-125">
            <FaFacebookF />
          </a>
          <a href="#" className="hover:text-blue-400 text-3xl transition-all hover:scale-125">
            <FaTwitter />
          </a>
          <a href="#" className="hover:text-blue-400 text-3xl transition-all hover:scale-125">
            <FaInstagram />
          </a>
          <a href="#" className="hover:text-red-500 text-3xl transition-all hover:scale-125">
            <FaYoutube />
          </a>
        </div>

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
            Your Ads Privacy Choices
          </a>
        </div>

        {/* Fourth Row */}
        <p className="mb-2 text-sm text-gray-400 flex items-center justify-center gap-2">
          an
          <img src={Logo} alt="Underated Logo" className="w-6 h-6" />
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
