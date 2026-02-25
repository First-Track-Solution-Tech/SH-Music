import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";

const Terms = ({ isOpen, onClose }) => {
  const [accepted, setAccepted] = useState(false);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/70 backdrop-blur-sm z-50 flex items-center justify-center p-6"
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0, y: 50 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.8, opacity: 0 }}
            transition={{ duration: 0.4 }}
            className="bg-gradient-to-br from-[#0f172a] via-[#111827] to-[#1e1b4b] w-full max-w-4xl max-h-[90vh] overflow-y-auto rounded-3xl border border-white/10 shadow-2xl relative p-10 text-white"
          >
            <button
              onClick={onClose}
              className="absolute top-6 right-6 text-gray-400 hover:text-white transition"
            >
              <X size={26} />
            </button>

            <h1 className="text-4xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-indigo-500 bg-clip-text text-transparent">
              Terms & Conditions
            </h1>

            <div className="space-y-8 text-gray-300 leading-relaxed">

              <section className="hover:text-white transition duration-300">
                <h2 className="text-xl font-semibold text-purple-400 mb-2">
                  1. User Responsibilities
                </h2>
                <p>
                  By using our platform, you agree to use the service legally and respectfully.
                  Misuse, unauthorized distribution, or harmful activities are strictly prohibited.
                </p>
              </section>

              <section className="hover:text-white transition duration-300">
                <h2 className="text-xl font-semibold text-indigo-400 mb-2">
                  2. Account Security
                </h2>
                <p>
                  You are responsible for maintaining the confidentiality of your account.
                  We are not liable for losses resulting from unauthorized access.
                </p>
              </section>

              <section className="hover:text-white transition duration-300">
                <h2 className="text-xl font-semibold text-pink-400 mb-2">
                  3. Content Ownership
                </h2>
                <p>
                  All platform content including music, branding, and visuals are protected.
                  Users may not reproduce or redistribute without proper authorization.
                </p>
              </section>

              <section className="hover:text-white transition duration-300">
                <h2 className="text-xl font-semibold text-cyan-400 mb-2">
                  4. Payments & Subscriptions
                </h2>
                <p>
                  Subscription fees are billed automatically. You may cancel anytime,
                  but refunds are subject to our Refund Policy.
                </p>
              </section>

              <section className="hover:text-white transition duration-300">
                <h2 className="text-xl font-semibold text-yellow-400 mb-2">
                  5. Termination
                </h2>
                <p>
                  We reserve the right to suspend or terminate accounts that violate our terms.
                </p>
              </section>

            </div>

            <div className="mt-10 border-t border-white/10 pt-8">

              <label className="flex items-center gap-3 cursor-pointer group">
                <input
                  type="checkbox"
                  checked={accepted}
                  onChange={() => setAccepted(!accepted)}
                  className="w-5 h-5 accent-indigo-500"
                />
                <span className="text-gray-300 group-hover:text-white transition">
                  I have read and agree to the Terms & Conditions
                </span>
              </label>

              <button
                disabled={!accepted}
                onClick={onClose}
                className={`mt-6 px-8 py-3 rounded-full transition-all duration-300 shadow-lg ${
                  accepted
                    ? "bg-indigo-600 hover:bg-indigo-700 hover:shadow-indigo-500/40"
                    : "bg-gray-600 cursor-not-allowed"
                }`}
              >
                Accept & Continue
              </button>

            </div>

          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Terms;
