import React, { useState } from "react";
import "../css/navbar.css";
import title from "../assets/title.SVG";
const rightMenu = ["Home", "Features", "Roadmap", "Team"];
const Navbar = () => {
  const [selected, setselected] = useState("")
  return (
    <div className="navbar">
      <div className="Left">
        <img src={title} alt="title" className="title" />
      </div>
      <div className="Right">
      
        {rightMenu.map((item, index) => {
          return (
            <p className={`Rightitems ${(selected===item)? "selected":""}`} key={index}
            onClick={()=>setselected(item)}>
              {item}
            </p>
          );
        })}
        <button className="joinbtn">Join Our Discord</button>
      </div>
      
    </div>
  );
};

export default Navbar;
