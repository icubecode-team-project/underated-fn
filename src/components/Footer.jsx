/*import React from 'react';
import { Link } from 'react-router-dom';
 
import Logo from '../assets/logo-icon.png';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-400 text-sm mt-10">
      <div className="max-w-7xl mx-auto p-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">

          <div>
            <h3 className="text-white font-semibold mb-2">Help</h3>
            <ul className="space-y-1">
              <li><Link to="#" className="hover:text-white">Site</Link></li>
              <li><Link to="#" className="hover:text-white">underated.com </Link></li>
              <li><Link to="#" className="hover:text-white">Box Office Mojo</Link></li>
              <li><Link to="#" className="hover:text-white">License</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-2">More</h3>
            <ul className="space-y-1">
              <li><Link to="#" className="hover:text-white">underated.com Pro</Link></li>
              <li><Link to="#" className="hover:text-white">Press Room</Link></li>
              <li><Link to="#" className="hover:text-white">Advertising</Link></li>
              <li><Link to="#" className="hover:text-white">Jobs</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-2">Legal</h3>
            <ul className="space-y-1">
              <li><Link to="#" className="hover:text-white">Conditions of Use</Link></li>
              <li><Link to="#" className="hover:text-white">Privacy Policy</Link></li>
              <li><Link to="#" className="hover:text-white">Your Ads Privacy Policy</Link></li>
              <li><Link to="#" className="hover:text-white">Choices</Link></li>
            </ul>
          </div>

          {/*<div className="flex flex-col justify-center">
            <p className="text-white font-semibold">An Amazon Company</p>
            <p className="mt-1 text-xs">© 1990–2025 by underated.com, Inc.</p>
          </div>*/}
         

<div className="flex flex-col justify-center items-center">
  <img src={Logo} alt="Company Logo" className="w-20 h-auto mb-2" />
  <p className="mt-1 text-xs text-white">© 1990–2025 by underated.com, Inc.</p>
</div>


        </div>
      </div>
    </footer>
  );
};

export default Footer;*/





import { Link } from "react-router-dom";
import Logo from "../assets/logo-icon.png";
import { FaFacebookF, FaTwitter, FaInstagram, FaYoutube } from "react-icons/fa";

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
          <a href="#" className="hover:text-sky-400 text-3xl transition-all hover:scale-125">
            <FaTwitter />
          </a>
          <a href="#" className="hover:text-pink-500 text-3xl transition-all hover:scale-125">
            <FaInstagram />
          </a>
          <a href="#" className="hover:text-red-500 text-3xl transition-all hover:scale-125">
            <FaYoutube />
          </a>
        </div>

        {/* Copyright Text */}
        <p className="text-center text-gray-400 text-lg">
          © {new Date().getFullYear()} Underated. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;

