import axios from 'axios';
import React, { useEffect, useRef, useState } from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import cross from "../../assets/cross.svg";
import ReactPlayer from 'react-player';
import './videoCarousel.css';

export default function VideoCarousel() {
    const [videos, setVideos] = useState([]);
    const [longVideos, setLongVideos] = useState([]);
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const [isFullScreen, setIsFullScreen] = useState(false);
    
    const apiLongURL =
    "https://ez2g76nft3.execute-api.ap-south-1.amazonaws.com/biecreation/getLongVid";

    const fetchLongVideoUrl = async(Lpath) => {
      try {
        const response = await axios.get(apiLongURL, {
          params: {
            path: Lpath,
          },
        });
        console.log(response.data)
        setLongVideos(response.data);
        
      } catch (error) {
        console.log(error);
      }
    };


    const handleImageClick = async (index) => {
      setCurrentImageIndex(index);
      await fetchLongVideoUrl(videos[index].longVidPath)
      setIsFullScreen(true);
    };
  
    const handleExitFullScreenClick = () => {
      setIsFullScreen(false);
    };
  
    const handleNextClick = () => {
      setCurrentImageIndex((currentImageIndex + 1) % videos.length);
    };
  
    const handlePrevClick = () => {
      setCurrentImageIndex(
        (currentImageIndex - 1 + videos.length) % videos.length
      );
    };



    const apiURL =
    "https://ez2g76nft3.execute-api.ap-south-1.amazonaws.com/biecreation/getShortVid";

  useEffect(() => {
    const fetchVideoUrl = async () => {
      try {
        const response = await axios.get(apiURL, {
          params: {
            folder: "cardvideo/",
          },
        });
        console.log("🚀 ~ file: VideoCarousel.jsx:18 ~ fetchVideoUrl ~ respo̥nse:", response)
        setVideos(response.data.video);
        
      } catch (error) {
        console.log(error);
      }
    };
    fetchVideoUrl();
  }, []);
const videoRef = useRef();
const [pl,setpl] = useState(false)
  const handleReady=()=>{
    console.log("first video")
    console.log(videoRef.current)
    setpl(true)
  }

  
  return (
  <div id='video'>
        {isFullScreen ? (
          <div className="full-screen-overlay">
             <ReactPlayer url={longVideos} controls width="90%" height="auto"/>
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
        <div className="video-carousel">
    <Carousel
      showThumbs={false}
      showStatus={true}
      autoPlay={true}
    >
      {videos.map((x, index) => (
        <div key={index} className="video-carousel-item" >
          <video autoPlay width="100%" height="auto" onClick={() => handleImageClick(index)} controls>
            <source src={x.url}/>
          </video>
            
          
          {/* <ReactPlayer ref={videoRef} onReady={handleReady} playing={pl} url={x.url} controls width="100%" height="auto" onClick={() => handleImageClick(index)}/> */}
        </div>
      ))}
    </Carousel>
    </div>
      )}
      </div>
  )
}
