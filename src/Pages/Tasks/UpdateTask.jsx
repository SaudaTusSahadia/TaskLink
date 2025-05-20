import React from 'react';
import { useLoaderData } from 'react-router';

const UpdateTask = () => {

    const { taskName, category, description, deadline, budget, username, email } = useLoaderData();

    const handleUpdateTask = (e) => {
        e.preventDefault();
        const form = e.target;
        const formData = new FormData(form);
        const updatedTask = Object.fromEntries(formData.entries())
        console.log(updatedTask);
    }

    return (
        <div>
            <div>
                <div className='text-center my-6'>
                    <h1 className='text-2xl font-bold'>Update Task</h1>
                </div>
                <form onSubmit={handleUpdateTask}>
                    <div className='grid md:grid-cols-2 grid-cols-1 gap-5'>
                        <div>
                            <label>Task Name</label><br />
                            <input name="taskName" defaultValue={taskName} type="text" placeholder="Add your Task Name" className="input input-info w-full" />
                        </div>
                        <div>
                            <label>Category</label><br />
                            <input name="category" defaultValue={category} type="text" placeholder="Add your Category" className="input input-info w-full" list='category' />
                            <datalist id="category">
                                <option value="Web Development"></option>
                                <option value="Design"></option>
                                <option value="Writing"></option>
                                <option value="Marketing"></option>
                            </datalist>
                        </div>
                        <div>
                            <label>Description</label><br />
                            <input name="description" defaultValue={description} type="text" placeholder="Add your Description" className="input input-info w-full" />
                        </div>
                        <div>
                            <label>Deadline</label><br />
                            <input name="deadline" defaultValue={deadline} type="date" className="input input-info w-full" />
                        </div>
                        <div>
                            <label>User Email</label><br />
                            <input name="email" defaultValue={email} type="email" placeholder="Enter your email" className="input input-info w-full" />
                        </div>
                        <div>
                            <label>User Name</label><br />
                            <input name="username" defaultValue={username} type="text" placeholder="Enter your name" className="input input-info w-full" />
                        </div>
                    </div>
                    <div className='my-5'>
                        <label>Budget</label><br />
                        <input name="budget" defaultValue={budget} type="text" placeholder="Add your Budget" className="input input-info w-full" />
                    </div>
                    <div>
                        <input className='btn btn-info w-full' type="submit" value="Update This Task" />
                    </div>
                </form>
            </div>
        </div>
    );
};

export default UpdateTask;