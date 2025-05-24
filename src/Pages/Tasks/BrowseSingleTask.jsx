import React from "react";
import { BiDetail } from "react-icons/bi";
import { Link } from "react-router";

const FeaturedTasks = ({ task }) => {
  const { _id, taskName, category, budget, deadline, image } = task;

  return (
    <div className="card shadow-md hover:shadow-xl border-2  transition duration-300 rounded-xl overflow-hidden">
      <img
        src={image}
        alt={taskName}
        className="w-full h-48 object-cover"
      />

      <div className="card-body p-5 text-center space-y-3">
        <h2 className="text-xl font-semibold  ">{taskName}</h2>

        <p className="text-sm ">
          <span className="font-medium">Category:</span> {category}
        </p>

        <div className="flex justify-around items-center">
          <p className="text-base font-semibold text-green-600 dark:text-green-400">
          Budget: ₹{budget}
        </p>

        <p className="text-sm text-blue-600 dark:text-blue-400">
          Deadline: {deadline?.slice(0, 10)}
        </p>
        </div>

        <div className="pt-2">
          <Link to={`/taskDetails/${_id}`}>
            <button className="btn btn-outline btn-primary btn-sm w-full">
              <BiDetail size={20}></BiDetail> See Details
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default FeaturedTasks;
