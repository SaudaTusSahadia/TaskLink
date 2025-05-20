import React, { useState } from 'react';
import { useLoaderData } from 'react-router';
import FeaturedTasks from './FeaturedTasks';

const HomePage = () => {

    const initialTasks = useLoaderData();    
    const [tasks, setTasks] = useState(initialTasks)

    return (
        <div>
            <h1 className='text-center text-3xl font-bold text-info my-5'>Featured Tasks</h1>
            <div className='grid md:grid-cols-2 grid-cols-1 gap-6'>
                {
                    tasks.map(task=><FeaturedTasks 
                        key={task._id}
                        tasks = {tasks}
                        setTasks = {setTasks} 
                        task={task}></FeaturedTasks>)
                }
            </div>
        </div>
    );
};

export default HomePage;