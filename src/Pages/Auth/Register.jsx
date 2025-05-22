import React, { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router';
import { AuthContext } from '../../Provider/AuthProvider';
import { toast, ToastContainer } from 'react-toastify';
import { LuEyeClosed } from 'react-icons/lu';
import { FaGoogle, FaRegEye } from 'react-icons/fa';
import Lottie from 'lottie-react';
import animation from '../../assets/register.json';
import { motion } from 'framer-motion';

const Register = () => {
  const { createUser, setUser, updateUser, signInWithGoogle } = useContext(AuthContext);
  const [passwordError, setPasswordError] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const navigate = useNavigate();

  const handleRegister = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const photo = form.photo.value;
    const email = form.email.value;
    const password = form.password.value;

    setPasswordError('');

    const checkPass1 = /(?=.*[A-Z])/;
    const checkPass2 = /(?=.*[a-z])/;

    if (password.length < 6) {
      setPasswordError('Password must be at least 6 characters');
      return;
    } else if (!checkPass1.test(password)) {
      setPasswordError('Password must contain at least one uppercase letter');
      return;
    } else if (!checkPass2.test(password)) {
      setPasswordError('Password must contain at least one lowercase letter');
      return;
    }

    createUser(email, password)
      .then((result) => {
        const user = result.user;
        updateUser({ displayName: name, photoURL: photo })
          .then(() => {
            setUser({ ...user, displayName: name, photoURL: photo });
            toast.success('Registered successfully!', {
              position: 'top-right',
              autoClose: 4000,
              theme: 'colored',
            });
            setTimeout(() => {
              navigate('/');
            }, 1000);
          })
          .catch((error) => {
            console.error(error);
            setUser(user);
          });
      })
      .catch((error) => {
        toast.error(error.message || 'Registration failed');
      });
  };

  const handleGoogleSignIn = () => {
    signInWithGoogle().then(() => {
      navigate('/');
    });
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-white px-4 py-12">
      <title>Register | TaskLink</title>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="bg-white shadow-2xl rounded-3xl border border-blue-300 w-full max-w-5xl flex flex-col md:flex-row overflow-hidden"
      >
        {/* Animation Section */}
        <div className="md:w-1/2 bg-blue-100 flex items-center justify-center p-8">
          <Lottie animationData={animation} loop={true} className="w-full max-w-xs md:max-w-md" />
        </div>

        {/* Form Section */}
        <div className="md:w-1/2 p-8">
          <h1 className="text-2xl font-bold text-center text-blue-600 mb-2">Create Your Account</h1>
          <p className="text-center text-sm text-gray-600 mb-6">Join TaskLink today</p>

          <form onSubmit={handleRegister} className="space-y-4">
            <div>
              <label className="text-sm font-medium text-gray-700">Full Name</label>
              <input
                name="name"
                type="text"
                className="input input-bordered w-full mt-1"
                placeholder="John Doe"
                required
              />
            </div>

            <div>
              <label className="text-sm font-medium text-gray-700">Photo URL</label>
              <input
                name="photo"
                type="text"
                className="input input-bordered w-full mt-1"
                placeholder="https://example.com/photo.jpg"
                required
              />
            </div>

            <div>
              <label className="text-sm font-medium text-gray-700">Email Address</label>
              <input
                name="email"
                type="email"
                className="input input-bordered w-full mt-1"
                placeholder="john@example.com"
                required
              />
            </div>

            <div>
              <label className="text-sm font-medium text-gray-700">Password</label>
              <div className="relative mt-1">
                <input
                  name="password"
                  type={showPassword ? 'text' : 'password'}
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
              {passwordError && <p className="text-sm text-red-500 mt-1">{passwordError}</p>}
            </div>

            <button
              type="submit"
              className="w-full py-2 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition"
            >
              Register
            </button>
          </form>

          <div className="divider my-5">or</div>

          <button
            type="button"
            onClick={handleGoogleSignIn}
            className="btn btn-outline w-full flex items-center justify-center gap-2 text-gray-700 hover:bg-gray-100 transition"
          >
            <FaGoogle className="text-blue-500 text-xl" />
            Continue with Google
          </button>

          <p className="text-center text-sm text-gray-600 mt-5">
            Already have an account?{' '}
            <Link to="/auth/login" className="text-blue-500 hover:underline font-medium">
              Login here
            </Link>
          </p>
        </div>
      </motion.div>

      <ToastContainer />
    </div>
  );
};

export default Register;
