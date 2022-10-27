import React from 'react';
import { Link } from 'react-router-dom';

const ErrorPage = () => {
    return (
        <div className='text-center mt-[200px]'>
            <h3 className='text-4xl'>404</h3>
            <h4 className='text-2xl'>This page not found</h4>
            <p className='text-[18px]'>Please return <Link className='text-red-700' to="/">Home page</Link></p>
        </div>
    );
};

export default ErrorPage;