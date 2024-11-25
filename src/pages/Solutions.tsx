import { motion } from "framer-motion";

const Solution = () => {
  const chapters = [
    {
      chapter: "1",
      title: "INTRODUCTION",
      sections: [
        { subTitle: "Background of Project", page: "1" },
        { subTitle: "Objective of the Project", page: "2" },
        { subTitle: "Scope", page: "3" },
        { subTitle: "Learnings", page: "" },
      ],
    },
    {
      chapter: "2",
      title: "CASE STUDY OF BONN",
      sections: [
        { subTitle: "Overview of BONN’s Operations" },
        { subTitle: "Demand Locations in India" },
        { subTitle: "Transportation Cost Analysis" },
      ],
    },
    {
      chapter: "3",
      title: "DEMAND ESTIMATION USING PYTHON (DA + ML)",
      sections: [
        { subTitle: "Demand Mapping on Map" },
        { subTitle: "Clustering Techniques" },
        { subTitle: "Sub-Clustering" },
      ],
    },
    {
      chapter: "4",
      title: "FINDING OUT BEST POSSIBLE LOCATIONS",
      sections: [
        { subTitle: "Theory of Centre of Gravity in SCM" },
        { subTitle: "Calculation Methodology" },
        { subTitle: "Results" },
      ],
    },
    {
      chapter: "5",
      title: "FINALISING FACILITIES AND THEIR CAPACITY",
      sections: [
        { subTitle: "Plant Selection" },
        { subTitle: "Capacity Allocation" },
        { subTitle: "Distribution Warehouse" },
      ],
    },
    {
      chapter: "6",
      title: "LOGISTICS PLANNING",
      sections: [
        { subTitle: "Third Party vs Self Sufficient" },
        { subTitle: "Available Third Parties" },
        { subTitle: "Pros and Cons" },
        { subTitle: "Final Verdict" },
      ],
    },
    {
      chapter: "7",
      title: "VISUALIZING THE NETWORK & COSTING: Version 1",
      sections: [
        { subTitle: "Proposed Network Layout" },
        { subTitle: "Cost Analysis" },
        { subTitle: "Pros and Cons" },
      ],
    },
    {
      chapter: "8",
      title: "VISUALIZING THE NETWORK & COSTING: Version 2",
      sections: [
        { subTitle: "Proposed Network Layout" },
        { subTitle: "Cost Analysis" },
        { subTitle: "Pros and Cons" },
      ],
    },
    {
      chapter: "9",
      title: "COMPARISON BETWEEN V1 & V2",
      sections: [],
    },
    {
      chapter: "10",
      title: "FINAL SOLUTION",
      sections: [],
    },
    {
      chapter: "11",
      title: "FUTURE OF AI/ML IN SUPPLY CHAIN",
      sections: [],
    },
  ];

  return (
    <div className="bg-gray-50 dark:bg-gray-900 pt-16">
    {/* Hero Section */}
    <div className="bg-blue-700 text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold mb-4">Case Study on Bonn</h1>
        <p className="text-xl max-w-2xl">
          A comprehensive study on supply chain optimization using AI/ML for
          BONN’s operations.
        </p>
      </div>
    </div>

    {/* Chapters Section */}
    <div className="py-16 px-6 lg:px-12">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-8">
          Detailed Report Chapters
        </h2>
        <div className="space-y-8">
          {chapters.map((chapter, index) => (
            <motion.a
              key={index}
              href={`/chapter/${chapter.chapter}`} // Open a new page for the chapter
              target="_blank" // Open in a new tab
              rel="noopener noreferrer"
              className="block bg-gray-100 dark:bg-gray-800 rounded-lg shadow-lg p-6 cursor-pointer hover:bg-gray-200 dark:hover:bg-gray-700 transition"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 * index }}
            >
              <h3 className="text-2xl font-semibold mb-4 text-blue-600">
                Chapter {chapter.chapter}: {chapter.title}
              </h3>
              <ul className="space-y-2">
                {chapter.sections.map((section, i) => (
                  <li
                    key={i}
                    className="text-lg text-gray-700 dark:text-gray-300 pl-4 border-l-4 border-blue-500"
                  >
                    {section.subTitle}
                  </li>
                ))}
              </ul>
            </motion.a>
          ))}
        </div>
      </div>
    </div>
  </div>
  );
};

export default Solution;
