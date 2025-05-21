import React, { use } from 'react';
import { Link, NavLink } from 'react-router';
import logo from "../assets/icons8-laptop-50.png"
import "./Header.css";
import { AuthContext } from '../Provider/AuthProvider';
import { FaUserCircle } from 'react-icons/fa';


const Header = () => {

    const { user, logOut } = use(AuthContext);
    const handleLogout = () => {
        // console.log("user log out");
        logOut()
            .then(() => {
                alert("user logged out successfully");
            })
            .catch((error) => {
                console.log(error);
            });
    };

    // const links = (
    //     <>
    //         <li>
    //             <NavLink to="/">Home</NavLink>
    //         </li>
    //         <li>
    //             <NavLink to="/addTask">Add Task</NavLink>
    //         </li>
    //         <li>
    //             <NavLink to="/browseTask">Browse Task</NavLink>
    //         </li>
    //         <li>
    //             <NavLink to="/postedTask">My Posted Task</NavLink>
    //         </li>
    //     </>
    // )



    const links = (
        <>
            <li>
                <NavLink to="/">Home</NavLink>
            </li>
            <li>
                <NavLink to="/auth/register">Registration</NavLink>
            </li>
            {
                user && <li>
                    <NavLink to="/addTask">Add Task</NavLink>
                </li>
            }
            {
                user && <li>
                    <NavLink to="/auth/update">MyProfile</NavLink>
                </li>
            }
            {
                user && <li>
                    <NavLink to="/postedTask">My Posted Task</NavLink>
                </li>
            }



        </>
    );

    return (
        <div>
            {/* for dynamic title  */}
            <title>Home | TaskLink</title>
            <div className="navbar bg-base-100 shadow-sm">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                {" "}
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h8m-8 6h16"
                                />{" "}
                            </svg>
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu font-semibold menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow "
                        >
                            {links}
                        </ul>
                    </div>
                    <a className="btn btn-ghost text-xl">
                        <img className="w-10" src={logo} alt="" />
                        <p className="font-bold ml-2 hidden sm:block">
                            Task<span className="text-blue-600">Link</span>
                        </p>
                    </a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal font-semibold px-1">{links}</ul>
                </div>
                <div className="navbar-end flex items-center gap-4 pr-4">
                    {user ? (
                        <button
                            onClick={handleLogout}
                            className="btn btn-outline text-blue-600 hover:text-white hover:bg-blue-500 transition duration-300"
                        >
                            Log Out
                        </button>
                    ) : (
                        <Link
                            to="/auth/login"
                            className="btn btn-outline text-blue-600 hover:text-white hover:bg-blue-500 transition duration-300"
                        >
                            Login
                        </Link>
                    )}

                    <div className="relative group">
                        {user && user.photoURL ? (
                            <div className="tooltip tooltip-left" data-tip={user.displayName}>
                                <img
                                    className="h-10 w-10 rounded-full ring-2 ring-blue-400 hover:scale-105 transition-transform duration-300"
                                    src={user.photoURL}
                                    alt="user"
                                />
                            </div>
                        ) : (
                            <FaUserCircle
                                size={36}
                                className="text-blue-600"
                                title={user?.displayName || "Guest"}
                            />
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;