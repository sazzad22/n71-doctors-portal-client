import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { signOut } from "firebase/auth";
import { Link } from "react-router-dom";
import auth from "../../../firebase.init";

const Navbar = () => {
  const [user] = useAuthState(auth);
  const handleSignOut = () => signOut(auth);

  const menuItem = (
    <>
      <li>
        <Link to={"/home"}>Home</Link>
      </li>
      <li>
        <Link to={"/about"}>About</Link>
      </li>
      <li>
        <Link to={"/appointment"}>Appointment</Link>
      </li>
      <li>
        <Link to={"/reviews"}>Reviews</Link>
      </li>
      <li>
        <Link to={"/contactus"}>Contact Us</Link>
      </li>
      <li>
        {user ? (
          <button className="btn btn-ghost" onClick={handleSignOut}>
            Sign Out
          </button>
        ) : (
          <Link to={"/login"}>Login</Link>
        )}
      </li>
    </>
  );
  return (
    <div>
      <div className="navbar   glass fixed z-10">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex="0" className="btn btn-ghost lg:hidden">
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
              tabIndex="0"
              className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
            >
              {menuItem}
            </ul>
          </div>
          <Link to={"/home"} className="btn btn-ghost normal-case text-xl">
            Doctors Portal
          </Link>
        </div>
        <div className="navbar hidden lg:flex justify-end">
          <ul className="menu  menu-horizontal p-0">{menuItem}</ul>
          {user && (
            <span
              className=" border-2 px-2 rounded-3xl  font-semibold text-accent hover:text-primary ease-in duration-200 cursor-pointer
           shadow-sm"
            >
              {user.displayName}
            </span>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
