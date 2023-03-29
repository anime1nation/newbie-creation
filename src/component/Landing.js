import React, { useEffect, useState } from "react";
import "./landing.css";
import bg from "../assets/gif1.gif";
import b1 from "../assets/b1.jpg";
import axios from "axios";
import Loader from "../common/Loader";
import heart1 from "../assets/heart1.svg";
import heart2 from "../assets/heart2.svg";
import cross from "../assets/cross.svg";

const Landing = () => {
  const [files, setFiles] = useState([]);
  const [likes, setLikes] = useState(false);

  const handleLike = (id) => {
    setLikes((prevLiked) => ({
      ...prevLiked,
      [id]: true,
    }));
  };
  

  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isFullScreen, setIsFullScreen] = useState(false);

  const handleImageClick = (index) => {
    setCurrentImageIndex(index);
    setIsFullScreen(true);
  };

  const handleExitFullScreenClick = () => {
    setIsFullScreen(false);
  };

  const handleNextClick = () => {
    setCurrentImageIndex((currentImageIndex + 1) % files.length);
  };

  const handlePrevClick = () => {
    setCurrentImageIndex(
      (currentImageIndex - 1 + files.length) % files.length
    );
  };

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
        <div>
        {isFullScreen ? (
        <div className="full-screen-overlay">
          <img
            className="full-screen-image"
            src={files[currentImageIndex].url}
            alt="Full screen"
          />
          <img src={cross}
            className="exit-full-screen-button"
            onClick={handleExitFullScreenClick}
            alt="a"
          />
          <button className="carousel-button prev" onClick={handlePrevClick}>
            &lt;
          </button>
          <button className="carousel-button next" onClick={handleNextClick}>
            &gt;
          </button>
        </div>
      ) : (
        <div className="galary">
        <div className="card-container">
          {files.map((file,index) => (
            <div className="card" key={index}>
              {file ? (
                <img className=" card1" src={file.url} alt="a" onClick={() => handleImageClick(index)}/>
              ) : (
                <Loader />
              )}
              <div className="disc">
        <div className="card-title">
          <label>{file.desc}</label>
        </div>
        <div className="card-description" onClick={() => handleLike(index)}>
          {likes[index] ? (
            <img src={heart2} alt="s" />
          ) : (
            <img src={heart1} alt="s" />
          )}
        </div>
      </div>
            </div>
          ))}
        </div>
        </div>
        )}
        </div>
      </div>

    </>
  );
};
export default Landing;
