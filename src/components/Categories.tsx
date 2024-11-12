import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

function Categories() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <div className="py-24 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          className="text-3xl md:text-4xl font-bold text-center mb-12"
          initial={{ opacity: 0, y: -50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.1 }}
        >
          Our Categories
        </motion.h2>
        <div ref={ref} className="grid md:grid-cols-3 gap-8">
          {[
            {
              image: 'https://bonn.in/new-images/blog/b3.jpg',
              title: 'BREADS',
              description: 'UNWRAP THE TASTE OF REAL CHOCOLATE',
            },
            {
              image: 'https://bonn.in/new-images/blog/coconut%20blog%20image.jpg',
              title: 'COOKIES',
              description: 'HAR BITE SMILE WALI',
            },
            {
              image: 'https://bonn.in/new-images/blog/front-view-black-bread.jpg',
              title: 'CAKES AND PASTRIES',
              description: 'INDIA KA CRUNCHY COCONUT',
            },
          ].map((category, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: index * 0.2 }}
              className="group relative overflow-hidden rounded-xl shadow-lg transform transition-transform duration-500"
            >
              <div className="aspect-w-16 aspect-h-9">
                <img
                  src={category.image}
                  alt={category.title}
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex flex-col justify-end p-6 text-white">
                <motion.h3
                  className="text-xl font-bold mb-2"
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.4 }}
                >
                  {category.title}
                </motion.h3>
                <motion.p
                  className="text-sm text-gray-200"
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.6 }}
                >
                  {category.description}
                </motion.p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Categories;
