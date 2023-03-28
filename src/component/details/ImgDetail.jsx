import axios from "axios";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addFeedbackMessage, removeFeedbackMessage } from "../../app-manager/slices/feedbackSlice";
import Loader from "../../common/Loader";
import "./imgdetail.css";

export default function ImgDetail() {
  const [detail, setDetail] = useState([]);
  const [sending, setSending] = useState(false);
  const apiURL =
    "https://ez2g76nft3.execute-api.ap-south-1.amazonaws.com/biecreation/getFileDetail";
    const fetchDetail = async () => {
      try {
        const response = await axios.get(apiURL);
        setDetail(response.data.filedetail);
      } catch (error) {
        console.log(error);
      }
    };
    fetchDetail();
  

  const dispatch = useDispatch();
  const apiURL2 =
    "https://ez2g76nft3.execute-api.ap-south-1.amazonaws.com/biecreation/deleteImage";
  const handleSubmit = (e) => {
    // e.preventDefault();
    // console.log(e);
    setSending(true);
    axios
      .delete(apiURL2, {
        params: {
          filename:`${e}`,
        },
      })
      .then(() => {
        setSending(false);
        
      })
      .catch((e) => {
        setSending(false);
        dispatch(
          addFeedbackMessage({
            message: "Something went wrong. Please try again",
            status: "error",
          })
        );
      });
      dispatch(removeFeedbackMessage());
  };
  
 
  return (
    <div id="detail">
        <div className="table">
          {detail.map((det, index) => (
            <div key={index} className="body">
                {/* <div>{index +1}</div> */}
                <div className="disc">Desc: {det.discription}</div>
                <div>FileName: {det.filename}</div>
                <div>
                <button
              type="submit"
              className="button"
              disabled={sending}
              onClick={() => handleSubmit(det.filename)}
           >{
            sending ? (
              <>
                <Loader />
                {"Deleting"}
              </>
            ) : (
              "Delete"
            )
          }</button>
                </div>
            </div>
          ))}
        </div>
      </div>
  );
}
