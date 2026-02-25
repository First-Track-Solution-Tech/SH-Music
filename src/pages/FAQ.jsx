import React, { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "How do I create an account?",
    answer:
      "You can sign up using your email, phone number, or Google account. Just click on Register and follow the steps."
  },
  {
    question: "Is SH.Music free to use?",
    answer:
      "Yes, SH.Music offers a free version. Premium features may be introduced later with additional benefits."
  },
  {
    question: "Can artists upload their own music?",
    answer:
      "Yes. Artists can join our community and upload tracks through the artist dashboard."
  },
  {
    question: "How do I reset my password?",
    answer:
      "Click on 'Forgot Password' on the login page and follow the reset instructions sent to your email."
  },
  {
    question: "How can I contact support?",
    answer:
      "You can use the support form below or visit the Support page from the footer."
  }
];

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0f0f0f] via-[#111827] to-[#1e1b4b] text-white px-6 py-20">

      <div className="max-w-4xl mx-auto">

        <h1 className="text-4xl font-bold text-center mb-4">
          Frequently Asked Questions
        </h1>

        <p className="text-gray-400 text-center mb-12">
          Everything you need to know about SH Music 🎧
        </p>

        <div className="space-y-4">

          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-[#181818]/70 backdrop-blur-lg border border-gray-800 rounded-xl overflow-hidden transition duration-300 hover:shadow-[0_0_20px_rgba(139,92,246,0.3)]"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full flex justify-between items-center px-6 py-5 text-left hover:bg-[#222222] transition"
              >
                <span className="font-medium text-lg">
                  {faq.question}
                </span>

                <ChevronDown
                  className={`transition-transform duration-300 ${
                    activeIndex === index ? "rotate-180 text-purple-400" : ""
                  }`}
                />
              </button>

              <div
                className={`px-6 transition-all duration-500 ease-in-out ${
                  activeIndex === index
                    ? "max-h-40 opacity-100 pb-5"
                    : "max-h-0 opacity-0"
                } overflow-hidden`}
              >
                <p className="text-gray-400">
                  {faq.answer}
                </p>
              </div>
            </div>
          ))}

        </div>

        <div className="mt-20 bg-[#141414]/80 backdrop-blur-xl border border-gray-800 rounded-2xl p-10 text-center shadow-xl">

  <h2 className="text-2xl font-semibold mb-4">
    Still have questions?
  </h2>

  <p className="text-gray-400 mb-8">
    Can’t find what you’re looking for? Send us your question and we’ll get back to you.
  </p>

  <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">

    <input
      type="text"
      placeholder="Type your question here..."
      className="w-full sm:w-96 bg-[#1f1f1f] text-white placeholder-gray-500 border border-gray-700 px-5 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition duration-300"
    />

    <button className="bg-gradient-to-r from-purple-500 to-indigo-500 text-white px-8 py-3 rounded-lg hover:from-purple-400 hover:to-indigo-400 transition duration-300 hover:shadow-[0_0_20px_rgba(139,92,246,0.3)]">
      Send
    </button>

  </div>

</div>


      </div>
    </div>
  );
};

export default FAQ;
