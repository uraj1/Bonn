import { motion } from "framer-motion";

const Solution = () => {
  const sections = [
    {
      img: "https://via.placeholder.com/400",
      title: "Innovative Logistics",
      text: "Our logistics are powered by AI to ensure faster, more reliable delivery across the nation.",
    },
    {
      img: "https://via.placeholder.com/400",
      title: "Eco-Friendly Practices",
      text: "We’re committed to reducing our environmental footprint through sustainable methods.",
    },
    {
      img: "https://via.placeholder.com/400",
      title: "Customer-Centric Approach",
      text: "We prioritize customer satisfaction with tailored services and feedback-driven improvements.",
    },
  ];

  const cards = [
    {
      img: "https://via.placeholder.com/200",
      title: "AI-Driven Route Optimization",
      text: "Minimizing travel time and fuel consumption through smart technology.",
    },
    {
      img: "https://via.placeholder.com/200",
      title: "Real-Time Inventory",
      text: "Enhancing supply chain efficiency with live tracking.",
    },
    {
      img: "https://via.placeholder.com/200",
      title: "Demand Forecasting",
      text: "Using predictive analytics to meet market demands effectively.",
    },
  ];

  return (
    <div className="pt-16 bg-gray-50 dark:bg-gray-900">
      {/* Hero Section */}
      <div className="bg-blue-700 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Solutions</h1>
          <p className="text-xl text-green-100 max-w-2xl">
            Transforming challenges into opportunities with cutting-edge
            technology and innovative solutions.
          </p>
        </div>
      </div>

      {/* Card Section */}
      <div className="py-16 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 ">
          <h2 className="text-3xl font-bold text-center mb-8 dark:text-white-900">
            Our Key Features
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {cards.map((card, index) => (
              <motion.div
                key={index}
                className="bg-gray-100 rounded-lg shadow-xl p-6 text-center dark:bg-gray-800"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 * index }}
              >
                <div className="w-60 h-60 rounded-full overflow-hidden mx-auto mb-4">
                  <img
                    src={card.img}
                    alt={card.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-xl font-bold mb-2 text-black dark:text-white">
                  {card.title}
                </h3>
                <p className="text-black dark:text-gray-200">{card.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Image Section */}

      <div className="py-16 px-20 bg-gray-50 dark:bg-gradient-to-b dark:from-gray-700 dark:via-gray-600 dark:to-gray-800">
        {sections.map((section, index) => (
          <div
            key={index}
            className={`flex flex-col ${
              index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
            } items-center mb-16`}
          >
            {/* Image Section */}
            <div className="md:w-1/2 p-6 flex justify-center relative">
              <div className="w-full max-w-md h-72 rounded-lg overflow-hidden shadow-2xl relative transition-transform duration-300 transform hover:scale-105">
                <img
                  src={section.img}
                  alt={section.title}
                  className="w-full h-full object-cover rounded-lg"
                />
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-40"></div>
              </div>
            </div>

            {/* Text Section */}
            <div className="md:w-1/2 p-8">
              <h3 className="text-3xl font-semibold text-gray-900 dark:text-white mb-4">
                {section.title}
              </h3>
              <p className="text-lg text-gray-700 dark:text-gray-300">
                {section.text}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Live Map Section */}
      <div className="py-16 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-8">
            Our Coverage Across India
          </h2>
          <div className="flex justify-center">
            <iframe
              src="https://maps.google.com/maps?q=India&t=&z=5&ie=UTF8&iwloc=&output=embed"
              width="600"
              height="450"
              style={{ border: 0 }}
              allowFullScreen={true}
              loading="lazy"
              title="India Map"
            ></iframe>
          </div>
        </div>
      </div>

      {/* Text Sections */}
      {/* <div className="py-16 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          <div>
            <h3 className="text-3xl font-bold mb-4">Empowering Businesses</h3>
            <p className="text-gray-600">
              By leveraging cutting-edge technology and innovative practices, we
              empower businesses to thrive in a competitive landscape.
            </p>
          </div>
          <div>
            <h3 className="text-3xl font-bold mb-4">Sustainable Solutions</h3>
            <p className="text-gray-600">
              Our commitment to sustainability drives us to adopt practices that
              minimize environmental impact while maximizing efficiency.
            </p>
          </div>
          <div>
            <h3 className="text-3xl font-bold mb-4">Customer-First Approach</h3>
            <p className="text-gray-600">
              At the heart of everything we do is a focus on delivering value
              and satisfaction to our customers.
            </p>
          </div>
        </div>
      </div> */}
    </div>
  );
};

export default Solution;
