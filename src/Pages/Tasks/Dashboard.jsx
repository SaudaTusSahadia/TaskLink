import React, { useContext } from 'react';
import { FaTasks, FaUser, FaClipboardCheck, FaClipboardList } from 'react-icons/fa';
import { AuthContext } from '../../Provider/AuthProvider';

const Dashboard = ({ totalTasks = 0, myTasks = 0, completedTasks = 0, totalUsers = 0 }) => {
  const { user } = useContext(AuthContext);

  return (
    <div className="p-6 md:p-10 min-h-screen ">
      <title>Dashboard | TaskLink</title>

      <h1 className="text-3xl md:text-4xl font-bold text-blue-700 mb-4">
        Welcome to TaskLink Dashboard
      </h1>

      {/* User Info Card */}
      <div className="shadow-xl border-l-4 border-blue-500 p-6 rounded-xl mb-6 max-w-2xl bg-base-300">
        <h2 className="text-xl font-semibold text-Info mb-2">Logged in as:</h2>
        <p className="text-lg font-medium text-gray-500">
          <FaUser className="inline-block text-blue-500 mr-2" />
          {user?.displayName || 'Anonymous User'} ({user?.email})
        </p>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <div className="border-l-4 border-purple-500 shadow-md p-6 bg-base-300 rounded-xl flex items-center gap-4">
          <FaTasks className="text-4xl text-purple-500" />
          <div>
            <p className="text-lg font-semibold">Total Tasks</p>
            <p className="text-2xl font-bold text-gray-500">{totalTasks}</p>
          </div>
        </div>

        <div className="border-l-4 border-green-500 shadow-md p-6 rounded-xl bg-base-300 flex items-center gap-4">
          <FaClipboardList className="text-4xl text-green-500" />
          <div>
            <p className="text-lg font-semibold ">My Tasks</p>
            <p className="text-2xl font-bold text-gray-500">{myTasks}</p>
          </div>
        </div>

        <div className="border-l-4 border-blue-500 shadow-md p-6 bg-base-300 rounded-xl flex items-center gap-4">
          <FaClipboardCheck className="text-4xl text-blue-500" />
          <div>
            <p className="text-lg font-semibold ">Completed Tasks</p>
            <p className="text-2xl font-bold text-gray-500">{completedTasks}</p>
          </div>
        </div>

        <div className="border-l-4 border-yellow-500 shadow-md p-6 bg-base-300 rounded-xl flex items-center gap-4">
          <FaUser className="text-4xl text-yellow-500" />
          <div>
            <p className="text-lg font-semibold ">Total Users</p>
            <p className="text-2xl font-bold text-gray-500">{totalUsers}</p>
          </div>
        </div>
      </div>

      {/* Intro Text */}
      <div className=" shadow-md rounded-xl p-6 bg-base-300">
        <p className="text-lg mb-4 leading-relaxed text-gray-500 max-w-3xl">
          <strong>TaskLink</strong> is your one-stop freelancing task marketplace that connects project seekers with skilled task doers. Whether you want to post a task or get hired for one, this platform helps streamline the process with secure task posting, bidding, and management features.
        </p>
        <p className="text-base text-gray-500 max-w-3xl">
          Use the navigation sidebar to <strong>add new tasks</strong>, <strong>manage your posted projects</strong>, or update your <strong>profile</strong>. We’re here to help you connect, collaborate, and complete tasks effectively.
        </p>
      </div>
    </div>
  );
};

export default Dashboard;
