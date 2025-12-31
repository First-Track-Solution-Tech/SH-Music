import React from "react";
import { assets } from "../assets/assets";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-b from-[#1a082e] to-black text-gray-400 pt-12 mt-16">

      {/* TOP SECTION */}
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">

        {/* BRAND */}
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

        {/* COMPANY */}
        <div>
          <h4 className="text-white font-semibold mb-4">Company</h4>
          <ul className="space-y-2 text-sm">
            <li className="hover:text-white cursor-pointer">About</li>
            <li className="hover:text-white cursor-pointer">Jobs</li>
            <li className="hover:text-white cursor-pointer">For the Record</li>
          </ul>
        </div>

        {/* COMMUNITIES */}
        <div>
          <h4 className="text-white font-semibold mb-4">Communities</h4>
          <ul className="space-y-2 text-sm">
            <li className="hover:text-white cursor-pointer">For Artists</li>
            <li className="hover:text-white cursor-pointer">Developers</li>
            <li className="hover:text-white cursor-pointer">Advertising</li>
            <li className="hover:text-white cursor-pointer">Investors</li>
            <li className="hover:text-white cursor-pointer">Vendors</li>
          </ul>
        </div>

        {/* USEFUL LINKS */}
        <div>
          <h4 className="text-white font-semibold mb-4">Useful Links</h4>
          <ul className="space-y-2 text-sm">
            <li className="hover:text-white cursor-pointer">Support</li>
            <li className="hover:text-white cursor-pointer">Web Player</li>
            <li className="hover:text-white cursor-pointer">Mobile App</li>
          </ul>
        </div>
      </div>

      {/* DIVIDER */}
      <div className="border-t border-white/10 my-8"></div>

      {/* BOTTOM SECTION */}
      <div className="max-w-7xl mx-auto px-6 pb-8 flex flex-col sm:flex-row items-center justify-between gap-4">

        {/* COPYRIGHT */}
        <p className="text-xs">
          © {new Date().getFullYear()} MusicApp. All rights reserved.
        </p>

        {/* SOCIAL ICONS */}
        <div className="flex gap-4">
          <div className="w-9 h-9 flex items-center justify-center rounded-full bg-[#1f1f1f] hover:bg-purple-600 transition cursor-pointer">
            🌐
          </div>
          <div className="w-9 h-9 flex items-center justify-center rounded-full bg-[#1f1f1f] hover:bg-purple-600 transition cursor-pointer">
            📘
          </div>
          <div className="w-9 h-9 flex items-center justify-center rounded-full bg-[#1f1f1f] hover:bg-purple-600 transition cursor-pointer">
            🐦
          </div>
          <div className="w-9 h-9 flex items-center justify-center rounded-full bg-[#1f1f1f] hover:bg-purple-600 transition cursor-pointer">
            📸
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
