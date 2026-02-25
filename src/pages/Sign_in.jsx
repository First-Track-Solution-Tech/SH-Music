import React, {useState} from "react";
import { Link } from "react-router-dom";
import { Eye, EyeOff } from "lucide-react";

const Sign_in = () => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#0f0f0f] via-[#111827] to-[#1e1b4b] px-4">
      <div className="w-full max-w-md bg-[#181818]/80 backdrop-blur-xl border border-gray-800 rounded-2xl p-8 shadow-2xl">

        <h2 className="text-2xl font-semibold text-white text-center mb-2">
          Welcome Back
        </h2>

        <p className="text-gray-400 text-sm text-center mb-6">
          Sign in to continue your music journey 🎧
        </p>

        

        <div className="space-y-4">
          <input
            type="text"
            placeholder="Email or Phone"
            className="w-full bg-[#242424] text-white placeholder-gray-500 px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 transition"
          />

          <div className="relative">
  <input
    type={showPassword ? "text" : "password"}
    placeholder="Password"
    className="w-full bg-[#242424] text-white placeholder-gray-500 px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 transition pr-12"
  />
  <button
    type="button"
    onClick={() => setShowPassword(!showPassword)}
    className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-white"
  >
    {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
  </button>
</div>
        </div>

        <div className="text-right mt-3">
          <Link to="/forgot-password" className="text-sm text-purple-400 hover:underline">
            Forgot Password?
          </Link>
        </div>

        <button className="w-full mt-6 bg-gradient-to-r from-purple-500 via-indigo-500 to-blue-500 hover:from-purple-400 hover:via-indigo-400 hover:to-blue-400 text-white font-semibold py-3 rounded-full transition duration-300 hover:shadow-[0_0_25px_rgba(139,92,246,0.4)]">
          Sign In
        </button>

        <p className="text-sm text-gray-400 mt-6 text-center">
          Don’t have an account?{" "}
          <Link to="/register" className="text-white hover:underline">
            Register
          </Link>
        </p>
  <div className="flex items-center my-6">
          <div className="flex-grow h-px bg-gray-700"></div>
          <span className="px-3 text-gray-400 text-sm">OR</span>
          <div className="flex-grow h-px bg-gray-700"></div>
        </div>
  <button className="w-full bg-white text-black font-medium py-3 rounded-lg hover:bg-gray-200 transition duration-300">
          Continue with Google
        </button>

        
      </div>
    </div>
  );
};

export default Sign_in;
