import React, { useState } from "react";
import { useLoaderData } from "react-router";
import Swal from "sweetalert2";
import {
  MdTaskAlt,
  MdCategory,
  MdDescription,
  MdDateRange,
  MdAttachMoney,
  MdImage,
  MdSignalCellularAlt,
} from "react-icons/md";
import { FaUserAlt, FaEnvelope } from "react-icons/fa";
import Lottie from "lottie-react";
import successAnimation from "../../assets/success.json";

const UpdateTask = () => {
  const {
    _id,
    taskName,
    category,
    description,
    deadline,
    budget,
    username,
    email,
    image,
    level
  } = useLoaderData();
  const [showSuccess, setShowSuccess] = useState(false);

  const handleUpdateTask = (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    const updatedTask = Object.fromEntries(formData.entries());

    fetch(`https://assignment10-server-silk.vercel.app/tasks/${_id}`, {
      method: "PUT",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(updatedTask),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount) {
          setShowSuccess(true);
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Your Task Updated Successfully",
            showConfirmButton: false,
            timer: 1500,
          });
        }
      });
  };

  return (
    <div className="min-h-screen  py-10 px-4">
      <div className="max-w-4xl mx-auto border-2 p-8 rounded-2xl shadow-2xl">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 to-pink-500">
            Update Your Task
          </h1>
        </div>

        {showSuccess && (
          <div className="flex justify-center my-4">
            <Lottie
              animationData={successAnimation}
              loop={true}
              style={{ height: 120 }}
            />
          </div>
        )}

        <form onSubmit={handleUpdateTask} className="space-y-6">
          <div className="grid md:grid-cols-2 gap-6">
            {/* Task Name */}
            <div className="space-y-2">
              <label className="flex items-center gap-2 text-lg font-semibold ">
                <MdTaskAlt /> Task Name
              </label>
              <input
                defaultValue={taskName}
                type="text"
                name="taskName"
                placeholder="Add your Task Name"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary transition"
                title="Beginner level: Just provide a name for the task"
              />
            </div>

            {/* Category */}
            <div className="space-y-2">
              <label className="flex items-center gap-2 text-lg font-semibold ">
                <MdCategory /> Category
              </label>
              <input
                defaultValue={category}
                type="text"
                name="category"
                placeholder="Add your Category"
                list="category"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary transition"
                title="Beginner level: Choose or write a task category"
              />
              <datalist id="category">
                <option value="Web Development" />
                <option value="Design" />
                <option value="Writing" />
                <option value="Marketing" />
              </datalist>
            </div>

            {/* Description */}
            <div className="space-y-2 col-span-2">
              <label className="flex items-center gap-2 text-lg font-semibold ">
                <MdDescription /> Description
              </label>
              <textarea
                defaultValue={description}
                name="description"
                placeholder="Add your Description"
                rows="4"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary transition resize-none"
                title="Intermediate level: Provide a clear and concise task description"
              ></textarea>
            </div>

            {/* Deadline */}
            <div className="space-y-2">
              <label className="flex items-center gap-2 text-lg font-semibold ">
                <MdDateRange /> Deadline
              </label>
              <input
                defaultValue={deadline}
                type="date"
                name="deadline"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary transition"
                title="Intermediate level: Select a suitable deadline"
              />
            </div>

            {/* Email */}
            <div className="space-y-2">
              <label className="flex items-center gap-2 text-lg font-semibold ">
                <FaEnvelope /> User Email
              </label>
              <input
                defaultValue={email}
                type="email"
                name="email"
                readOnly
                className="w-full px-4 py-3 bg-gray-100 border border-gray-300 rounded-lg shadow-sm"
                title="Beginner level: Auto-filled email (read-only)"
              />
            </div>

            {/* Username */}
            <div className="space-y-2">
              <label className="flex items-center gap-2 text-lg font-semibold ">
                <FaUserAlt /> User Name
              </label>
              <input
                defaultValue={username}
                type="text"
                name="username"
                readOnly
                className="w-full px-4 py-3 bg-gray-100 border border-gray-300 rounded-lg shadow-sm"
                title="Beginner level: Auto-filled name (read-only)"
              />
            </div>

            {/* Budget */}
            <div className="space-y-2">
              <label className="flex items-center gap-2 text-lg font-semibold ">
                <MdAttachMoney /> Budget
              </label>
              <input
                defaultValue={budget}
                type="number"
                name="budget"
                placeholder="Add your Budget"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary transition"
                title="Intermediate level: Enter estimated budget in numbers"
              />
            </div>

            {/* Image URL */}
            <div className="space-y-2">
              <label className="flex items-center gap-2 text-lg font-semibold ">
                <MdImage /> Image URL
              </label>
              <input
                defaultValue={image}
                type="text"
                name="image"
                placeholder="Add image URL"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary transition"
                title="Advanced level: Provide a valid image URL for the task"
              />
            </div>

            {/* Level Dropdown */}
            <div className="space-y-2">
              <label className="flex items-center gap-2 text-lg font-semibold ">
                <MdSignalCellularAlt /> Level
              </label>
              <select
                defaultValue={level}
                name="level"
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary transition"
                title="Beginner level: Choose how complex this task is"
              >
                <option value="">Select Level</option>
                <option value="Beginner">Beginner</option>
                <option value="Intermediate">Intermediate</option>
                <option value="Advanced">Advanced</option>
              </select>
            </div>
          </div>

          {/* Submit Button */}
          <div className="mt-8">
            <input
              className="btn bg-gradient-to-r from-indigo-500 to-purple-600 text-white w-full font-semibold text-lg rounded-lg hover:scale-[1.02] transition-transform duration-300"
              type="submit"
              value="Update This Task"
              title="Submit the form with the given information"
            />
          </div>
        </form>
      </div>
    </div>
  );
};

const InputField = ({
  icon,
  label,
  name,
  defaultValue,
  type = "text",
  list,
}) => (
  <div>
    <label className="flex items-center gap-2 font-semibold text-gray-700">
      {icon} {label}
    </label>
    <input
      name={name}
      defaultValue={defaultValue}
      type={type}
      list={list}
      placeholder={`Enter ${label}`}
      className="input input-bordered w-full mt-1"
    />
  </div>
);

export default UpdateTask;
