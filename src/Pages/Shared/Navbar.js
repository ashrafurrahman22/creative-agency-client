import React from "react";
import { Link } from "react-router-dom";
import creativeLogo from "../../assets/images/logos/logo.png";
import "../../Styles/Navbar.css";
import illustration from '../../assets/images/logos/Frame.png'

const Navbar = () => {
  return (
    <div className="min-h-screen px-12 py-8" id="nav">
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
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/services">Service</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
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

      <div className="lg:grid grid-cols-2 mx-auto mt-16 p-4 text-left">

        <div className="max-w-7xl mt-10 mx-auto px-12">
          <h1
            style={{ fontFamily: "poppins", letterSpacing:"2px" }}
            className=" font-extrabold text-6xl lg:text-0 my-4"
          >
            Let’s Grow Your <br /> Brand To The <br /> Next Level
          </h1>

          <p style={{ fontSize: "18px" }} className="my-3">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus
            commodo ipsum duis laoreet maecenas. Feugiat{" "}
          </p>

          <div className="ml-2">
            <button style={{letterSpacing:"3px"}}
              id="btn"
              className="btn font-medium w-36 text-white px-8 py-2 my-10 uppercase"
            >
              Hire Us
            </button>
          </div>
        </div>

        <div>
        <img style={{width:"624.6px", height:"422.8px"}} src={illustration} alt="" />
        </div>

      </div>
    </div>
  );
};

export default Navbar;
