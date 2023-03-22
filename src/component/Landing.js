import React, { useEffect, useState } from "react";
import "./landing.css";
import bg from "../assets/bg.jpg";
import b1 from "../assets/b1.jpg";
import axios from "axios";
import Loader from "../common/Loader";
import heart1 from "../assets/heart1.svg";
import heart2 from "../assets/heart2.svg";

export function DiscriptionFile(){
  const [heart, setHeart] = useState(true);
  const [disc, setDisc] = useState([]);
  const apiURL2 = "https://ez2g76nft3.execute-api.ap-south-1.amazonaws.com/biecreation/getFileDetail";
  useEffect(() => {
    const fetchImagedetail = async () => {
      try {
        const response = await axios.get(apiURL2);
        setDisc(response.data.filedetail);
        console.log(response.data.filedetail)
      } catch (error) {
        console.log(error);
      }
    };
    fetchImagedetail();
  }, []);

  return(
  <>
    {disc.map((dis)=>(
      <div className="disc">
        <div className="card-title">
          <label>{dis.discription}</label>
        </div>
        <div className="card-description" onClick={() => setHeart(false)}>
          {heart ? (
            <img src={heart1} alt="s" />
          ) : (
            <img src={heart2} alt="s" />
          )}
        </div>
      </div>
      ))}
      </>
  )
}



const Landing = () => {
  const [files, setFiles] = useState([]);
  const [heart, setHeart] = useState(true);

  const apiURL =
    "https://ez2g76nft3.execute-api.ap-south-1.amazonaws.com/biecreation/getAlbum";

  useEffect(() => {
    const fetchImageUrl = async () => {
      try {
        const response = await axios.get(apiURL, {
          params: {
            folder: "cardImage/",
          },
        });
        setFiles(response.data.image);
      } catch (error) {
        console.log(error);
      }
    };
    fetchImageUrl();
  }, []);
  


  return (
    <>
      <div id="banner">
        <div className="land">
          <div className="ban">
            <img className="bannerimage" src={bg} alt="insta" />
          </div>
          <div className="banner-card">
            <div className="lab">
              <label className="label1">
                <p>The</p>
                <p>
                  <span>un</span> Traditional
                </p>
                <p>Photographer</p>
              </label>
            </div>
            <div className="cardi1">
              <img className="cardimage" src={b1} alt="insta" />
            </div>
          </div>
        </div>
        <div className="card-container">
          
          {files.map((file) => (
            <div className="card" key={file}>
              {file ? (
                <img className=" card1" src={file} alt={file.Key} />
              ) : (
                <Loader />
              )}
              <div className="disc">
        <div className="card-title">
          <label>sdaas</label>
        </div>
        <div className="card-description" onClick={() => setHeart(false)}>
          {heart ? (
            <img src={heart1} alt="s" />
          ) : (
            <img src={heart2} alt="s" />
          )}
        </div>
      </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};
export default Landing;
