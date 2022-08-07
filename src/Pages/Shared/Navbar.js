import React from "react";
import { Link } from "react-router-dom";
import creativeLogo from "../../assets/images/logos/logo.png";
// import "../../Styles/Navbar.css";

const Navbar = () => {
  return (
    <div className="pt-10 pb-8 px-12">
      {/* updating */}
      <div id="navbar" class="navbar">
        <div class="navbar-start">
          <div class="dropdown">
            <label tabindex="0" class="btn btn-ghost lg:hidden">
              <svg
                className="w-10"
                xmlns="http://www.w3.org/2000/svg"
                class="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabindex="0"
              class="menu menu-compact dropdown-content mt-3 p-2  shadow rounded-box w-52"
            >
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/portfolio">Our Portfolio</Link>
              </li>
              <li>
                <Link to="/team">Our Team</Link>
              </li>
              <li>
                <Link to="/contact">Contact</Link>
              </li>
              <li>
                <Link to="/dashboard">Dashboard</Link>
              </li>
            </ul>
          </div>
          <Link to="/" class="btn btn-ghost normal-case text-xl">
            <img className="lg:w-44 w-28" src={creativeLogo} alt="" />
          </Link>
        </div>
        <div class="navbar-center hidden lg:flex"></div>
        <div class="navbar-end lg:flex hidden">
          <ul class="menu menu-horizontal p-0">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/portfolio">Our Portfolio</Link>
            </li>
            
            <li>
              <Link to="/contact">Contact Us</Link>
            </li>
            <li>
                <Link to="/dashboard">Dashboard</Link>
              </li>
          </ul>
          <Link to='/login'
            id="btn"
            className="btn font-medium text-white px-6 uppercase"
          >
            Login
          </Link>
        </div>
      </div>

      

      {/* </div> */}
    </div>
  );
};

export default Navbar;
