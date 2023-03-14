import React, { useState } from "react";
import {
  resetForm,
  updatedMessage,
  updatedName,
  updatedPhoneNumber,
} from "../app-manager/slices/contactSlice";
import call from "../assets/call.png";
import insta from "../assets/instagram.png";
import whatsapp from "../assets/whatsapp.png";
import Loader from "../common/Loader";
import FeedbackPage from "../common/FeedbackPage";
import "./contact.css";
import axios from "axios";
import { useSelector, useDispatch } from "react-redux";
import {
  addFeedbackMessage,
  removeFeedbackMessage,
} from "../app-manager/slices/feedbackSlice";
import { useLocation} from "react-router-dom";

export default function Contact() {
    const location = useLocation();
    const path =location.pathname.split("/").join("");


  const [sending, setSending] = useState(false);
  const [feedback, setFeedback] = useState();

  const { name, phoneNumber, message } = useSelector((state) => state.contact);

  const dispatch = useDispatch();
  const apiURL = "";
  const contactDetail = new FormData();

  const handleSubmit = (e) => {
    e.preventDefault();
    contactDetail.append("name ", name);
    contactDetail.append("phoneNumber ", phoneNumber); 
    contactDetail.append("message ", message);
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
              <p>+91-7061330904</p>
            </div>
          </div>
        </div>
        <div>
          <p>OR</p>
        </div>
        <div>
          <form className="contactForm" onSubmit={handleSubmit}>
            <div>
              <input
                required
                value={name}
                type="text"
                placeholder="Your Name Here"
                onChange={(e) => dispatch(updatedName(e.target.value))}
              ></input>
            </div>
            <div>
              <input
                required
                value={phoneNumber}
                type="number"
                placeholder="Your Contact Here"
                onChange={(e) => dispatch(updatedPhoneNumber(e.target.value))}
              ></input>
            </div>
            <div>
              <textarea
                value={message}
                name="message"
                id="message"
                required
                cols="30"
                rows="2"
                placeholder="feedback"
                onChange={(e) => dispatch(updatedMessage(e.target.value))}
              ></textarea>
            </div>
            <div className="submitButton">
              <button type="submit" disabled={sending}>
                {sending ? (
                  <>
                    <Loader />
                    {"submiting"}
                  </>
                ) : (
                  "Request a call"
                )}
              </button>
            </div>
          </form>
        </div>
        <div>
          <p>
            <i>* Usually we will contact you within 24 hour</i>
          </p>
        </div>
      </div>
    </div>
  );
}
