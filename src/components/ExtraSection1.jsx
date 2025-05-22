import React from 'react';
import CountUp from 'react-countup';
import { FaUsers, FaStar } from 'react-icons/fa';
import { FcCustomerSupport } from 'react-icons/fc';
import { MdOutlineSecurity } from 'react-icons/md';

const ExtraSection1 = () => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 bg-blue-50 my-10 py-10 px-4 rounded-xl shadow-md">

            {/* Users Daily */}
            <div className="flex items-center gap-4 p-4 bg-white rounded-lg shadow hover:shadow-lg transition duration-300">
                <FaUsers className="text-blue-600" size={40} />
                <div>
                    <h1 className="text-3xl font-bold text-gray-800">
                        <CountUp start={5000} end={10000} duration={10} />+
                    </h1>
                    <p className="text-gray-600">Users Daily</p>
                </div>
            </div>

            {/* Talents */}
            <div className="flex items-center gap-4 p-4 bg-white rounded-lg shadow hover:shadow-lg transition duration-300">
                <FaStar className="text-yellow-400" size={35} />
                <div>
                    <h1 className="text-3xl font-bold text-gray-800">
                        <CountUp start={30000} end={50000} duration={10} />+
                    </h1>
                    <p className="text-gray-600">Talents</p>
                </div>
            </div>

            {/* Security */}
            <div className="flex items-center gap-4 p-4 bg-white rounded-lg shadow hover:shadow-lg transition duration-300">
                <MdOutlineSecurity className="text-green-600" size={35} />
                <div>
                    <h1 className="text-3xl font-bold text-gray-800">
                        <CountUp end={100} duration={6} />%
                    </h1>
                    <p className="text-gray-600">Security</p>
                </div>
            </div>

            {/* Support */}
            <div className="flex items-center gap-4 p-4 bg-white rounded-lg shadow hover:shadow-lg transition duration-300">
                <FcCustomerSupport size={40} />
                <div>
                    <h1 className="text-3xl font-bold text-gray-800">
                        <CountUp end={24} duration={6} />x<CountUp end={7} duration={5} />
                    </h1>
                    <p className="text-gray-600">Support</p>
                </div>
            </div>

        </div>
    );
};

export default ExtraSection1;
