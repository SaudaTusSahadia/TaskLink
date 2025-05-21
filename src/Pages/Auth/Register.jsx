import React, { use, useState } from 'react';
import { Link, useNavigate } from 'react-router';
import { AuthContext } from '../../Provider/AuthProvider'
import { toast, ToastContainer } from 'react-toastify';
import { LuEyeClosed } from 'react-icons/lu';
import { FaGoogle, FaRegEye } from 'react-icons/fa';


const Register = () => {
    const { createUser, setUser, updateUser, signInWithGoogle } = use(AuthContext);
    const [passwordError, setPasswordError] = useState("");
    const [showPassword, setShowPassword] = useState(false)

    const navigate = useNavigate();

    const handleRegister = (e) => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const photo = form.photo.value;
        const email = form.email.value;
        const password = form.password.value;
        setPasswordError("")

        const checkPass1 = /(?=.*[A-Z])/
        const checkPass2 = /(?=.*[a-z])/

        if (password.length < 6) {
            setPasswordError('password must be at least 6 characters')
            return;
        }
        else if (checkPass1.test(password) === false) {
            setPasswordError('Password must have capital letters')
            return;
        }
        else if (checkPass2.test(password) === false) {
            setPasswordError('Password must have small letters')
            return;
        }

        createUser(email, password)
            .then((result) => {
                const user = result.user;
                updateUser({ displayName: name, photoURL: photo })
                    .then(() => {
                        setUser({ ...user, displayName: name, photoURL: photo });
                        navigate("/")
                    })
                    .catch((error) => {
                        console.log(error);
                        setUser(user)
                    });
                toast("You logged in successfully!", {
                    position: "top-right",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: false,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "light",
                });
                setTimeout(() => {
                    navigate(`${location.state ? location.state : "/"}`);
                }, 1000);
            })
            .catch((error) => {
                // const errorCode = error.code;
                const errorMessege = error.messege;
                alert(errorMessege)
            })
    }

    const handleGoogleSignIn = () => {
        signInWithGoogle()
            .then(() => {
                navigate('/');
            })
    }

    return (
        <div className='min-h-screen flex items-center justify-center py-10 px-4'>
            {/* for dynamic title  */}
            <title>Register | TaskLink</title>
            <div className="card bg-white w-full max-w-md shadow-xl rounded-2xl border-2 border-blue-400">
                <h1 className='text-2xl font-semibold text-center text-blue-600 mt-6'>Create Your Account</h1>

                <form onSubmit={handleRegister} className="card-body space-y-4">
                    <fieldset className="space-y-2">

                        {/* name */}
                        <label className="label font-medium text-gray-700">Full Name</label>
                        <input
                            name='name'
                            type="text"
                            className="input input-bordered w-full"
                            placeholder="John Doe"
                            required
                        />

                        {/* photo url */}
                        <label className="label font-medium text-gray-700">Photo URL</label>
                        <input
                            name='photo'
                            type="text"
                            className="input input-bordered w-full"
                            placeholder="https://example.com/photo.jpg"
                            required
                        />

                        {/* email */}
                        <label className="label font-medium text-gray-700">Email Address</label>
                        <input
                            name='email'
                            type="email"
                            className="input input-bordered w-full"
                            placeholder="john@example.com"
                            required
                        />

                        {/* password */}
                        <label className="label font-medium text-gray-700">Password</label>
                        <div className='relative'>
                            <input
                                name='password'
                                type={showPassword ? "text" : "password"}
                                className="input input-bordered w-full pr-12"
                                placeholder="••••••••"
                                required
                            />
                            <button
                                type='button'
                                onClick={() => setShowPassword(!showPassword)}
                                className='absolute top-1 right-3 bg-gray-100 p-1.5 rounded-full text-xl text-gray-600 hover:bg-gray-200 transition'
                            >
                                {showPassword ? <LuEyeClosed /> : <FaRegEye />}
                            </button>
                        </div>
                        {passwordError && (
                            <p className='text-sm text-red-500 mt-1'>{passwordError}</p>
                        )}

                        <button type='submit' className="btn btn-primary w-full mt-4">
                            Register
                        </button>
                    </fieldset>
                </form>

                <div className="divider mt-0 mb-4">or</div>

                <button
                    type="button"
                    onClick={handleGoogleSignIn}
                    className="btn btn-outline w-11/12 mx-auto flex items-center justify-center gap-2 text-gray-700 hover:bg-gray-100 mb-4 transition"
                >
                    <FaGoogle className="text-blue-500 text-xl" />
                    Continue with Google
                </button>

                <p className='text-center text-sm text-gray-600 mb-6'>
                    Already have an account?{" "}
                    <Link to="/auth/login" className='text-blue-500 hover:underline font-medium'>
                        Login here
                    </Link>
                </p>

                <ToastContainer
                    position="top-right"
                    autoClose={5000}
                    hideProgressBar={false}
                    newestOnTop={false}
                    closeOnClick={false}
                    rtl={false}
                    pauseOnFocusLoss
                    draggable
                    pauseOnHover
                    theme="light"
                />
            </div>
        </div>

    );
};

export default Register;