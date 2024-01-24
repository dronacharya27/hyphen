import React, { useContext, useState } from 'react'
import './LoginModal.css'
import { LoginDataContext, useLoginDataContext } from '../../Context/LoginContext'
import { useNavigate } from 'react-router-dom'
import { GoogleLogin } from '@react-oauth/google';




const LoginModal = ({islogin,setLogin}) => {
  const navigate = useNavigate()
  const {state,handledata,handlesignup,handlelogin,handlegoogle} = useLoginDataContext()

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
                <div className="field"><input name='password' type="text" className='inpfield' placeholder='Password' onChange={handledata}/></div>
                <div className="field"><input name='re_password' type="text" className='inpfield' placeholder='Confirm Password' onChange={handledata}/></div>
                 <div className="field2"> <div className='subloginbtn' onClick={()=>handlesignup(setSignup,signup)} ><span>Let's Hyphen</span></div></div>
                 <div className="botom">  <span onClick={handlesignupclick}>Login Instead</span></div>
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
            <div className="field"><input  name='password' type="text" className='inpfield' placeholder='Password' onChange={handledata}/></div>
             <div className="field2"> <div className='subloginbtn' onClick={()=>handlelogin(setLogin,islogin)}><span>LOGIN</span></div></div>
             <div className="botom">  <span onClick={handlesignupclick}>Create Account</span><span>Forgot Password</span></div>
        </div>
        
        <div className="socials">
            <div className="continue"><span>---------------- or continue with ---------------- </span></div>
            <div className='socialbtn'>  
            <GoogleLogin
  onSuccess={credentialResponse => {
    handlegoogle(credentialResponse,navigate())
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
