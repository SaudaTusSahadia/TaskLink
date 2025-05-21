import React, { use, useState } from 'react';
import { Link, useLocation, useNavigate } from "react-router";
import { LuEyeClosed } from "react-icons/lu";
import { FaGoogle, FaRegEye } from "react-icons/fa";
// import 'react-toastify/dist/ReactToastify.css';
import { toast } from "react-toastify";
import { AuthContext } from '../../Provider/AuthProvider';


const Login = () => {
    const [error, setError] = useState("");
    const [showPassword, setShowPassword] = useState(false);

    const { signIn, signInWithGoogle } = use(AuthContext);

    const location = useLocation();
    // console.log(location);
    const navigate = useNavigate();

    const handleLogin = (e) => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;

        signIn(email, password).then(() => {

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
                const errorCode = error.code;
                setError(errorCode);
            });
    };

    const handleGoogleSignIn = () => {
        signInWithGoogle().then(() => {
            navigate(`${location.state ? location.state : "/"}`);
        });
    };

    return (
        <div className="min-h-screen flex items-center justify-center px-4 py-12">
            {/* for dynamic title  */}
            <title>Login | Event Explorer</title>
            <div className="card bg-white w-full max-w-md shadow-xl rounded-2xl border-2 border-blue-400">
                <h1 className="text-2xl font-semibold text-center text-blue-600 mt-6">
                    Login to Your Account
                </h1>

                <form onSubmit={handleLogin} className="card-body space-y-4">
                    <fieldset className="space-y-2">
                        {/* Email */}
                        <label className="label font-medium text-gray-700">
                            Email Address
                        </label>
                        <input
                            name="email"
                            type="email"
                            className="input input-bordered w-full"
                            placeholder="you@example.com"
                            required
                        />

                        {/* Password */}
                        <label className="label font-medium text-gray-700">Password</label>
                        <div className="relative">
                            <input
                                name="password"
                                type={showPassword ? "text" : "password"}
                                className="input input-bordered w-full pr-12"
                                placeholder="••••••••"
                                required
                            />
                            <button
                                type="button"
                                onClick={() => setShowPassword(!showPassword)}
                                className="absolute top-1 right-3 bg-gray-100 p-1.5 rounded-full text-xl text-gray-600 hover:bg-gray-200 transition"
                            >
                                {showPassword ? <LuEyeClosed /> : <FaRegEye />}
                            </button>
                        </div>

                        <div className="text-right">
                            <Link to={'/auth/forgetPassword'} className="text-sm text-blue-600 hover:underline cursor-pointer">
                                Forgot password?
                            </Link>
                        </div>

                        {error && <p className="text-sm text-red-500 mt-1">{error}</p>}

                        <button type="submit" className="btn btn-primary w-full mt-2">
                            Login
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

                <p className="text-center text-sm text-gray-600 mb-6">
                    Don't have an account?{" "}
                    <Link
                        to="/auth/register"
                        className="text-blue-500 hover:underline font-medium"
                    >
                        Register
                    </Link>
                </p>
            </div>


        </div>

    );
};

export default Login;