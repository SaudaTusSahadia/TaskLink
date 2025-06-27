import React from 'react';
import Lottie from 'lottie-react';
import CountUp from 'react-countup';
import { FaUsers, FaStar } from 'react-icons/fa';
import { FcCustomerSupport } from 'react-icons/fc';
import { MdOutlineSecurity } from 'react-icons/md';
import { GrAchievement } from 'react-icons/gr';
import animation from '../assets/achievements.json';

const ExtraSection1 = () => {
    return (
        <section className="my-10">
            {/* Title */}
            <h1 className="text-4xl md:text-5xl text-center font-extrabold text-success flex justify-center items-center gap-3 mb-6">
                Our Achievements <GrAchievement className="text-3xl" />
            </h1>

            {/* Lottie Animation */}
            <div className="flex justify-center items-center mb-10">
                <Lottie animationData={animation} className="w-72 md:w-96" />
            </div>

            {/* Stats Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 bg-base-200 p-8 rounded-2xl shadow-lg">
                {/* Users */}
                <div className="flex items-center gap-5 p-5 bg-base-100 border border-base-300 rounded-xl shadow-sm hover:shadow-md transition-all">
                    <FaUsers className="text-4xl text-blue-600" />
                    <div>
                        <h2 className="text-3xl font-bold">
                            <CountUp end={10000} duration={30} />+
                        </h2>
                        <p className=" text-sm mt-1">Users Daily</p>
                    </div>
                </div>

                {/* Talents */}
                <div className="flex items-center gap-5 p-5 bg-base-100 border border-base-300 rounded-xl shadow-sm hover:shadow-md transition-all">
                    <FaStar className="text-4xl text-yellow-500" />
                    <div>
                        <h2 className="text-3xl font-bold">
                            <CountUp end={50000} duration={20} />+
                        </h2>
                        <p className=" text-sm mt-1">Talents Connected</p>
                    </div>
                </div>

                {/* Security */}
                <div className="flex items-center gap-5 p-5 bg-base-100 border border-base-300 rounded-xl shadow-sm hover:shadow-md transition-all">
                    <MdOutlineSecurity className="text-4xl text-green-600" />
                    <div>
                        <h2 className="text-3xl font-bold">
                            <CountUp end={100} duration={2.5} />%
                        </h2>
                        <p className=" text-sm mt-1">Data Security</p>
                    </div>
                </div>

                {/* Support */}
                <div className="flex items-center gap-5 p-5 bg-base-100 border border-base-300 rounded-xl shadow-sm hover:shadow-md transition-all">
                    <FcCustomerSupport className="text-4xl" />
                    <div>
                        <h2 className="text-3xl font-bold">
                            <CountUp end={24} duration={2} />x<CountUp end={7} duration={2} />
                        </h2>
                        <p className=" text-sm mt-1">Live Support</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ExtraSection1;
