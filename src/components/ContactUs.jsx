import React from 'react';
import { FaUserAlt, FaEnvelope, FaPaperPlane } from 'react-icons/fa';
import { MdMessage } from 'react-icons/md';

const ContactUs = () => {
  return (
    <div className="max-w-3xl mx-auto px-4 py-10">
      <h1 className="text-3xl font-bold text-center text-blue-600 mb-6">Contact Us</h1>
      <p className="text-center text-gray-600 mb-8">
        <FaPaperPlane className="inline text-blue-500 mr-1" /> Have questions or need help? Fill out the form below and we’ll get back to you soon.
      </p>

      <form className="bg-base-100 shadow-lg rounded-xl p-6 space-y-5">
        {/* Name Input */}
        <div className="flex items-center gap-3 border rounded-md px-4 py-2 focus-within:ring-2 focus-within:ring-blue-400">
          <FaUserAlt className="text-gray-500" />
          <input
            type="text"
            placeholder="Your Name"
            className="w-full outline-none bg-transparent"
          />
        </div>

        {/* Email Input */}
        <div className="flex items-center gap-3 border rounded-md px-4 py-2 focus-within:ring-2 focus-within:ring-blue-400">
          <FaEnvelope className="text-gray-500" />
          <input
            type="email"
            placeholder="Your Email"
            className="w-full outline-none bg-transparent"
          />
        </div>

        {/* Message Textarea */}
        <div className="flex gap-3 border rounded-md px-4 py-2 focus-within:ring-2 focus-within:ring-blue-400">
          <MdMessage className="text-xl text-gray-500 mt-1" />
          <textarea
            placeholder="Your Message"
            rows="5"
            className="w-full outline-none bg-transparent resize-none"
          ></textarea>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full bg-blue-500 flex items-center justify-center gap-2 text-white py-2 rounded-md hover:bg-blue-600 transition"
        >
          <FaPaperPlane /> Send Message
        </button>
      </form>
    </div>
  );
};

export default ContactUs;
