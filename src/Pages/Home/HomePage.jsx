import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router';
import FeaturedTasks from './FeaturedTasks';
import ExtraSection1 from '../../components/ExtraSection1';
import ExtraSection2 from '../../components/ExtraSection2';
import feature from '../../assets/Animation - 1747895711054.json'
import Lottie from 'lottie-react';
import Slider from '../../components/Slider';
import { ToastContainer } from 'react-toastify';
import ExtraSection3 from '../../components/ExtraSection3';
import Extrasection4 from '../../components/Extrasection4';
import Extrasection5 from '../../components/Extrasection5';

const HomePage = () => {

    const initialTasks = useLoaderData();
    const [tasks, setTasks] = useState([initialTasks])

    useEffect(() => {
        fetch('https://assignment10-server-silk.vercel.app/tasks/recent')
            .then(res => res.json())
            .then(data => setTasks(data))
            .catch(err => console.error(err));
    }, []);



    return (
        <div>
            <Slider></Slider>
            <ExtraSection3 />
            <h1 className='flex justify-center items-center gap-5 text-center text-4xl font-bold text-blue-500 my-5 md:mt-10'><Lottie className='h-15' animationData={feature} />Featured Tasks</h1>
            <div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 md:gap-3 '>
                {
                    tasks.map(task => <FeaturedTasks
                        key={task._id}
                        tasks={tasks}
                        setTasks={setTasks}
                        task={task}></FeaturedTasks>)
                }
            </div>
            <ExtraSection2></ExtraSection2>
            <ExtraSection1></ExtraSection1>
            <Extrasection5></Extrasection5>
            <Extrasection4/>
        </div>
    );
};

export default HomePage;