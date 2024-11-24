import { useState, useMemo, useCallback } from "react";
import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const faqs = useMemo(
    () => [
      {
        question: "What is Supply Chain Management?",
        answer: "Supply chain management is the process of overseeing and improving the individual processes that make up an organization’s supply chain, from onboarding and liaising with trading partners to tracking international goods orders.",
      },
      {
        question: "Why is supply chain management important?",
        answer: "Supply chain management helps increase supply network efficiency and create an optimized supply chain that can reduce costs, mitigate risks, accelerate order processing times, and boost profits. A supply chain management system enables organizations to achieve these benefits faster and more reliably.",
      },
      {
        question: "Why is supply chain management solution?",
        answer: "A supply chain management solution is integrated software that connects the various points of a supply chain for supervision and analysis, from manufacturing and supply to purchasing and distribution. Supply chain management companies offer a range of solutions for different requirements.",
      },
      {
        question: "What are the benifits of using supply chain management software?",
        answer: "Supply chain management software allows for easy management and analysis of the distribution network, while also enabling efficient collaboration with trading partners. By understanding failings in a current process, supply chain managers can take steps to create an optimized supply chain.",
      },
    ],
    []
  ); // Memoize faqs to avoid unnecessary re-renders

  const toggleFAQ = useCallback(
    (index) => {
      setActiveIndex(activeIndex === index ? null : index);
    },
    [activeIndex]
  ); // Memoize toggleFAQ to avoid unnecessary re-renders

  return (
    <div className="bg-gradient-to-b from-blue-50 via-white to-gray-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          className="text-4xl font-extrabold text-center mb-12 text-gray-900 dark:text-white"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.2 }}
        >
          Frequently Asked Questions
        </motion.h2>
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              className={`rounded-xl shadow-md transition-transform transform hover:scale-105 bg-white dark:bg-gray-800 p-6 border ${
                activeIndex === index
                  ? "border-blue-500 dark:border-blue-400"
                  : "border-gray-200 dark:border-gray-700"
              }`}
              initial={{ opacity: 0, y: 10 }} 
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.15, delay: index * 0.03 }}
              layout // Optimize layout transitions
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="flex justify-between items-center w-full text-left text-lg font-medium text-gray-800 dark:text-gray-200 focus:outline-none"
              >
                {faq.question}
                <ChevronDown
                  className={`ml-2 w-5 h-5 transition-transform ${
                    activeIndex === index ? "rotate-180" : "rotate-0"
                  }`}
                />
              </button>
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={
                  activeIndex === index
                    ? { height: "auto", opacity: 1 }
                    : { height: 0, opacity: 0 }
                }
                transition={{ duration: 0.2 }} 
                className={`overflow-hidden mt-2 text-gray-600 dark:text-gray-400`}
              >
                <p>{faq.answer}</p>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FAQ;
