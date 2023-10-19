import React from 'react'
import './Footer.css'
const Footer = () => {
  return (
    <div>
        <div className='footermain'>
            <div  className='certification'> 
            <div className="iconcard">
                <div className="iconimg"><img src="Footer/vegan.webp" alt="" /></div>
            </div>
            <div className="iconcard">
            <div className="iconimg"><img src="Footer/peta.png" alt="" /></div>
            </div>
            <div className="iconcard">
            <div className="iconimg"><img src="Footer/toxifree.png" alt="" /></div>
            </div>
            <div className="iconcard">
            <div className="iconimg"><img src="Footer/recycle.png" alt="" /></div>
            </div>
          
            </div>
            <div className='footerpart'>
                <div className='part1'> <img src="/Footer/hyphen.png" alt="" /></div>
                <div className='part2'>
                    <div className="parthead">Subscribe To our Newsletter</div>
                    <div className="partsubhead">All the latest product drops, exclusive offers,in-store event info–straight to your inbox. </div>
                    <div className="footercontact"> <input type="text" className='footertext' /> <button className='btn fbtn'>SEND</button></div>

                </div>
                <div className='part3'>
                    <div className="borderdiv">
                    <div className="part3top">Contact Us <br /> <p>letshyphen@kriti.com</p> </div>
                    <div className="part3bottom">Follow Us
                    <div><i class="ri-instagram-fill"></i><i class="ri-twitter-x-fill"></i><i class="ri-facebook-box-fill"></i></div>
                    </div>
                    </div>
                    
                </div>
            </div>
        </div>
      
    </div>
  )
}

export default Footer
