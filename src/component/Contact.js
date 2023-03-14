import React from "react";
import call from "../assets/call.png";
import insta from "../assets/instagram.png";
import whatsapp from "../assets/whatsapp.png";
import './contact.css'

export default function Contact() {
    return (
        <div id="contact">
            <div className="cont">
                <div>
                    <p>Contact Us Via</p>
                </div>
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
                            <p>+91 7061330904</p>
                        </div>
                    </div>
                </div>
                <div>
                    <p>OR</p>
                </div>
                <div>
                    <form className="contactForm" onSubmit={handleSubmit}>
                        <div><input required value={name} type="text" placeholder="Your Name Here"></input></div>
                        <div><input required value={phoneNumber} type="text" placeholder="Your Contact Here"></input></div>
                        <div className="submitButton">
                            <button type="sub"
                        </div>

                    </form>
                </div>

            </div>
        </div>
    )
}