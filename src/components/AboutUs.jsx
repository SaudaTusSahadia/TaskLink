import React from 'react';
import { FaUsers, FaBullseye, FaUserTie, FaEnvelope } from 'react-icons/fa';

const AboutUs = () => {
    return (
        <div className="px-4 py-10 md:px-8 lg:px-0 max-w-3xl mx-auto">
            <div className="bg-base-100 shadow-2xl rounded-2xl p-8 space-y-6">
                <h1 className="text-3xl font-bold text-center text-blue-700 border-b-2 pb-2 border-blue-300 flex items-center justify-center gap-2">
                    <FaUsers className="text-blue-600" /> About Us
                </h1>
                <p className="leading-relaxed">
                    Welcome to <span className="font-semibold text-blue-600">TaskLink</span>! We are dedicated to providing the best experience for our users.
                    Our team is passionate about delivering high-quality products and excellent customer service.
                </p>

                <div>
                    <h2 className="text-2xl font-semibold text-blue-600 mb-2 flex items-center gap-2">
                        <FaBullseye /> Our Mission
                    </h2>
                    <p className=" leading-relaxed">
                        Our mission is to make technology accessible and useful for everyone. We strive to innovate and improve every day.
                    </p>
                </div>

                <div>
                    <h2 className="text-2xl font-semibold text-blue-600 mb-2 flex items-center gap-2">
                        <FaUserTie /> Meet the Team
                    </h2>
                    <ul className="list-disc pl-5  space-y-1">
                        <li><strong>Jane Doe</strong> – Founder & CEO</li>
                        <li><strong>John Smith</strong> – Lead Developer</li>
                        <li><strong>Emily Johnson</strong> – UX Designer</li>
                    </ul>
                </div>

                <div>
                    <h2 className="text-2xl font-semibold text-blue-600 mb-2 flex items-center gap-2">
                        <FaEnvelope /> Contact Us
                    </h2>
                    <p className="">
                        Have questions or feedback? Reach out to us at{" "}
                        <a
                            href="mailto:info@example.com"
                            className="text-blue-500 hover:underline font-medium"
                        >
                            info@example.com
                        </a>.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default AboutUs;
