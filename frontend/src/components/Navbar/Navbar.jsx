import React from 'react'
import './Navbar.css'
import { Link } from 'react-router-dom'
import LoadingBar from 'react-top-loading-bar';
import { useState } from 'react';

import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';


const Navbar = ({home,setLogin,islogin}) => {
  const [progress, setProgress] = useState(0);
  const handleClickScroll = () => {
    
    const element = document.getElementById('products');
    if (element) {
      // 👇 Will scroll smoothly to the top of the next section
      element.scrollIntoView({ behavior: 'smooth' });
      setProgress(100)
      
    }
  };
  const handleloginclick=()=>{
   document.querySelector('body').style.overflow='hidden'
    setLogin(!islogin)
  }
  const handleClickScrollhome = () => {
    
    const element = document.getElementById('home');
    if (element) {
      // 👇 Will scroll smoothly to the top of the next section
      element.scrollIntoView({ behavior: 'smooth' });
      setProgress(100)
    }
  };
  
  return (

    <div>
      <LoadingBar
                color='#f11946'
                height={3}
                progress={progress}
                onLoaderFinished={() => setProgress(0)}/>
      {home?(<div className="mainnav">
       <div className="leftnav"> <Link to='/'><img src="/Navbar/hyphennav.png" alt="" onClick={handleClickScrollhome}/></Link></div>
        <div className="centernav">
       <Link to='/'>  <div className="navitem" onClick={handleClickScrollhome}>Home</div></Link>
        <Link to='/'> <div className="navitem" onClick={handleClickScroll}>Products</div></Link>
        <Link to='/'>   <div className="navitem">About Us</div></Link>
        </div>
        <div className="rightnav">
       {localStorage.getItem('token')?<div className="productrightnav"> <Link to='/checkout'><div className='rightnavitem'>Cart</div></Link></div>: <div className='rightnavitem' onClick={handleloginclick} >LogIn</div>} 
 
         </div>
      </div>):(<div className="productnav">
     
        <div className="productcenternav">
         <Link to='/'> <div className="navitem">Home</div></Link>
        </div>
        <div className="productrightnav"> <Link to='/checkout'><div className='rightnavitem'>Cart</div></Link></div>
      </div>)}
      
      
    </div>
  )
}

export default Navbar
