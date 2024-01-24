import React from 'react'
import './Navbar.css'
import { Link } from 'react-router-dom'
import LoadingBar from 'react-top-loading-bar';

import { useCookies } from 'react-cookie';
import { IoIosArrowBack } from "react-icons/io";
import { FaShoppingCart } from "react-icons/fa";

import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import { useCartContext } from '../../Context/CartContext';
import { useLoginDataContext } from '../../Context/LoginContext';


const Navbar = ({home,setLogin,islogin}) => {
  const [cookie,setCookie,removeCookie] = useCookies(['token','refresh'])
  const {state,total} = useCartContext()
  const {progress,setProgress} = useLoginDataContext()
  const handleClickScroll = () => {
    
    const element = document.getElementById('products');
    if (element) {
      // 👇 Will scroll smoothly to the top of the next section
      element.scrollIntoView({ behavior: 'smooth' });
      setProgress(100)
      
    }
  };
  const handleloginclick=()=>{
  
    setLogin(!islogin)
  }
  const handleClickScrollhome = () => {
    
    const element = document.getElementById('home');
    if (element) {
      // 👇 Will scroll smoothly to the top of the next section
      console.log(element);
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
      {home?(
      
      <div className="mainnav">
        <div className="navcontent">
        <div className="leftnav"> <Link to='/'><img src="/Navbar/hyphennav.png" alt="" onClick={handleClickScrollhome}/></Link></div>
        <div className="centernav">
       <Link to='/'>  <div className="navitem" onClick={handleClickScrollhome}>Home</div></Link>
        <Link to='/'> <div className="navitem" onClick={handleClickScroll}>Products</div></Link>
        <Link to='/'>   <div className="navitem">About Us</div></Link>
        </div>
        <div className="productrightnav">
       {cookie.token? <Link to='/checkout'><div className='prrightnavitem' onClick={()=>setProgress(100)}><FaShoppingCart />
       <div className="prtotal">{state.total}</div></div></Link> : <div className='rightnavitem' onClick={handleloginclick} >LogIn</div>} 
 
         </div>
        </div>

       
      </div>
      
      ):
      (<div className="productnav">
     
        <div className="productcenternav">
         <Link to='/'> <div className="prnavitem" onClick={()=>setProgress(100)}><IoIosArrowBack />
</div></Link>
        </div>
        <div className="productrightnav"> <Link to='/checkout'><div className='prrightnavitem' onClick={()=>setProgress(100)} ><FaShoppingCart />
 <div className="prtotal">{state.total}</div></div></Link></div>
      </div>)}
      
      
    </div>
  )
}

export default Navbar
