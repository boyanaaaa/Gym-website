import React from 'react'
import './Reasons.css'
import image1 from "../../assets/gym3.jpg"
import image2 from "../../assets/gym4.jpg"
import image3 from "../../assets/gym5.jpg"
import image4 from "../../assets/gym6.jpg"
import tick from "../../assets/tick.png"
import nb from "../../assets/nb.png"
import adidas from "../../assets/adidas.png"
import nike from "../../assets/nike.png"


function Reasons() {
  return (
    <div className="reasons" id="reasons">
        <div className="left-r">
        <img src={image1} />
        <img src={image2} />
        <img src={image3} />
        <img src={image4} />
        </div>
        <div className="right-r">
            <span>Some reasons</span>
            <div>
                <span className="stroke-text">why</span>
                <span> choose us?</span>
            </div>


            <div className='details-r'>
            <div><img src={tick} className='tick' /><span>OVER 140+ EXPERT COACHES</span></div>
            <div><img src={tick} className='tick' /><span>TRAIN SMARTER AND FASTER THAN BEFORE</span></div>
            <div><img src={tick} className='tick' /><span>1 FREE PROGRAMM FOR NEW MEMBER</span></div>
            <div><img src={tick} className='tick' /><span>RELIABLE PARTNERS</span></div>
            </div>

            <div>
                <span style={{color: 'var(--gray)', fontWeight: 'normal'}}> OUR PARTNERS</span>
                <div className="partners">
                    <img src={nb} />
                    <img src={adidas} />
                    <img src={nike} />
                </div>
            
            </div>

        </div>
    </div>
  )
}

export default Reasons