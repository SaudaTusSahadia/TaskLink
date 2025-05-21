import React from 'react';
import CountUp from 'react-countup';
import { FaCheckCircle, FaUser, FaUsers } from 'react-icons/fa';
import { FaPaypal, FaScaleUnbalanced, FaStar, FaTableList } from 'react-icons/fa6';
import { FcCustomerSupport } from 'react-icons/fc';
import { MdOutlineSecurity } from 'react-icons/md';

const ExtraSection1 = () => {
    return (
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 bg-blue-500 my-4 md:my-15 py-6 md:py-15 rounded-xl justify-center items-center'>
            <div className='flex justify-center items-center gap-4'>
                <FaUsers className='text-black' size={35}></FaUsers>
                <div>
                    <h1 className='font-bold text-2xl'><CountUp start={5000} end={10000} duration={5} />+</h1>
                    <p>Users daily</p>
                </div>
            </div>
            <div className='flex justify-center items-center gap-4'>
                <FaStar className='text-yellow-400' size={30}></FaStar>
                <div>
                    <h1 className='font-bold text-2xl'><CountUp start={30000} end={50000} duration={5} />+</h1>
                    <p>Talents</p>
                </div>
            </div>
            <div className='flex justify-center items-center gap-4'>
                <MdOutlineSecurity className='text-slate-700' size={30} />
                <div>
                    <h1 className='font-bold text-2xl'><CountUp start={0} end={100} duration={3} />%</h1>
                    <p>Security</p>
                </div>
            </div>
            <div className='flex justify-center items-center gap-4'>
                <FcCustomerSupport size={35} />
                <div>
                    <h1 className='font-bold text-2xl'><CountUp start={0} end={25} duration={3} />x<CountUp start={0} end={7} duration={2.5} /></h1>
                    <p>Support</p>
                </div>
            </div>
        </div>
    );
};

export default ExtraSection1;