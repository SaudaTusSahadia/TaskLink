import React from 'react';
import { motion } from 'framer-motion';
import { CheckSquare } from 'lucide-react'; 
import img1 from '../assets/e3.jpeg';
import img2 from '../assets/E32.jpeg';

const ExtraSection3 = () => {
  return (
    <motion.section
      className="w-full py-16"
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <div className="px-6 flex flex-col-reverse lg:flex-row items-center gap-12">
        {/* Text Content */}
        <motion.div
          className="lg:w-1/2"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2 }}
        >
          <h2 className="text-4xl font-bold mb-4 flex items-center gap-2 ">
            <CheckSquare className="w-10 h-10 text-secondary" />
            Master Your Tasks with TaskLink
          </h2>
          <p className="text-lg mb-6 leading-relaxed text-gray-500">
            TaskLink helps you stay ahead of your schedule by organizing your workflow into manageable pieces. From personal to professional projects, keep everything on track in one place.
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            animate={{
              color: ['#2563eb', '#22c55e', '#d97706', '#db2777', '#2563eb'],
              transition: { duration: 6, repeat: Infinity },
            }}
            className="btn btn-outline px-6 py-2 rounded-lg shadow-lg text-white hover:bg-blue-700 transition"
          >
            Explore Features
          </motion.button>
        </motion.div>

        {/* Image Section */}
        <motion.div
          className="lg:w-1/2 grid grid-cols-1 sm:grid-cols-2 gap-4 relative"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 1 }}
        >
          <motion.img
            src={img1}
            animate={{ y: [-50, -100, -50] }}
            transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
            alt="Task Preview"
            className="rounded-2xl shadow-xl object-cover h-70 w-100"
            whileHover={{ scale: 1.03 }}
          />
          <motion.img
            src={img2}
            animate={{ x: [90, 250, 90] }}
            transition={{ duration: 25, delay:1, repeat: Infinity, ease: 'easeInOut' }}
            alt="Workflow Visual"
            className="rounded-2xl shadow-xl object-cover h-70 w-90 absolute"
            whileHover={{ scale: 1.03 }}
          />
        </motion.div>
      </div>
    </motion.section>
  );
};

export default ExtraSection3;
