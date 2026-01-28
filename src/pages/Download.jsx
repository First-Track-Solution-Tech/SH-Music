import React from "react";
import {
  FaWindows,
  FaApple,
  FaAndroid,
  FaGlobe
} from "react-icons/fa";

const Download = () => {
  return (
    <div className="w-full min-h-screen bg-[#121212] text-white px-6 py-12">
      
      
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        
        
        <div>
          <p className="text-sm text-gray-400 mb-3">Download our app</p>

          <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
            Music without limits. <br /> Anytime, anywhere.
          </h1>

          <p className="text-gray-300 max-w-md mb-8">
            Stream your favorite tracks, download playlists, and enjoy
            high-quality audio across all your devices.
          </p>

          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-md">
            <DownloadButton icon={<FaWindows />} text="Download for Windows" />
            <DownloadButton icon={<FaApple />} text="Download for macOS" />
            <DownloadButton icon={<FaAndroid />} text="Get it on Android" />
            <DownloadButton icon={<FaGlobe />} text="Use Web Player" />
          </div>
        </div>

       
        <div className="relative">
          <div className="absolute inset-0 bg-gradient-to-br from-green-500/20 via-blue-500/20 to-purple-500/20 rounded-3xl blur-3xl"></div>
          
          <div className="relative bg-[#1b1b1b] rounded-3xl p-8 shadow-xl">
            <p className="text-sm text-gray-400 mb-2">Now Playing</p>
            <h3 className="text-xl font-semibold mb-4">Your Favorite Mix</h3>

            <div className="h-40 rounded-xl bg-gradient-to-br from-green-400 via-blue-400 to-purple-500 opacity-80"></div>

            <p className="text-gray-300 text-sm mt-4">
              Seamless playback • Offline mode • HQ sound
            </p>
          </div>
        </div>

      </div>

      
      <div className="max-w-5xl mx-auto mt-20 grid grid-cols-2 md:grid-cols-4 gap-6 text-center text-gray-300">
        <Feature text="🎧 Offline Music" />
        <Feature text="⚡ Fast Streaming" />
        <Feature text="🔊 High Quality Audio" />
        <Feature text="🌙 No Distractions" />
      </div>

    </div>
  );
};

const DownloadButton = ({ icon, text }) => {
  return (
    <button className="flex items-center gap-3 px-5 py-3 rounded-full bg-[#1f1f1f] hover:bg-[#2a2a2a] transition hover:scale-[1.02]">
      <span className="text-lg">{icon}</span>
      <span className="text-sm font-medium">{text}</span>
    </button>
  );
};

const Feature = ({ text }) => {
  return (
    <div className="text-sm opacity-80">
      {text}
    </div>
  );
};

export default Download;
