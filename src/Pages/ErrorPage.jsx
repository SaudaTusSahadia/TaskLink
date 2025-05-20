import React from 'react';
import pic from "../assets/page-found-concept-illustration.png"
import { Link } from 'react-router';

const ErrorPage = () => {
    return (
        <div  className='md:flex md:justify-center items-center gap-4 p-4 max-w-7xl mx-auto'>
            <div className='md:w-1/2'>
                <h1>Oops! Something went wrong</h1>
                <p className="mb-6 text-base max-w-md">
                    The page you’re looking for doesn’t exist, has been moved, or is currently unavailable.
                </p>
                <Link to="/" className="btn btn-primary">
                    Go back to homepage
                </Link>
                <p className="mt-4 text-sm text-gray-500">
                    Need help? <a className="link link-hover text-primary">Contact support</a>
                </p>
            </div>
            <div className='md:w-1/2'>
                <img src={pic} alt="error pic" />
            </div>
        </div>
    );
};

export default ErrorPage;