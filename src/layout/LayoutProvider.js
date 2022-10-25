import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../Shared/Header/Header';
import Footer from '../Shared/Footer/Footer'


const LayoutProvider = () => {
    return (
        <div>
            <Header />
            <Outlet></Outlet>
            <Footer />
        </div>
    );
};

export default LayoutProvider;