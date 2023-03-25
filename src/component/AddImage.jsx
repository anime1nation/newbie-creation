import React, { useState } from "react";
import {
  resetForm,
  updatedName
} from "../app-manager/slices/contactSlice";
import Loader from "../common/Loader";
import "./addimage.css";
import axios from "axios";
import { useSelector, useDispatch } from "react-redux";
import {
  addFeedbackMessage,
  removeFeedbackMessage,
} from "../app-manager/slices/feedbackSlice";
import { useLocation } from "react-router-dom";
import UploadSucess from "../common/UploadSucess";
import ImgDetail from "./details/ImgDetail";
// import PhoneInput from "react-phone-input-2";

export default function Contact() {
  const location = useLocation();
  const path = location.pathname.split("/").join("");

  const [sending, setSending] = useState(false);
  const [feedback, setFeedback] = useState();
  const [fileName, setFilename] = useState("");

  function handleFile(e) {
    let file = e.target.files[0];
    setFilename(file);
  }

  const { name } = useSelector((state) => state.contact);

  const dispatch = useDispatch();
  const apiURL = "https://ez2g76nft3.execute-api.ap-south-1.amazonaws.com/biecreation/addImage";
  const updateDetail = new FormData();

  const handleSubmit = (e) => {
    e.preventDefault();
    updateDetail.append("discription",name );
    updateDetail.append("file", fileName);
    setSending(true);
    axios
      .post(apiURL, updateDetail, {
        params: {
          from: path,
        },
      })
      .then(() => {
        setSending(false);
        setFilename("");
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
    return <UploadSucess />;
  }

  return (
    <>
    <div id="upload" >
        <div className="cont">
          <form className="contactForm"  onSubmit={handleSubmit}>
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
              <span className="dis">Discription Tag</span>
            </label>
              <input
                hidden
                required
                autoComplete="off"
                accept="image/x-png,image/gif,image/jpeg"
                type="file"
                onChange={handleFile}
                className="question"
              id="img"
              />
              <label htmlFor="img">
            <span className="img">Upload image</span>
            </label>
              {/* <span className="img-name">
                {fileName?.name ? fileName?.name : "not selected"}
              </span> */}
              
            <button
              type="submit"
              className="button"
              disabled={sending}
           >{
            sending ? (
              <>
                <Loader />
                {"Uploading"}
              </>
            ) : (
              "Upload file"
            )
          }</button>
          </form>
          <div className="tc">
            <i>File uploaded here will be visible on landing page card </i>
        </div>
        </div>
      </div>
      <div>
          <ImgDetail/>
      </div>
      </>
  );
}
