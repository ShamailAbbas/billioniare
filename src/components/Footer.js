import React from 'react'
import underline from "../assets/underline.svg"
import title from "../assets/title.SVG"
import icon1 from "../assets/icon/icon1.svg"
import icon2 from "../assets/icon/icon2.svg"
import icon3 from "../assets/icon/icon3.svg"
import "../css/footer.css"
const Footer = () => {
  return (
    <div className='footercontainer'>
        <img src={underline} alt="underline" className='underline'/>
        <div className='footercontentwrapper'>
            <div className='footerleft'>
                <img src={title} alt="tilte" className='logo'/>
                <p>Terms of Services</p>
                <p>Privacy Policy</p>
            </div>
            <div className='footerright'>
            <img src={icon1} alt="icon" className='icon'/>
            <img src={icon2} alt="icon" className='icon'/>
            <img src={icon3} alt="icon" className='icon'/>
            </div>
        </div>
    </div>
  )
}

export default Footer