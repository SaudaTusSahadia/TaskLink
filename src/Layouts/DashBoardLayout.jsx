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
    const [open, setOpen] = useState(true);

    const handleLogout = () => {
        logOut()
            .then(() => alert("User logged out successfully"))
            .catch((error) => console.log(error));
    };

    return (
        <div className="min-h-screen flex flex-col bg-base-100">
            {/* Header */}
            <div className="navBarContainer flex justify-center shadow-sm z-40">
                <Header />
            </div>

            {/* Toggle Button for Desktop */}
            {open ? (
                <button
                    onClick={() => setOpen(!open)}
                    className="top-7 left-5 hidden md:block z-50 fixed"
                >
                    <FaXmark />
                </button>
            ) : (
                <button
                    onClick={() => setOpen(!open)}
                    className="top-7 left-5 hidden md:block z-50 fixed"
                >
                    <RiMenuFold4Fill />
                </button>
            )}

            {/* Toggle Button for Mobile */}
            <label
                htmlFor="mobile-drawer"
                className="btn outline fixed top-3 left-7 z-50 md:hidden"
            >
                <RiMenuFold4Fill />
            </label>

            {/* Layout Body */}
            <div className="flex flex-1 mt-16 min-h-screen">
                {/* Sidebar - Desktop Only */}
                {open && (
                    <aside className="w-80 min-h-screen bg-base-200 shadow-md hidden md:flex flex-col justify-start p-4">
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

                        {/* Links */}
                        <ul className="space-y-3 font-semibold">
                            <li>
                                <NavLink to="/dashboard/addTask" className="flex items-center gap-2 p-2 rounded hover:bg-base-100">
                                    <FaPlusCircle /> Add Task
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to="/dashboard/MyProfile" className="flex items-center gap-2 p-2 rounded hover:bg-base-100">
                                    <FaRegUser /> My Profile
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to="/dashboard/postedTask" className="flex items-center gap-2 p-2 rounded hover:bg-base-100">
                                    <FaTasks /> My Posted Tasks
                                </NavLink>
                            </li>
                        </ul>

                        {/* Logout */}
                        <button
                            onClick={handleLogout}
                            className="mt-10 w-full flex items-center gap-2 justify-center text-blue-600 border border-blue-600 hover:bg-blue-600 hover:text-white p-2 rounded"
                        >
                            <FaSignOutAlt /> Log Out
                        </button>
                    </aside>
                )}

                {/* Drawer - Mobile Only */}
                <div className="drawer drawer-mobile md:hidden">
                    <input id="mobile-drawer" type="checkbox" className="drawer-toggle" />
                    <div className="drawer-content p-4 w-full">
                        <Outlet /> 
                    </div>
                    <div className="drawer-side z-50">
                        <label htmlFor="mobile-drawer" className="drawer-overlay"></label>
                        <aside className="w-70 min-h-screen bg-base-200 p-4">
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

                            <ul className="space-y-3 font-semibold">
                                <li>
                                    <NavLink to="/dashboard/addTask" className="flex items-center gap-2 p-2 rounded hover:bg-base-100">
                                        <FaPlusCircle /> Add Task
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink to="/dashboard/MyProfile" className="flex items-center gap-2 p-2 rounded hover:bg-base-100">
                                        <FaRegUser /> My Profile
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink to="/dashboard/postedTask" className="flex items-center gap-2 p-2 rounded hover:bg-base-100">
                                        <FaTasks /> My Posted Tasks
                                    </NavLink>
                                </li>
                            </ul>

                            <button
                                onClick={handleLogout}
                                className="mt-10 w-full flex items-center gap-2 justify-center text-blue-600 border border-blue-600 hover:bg-blue-600 hover:text-white p-2 rounded"
                            >
                                <FaSignOutAlt /> Log Out
                            </button>
                        </aside>
                    </div>
                </div>

                
                <main className="hidden md:block w-full p-4 overflow-y-auto">
                    <Outlet />
                </main>
            </div>

            <Footer />
        </div>
    );
};

export default DashBoardLayout;
