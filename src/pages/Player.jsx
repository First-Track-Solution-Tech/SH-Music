import React, { useRef, useState } from "react";
import { useLocation } from "react-router-dom";

const Player = () => {

  const location = useLocation();
  const { image, name, desc } = location.state || {};

  const audioRef = useRef(null);
  const [playing, setPlaying] = useState(false);

  const togglePlay = () => {
    if (playing) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setPlaying(!playing);
  };

  return (
    <div className="min-h-screen bg-black text-white flex flex-col items-center">

      {/* SONG IMAGE */}
      <div className="w-full flex justify-center pt-10">
        <img
          src={image}
          alt=""
          className="w-[260px] h-[260px] rounded-xl object-cover shadow-lg"
        />
      </div>

      {/* SONG INFO */}
      <div className="text-center mt-6">
        <h1 className="text-xl font-bold">{name}</h1>
        <p className="text-gray-400">{desc}</p>
      </div>

      {/* PLAYER CONTROLS */}
      <div className="mt-10 flex items-center gap-8">

        <button className="text-2xl">⏮</button>

        <button
          onClick={togglePlay}
          className="bg-white text-black w-14 h-14 rounded-full text-xl"
        >
          {playing ? "⏸" : "▶"}
        </button>

        <button className="text-2xl">⏭</button>

      </div>

      {/* AUDIO */}
      <audio ref={audioRef} src="/songs/song.mp3"></audio>

    </div>
  );
};

export default Player;