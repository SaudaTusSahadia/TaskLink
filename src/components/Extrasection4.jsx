import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, CalendarCheck, Briefcase, Handshake, SearchCheck } from 'lucide-react';
import img1 from '../assets/e41.jpeg';
import img2 from '../assets/e42.jpeg';

const projects = [
  {
    img: img1,
    location: 'Remote · Web Development',
    client: 'Posted by: John Carter',
    date: 'Deadline: 15 July 2025',
    title: 'Build a Responsive Portfolio Website',
    description:
      "Client needs a modern portfolio website using React and Tailwind CSS. Must include dark mode, animations, and deployment support.",
  },
  {
    img: img2,
    location: 'Hybrid · Data Analysis',
    client: 'Posted by: Dr. Erfan Rahman',
    date: 'Deadline: 5 August 2025',
    title: 'Data Dashboard for Survey Analytics',
    description:
      "Design and implement an interactive dashboard to visualize survey results with filters, graphs, and export features using MERN stack.",
  },
];

const Extrasection4 = () => {
  return (
    <section className="md:py-16 py-10 px-3">
      <div>
        {/* Section Title */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold inline-flex items-center gap-2">
            <Briefcase className="w-8 h-8 text-primary" />
            Latest Freelance Tasks
          </h2>
          <div className="h-1 w-24 bg-primary mx-auto mt-2 rounded-full" />
        </div>

        {/* Projects List */}
        <div className="space-y-10">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className="border-2 border-accent rounded-xl shadow-lg p-6 flex flex-col md:flex-row items-center gap-6"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              whileHover={{ scale: 1.01 }}
            >
              <img
                src={project.img}
                alt={project.title}
                className="w-full md:w-1/3 rounded-lg shadow-md object-cover h-[250px]"
              />
              <div className="flex-1 space-y-4">
                <div className="flex flex-col sm:flex-row sm:justify-between text-sm text-accent gap-2">
                  <div className="flex items-center gap-2">
                    <MapPin className="w-4 h-4" />
                    <span>{project.location}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CalendarCheck className="w-4 h-4" />
                    <span>{project.date}</span>
                  </div>
                </div>
                <h3 className="text-xl text-primary font-semibold">{project.title}</h3>
                <p className="text-gray-700 dark:text-gray-400">{project.description}</p>
                <p className="text-sm text-gray-500 italic">{project.client}</p>
                <div className="flex flex-wrap gap-4 mt-4">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    className="btn bg-green-600 text-white hover:bg-green-700 px-4 py-2 rounded-lg flex items-center gap-2"
                  >
                    <SearchCheck size={16} />
                    View Task
                  </motion.button>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    className="btn border border-green-600 text-green-600 hover:bg-green-600 hover:text-white px-4 py-2 rounded-lg flex items-center gap-2"
                  >
                    <Handshake size={16} />
                    Apply Now
                  </motion.button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Extrasection4;
