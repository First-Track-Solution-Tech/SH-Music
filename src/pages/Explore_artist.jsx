import React, { useState } from "react";
import { ChevronDown } from "lucide-react";
import { assets } from "../assets/assets";
import { Link } from "react-router-dom";

const Explore_artist =() =>{
  const [openFAQ, setOpenFAQ] = useState(null);

  return (
    <div className="bg-white text-gray-900">

     <section className="w-full bg-white">
  <div className="max-w-[1400px] mx-auto px-6 py-24">
    <div className="grid lg:grid-cols-2 gap-16 items-center">

      
      <div>
        <span className="inline-block  bg-green-500 text-white text-sm font-semibold px-5 py-2 rounded-full mb-6">
          EXPLORE ARTISTS
        </span>

        <h1 className="text-4xl sm:text-5xl xl:text-6xl font-bold leading-tight">
          Discover Artists <br /> & Collaborate
        </h1>

        <p className="mt-6 text-lg text-gray-600 max-w-lg">
          Discover independent artists, explore their work, and connect for meaningful collaborations.
        </p>
<div className="mt-6 flex flex-wrap  gap-3 text-sm font-medium text-gray-700">
      <span className="px-4 py-2 rounded-full bg-gray-100 hover:bg-purple-100 transition">Discover</span>
      <span className="px-4 py-2 rounded-full bg-gray-100 hover:bg-purple-100 transition">Connect</span>
      <span className="px-4 py-2 rounded-full bg-gray-100 hover:bg-purple-100 transition">Collaborate</span>
      <span className="px-4 py-2 rounded-full bg-gray-100 hover:bg-purple-100 transition">Release</span>
    </div>
  
        
      </div>

      
      <div className="flex justify-center lg:justify-end">
        <img
          src={assets.explore_hero}
          alt="Artist Illustration"
          className="w-full max-w-xl"
        />
      </div>

    </div>
  </div>
</section>




      
<section className="max-w-7xl mx-auto px-6 py-20 space-y-28">

  
  <div className="grid lg:grid-cols-2 gap-12 items-center">
    <img
      src={assets.collaborate_1}
      alt="Create artist profile"
      className="w-full max-w-md mx-auto hover:scale-105 transition"
    />

    <div>
      <h2 className="text-2xl font-semibold">Create Your Artist Profile</h2>
      <p className="mt-4 text-gray-600">
        Set up your artist presence and let others discover your sound.
      </p>

      <ul className="mt-4 space-y-2 text-sm text-gray-700">
        <li>• Add your artist name & bio</li>
        <li>• Choose genres and style</li>
        <li>• Link social profiles</li>
      </ul>
    </div>
  </div>

  
  <div className="grid lg:grid-cols-2 gap-12 items-center">
    <div className="order-2 lg:order-1">
      <h2 className="text-2xl font-semibold">Upload & Showcase Your Work</h2>
      <p className="mt-4 text-gray-600">
        Share your tracks and let collaborators explore what you create.
      </p>

      <ul className="mt-4 space-y-2 text-sm text-gray-700">
        <li>• Featured tracks & previews</li>
        <li>• Release highlights</li>
        <li>• Your creative journey</li>
      </ul>
    </div>

    <img
      src={assets.collaborate_2}
      alt="Upload music"
      className="order-1 lg:order-2 w-full max-w-md mx-auto hover:scale-105 transition"
    />
  </div>

  
  <div className="grid lg:grid-cols-2 gap-12 items-center">
    <img
      src={assets.collaborate_3}
      alt="Get discovered"
      className="w-full max-w-md mx-auto hover:scale-105 transition"
    />

    <div>
      <h2 className="text-2xl font-semibold">Get Discovered & Collaborate</h2>
      <p className="mt-4 text-gray-600">
        Connect with artists, producers, and creators looking to work together.
      </p>

      <ul className="mt-4 space-y-2 text-sm text-gray-700">
        <li>• Receive collaboration requests</li>
        <li>• Message directly</li>
        <li>• Build creative connections</li>
      </ul>
    </div>
  </div>

</section>

      
      <section className="bg-purple-600 text-white py-14 text-center px-6">
        <h3 className="text-2xl font-semibold">
          Already found an artist you like?
        </h3>
        <button className="mt-6 px-8 py-3 rounded-full bg-white text-purple-600 font-medium hover:scale-105 transition">
          Start Collaborating
        </button>
      </section>

      
      <section className="max-w-4xl mx-auto px-6 py-20">
        <h2 className="text-2xl font-semibold text-center mb-12">
          Frequently Asked Questions
        </h2>

        {[
          {
            q: "How do collaborations work?",
            a: "You can send collaboration requests directly to artists through their profiles."
          },
          {
            q: "Is messaging free?",
            a: "Yes, basic messaging is free for all users."
          },
          {
            q: "How are artists verified?",
            a: "Artists go through a basic verification process before being featured."
          },
          {
            q: "Can I collaborate across genres?",
            a: "Absolutely. Cross-genre collaborations are encouraged."
          }
        ].map((item, i) => (
          <div
            key={i}
            className="border-b border-gray-200 py-4 cursor-pointer"
            onClick={() => setOpenFAQ(openFAQ === i ? null : i)}
          >
            <div className="flex justify-between items-center">
              <p className="font-medium">{item.q}</p>
              <ChevronDown
                className={`w-5 h-5 transition ${
                  openFAQ === i ? "rotate-180" : ""
                }`}
              />
            </div>
            {openFAQ === i && (
              <p className="mt-3 text-sm text-gray-600">
                {item.a}
              </p>
            )}
          </div>
        ))}
      </section>

      
      <section className="py-20 text-center px-6">
        <h2 className="text-3xl font-bold">
          Ready to explore new sounds and create ?
        </h2>
        <Link to="/createartist"> <button className="mt-6 px-10 py-3 rounded-full bg-purple-600 text-white hover:scale-105 transition">
          Explore Yourself
        </button></Link>
      </section>

    </div>
  );
}
export default Explore_artist;
