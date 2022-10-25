import React from "react";
import { Link } from "react-router-dom";

const Register = () => {
  return (
    <div className="font-sans antialiased bg-grey-lightest">
      <div className="w-full bg-grey-lightest ">
        <div className="container mx-auto py-8 ">
          <div className="w-5/6 lg:w-1/2 mx-auto bg-white rounded shadow-xl shadow-slate-400">
            <div className="py-4 px-8 text-black text-xl border-b border-grey-lighter">
              Register for a free account
            </div>
            <form className="py-4 px-8">
              <div className="md:flex mb-4">
                <div className="md:w-1/2 mr-1">
                  <label
                    className="block text-grey-darker text-sm font-bold mb-2"
                    htmlFor="first_name"
                  >
                    First Name
                  </label>
                  <input
                    className="appearance-none border rounded w-full py-2 px-3 text-grey-darker"
                    id="first_name"
                    type="text"
                    name="first-name"
                    placeholder="Your first name"
                  />
                </div>
                <div className="md:w-1/2 ml-1">
                  <label
                    className="block text-grey-darker text-sm font-bold mb-2"
                    htmlFor="last_name"
                  >
                    Last Name
                  </label>
                  <input
                    className="appearance-none border rounded w-full py-2 px-3 text-grey-darker"
                    id="last_name"
                    type="text"
                    name="last-name"
                    placeholder="Your last name"
                  />
                </div>
              </div>
              <div className="mb-4">
                <label
                  className="block text-grey-darker text-sm font-bold mb-2"
                  htmlFor="email"
                >
                  Email Address
                </label>
                <input
                  className="appearance-none border rounded w-full py-2 px-3 text-grey-darker"
                  id="email"
                  type="email"
                  name="email"
                  placeholder="Your email address"
                />
              </div>
              <div className="mb-4">
                <label
                  className="block text-grey-darker text-sm font-bold mb-2"
                  htmlFor="password"
                >
                  Password
                </label>
                <input
                  className="appearance-none border rounded w-full py-2 px-3 text-grey-darker"
                  id="password"
                  type="password"
                  name="password"
                  placeholder="Your secure password"
                />
                <p className="text-grey text-xs mt-1">At least 6 characters</p>
              </div>
              <div className="mb-4">
                <label
                  className="block text-grey-darker text-sm font-bold mb-2"
                  htmlFor="confirm"
                >
                  Confirm Password
                </label>
                <input
                  className="appearance-none border rounded w-full py-2 px-3 text-grey-darker"
                  id="confirm"
                  type="password"
                  name="confirm"
                  placeholder="Confirm password"
                />
                <p className="text-grey text-xs mt-1">At least 6 characters</p>
              </div>
              <div className="flex items-center justify-between mt-8">
                <button
                  className="bg-cyan-600 hover:bg-cyan-500 text-white font-bold py-2 px-4 rounded-full mx-auto"
                  type="submit"
                >
                  Sign Up
                </button>
              </div>
            </form>
          </div>
          <p className="text-center my-4 text-[18px] text-grey-dark text-sm no-underline hover:text-grey-darker">
            You already have an account?{" "}
            <Link to="/login" className="text-red-400 font-bold">
              Log in.
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Register;
