import React, { useState } from "react";
import { assets } from "../assets/assets";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="w-full bg-black text-white px-4 sm:px-6 py-3 relative z-50">

      {/* TOP BAR */}
      <div className="flex items-center justify-between">

        {/* LEFT */}
        <div className="flex items-center gap-4">
          <img
            src={assets.music_logo}
            alt="logo"
            className="h-9 invert"
          />

          {/* Home (desktop only) */}
          <div className="hidden sm:flex bg-[#1f1f1f] p-2 rounded-full hover:bg-[#383737] cursor-pointer">
            <img className="w-8 h-8" src={assets.home_icon} alt="" />
          </div>
        </div>

        {/* DESKTOP MENU */}
        <div className="hidden sm:flex items-center gap-6 text-sm">
          <span className="text-gray-400 hover:text-white cursor-pointer">Premium</span>
          <span className="text-gray-400 hover:text-white cursor-pointer">Support</span>
          <span className="text-gray-400 hover:text-white cursor-pointer">Download</span>

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

        {/* MOBILE HAMBURGER */}
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

          <Link
            to="/"
            onClick={() => setMenuOpen(false)}
            className="block text-lg font-medium hover:text-purple-300"
          >
            Home
          </Link>

          <span className="block text-gray-300 hover:text-white">Premium</span>
          <span className="block text-gray-300 hover:text-white">Support</span>
          <span className="block text-gray-300 hover:text-white">Download</span>

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
