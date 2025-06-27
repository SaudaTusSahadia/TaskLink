import React, { useState, useContext } from 'react';
import Header from '../components/Header';
import { NavLink, Outlet } from 'react-router';
import { FaUserCircle, FaTasks, FaRegUser, FaPlusCircle, FaSignOutAlt } from 'react-icons/fa';
import { FaXmark } from 'react-icons/fa6';
import { RiMenuFold4Fill } from 'react-icons/ri';
import Footer from '../components/Footer';
import { AuthContext } from '../Provider/AuthProvider';

const DashBoardLayout = () => {
    const { user, logOut } = useContext(AuthContext);

    const handleLogout = () => {
        logOut()
            .then(() => {
                alert("User logged out successfully");
            })
            .catch((error) => {
                console.log(error);
            });
    };

    const [open, setOpen] = useState(true);

    return (
        <div className="min-h-screen flex flex-col bg-base-100">
            {/* Header */}
            <div className="navBarContainer flex justify-center shadow-sm z-40">
                <Header />
            </div>

            {/* Sidebar Toggle Button */}
            {open ? (
                <button
                    onClick={() => setOpen(!open)}
                    className="top-7  left-5 hidden md:block z-50 fixed"
                >
                    <FaXmark />
                </button>
            ) : (
                <button
                    onClick={() => setOpen(!open)}
                    className="top-7  left-5 hidden md:block z-50 fixed"
                >
                    <RiMenuFold4Fill />
                </button>
            )}


            {/* Layout Body */}
            <div className="flex flex-1 mt-16 min-h-screen">
                {/* Sidebar */}
                {open && (
                    <aside className="w-76  min-h-screen bg-base-200 shadow-md hidden md:flex flex-col justify-start p-4 ">
                        {/* User Info */}
                        <div className="flex items-center gap-4 mb-6">
                            {user?.photoURL ? (
                                <img
                                    className="h-12 w-12 rounded-full ring-2 ring-blue-400 object-cover"
                                    src={user.photoURL}
                                    alt="User"
                                />
                            ) : (
                                <FaUserCircle size={48} className="text-blue-600" />
                            )}
                            <div>
                                <h2 className="font-bold">{user?.displayName || "User"}</h2>
                                <p className="text-sm text-gray-500">{user?.email}</p>
                            </div>
                        </div>

                        {/* Nav Links */}
                        <ul className="space-y-3 font-semibold">
                            <li>
                                <NavLink
                                    to="/dashboard/addTask"
                                    className={({ isActive }) =>
                                        `flex items-center gap-2 p-2 rounded hover:bg-base-100 transition ${isActive ? "bg-blue-300 text-blue-600" : ""}`
                                    }
                                >
                                    <FaPlusCircle /> Add Task
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    to="/dashboard/MyProfile"
                                    className={({ isActive }) =>
                                        `flex items-center gap-2 p-2 rounded hover:bg-base-100 transition ${isActive ? "bg-blue-300 text-blue-600" : ""}`
                                    }
                                >
                                    <FaRegUser /> My Profile
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    to="/dashboard/postedTask"
                                    className={({ isActive }) =>
                                        `flex items-center gap-2 p-2 rounded hover:bg-base-100 transition ${isActive ? "bg-blue-300 text-blue-600" : ""}`
                                    }
                                >
                                    <FaTasks /> My Posted Tasks
                                </NavLink>
                            </li>
                        </ul>

                        {/* Logout Button */}
                        <div className="mt-10">
                            <button
                                onClick={handleLogout}
                                className="w-full flex items-center gap-2 justify-center text-blue-600 border border-blue-600 hover:bg-blue-600 hover:text-white p-2 rounded transition"
                            >
                                <FaSignOutAlt /> Log Out
                            </button>
                        </div>
                    </aside>
                )}

                {/* Main Content */}
                <main className="w-full p-4 overflow-y-auto">
                    <Outlet />
                </main>
            </div>

            <Footer />
        </div>
    );
};

export default DashBoardLayout;
