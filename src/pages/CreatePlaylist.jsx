import React, { useState, useEffect } from "react";
import { songsData } from "../assets/assets";
import { Music, Plus, Trash2 } from "lucide-react";

const CreatePlaylist = () => {
  const [playlistName, setPlaylistName] = useState("");
  const [selectedSongs, setSelectedSongs] = useState([]);
  const [playlists, setPlaylists] = useState([]);

  useEffect(() => {
    const saved = localStorage.getItem("playlists");
    if (saved) {
      setPlaylists(JSON.parse(saved));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("playlists", JSON.stringify(playlists));
  }, [playlists]);

  const toggleSong = (id) => {
    if (selectedSongs.includes(id)) {
      setSelectedSongs(selectedSongs.filter((songId) => songId !== id));
    } else {
      setSelectedSongs([...selectedSongs, id]);
    }
  };

  const createPlaylist = () => {
    if (!playlistName || selectedSongs.length === 0) return;

    const newPlaylist = {
      id: Date.now(),
      name: playlistName,
      songs: selectedSongs,
    };

    setPlaylists([...playlists, newPlaylist]);
    setPlaylistName("");
    setSelectedSongs([]);
  };

  const deletePlaylist = (id) => {
    setPlaylists(playlists.filter((pl) => pl.id !== id));
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#1a0025] via-[#3a0ca3] to-black text-white px-6 py-16">

      <h1 className="text-4xl font-bold mb-10 text-center">
        Create Your Playlist
      </h1>

      <div className="max-w-3xl mx-auto bg-white/5 backdrop-blur-md p-8 rounded-2xl shadow-xl">

        <input
          type="text"
          placeholder="Playlist Name"
          value={playlistName}
          onChange={(e) => setPlaylistName(e.target.value)}
          className="w-full mb-6 px-5 py-3 rounded-full bg-black/40 border border-white/10 focus:outline-none focus:ring-2 focus:ring-indigo-400"
        />

        <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
          <Music size={20} /> Select Songs
        </h2>

        <div className="grid sm:grid-cols-2 gap-4 max-h-64 overflow-y-auto pr-2">
          {songsData.map((song) => (
            <div
              key={song.id}
              onClick={() => toggleSong(song.id)}
              className={`p-3 rounded-lg cursor-pointer transition ${
                selectedSongs.includes(song.id)
                  ? "bg-indigo-500/30 border border-indigo-400"
                  : "bg-black/30 hover:bg-white/10"
              }`}
            >
              <p className="font-medium">{song.name}</p>
              <p className="text-sm text-gray-400">{song.desc}</p>
            </div>
          ))}
        </div>

        <button
          onClick={createPlaylist}
          className="mt-6 w-full py-3 rounded-full bg-indigo-500 hover:bg-indigo-600 transition font-semibold flex items-center justify-center gap-2"
        >
          <Plus size={18} /> Create Playlist
        </button>
      </div>

      <div className="max-w-4xl mx-auto mt-16">
        <h2 className="text-2xl font-bold mb-6">Your Playlists</h2>

        {playlists.length === 0 && (
          <p className="text-gray-400">No playlists created yet.</p>
        )}

        <div className="grid sm:grid-cols-2 gap-6">
          {playlists.map((pl) => (
            <div
              key={pl.id}
              className="bg-white/5 p-6 rounded-xl border border-white/10"
            >
              <div className="flex justify-between items-center mb-3">
                <h3 className="font-semibold text-lg">{pl.name}</h3>
                <Trash2
                  size={18}
                  onClick={() => deletePlaylist(pl.id)}
                  className="cursor-pointer text-red-400 hover:text-red-500"
                />
              </div>

              <p className="text-sm text-gray-400 mb-2">
                {pl.songs.length} Songs
              </p>

              <div className="space-y-1">
                {pl.songs.map((songId) => {
                  const song = songsData.find((s) => s.id === songId);
                  return (
                    <p key={songId} className="text-sm">
                      • {song?.name}
                    </p>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
};

export default CreatePlaylist;
