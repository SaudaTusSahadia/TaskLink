import React from 'react';
import { BiDetail, BiEdit } from 'react-icons/bi';
import { CgDetailsMore } from 'react-icons/cg';
import { MdDeleteForever } from 'react-icons/md';
import Swal from 'sweetalert2';

const FeaturedTasks = ({ task }) => {

    const { _id, taskName, category, budget } = task;

    const handleDelete = (_id) => {
        console.log(_id);
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {

                //start deleting the task
                fetch(`http://localhost:3000/tasks/${_id}`, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log('after delete', data)
                        if (data.deletedCount) {
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your task has been deleted.",
                                icon: "success"
                            });
                        }
                    })
            }
        });
    }

    return (
        <div>
            <div className="card bg-neutral text-neutral-content">
                <div className="card-body items-center text-center">
                    <h2 className="card-title">{taskName}</h2>
                    <p>Category of the Task : {category}</p>
                    <h4>Budget : {budget}</h4>
                    <div className="card-actions justify-end">
                        <button className='btn btn-ghost'>Details</button>
                        <button className="btn btn-info"><BiEdit size={25}></BiEdit></button>
                        <button onClick={() => handleDelete(_id)} className="btn btn-ghost"><MdDeleteForever size={30}></MdDeleteForever></button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FeaturedTasks;