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
  const responsiveSettings = [
    {
        breakpoint: 800,
        settings: {
            slidesToShow: 1,
            slidesToScroll: 1
        }
    },
    {
        breakpoint: 200,
        settings: {
            slidesToShow: 1,
            slidesToScroll: 1
        }
    }
];
  return (
    
    <div id='home'>
                <div className="slideshow">
                <Zoom arrows={false} duration={3000} responsive={responsiveSettings}>
                <div className="background">
                    <img src="/HeroImage/HeroKriti.png"/>
                </div>
            
                <div className="background">
                    <img src="/HeroImage/kritihero.avif"/>
                </div>
                <div className="background">
                    <img src="/HeroImage/kriti01.jpeg"/>
                </div>
            
                <div className="background">
                    <img src="/HeroImage/kritihero4.webp"/>
                </div>
                <div className="background">
                    <img src="/HeroImage/kritihero3.webp"/>
                </div>
                <div className="background">
                    <img src="/HeroImage/kritihero8.webp"/>
                </div>
                <div className="background">
                    <img src="/HeroImage/kritihero9.jpeg"/>
                </div>
                
                <div className="background">
                    <img src="/HeroImage/kritihero10.webp"/>
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
