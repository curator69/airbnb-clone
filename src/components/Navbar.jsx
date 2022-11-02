import React from "react";
import { BsGlobe } from "react-icons/bs";
import { BsPersonCircle } from "react-icons/bs";
import { GiHamburgerMenu } from "react-icons/gi";

import logo from "../assets/images/logo.png";

const Navbar = () => {
  return (
    <div className="navbar">
      <img className="logo" src={logo} alt="logo" />

      <div className="nav-menu">
        <p className="logo-hover">Become a host</p>
        <BsGlobe className="logo-hover" />
        <div className="menu">
          <GiHamburgerMenu />
          <BsPersonCircle className="logos" />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
