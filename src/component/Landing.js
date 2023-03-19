import React, { useState } from "react";
import "./landing.css";
import bg from "../assets/bg.jpg";
import b1 from "../assets/b1.jpg";
import axios from "axios";

const Landing = () => {
  const [files, setFiles] = useState([]);

  const apiURL = "https://ez2g76nft3.execute-api.ap-south-1.amazonaws.com/biecreation/getAlbum";

  // axios.get(apiURL,{
  //       params: {
  //         folder: 'cardImage/',
  //       },
  //     })
  //   .then((response) => setFiles(response.data))
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
      <div className="album">
      <div className="row">
        {files.map((file) => (
          <div className="col-md-4" key={file.Key}>
            <div className="card mb-4 shadow-sm">
              <img
                className="card-img-top"
                src={`https://newbiecreations.s3.amazonaws.com/${file.Key}`}
                alt={file.Key}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
    </>
  );
};
export default Landing;
