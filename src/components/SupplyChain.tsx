import React from "react";
import { motion } from "framer-motion";

const SupplyChainPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 text-gray-800 dark:text-gray-100 font-sans p-4">
      {/* Content Section */}
      <main className="mt-16">
        <div className="max-w-5xl mx-3">
          <div>
            <h2 className="text-l text-blue-600 dark:text-blue-400 uppercase font-semibold">
              Line of Business Solutions
            </h2>
            <h1 className="text-7xl font-bold mt-4">Supply Chain</h1>
            <p className="text-lg text-gray-600 dark:text-gray-400 mt-4">
              Connect people, systems and things across the extended business
              ecosystem with supply chain management solutions
            </p>
          </div>

          {/* Percentage Section */}
          <div className="mt-12 flex flex-col items-end">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-blue-500 dark:text-blue-400 text-8xl font-extrabold"
            >
              44%
            </motion.div>
            <p className="text-gray-600 dark:text-gray-400 mt-4 text-right max-w-sm">
              of respondents said that digital transformation was the main
              driver for digitizing supply chain operations
            </p>
          </div>
        </div>
      </main>
    </div>
  );
};

export default SupplyChainPage;
