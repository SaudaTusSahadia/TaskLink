import React from "react";
import { useLoaderData } from "react-router";
import { motion } from "framer-motion";

const TaskDetails = () => {
  const task = useLoaderData();

  if (!task) {
    return (
      <div className="text-center mt-10 text-red-500 font-semibold">
        Task not found.
      </div>
    );
  }

  const { _id, taskName, category, budget, deadline, description, image } = task;

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="max-w-4xl mx-auto mt-10 bg-gradient-to-br from-white via-blue-50 to-purple-100 rounded-xl shadow-2xl overflow-hidden border border-gray-200"
    >
      <img
        src={image}
        alt="Task"
        className="w-full h-64 object-cover rounded-t-xl"
      />

      <div className="p-8 space-y-4">
        <h2 className="text-3xl font-bold text-blue-700">{taskName}</h2>

        <div className="flex flex-wrap gap-4 text-gray-600 text-sm">
          <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full font-medium">
            📂 {category}
          </span>
          <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full font-medium">
            💰 Budget: ₹{budget}
          </span>
          <span className="bg-yellow-100 text-yellow-800 px-3 py-1 rounded-full font-medium">
            📅 Deadline: {deadline?.slice(0, 10)}
          </span>
        </div>

        <p className="text-gray-700 leading-relaxed">{description}</p>

        {/* Optional buttons */}
        <div className="mt-6 flex justify-end gap-3">
          {/* Add your own links/routes here */}
          {/* <Link to={`/updateTask/${_id}`} className="btn btn-info">Edit</Link>
          <button onClick={() => handleDelete(_id)} className="btn btn-error">Delete</button> */}
        </div>
      </div>
    </motion.div>
  );
};

export default TaskDetails;
