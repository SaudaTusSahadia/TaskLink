import React, { useContext, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router';
import { LuEyeClosed } from 'react-icons/lu';
import { FaGoogle, FaRegEye } from 'react-icons/fa';
import { toast } from 'react-toastify';
import { AuthContext } from '../../Provider/AuthProvider';
import Lottie from 'lottie-react';
import loginAnimation from '../../assets/login.json';
import { motion } from 'framer-motion';

const Login = () => {
  const [error, setError] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const { signIn, signInWithGoogle } = useContext(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;

    signIn(email, password)
      .then(() => {
        toast.success("You logged in successfully!", {
          position: "top-right",
          autoClose: 4000,
          theme: "colored",
        });
        setTimeout(() => {
          navigate(`${location.state ? location.state : "/"}`);
        }, 800);
      })
      .catch((error) => {
        setError(error.code);
      });
  };

  const handleGoogleSignIn = () => {
    signInWithGoogle().then(() => {
      navigate(`${location.state ? location.state : "/"}`);
    });
  };

  return (
    <div className="min-h-screen flex items-center justify-center px-4 py-12">
      <title>Login | TaskLink</title>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className=" shadow-2xl rounded-3xl border border-blue-300 w-full max-w-5xl flex flex-col md:flex-row overflow-hidden"
      >
        {/* Animation Section */}
        <div className="md:w-1/2  flex items-center justify-center p-8">
          <Lottie animationData={loginAnimation} loop={true} className="w-full max-w-xs md:max-w-md" />
        </div>

        {/* Form Section */}
        <div className="md:w-1/2 p-8">
          <h1 className="text-2xl font-bold text-center text-blue-600 mb-2">Welcome Back!</h1>
          <p className="text-center text-sm text-gray-600 mb-6">Login to your TaskLink account</p>

          <form onSubmit={handleLogin} className="space-y-4">
            <div>
              <label className="text-sm font-medium text-gray-700">Email Address</label>
              <input
                type="email"
                name="email"
                className="input input-bordered w-full mt-1"
                placeholder="you@example.com"
                required
              />
            </div>

            <div>
              <label className="text-sm font-medium text-gray-700">Password</label>
              <div className="relative mt-1">
                <input
                  type={showPassword ? "text" : "password"}
                  name="password"
                  className="input input-bordered w-full pr-10"
                  placeholder="••••••••"
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute top-1.5 right-3 bg-gray-100 p-1.5 rounded-full text-lg text-gray-600 hover:bg-gray-200 transition"
                >
                  {showPassword ? <LuEyeClosed /> : <FaRegEye />}
                </button>
              </div>
            </div>

            <div className="text-right">
              <Link to="/auth/forgetPassword" className="text-sm text-blue-600 hover:underline">
                Forgot password?
              </Link>
            </div>

            {error && <p className="text-sm text-red-500">{error}</p>}

            <button type="submit" className="w-full py-2 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition">
              Login
            </button>
          </form>

          <div className="divider my-5">or</div>

          <button
            type="button"
            onClick={handleGoogleSignIn}
            className="btn btn-outline w-full flex items-center justify-center gap-2  transition"
          >
            <FaGoogle className="text-blue-500 text-xl" />
            Continue with Google
          </button>

          <p className="text-center text-sm text-gray-600 mt-5">
            Don't have an account?{" "}
            <Link to="/auth/register" className="text-blue-500 hover:underline font-medium">
              Register
            </Link>
          </p>
        </div>
      </motion.div>
    </div>
  );
};

export default Login;
