import React, { useState } from "react";
import { BsGlobe } from "react-icons/bs";
import { BsPersonCircle } from "react-icons/bs";
import { GiHamburgerMenu } from "react-icons/gi";

import logo from "../assets/images/logo.png";

const Navbar = () => {
  const [menu, setMenu] = useState(false);

  return (
    <div className="navbar">
      <img className="logo" src={logo} alt="logo" />

      <div className="nav-menu">
        <p className="logo-hover">Become a host</p>
        <BsGlobe className="globe" />
        <div
          className="menu"
          onClick={() => {
            setMenu((prevState) => !prevState);
          }}
        >
          <GiHamburgerMenu />
          <BsPersonCircle className="logos" />
        </div>

        {menu && (
          <div className="drop-down-menu">
            <div className="drop-down-menu-content">
              <a href="https://uniacco.com/">Sign Up</a>
              <a href="https://uniacco.com/">Login In</a>
              <hr />
              <a href="https://uniacco.com/">Host your home</a>
              <a href="https://uniacco.com/">Host your experience</a>
              <a href="https://uniacco.com/">Help</a>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
