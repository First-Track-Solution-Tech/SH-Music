import React, { useState } from "react";
import { artistsData } from "../assets/assets";
import { X } from "lucide-react";

const Artists = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <div className="w-full mt-10">

      <div className="flex items-center justify-between mb-5">
        <h1 className="text-2xl font-bold">Artist Spotlight</h1>

        <span
          onClick={() => setMobileOpen(true)}
          className="text-sm text-indigo-400 hover:text-white cursor-pointer sm:hidden"
        >
          View all
        </span>
      </div>

      <div className="hidden sm:flex gap-6 overflow-x-auto no-scrollbar pb-3">
        {artistsData.map((artist) => (
          <div
            key={artist.id}
            className="min-w-[140px] flex flex-col items-center group cursor-pointer"
          >
            <img
              src={artist.image}
              alt={artist.name}
              className="w-32 h-32 rounded-full object-cover group-hover:scale-105 transition"
            />
            <p className="mt-3 font-semibold text-center">
              {artist.name}
            </p>
            <p className="text-sm text-gray-400 text-center">
              {artist.genre}
            </p>
          </div>
        ))}
      </div>

      <div className="flex sm:hidden gap-4 overflow-x-auto no-scrollbar pb-3">
        {artistsData.slice(0, 5).map((artist) => (
          <div
            key={artist.id}
            className="min-w-[120px] flex flex-col items-center"
          >
            <img
              src={artist.image}
              alt={artist.name}
              className="w-24 h-24 rounded-full object-cover"
            />
            <p className="mt-2 text-sm text-center font-medium">
              {artist.name}
            </p>
          </div>
        ))}
      </div>

      {mobileOpen && (
        <div className="fixed inset-0 bg-gradient-to-b from-[#1a0025] via-[#3a0ca3] to-black z-50 sm:hidden p-6 overflow-y-auto">

          <div className="flex justify-between items-center mb-6">
            <h2 className="text-xl font-bold">All Artists</h2>
            <button
              onClick={() => setMobileOpen(false)}
              className="p-2 bg-white/10 rounded-full"
            >
              <X size={20} />
            </button>
          </div>

          <div className="grid grid-cols-2 gap-6">
            {artistsData.map((artist) => (
              <div
                key={artist.id}
                className="flex flex-col items-center"
              >
                <img
                  src={artist.image}
                  alt={artist.name}
                  className="w-28 h-28 rounded-full object-cover"
                />
                <p className="mt-3 font-semibold text-center">
                  {artist.name}
                </p>
                <p className="text-sm text-gray-300 text-center">
                  {artist.genre}
                </p>
              </div>
            ))}
          </div>

        </div>
      )}

    </div>
  );
};

export default Artists;
