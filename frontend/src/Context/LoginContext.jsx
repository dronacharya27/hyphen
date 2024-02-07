import React, { createContext, useContext, useReducer } from 'react'
import LoginReducer from '../Reducer/LoginReducer'
import axios from 'axios'
import { Navigate, useNavigate } from 'react-router-dom'
import {decodeJwt} from 'jose'
import { useState } from 'react';
import { useCookies } from 'react-cookie';
const LoginDataContext = createContext()
const initialstate = {
    name:'',
    email:'',
    password:'',
    re_password:''
}

const URL = 'https://dron2708.pythonanywhere.com/api/auth/'
const LoginDataContextProvider = ({children}) => {
  const[error_msg,Seterror_msg]=useState([])
  const [loading,setLoading] = useState(false)
const [state,dispatch] = useReducer(LoginReducer,initialstate)
const [cookie,setCookie,removeCookie] = useCookies(['token','refresh'])

const [progress, setProgress] = useState(0);

const handledata = (e)=>{
  const {name,value} = e.target
  dispatch({
    type:'handledata',
    payload:{name,value}
  })
}

// SIGNUP
const handlesignup =  async(setSignup,signup) =>{
  const url = URL+'users/'
  const {name,email,password,re_password} = state
  const data = {name,email,password,re_password}
  setLoading(true)
    try {
        const {data:res} = await axios.post(url,data)
        console.log(res);
        setLoading(false)
        setSignup(!signup)
      } catch (error) {
        setLoading(false)
        console.log(error);
        const error_message = error.response.data
        let keys = []
        for (let key in error_message){
            if (error_message.hasOwnProperty(key)){
                keys.push(key)
            }
            keys.map(e=>
                Seterror_msg(error_message[e]))
            
        
       }
       
      }
}
// LOGIN
const handlelogin =  async(setLogin,islogin) =>{
  const url = URL+'jwt/create/'
  const {email,password} = state
 const data = {email,password}
  const vurl = URL+'jwt/verify/'
  setLoading(true)
  try {
    const {data:res} = await axios.post(url,data)
    console.log(res);
    const data2 = {token:res.access}
    console.log(data2);
    try {
        const {data:response} = await axios.post(vurl,data2)
        console.log(response);
        setCookie('token',JSON.stringify(res.access))
        setCookie('refresh',JSON.stringify(res.refresh))
        setLoading(false)
        setLogin(!islogin)
        
        
       
    } catch (error) {
        console.log(error);
        setLoading(false)
    }
    
    
  

  } catch (error) {
    console.log(error);
    setLoading(false)
    const error_message = error.response.data
    let keys = []
    for (let key in error_message){
        if (error_message.hasOwnProperty(key)){
            keys.push(key)
        }
        keys.map(e=>
            Seterror_msg(error_message[e]))
        
    
   }
  }
}

// Logout
const handlelogout =()=>{
    removeCookie("token")
    console.log(cookie)
}

// GOOGLE LOGIN

const handlegoogle = async (credential)=>{
  const data = decodeJwt(credential)
    console.log(data)
    const {email,name,aud} = data
    const send_data = {
        email:email,name:name,password:aud}
    console.log(email,name,aud)
    const url = "https://dron2720.pythonanywhere.com/api/users/google_save/"
    try {
        const {data:res} = await axios.post(url,send_data)
        console.log(res)
        setCookie('token',JSON.stringify(res.access))
        setCookie('refresh',JSON.stringify(res.refresh))
       
    } catch (error) {
        console.log(error)
    }

  // const gurl = 'https://accounts.google.com/o/oauth2/v2/auth?access_type=offline&client_id=436262933103-a2eah2g9rom3qi893nugknfcs4mlukrj.apps.googleusercontent.com&scope=profile%20email&response_type=code&redirect_uri=http://localhost:5173/loading/'
  // window.location = gurl

}

  return (
    <LoginDataContext.Provider value={{state,handledata,handlesignup,handlelogin,handlegoogle,progress,setProgress,error_msg,loading,handlelogout}}>
            {children}
    </LoginDataContext.Provider>
  )
}

const useLoginDataContext=()=>{
 return useContext(LoginDataContext)
}
export {LoginDataContext,LoginDataContextProvider,useLoginDataContext}
