import React from 'react';

const Dashboard = () => {
  return (
    <div className="p-6 md:p-10">
      <h1 className="text-3xl md:text-4xl font-bold text-blue-700 mb-4">
        Welcome to TaskLink Dashboard
      </h1>
      <p className="text-lg  mb-4 leading-relaxed max-w-3xl">
        <strong>TaskLink</strong> is your one-stop freelancing task marketplace that connects project seekers with skilled task doers. Whether you want to post a task or get hired for one, this platform helps streamline the process with secure task posting, bidding, and management features.
      </p>
      <p className="text-base max-w-3xl">
        Use the navigation sidebar to <strong>add new tasks</strong>, <strong>manage your posted projects</strong>, or update your <strong>profile</strong>. We’re here to help you connect, collaborate, and complete tasks effectively.
      </p>
    </div>
  );
};

export default Dashboard;
