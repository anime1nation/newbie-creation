import React from "react";
import logo from "../assets/logo.png";
import "./header.css";

const Header = () => {
  return (
    <div id="main-header">
      <div className="header">
        <div>
            <p>Contact Us</p></div>
        <div>
        <img className="logo" src={logo} alt="logo" />
        </div>
        <div>
            <p>Join Us</p>
        </div>
      </div>
    </div>
  );
};
export default Header;
