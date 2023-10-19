import React from 'react'
import axios from 'axios'
import  { useState,useEffect } from 'react'
import { useNavigate, useSearchParams } from 'react-router-dom'

const Loader = () => {
    const [searchParams, setSearchParams] = useSearchParams()
    const navigate = useNavigate()
    const code =searchParams.get("code")

  
    
    console.log(code);
      useEffect(()=>{
      console.log(code);
      const gurl = `https://oauth2.googleapis.com/token?code=${code}&prompt=consent&client_id=436262933103-a2eah2g9rom3qi893nugknfcs4mlukrj.apps.googleusercontent.com&client_secret=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&redirect_uri=http://localhost:5173/loading/&grant_type=authorization_code`
      
      
      const handleAccess = async()=>{
          try {
              
          const {data:res} = await axios.post(gurl)   
          console.log(res);
          localStorage.setItem('token',JSON.stringify(res.access_token))
          localStorage.setItem('refresh',JSON.stringify(res.refresh_token))
          const access = localStorage.getItem('token')
          const gurl2 = `https://www.googleapis.com/oauth2/v3/userinfo?access_token=${access}`
          const {data:res2} = await axios.post(gurl2)
          console.log(res2);
          navigate('/')
      }
      catch (error) {
          console.log("err",error) 
      } 
      }
      

      handleAccess()
      
  })
  
   
  return (
    <div>
      
    </div>
  )
}

export default Loader
