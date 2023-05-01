import React from 'react'
import './Footer.css'
import Github from "../../assets/GitHub-logo.png";
import Instagram from "../../assets/instagramb.png";
import LinkedIn from "../../assets/link.png";

function Footer() {
  return (
    <div className="footer-container">
        <hr />
         <div className="footer">
            <img src={Github} alt="" />
            <img src={Instagram} alt="" />
            <img src={LinkedIn} alt="" />
         </div>
         <div className="blur footer-blur-1"></div>
         <div className="blur footer-blur-2"></div>
    </div>
    
  )
}

export default Footer