import React from "react";
import { BiDetail } from "react-icons/bi";
import { Link } from "react-router"; 
import { motion } from "framer-motion";

const FeaturedTasks = ({ task }) => {
  const { _id, taskName, description, image } = task;

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      whileHover={{ scale: 1.03, boxShadow: "0px 10px 20px rgba(0,0,0,0.15)" }}
      transition={{ duration: 1 }}
      className="rounded-lg overflow-hidden border-2 border-secondary bg-gradient-to-l from-base-300 to-base-200 shadow-xl hover:shadow-md transition-all duration-300"
    >
      <img
        src={image}
        alt={taskName}
        className="w-full h-48 object-cover px-2 pt-2 rounded"
      />

      <div className="p-5 text-center space-y-3">
        <h2 className="text-xl font-semibold ">{taskName}</h2>
        <p className="text-sm">{description}</p>

        <div className="pt-2">
          <Link to={`/taskDetails/${_id}`}>
            <button className="btn btn-primary w-full flex items-center justify-center gap-2 text-white font-semibold hover:bg-blue-700 transition rounded-lg">
              <BiDetail size={20} /> See Details
            </button>
          </Link>
        </div>
      </div>
    </motion.div>
  );
};

export default FeaturedTasks;
