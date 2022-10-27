import React from "react";
import { useState } from "react";
import { CiLight, CiUser } from "react-icons/ci";
import { Bars3Icon, MoonIcon, SunIcon, XMarkIcon } from "@heroicons/react/24/solid";
import { Link, NavLink } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../../contexts/AuthProvider";
import { FaMoon, FaSun } from "react-icons/fa";
const NavBar = () => {
  const { user, logOut } = useContext(AuthContext);
  const [open, setOpen] = useState(true);
  const [toggle, setToggle] = useState(false);
  const [theme, setTheme] = useState(false);
  const userLogout = () => {
    logOut();
    setToggle(false);
  }
  return (
    <nav className={`py-6 ${theme ? "bg-gray-700" : "bg-cyan-600 "}`}>
      <div className="w-4/5 mx-auto flex justify-between items-center text-white">
        <div className="flex items-center gap-4 md:text-[30px] text-[20px]">
          <CiLight />
          <NavLink to="/">
            <h3>Web-Pro</h3>
          </NavLink>
        </div>
        <div className="lg:hidden" onClick={() => setOpen(!open)}>
          {open ? <Bars3Icon className="h-8" /> : <XMarkIcon className="h-8" />}
        </div>
        <div
          className={`flex items-center gap-8 ${
            theme ? "bg-gray-700" : "bg-cyan-600 "
          } absolute left-0 text-center text-lg lg:static ${
            !open ? "top-[80px] flex-col gap-2 py-6 w-full" : "top-[-200px]"
          }`}
        >
          <NavLink className="hover:text-fuchsia-400" to="/home">
            Home
          </NavLink>
          <NavLink className="hover:text-fuchsia-400" to="/allcourse">
            All Course
          </NavLink>
          <NavLink className="hover:text-fuchsia-400" to="/faq">
            FAQ
          </NavLink>
          <NavLink className="hover:text-fuchsia-400" to="/blog">
            Blog
          </NavLink>
          <NavLink onClick={() => setTheme(!theme)}>
            {theme ? <FaMoon /> : <FaSun />}
          </NavLink>
          {user?.uid ? (
            <NavLink className="flex gap-4 items-center">
              {user?.displayName}
              {user?.photoURL ? (
                <img
                  onClick={() => setToggle(!toggle)}
                  className="rounded-full h-10 w-10"
                  src={user.photoURL}
                  alt=""
                />
              ) : (
                <CiUser
                  onClick={() => setToggle(!toggle)}
                  className="rounded-full h-8 w-8 bg-cyan-500"
                />
              )}
            </NavLink>
          ) : (
            <>
              <NavLink className="hover:text-fuchsia-400" to="/register">
                Register
              </NavLink>
              <NavLink className="hover:text-fuchsia-400" to="/login">
                Login
              </NavLink>
            </>
          )}
        </div>
      </div>
      {toggle ? (
        <div className="absolute bg-cyan-500 rounded-xl  py-7 px-4 right-20 top-24 text-white">
          <p className="mb-6">User profile</p>
          <Link
            onClick={userLogout}
            className="font-semibold bg-slate-100 py-2 px-3 text-cyan-500 rounded-xl "
          >
            Logout
          </Link>
        </div>
      ) : null}
    </nav>
  );
};

export default NavBar;
