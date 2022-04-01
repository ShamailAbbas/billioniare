import React from "react";
import goldenticket from "../assets/goldenticket.svg"
import "../css/banner.css"
const Banner = () => {
  return (
    <div className="banner">
      <div className="left">
        <h1>The Golden Guests</h1>
        <p>The Golden Guests edition by the Billionaire 
            Club are the rarest NFTs. They are all hand 
            drawn and have no element in common with the 
            regular collection.</p>
            <div className="btnwrapper">
              <button>Join us to register for the Presale</button>
            </div>
        
      </div>
      <img src={goldenticket} alt="goldenticket" className="goldenticket"/>
    </div>
  );
};

export default Banner;
