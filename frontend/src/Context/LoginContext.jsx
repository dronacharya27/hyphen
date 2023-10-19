import React, { createContext, useContext, useReducer } from 'react'
import LoginReducer from '../Reducer/LoginReducer'
import axios from 'axios'
import { Navigate, useNavigate } from 'react-router-dom'
const LoginDataContext = createContext()
const initialstate = {
    name:'',
    email:'',
    password:'',
    re_password:''
}
const URL = 'http://127.0.0.1:8000/api/auth/'
const LoginDataContextProvider = ({children}) => {
const [state,dispatch] = useReducer(LoginReducer,initialstate)

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

  try {
    const {data:res} = await axios.post(url,state)
    console.log(res);
    setSignup(!signup)
  } catch (error) {
    console.log(error);
  }
}
// LOGIN
const handlelogin =  async(setLogin,islogin) =>{
  const url = URL+'jwt/create/'
  const {email,password} = state

  try {
    const {data:res} = await axios.post(url,state)
    console.log(res);
    localStorage.setItem('token',JSON.stringify(res.access))
    localStorage.setItem('refresh',JSON.stringify(res.refresh))
    document.querySelector('body').style.overflow='auto'
    setLogin(!islogin)
    
  } catch (error) {
    console.log(error);
  }
}

// GOOGLE LOGIN

const handlegoogle = ()=>{
  const gurl = 'https://accounts.google.com/o/oauth2/v2/auth?access_type=offline&client_id=436262933103-a2eah2g9rom3qi893nugknfcs4mlukrj.apps.googleusercontent.com&redirect_uri=http://localhost:5173/loading/&response_type=code&scope=profile%20email'
  window.location = gurl
}

  return (
    <LoginDataContext.Provider value={{state,handledata,handlesignup,handlelogin,handlegoogle}}>
            {children}
    </LoginDataContext.Provider>
  )
}

const useLoginDataContext=()=>{
 return useContext(LoginDataContext)
}
export {LoginDataContext,LoginDataContextProvider,useLoginDataContext}
