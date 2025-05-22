import React, { useContext } from 'react';
import { MdEmail } from 'react-icons/md';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router';
import { AuthContext } from '../../Provider/AuthProvider';
import Lottie from 'lottie-react';
import emailAnimation from '../../assets/Animation - 1747933929509.json'; 
import { motion } from 'framer-motion';

const ForgetPassword = () => {
  const { resetUser } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleReset = (e) => {
    e.preventDefault();
    const email = e.target.email.value;

    resetUser(email)
      .then(() => {
        navigate('/auth/login');
        window.open('https://mail.google.com', '_blank');
        toast.success('Password reset email sent! Check your Gmail.', {
          position: "top-right",
          autoClose: 4000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          theme: "colored",
        });
      })
      .catch((err) => {
        toast.error(err.message || "Failed to reset password.", {
          position: "top-right",
        });
      });
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-white px-4">
      <title>Forget Password | TaskLink</title>

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="card bg-white w-full max-w-md shadow-2xl rounded-3xl p-8 border border-blue-300"
      >
        <div className="flex justify-center mb-4">
          <Lottie animationData={emailAnimation} loop={true} className="h-40" />
        </div>

        <h1 className="text-2xl font-bold text-center text-blue-600 mb-4">Forgot Your Password?</h1>
        <p className="text-center text-sm text-gray-600 mb-6">
          Enter your email below and we’ll send you a link to reset your password.
        </p>

        <form onSubmit={handleReset} className="space-y-5">
          <div className="flex items-center border border-gray-300 rounded-lg p-3 shadow-sm focus-within:ring-2 ring-blue-400 bg-blue-50">
            <MdEmail className="text-blue-600 text-xl" />
            <input
              type="email"
              name="email"
              className="w-full ml-3 bg-transparent outline-none text-gray-700"
              placeholder="Enter your email"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full py-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-all"
          >
            Send Reset Link
          </button>
        </form>

        <p className="text-center mt-4 text-gray-500 text-sm">
          You’ll be redirected to Gmail after reset.
        </p>
      </motion.div>
    </div>
  );
};

export default ForgetPassword;
