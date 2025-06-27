import React from 'react';
import { Outlet } from 'react-router';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { ToastContainer } from 'react-toastify';
import Slider from '../components/Slider';

const MainLayout = () => {
    return (
        <div>
            <Header></Header>
            <div className='md:max-w-7xl mx-auto pt-16'>
                <Outlet></Outlet>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default MainLayout;