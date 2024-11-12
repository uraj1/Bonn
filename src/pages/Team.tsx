import PageTransition from '../components/PageTransition';
import { motion } from 'framer-motion';
import { Mail, Phone } from 'lucide-react';

const teamMembers = [
  {
    name: 'John Doe',
    email: 'john.doe@example.com',
    designation: 'Software Engineer',
    phone: '+91 7000000001',
    photo: 'path/to/photo1.jpg',
  },
  {
    name: 'Jane Smith',
    email: 'jane.smith@example.com',
    designation: 'Frontend Developer',
    phone: '+91 7000000002',
    photo: 'path/to/photo2.jpg',
  },
  {
    name: 'Alex Johnson',
    email: 'alex.johnson@example.com',
    designation: 'Backend Developer',
    phone: '+91 7000000003',
    photo: 'path/to/photo3.jpg',
  },
  {
    name: 'Chris Lee',
    email: 'chris.lee@example.com',
    designation: 'UI/UX Designer',
    phone: '+91 7000000004',
    photo: 'path/to/photo4.jpg',
  },
  {
    name: 'Pat Taylor',
    email: 'pat.taylor@example.com',
    designation: 'QA Tester',
    phone: '+91 7000000005',
    photo: 'path/to/photo5.jpg',
  },
  {
    name: 'Sam Brown',
    email: 'sam.brown@example.com',
    designation: 'DevOps Engineer',
    phone: '+91 7000000006',
    photo: 'path/to/photo6.jpg',
  },
];

const mentor = {
  name: 'Dr. Emily Clark',
  email: 'emily.clark@example.com',
  designation: 'Project Mentor',
  phone: '+91 7000000007',
  photo: 'path/to/mentor-photo.jpg',
};

const Team = () => {
  return (
    <PageTransition>
      <div className="pt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <h1 className="text-4xl font-bold mb-8">Meet the Team</h1>
          <p className="text-gray-600 dark:text-gray-400 mb-12">
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
                <div className="flex items-center justify-center space-x-2 text-gray-600 dark:text-gray-400">
                  <Mail className="w-4 h-4" />
                  <span>{member.email}</span>
                </div>
                <div className="flex items-center justify-center space-x-2 text-gray-600 dark:text-gray-400">
                  <Phone className="w-4 h-4" />
                  <span>{member.phone}</span>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Project Mentor Section */}
          <div className="mt-16">
            <h2 className="text-3xl font-bold mb-8">Project Mentor</h2>
            <motion.div
              className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8 text-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: teamMembers.length * 0.1 }}
            >
              <img
                src={mentor.photo}
                alt={mentor.name}
                className="w-32 h-32 mx-auto rounded-full object-cover"
              />
              <h3 className="text-xl font-semibold mt-4">{mentor.name}</h3>
              <p className="text-blue-600 dark:text-blue-400">{mentor.designation}</p>
              <div className="flex items-center justify-center space-x-2 text-gray-600 dark:text-gray-400">
                <Mail className="w-4 h-4" />
                <span>{mentor.email}</span>
              </div>
              <div className="flex items-center justify-center space-x-2 text-gray-600 dark:text-gray-400">
                <Phone className="w-4 h-4" />
                <span>{mentor.phone}</span>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </PageTransition>
  );
};

export default Team;
