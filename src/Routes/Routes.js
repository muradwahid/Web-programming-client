import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Home from '../component/Home/Home';
import Login from '../component/Login/Login';
import Register from '../component/Login/Register';
import Main from '../Layout/Main';

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Main />,
        children: [
            {path:'/',element:<Home/>},
            { path: '/home', element: <Home /> },
            { path: '/register', element: <Register /> },
            {path:'/login',element:<Login/>}
        ]
    }
]);