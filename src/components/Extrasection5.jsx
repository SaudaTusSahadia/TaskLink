import React from 'react';
import img from '../assets/5.jpeg';

const Extrasection5 = () => {
    return (
        <section
            className="relative bg-cover bg-center bg-no-repeat py-20 px-4 md:px-8 md:top-10 md:mb-10"
            style={{
                backgroundImage: `url(${img})`,
            }}
        >
            {/* Overlay */}
            <div className="absolute inset-0  bg-opacity-60"></div>

            {/* Content */}
            <div className="relative z-10 max-w-3xl mx-auto text-center ">
                <h2 className="text-4xl md:text-5xl font-bold mb-4 text-black">
                    Stay Updated with TaskLink
                </h2>
                <p className="text-lg text-gray-600  mb-8">
                    Subscribe to get the latest freelance tasks, project updates, and platform announcements directly in your inbox.
                </p>

                {/* Newsletter Form */}
                <form className="flex flex-col sm:flex-row items-center justify-center gap-4">
                    <input
                        type="email"
                        placeholder="Enter your email"
                        className="w-full sm:w-2/3 px-5 py-3 rounded-xl focus:outline-base-300 outline-1"
                    />
                    <button
                        type="submit"
                        className="bg-gradient-to-r from-info to-success  px-6 py-3 rounded-xl font-semibold hover:scale-105 transition"
                    >
                        Subscribe
                    </button>
                </form>
            </div>
        </section>
    );
};

export default Extrasection5;
