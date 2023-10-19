import React, { useEffect, useState } from 'react'
import './ProductShowCase.css'
import { Link } from 'react-router-dom'
const ProductShowCase = () => {
  const handleeffectleft =()=>{

    
    document.querySelector('.kritimageleft').classList.toggle('effect')  
    document.querySelector('.leftmain  p').classList.toggle('hide')  
    document.querySelector('.leftmain  .productcontent').classList.toggle('show')  
    // document.querySelector('p').Style.display='none'  
  }
  const handleeffectright =()=>{
    
    document.querySelector('.kritimageright').classList.toggle('effect')  
    document.querySelector('.rightmain  p').classList.toggle('hide')
    document.querySelector('.rightmain  .productcontent').classList.toggle('show')
  }
   
  const handleClick =()=>{
    console.log('clicked');
  }

  return (
    <div className='ProductShowCaseMain' id='ProductShowCaseMain'>


      <div className='leftmain' onMouseEnter={handleeffectleft} onMouseLeave={handleeffectleft}>
      
          <div className="leftimage">
              <img src="./ProductShowCase/leftkriti.jpg" alt="" className='kritimageleft' /> 
              
              <div className='leftcontent'> 
                    <p className='contentP'>BARRIER<br />CREAM</p>
                    <div className="productcontent">
                      Strengthens skin barrier,<br /> deeply hydrates <br /> & locks-in moisture
                      <Link to='/productpage/0/All-I-NEED-SUNSCREEN'> <button className='contentbtn btn'>SHOP NOW</button></Link>
                    </div>
                    
                  
              </div>

            
          
          </div>
    
      </div>

      <div className="rightmain" onMouseEnter={handleeffectright} onMouseLeave={handleeffectright}>
    
        <div className="rightimage"> 
            <img src="./ProductShowCase/rightkriti.png" alt="" className='kritimageright' /> 
            
            <div className='rightcontent'>
                    <p className='contentP'>ALL I NEED</p>
                    <div className="productcontent">
                    Shield up with 12Hr  <br />broad-spectrum protection <br /> & moisturization.
                    <Link to='/productpage/2/BARRIER-CARE-CREAM'>   <button className='contentbtn btn' >SHOP NOW</button></Link>
                    </div>
            </div>
        
        </div>

      </div>

    </div>
  )
}

export default ProductShowCase
