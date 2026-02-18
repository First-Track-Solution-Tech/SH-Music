import { useState } from "react";
import {
  Mic,
  Music,
  ImagePlus,
  UploadCloud,
  User,
  FileAudio,
  ArrowRight,
} from "lucide-react";
import { Link } from "react-router-dom";

const CreateArtist = () => {
  const [artistName, setArtistName] = useState("");
  const [bio, setBio] = useState("");
  const [profileImage, setProfileImage] = useState(null);
  const [musicFile, setMusicFile] = useState(null);

  return (
    <div className="bg-black text-white">

      <section className="min-h-[70vh] flex items-center justify-center px-6 text-center bg-gradient-to-br from-black via-zinc-900 to-black">
        <div className="max-w-3xl">
          <h1 className="text-5xl font-bold leading-tight">
            Turn your sound into a
            <span className="text-green-500"> artist profile</span>
          </h1>
          <p className="text-gray-400 mt-4 text-lg">
            Upload your music, showcase your identity, and reach listeners who
            vibe with your sound.
          </p>

          <button
            onClick={() =>
              document
                .getElementById("artist-form")
                .scrollIntoView({ behavior: "smooth" })
            }
            className="mt-8 inline-flex items-center gap-2 px-8 py-3 rounded-full bg-green-500 text-black font-semibold hover:bg-green-400 transition"
          >
            Get Started <ArrowRight size={18} />
          </button>
        </div>
      </section>

      <section
        id="artist-form"
        className="min-h-screen flex items-center justify-center px-4 py-24"
      >
        <div className="w-full max-w-3xl bg-zinc-900/80 backdrop-blur border border-zinc-800 rounded-2xl p-8 shadow-xl">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold flex items-center justify-center gap-2">
              <Mic className="text-green-500" /> Create Artist Profile
            </h2>
            <p className="text-gray-400 mt-2">
              Your journey starts here
            </p>
          </div>

          <div className="flex flex-col items-center mb-8">
            <div className="w-28 h-28 rounded-full bg-zinc-800 border border-zinc-700 flex items-center justify-center overflow-hidden">
              {profileImage ? (
                <img
                  src={URL.createObjectURL(profileImage)}
                  alt="artist"
                  className="w-full h-full object-cover"
                />
              ) : (
                <User className="w-10 h-10 text-gray-500" />
              )}
            </div>

            <label className="mt-4 flex items-center gap-2 text-sm text-green-400 cursor-pointer hover:underline">
              <ImagePlus size={16} />
              Upload profile image
              <input
                type="file"
                accept="image/*"
                className="hidden"
                onChange={(e) => setProfileImage(e.target.files[0])}
              />
            </label>
          </div>

          <div className="space-y-6">
            <div>
              <label className="text-sm text-gray-300 flex items-center gap-2 mb-1">
                <User size={16} /> Artist Name
              </label>
              <input
                type="text"
                value={artistName}
                onChange={(e) => setArtistName(e.target.value)}
                placeholder="Your artist name"
                className="w-full px-4 py-3 rounded-lg bg-zinc-800 border border-zinc-700 focus:outline-none focus:border-green-500"
              />
            </div>

            <div>
              <label className="text-sm text-gray-300 flex items-center gap-2 mb-1">
                <Music size={16} /> Bio
              </label>
              <textarea
                value={bio}
                onChange={(e) => setBio(e.target.value)}
                placeholder="Describe your sound..."
                rows="4"
                className="w-full px-4 py-3 rounded-lg bg-zinc-800 border border-zinc-700 focus:outline-none focus:border-green-500 resize-none"
              />
            </div>

            <div>
              <label className="text-sm text-gray-300 flex items-center gap-2 mb-2">
                <FileAudio size={16} /> Upload Track
              </label>

              <label className="flex items-center justify-between px-4 py-3 rounded-lg bg-zinc-800 border border-dashed border-zinc-600 cursor-pointer hover:border-green-500 transition">
                <span className="text-gray-400 truncate">
                  {musicFile ? musicFile.name : "Choose audio file"}
                </span>
                <UploadCloud />
                <input
                  type="file"
                  accept="audio/*"
                  className="hidden"
                  onChange={(e) => setMusicFile(e.target.files[0])}
                />
              </label>
            </div>

            <button
              onClick={() => alert("Artist profile created (UI only)")}
              className="w-full py-3 rounded-xl bg-green-500 text-black font-semibold hover:bg-green-400 transition flex items-center justify-center gap-2"
            >
              <UploadCloud size={18} />
              Create Profile
            </button>
          </div>
        </div>
      </section>

      <section className="py-24 px-6 text-center bg-gradient-to-t from-black to-zinc-900">
        <h2 className="text-4xl font-bold">
          Ready to share your sound?
        </h2>
        <p className="text-gray-400 mt-3">
          Build your artist presence and start collaborating with artist today.
        </p>

        <Link
  to="/collaborate"
  className="mt-6 inline-flex items-center gap-2 px-8 py-3 rounded-full border border-green-500 text-green-400 hover:bg-green-500 hover:text-black transition"
>
  Start Collaborating <ArrowRight size={18} />
</Link>

      </section>

    </div>
  );
};

export default CreateArtist;
