import React from "react";

const About_us = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#3b1d5a] via-[#1a1224] to-[#121212] text-white">
      
      <div className="max-w-5xl mx-auto px-6 py-16">

        
        <h1 className="text-3xl md:text-4xl font-bold mb-10">
          About SH.Music
        </h1>

        
        <section className="mb-12">
          <p className="text-gray-300 leading-relaxed mb-4">
            SH.Music is a modern music streaming platform built for listeners
            who value simplicity, performance, and immersive sound discovery.
            Our goal is to bring music closer to people through a clean and
            engaging digital experience.
          </p>

          <p className="text-gray-300 leading-relaxed">
            Designed with inspiration from leading streaming platforms,
            SH.Music focuses on intuitive navigation, fast interactions,
            and beautifully organized music collections.
          </p>
        </section>

       
        <section className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-14">
          
          <div className="bg-[#292828bf] rounded-xl p-6">
            <h3 className="font-semibold text-lg mb-2">Music Discovery</h3>
            <p className="text-sm text-gray-300">
              Explore trending albums, popular playlists, and curated
              collections designed for every mood.
            </p>
          </div>

          <div className="bg-[#292828bf] rounded-xl p-6">
            <h3 className="font-semibold text-lg mb-2">Clean Experience</h3>
            <p className="text-sm text-gray-300">
              A distraction-free interface that keeps the focus on music,
              visuals, and seamless playback.
            </p>
          </div>

          <div className="bg-[#292828bf] rounded-xl p-6">
            <h3 className="font-semibold text-lg mb-2">Built for Scale</h3>
            <p className="text-sm text-gray-300">
              Designed using modern web technologies to support growth,
              performance, and future features.
            </p>
          </div>

        </section>

        
        <section>
          <h2 className="text-xl font-semibold mb-4">
            Support & Assistance
          </h2>

          <p className="text-gray-300 leading-relaxed mb-4">
            We are committed to providing reliable support for all users.
            Whether you need help navigating the platform or understanding
            features, our support system is designed to assist you quickly.
          </p>

          <p className="text-gray-400 text-sm">
            Visit the Support section from the navigation menu to get help or
            reach out through official channels.
          </p>
        </section>

      </div>
    </div>
  );
};

export default About_us;
