import React from 'react'

import Checkout from './components/Checkout/Checkout'
import ProductPage from './components/ProductPage/ProductPage'
import {BrowserRouter as Router, Route,Routes} from 'react-router-dom'
import Home from './Pages/Home/Home'
import Navbar from './components/Navbar/Navbar'
import Loader from './components/Loader/Loader'

const App = () => {
  
  return (
    <div>
       
    <Router>
    <Routes>
      
      <Route path='/' element={<Home/>} />
      <Route path='/productpage/:id/:name' element={<ProductPage/>} />
      <Route path='loading/' element={<Loader/> }/>
      <Route path='/checkout' element={<Checkout/>} />

    </Routes>

    </Router>
      
      
 
     
    </div>
  )
}

export default App
