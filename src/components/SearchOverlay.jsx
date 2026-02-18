import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Search } from "lucide-react";

const categories = [
  { id: 1, name: "Pop", color: "from-indigo-500 to-blue-500" },
  { id: 2, name: "Hip Hop", color: "from-purple-500 to-indigo-500" },
  { id: 3, name: "Podcasts", color: "from-blue-500 to-cyan-500" },
  { id: 4, name: "Live Events", color: "from-indigo-600 to-purple-600" },
  { id: 5, name: "Indie", color: "from-blue-600 to-indigo-600" },
  { id: 6, name: "Electronic", color: "from-cyan-500 to-blue-500" },
];

const SearchOverlay = ({ isOpen, onClose }) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 z-[100] bg-black/70 backdrop-blur-sm flex md:items-center md:justify-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0, y: 30 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.9, opacity: 0, y: 30 }}
            transition={{ duration: 0.3 }}
            className="w-full h-full md:h-auto md:w-[90%] md:max-w-4xl bg-gradient-to-br from-indigo-950 via-indigo-900 to-blue-900 md:rounded-3xl p-6 md:p-10 overflow-y-auto"
          >
            {/* Header */}
            <div className="flex justify-between items-center mb-8">
              <h2 className="text-2xl font-bold text-white">Search</h2>
              <button
                onClick={onClose}
                className="p-2 rounded-full bg-white/10 hover:bg-white/20 transition"
              >
                <X className="text-white" size={22} />
              </button>
            </div>

            {/* Input */}
            <div className="relative mb-10">
              <Search
                className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-300"
                size={18}
              />
              <input
                type="text"
                placeholder="What do you want to listen to?"
                className="w-full bg-white/10 border border-white/20 rounded-full pl-12 pr-5 py-3 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-400"
              />
            </div>

            {/* Categories */}
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {categories.map((cat) => (
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  key={cat.id}
                  className={`rounded-2xl p-6 bg-gradient-to-br ${cat.color} cursor-pointer shadow-lg`}
                >
                  <p className="text-white font-semibold text-lg">
                    {cat.name}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default SearchOverlay;
