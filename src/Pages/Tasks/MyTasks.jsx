import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../Provider/AuthProvider';

const MyTasks = () => {

    const { user } = useContext(AuthContext);
    const [tasks, setTasks] = useState([]);

    useEffect(() => {
        if (user?.email) {
            fetch(`https://assignment10-server-silk.vercel.app/tasks?email=${user.email}`)
                .then(res => res.json())
                .then(data => setTasks(data))
        }
    }, [user?.email]);

    // const { taskName, image, category, description } = tasks;

    return (
        <div>
            <h1>My Posted Tasks : {tasks.length}</h1>
            {tasks.length === 0 ? (
                <p>No Tasks found.</p>
            ) : (
                tasks.map((task) => (
                    <div key={task._id} className="border p-4 mb-4 rounded shadow">
                        <h1 className="font-bold text-lg">{task.taskName}</h1>
                        <img src={task.image} alt={task.taskName} className="w-full max-w-xs mt-2" />
                        <p className="text-sm text-gray-600">Category: {task.category}</p>
                        <p>{task.description}</p>
                    </div>
                ))
            )}
            {/* <div>
                <h1>{taskName}</h1>
                <img src={image} alt="" />
                <p>{category}</p>
                <p>{description}</p>
            </div> */}
        </div>
    );
};

export default MyTasks;