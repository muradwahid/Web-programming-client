import React from "react";
import { createBrowserRouter } from "react-router-dom";
import AllCourses from "../component/AllCourses/AllCourses";
import CourseDetails from "../component/CourseDetails/CourseDetails";
import Courses from "../component/Courses/Courses";
import Home from "../component/Home/Home";
import Login from "../component/Login/Login";
import Register from "../component/Login/Register";
import Main from "../Layout/Main";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      { path: "/", element: <Home /> },
      {
        path: "/home",
        element: <Home />,
      },
      {
        path: "/allcourse",
        element: <AllCourses />,
        loader: () => fetch("http://localhost:5000/allcourse"),
      },
      {
        path: "/details/:id",
        element: <CourseDetails />,
        loader: ({ params }) => fetch(`http://localhost:5000/details/${params.id}`),
      },
      { path: "/register", element: <Register /> },
      { path: "/login", element: <Login /> },
      {
        path: "/courses/:id",
        element: <Courses />,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/courses/${params.id}`),
      },
    ],
  },
]);
