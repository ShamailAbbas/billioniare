import React from "react";
import hero from "../assets/hero.png";

import herocircle from "../assets/herocircle.svg";
import circle from "../assets/circle.svg";
import "../css/hero.css";
const Hero = () => {
  return (
    <div className="container">
      <div className="leftsection">
        <img src={herocircle} alt="circle" className="herocircle" />
        <img src={hero} alt="ellipse" className="heroimg" />
      </div>
      <div className="rightsection">
        <img src={circle} alt="circle" className="circle" />
        <div className="rightsectioncontainer">
        
         <h1 className="exclusive">EXCLUSIVE</h1>
       
          <p className="newsetNft">newest NFT release</p>
          <p className="billionaireclub">
            The BILLIONAIRE CLUB is a private collection of 10 000 billionaire
            pes NFTs—unique digital collectibles. The apes are stored as ERC-721
            tokens on the Ethereum blockchain and hosted on IPFS.
          </p>
          <p className="reavelON">Reveal on October 20th.</p>
          <div className="inputcontainer">
            <input className="input"
            placeholder="your@email.com"/>
            <button className="registerbtn">Register</button>
          </div>
        </div>
      </div>

      <div></div>
    </div>
  );
};

export default Hero;
