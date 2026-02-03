import React from "react";

const Premium = () => {
  return (
    <div className="w-full text-white">

      
      <section className="min-h-[60vh] flex flex-col items-center justify-center text-center 
                          bg-gradient-to-b from-purple-900/40 to-black px-6">
        <h1 className="text-4xl sm:text-5xl font-bold mb-4">
          Music without limits.
        </h1>
        <p className="text-gray-300 max-w-xl mb-8">
          Upgrade to Premium and enjoy ad-free music, offline listening, and
          superior audio quality.
        </p>
        <button className="bg-green-500 text-black px-8 py-3 rounded-full 
                           font-semibold hover:scale-105 transition">
          Get Premium
        </button>
      </section>

      
      <section className="px-6 py-14 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-10">
          Why go Premium?
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            { title: "Ad-free Music", desc: "Listen without interruptions." },
            { title: "Offline Mode", desc: "Download and play anywhere." },
            { title: "Unlimited Skips", desc: "Skip as much as you want." },
            { title: "High Quality Audio", desc: "Feel every beat clearly." },
            { title: "Background Play", desc: "Keep music running everywhere." },
            { title: "Early Features", desc: "Get new features first." },
          ].map((item, index) => (
            <div
              key={index}
              className="bg-[#181818] p-6 rounded-xl hover:bg-[#222] transition"
            >
              <h3 className="text-lg font-semibold mb-2">
                {item.title}
              </h3>
              <p className="text-gray-400 text-sm">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      
      <section className="px-6 py-14 bg-[#121212]">
        <h2 className="text-3xl font-bold text-center mb-10">
          Free vs Premium
        </h2>

        <div className="max-w-4xl mx-auto overflow-hidden rounded-xl border border-neutral-700">
          <table className="w-full text-left">
            <thead className="bg-[#181818]">
              <tr>
                <th className="p-4">Features</th>
                <th className="p-4">Free</th>
                <th className="p-4">Premium</th>
              </tr>
            </thead>
            <tbody className="text-gray-300">
              {[
                ["Ads", "❌", "✅"],
                ["Offline Play", "❌", "✅"],
                ["Unlimited Skips", "❌", "✅"],
                ["Audio Quality", "Normal", "High"],
                ["Queue Control", "Limited", "Full"],
              ].map((row, i) => (
                <tr key={i} className="border-t border-neutral-700">
                  {row.map((cell, j) => (
                    <td key={j} className="p-4">
                      {cell}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      
      <section className="px-6 py-16 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">
          Choose your plan
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          
          <div className="bg-[#181818] p-8 rounded-xl text-center">
            <h3 className="text-xl font-semibold mb-2">Monthly</h3>
            <p className="text-4xl font-bold mb-4">₹99</p>
            <p className="text-gray-400 mb-6">per month</p>
            <button className="bg-white text-black px-6 py-2 rounded-full font-semibold">
              Go Premium
            </button>
          </div>

         
          <div className="bg-gradient-to-b from-green-600 to-green-500 
                          p-8 rounded-xl text-center scale-105">
            <p className="text-sm font-semibold mb-2">MOST POPULAR</p>
            <h3 className="text-xl font-semibold mb-2">Yearly</h3>
            <p className="text-4xl font-bold mb-4">₹999</p>
            <p className="text-black mb-6">Save more annually</p>
            <button className="bg-black text-white px-6 py-2 rounded-full font-semibold">
              Go Premium
            </button>
          </div>

          
          <div className="bg-[#181818] p-8 rounded-xl text-center">
            <h3 className="text-xl font-semibold mb-2">Student</h3>
            <p className="text-4xl font-bold mb-4">₹49</p>
            <p className="text-gray-400 mb-6">per month</p>
            <button className="bg-white text-black px-6 py-2 rounded-full font-semibold">
              Go Premium
            </button>
          </div>
        </div>
      </section>

      
      <section className="py-20 bg-gradient-to-t from-green-600/20 to-black text-center px-6">
        <h2 className="text-3xl sm:text-4xl font-bold mb-4">
          Upgrade your music experience today
        </h2>
        <p className="text-gray-300 mb-8">
          One subscription. Unlimited music.
        </p>
        <button className="bg-green-500 text-black px-10 py-3 rounded-full 
                           font-semibold hover:scale-105 transition">
          Get Premium Now
        </button>
      </section>

    </div>
  );
};

export default Premium;
