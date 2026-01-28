import React from "react"
import { assets } from "../assets/assets"
import { Link } from "react-router-dom"

const Artists = () => {
  return (
    <div className="w-full bg-[#121212] text-white">

      
      <section className="relative h-[80vh] min-h-[500px] flex items-center justify-center">
        <img
          src={assets.artist_hero}
          alt="Artist Hero"
          className="absolute inset-0 w-full h-full object-cover opacity-60"
        />
        

        <div className="relative z-10 text-center max-w-3xl px-6">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Build Your Artist Identity
          </h1>
          <p className="text-gray-300 mb-8">
            Reach fans, grow your audience, and turn your music into a career.
          </p>
          <button className="px-6 py-3 bg-green-500 text-black font-semibold rounded-full hover:scale-105 transition">
            Get Started
          </button>
        </div>
      </section>

      
      <section className="py-20 px-6 max-w-7xl mx-auto space-y-20">
<div className="grid md:grid-cols-2 gap-10 items-center">
          <img src={assets.amplify_music} className="rounded-xl" alt="" />
          <div>
            <h2 className="text-3xl font-bold mb-4">Amplify Your Music</h2>
            <p className="text-gray-400">
              Share your tracks globally and get discovered by the right audience.
            </p>
          </div>
        </div>

        
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div className="md:order-2">
            <img src={assets.connect_fan} className="rounded-xl" alt="" />
          </div>
          <div className="md:order-1">
            <h2 className="text-3xl font-bold mb-4">Connect With Fans</h2>
            <p className="text-gray-400">
              Build loyal fan communities and interact directly with listeners.
            </p>
          </div>
        </div>

       
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <img src={assets.featureAnalytics} className="rounded-xl" alt="" />
          <div>
            <h2 className="text-3xl font-bold mb-4">Track Your Growth</h2>
            <p className="text-gray-400">
              Analyze streams, engagement, and performance in one place.
            </p>
          </div>
        </div>

        
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div className="md:order-2">
            <img src={assets.featureMonetize} className="rounded-xl" alt="" />
          </div>
          <div className="md:order-1">
            <h2 className="text-3xl font-bold mb-4">Monetize Your Talent</h2>
            <p className="text-gray-400">
              Earn through streams, exclusive releases, and fan support.
            </p>
          </div>
        </div>

      </section>

      
      <section className="py-20 px-6 max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold mb-10 text-center">
          Insights for Artists
        </h2>

        <div className="grid gap-8 md:grid-cols-3">
          {[assets.blog1, assets.blog2, assets.blog3].map((img, i) => (
            <div
              key={i}
              className="bg-[#1a1a1a] rounded-xl overflow-hidden hover:-translate-y-1 transition"
            >
              <div className="overflow-hidden">
                <img
                  src={img || ""}
                  alt=""
                  className="w-full h-48 object-cover hover:scale-110 transition duration-500"
                />
              </div>
              <div className="p-5">
                <p className="text-sm text-green-400 mb-2">Music Growth</p>
                <h3 className="font-semibold mb-2">
                  How Independent Artists Grow in 2026
                </h3>
                <p className="text-sm text-gray-400">
                  Learn modern strategies to build fans, not just streams.
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      
      <section className="py-20 bg-gradient-to-r from-purple-900/40 to-black text-center px-6">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Ready to Explore Your Artist Profile?
        </h2>
        <p className="text-gray-300 mb-8">
          Start building your presence today.
        </p>
        <Link to="/exploreartist">
  <button className="px-8 py-3 bg-white text-black font-semibold rounded-full hover:scale-105 transition">
    Join as an Artist
  </button>
</Link>
      </section>

    </div>
  )
}

export default Artists
