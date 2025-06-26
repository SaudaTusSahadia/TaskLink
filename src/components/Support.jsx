import React from 'react';
import { FaEnvelope, FaQuestionCircle, FaPaperPlane } from 'react-icons/fa';

const Support = () => {
    return (
        <div className="px-4 py-12 md:px-8 lg:px-0 max-w-2xl mx-auto">
            <div className="bg-base-100 shadow-xl rounded-2xl p-8 space-y-8">
                <h1 className="text-3xl font-bold text-center text-blue-700 border-b-2 pb-3 border-blue-300 flex items-center justify-center gap-2">
                    <FaQuestionCircle className="text-blue-600" /> Support
                </h1>

                <p className=" text-center">
                    Need help or have questions? Our support team is here to assist you!
                </p>

                <ul className="space-y-4 ">
                    <li className="flex items-center gap-2">
                        <FaEnvelope className="text-blue-500" />
                        <strong>Email:</strong>{' '}
                        <a
                            href="mailto:support@example.com"
                            className="text-blue-500 hover:underline font-medium"
                        >
                            support@example.com
                        </a>
                    </li>
                    <li className="flex items-center gap-2">
                        <FaQuestionCircle className="text-blue-500" />
                        <strong>FAQ:</strong>{' '}
                        <a
                            href="/faq"
                            className="text-blue-500 hover:underline font-medium"
                        >
                            Visit our FAQ page
                        </a>
                    </li>
                </ul>

                <div>
                    <h2 className="text-2xl font-semibold text-blue-600 mb-4 flex items-center gap-2">
                        <FaPaperPlane /> Submit a Request
                    </h2>
                    <form className="space-y-4">
                        <input
                            type="text"
                            placeholder="Your Name"
                            className="input input-bordered w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
                            required
                        />
                        <input
                            type="email"
                            placeholder="Your Email"
                            className="input input-bordered w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
                            required
                        />
                        <textarea
                            placeholder="How can we help you?"
                            className="textarea textarea-bordered w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
                            rows={4}
                            required
                        ></textarea>
                        <button
                            type="submit"
                            className="btn bg-blue-600 text-white hover:bg-blue-700 w-full rounded-lg text-lg font-semibold transition"
                        >
                            Send Message
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Support;
