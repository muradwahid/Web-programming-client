import React from "react";
import { createBrowserRouter } from "react-router-dom";
import AllCourses from "../component/AllCourses/AllCourses";
import Blog from "../component/Blog/Blog";
import CheckOut from "../component/CheckOut/CheckOut";
import CourseDetails from "../component/CourseDetails/CourseDetails";
import Courses from "../component/Courses/Courses";
import Home from "../component/Home/Home";
import Login from "../component/Login/Login";
import Register from "../component/Login/Register";
import ErrorPage from "../component/Shared/ErrorPage/ErrorPage";
import Main from "../Layout/Main";
import PrivetRoutes from "./PrivetRoutes/PrivetRoutes";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    errorElement: <ErrorPage />,
    children: [
      { path: "/", element: <Home /> },
      {
        path: "/home",
        element: <Home />,
      },
      {
        path: "/allcourse",
        element: <AllCourses />,
        loader: () => fetch("https://assignmenttenserver.vercel.app/allcourse"),
      },
      {
        path: "/blog",
        element: <Blog />,
      },
      {
        path: "/details/:id",
        element: (
          <PrivetRoutes>
            <CourseDetails />
          </PrivetRoutes>
        ),
        loader: ({ params }) =>
          fetch(`https://assignmenttenserver.vercel.app/details/${params.id}`),
      },
      { path: "/register", element: <Register /> },
      { path: "/login", element: <Login /> },
      {
        path: "/courses/:id",
        element: <Courses />,
        loader: ({ params }) =>
          fetch(`https://assignmenttenserver.vercel.app/courses/${params.id}`),
      },
      {
        path: "/checkout/:id",
        element: (
          <PrivetRoutes>
            <CheckOut />
          </PrivetRoutes>
        ),
        loader: ({ params }) =>
          fetch(`https://assignmenttenserver.vercel.app/details/${params.id}`),
      },
    ],
  },
]);
