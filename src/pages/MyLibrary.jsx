import React, { useEffect, useState } from "react";
import { songsData } from "../assets/assets";
import { FaHeart, FaDownload, FaMusic } from "react-icons/fa";

const MyLibrary = () => {
  const [activeTab, setActiveTab] = useState("saved");
  const [savedSongs, setSavedSongs] = useState([]);
  const [downloadedSongs, setDownloadedSongs] = useState([]);

  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem("savedSongs")) || [];
    const downloaded = JSON.parse(localStorage.getItem("downloadedSongs")) || [];
    setSavedSongs(saved);
    setDownloadedSongs(downloaded);
  }, []);

  const toggleSave = (song) => {
    let updated;
    if (savedSongs.find((s) => s.id === song.id)) {
      updated = savedSongs.filter((s) => s.id !== song.id);
    } else {
      updated = [...savedSongs, song];
    }
    setSavedSongs(updated);
    localStorage.setItem("savedSongs", JSON.stringify(updated));
  };

  const toggleDownload = (song) => {
    let updated;
    if (downloadedSongs.find((s) => s.id === song.id)) {
      updated = downloadedSongs.filter((s) => s.id !== song.id);
    } else {
      updated = [...downloadedSongs, song];
    }
    setDownloadedSongs(updated);
    localStorage.setItem("downloadedSongs", JSON.stringify(updated));
  };

  const getSongs = () => {
    if (activeTab === "saved") return savedSongs;
    if (activeTab === "downloaded") return downloadedSongs;
    return songsData;
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#12001f] via-[#1a082e] to-black text-white px-6 py-12">

      <div className="max-w-7xl mx-auto">

        {/* Glass Header */}
        <div className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-3xl p-10 shadow-2xl">

          <h1 className="text-5xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
            My Library
          </h1>

          <div className="flex gap-10 text-gray-300">
            <div>
              <p className="text-2xl font-semibold">{savedSongs.length}</p>
              <p className="text-sm">Saved</p>
            </div>
            <div>
              <p className="text-2xl font-semibold">{downloadedSongs.length}</p>
              <p className="text-sm">Downloads</p>
            </div>
          </div>
        </div>

        {/* Tabs */}
        <div className="flex gap-6 mt-12 mb-10">
          {["saved", "downloaded", "all"].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-6 py-3 rounded-full transition-all duration-300 ${
                activeTab === tab
                  ? "bg-white/10 backdrop-blur-md border border-white/20"
                  : "text-gray-400 hover:text-white"
              }`}
            >
              {tab === "saved" && "Saved"}
              {tab === "downloaded" && "Downloads"}
              {tab === "all" && "All Songs"}
            </button>
          ))}
        </div>

        {/* Song Grid */}
        {getSongs().length === 0 ? (
          <div className="flex flex-col items-center justify-center mt-20 text-gray-400">
            <FaMusic className="text-6xl mb-4 opacity-50" />
            <p className="text-lg">Nothing here yet</p>
            <p className="text-sm opacity-70">Start adding your favorite songs</p>
          </div>
        ) : (
          <div className="grid md:grid-cols-3 gap-8">
            {getSongs().map((song) => (
              <SongCard
                key={song.id}
                song={song}
                savedSongs={savedSongs}
                onSave={toggleSave}
                onDownload={toggleDownload}
              />
            ))}
          </div>
        )}

      </div>
    </div>
  );
};

const SongCard = ({ song, savedSongs, onSave, onDownload }) => {
  const isLiked = savedSongs.find((s) => s.id === song.id);

  return (
    <div className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-2xl p-5 transition hover:scale-105 hover:bg-white/10">

      <img
        src={song.image}
        alt={song.name}
        className="rounded-xl mb-4 w-full h-48 object-cover"
      />

      <h3 className="font-semibold text-lg">{song.name}</h3>
      <p className="text-gray-400 text-sm mb-4">{song.desc}</p>

      <div className="flex justify-end gap-5 text-xl">

        <button
          onClick={() => onSave(song)}
          className={`transition ${
            isLiked
              ? "text-pink-500 scale-125 drop-shadow-[0_0_12px_rgba(236,72,153,0.9)]"
              : "hover:text-pink-400"
          }`}
        >
          <FaHeart />
        </button>

        <button
          onClick={() => onDownload(song)}
          className="hover:text-green-400 transition"
        >
          <FaDownload />
        </button>

      </div>

    </div>
  );
};

export default MyLibrary;