import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";

const Header = () => {
  return (
    <div className="header">
      <div className="navbar ">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
            >
              <Link to="/">Home</Link>

              <Link to="/statistics"> Statistics</Link>
              <Link to="/jobs">Applied Jobs</Link>
              <Link to="/blog">Blog</Link>
            </ul>
          </div>
          <a className="btn btn-ghost normal-case text-2xl">JobStore</a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <Link to="/ " className="px-3 text-xl">
              Home
            </Link>

            <Link to="/statistics" className="px-3 text-xl">
              {" "}
              Statistics
            </Link>
            <Link to="/jobs" className="px-3 text-xl">
              Applied Jobs
            </Link>
            <Link to="/blog" className="px-3 text-xl">
              Blog
            </Link>
          </ul>
        </div>
        <div className="navbar-end">
          <a className="btn  apply text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75">Start Applying</a>
        </div>
      </div>
    </div>
  );
};

export default Header;
