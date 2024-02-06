import React, { useState } from 'react'

import Checkout from './components/Checkout/Checkout'
import ProductPage from './components/ProductPage/ProductPage'
import {BrowserRouter as Router, Route,Routes} from 'react-router-dom'
import Home from './Pages/Home/Home'
import Navbar from './components/Navbar/Navbar'
import Loader from './components/Loader/Loader'
import './App.css'
const App = () => {
  const [fan, setFan] = useState(true)
  return (

    <>
    <div>
    {fan?(
      <div className="fanmodal">
        <div className="fanmodalcontent">
          <div className="fanheading">
            ***This is not Official website for hyphen products. It is a fanmade website.
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
      <Router>
      <Routes>
        
        <Route path='/' element={<Home/>} />
        <Route path='/productpage/:id/:name' element={<ProductPage/>} />
        <Route path='loading/' element={<Loader/> }/>
        <Route path='/checkout' element={<Checkout/>} />
  
      </Routes>
  
      </Router>
        
        
   
       
      </div>
      </>
  )
}

export default App
