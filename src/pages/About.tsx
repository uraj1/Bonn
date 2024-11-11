import PageTransition from '../components/PageTransition';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Award, Users, Target, Truck } from 'lucide-react';

const About = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const stats = [
    { icon: Users, value: '10+', label: 'Employees' },
    { icon: Truck, value: '500+', label: 'Delivery Vehicles' },
    { icon: Target, value: '800+', label: 'Cities Covered' },
    { icon: Award, value: '25+', label: 'Years Experience' },
  ];

  return (
    <PageTransition>
      <div className="pt-16 bg-gray-50 dark:bg-gray-900">
        {/* Hero Section */}
        <div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.h1
              className="text-4xl md:text-5xl font-bold mb-6"
              initial={{ opacity: 0, y: -50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.2 }}
            >
              About Bonn
            </motion.h1>
            <motion.p
              className="text-xl text-blue-100 max-w-2xl"
              initial={{ opacity: 0, y: -50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.3 }}
            >
              Established with a passion for quality and innovation, Bonn is a leading name in the bakery and confectionery industry, dedicated to crafting delicious, nutritious, and delightful products worldwide.
            </motion.p>
          </div>
        </div>

        {/* Stats Section */}
        <div className="py-16 bg-white dark:bg-gray-900">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              ref={ref}
              className="grid grid-cols-2 md:grid-cols-4 gap-8"
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.4 }}
            >
              {stats.map((stat, index) => {
                const Icon = stat.icon;
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ delay: index * 0.1 }}
                    className="text-center"
                  >
                    <Icon className="w-8 h-8 mx-auto text-blue-600 dark:text-blue-400 mb-4" />
                    <div className="text-3xl font-bold mb-2">{stat.value}</div>
                    <div className="text-gray-600 dark:text-gray-400">{stat.label}</div>
                  </motion.div>
                );
              })}
            </motion.div>
          </div>
        </div>

      {/* Product Range Section */}
      <div className="py-16 bg-gray-50 dark:bg-gray-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.h2
              className="text-3xl font-bold mb-6 text-center"
              initial={{ opacity: 0, y: -50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.5 }}
            >
              Our Product Range
            </motion.h2>
            <motion.p
              className="text-lg text-gray-600 dark:text-gray-400 text-center mb-8"
              initial={{ opacity: 0, y: -50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.6 }}
            >
              We offer a variety of products crafted with premium ingredients to ensure the best taste and quality. From delicious breads and buns to healthy cookies and indulgent cakes, we have something for everyone.
            </motion.p>

            <div
              ref={ref}
              className="grid md:grid-cols-3 gap-12"
            >
              {[
                {
                  title: 'Bread & Buns',
                  text: 'From classic white and whole grain to specialty buns, Bonn’s breads are crafted to perfection for every meal and occasion.',
                  img: 'https://www.jiomart.com/images/product/original/490006437/bonn-brown-bread-400g-product-images-o490006437-p490006437-0-202407171835.jpg?im=Resize=(420,420)',
                },
                {
                  title: 'Cookies & Biscuits',
                  text: 'Enjoy a delicious variety of cookies and biscuits in flavors like chocolate, butter, and millet—a tasty yet healthy snack choice.',
                  img: 'https://3.imimg.com/data3/MR/SI/MY-139721/butter-bonn-500x500.jpg',
                },
                {
                  title: 'Cakes & Pastries',
                  text: 'Indulge in our selection of cakes and pastries, crafted with premium ingredients, perfect for celebrating special moments.',
                  img: 'https://m.media-amazon.com/images/I/71T-mMZBU8L.jpg',
                },
              ].map((product, index) => (
                <motion.div
                  key={index}
                  className="group relative overflow-hidden rounded-xl shadow-lg"
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.3 }}
                >
                  <div className="aspect-w-16 aspect-h-9">
                    <img
                      src={product.img}
                      alt={product.title}
                      className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex flex-col justify-end p-6 text-white">
                    <motion.h3
                      className="text-xl font-semibold mb-4"
                      initial={{ opacity: 0, y: 20 }}
                      animate={inView ? { opacity: 1, y: 0 } : {}}
                      transition={{ delay: 0.4 }}
                    >
                      {product.title}
                    </motion.h3>
                    <motion.p
                      className="text-sm text-gray-200"
                      initial={{ opacity: 0, y: 20 }}
                      animate={inView ? { opacity: 1, y: 0 } : {}}
                      transition={{ delay: 0.6 }}
                    >
                      {product.text}
                    </motion.p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>


        {/* Innovative Supply Chain Solutions Section */}
        <div className="py-16 bg-gray-50 dark:bg-gray-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.h2
              className="text-3xl font-bold mb-6 text-center"
              initial={{ opacity: 0, y: -50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.7 }}
            >
              Innovative Supply Chain Solutions
            </motion.h2>
            <motion.p
              className="text-lg text-gray-600 dark:text-gray-400 text-center mb-8"
              initial={{ opacity: 0, y: -50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.8 }}
            >
              As a forward-thinking company, Bonn leverages Artificial Intelligence (AI) to enhance our supply chain operations, ensuring efficient product delivery and reduced environmental impact.
            </motion.p>
            <div className="grid md:grid-cols-2 gap-12">
              {[
                {
                  title: 'Demand Forecasting with AI',
                  text: 'Using AI-powered demand forecasting, we predict product demand accurately, minimizing wastage and ensuring availability. This predictive approach maintains optimal stock levels and reduces overproduction.',
                  img: 'https://www.zionex.com/wp-content/uploads/2023/01/deeplearning-scaled.jpg',
                },
                {
                  title: 'Real-Time Inventory Tracking',
                  text: 'AI in real-time inventory tracking improves visibility into stock levels, enabling timely restocking and efficient logistics. This predictive capability helps businesses minimize stockouts and overstock, resulting in cost savings and enhanced customer satisfaction.',
                  img: 'https://www.clipartmax.com/png/middle/69-697978_inventory-management-retail-inventory-management-system.png',
                },
                {
                  title: 'Route Optimization',
                  text: 'With AI-driven route optimization, we minimize transportation costs and carbon emissions, calculating efficient routes for cost-effective distribution with a reduced environmental footprint.',
                  img: 'https://nuvizz.com/wp-content/uploads/2023/05/best-route.jpg',
                },
                {
                  title: 'Quality Control with Machine Learning',
                  text: 'Machine learning models in our production line monitor quality in real-time, ensuring each product meets Bonn’s high standards and addressing quality issues proactively.',
                  img: 'https://www.gmp-compliance.org/files/eca/userImages/header.img/ECA-AI-GxP-IT-Basics.jpg',
                },
              ].map((solution, index) => (
                <motion.div
                  key={index}
                  className="bg-white shadow-lg rounded-lg overflow-hidden"
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.5 }}
                >
                  <div className="flex items-center p-6">
                    <img
                      src={solution.img}
                      alt={solution.title}
                      className="w-16 h-16 object-cover rounded-full mr-6"
                    />
                    <div>
                      <h3 className="text-xl font-semibold mb-2">{solution.title}</h3>
                      <p className="text-gray-600 dark:text-gray-400">{solution.text}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </PageTransition>
  );
};

export default About;
