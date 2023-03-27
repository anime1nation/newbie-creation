import React from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import logo from "../assets/logo.png";
import Feedback from "../common/Feedback";
import "./header.css";

const Header = () => {
const navigate = useNavigate()
const { message, sent, status } = useSelector((state) => state.feedback);

  return (
    <div id="main-header">
      {sent && <Feedback status={status} content={message} />}
      <div className="header">
        <div>
            <p onClick={()=>navigate("/contact")}>Contact Us</p>
        </div>
        <div className="lo">
        <img className="logo" src={logo} alt="logo"  onClick={()=>navigate("")} />
        </div>
        <div>
            <p onClick={()=>navigate("/join")}>Join Us</p>
        </div>
      </div>
    </div>
  );
};
export default Header;
