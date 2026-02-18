import React from "react";
import { assets } from "../assets/assets"
import { Link } from "react-router-dom"

const Footer = () => {
  return (
    <footer className="bg-gradient-to-b from-[#1a082e] to-black text-gray-400 pt-12 mt-16">

      
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">

       
        <div>
          <img
            src={assets.music_logo}
            alt="logo"
            className="h-10 mb-4 invert"
          />
          <p className="text-sm leading-relaxed">
            Discover, stream, and share a constantly expanding mix of music from
            emerging and major artists around the world.
          </p>
        </div>

       
        <div>
          <h4 className="text-white font-semibold mb-4">Company</h4>
          <ul className="space-y-2 text-sm">
           <li> <Link to='/about' className="hover:text-white cursor-pointer">About</Link></li>
            <li className="hover:text-white cursor-pointer">Jobs</li>
            <li className="hover:text-white cursor-pointer">For the Record</li>
          </ul>
        </div>

        
        <div>
  <h4 className="text-white font-semibold mb-4">Communities</h4>

  <ul className="space-y-2 text-sm text-gray-400">
    <li>
      <Link to="/artist" className="hover:text-white transition">
        For Artists
      </Link>
    </li>

    <li>
      <Link to="/developer" className="hover:text-white transition">
        Developer
      </Link>
    </li>

    <li>
      <Link to="/advertise" className="hover:text-white transition">
        Advertising
      </Link>
    </li>


    <li>
      <Link to="/vendor" className="hover:text-white transition">
        Vendors
      </Link>
    </li>
  </ul>
</div>

        
        <div>
          <h4 className="text-white font-semibold mb-4">Useful Links</h4>
          <ul className="space-y-2 text-sm">
            <li> <Link to="support" className="hover:text-white transition">
        Support
      </Link></li>
            <li className="hover:text-white cursor-pointer">Web Player</li>
            <li className="hover:text-white cursor-pointer">Mobile App</li>
          </ul>
        </div>
      </div>

      
      <div className="border-t border-white/10 my-8"></div>

     
      <div className="max-w-7xl mx-auto px-6 pb-8 flex flex-col sm:flex-row items-center justify-between gap-4">

        
        <p className="text-xs">
          © {new Date().getFullYear()} SH.Music. All rights reserved.
        </p>


        
      </div>
    </footer>
  );
};

export default Footer;
