import React from 'react'
import './Hero.css'
// import hand_icon from '../assets/hand_icon.png'
import arrow_icon from'../assets/arrow.png'
import hero_image from '../assets/hero_image.png'
export const Hero = () => {
  return (
    <div className='hero'>
        
        <div className="hero-right">
        <h1>Shop Latest Fashion</h1>
            <div className="hero-latest-btn">
                
            <div>Shop Collections</div>
            <img src={arrow_icon} alt=""/>
        </div>
            </div>
        
        </div>
  )
}
export default Hero;
