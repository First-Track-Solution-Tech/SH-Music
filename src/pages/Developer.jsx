import React from "react";

const Developer = () => {
  return (
    <div className="w-full min-h-screen bg-[#2a004f] text-white overflow-hidden">

      
      <section className="relative flex flex-col items-center justify-center text-center px-6 py-28">
        
        <div className="absolute top-20 left-10 w-32 h-32 bg-green-400 rounded-full blur-3xl opacity-60"></div>
        <div className="absolute bottom-10 right-20 w-40 h-40 bg-pink-400 rounded-full blur-3xl opacity-50"></div>

        <h1 className="text-4xl md:text-6xl font-extrabold leading-tight">
          Build with <span className="text-green-400">Your Music API</span>
        </h1>

        <p className="mt-6 max-w-2xl text-gray-200 text-lg">
          Create music experiences, playlists, discovery tools and more —
          powered by your own music ecosystem.
        </p>

        <button className="mt-8 px-8 py-3 rounded-full bg-green-400 text-black font-semibold hover:scale-105 transition">
          Get Started
        </button>
      </section>

      
      <section className="px-6 py-20 flex justify-center">
        <div className="w-full max-w-5xl bg-[#3a0066] rounded-xl border border-white/20 grid md:grid-cols-2 overflow-hidden">

          
          <div className="p-6 text-sm bg-[#2a004f]">
            <p className="text-green-400 mb-3">// Play a track</p>
            <pre className="text-gray-200 leading-relaxed">
{`player.play({
  trackId: "track_123",
  volume: 80,
  shuffle: true
});

player.on("end", () => {
  console.log("Track finished");
});`}
            </pre>
          </div>

          
          <div className="p-6 flex flex-col items-center justify-center">
            <div className="w-24 h-24 rounded-full bg-green-400 mb-4"></div>
            <p className="font-semibold">Now Playing</p>
            <p className="text-sm text-gray-300">Dreamscape — Artist X</p>

            <div className="mt-4 w-full h-1 bg-white/20 rounded">
              <div className="h-full w-2/3 bg-green-400 rounded"></div>
            </div>
          </div>
        </div>
      </section>

      
      <section className="px-6 py-20">
        <h2 className="text-3xl font-bold text-center mb-12">
          What you can build
        </h2>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {[
            {
              title: "Music Playback",
              desc: "Full control over play, pause, queue, shuffle and repeat."
            },
            {
              title: "Artist Discovery",
              desc: "Show trending artists, genres and recommendations."
            },
            {
              title: "Custom Experiences",
              desc: "Build your own UI, player logic and music journeys."
            }
          ].map((item, index) => (
            <div
              key={index}
              className="bg-[#3a0066] rounded-xl p-6 border border-white/10 hover:scale-105 transition"
            >
              <h3 className="text-xl font-semibold mb-3">{item.title}</h3>
              <p className="text-gray-300 text-sm">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      
      <section className="px-6 py-24 text-center bg-[#1f003a]">
        <h2 className="text-3xl font-bold mb-4">
          Ready to build something amazing?
        </h2>
        <p className="text-gray-300 mb-8">
          Start experimenting with your music platform today.
        </p>
        <button className="px-10 py-4 rounded-full bg-green-400 text-black font-semibold hover:scale-105 transition">
          View Documentation
        </button>
      </section>

    </div>
  );
};

export default Developer;

