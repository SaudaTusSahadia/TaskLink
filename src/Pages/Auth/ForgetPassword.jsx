import React, { use } from 'react';
import { MdEmail } from 'react-icons/md';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router';
import { AuthContext } from '../../Provider/AuthProvider';


const ForgetPassword = () => {
    const { resetUser } = use(AuthContext);
    const navigate = useNavigate();




    const handleReset = (e) => {
        e.preventDefault();
        const email = e.target.email.value;
        resetUser(email)
            .then(() => {
                navigate('/auth/login');
                window.open('https://mail.google.com', '_blank');
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
            })

    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-orange-50 to-white px-4">
            {/* for dynamic title  */}
            <title>ForgetPassword | TaskLink</title>
            <div className="card bg-white w-full max-w-md shadow-xl rounded-2xl p-6 border border-orange-300">
                <h1 className="text-2xl font-semibold text-center text-orange-600 mb-6">Forgot Password</h1>

                <form onSubmit={handleReset} className="space-y-5">
                    <div className="flex items-center border border-gray-300 rounded-lg p-2 focus-within:ring-2 ring-orange-400">
                        <MdEmail className="text-orange-500 text-2xl" />
                        <input
                            type="email"
                            name="email"
                            className="w-full ml-3 outline-none"
                            placeholder="Enter your email"
                            required
                        />
                    </div>

                    <button type="submit" className="btn btn-primary w-full bg-orange-500 text-white hover:bg-orange-600 transition-all">
                        Reset Password
                    </button>
                </form>

                <p className="text-center mt-4 text-gray-500 text-sm">You will be redirected to Gmail</p>
            </div>
        </div>
    );
};

export default ForgetPassword;