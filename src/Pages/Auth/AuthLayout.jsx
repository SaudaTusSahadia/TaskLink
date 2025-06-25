import React from 'react';
import { ToastContainer } from 'react-toastify';
import Footer from '../../components/Footer';
import Header from '../../components/Header';
import { Outlet } from 'react-router';

const AuthLayout = () => {
    return (
        <div>
            <div>
            <Header></Header>
            <div className='max-w-screen  mx-auto pt-16'>
            <Outlet></Outlet>
            </div>
            <Footer></Footer>
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

export default AuthLayout;