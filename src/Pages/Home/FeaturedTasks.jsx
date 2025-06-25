import React, { useContext } from "react";
import { BiEdit } from "react-icons/bi";
import { Link, useNavigate } from "react-router";
import { motion } from "framer-motion";
import { AuthContext } from "../../Provider/AuthProvider";

const FeaturedTasks = ({ task }) => {
  const { _id, taskName, description, image } = task;
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className="bg-gradient-to-br from-base-100 to-base-300 rounded-2xl shadow-md overflow-hidden flex flex-col md:flex-row items-stretch hover:shadow-lg transition-shadow duration-300"
    >
      <img
        src={image}
        alt="Task"
        className="w-full md:w-1/3 object-cover h-40 md:h-48 rounded-t-2xl md:rounded-t-none md:rounded-l-2xl"
      />

      <div className="p-4 flex flex-col justify-between flex-1">
        <div>
          <h2 className="text-xl font-bold text-blue-700 mb-1">{taskName}</h2>
          <p className="text-slate-600 text-sm leading-snug">
            {description?.slice(0, 80)}...
          </p>
        </div>

        <div className="mt-4 flex justify-end">
          <Link to={`/taskDetails/${_id}`}>
            <button className="flex items-center gap-2 px-3 py-1.5 bg-gradient-to-r from-primary to-secondary text-sm rounded-lg hover:scale-105 transition-transform duration-200">
              <BiEdit className="text-base" />
              <span>See Details</span>
            </button>
          </Link>
        </div>
      </div>
    </motion.div>
  );
};

export default FeaturedTasks;
