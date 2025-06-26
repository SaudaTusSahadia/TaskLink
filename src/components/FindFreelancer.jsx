import React from 'react';

const FindFreelancer = () => {
  return (
    <div className="max-w-5xl mx-auto px-4 py-10">
      <h1 className="text-3xl font-bold text-center text-blue-600 mb-6">Find Freelancers</h1>
      <p className="text-center text-gray-600 mb-8">
        Discover skilled individuals ready to help you complete your projects. Browse through categories or search by skill.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Example freelancer card */}
        <div className="bg-base-100 shadow-md rounded-xl p-4 text-center">
          <img src="https://i.ibb.co/q3tGXHmx/freepik-the-style-is-candid-image-photography-with-natural-45832.jpg" alt="freelancer" className="rounded-full mx-auto mb-3" />
          <h2 className="text-lg font-semibold">Tailor Swift</h2>
          <p className="text-sm text-gray-500">Frontend Developer</p>
          <button className="mt-3 px-4 py-1 bg-blue-500 text-white rounded-full hover:bg-blue-600 transition">View Profile</button>
        </div>
        <div className="bg-base-100 shadow-md rounded-xl p-4 text-center">
          <img src="https://i.ibb.co/MkRC0gq5/freepik-the-style-is-candid-image-photography-with-natural-45833.jpg" alt="freelancer" className="rounded-full mx-auto mb-3" />
          <h2 className="text-lg font-semibold">Olivia Radrigo</h2>
          <p className="text-sm text-gray-500">Backend Developer</p>
          <button className="mt-3 px-4 py-1 bg-blue-500 text-white rounded-full hover:bg-blue-600 transition">View Profile</button>
        </div>
        <div className="bg-base-100 shadow-md rounded-xl p-4 text-center">
          <img src="https://i.ibb.co/8HW8RBC/freepik-the-style-is-modern-and-it-is-a-detailed-illustrat-45834.jpg" alt="freelancer" className="rounded-full mx-auto mb-3" />
          <h2 className="text-lg font-semibold">Khaby Layme</h2>
          <p className="text-sm text-gray-500">Full Stack Developer</p>
          <button className="mt-3 px-4 py-1 bg-blue-500 text-white rounded-full hover:bg-blue-600 transition">View Profile</button>
        </div>

        {/* Duplicate or map dynamic cards here */}
      </div>
    </div>
  );
};

export default FindFreelancer;
