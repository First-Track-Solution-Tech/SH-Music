import React from "react";

import { useParams } from "react-router-dom";
import { aestheticData, assets } from "../assets/assets";

const Aesthetic_display = () => {
  const { id } = useParams();
  const aesthetic = aestheticData.find(item => item.id === Number(id));

if (!aesthetic) {
  return <div className="text-white p-6">Aesthetic not found</div>;
}

  return (
    <>
      

      <div
        className="p-6"
        style={{
          background: `linear-gradient(180deg, #3b1d5a 0%, #121212 40%)`
        }}
      >
       
        <div className="mt-10 flex gap-8 flex-col md:flex-row md:items-end">
          <img className="w-48 rounded" src={aesthetic.image} />
          <div>
            <p>Aesthetic Playlist</p>
            <h3 className="text-5xl font-bold">{aesthetic.name}</h3>
            <p>{aesthetic.desc}</p>
          </div>
        </div>

        
        <div className="grid grid-cols-3 mt-10 mb-5">
          <p># Title</p>
          <p>Aesthetic</p>
          <p className="flex items-center gap-2">
            Duration <img src={assets.clock_icon} className="w-4" />
          </p>
        </div>

        <hr />

        {/* songs-mapping  */}
        {aesthetic.songs.map((song, index) => (
          <div
            key={song.id}
            className="grid grid-cols-3 p-2 hover:bg-[#1f1f1f]"
          >
            <p>
              <b>{index + 1}</b>
              <img src={song.image} className="inline w-10 mx-4" />
              {song.name}
            </p>
            <p>{aesthetic.name}</p>
            <p>{song.duration}</p>
          </div>
        ))}
      </div>
    </>
  );
};

export default Aesthetic_display;
