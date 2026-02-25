import React from "react";
import { CheckCircle, XCircle, Clock, CreditCard } from "lucide-react";

const Refund = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0f0f0f] via-[#131a2b] to-[#1a1f3c] text-white px-6 py-20">

      <div className="max-w-5xl mx-auto">

        
        <div className="text-center mb-20">
          <h1 className="text-4xl sm:text-5xl font-bold mb-6 bg-gradient-to-r from-purple-400 via-indigo-400 to-blue-400 bg-clip-text text-transparent">
            Refund & Cancellation Policy
          </h1>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Transparent policies designed to keep your experience smooth and worry-free.
          </p>
        </div>

        
        <div className="grid md:grid-cols-2 gap-8">

          
          <div className="bg-[#181818]/80 backdrop-blur-xl border border-gray-800 rounded-2xl p-8 transition duration-300 hover:scale-[1.02] hover:shadow-[0_0_30px_rgba(139,92,246,0.25)]">
            <h3 className="flex items-center gap-3 text-xl font-semibold mb-4 text-purple-400">
              <CreditCard size={22} /> Subscription Cancellation
            </h3>
            <ul className="text-gray-400 space-y-2 text-sm leading-relaxed">
              <li>• You can cancel your subscription anytime.</li>
              <li>• Access continues until the end of the billing cycle.</li>
              <li>• No hidden cancellation fees.</li>
            </ul>
          </div>

          
          <div className="bg-[#181818]/80 backdrop-blur-xl border border-gray-800 rounded-2xl p-8 transition duration-300 hover:scale-[1.02] hover:shadow-[0_0_30px_rgba(99,102,241,0.25)]">
            <h3 className="flex items-center gap-3 text-xl font-semibold mb-4 text-indigo-400">
              <CheckCircle size={22} /> Refund Eligibility
            </h3>
            <ul className="text-gray-400 space-y-2 text-sm leading-relaxed">
              <li>• Accidental charges reported within 7 days.</li>
              <li>• Verified technical issues affecting service.</li>
              <li>• Duplicate or incorrect billing.</li>
            </ul>
          </div>

          
          <div className="bg-[#181818]/80 backdrop-blur-xl border border-gray-800 rounded-2xl p-8 transition duration-300 hover:scale-[1.02] hover:shadow-[0_0_30px_rgba(236,72,153,0.25)]">
            <h3 className="flex items-center gap-3 text-xl font-semibold mb-4 text-pink-400">
              <XCircle size={22} /> Non-Refundable Cases
            </h3>
            <ul className="text-gray-400 space-y-2 text-sm leading-relaxed">
              <li>• Partial subscription usage.</li>
              <li>• Promotional or discounted plans.</li>
              <li>• Free trial conversions after billing.</li>
            </ul>
          </div>

          
          <div className="bg-[#181818]/80 backdrop-blur-xl border border-gray-800 rounded-2xl p-8 transition duration-300 hover:scale-[1.02] hover:shadow-[0_0_30px_rgba(34,197,94,0.25)]">
            <h3 className="flex items-center gap-3 text-xl font-semibold mb-4 text-green-400">
              <Clock size={22} /> Refund Processing
            </h3>
            <ul className="text-gray-400 space-y-2 text-sm leading-relaxed">
              <li>• Processed within 5–7 business days.</li>
              <li>• Refunded to original payment method.</li>
              <li>• Email confirmation upon completion.</li>
            </ul>
          </div>

        </div>

        
        <div className="mt-24">
          <h2 className="text-2xl font-semibold text-center mb-12">
            How Refund Processing Works
          </h2>

          <div className="flex flex-col md:flex-row justify-between items-center gap-8">

            <div className="text-center">
              <div className="w-16 h-16 mx-auto rounded-full bg-purple-600/20 border border-purple-500 flex items-center justify-center text-purple-400">
                1
              </div>
              <p className="mt-4 text-gray-400 text-sm">Request Submitted</p>
            </div>

            <div className="hidden md:block flex-1 h-px bg-gradient-to-r from-purple-500 via-indigo-500 to-blue-500"></div>

            <div className="text-center">
              <div className="w-16 h-16 mx-auto rounded-full bg-indigo-600/20 border border-indigo-500 flex items-center justify-center text-indigo-400">
                2
              </div>
              <p className="mt-4 text-gray-400 text-sm">Under Review</p>
            </div>

            <div className="hidden md:block flex-1 h-px bg-gradient-to-r from-indigo-500 via-blue-500 to-green-500"></div>

            <div className="text-center">
              <div className="w-16 h-16 mx-auto rounded-full bg-green-600/20 border border-green-500 flex items-center justify-center text-green-400">
                3
              </div>
              <p className="mt-4 text-gray-400 text-sm">Refund Processed</p>
            </div>

          </div>
        </div>

       
        <div className="mt-24 bg-[#151515]/90 backdrop-blur-xl border border-gray-800 rounded-2xl p-10 text-center hover:shadow-[0_0_30px_rgba(139,92,246,0.2)] transition duration-300">
          <h3 className="text-2xl font-semibold mb-4">
            Need help with a refund?
          </h3>
          <p className="text-gray-400 mb-6">
            Our support team is ready to assist you anytime.
          </p>
          <button className="bg-gradient-to-r from-purple-500 to-indigo-500 px-8 py-3 rounded-lg text-white font-medium hover:from-purple-400 hover:to-indigo-400 transition duration-300 hover:shadow-[0_0_20px_rgba(139,92,246,0.4)]">
            Contact Support
          </button>
        </div>

      </div>
    </div>
  );
};

export default Refund;
