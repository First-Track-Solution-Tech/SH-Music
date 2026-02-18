import {
  Mic,
  Music,
  Headphones,
  Sparkles,
  ArrowRight,
} from "lucide-react";

const Collaborate = () => {
  return (
    <div className="text-white bg-gradient-to-b from-[#0f172a] via-[#020617] to-black">

      {/* HERO */}
      <section className="min-h-[65vh] flex items-center justify-center px-6 text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,#22c55e33,transparent_60%)]"></div>

        <div className="relative max-w-3xl">
          <div className="inline-flex items-center gap-2 px-4 py-1 mb-6 rounded-full bg-green-500/10 text-green-400 text-sm">
            <Sparkles size={16} /> Collaboration Hub
          </div>

          <h1 className="text-5xl font-bold leading-tight">
            Create music
            <span className="text-green-400"> together</span>
          </h1>

          <p className="text-gray-300 mt-4 text-lg">
            Discover artists, connect instantly, and build something meaningful.
          </p>

          <button className="mt-8 px-8 py-3 rounded-full bg-green-500 text-black font-semibold hover:scale-105 transition flex items-center gap-2 mx-auto">
            Explore collaborators <ArrowRight size={18} />
          </button>
        </div>
      </section>

      {/* COLLAB CARDS */}
      <section className="max-w-6xl mx-auto px-6 py-24">
        <h2 className="text-3xl font-bold text-center mb-12">
          Artists looking to collaborate
        </h2>

        <div className="grid gap-8 md:grid-cols-3">
          
          {/* Card 1 */}
          <div className="group bg-[#181818] rounded-2xl p-6 transition hover:-translate-y-2 hover:shadow-xl hover:shadow-green-500/20">
            <Headphones className="text-green-400 mb-4 group-hover:scale-110 transition" />
            <h3 className="font-semibold text-lg">Aarav</h3>
            <p className="text-sm text-gray-400">Producer • Lo-fi / Chill</p>

            <p className="text-gray-300 text-sm mt-4">
              Looking for a vocalist for a mellow lo-fi EP.
            </p>

            <button className="mt-5 text-green-400 text-sm hover:underline">
              Connect →
            </button>
          </div>

          {/* Card 2 */}
          <div className="group bg-[#181818] rounded-2xl p-6 transition hover:-translate-y-2 hover:shadow-xl hover:shadow-purple-500/20">
            <Mic className="text-purple-400 mb-4 group-hover:scale-110 transition" />
            <h3 className="font-semibold text-lg">Riya</h3>
            <p className="text-sm text-gray-400">Singer • Indie / Pop</p>

            <p className="text-gray-300 text-sm mt-4">
              Searching for a producer to bring my originals to life.
            </p>

            <button className="mt-5 text-purple-400 text-sm hover:underline">
              Connect →
            </button>
          </div>

          {/* Card 3 */}
          <div className="group bg-[#181818] rounded-2xl p-6 transition hover:-translate-y-2 hover:shadow-xl hover:shadow-blue-500/20">
            <Music className="text-blue-400 mb-4 group-hover:scale-110 transition" />
            <h3 className="font-semibold text-lg">Kabir</h3>
            <p className="text-sm text-gray-400">Lyricist • Hip-Hop</p>

            <p className="text-gray-300 text-sm mt-4">
              Open to writing hooks and verses for rap projects.
            </p>

            <button className="mt-5 text-blue-400 text-sm hover:underline">
              Connect →
            </button>
          </div>

        </div>
      </section>

      {/* CTA */}
      <section className="px-6 pb-28 text-center">
        <div className="max-w-3xl mx-auto bg-gradient-to-r from-green-500/10 via-emerald-400/10 to-cyan-400/10 rounded-3xl p-12">
          <h2 className="text-4xl font-bold">
            Ready to find your sound partner?
          </h2>
          <p className="text-gray-300 mt-4">
            Create your collaboration profile and start building.
          </p>

          <button className="mt-8 px-8 py-3 rounded-full bg-white text-black font-semibold hover:scale-105 transition">
            Create collaboration profile
          </button>
        </div>
      </section>

    </div>
  );
};

export default Collaborate;
