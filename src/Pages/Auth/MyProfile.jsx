import React, { use } from 'react';
import { useNavigate } from 'react-router';
import { AuthContext } from '../../Provider/AuthProvider';
import Lottie from 'lottie-react';
import profileAnimation from '../../assets/profile.json'; 

const MyProfile = () => {
    const { updateUser, user } = use(AuthContext);
    const navigate = useNavigate();

    const handleUpdate = (e) => {
        e.preventDefault();
        const name = e.target.name.value;
        const photo = e.target.photo.value;

        updateUser({ displayName: name, photoURL: photo })
            .then(() => {
                navigate('/');
            });
    };

    return (
        <div className='min-h-screen px-4 py-10 rounded-xl border-2 '>
            <div className='grid md:grid-cols-2 gap-10 items-center justify-center max-w-6xl mx-auto'>
                {/* Profile Display Section */}
                <div className='text-center space-y-4'>
                    <Lottie animationData={profileAnimation} loop={true} className='w-12 max-w-sm mx-auto' />
                    <h1 className='text-3xl font-bold text-blue-700'>{user.displayName}</h1>
                    <p className='text-lg '>{user.email}</p>
                    <img
                        src={user.photoURL}
                        alt="User"
                        className='w-40 h-40 rounded-xl border-4 border-blue-300 object-cover mx-auto'
                    />
                </div>

                {/* Profile Update Form */}
                <div className='card w-full max-w-md shadow-2xl rounded-2xl  p-6 border-2 border-blue-200'>
                    <h2 className='text-2xl font-bold text-center text-blue-600 mb-6'>Update Profile</h2>

                    <form onSubmit={handleUpdate} className='space-y-4'>
                        <div>
                            <label className="block text-gray-700 font-medium mb-1">Email Address</label>
                            <input
                                name='email'
                                type="email"
                                defaultValue={user?.email}
                                disabled
                                className="input input-bordered w-full"
                            />
                        </div>

                        <div>
                            <label className="block text-gray-700 font-medium mb-1">Full Name</label>
                            <input
                                name='name'
                                type="text"
                                defaultValue={user?.displayName}
                                placeholder="John Doe"
                                required
                                className="input input-bordered w-full"
                            />
                        </div>

                        <div>
                            <label className="block text-gray-700 font-medium mb-1">Photo URL</label>
                            <input
                                name='photo'
                                type="text"
                                defaultValue={user?.photoURL}
                                placeholder="https://example.com/photo.jpg"
                                required
                                className="input input-bordered w-full"
                            />
                        </div>

                        <button
                            type="submit"
                            className="btn btn-primary w-full mt-4"
                        >
                            Update Profile
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default MyProfile;
