import HeroSection from '../../components/HeroSection/HeroSection'
import Middle from '../../components/Middle/Middle'
import ProductShowCase from '../../components/ProductShowCase/ProductShowCase'
import Products from '../..//components/Products/Products'
import Navbar from '../../components/Navbar/Navbar'
import Footer from '../../components/Footer/Footer'
import LoginModal from '../../components/LoginModal/LoginModal'
import axios from 'axios'
import React, { useState,useEffect } from 'react'
import { useNavigate, useSearchParams } from 'react-router-dom'

const Home = () => {

  
  const[islogin,setLogin]=useState(false)

  return (
    <div>
        <Navbar home={true} setLogin={setLogin} islogin={islogin} />
        <LoginModal islogin={islogin} setLogin={setLogin}/>
        <HeroSection/>
        <Middle/>
        <ProductShowCase/>
        <Products/>
        <Footer/>

    </div>
  )
}

export default Home


