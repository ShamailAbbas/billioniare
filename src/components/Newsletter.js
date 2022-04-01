import React from 'react'
import mouse from "../assets/mouse.svg"
import "../css/newsletter.css"
const Newsletter = () => {
  return (
    <div className='newslettercontainer'>
        <h1>Get Aped with US</h1>
        <div className='newslettersignup'>
           <p>Signup for Our Newsletter</p> 
           <img src={mouse} alt="mouse" className='mouse'/>
        </div>
        
    </div>
  )
}

export default Newsletter