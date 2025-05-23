import React, { useContext } from "react";
import { BiEdit } from "react-icons/bi";
import { MdDeleteForever } from "react-icons/md";
import { Link, useNavigate } from "react-router";
import Swal from "sweetalert2";
import { AuthContext } from "../../Provider/AuthProvider";

const FeaturedTasks = ({ task, tasks, setTasks }) => {
  const { _id, taskName, category, budget, deadline } = task;
  const {user}=useContext(AuthContext);
  const navigate=useNavigate();

  const handleDelete = (_id) => {

    if(user){
            Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`https://assignment10-server-silk.vercel.app/tasks/${_id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount) {
              Swal.fire({
                title: "Deleted!",
                text: "Your task has been deleted.",
                icon: "success",
              });

              const remainingTasks = tasks.filter((tas) => tas._id !== _id);
              setTasks(remainingTasks);
            }
          });
      }
    });
    }
    else{
      navigate('/auth/login');
    }

  };


  return (
    <div className="card bg-base-100 shadow-xl hover:shadow-2xl transition duration-300 border border-base-200">
      <div className="card-body text-center space-y-2">
        <h2 className="card-title text-2xl font-semibold">{taskName}</h2>
        <p className="text-sm text-gray-500 dark:text-gray-400">
          <span className="font-medium text-base">Category:</span> {category}
        </p>
        <p className="text-lg font-bold text-primary">Budget: ₹{budget}</p>
        <p className="text-sm mt-1 text-blue-600">Deadline: {deadline?.slice(0, 10)}</p>

        <div className="divider my-1" />

        <div className="flex flex-wrap justify-center gap-3 mt-2">
          <Link to={`/taskDetails/${_id}`}>
            <button className="btn btn-outline btn-primary btn-sm">
              📄 See Details
            </button>
          </Link>

          <Link to={`/updateTask/${_id}`}>
            <button className="btn btn-outline btn-info btn-sm flex items-center gap-1">
              <BiEdit size={18} /> Edit
            </button>
          </Link>

          <button
            onClick={() => handleDelete(_id)}
            className="btn btn-outline btn-error btn-sm flex items-center gap-1"
          >
            <MdDeleteForever size={20} /> Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default FeaturedTasks;
