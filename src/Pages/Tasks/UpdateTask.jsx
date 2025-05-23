import React, { useState } from 'react';
import { useLoaderData } from 'react-router';
import Swal from 'sweetalert2';
import { MdTaskAlt, MdCategory, MdDescription, MdDateRange, MdAttachMoney, MdImage } from 'react-icons/md';
import { FaUserAlt, FaEnvelope } from 'react-icons/fa';
import Lottie from 'lottie-react';
import successAnimation from '../../assets/success.json'; 

const UpdateTask = () => {
    const { _id, taskName, category, description, deadline, budget, username, email, image } = useLoaderData();
    const [showSuccess, setShowSuccess] = useState(false);

    const handleUpdateTask = (e) => {
        e.preventDefault();
        const form = e.target;
        const formData = new FormData(form);
        const updatedTask = Object.fromEntries(formData.entries());

        fetch(`https://assignment10-server-silk.vercel.app/tasks/${_id}`, {
            method: 'PUT',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify(updatedTask)
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount) {
                    setShowSuccess(true);
                    Swal.fire({
                        position: "top-end",
                        icon: "success",
                        title: "Your Task Updated Successfully",
                        showConfirmButton: false,
                        timer: 1500
                    });
                }
            });
    }

    return (
        <div className='min-h-screen bg-gradient-to-br from-blue-100 via-purple-100 to-pink-100 py-10 px-4'>
            <div className='max-w-4xl mx-auto bg-white p-8 rounded-2xl shadow-2xl'>
                <div className='text-center mb-8'>
                    <h1 className='text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 to-pink-500'>Update Your Task</h1>
                </div>

                {showSuccess && (
                    <div className='flex justify-center my-4'>
                        <Lottie animationData={successAnimation} loop={true} style={{ height: 120 }} />
                    </div>
                )}

                <form onSubmit={handleUpdateTask} className='space-y-6'>
                    <div className='grid md:grid-cols-2 gap-6'>
                        <InputField icon={<MdTaskAlt />} label="Task Name" name="taskName" defaultValue={taskName} />
                        <InputField icon={<MdCategory />} label="Category" name="category" defaultValue={category} list="category" />
                        <datalist id="category">
                            <option value="Web Development" />
                            <option value="Design" />
                            <option value="Writing" />
                            <option value="Marketing" />
                        </datalist>
                        <InputField icon={<MdDescription />} label="Description" name="description" defaultValue={description} />
                        <InputField icon={<MdDateRange />} label="Deadline" name="deadline" defaultValue={deadline} type="date" />
                        <InputField icon={<FaEnvelope />} label="User Email" name="email" defaultValue={email} type="email" />
                        <InputField icon={<FaUserAlt />} label="User Name" name="username" defaultValue={username} />
                        <InputField icon={<MdAttachMoney />} label="Budget" name="budget" defaultValue={budget} />
                        <InputField icon={<MdImage />} label="Image URL" name="image" defaultValue={image} type="url" />
                    </div>

                    <input className='btn btn-info w-full bg-gradient-to-r from-purple-500 to-indigo-500 text-white font-bold' type="submit" value="Update This Task" />
                </form>
            </div>
        </div>
    );
};

const InputField = ({ icon, label, name, defaultValue, type = "text", list }) => (
    <div>
        <label className='flex items-center gap-2 font-semibold text-gray-700'>
            {icon} {label}
        </label>
        <input
            name={name}
            defaultValue={defaultValue}
            type={type}
            list={list}
            placeholder={`Enter ${label}`}
            className='input input-bordered w-full mt-1'
        />
    </div>
);

export default UpdateTask;
