import React from "react";
import { artistsData } from "../assets/assets";

const Artists = () => {
  return (
    <div className="w-full mt-10">
      
      
      <div className="flex items-center justify-between mb-5">
        <h1 className="text-2xl font-bold">Artist Spotlight</h1>
        <span className="text-sm text-gray-400 hover:text-white cursor-pointer">
          View all
        </span>
      </div>

      
      <div className="flex gap-6 overflow-x-auto no-scrollbar pb-3">
        {artistsData.map((artist) => (
          <div
            key={artist.id}
            className="min-w-[140px] flex flex-col items-center group cursor-pointer"
          >
            
            <div className="relative">
              <img
                src={artist.image}
                alt={artist.name}
                className="w-32 h-32 rounded-full object-cover 
                           group-hover:scale-105 transition duration-300"
              />

              
              <div
                className="absolute inset-0 rounded-full bg-black/50 
                           opacity-0 group-hover:opacity-100 
                           flex items-center justify-center transition"
              >
                <div className="w-12 h-12 bg-green-500 rounded-full 
                                flex items-center justify-center text-black">
                  ▶
                </div>
              </div>
            </div>

            
            <p className="mt-3 font-semibold text-center">
              {artist.name}
            </p>
            <p className="text-sm text-gray-400 text-center">
              {artist.genre}
            </p>
          </div>
        ))}
      </div>

    </div>
  );
};

export default Artists;
