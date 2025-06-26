import React, { useContext } from "react";
import { BiEdit } from "react-icons/bi";
import { Link, useNavigate } from "react-router";
import { motion } from "framer-motion";
import { AuthContext } from "../../Provider/AuthProvider";
import { CgDetailsMore } from "react-icons/cg";

const FeaturedTasks = ({ task }) => {
  const { _id, taskName, description, image } = task;
  return (
    <div className="card bg-base-100 image-full shadow-sm">
      <figure>
        <img
          src={image}
          alt={taskName} />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{taskName}</h2>
        <p>{description?.slice(0,80)}...</p>
        <div className="card-actions justify-end">
          <Link to={`/taskDetails/${_id}`}>
             <button className="flex items-center gap-2 px-3 text-primary font-bold py-1.5 bg-gradient-to-r from-base-300 to-base-100 text-sm rounded-lg hover:scale-105 transition-transform duration-200">
               <CgDetailsMore className=''/>
               <span>See Details</span>
             </button>
           </Link>
        </div>
      </div>
    </div>
  );
};

export default FeaturedTasks;
