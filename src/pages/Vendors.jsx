import React from "react";
import {
  Music,
  Mic2,
  Headphones,
  Building2,
  Disc3, 
  Radio,
  BadgeCheck,
 MessageSquare
} from "lucide-react";

const items = [
  {
    icon: Music,
    title: "Independent Artists",
    desc: "Release your music, grow your audience, and track performance with simple tools built for creators."
  },
  {
    icon: Mic2,
    title: "Producers",
    desc: "Collaborate with artists, manage credits, and showcase your production work professionally."
  },
  {
    icon: Headphones,
    title: "Labels & Managers",
    desc: "Manage multiple artists, releases, and insights from one organized dashboard."
  },
  {
    icon: Building2,
    title: "Music Vendors",
    desc: "Offer services, connect with artists, and be part of a growing music ecosystem."
  }
];

const vendors = [
  {
    name: "EchoWave Studios",
    role: "Music Producer",
    genre: "Hip-Hop · EDM",
  },
  {
    name: "Luna Records",
    role: "Music Label",
    genre: "Indie · Pop",
  },
  {
    name: "Nova Beats",
    role: "Sound Engineer",
    genre: "Trap · Lo-fi",
  },
];

const collabs = [
  {
    title: "Female Vocalist Needed",
    genre: "Pop / Chill",
    type: "Paid",
  },
  {
    title: "Mixing & Mastering",
    genre: "Hip-Hop",
    type: "Freelance",
  },
];

const Vendors = () => {
  return (
    <section className="relative min-h-screen bg-black text-white px-4 py-12 overflow-hidden">

      
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-40 -left-40 w-[420px] h-[420px] bg-purple-600/30 rounded-full blur-[140px]" />
        <div className="absolute top-1/3 -right-40 w-[420px] h-[420px] bg-pink-600/30 rounded-full blur-[140px]" />
      </div>

      <div className="relative max-w-5xl mx-auto">

        
        <div className="min-h-[70vh] flex flex-col items-center justify-center text-center space-y-6 px-4">
          <h1 className="text-4xl sm:text-5xl font-bold bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
            Vendor Community
          </h1>
          <p className="text-gray-400 max-w-xl mx-auto">
            Connect, collaborate, and grow with verified music creators.
          </p>

          <div className="flex justify-center gap-4 pt-4 flex-wrap">
            <button className="px-6 py-2 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 hover:scale-105 transition">
              Join Community
            </button>
            <button className="px-6 py-2 rounded-full border border-white/20 hover:bg-white/5 transition">
              Become a Vendor
            </button>
          </div>
        </div>

        <div className="text-center mb-12">
        <h2 className="text-2xl sm:text-3xl font-semibold text-white">
          Who is this for?
        </h2>
        <p className="mt-2 text-gray-400 max-w-xl mx-auto text-sm sm:text-base">
          Built for everyone shaping the music journey — from creation to collaboration.
        </p>
      </div>

      
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 max-w-6xl mx-auto">
        {items.map((item, index) => {
          const Icon = item.icon;
          return (
            <div
              key={index}
              className="group text-center p-4 rounded-xl transition-all duration-300 hover:-translate-y-1"
            >
              
              <div className="mx-auto w-24 h-24 rounded-full 
                bg-gradient-to-br from-pink-500 via-purple-500 to-indigo-500
                flex items-center justify-center
                shadow-lg shadow-purple-500/20
                transition-transform duration-300 group-hover:scale-105"
              >
                <Icon size={32} className="text-white" />
              </div>

              
              <h3 className="mt-4 text-white font-medium text-sm sm:text-base">
                {item.title}
              </h3>
              <p className="mt-2 text-xs sm:text-sm text-gray-400 leading-relaxed">
                {item.desc}
              </p>
            </div>
          );
        })}
      </div>
      
<div className="mt-20">

  <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12">
    Featured Vendors
  </h2>

  <div className="grid sm:grid-cols-3 gap-8">

    {vendors.map((vendor, i) => (
      <div
        key={i}
        className="group relative rounded-2xl p-8 text-center
        bg-white/5 backdrop-blur-md border border-white/10
        hover:scale-105 hover:border-purple-500/40
        transition duration-300"
      >

        
        <div className="w-14 h-14 mx-auto mb-5 rounded-full 
        flex items-center justify-center
        bg-white/10 group-hover:bg-gradient-to-br from-purple-500 to-pink-500 transition">
          <Disc3 className="w-6 h-6 group-hover:rotate-12 transition" />
        </div>

        
        <h3 className="text-lg font-semibold mb-2">
          {vendor.name}
        </h3>

       
        <p className="text-sm text-gray-400 mb-4">
          {vendor.role}
        </p>

    
        <p className="text-xs text-gray-400 leading-relaxed mb-6">
          {vendor.genre}
        </p>

        
        <button className="text-sm text-purple-400 hover:text-purple-300 transition">
          Explore More →
        </button>

      </div>
    ))}

  </div>
</div>


       
<div className="mt-20">

  <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12">
    Community Updates
  </h2>

  <div className="space-y-6">

   
    <div className="group relative p-5 rounded-xl
    bg-white/5 backdrop-blur-md border border-white/10
    hover:border-purple-500/40 hover:translate-x-1 transition">

      <div className="flex items-start gap-4">
        <div className="mt-1 w-9 h-9 rounded-full 
        flex items-center justify-center
        bg-purple-500/10 group-hover:bg-gradient-to-r from-purple-500 to-pink-500 transition">
          <Radio className="w-4 h-4 text-white" />
        </div>

        <div>
          <p className="text-sm text-gray-200 leading-relaxed">
            Nova Beats released a new Lo-fi sound pack
          </p>
          <span className="text-xs text-gray-500 mt-1 block">
            2 hours ago
          </span>
        </div>
      </div>

      
      <div className="absolute left-0 top-0 h-full w-1 bg-purple-500/40 rounded-l-xl opacity-0 group-hover:opacity-100 transition" />
    </div>

    
    <div className="group relative p-5 rounded-xl
    bg-white/5 backdrop-blur-md border border-white/10
    hover:border-purple-500/40 hover:translate-x-1 transition">

      <div className="flex items-start gap-4">
        <div className="mt-1 w-9 h-9 rounded-full 
        flex items-center justify-center
        bg-purple-500/10 group-hover:bg-gradient-to-r from-purple-500 to-pink-500 transition">
          <BadgeCheck className="w-4 h-4 text-white" />
        </div>

        <div>
          <p className="text-sm text-gray-200 leading-relaxed">
            Luna Records is open for indie submissions
          </p>
          <span className="text-xs text-gray-500 mt-1 block">
            Today
          </span>
        </div>
      </div>

      <div className="absolute left-0 top-0 h-full w-1 bg-purple-500/40 rounded-l-xl opacity-0 group-hover:opacity-100 transition" />
    </div>

  </div>
</div>


        
        <div className="mt-20">

  
  <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12">
    Collaboration Requests
  </h2>

  <div className="grid sm:grid-cols-2 gap-8">

    {collabs.map((item, i) => (
      <div
        key={i}
        className="group bg-amber-100 text-black rounded-2xl p-6
        flex flex-col items-center text-center
        hover:-translate-y-1 hover:shadow-xl transition"
      >

        
        <div className="w-12 h-12 rounded-full flex items-center justify-center
        bg-purple-100 mb-4">
          <MessageSquare className="w-5 h-5 text-purple-600" />
        </div>

       
        <p className="font-semibold text-lg">
          {item.title}
        </p>

        
        <p className="text-sm text-gray-500 mt-1">
          {item.genre}
        </p>

        
        <p className="text-sm text-gray-600 mt-4 leading-relaxed">
          Looking for creative collaborators to work on upcoming music projects and releases.
        </p>

        
        <span className="mt-5 px-4 py-1 text-xs font-medium rounded-full
        bg-purple-600 text-white">
          {item.type}
        </span>

      </div>
    ))}

  </div>
</div>


        
        <div className="relative text-center mt-20">
          <div className="absolute inset-0 blur-2xl bg-gradient-to-r 
          from-purple-600 to-pink-600 opacity-30 rounded-2xl" />

          <div className="relative p-8 rounded-2xl 
          bg-gradient-to-r from-purple-600 to-pink-600">
            <h2 className="text-2xl font-bold">Ready to collaborate?</h2>
            <p className="text-sm mt-2 opacity-90">
              Join the vendor community and grow your music network.
            </p>

            <button className="mt-5 px-8 py-3 bg-black rounded-full hover:bg-gray-900 transition">
              Get Started
            </button>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Vendors;
