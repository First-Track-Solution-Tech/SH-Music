import React from "react";
import { assets } from "../assets/assets";


const Advertising=()=> {
  return (
    <div className="min-h-screen bg-black text-white">

      
      <section className="relative h-[80vh] min-h-[500px] flex items-center justify-center">
        <img
                  src={assets.advertise_hero}
                  alt="Artist Hero"
                  className="absolute inset-0 w-full h-full object-cover opacity-60"
                />
                
        <div className="absolute inset-0 bg-black/40"></div>
                <div className="relative z-10 text-center max-w-3xl px-6">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">
          Make your campaigns resonate
        </h1>

        <p className="text-gray-400 max-w-xl mx-auto">
          Reach the right people at the right moment with simple and effective audio advertising.
        </p>

        <button className="mt-8 px-6 py-3 rounded-full bg-green-500 text-black font-semibold hover:bg-green-400 transition">
          Discover more
        </button>
        </div>
      </section>

      
      <section className="px-6 py-16">
  <h1 className="text-4xl font-bold mb-8 text-center">
    Platform insights
  </h1>

  <div className="flex gap-6 overflow-x-auto justify-center pb-4">

    <div className="min-w-[260px] rounded-2xl p-6 bg-gradient-to-br from-green-400 via-emerald-500 to-cyan-500 text-black">
      <p className="text-sm font-semibold opacity-80 mb-2">AUDIENCE</p>
      <h3 className="text-4xl font-bold mb-1">45M+</h3>
      <p className="text-sm">
        Monthly active listeners
      </p>
    </div>

    <div className="min-w-[260px] rounded-2xl p-6 bg-gradient-to-br from-purple-500 via-pink-500 to-rose-400 text-black">
      <p className="text-sm font-semibold opacity-80 mb-2">ENGAGEMENT</p>
      <h3 className="text-4xl font-bold mb-1">2.5×</h3>
      <p className="text-sm">
        Higher ad recall rate
      </p>
    </div>

    <div className="min-w-[260px] rounded-2xl p-6 bg-gradient-to-br from-blue-500 via-indigo-500 to-violet-500 text-black">
      <p className="text-sm font-semibold opacity-80 mb-2">REACH</p>
      <h3 className="text-4xl font-bold mb-1">120+</h3>
      <p className="text-sm">
        Countries worldwide
      </p>
    </div>

    <div className="min-w-[260px] rounded-2xl p-6 bg-gradient-to-br from-orange-400 via-amber-400 to-yellow-300 text-black">
      <p className="text-sm font-semibold opacity-80 mb-2">TARGETING</p>
      <h3 className="text-4xl font-bold mb-1">Smart</h3>
      <p className="text-sm">
        Mood & genre-based ads
      </p>
    </div>

  </div>
</section>

     <section className="max-w-5xl mx-auto px-4 pb-24">
  <h2 className="text-4xl font-bold mb-10 text-center">
    Make your campaigns resonate
  </h2>

  <div className="grid gap-6 md:grid-cols-3">

   


    <div className="group bg-[#1c1c1c] rounded-xl overflow-hidden transition hover:bg-[#242424]">
      <div className="h-40 overflow-hidden">
        <img
          src={assets.info_1}
          alt=""
          className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-110"
        />
      </div>
      <div className="p-6">
        <h3 className="font-semibold mb-3">Set clear goals</h3>
        <ul className="text-gray-400 text-sm space-y-2">
          <li>• Reach</li>
          <li>• Impressions</li>
          <li>• Clicks</li>
        </ul>
      </div>
    </div>

    
    <div className="group bg-[#1c1c1c] rounded-xl overflow-hidden transition hover:bg-[#242424]">
      <div className="h-40 overflow-hidden">
        <img
          src={assets.info_2}
          alt=""
          className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-110"
        />
      </div>
      <div className="p-6">
        <h3 className="font-semibold mb-3">Find your people</h3>
        <ul className="text-gray-400 text-sm space-y-2">
          <li>• Location targeting</li>
          <li>• Age groups</li>
          <li>• Interests</li>
        </ul>
      </div>
    </div>

    
    <div className="group bg-[#1c1c1c] rounded-xl overflow-hidden transition hover:bg-[#242424]">
      <div className="h-40 overflow-hidden">
        <img
          src={assets.info_3}
          alt=""
          className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-110"
        />
      </div>
      <div className="p-6">
        <h3 className="font-semibold mb-3">Measure success</h3>
        <ul className="text-gray-400 text-sm space-y-2">
          <li>• Ad recall</li>
          <li>• Engagement</li>
          <li>• Performance tracking</li>
        </ul>
      </div>
    </div>

  </div>
</section>


<section className="bg-[#0f0f0f] py-24 px-4">
  <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-12">

   
    <div>
      <h2 className="text-3xl font-bold mb-4">
        Looking for something more custom?
      </h2>
      <p className="text-gray-400 mb-6">
        Tell us about your brand and we’ll help you build the right campaign.
      </p>
    </div>

    
    <form className="space-y-4">
<select className="w-full bg-[#1c1c1c] rounded-full px-5 py-3 text-gray-300">
              <option>I am a brand / business</option>
              <option>An agency</option>
              <option>A creator</option>
              <option>Educational institution</option>
              <option>Other</option>
            </select>

            <select className="w-full bg-[#1c1c1c] rounded-full px-5 py-3 text-gray-300">
              <option>Looking to drive revenue</option>
              <option>Grow awareness</option>
              <option>Drive traffic</option>
              <option>Promote music</option>
              <option>Other</option>
            </select>
      <input
        type="text"
        placeholder="Your name"
        className="w-full bg-[#1c1c1c] rounded-lg px-4 py-3 text-gray-300 outline-none focus:ring-2 focus:ring-green-500"
      />

      <input
        type="email"
        placeholder="Email address"
        className="w-full bg-[#1c1c1c] rounded-lg px-4 py-3 text-gray-300 outline-none focus:ring-2 focus:ring-green-500"
      />

      <input
        type="text"
        placeholder="Company name"
        className="w-full bg-[#1c1c1c] rounded-lg px-4 py-3 text-gray-300 outline-none focus:ring-2 focus:ring-green-500"
      />

      <textarea
        placeholder="Tell us about your campaign"
        rows="4"
        className="w-full bg-[#1c1c1c] rounded-lg px-4 py-3 text-gray-300 outline-none focus:ring-2 focus:ring-green-500"
      />

      <button
        type="submit"
        className="w-full bg-green-500 text-black py-3 rounded-full font-semibold hover:bg-green-400 transition"
      >
        Get in touch
      </button>

    </form>
  </div>
</section>

    </div>
  );
}
export default Advertising;