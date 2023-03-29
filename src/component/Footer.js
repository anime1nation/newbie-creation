import React from "react";
import "./footer.css";
import call from "../assets/call.svg";
import insta from "../assets/instagram.svg";
import whatsapp from "../assets/whatsapp.svg";
import flogo from "../assets/flogo.png";

const Footer = () => {
  return (
    <div id="footer">
      <div className="itemf">
        <div className="icon">
        <div>
          <a href="https://www.instagram.com/newbie_creations" target="_blank" rel="noreferrer"><img className="insta" src={insta} alt="insta" /></a>
        </div>
        <div>
        <a href="https://wa.me/+917061330904?text=Hello%20%F0%9F%93%B7%20,%20Just%20visited%20your%20website%20.I%20want%20to%20know%20more%20about%20you%20.%20kindly%20reply%20as%20soon%20." target="_blank" rel="noreferrer"><img className="whatsapp" src={whatsapp} alt="whatsapp" /></a>
        </div>
        <div className="phone">
          <div>
          <a href="tel:+917061330904"><img className="call" src={call} alt="call" /></a>
          </div>
          <div>
            <p>+91-7061330904</p>
          </div>
        </div>
        </div>
        <label className="cr">
        ©2023 NewBie Creations | All rights reserved
        </label>
        <div className="lo">
          <img className="flogo" src={flogo} alt="flogo" />
        </div>
      </div>
    </div>
  );
};
export default Footer;
