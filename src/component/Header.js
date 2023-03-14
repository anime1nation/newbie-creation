import React from "react";
import { useNavigate } from "react-router-dom";
import logo from "../assets/logo.png";
import "./header.css";

const Header = () => {
const navigate = useNavigate()

  return (
    <div id="main-header">
      <div className="header">
        <div>
            <p onClick={()=>navigate("/contact")}>Contact Us</p>
        </div>
        <div>
        <img className="logo" src={logo} alt="logo"  onClick={()=>navigate("")} />
        </div>
        <div>
            <p>Join Us</p>
        </div>
      </div>
    </div>
  );
};
export default Header;
