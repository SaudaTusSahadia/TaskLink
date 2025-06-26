import React, { Suspense, useEffect, useState } from 'react';
import { useLoaderData } from 'react-router';
import BrowseSingleTask from './BrowseSingleTask'
import Loading from '../../components/Loading'

const BrowseTasks = () => {

    const initialTasks = useLoaderData();    
    const [tasks, setTasks] = useState([initialTasks])
    
    useEffect(() => {
      fetch('https://assignment10-server-silk.vercel.app/tasksAll')
        .then(res => res.json())
        .then(data => setTasks(data))
        .catch(err => console.error(err));
    }, []);


    return (
        <div className='my-5 md:my-10'>
            <Suspense fallback={<Loading/>}>
            <div className='grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-2 md:gap-3 lg:gap-6'>
                {
                    tasks.map(task=><BrowseSingleTask 
                        key={task._id}
                        tasks = {tasks}
                        setTasks = {setTasks} 
                        task={task}></BrowseSingleTask>)
                }
            </div>
            </Suspense>
        </div>
    );
};

export default BrowseTasks;