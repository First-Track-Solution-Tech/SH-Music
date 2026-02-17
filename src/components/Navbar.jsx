import React, { useState } from "react";
import { assets } from "../assets/assets";
import { Link } from "react-router-dom";
import { Search } from "lucide-react";
const Navbar = ({ onSearchClick }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="w-full bg-gradient-to-r from-[#1a0025] via-[#3a0ca3] to-[#7209b7] text-white px-4 sm:px-6 h-20 flex items-center relative z-50">

      
      <div className="flex items-center justify-between w-full">

        
        <div className="flex items-center gap-4">
          <img
            src={assets.music_logo}
            alt="logo1"
            className="h-20 w-auto object-contain"
          />
        </div>

        
        <div className="hidden sm:flex items-center gap-6 text-sm">
          <Link
            to="/"
            className="text-gray-400 hover:text-white transition"
          >
            Home
          </Link>

          <Link
            to="/premium"
            className="text-gray-400 hover:text-white transition"
          >
            Premium
          </Link>

          <Link
            to="/support"
            className="text-gray-400 hover:text-white transition"
          >
            Support
          </Link>

          <Link
            to="/download"
            className="text-gray-400 hover:text-white transition"
          >
            Download
          </Link>
          <button
  onClick={onSearchClick}
  className="text-gray-300 hover:text-white transition"
>
  <Search size={18} />
</button>


          <div className="h-6 w-px bg-gray-700"></div>

          <Link
            to="/register"
            className="bg-white text-black px-4 py-1.5 rounded-full font-semibold hover:scale-105 transition"
          >
            Register
          </Link>

          <Link
            to="/sign-in"
            className="bg-white text-black px-4 py-1.5 rounded-full font-semibold hover:scale-105 transition"
          >
            Sign In
          </Link>
        </div>

        {/* MOBILE BUTTON */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="sm:hidden w-10 h-10 flex items-center justify-center rounded-full bg-[#1f1f1f] hover:bg-[#383737]"
        >
          <span className="text-xl font-bold">
            {menuOpen ? "✕" : "☰"}
          </span>
        </button>
      </div>

      {/* MOBILE MENU */}
      {menuOpen && (
        <div className="sm:hidden absolute top-full left-0 w-full bg-gradient-to-b from-[#2a0f45] to-black border-t border-white/10 px-6 py-6 space-y-4">
<button
  onClick={() => {
    setMenuOpen(false);
    onSearchClick();
  }}
  className="block text-lg font-medium hover:text-purple-300"
>
  Search
</button>

          <Link
            to="/"
            onClick={() => setMenuOpen(false)}
            className="block text-lg font-medium hover:text-purple-300"
          >
            Home
          </Link>

          <Link
            to="/premium"
            onClick={() => setMenuOpen(false)}
            className="block text-lg font-medium hover:text-purple-300"
          >
            Premium
          </Link>

          <Link
            to="/support"
            onClick={() => setMenuOpen(false)}
            className="block text-lg font-medium hover:text-purple-300"
          >
            Support
          </Link>

          <Link
            to="/download"
            onClick={() => setMenuOpen(false)}
            className="block text-lg font-medium hover:text-purple-300"
          >
            Download
          </Link>

          <div className="h-px bg-white/10 my-4"></div>

          <Link
            to="/register"
            onClick={() => setMenuOpen(false)}
            className="block w-full text-center bg-white text-black py-2 rounded-full font-semibold"
          >
            Register
          </Link>

          <Link
            to="/sign-in"
            onClick={() => setMenuOpen(false)}
            className="block w-full text-center border border-white py-2 rounded-full font-semibold"
          >
            Sign In
          </Link>

        </div>
      )}
    </nav>
  );
};

export default Navbar;
