import React from "react";

const Contact = () => {
  return (
    <div className="relative min-h-screen bg-gradient-to-br from-[#001f3f] via-[#005f73] to-[#0a9396] text-white overflow-hidden py-20 px-6">

      <div className="absolute w-72 h-72 bg-cyan-400/20 blur-3xl rounded-full top-10 left-10 animate-pulse"></div>
      <div className="absolute w-72 h-72 bg-blue-400/20 blur-3xl rounded-full bottom-10 right-10 animate-pulse"></div>

      <div className="max-w-6xl mx-auto">

        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Get In Touch
          </h1>
          <p className="text-gray-200 max-w-xl mx-auto">
            Have a question, feedback, or collaboration idea? 
            The SH Music team is always ready to help. Send us a message 
            and we'll get back to you as soon as possible.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">

          <div className="bg-white/10 backdrop-blur-lg p-6 rounded-2xl text-center hover:scale-105 transition duration-300 shadow-lg border border-white/20">
            <div className="text-3xl mb-3">📧</div>
            <h3 className="text-xl font-semibold mb-2">Support</h3>
            <p className="text-sm text-gray-200">
              Need help with the platform or facing issues?
            </p>
            <p className="mt-3 text-cyan-300">support@shmusic.com</p>
          </div>

          <div className="bg-white/10 backdrop-blur-lg p-6 rounded-2xl text-center hover:scale-105 transition duration-300 shadow-lg border border-white/20">
            <div className="text-3xl mb-3">🎧</div>
            <h3 className="text-xl font-semibold mb-2">Artist Inquiries</h3>
            <p className="text-sm text-gray-200">
              Want to publish your music on SH Music?
            </p>
            <p className="mt-3 text-cyan-300">artists@shmusic.com</p>
          </div>

          <div className="bg-white/10 backdrop-blur-lg p-6 rounded-2xl text-center hover:scale-105 transition duration-300 shadow-lg border border-white/20">
            <div className="text-3xl mb-3">🤝</div>
            <h3 className="text-xl font-semibold mb-2">Business</h3>
            <p className="text-sm text-gray-200">
              Partnership or collaboration opportunities.
            </p>
            <p className="mt-3 text-cyan-300">business@shmusic.com</p>
          </div>

        </div>

        <div className="max-w-3xl mx-auto bg-white/10 backdrop-blur-xl rounded-3xl p-10 shadow-2xl border border-white/20">

          <h2 className="text-2xl font-semibold mb-6 text-center">
            Send Us a Message
          </h2>

          <form className="space-y-6">

            <div className="grid md:grid-cols-2 gap-6">
              <input
                type="text"
                placeholder="Full Name"
                className="w-full p-3 rounded-lg bg-white/20 border border-white/20 focus:outline-none focus:ring-2 focus:ring-cyan-300 transition"
              />

              <input
                type="email"
                placeholder="Email Address"
                className="w-full p-3 rounded-lg bg-white/20 border border-white/20 focus:outline-none focus:ring-2 focus:ring-cyan-300 transition"
              />
            </div>

            <input
              type="text"
              placeholder="Subject"
              className="w-full p-3 rounded-lg bg-white/20 border border-white/20 focus:outline-none focus:ring-2 focus:ring-cyan-300 transition"
            />

            <textarea
              rows="5"
              placeholder="Write your message..."
              className="w-full p-3 rounded-lg bg-white/20 border border-white/20 focus:outline-none focus:ring-2 focus:ring-cyan-300 transition"
            ></textarea>

            <div className="text-center">
              <button
                type="submit"
                className="px-8 py-3 rounded-full bg-gradient-to-r from-cyan-400 to-blue-500 font-semibold hover:scale-105 hover:shadow-lg transition duration-300"
              >
                Send Message
              </button>
            </div>

          </form>

        </div>

        <div className="text-center mt-16 text-gray-200 text-sm">
          © {new Date().getFullYear()} SH Music — Helping artists and listeners connect through music.
        </div>

      </div>

    </div>
  );
};

export default Contact;