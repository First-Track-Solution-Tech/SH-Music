import React from "react";

const ForTheRecord = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#020617] via-[#0f172a] to-[#1e293b] text-white">

      <div className="relative h-[60vh] flex items-center justify-center text-center overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1511379938547-c1f69419868d"
          className="absolute w-full h-full object-cover opacity-40"
        />

        <div className="relative z-10 max-w-3xl px-6">
          <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight">
            For the Record
          </h1>

          <p className="mt-6 text-lg text-gray-200">
            Behind the music, behind the platform.  
            Official stories, announcements, and insights from the SH Music team.
          </p>
        </div>
      </div>

      <div className="max-w-6xl mx-auto py-20 px-6 space-y-32">

        <div className="grid md:grid-cols-2 gap-12 items-center">

          <img
            src="https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4"
            className="rounded-3xl shadow-xl hover:scale-105 transition duration-500"
          />

          <div>
            <h2 className="text-4xl font-bold mb-6 leading-tight">
              A New Home for Independent Music
            </h2>

            <p className="text-gray-300 text-lg leading-relaxed">
              SH Music was built with a simple goal — to give music lovers and
              independent artists a place where discovery feels natural and
              creativity feels unlimited. Our platform focuses on accessibility,
              simplicity, and helping new voices reach listeners around the world.
            </p>
          </div>

        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">

          <div>
            <h2 className="text-4xl font-bold mb-6 leading-tight">
              Introducing My Library
            </h2>

            <p className="text-gray-300 text-lg leading-relaxed">
              We recently introduced the My Library feature, allowing listeners
              to save their favorite tracks and access them instantly. Music
              should feel personal, and this feature ensures your favorite
              songs are always one click away.
            </p>
          </div>

          <img
            src="https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f"
            className="rounded-3xl shadow-xl hover:scale-105 transition duration-500"
          />

        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">

          <img
            src="https://images.unsplash.com/photo-1501612780327-45045538702b"
            className="rounded-3xl shadow-xl hover:scale-105 transition duration-500"
          />

          <div>
            <h2 className="text-4xl font-bold mb-6 leading-tight">
              Supporting Independent Artists
            </h2>

            <p className="text-gray-300 text-lg leading-relaxed">
              SH Music is committed to supporting independent creators.
              Through our artist onboarding program, musicians can share
              their work with listeners globally and grow their audience
              without barriers.
            </p>
          </div>

        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">

          <div>
            <h2 className="text-4xl font-bold mb-6 leading-tight">
              What’s Coming Next
            </h2>

            <p className="text-gray-300 text-lg leading-relaxed">
              We're continuously improving the SH Music experience. Upcoming
              updates include smarter music discovery, personalized playlists,
              and enhanced tools for artists to connect with their fans.
              The journey is just beginning.
            </p>
          </div>

          <img
            src="https://images.unsplash.com/photo-1497032205916-ac775f0649ae"
            className="rounded-3xl shadow-xl hover:scale-105 transition duration-500"
          />

        </div>

      </div>

      <div className="text-center py-16 border-t border-white/10">

        <h3 className="text-3xl font-bold mb-6">
          The Story Continues
        </h3>

        <p className="text-gray-300 max-w-xl mx-auto">
          SH Music continues to grow with its community of listeners and
          creators. Stay tuned as we build a platform where music discovery
          feels exciting again.
        </p>

      </div>

    </div>
  );
};

export default ForTheRecord;