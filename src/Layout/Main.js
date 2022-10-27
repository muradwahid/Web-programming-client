import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../component/Shared/Footer/Footer';
import NavBar from '../component/Shared/NavBar/NavBar';

const Main = () => {
    return (
        <div>
            <NavBar />
            <Outlet />
            <Footer/>
        </div>
    );
};

export default Main;