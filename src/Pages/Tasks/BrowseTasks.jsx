import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router';
import BrowseSingleTask from './BrowseSingleTask'

const BrowseTasks = () => {

    const initialTasks = useLoaderData();    
    const [tasks, setTasks] = useState([initialTasks])
    
    useEffect(() => {
      fetch('http://localhost:3000/tasks')
        .then(res => res.json())
        .then(data => setTasks(data))
        .catch(err => console.error(err));
    }, []);


    return (
        <div>
            <div className='grid md:grid-cols-2 grid-cols-1 gap-6'>
                {
                    tasks.map(task=><BrowseSingleTask 
                        key={task._id}
                        tasks = {tasks}
                        setTasks = {setTasks} 
                        task={task}></BrowseSingleTask>)
                }
            </div>
        </div>
    );
};

export default BrowseTasks;