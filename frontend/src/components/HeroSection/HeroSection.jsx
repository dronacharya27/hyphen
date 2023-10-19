import React from 'react'
import './HeroSection.css'
import Navbar from '../Navbar/Navbar'
import { Link } from 'react-router-dom'
const HeroSection = () => {
  const handleClickScroll = () => {
    
    const element = document.getElementById('ProductShowCaseMain');
    if (element) {
      // 👇 Will scroll smoothly to the top of the next section
      element.scrollIntoView({ behavior: 'smooth' });
      setProgress(100)
      
    }
  };
  return (
    <div id='home'>
      
      <div className="background">
      <img src="/HeroImage/kritiback.webp" alt="" />
      </div>
      <div className="mainhead">
        <div className="heading">LET’S HYPHEN YOUR<br /> SKINCARE!</div>
        <div className="subhead">We believe in curating result driven skincare solutions, by blending the best & multiple, natural and active ingredients in ONE bottle. We are dedicated to Clean, 100% Vegan, Peta Certified products & achieved Zero Plastic Footprint for all our products.</div>
      <div className='herobtndiv'>  <button className='herobtn btn' onClick={handleClickScroll}>SHOP NOW</button></div>
      </div>
    </div>
  )
}

export default HeroSection
