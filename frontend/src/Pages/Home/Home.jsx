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
  const [fan, setFan] = useState(true)
  
  const[islogin,setLogin]=useState(false)

  return (
    <div>
        <Navbar home={true} setLogin={setLogin} islogin={islogin} />
        <LoginModal islogin={islogin} setLogin={setLogin}/>
        {fan?(
      <div className="fanmodal">
        <div className="fanmodalcontent">
          <div className="fanheading">
            <h2>Disclaimer</h2>
            This is not Official website for hyphen products. It is a fanmade website.
            If you want to purchase products you can visit the Official website here.
            <a href="https://letshyphen.com/">www.letshyphen.com</a>
            
          </div>
          <div className="fanbutton">
                If you want to see my website, lets dive into it.
                <button className="fanbtn" onClick={()=>setFan(false)}>Let's Hyphen</button>
            </div>
        </div>
      </div>

    ): <></>}
        <HeroSection/>
        <Middle/>
        <ProductShowCase/>
        <Products/>
        <Footer/>

    </div>
  )
}

export default Home


