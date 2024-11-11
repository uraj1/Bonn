import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Check, Clock, Loader } from 'lucide-react';

const Timeline = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const steps = [
    {
      title: "Data Collection and Preparation",
      description: "Loaded demand data for various products across North India, ensuring accuracy by removing irrelevant columns and renaming fields.",
      status: "completed",
    },
    {
      title: "Demand Aggregation",
      description: "Aggregated monthly demand by sub-district, analyzing the distribution to identify areas with the highest needs.",
      status: "completed",
    },
    {
      title: "Preliminary Analysis",
      description: "Analyzed the demand to gain insights into regional requirements and prioritize high-demand locations.",
      status: "completed",
    },
    {
      title: "Clustering and Facility Location",
      description: "Applied clustering to segment regions and identify optimal locations for manufacturing plants and warehouses.",
      status: "completed",
    },
    {
      title: "Optimization Modeling",
      description: "Built an optimization model to determine the ideal number and location of plants, taking into account capacity and demand needs.",
      status: "completed",
    },
    {
      title: "Network Design and Visualization",
      description: "Designed a supply chain network layout using geospatial tools to visualize potential locations and routes.",
      status: "in-progress",
    },
    {
      title: "Finalized Strategy and Awaiting Implementation",
      description: "Reviewed logistics strategies and are in the process of securing resources for the operational launch phase.",
      status: "pending",
    },
  ];

  const getIcon = (status: string) => {
    switch (status) {
      case 'completed':
        return <Check className="w-6 h-6 text-green-500" />;
      case 'in-progress':
        return <Loader className="w-6 h-6 text-blue-500 animate-spin" />;
      case 'pending':
        return <Clock className="w-6 h-6 text-gray-500" />;
      default:
        return null;
    }
  };

  return (
    <div className="py-24 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Project Timeline</h2>
        <div
          ref={ref}
          className="relative"
        >
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: index * 0.1 }}
              className="relative pl-8 pb-8 last:pb-0"
            >
              <div className="absolute left-0 top-0">
                {getIcon(step.status)}
              </div>
              {index !== steps.length - 1 && (
                <div className="absolute left-3 top-6 bottom-0 w-px bg-gray-200 dark:bg-gray-700" />
              )}
              <div className="ml-6">
                <h3 className="text-lg font-semibold mb-2">{step.title}</h3>
                <p className="text-gray-600 dark:text-gray-400">{step.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Timeline;