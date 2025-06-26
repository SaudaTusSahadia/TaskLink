import React, { useContext } from "react";
import { useLoaderData } from "react-router";
import { motion } from "framer-motion";
import { AuthContext } from "../../Provider/AuthProvider";
import Swal from "sweetalert2";

const TaskDetails = () => {
  const {user}=useContext(AuthContext);
  const task = useLoaderData();

  if (!task) {
    return (
      <div className="text-center mt-10 text-red-500 font-semibold">
        Task not found.
      </div>
    );
  }

  const {
    _id,
    taskName,
    category,
    budget,
    deadline,
    description,
    image,
    email,
    username,
    level
  } = task;

const handleBids = (id, email) => {
  fetch(`https://assignment10-server-silk.vercel.app/bids/${id}`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({ id, email })
  })
    .then(res => res.json())
    .then(data => {
      console.log("Updated bid count:", data.updatedBidCount);
      // Optionally display it on the UI
      Swal.fire(`Your total bids: ${data.updatedBidCount}`);
    });
};


  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="max-w-5xl mx-auto my-5 md:my-10 rounded-xl shadow-2xl overflow-hidden border-2"
    >
      <img
        src={image}
        alt="Task"
        className="w-full h-150 object-cover rounded-t-xl"
      />

      <div className="p-8 space-y-4">
        <h2 className="text-3xl font-bold text-blue-700">{taskName}</h2>

        <div className="flex flex-wrap gap-3 text-sm text-gray-600">
          <span className="bg-base-100 text-blue-600 px-3 py-1 rounded-full font-medium">
            📂 Category: {category}
          </span>
          <span className="bg-info text-green-800 px-3 py-1 rounded-full font-medium">
            💰 Budget: ₹{budget}
          </span>
          <span className="bg-base-300 text-yellow-700 px-3 py-1 rounded-full font-medium">
            📅 Deadline: {deadline?.slice(0, 10)}
          </span>
          <span className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full font-medium">
            🧠 Level: {level}
          </span>
        </div>

        <p className="text-info leading-relaxed">{description}</p>

        <div className="mt-6 grid md:grid-cols-2 gap-4 text-blue-500">
          <div>
            <p><span className="font-semibold">Submitted by:</span> {username}</p>
            <p><span className="font-semibold">User Email:</span> {email}</p>
          </div>
        </div>

        {/* Optional Action Buttons */}
        
        <div className="mt-6 flex justify-end gap-3">
        {
          user?((user.email==email)?(          <button
          
          disabled={true}
            className="bg-slate-600 text-white px-4 py-2 rounded-lg shadow hover:bg-slate-700 transition duration-200"
          >Bids Now</button>):(          <button
          onClick={()=>handleBids(_id,user.email)}
          
            className="bg-blue-600 text-white px-4 py-2 rounded-lg shadow hover:bg-blue-700 transition duration-200"
          >Bids Now</button>)):(          <button
          disabled={true}
            className="bg-slate-600 text-white px-4 py-2 rounded-lg shadow hover:bg-slate-700 transition duration-200"
          >Bids Now</button>)
        }

        </div>
       
      </div>
    </motion.div>
  );
};

export default TaskDetails;
