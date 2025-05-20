import React from 'react';
import { BiArrowBack } from 'react-icons/bi';
import { Link } from 'react-router';

const AddTasks = () => {
    return (
        <div className=''>
            <div>
                <Link to="/" className='flex items-center gap-2 text-2xl text-blue-600'><BiArrowBack></BiArrowBack>Go Back to Home</Link>
            </div>
            <div>
                <h1 className='text-2xl font-bold text-center my-5'>Add New Task</h1>
                <form>
                    <div className='grid md:grid-cols-2 grid-cols-1 gap-5'>
                        <div>
                            <label>Task Name</label><br />
                            <input type="text" placeholder="Add your Task Name" className="input input-info w-full" />
                        </div>
                        <div>
                            <label>Category</label><br />
                            <input type="text" placeholder="Add your Category" className="input input-info w-full" list='category' />
                            <datalist id="category">
                                <option value="Web Development"></option>
                                <option value="Design"></option>
                                <option value="Writing"></option>
                                <option value="Marketing"></option>
                            </datalist>
                        </div>
                        <div>
                            <label>Description</label><br />
                            <input type="text" placeholder="Add your Description" className="input input-info w-full" />
                        </div>
                        <div>
                            <label>Deadline</label><br />
                            <input type="date" placeholder="Add your Deadline" className="input input-info w-full" />
                        </div>
                        <div>
                            <label>User Email</label><br />
                            <input type="text" placeholder="Add your Task Name" className="input input-info w-full" />
                        </div>
                        <div>
                            <label>User Name</label><br />
                            <input type="text" placeholder="Add your Task Name" className="input input-info w-full" />
                        </div>
                    </div>
                    <div className='my-5'>
                        <label>Budget</label><br />
                        <input type="text" placeholder="Add your Budget" className="input input-info w-full" />
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