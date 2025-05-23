import React from 'react';
import { BiArrowBack } from 'react-icons/bi';
import { FaEnvelope, FaUserAlt } from 'react-icons/fa';
import { MdTaskAlt, MdCategory, MdDescription, MdDateRange, MdAttachMoney, MdImage } from 'react-icons/md';
import { Link } from 'react-router'; // Corrected import
import Swal from 'sweetalert2';
import Lottie from 'lottie-react';
import add from '../../assets/Animation - 1747916551008.json';

const AddTasks = () => {
    const handleAddTask = e => {
        e.preventDefault();
        const form = e.target;
        const formData = new FormData(form);
        const newTask = Object.fromEntries(formData.entries());

        fetch('https://assignment10-server-silk.vercel.app/tasks', {
            method: "POST",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newTask)
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    Swal.fire({
                        position: "top-end",
                        icon: "success",
                        title: "Your Task has been added",
                        showConfirmButton: false,
                        timer: 1500
                    });
                }
            });

        form.reset();
    }

    return (
        <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-100 p-6">
            <title>Add Task | TaskLink</title>

            <div className="mb-6">
                <Link to="/" className="flex items-center gap-2 text-lg text-blue-600 hover:text-blue-800 transition-all">
                    <BiArrowBack className="text-xl" /> Go Back to Home
                </Link>
            </div>

            <div className="max-w-4xl mx-auto bg-white p-8 rounded-2xl shadow-2xl">
                <div className="text-center mb-10">
                    <h1 className="text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-indigo-950 to-blue-300 flex justify-center items-center gap-3">
                        <Lottie animationData={add} className="h-12" /> Add New Task
                    </h1>
                    <p className="text-gray-600 mt-3 text-sm md:text-base leading-relaxed">
                        Easily post your freelance job requirements. Provide a title, description, budget, deadline, and skills — and your task will go live!
                    </p>
                </div>

                <form onSubmit={handleAddTask} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-6">
                        <InputField icon={<MdTaskAlt />} label="Task Name" name="taskName" placeholder="Add your Task Name" />
                        <InputField icon={<MdCategory />} label="Category" name="category" placeholder="Add your Category" list="category" />
                        <datalist id="category">
                            <option value="Web Development" />
                            <option value="Design" />
                            <option value="Writing" />
                            <option value="Marketing" />
                        </datalist>
                        <InputField icon={<MdDescription />} label="Description" name="description" placeholder="Add your Description" textarea />
                        <InputField icon={<MdDateRange />} label="Deadline" name="deadline" type="date" />
                        <InputField icon={<FaEnvelope />} label="User Email" name="email" placeholder="Enter your email" type="email" />
                        <InputField icon={<FaUserAlt />} label="User Name" name="username" placeholder="Enter your name" />
                        <InputField icon={<MdAttachMoney />} label="Budget" name="budget" placeholder="Add your Budget" />
                        <InputField icon={<MdImage />} label="Image URL" name="image" placeholder="Add image URL" type="text" className="w-full" />
                    </div>

                    <div className="mt-8">
                        <input
                            className="btn bg-gradient-to-r from-indigo-500 to-purple-600 text-white w-full font-semibold text-lg rounded-lg hover:scale-[1.02] transition-transform duration-300"
                            type="submit"
                            value="Add This Task"
                        />
                    </div>
                </form>
            </div>
        </div>
    );
};

const InputField = ({ icon, label, name, placeholder, type = "text", list, textarea }) => (
    <div className={textarea ? "md:col-span-2" : ""}>
        <label className="flex items-center gap-2 mb-1 font-medium text-slate-700">
            {icon} {label}
        </label>
        {
            textarea ? (
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
            )
        }
    </div>
);

export default AddTasks;
