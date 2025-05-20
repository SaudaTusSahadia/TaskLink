import React from 'react';
import { BiArrowBack } from 'react-icons/bi';
import { Link } from 'react-router';
import Swal from 'sweetalert2';

const AddTasks = () => {

    const handleAddTask = e => {
        e.preventDefault();
        const form = e.target;
        const formData = new FormData(form);
        const newTask = Object.fromEntries(formData.entries());
        console.log(newTask);

        //send tasks to the db
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
        <div className=''>
            <div>
                <Link to="/" className='flex items-center gap-2 text-2xl text-blue-600'><BiArrowBack></BiArrowBack>Go Back to Home</Link>
            </div>
            <div>
                <div className='text-center my-6'>
                    <h1 className='text-2xl font-bold'>Add New Task</h1>
                    <p className='text-slate-600 mt-5'>Easily post your freelance job requirements through our streamlined "Add Task" feature. Whether you're looking for a web developer, graphic designer, content writer, or any other skilled professional, TaskLink makes it simple to get started. Just provide a clear title, detailed description, budget, deadline, and required skill set — and your task will be instantly visible to a network of eager freelancers. This intuitive form ensures that your project needs are accurately captured, helping you connect with the right talent quickly. With TaskLink, finding help is just a few clicks away — post a task and get started today!</p>
                </div>
                <form onSubmit={handleAddTask}>
                    <div className='grid md:grid-cols-2 grid-cols-1 gap-5'>
                        <div>
                            <label>Task Name</label><br />
                            <input name="taskName" type="text" placeholder="Add your Task Name" className="input input-info w-full" />
                        </div>
                        <div>
                            <label>Category</label><br />
                            <input name="category" type="text" placeholder="Add your Category" className="input input-info w-full" list='category' />
                            <datalist id="category">
                                <option value="Web Development"></option>
                                <option value="Design"></option>
                                <option value="Writing"></option>
                                <option value="Marketing"></option>
                            </datalist>
                        </div>
                        <div>
                            <label>Description</label><br />
                            <input name="description" type="text" placeholder="Add your Description" className="input input-info w-full" />
                        </div>
                        <div>
                            <label>Deadline</label><br />
                            <input name="deadline" type="date" className="input input-info w-full" />
                        </div>
                        <div>
                            <label>User Email</label><br />
                            <input name="email" type="email" placeholder="Enter your email" className="input input-info w-full" />
                        </div>
                        <div>
                            <label>User Name</label><br />
                            <input name="username" type="text" placeholder="Enter your name" className="input input-info w-full" />
                        </div>
                    </div>
                    <div className='my-5'>
                        <label>Budget</label><br />
                        <input name="budget" type="text" placeholder="Add your Budget" className="input input-info w-full" />
                    </div>
                    <div>
                        <input className='btn btn-info w-full' type="submit" value="Add This Task" />
                    </div>
                </form>
            </div>
        </div>
    );
};

export default AddTasks;