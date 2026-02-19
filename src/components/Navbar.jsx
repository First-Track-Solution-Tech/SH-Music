import React from "react";
import { Link } from "react-router-dom";
import { Search } from "lucide-react";
import { assets } from "../assets/assets";

const Navbar = ({ onSearchClick }) => {
  return (
    <nav className="fixed top-0 left-0 w-full h-16 z-50 bg-gradient-to-r from-[#1a0025] via-[#3a0ca3] to-[#7209b7] text-white px-6 flex items-center justify-between">

      <Link to="/" className="flex items-center">
        <img
          src={assets.music_logo}
          alt="logo"
          className="h-18 object-contain"
        />
      </Link>

      <div className="hidden sm:flex items-center gap-6 text-sm">
        <Link to="/" className="hover:text-white">Home</Link>
        <Link to="/premium" className="hover:text-white">Premium</Link>
        <Link to="/support" className="hover:text-white">Support</Link>
        <Link to="/download" className="hover:text-white">Download</Link>

        <button
  onClick={onSearchClick}
  className="text-gray-300 hover:text-white transition"
>
  <Search size={18} />
</button>

        <Link
          to="/sign-in"
          className="bg-white text-black px-4 py-1.5 rounded-full font-semibold"
        >
          Sign In
        </Link>
      </div>

      <div className="sm:hidden">
        <button
  onClick={onSearchClick}
  className="text-gray-300 hover:text-white transition"
>
  <Search size={18} />
</button>
      </div>

    </nav>
  );
};

export default Navbar;
