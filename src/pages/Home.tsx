import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import PageTransition from "../components/PageTransition";
import Categories from "../components/Categories";
import { ArrowRight, Package2, Truck, BarChart3 } from "lucide-react";
import { useNavigate } from "react-router-dom";
import SupplyChainPage from "../components/SupplyChain";

const Home = () => {
  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate("/case-study");
  };

  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const features = [
    {
      icon: Package2,
      title: "Inventory Management",
      description:
        "Real-time tracking and optimization of stock levels across all locations.",
    },
    {
      icon: Truck,
      title: "Distribution Network",
      description:
        "Efficient routing and delivery systems for timely product distribution.",
    },
    {
      icon: BarChart3,
      title: "Analytics",
      description:
        "Data-driven insights for better decision making and forecasting.",
    },
  ];

  return (
    <PageTransition>
      <div className="pt-16">
        {/* Hero Section */}
        <div className="relative h-[90vh] overflow-hidden">
          <video
            className="absolute inset-0 w-full h-full object-cover"
            autoPlay
            loop
            muted
            playsInline
          >
            <source
              src="https://static.istockphoto.com/display-sets/istock/homepage/hero/iStock-1094872084-1252621883-1321322687-958158098.mp4"
              type="video/mp4"
            />
          </video>
          <div className="absolute inset-0 bg-black/50" />
          <div className="relative h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center">
            <div className="text-white">
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Supply Chain Management{" "}
                <span className="text-blue-400">and Solutions</span>
              </h1>
              <p className="text-xl md:text-2xl mb-8 text-gray-200">
                Bonn Group: Revolutionizing Supply Chain Operations
              </p>
              <button
                onClick={handleNavigate}
                className="inline-flex items-center px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors"
              >
                Solutions <ArrowRight className="ml-2" size={20} />
              </button>
            </div>
          </div>
        </div>

        <SupplyChainPage/>

        {/* Features Section */}
        <div ref={ref} className="py-24 bg-white dark:bg-gray-900">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Our Supply Chain Solutions
              </h2>
              <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
                Leveraging cutting-edge technology to optimize every aspect of
                the supply chain
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              {features.map((feature, index) => {
                const Icon = feature.icon;
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ delay: index * 0.2 }}
                    className="p-6 rounded-xl bg-gray-50 dark:bg-gray-800 shadow-lg"
                  >
                    <Icon className="w-12 h-12 text-blue-600 dark:text-blue-400 mb-4" />
                    <h3 className="text-xl font-semibold mb-2">
                      {feature.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400">
                      {feature.description}
                    </p>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Categories Section */}
        <Categories />

        
      </div>
    </PageTransition>
  );
};

export default Home;
