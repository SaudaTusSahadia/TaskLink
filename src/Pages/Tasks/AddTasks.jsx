import React, { useContext } from "react";
import { BiArrowBack } from "react-icons/bi";
import { FaEnvelope, FaUserAlt } from "react-icons/fa";
import {
  MdTaskAlt,
  MdCategory,
  MdDescription,
  MdDateRange,
  MdAttachMoney,
  MdImage,
  MdSignalCellularAlt,
} from "react-icons/md";
import { Link } from "react-router";
import Swal from "sweetalert2";
import Lottie from "lottie-react";
import add from "../../assets/Animation - 1747916551008.json";
import { AuthContext } from "../../Provider/AuthProvider";

const AddTasks = () => {
  const { user } = useContext(AuthContext);

  const handleAddTask = (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    const newTask = Object.fromEntries(formData.entries());

    newTask.bids = 0;

    console.log(newTask);

    fetch("https://assignment10-server-silk.vercel.app/tasks", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(newTask),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Your Task has been added",
            showConfirmButton: false,
            timer: 1500,
          });
        }
      });

    form.reset();
  };

  return (
    <div className="min-h-screen  p-6">
      <title>Add Task | TaskLink</title>

      <div className="mb-6">
        <Link
          to="/"
          className="flex items-center gap-2 text-lg text-blue-600 hover:text-blue-800 transition-all"
        >
          <BiArrowBack className="text-xl" /> Go Back to Home
        </Link>
      </div>

      <div className="max-w-4xl mx-auto border-2 p-8 rounded-2xl shadow-2xl">
        <div className="text-center mb-10">
          <h1 className="text-3xl font-extrabold text-blue-600 bg-clip-text  flex justify-center items-center gap-3">
            <Lottie animationData={add} className="h-12" /> Add New Task
          </h1>
          <p className=" mt-3 text-sm md:text-base leading-relaxed">
            Easily post your freelance job requirements. Provide a title,
            description, budget, deadline, and skills — and your task will go
            live!
          </p>
        </div>

<form onSubmit={handleAddTask} className="space-y-6">
  <div className="grid md:grid-cols-2 gap-6">
    {/* Task Name */}
    <div className="space-y-2">
      <label className="flex items-center gap-2 text-lg font-semibold ">
        <MdTaskAlt /> Task Name
      </label>
      <input
        type="text"
        name="taskName"
        placeholder="Add your Task Name"
        className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary transition"
        title="Beginner level: Just provide a name for the task"
      />
    </div>

    {/* Category */}
    <div className="space-y-2">
      <label className="flex items-center gap-2 text-lg font-semibold ">
        <MdCategory /> Category
      </label>
      <input
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
        type="email"
        name="email"
        defaultValue={user?.email}
        readOnly
        className="w-full px-4 py-3  border border-gray-300 rounded-lg shadow-sm"
        title="Beginner level: Auto-filled email (read-only)"
      />
    </div>

    {/* Username */}
    <div className="space-y-2">
      <label className="flex items-center gap-2 text-lg font-semibold ">
        <FaUserAlt /> User Name
      </label>
      <input
        type="text"
        name="username"
        defaultValue={user?.displayName}
        readOnly
        className="w-full px-4 py-3  border border-gray-300 rounded-lg shadow-sm"
        title="Beginner level: Auto-filled name (read-only)"
      />
    </div>

    {/* Budget */}
    <div className="space-y-2">
      <label className="flex items-center gap-2 text-lg font-semibold ">
        <MdAttachMoney /> Budget
      </label>
      <input
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
      className="btn bg-gradient-to-r from-indigo-500 to-purple-600  w-full font-semibold text-lg rounded-lg hover:scale-[1.02] transition-transform duration-300"
      type="submit"
      value="Add This Task"
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
  placeholder,
  type = "text",
  list,
  textarea,
}) => (
  <div className={textarea ? "md:col-span-2" : ""}>
    <label className="flex items-center gap-2 mb-1 font-medium text-slate-700">
      {icon} {label}
    </label>
    {textarea ? (
      <textarea
        name={name}
        placeholder={placeholder}
        className="textarea textarea-bordered w-full h-24 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-400"
      ></textarea>
    ) : (
      <input
        name={name}
        type={type}
        placeholder={placeholder}
        list={list}
        className="input input-bordered w-full rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
      />
    )}
  </div>
);

export default AddTasks;
