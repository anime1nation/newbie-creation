import React, { useState } from "react";
import {
  resetForm,
  updatedMessage,
  updatedName,
  updatedPhoneNumber,
} from "../app-manager/slices/contactSlice";
import call from "../assets/call.svg";
import insta from "../assets/instagram.svg";
import whatsapp from "../assets/whatsapp.svg";
import Loader from "../common/Loader";
import FeedbackPage from "../common/FeedbackPage";
import "./contact.css";
import axios from "axios";
import { useSelector, useDispatch } from "react-redux";
import {
  addFeedbackMessage,
  removeFeedbackMessage,
} from "../app-manager/slices/feedbackSlice";
import { useLocation } from "react-router-dom";
// import PhoneInput from "react-phone-input-2";

export default function Contact() {
  const location = useLocation();
  const path = location.pathname.split("/").join("");

  const [sending, setSending] = useState(false);
  const [feedback, setFeedback] = useState();

  const { name, phoneNumber, message } = useSelector((state) => state.contact);

  const dispatch = useDispatch();
  const apiURL = "https://ez2g76nft3.execute-api.ap-south-1.amazonaws.com/biecreation/contact";
  const contactDetail = new FormData();

  const handleSubmit = (e) => {
    e.preventDefault();
    contactDetail.append("name", name);
    contactDetail.append("phoneNumber", phoneNumber);
    contactDetail.append("message", message);
    setSending(true);
    axios
      .post(apiURL, contactDetail, {
        params: {
          from: path,
        },
      })
      .then(() => {
        setSending(false);
        dispatch(resetForm());
        setFeedback(true);
      })
      .catch((e) => {
        setSending(false);
        dispatch(resetForm());
        dispatch(
          addFeedbackMessage({
            message: "Something went wrong. Please try again",
            status: "error",
          })
        );
      });
    dispatch(removeFeedbackMessage());
  };
  if (feedback) {
    return <FeedbackPage />;
  }

  return (
    <div id="contact" >
      <div className="cont">
        <div>
          <p className="p">Contact Us Via</p>
        </div>
        <div className="icon">
          <div className="insta">
          <a href="https://www.instagram.com/newbie_creations" target="_blank" rel="noreferrer"><img className="insta" src={insta} alt="insta" /></a>
          </div>
          <div className="whatsapp">
          <a href="https://wa.me/+917061330904?text=Hello%20%F0%9F%93%B7%20,%20Just%20visited%20your%20website%20.I%20want%20to%20know%20more%20about%20you%20.%20kindly%20reply%20as%20soon%20." target="_blank" rel="noreferrer"><img className="whatsapp" src={whatsapp} alt="whatsapp" /></a>
          </div>
          <div className="phone">
            <div className="call">
            <a href="tel:+917061330904"><img className="call" src={call} alt="call" /></a>
            </div>
            <div>
              <p className="p">+91-7061330904</p>
            </div>
          </div>
        </div>
        <div>
          <p className="p">OR</p>
        </div>
        <div>
          <form className="contactForm" onSubmit={handleSubmit}>
            <input
              required
              autoComplete="off"
              value={name}
              type="text"
              className="question"
              id="nme"
              onChange={(e) => dispatch(updatedName(e.target.value))}
            />
            <label htmlFor="nme">
              <span>What's your name?</span>
            </label>

            <input
              required
              autoComplete="off"
              value={phoneNumber}
              type="number"
              className="question"
              id="phn"
              onChange={(e) => dispatch(updatedPhoneNumber(e.target.value))}
            />
            <label htmlFor="phn">
              <span>What's your phone number?</span>
            </label>

            <textarea
              value={message}
              name="message"
              autoComplete="off"
              required
              rows="2"
              className="question"
              id="msg"
              onChange={(e) => dispatch(updatedMessage(e.target.value))}
            ></textarea>
            <label htmlFor="msg">
              <span>What's your message?</span>
            </label>

            <button
              type="submit"
              className="button"
              disabled={sending}
           >{
            sending ? (
              <>
                <Loader />
                {"submiting"}
              </>
            ) : (
              "Request a call"
            )
          }</button>
          </form>
        </div>
        <div className="tc">
            <i>* Usually we contact you in 24 hours</i>
        </div>
      </div>
    </div>
  );
}
