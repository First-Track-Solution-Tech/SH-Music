import React from "react";
import { NavLink } from "react-router-dom";
import {
  Home,
  Crown,
  Headphones,
  Download,
  User
} from "lucide-react";

const MobileBottomNav = () => {
  return (
    <div className="fixed bottom-0 left-0 w-full h-10 bg-black/80 backdrop-blur-md border-t border-white/10 flex justify-around items-center sm:hidden z-50">

      <NavLink
        to="/"
        className={({ isActive }) =>
          `flex flex-col items-center text-xs ${
            isActive ? "text-pink-500" : "text-gray-400"
          }`
        }
      >
        <Home size={20} />
        
      </NavLink>

      <NavLink
        to="/premium"
        className={({ isActive }) =>
          `flex flex-col items-center text-xs ${
            isActive ? "text-yellow-400" : "text-gray-400"
          }`
        }
      >
        <Crown size={20} />
        Premium
      </NavLink>

      <NavLink
        to="/support"
        className={({ isActive }) =>
          `flex flex-col items-center text-xs ${
            isActive ? "text-purple-400" : "text-gray-400"
          }`
        }
      >
        <Headphones size={20} />
        Support
      </NavLink>

      <NavLink
        to="/download"
        className={({ isActive }) =>
          `flex flex-col items-center text-xs ${
            isActive ? "text-green-400" : "text-gray-400"
          }`
        }
      >
        <Download size={20} />
        Download
      </NavLink>

      <NavLink
        to="/sign-in"
        className={({ isActive }) =>
          `flex flex-col items-center text-xs ${
            isActive ? "text-blue-400" : "text-gray-400"
          }`
        }
      >
        <User size={20} />
        Account
      </NavLink>

    </div>
  );
};

export default MobileBottomNav;
