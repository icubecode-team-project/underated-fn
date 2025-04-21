import React from 'react';
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

export default Footer;

