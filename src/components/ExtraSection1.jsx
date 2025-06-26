import Lottie from 'lottie-react';
import React from 'react';
import CountUp from 'react-countup';
import { FaUsers, FaStar } from 'react-icons/fa';
import { FcCustomerSupport } from 'react-icons/fc';
import { MdOutlineSecurity } from 'react-icons/md';
import animation from '../assets/achievements.json'
import { GrAchievement } from 'react-icons/gr';

const ExtraSection1 = () => {
    return (
        <div>
            <h1 className='text-3xl text-center flex justify-center items-center gap-4 mt-5 md:mt-15 text-success font-bold'>Our Achievements <GrAchievement /></h1>
            <div className='flex justify-center items-center'>
                <Lottie animationData={animation} className='w-50 mt-3'></Lottie>
            </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 bg-gradient-to-tl from-base-300 via-base-200 to-base-100 my-5 md:mb-10 py-10 px-4 rounded-xl shadow-md">

            {/* Users Daily */}
            <div className="flex items-center gap-4 p-4 bg-accent rounded-lg shadow hover:shadow-lg transition duration-300">
                <FaUsers className="text-blue-600" size={40} />
                <div>
                    <h1 className="text-3xl font-bold text-gray-800">
                        <CountUp start={5000} end={10000} duration={20} />+
                    </h1>
                    <p className="text-gray-600">Users Daily</p>
                </div>
            </div>

            {/* Talents */}
            <div className="flex items-center gap-4 p-4 bg-info rounded-lg shadow hover:shadow-lg transition duration-300">
                <FaStar className="text-yellow-400" size={35} />
                <div>
                    <h1 className="text-3xl font-bold text-gray-800">
                        <CountUp start={30000} end={50000} duration={20} />+
                    </h1>
                    <p className="text-gray-600">Talents</p>
                </div>
            </div>

            {/* Security */}
            <div className="flex items-center gap-4 p-4 bg-success rounded-lg shadow hover:shadow-lg transition duration-300">
                <MdOutlineSecurity className="text-green-600" size={35} />
                <div>
                    <h1 className="text-3xl font-bold text-gray-800">
                        <CountUp end={100} duration={15} />%
                    </h1>
                    <p className="text-gray-600">Security</p>
                </div>
            </div>

            {/* Support */}
            <div className="flex items-center gap-4 p-4 bg-neutral rounded-lg shadow hover:shadow-lg transition duration-300">
                <FcCustomerSupport size={40} />
                <div>
                    <h1 className="text-3xl font-bold text-gray-800">
                        <CountUp end={24} duration={10} />x<CountUp end={7} duration={10} />
                    </h1>
                    <p className="text-gray-600">Support</p>
                </div>
            </div>

        </div>
        </div>
    );
};

export default ExtraSection1;
