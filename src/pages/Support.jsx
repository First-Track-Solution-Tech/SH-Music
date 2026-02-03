import React from "react";

const Support = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#1db9541a] via-[#1a1224] to-[#121212] text-white">
      
      <div className="max-w-5xl mx-auto px-6 py-16">

        
        <h1 className="text-3xl md:text-4xl font-bold mb-10">
          Support
        </h1>

        
        <div className="mb-12">
          <input
            type="text"
            placeholder="Search for help"
            className="w-full bg-[#292828bf] text-white placeholder-gray-400 px-5 py-3 rounded-lg outline-none focus:ring-2 focus:ring-green-500"
          />
        </div>

        
        <section className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-14">

          <div className="bg-[#292828bf] rounded-xl p-6 hover:bg-[#2f2f2f] transition">
            <h3 className="font-semibold text-lg mb-2">Account & Login</h3>
            <p className="text-sm text-gray-300">
              Trouble signing in, resetting your password, or managing your account.
            </p>
          </div>

          <div className="bg-[#292828bf] rounded-xl p-6 hover:bg-[#2f2f2f] transition">
            <h3 className="font-semibold text-lg mb-2">Playback Issues</h3>
            <p className="text-sm text-gray-300">
              Fix problems related to song playback, buffering, or audio quality.
            </p>
          </div>

          <div className="bg-[#292828bf] rounded-xl p-6 hover:bg-[#2f2f2f] transition">
            <h3 className="font-semibold text-lg mb-2">Playlists & Albums</h3>
            <p className="text-sm text-gray-300">
              Learn how to manage playlists, albums, and saved music.
            </p>
          </div>

          <div className="bg-[#292828bf] rounded-xl p-6 hover:bg-[#2f2f2f] transition">
            <h3 className="font-semibold text-lg mb-2">App Features</h3>
            <p className="text-sm text-gray-300">
              Understand app features, navigation, and upcoming updates.
            </p>
          </div>

        </section>

        {/* Quick Help */}
        <section className="mb-14">
          <h2 className="text-xl font-semibold mb-6">Quick Help</h2>

          <ul className="space-y-3 text-gray-300 text-sm">
            <li>• Can’t log in to SH.Music</li>
            <li>• Songs not playing</li>
            <li>• Playlist not loading</li>
            <li>• App performance issues</li>
          </ul>
        </section>

        
        <section className="bg-[#181818] rounded-xl p-8 text-center">
          <h2 className="text-xl font-semibold mb-3">
            Visit Our Community
          </h2>
          <p className="text-gray-300 mb-6">
            Get answers from other listeners and music lovers in the SH.Music community.
          </p>

          <button className="bg-green-500 hover:bg-green-400 text-black font-semibold px-6 py-2 rounded-full transition">
            Go to Community
          </button>
        </section>

      </div>
    </div>
  );
};

export default Support;
