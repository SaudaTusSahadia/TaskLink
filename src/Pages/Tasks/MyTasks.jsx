import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../Provider/AuthProvider';
// <<<<<<< HEAD
import { Link } from 'react-router';
import { MdEdit, MdDelete, MdGavel } from 'react-icons/md';

const MyTasks = () => {
  const { user } = useContext(AuthContext);
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    if (user?.email) {
      fetch(`https://assignment10-server-silk.vercel.app/tasks?email=${user.email}`)
        .then(res => res.json())
        .then(data => setTasks(data));
    }
  }, [user?.email]);

  const handleDelete = (id) => {
    const confirm = window.confirm('Are you sure you want to delete this task?');
    if (confirm) {
      fetch(`https://assignment10-server-silk.vercel.app/tasks/${id}`, {
        method: 'DELETE',
      })
        .then(res => res.json())
        .then(result => {
          if (result.deletedCount > 0) {
            setTasks(prev => prev.filter(task => task._id !== id));
          }
        });
    }
  };

  return (
    <div className="min-h-screen px-4 py-10 border-2 rounded-2xl transition-colors duration-300">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl font-bold text-blue-600 text-center mb-8">
          My Posted Tasks: {tasks.length}
        </h1>

        {tasks.length === 0 ? (
          <p className="text-center text-lg">
            You haven't posted any tasks yet.
          </p>
        ) : (
          <div className="overflow-x-auto shadow-lg rounded-lg border-2  transition">
            <table className="min-w-full divide-y divide  text-sm">
              <thead className="  ">
                <tr>
                  <th className="px-4 py-3 text-left">Image</th>
                  <th className="px-4 py-3 text-left">Task Name</th>
                  <th className="px-4 py-3 text-left">Category</th>
                  <th className="px-4 py-3 text-left">Deadline</th>
                  <th className="px-4 py-3 text-left">Budget</th>
                  <th className="px-4 py-3 text-center">Actions</th>
                </tr>
              </thead>
              <tbody>
                {tasks.map(task => (
                  <tr
                    key={task._id}
                    className=" border-t  transition-colors"
                  >
                    <td className="px-4 py-3">
                      <img
                        src={task.image}
                        alt={task.taskName}
                        className="w-16 h-16 object-cover rounded-md border-2 border-gray-600"
                      />
                    </td>
                    <td className="px-4 py-3 font-medium ">
                      {task.taskName}
                    </td>
                    <td className="px-4 py-3 ">{task.category}</td>
                    <td className="px-4 py-3 ">{task.deadline}</td>
                    <td className="px-4 py-3 ">${task.budget}</td>
                    <td className="px-4 py-3">
                      <div className="flex flex-col sm:flex-row items-center justify-center gap-2">
                        <Link
                          to={`/updateTask/${task._id}`}
                          className="flex items-center px-3 py-1 bg-blue-500 rounded hover:bg-blue-600 transition"
                        >
                          <MdEdit className="mr-1" /> Update
                        </Link>
                        <button
                          onClick={() => handleDelete(task._id)}
                          className="flex items-center px-3 py-1 bg-red-500  rounded hover:bg-red-600 transition"
                        >
                          <MdDelete className="mr-1" /> Delete
                        </button>
                        <span className="flex items-center text-sm ">
                          <MdGavel className="mr-1 " />
                          Bids: {task?.bids || 0}
                        </span>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
};

export default MyTasks;
// =======

// const MyTasks = () => {

//     const { user } = useContext(AuthContext);
//     const [tasks, setTasks] = useState([]);

//     useEffect(() => {
//         if (user?.email) {
//             fetch(`https://assignment10-server-silk.vercel.app/tasks?email=${user.email}`)
//                 .then(res => res.json())
//                 .then(data => setTasks(data))
//         }
//     }, [user?.email]);

//     // const { taskName, image, category, description } = tasks;

//     return (
//         <div>
//             <h1>My Posted Tasks : {tasks.length}</h1>
//             {tasks.length === 0 ? (
//                 <p>No Tasks found.</p>
//             ) : (
//                 tasks.map((task) => (
//                     <div key={task._id} className="border p-4 mb-4 rounded shadow">
//                         <h1 className="font-bold text-lg">{task.taskName}</h1>
//                         <img src={task.image} alt={task.taskName} className="w-full max-w-xs mt-2" />
//                         <p className="text-sm text-gray-600">Category: {task.category}</p>
//                         <p>{task.description}</p>
//                     </div>
//                 ))
//             )}
//             {/* <div>
//                 <h1>{taskName}</h1>
//                 <img src={image} alt="" />
//                 <p>{category}</p>
//                 <p>{description}</p>
//             </div> */}
//         </div>
//     );
// };

// export default MyTasks;
// >>>>>>> 39ef2e6651c87e142add5b434abddb22148a58f0
