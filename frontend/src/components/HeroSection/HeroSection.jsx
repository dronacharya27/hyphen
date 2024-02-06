import React from 'react'
import './HeroSection.css'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import { Slide,Zoom } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'

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
                <div className="slideshow">
                <Zoom arrows={false} scale={1.2} duration={3000}>
                <div className="background">
                    <img src="/HeroImage/kritiback.webp"/>
                </div>
            
                <div className="background">
                    <img src="/Footer/footer.png"/>
                </div>
            
                <div className="background">
                    <img src="/HeroImage/kritiback.webp"/>
                </div>
            
        </Zoom>
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
