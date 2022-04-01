import React from "react";
import dots from "../assets/dots.svg";
import "../css/collections.css";
import star from "../assets/star.svg";
import NFTs from "../nfts";
const Collections = () => {
  return (
    <div>
      <img src={dots} alt="dots" className="dotsleft" />
      <img src={dots} alt="dots" className="dotsright" />
      <h1 className="collections">Collections</h1>
      <p className="collectiondesc">
        With more than 180+ hand drawn traits, each NFT is unique and comes with
        a membership to an exclusive group of successful investors. Join an
        ambitious ever-growing community with multiple benefits and utilities.
      </p>
      <div className="nftcontainer">
        {NFTs.map((nft, i) => {
          return (
            <div key={i} className="nftframe">
              <div className="top">
                <div className="topleft">
                  <img
                    src={nft.profilepic}
                    alt="ownerpic"
                    className="ownerpic"
                  />
                  <p>{nft.owner}</p>
                </div>
                <div className="topright">
                  <img src={star} alt="star" className="star" />
                  <p>{nft.rating}</p>
                </div>
              </div>
              <img src={nft.nft} alt="nftpic" className="nftpic" />
              <div className="bottom">
                <div className="bottomleft">
                  <p>Current bid</p>
                  <h3>0.54 ETH</h3>
                </div>
                <div className="bottomright">
                  <p>Ending in</p>
                  <h3>12h 55m 2s</h3>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Collections;
