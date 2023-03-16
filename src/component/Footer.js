import React from "react";
import "./footer.css";
import call from "../assets/call.png";
import insta from "../assets/instagram.png";
import whatsapp from "../assets/whatsapp.png";
import flogo from "../assets/flogo.png";

const Footer = () => {
  return (
    <div id="footer">
      <div className="itemf">
        <div className="icon">
        <div>
          <img className="insta" src={insta} alt="insta" />
        </div>
        <div>
          <img className="whatsapp" src={whatsapp} alt="whatsapp" />
        </div>
        <div className="phone">
          <div>
            <img className="call" src={call} alt="call" />
          </div>
          <div>
            <p>+91-7061330904</p>
          </div>
        </div>
        </div>
        <div>
          <img className="flogo" src={flogo} alt="flogo" />
        </div>
      </div>
    </div>
  );
};
export default Footer;
