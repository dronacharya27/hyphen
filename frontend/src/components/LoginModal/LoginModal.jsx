import React, { useContext, useState } from 'react'
import './LoginModal.css'
import { LoginDataContext, useLoginDataContext } from '../../Context/LoginContext'
import { useNavigate } from 'react-router-dom'
import { GoogleLogin } from '@react-oauth/google';

import {ColorRing} from 'react-loader-spinner'


const LoginModal = ({islogin,setLogin}) => {
  const navigate = useNavigate()
  const {state,handledata,handlesignup,handlelogin,handlegoogle,loading,error_msg} = useLoginDataContext()

  const [signup,setSignup]=useState(false)
  const handlesignupclick = ()=>{
    setSignup(!signup)
  }
  const handleloginclick=()=>{
    document.querySelector('body').style.overflow='auto'
     setLogin(!islogin)
   }
  return (
   
    <div>
    
      {islogin?  <>
      <div className="blurdivlogin" onClick={handleloginclick}></div>
      <div className="loginmain">

        {signup?<div className="loginmodal">
    <div className="logincontent">
        <div className="modalheading"><span>SIGNUP</span></div>
        <div className="modalcontent signupmodalcontent">
            <div className="inputfields">
            <div className="field"> <input name='name' type="text" className='inpfield' placeholder='Name' onChange={handledata}/> </div>
                <div className="field"> <input name='email' type="text" className='inpfield' placeholder='Gmail' onChange={handledata}/> </div>
                <div className="field"><input name='password' type="password" className='inpfield' placeholder='Password' onChange={handledata}/></div>
                <div className="field"><input name='re_password' type="password" className='inpfield' placeholder='Confirm Password' onChange={handledata}/></div>
                <div className='errormsg'>
        {error_msg?<p>
          {error_msg}
        </p>:<></>}
                    </div>
                 <div className="field2"> <div className='subloginbtn' onClick={()=>handlesignup(setSignup,signup)} ><span>Let's Hyphen</span></div></div>
                 
                 <div className="botom">  <span onClick={handlesignupclick}>Login Instead</span></div>
                 {loading?
                    <div className="loaders" style={{position:'absolute', top:'50%'}}>
                        <ColorRing
  visible={true}
  height="80"
  width="80"
  ariaLabel="color-ring-loading"
  wrapperStyle={{}}
  wrapperClass="color-ring-wrapper"
  colors={['#e15b64', '#f47e60', '#f8b26a', '#abbd81', '#849b87']}
  />
</div>:<></>}
            </div>
            
            
        </div>
    </div>
</div>
:<div className="loginmodal">
<div className="logincontent">
    <div className="modalheading"><span>LOGIN</span></div>
    <div className="modalcontent">
        <div className="inputfields">
            
            <div className="field"> <input name='email' type="text" className='inpfield' placeholder='Gmail' onChange={handledata}/> </div>
            <div className="field"><input  name='password' type="password" className='inpfield' placeholder='Password' onChange={handledata}/></div>
            <div className='errormsg'>
        {error_msg}
                    </div>
             <div className="field2"> <div className='subloginbtn' onClick={()=>handlelogin(setLogin,islogin)}><span>LOGIN</span></div></div>
             <div className="botom">  <span onClick={handlesignupclick}>Create Account</span><span>Forgot Password</span></div>
        </div>
        {loading?
                    <div className="loaders" style={{position:'absolute', top:'50%'}}>
                        <ColorRing
  visible={true}
  height="80"
  width="80"
  ariaLabel="color-ring-loading"
  wrapperStyle={{}}
  wrapperClass="color-ring-wrapper"
  colors={['#e15b64', '#f47e60', '#f8b26a', '#abbd81', '#849b87']}
  />
</div>:<></>}
        <div className="socials">
            <div className="continue"><span>---------------- or continue with ---------------- </span></div>
            <div className='socialbtn'>  
            <GoogleLogin
  onSuccess={credentialResponse => {
    const credential = credentialResponse.credential
    handlegoogle(credential,navigate())
    setLogin(false)
  }}
  onError={() => {
    console.log('Login Failed');
  }}
  useOneTap
/>
</div>
        </div>
    </div>
</div>
</div>
}

  </div> </>:''}
    
    </div>
  )
}

export default LoginModal
