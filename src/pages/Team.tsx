import PageTransition from '../components/PageTransition';
import { motion } from 'framer-motion';
import { Mail, Phone } from 'lucide-react';

const teamMembers = [
  {
    name: 'Suyash Ranjan',
    email: '12117047@nitkkr.ac.in',
    designation: 'Product Developer',
    phone: '+91 8825211798',
    photo: 'https://drive.google.com/thumbnail?id=1ldrPgUpdern5RIFavImklQjtg5jgh-Vn',
  },
  {
    name: 'Umang Raj Verma',
    email: '12117043@nitkkr.ac.in',
    designation: 'Full Stack Data Engineer',
    phone: '+91 7766014193',
    photo: 'https://drive.google.com/thumbnail?id=1bgY2N6LAr3oUastIwJRumRs8O8dLmeod',
  },
  {
    name: 'Mohit Gupta',
    email: '12117051@nitkkr.ac.in',
    designation: 'Frontend Developer',
    phone: '+91 7877676528',
    photo: 'https://drive.google.com/thumbnail?id=1ohRXdnMcQ7FRBq7adT00XDe0do2689E4',
  },
  {
    name: 'Aakash Khanna',
    email: '12117038@nitkkr.ac.in',
    designation: 'Backend Developer',
    phone: '+91 8445682090',
    photo: 'https://drive.google.com/thumbnail?id=1U3Fe3nH9wp4e5TMksB6n1oQ2kJoo0KBA',
  },
  {
    name: 'Rahul Rao',
    email: '12117037@nitkkr.ac.in',
    designation: 'Frontend Developer',
    phone: '+91 8295970236',
    photo: 'https://drive.google.com/thumbnail?id=1iRUrdbNBF3kN_UUtUGSquE9kO7USp1wV',
  },
  {
    name: 'Raj Gupta',
    email: '12117018@nitkkr.ac.in',
    designation: 'Data Analyst',
    phone: '+91 8104463771',
    photo: 'https://drive.google.com/thumbnail?id=1E6eA3JGfREgxZC-Iq8mZ1okvJLPqtvBn',
  },
];

const mentor = {
  name: 'Dr. Rajiv Verma',
  email: ' rajivkkr@yahoo.com',
  designation: 'Project Mentor',
  phone: '+91 8295868855',
  photo: 'https://drive.google.com/thumbnail?id=1qAFSiSoecmxrKsQ9fXcKnsVrPmPAWKoW',
};

const Team = () => {
  return (
    <PageTransition>
      <motion.div
        className="pt-12 pl-8 pr-8 pb-16"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        {/* Project Mentor Section */}
        <div className="mt-12 mb-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <h2 className="text-3xl font-bold mb-3 text-center">Project Mentor</h2>
            <p className="text-gray-600 dark:text-gray-400 mb-5 text-center">
          Meet our project mentor.
        </p>
            <motion.div
              className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8 text-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
            >
              <img
                src={mentor.photo}
                alt={mentor.name}
                className="w-32 h-32 mx-auto rounded-full object-cover"
              />
              <h3 className="text-xl font-semibold mt-4">{mentor.name}</h3>
              <p className="text-blue-600 dark:text-blue-400">{mentor.designation}</p>
              <div className="flex items-center justify-center space-x-2 text-gray-600 dark:text-gray-400 mt-2">
                <a href={`mailto:${mentor.email}`} className="flex items-center space-x-2">
                  <Mail className="w-4 h-4" />
                  <span>{mentor.email}</span>
                </a>
              </div>
              <div className="flex items-center justify-center space-x-2 text-gray-600 dark:text-gray-400 mt-2">
                <a href={`tel:${mentor.phone}`} className="flex items-center space-x-2">
                  <Phone className="w-4 h-4" />
                  <span>{mentor.phone}</span>
                </a>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Meet the Team Section */}
        <h1 className="text-4xl font-bold mb-3 text-center">Meet the Team</h1>
        <p className="text-gray-600 dark:text-gray-400 mb-5 text-center">
          Get to know the team behind our project.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <motion.div
              key={index}
              className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-6 space-y-4 text-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <img
                src={member.photo}
                alt={member.name}
                className="w-24 h-24 mx-auto rounded-full object-cover"
              />
              <h3 className="text-xl font-semibold">{member.name}</h3>
              <p className="text-blue-600 dark:text-blue-400">{member.designation}</p>
              <div className="flex items-center justify-center space-x-2 text-gray-600 dark:text-gray-400 mt-2">
                <a href={`mailto:${member.email}`} className="flex items-center space-x-2">
                  <Mail className="w-4 h-4" />
                  <span>{member.email}</span>
                </a>
              </div>
              <div className="flex items-center justify-center space-x-2 text-gray-600 dark:text-gray-400 mt-2">
                <a href={`tel:${member.phone}`} className="flex items-center space-x-2">
                  <Phone className="w-4 h-4" />
                  <span>{member.phone}</span>
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </PageTransition>
  );
};

export default Team;
