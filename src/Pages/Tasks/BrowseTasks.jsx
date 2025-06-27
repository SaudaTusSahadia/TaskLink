import React, { Suspense, useEffect, useState } from 'react';
import { useLoaderData } from 'react-router';
import BrowseSingleTask from './BrowseSingleTask';
import Loading from '../../components/Loading';

const BrowseTasks = () => {
  const initialTasks = useLoaderData();
  const [tasks, setTasks] = useState(initialTasks || []);
  const [sortOrder, setSortOrder] = useState("asc");
  const [searchTerm, setSearchTerm] = useState("");

  // Fetch tasks based on search & sort
  useEffect(() => {
    fetch(`https://assignment10-server-silk.vercel.app/tasksAll?sort=${sortOrder}&search=${searchTerm}`)
    // fetch(`http://localhost:3000/tasksAll?sort=${sortOrder}&search=${searchTerm}`)
      .then((res) => res.json())
      .then((data) => setTasks(data))
      .catch((error) => console.error("Error fetching tasks:", error));
  }, [sortOrder, searchTerm]);

  return (
    <div className="px-4 md:px-10 py-8 max-w-7xl mx-auto">
      <h1 className="text-4xl md:text-5xl font-bold text-center mb-8 text-blue-700">
        Browse All Tasks
      </h1>

      {/* Search and Sort Controls */}
      <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-8">
        {/* 🔍 Search */}
        <div className="w-full md:w-1/2">
          <label className="text-sm text-gray-500 block mb-1 font-medium">Search by Task Name</label>
          <input
            type="text"
            placeholder="e.g., Set up Google Ads campaign"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full px-4 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-300"
          />
        </div>

        {/* ⬆⬇ Sort */}
        <div className="w-full md:w-1/3">
          <label className="text-sm text-gray-500 block mb-1 font-medium">Sort by Budget</label>
          <select
            value={sortOrder}
            onChange={(e) => setSortOrder(e.target.value)}
            className="w-full px-4 py-2 border rounded-lg shadow-sm focus:outline-2"
          >
            <option value="asc" className='bg-base-300'>Low to High</option>
            <option value="desc" className='bg-base-300'>High to Low</option>
          </select>
        </div>
      </div>

      {/* Divider */}
      <div className="my-6">
        <hr className="border-t-2 border-blue-600" />
      </div>

      {/* Task Cards */}
      <Suspense fallback={<Loading />}>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {tasks.length > 0 ? (
            tasks.map((task) => (
              <BrowseSingleTask
                key={task._id}
                task={task}
                tasks={tasks}
                setTasks={setTasks}
              />
            ))
          ) : (
            <p className="text-center col-span-full text-gray-600 mt-10">No tasks found.</p>
          )}
        </div>
      </Suspense>
    </div>
  );
};

export default BrowseTasks;
