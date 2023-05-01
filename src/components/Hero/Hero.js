import React from 'react'
import './Hero.css'
import Header from '../Header/Header.js';
import hero_image from "../../assets/www.png";
import Calories from "../../assets/kcal-removebg-preview.png";
import heart from "../../assets/heartb.png";
import line from "../../assets/lineb.png";
import { motion } from 'framer-motion';

const Hero = () => {
    const transition = { type: 'spring', duration: 3}
    return(
        <div className="hero">
            <div className="blur hero-blur"></div>
            <div className="left-hero">
                <Header />


                <div className="the-best-ad">
                    <motion.div
                        initial={{left: '238px'}}
                        whileInView={{left: '8px'}}
                        transition={{...transition, type: 'tween'}}
                    />
                    <span>the best fitness club in the town</span>
                </div>

                <div className="hero-text">
                    <div>
                        <span className='stroke-text'>Shape </span>
                        <span>Your</span>
                    </div>
                    <div>
                        <span>Ideal body</span>
                    </div>
                    <div>
                        <span>In here we will help you to shape and build your ideal body and live up your life to fullest.</span>
                    </div>
                </div>
                <div className='figures'>
                    <div>
                        <span>+140</span>
                        <span>expert coaches</span>
                    </div>

                    <div>
                        <span>+978</span>
                        <span>members joined</span>
                    </div>

                    <div>
                        <span>+50</span>
                        <span>fitness programs</span>
                    </div>
                </div>


                <div className="hero-buttons">
                    <button className='btn'>Get started</button>
                    <button className='btn'>Learn More</button>
                </div>

            </div>
            <div className="right-hero">
                <button className="btn">Join Now</button>

                <div className="heart-rate">
                    <img src={heart} />
                    <span>Heart Rate</span>
                    <span>116 bpm</span>
                </div>

                <img src={hero_image} className='hero-image'/>
                <img src={line} className='hero-image-back'/>


                <div className="calories">
                    <img src={Calories}></img>
                    <div>
                        <span>Calories Burned</span>
                        <span>220 kcal</span>
                    </div>
                </div>


            </div>
        </div>
    );
};

export default Hero;