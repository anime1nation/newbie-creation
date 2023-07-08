import React, { useState } from "react";
import {
  resetForm,
  updatedName
} from "../../../app-manager/slices/contactSlice";
import Loader from "../../../common/Loader";
import './addVideo.css';
import axios from "axios";
import { useSelector, useDispatch } from "react-redux";
import {
  addFeedbackMessage,
  removeFeedbackMessage,
} from "../../../app-manager/slices/feedbackSlice";
import { useLocation } from "react-router-dom";
// import UploadSucess from "../common/UploadSucess";
// import ImgDetail from "../details/ImgDetail";
// import Logout from "../../../admin/Logout";
import { useAuth } from "../../../app-manager/login/AuthProvider";
import Login from "../../../admin/Login";
// import PhoneInput from "react-phone-input-2";

export default function AddVideo() {
  const location = useLocation();
  const path = location.pathname.split("/").join("");

  const [sending, setSending] = useState(false);
  const [feedback, setFeedback] = useState(false);
  const [video1, setVideo1] = useState("");
  const [video2, setVideo2] = useState("");

  function handleFile1(e) {
    let file1 = e.target.files[0];
    setVideo1(file1);
  }
  function handleFile2(e) {
    let file2 = e.target.files[0];
    setVideo2(file2);
  }

  const { name} = useSelector((state) => state.contact);

  const dispatch = useDispatch();
  const apiURL = "https://ez2g76nft3.execute-api.ap-south-1.amazonaws.com/biecreation/video";
  const updateDetail = new FormData();

  const handleSubmit = (e) => {
    e.preventDefault();
    updateDetail.append("name",name );
    updateDetail.append("shortVideo", video1);
    updateDetail.append("longVideo", video2);
    setSending(true);
    axios
      .put(apiURL, updateDetail, {
        params: {
          from: path,
        },
      })
      .then(() => {
        setSending(false);
        setVideo1("");
        setVideo2("");
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
  
  const auth = useAuth();
  const {sessionId} = auth;
  // if (feedback) {
  //   return <UploadSucess />;
  // }

  if(!sessionId){
    return <Login/>
  }
  return (
    
    <>
    {/* <div className="logout">
      <p >Hello {userName}</p>
        <Logout/>
      </div> */}
    <div id="uploadVIdeo" >
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
                accept="video/mp4,video/x-m4v,video/*"
                type="file"
                onChange={handleFile1}
                className="question"
              id="img"
              />
              <label htmlFor="img">
                <span className="img">Upload short video</span>
                </label>
              <input
                hidden
                // required
                autoComplete="off"
                accept="video/mp4,video/x-m4v,video/*"
                type="file"
                onChange={handleFile2}
                className="question"
              id="img"
              />
              <label htmlFor="img">
            <span className="img">Upload long video</span>
            </label>
              {/* <span className="img-name">
                {fileName?.name ? fileName?.name : "not selected"}
              </span> */}
               <span className="img-name">
              {feedback ? (
               "Image Uploaded . Upload More"):(""
              )}
              </span>
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
      </>
  );
}
