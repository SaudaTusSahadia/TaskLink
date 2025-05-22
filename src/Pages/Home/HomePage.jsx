import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router';
import FeaturedTasks from './FeaturedTasks';
import ExtraSection1 from '../../components/ExtraSection1';
import ExtraSection2 from '../../components/ExtraSection2';
import feature from '../../assets/Animation - 1747895711054.json'
import Lottie from 'lottie-react';
import Slider from '../../components/Slider';

const HomePage = () => {
    
    const initialTasks = useLoaderData();    
    const [tasks, setTasks] = useState([initialTasks])
    
    useEffect(() => {
      fetch('http://localhost:3000/tasks/recent')
        .then(res => res.json())
        .then(data => setTasks(data))
        .catch(err => console.error(err));
    }, []);



    return (
        <div>
            <Slider></Slider>
            <ExtraSection1></ExtraSection1>
            <h1 className='flex justify-center items-center gap-5 text-center text-3xl font-bold text-blue-500 my-5 md:mt-15'><Lottie className='h-15' animationData={feature} />Featured Tasks</h1>
            <div className='grid md:grid-cols-2 grid-cols-1 gap-6'>
                {
                    tasks.map(task=><FeaturedTasks 
                        key={task._id}
                        tasks = {tasks}
                        setTasks = {setTasks} 
                        task={task}></FeaturedTasks>)
                }
            </div>
            <ExtraSection2></ExtraSection2>
        </div>
    );
};

export default HomePage;