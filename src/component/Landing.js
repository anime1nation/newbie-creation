import React from "react";
import "./landing.css";
import bg from "../assets/bg.jpg";
import b1 from "../assets/b1.jpg";

const Landing = () => {
  return (
    <>
      <div id="banner">
        <div className="ban">
          <img className="bannerimage" src={bg} alt="insta" />
        </div>
        <div className="banner-card">
          <div className="lab">
            <label className="label1"><p>The</p><p><span>un</span>Traditional</p><p>Photographer</p></label>
          </div>
          <div className="cardi1">
          <img className="cardimage" src={b1} alt="insta" />
          </div>
        </div>
      </div>
    </>
  );
};
export default Landing;
