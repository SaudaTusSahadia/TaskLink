import React from 'react';
import img from '../assets/5.jpeg';

const Extrasection5 = () => {
    return (
        <div className="relative rounded-xl overflow-hidden px-4 py-20 md:px-8 md:mt-16">
            {/* Background Image */}
            <img
                src={img}
                alt="background"
                className="absolute inset-0 w-full h-full object-cover z-0"
            />
            {/* Overlay */}
            <div
                className="absolute inset-0 z-10"
                style={{ backgroundColor: "rgba(0, 0, 0, 0.6)" }}
            ></div>


            {/* Content */}
            <div className="relative z-20 max-w-3xl mx-auto text-center text-white">
                <h2 className="text-4xl md:text-5xl font-bold mb-4">
                    Stay Updated with TaskLink
                </h2>
                <p className="text-lg text-gray-200 mb-8">
                    Subscribe to get the latest freelance tasks, project updates, and platform announcements directly in your inbox.
                </p>

                {/* Newsletter Form */}
                <form className="flex flex-col sm:flex-row items-center justify-center gap-4">
                    <input
                        type="email"
                        placeholder="Enter your email"
                        className="w-full sm:w-2/3 px-5 py-3 rounded-xl outline-2 text-gray-400"
                    />
                    <button
                        type="submit"
                        className="bg-gradient-to-r from-info to-success px-6 py-3 rounded-xl font-semibold hover:scale-105 transition"
                    >
                        Subscribe
                    </button>
                </form>
            </div>
        </div>
    );
};

export default Extrasection5;
