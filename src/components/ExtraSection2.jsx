import Lottie from 'lottie-react';
import React from 'react';
import { FaArrowAltCircleRight, FaDatabase, FaKeyboard, FaPenFancy, FaSpellCheck } from 'react-icons/fa';
import groovyWalkAnimation from "../assets/Animation - 1747895151543.json";

const ExtraSection2 = () => {
    return (
        <div className='my-10 md:my-20 text-center'>
            <div className="text-center mb-10">
                <h1 className="flex justify-center items-center gap-6 text-4xl md:text-5xl font-extrabold mb-3 tracking-tight">
                <Lottie className='h-20' animationData={groovyWalkAnimation} />Job Practice
                </h1>
                <p className="text-lg md:text-xl text-gray-400 max-w-xl mx-auto">
                    Learn, practice, and grow with hands-on exercises crafted to sharpen your skills and boost your career with confidence.
                </p>
            </div>


            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 gap-6 p-6">

                {/* Typing Card */}
                <div className="card bg-gradient-to-br from-blue-200 to-white shadow-lg rounded-2xl hover:scale-105 transition-transform duration-300">
                    <figure className="pt-8">
                        <FaKeyboard className="text-5xl text-blue-600" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title text-2xl text-gray-800">Typing</h2>
                        <p className="text-gray-600">
                            Boost your typing speed and accuracy with our interactive platform. Practice regularly and see real-time progress.
                        </p>
                        <div className="card-actions mt-4">
                            <button className="btn btn-primary gap-2">
                                Start Now <FaArrowAltCircleRight />
                            </button>
                        </div>
                    </div>
                </div>

                {/* Data Entry Card */}
                <div className="card bg-gradient-to-br from-green-100 to-white shadow-lg rounded-2xl hover:scale-105 transition-transform duration-300">
                    <figure className="pt-8">
                        <FaDatabase className="text-5xl text-green-600" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title text-2xl text-gray-800">Data Entry</h2>
                        <p className="text-gray-600">
                            Master data entry skills with hands-on tasks that improve attention to detail, speed, and data accuracy.
                        </p>
                        <div className="card-actions mt-4">
                            <button className="btn btn-primary gap-2">
                                Start Now <FaArrowAltCircleRight />
                            </button>
                        </div>
                    </div>
                </div>

                {/* Proofreading Card */}
                <div className="card bg-gradient-to-br from-yellow-100 to-white shadow-lg rounded-2xl hover:scale-105 transition-transform duration-300">
                    <figure className="pt-8">
                        <FaSpellCheck className="text-5xl text-yellow-600" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title text-2xl text-gray-800">Proofreading</h2>
                        <p className="text-gray-600">
                            Enhance your proofreading abilities by spotting and correcting grammar, spelling, and punctuation errors with ease.
                        </p>
                        <div className="card-actions mt-4">
                            <button className="btn btn-primary gap-2">
                                Start Now <FaArrowAltCircleRight />
                            </button>
                        </div>
                    </div>
                </div>

                {/* Writing Card */}
                <div className="card bg-gradient-to-br from-pink-100 to-white shadow-lg rounded-2xl hover:scale-105 transition-transform duration-300">
                    <figure className="pt-8">
                        <FaPenFancy className="text-5xl text-pink-600" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title text-2xl text-gray-800">Writing</h2>
                        <p className="text-gray-600">
                            Unleash your creativity and polish your writing skills with prompts, story-building tools, and feedback practice.
                        </p>
                        <div className="card-actions mt-4">
                            <button className="btn btn-primary gap-2">
                                Start Now <FaArrowAltCircleRight />
                            </button>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default ExtraSection2;