import React from 'react';

const TermsAndConditions = () => {
    return (
        <div>
            <div className="card max-w-screen bg-base-100 shadow-sm my-5 md:my-20">
                <div className="card-body">
                    <div className="flex justify-between">
                        <h2 className="text-xl font-bold">
                            Welcome to TaskLink — your freelance task marketplace. By accessing or using our platform, you agree to comply with and be bound by the following terms and conditions. Please review them carefully.
                        </h2>
                    </div>
                    <ul className="mt-6 flex flex-col gap-2">
                        <li>
                            <svg xmlns="http://www.w3.org/2000/svg" className="size-7 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                            </svg>
                            <span>By using TaskLink, you agree to these Terms of Service and our Privacy Policy.</span>
                        </li>
                        <li>
                            <svg xmlns="http://www.w3.org/2000/svg" className="size-7 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                            </svg>
                            <span>Users must be at least 18 years old to create an account and offer or request tasks.</span>
                        </li>
                        <li>
                            <svg xmlns="http://www.w3.org/2000/svg" className="size-7 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                            </svg>
                            <span>You are responsible for maintaining the confidentiality of your account and all activity that occurs under it.</span>
                        </li>
                        <li>
                            <svg xmlns="http://www.w3.org/2000/svg" className="size-7 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                            </svg>
                            <span>We aim to provide accurate task and freelancer information, but we do not guarantee the accuracy or reliability of user-generated content.</span>
                        </li>
                        <li>
                            <svg xmlns="http://www.w3.org/2000/svg" className="size-7 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                            </svg>
                            <span>We are not responsible for disputes, losses, or damages arising from contracts, missed deadlines, or payment issues between users.</span>
                        </li>
                        <li>
                            <svg xmlns="http://www.w3.org/2000/svg" className="size-7 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                            </svg>
                            <span>These terms are governed by the laws of Bangladesh and are subject to change without prior notice.</span>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default TermsAndConditions;
