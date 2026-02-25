import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Eye, EyeOff } from "lucide-react";

const countryCodes = [
  { code: "+91", country: "India" },
  { code: "+1", country: "USA / Canada" },
  { code: "+44", country: "UK" },
  { code: "+61", country: "Australia" },
  { code: "+971", country: "UAE" },
  { code: "+81", country: "Japan" },
  { code: "+49", country: "Germany" },
  { code: "+33", country: "France" },
  { code: "+86", country: "China" },
  { code: "+7", country: "Russia" },
];

const Register = () => {
  const [selectedCode, setSelectedCode] = useState("+91");
  const [showPassword, setShowPassword] = useState(false);
const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#0f0f0f] via-[#111827] to-[#1e1b4b] px-4">
      
      <div className="w-full max-w-md bg-[#181818]/80 backdrop-blur-xl border border-gray-800 rounded-2xl p-8 shadow-2xl">

        <h2 className="text-2xl font-semibold text-white text-center mb-2">
          Create Your Account
        </h2>
        <p className="text-gray-400 text-sm text-center mb-6">
          Join SH Music and start your journey 🎧
        </p>

        <div className="space-y-4">
           <input
            type="text"
            placeholder="Full Name"
            className="w-full bg-[#242424] text-white placeholder-gray-500 px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 transition"
          />
          
          

          
          <div className="flex bg-[#242424] rounded-lg overflow-hidden focus-within:ring-2 focus-within:ring-purple-500 transition">

            
            <select
              value={selectedCode}
              onChange={(e) => setSelectedCode(e.target.value)}
              className="bg-[#242424] text-white px-3 outline-none border-r border-gray-700"
            >
              {countryCodes.map((item, index) => (
                <option key={index} value={item.code}>
                  {item.code} ({item.country})
                </option>
              ))}
            </select>

            
            <input
              type="tel"
              placeholder="Phone Number"
              pattern="[0-9]{10}"
              className="w-full bg-[#242424] text-white placeholder-gray-500 px-4 py-3 outline-none"
            />
          </div>

          <input
            type="email"
            placeholder="Email"
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

          <div className="relative">
  <input
    type={showConfirmPassword ? "text" : "password"}
    placeholder="Confirm Password"
    className="w-full bg-[#242424] text-white placeholder-gray-500 px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 transition pr-12"
  />
  <button
    type="button"
    onClick={() => setShowConfirmPassword(!showConfirmPassword)}
    className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-white"
  >
    {showConfirmPassword ? <EyeOff size={18} /> : <Eye size={18} />}
  </button>
</div>

        </div>

        <button className="w-full mt-6 bg-gradient-to-r from-purple-500 via-indigo-500 to-blue-500 hover:from-purple-400 hover:via-indigo-400 hover:to-blue-400 text-white font-semibold py-3 rounded-full transition duration-300 hover:shadow-[0_0_25px_rgba(139,92,246,0.4)]">
          Create Account
        </button>

        <p className="text-sm text-gray-400 mt-6 text-center">
          Already have an account?{" "}
          <Link to="/sign-in" className="text-white hover:underline">
            Sign in
          </Link>
        </p>

      </div>
    </div>
  );
};

export default Register;