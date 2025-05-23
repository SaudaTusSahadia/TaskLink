import React from 'react';
import { BiArrowBack } from 'react-icons/bi';
import { Link } from 'react-router';
import Swal from 'sweetalert2';
import add from '../../assets/Animation - 1747916551008.json'
import Lottie from 'lottie-react';

const AddTasks = () => {
    const handleAddTask = e => {
        e.preventDefault();
        const form = e.target;
        const formData = new FormData(form);
        const newTask = Object.fromEntries(formData.entries());
        console.log(newTask);

        fetch('http://localhost:3000/tasks', {
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
                    console.log('after adding task to db', data)
                }
            })

        form.reset();
    }

    return (
        <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 p-6">
            <title>Add Task | TaskLink</title>

            <div className="mb-6">
                <Link to="/" className="flex items-center gap-2 text-lg text-blue-600 hover:text-blue-800 transition-all">
                    <BiArrowBack className="text-xl" /> Go Back to Home
                </Link>
            </div>

            <div className="max-w-4xl mx-auto bg-white p-8 rounded-xl shadow-2xl">
                <div className="text-center mb-8">
                    <h1 className="flex justify-center items-center text-3xl font-bold text-blue-700"><Lottie className='h-15 text-blue-500' animationData={add} />Add New Task</h1>
                    <p className="text-slate-600 mt-4 text-sm md:text-base leading-relaxed">
                        Easily post your freelance job requirements through our streamlined "Add Task" feature. Just provide a clear title, detailed description, budget, deadline, and required skill set — and your task will be instantly visible to a network of eager freelancers.
                    </p>
                </div>

                <form onSubmit={handleAddTask}>
                    <div className="grid md:grid-cols-2 gap-6">
                        <div>
                            <label className="block mb-1 font-medium text-slate-700">Task Name</label>
                            <input name="taskName" type="text" placeholder="Add your Task Name"
                                className="input input-bordered w-full rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400" />
                        </div>

                        <div>
                            <label className="block mb-1 font-medium text-slate-700">Category</label>
                            <input name="category" type="text" placeholder="Add your Category" list="category"
                                className="input input-bordered w-full rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400" />
                            <datalist id="category">
                                <option value="Web Development" />
                                <option value="Design" />
                                <option value="Writing" />
                                <option value="Marketing" />
                            </datalist>
                        </div>

                        <div className="md:col-span-2">
                            <label className="block mb-1 font-medium text-slate-700">Description</label>
                            <textarea name="description" placeholder="Add your Description"
                                className="textarea textarea-bordered w-full h-24 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-400"></textarea>
                        </div>

                        <div>
                            <label className="block mb-1 font-medium text-slate-700">Deadline</label>
                            <input name="deadline" type="date"
                                className="input input-bordered w-full rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400" />
                        </div>

                        <div>
                            <label className="block mb-1 font-medium text-slate-700">User Email</label>
                            <input name="email" type="email" placeholder="Enter your email"
                                className="input input-bordered w-full rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400" />
                        </div>

                        <div>
                            <label className="block mb-1 font-medium text-slate-700">User Name</label>
                            <input name="username" type="text" placeholder="Enter your name"
                                className="input input-bordered w-full rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400" />
                        </div>

                        <div>
                            <label className="block mb-1 font-medium text-slate-700">Budget</label>
                            <input name="budget" type="text" placeholder="Add your Budget"
                                className="input input-bordered w-full rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400" />
                        </div>
                        <div>
                            <label className="block mb-1 font-medium text-slate-700">Image URL</label>
                            <input
                                name="image"
                                type="url"
                                placeholder="Add an image URL"
                                className="input input-bordered w-full rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                            />
                        </div>
                    </div>

                    <div className="mt-8">
                        <input
                            className="btn bg-gradient-to-r from-blue-500 to-purple-500 text-white w-full rounded-lg hover:scale-[1.02] transition-transform duration-300"
                            type="submit"
                            value="Add This Task"
                        />
                    </div>
                </form>
            </div>
        </div>
    );
};

export default AddTasks;
