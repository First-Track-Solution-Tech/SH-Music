import React from "react";

const Cta = () => {
  return (
    <section className="relative w-full mt-24 rounded-xl overflow-hidden bg-gradient-to-br from-purple-900/40 via-black to-black p-16 text-center">

      {/* glow blobs */}
      <div className="absolute -top-24 -left-24 w-72 h-72 bg-purple-600/30 rounded-full blur-3xl"></div>
      <div className="absolute -bottom-24 -right-24 w-72 h-72 bg-pink-600/20 rounded-full blur-3xl"></div>

      
      <div className="relative z-10 max-w-2xl mx-auto">
        <h2 className="text-4xl font-bold mb-4">
          Find Your Next Vibe
        </h2>

        <p className="text-gray-400 text-lg mb-10">
          Discover music that matches your mood, moment, and mindset.
        </p>

        <div className="flex justify-center gap-6 flex-wrap">
          <button className="px-8 py-3 rounded-full bg-amber-50 text-black font-semibold hover:scale-105 transition">
            Start Listening
          </button>

          <button className="px-8 py-3 rounded-full border border-gray-600 text-white hover:border-white hover:scale-105 transition">
            Explore Aesthetic Playlists
          </button>
        </div>
      </div>

    </section>
  );
};

export default Cta;
