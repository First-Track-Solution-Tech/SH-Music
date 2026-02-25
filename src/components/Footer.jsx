import React, { useState } from "react";
import { assets } from "../assets/assets";
import { Link } from "react-router-dom";
import Terms from "../pages/Terms";

const Footer = () => {
  const [showTerms, setShowTerms] = useState(false);

  return (
    <>
      <footer className="bg-gradient-to-r from-[#1a002e] via-[#240046] to-[#3c096c] text-gray-400 pt-12 mt-18">

        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">

          <div>
            <img
              src={assets.music_logo}
              alt="logo"
              className="h-22 mb-1"
            />
            <p className="text-xl mb-3 text-amber-100">SH Music</p>
            <p className="text-sm leading-relaxed">
              Discover, stream, and share a constantly expanding mix of music from
              emerging and major artists around the world.
            </p>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Company</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/about" className="hover:text-white transition">
                  About
                </Link>
              </li>
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
            <h4 className="text-white font-semibold mb-4">Support</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/support" className="hover:text-white transition">
                  Support
                </Link>
              </li>
              <li>
                <Link to="/faq" className="hover:text-white transition">
                  FAQ
                </Link>
              </li>
              <li>
                <Link to="/refund" className="hover:text-white transition">
                  Refund & Cancellation
                </Link>
              </li>
              <li>
                <button
                  onClick={() => setShowTerms(true)}
                  className="hover:text-white transition"
                >
                  Terms & Conditions
                </button>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 my-8"></div>

        <div className="max-w-7xl mx-auto px-6 pb-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs">
  SH Music, Copyright © {new Date().getFullYear()}, First Track Solution Technologies. All rights reserved.
</p>
        </div>
      </footer>

      <Terms
        isOpen={showTerms}
        onClose={() => setShowTerms(false)}
      />
    </>
  );
};

export default Footer;
