import React from "react";
import { motion } from "framer-motion";

const SupplyChainPage: React.FC = () => {
  return (
    <div className="relative min-h-screen bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-100 font-sans flex items-center">
      {/* Gradient Overlay */}
      <div
  className="absolute inset-0 z-10 pointer-events-none bg-gradient-to-b from-gray-300 via-gray-300/30 to-transparent dark:from-black dark:via-black/50 dark:to-transparent"
></div>


      {/* Main Section */}
      <main className="relative z-20 w-full px-2 sm:px-8 lg:px-8 py-0"> 
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Left Section */}
          <div className="space-y-6 relative top-9">
            <h2 className="text-base text-blue-600 dark:text-blue-400 uppercase tracking-widest font-semibold">
              Line of Business Solutions
            </h2>
            <h1 className="text-6xl sm:text-7xl font-bold leading-tight">
              Supply Chain
            </h1>
            <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-400 leading-relaxed">
              Connect people, systems, and things across the extended business
              ecosystem with supply chain management solutions.
            </p>
          </div>

          {/* Right Section (Percentage Section) */}
          <div className="text-right relative">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-blue-500 dark:text-blue-400 text-7xl sm:text-9xl font-extrabold"
            >
              44%
            </motion.div>
            <p className="text-gray-600 dark:text-gray-400 mt-4 leading-relaxed">
              of respondents said that digital transformation was the main
              driver for digitizing supply chain operations.
            </p>
          </div>
        </div>
      </main>
    </div>
  );
};

export default SupplyChainPage;
