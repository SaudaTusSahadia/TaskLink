import React from 'react';
import { Link } from 'react-router';
import notFound from '../assets/404.json';
import Lottie from 'lottie-react';

const ErrorPage = () => {
  return (
    <div className="min-h-screen flex flex-col md:flex-row items-center justify-center gap-10 p-6 bg-gradient-to-br from-purple-50 to-blue-50">
      <div className="md:w-1/2 text-center md:text-left space-y-6">
        <h1 className="text-4xl md:text-5xl font-extrabold text-blue-700">
          Oops! Something went wrong.
        </h1>
        <p className="text-gray-600 text-base md:text-lg max-w-md mx-auto md:mx-0">
          The page you’re looking for doesn’t exist, has been moved, or is currently unavailable.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center md:justify-start gap-4">
          <Link to="/" className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-all">
            Go back to homepage
          </Link>
          <p className="text-sm text-gray-500">
            Need help?{' '}
            <a href="/contact" className="text-blue-600 underline hover:text-blue-800">
              Contact support
            </a>
          </p>
        </div>
      </div>

      <div className="md:w-1/2">
        <Lottie animationData={notFound} className="w-full max-w-lg mx-auto" />
      </div>
    </div>
  );
};

export default ErrorPage;
