import React from "react";
import { useState } from "react";
import { CiLight } from "react-icons/ci";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import { NavLink } from "react-router-dom";
const NavBar = () => {
    const [open,setOpen]=useState(true)
  return (
    <nav className="bg-cyan-600 py-6">
      <div className="w-4/5 mx-auto flex justify-between items-center text-white">
        <div className="flex items-center gap-4 md:text-[30px] text-[20px]">
          <CiLight />
          <NavLink to='/'>
            <h3>Learn-web-programming</h3>
          </NavLink>
        </div>
        <div className="lg:hidden" onClick={() => setOpen(!open)}>
          {open ? <Bars3Icon className="h-8" /> : <XMarkIcon className="h-8" />}
        </div>
        <div
          className={`flex gap-8 bg-cyan-600 absolute left-0 text-center text-lg lg:static ${
            !open ? "top-[80px] flex-col gap-2 py-6 w-full" : "top-[-200px]"
          }`}
        >
          <NavLink className="hover:text-fuchsia-400" to="/home">Home</NavLink>
          <NavLink className="hover:text-fuchsia-400" to="/allcourse">All Course</NavLink>
          <NavLink className="hover:text-fuchsia-400" to="/faq">FAQ</NavLink>
          <NavLink className="hover:text-fuchsia-400" to="/blog">Blog</NavLink>
          <NavLink className="hover:text-fuchsia-400" to="/register">Register</NavLink>
          <NavLink className="hover:text-fuchsia-400" to="/login">Login</NavLink>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
