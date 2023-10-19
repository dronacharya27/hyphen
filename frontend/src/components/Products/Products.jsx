import React, { useEffect, useState } from 'react'
import './Products.css'
import { Link } from 'react-router-dom'
import axios from 'axios'
const Products = () => {
  const [data,setData] = useState([])
  const getproduct = async()=>{
    const url = 'http://127.0.0.1:8000/api/product/'
    try {
      const {data:res} = await axios.get(url)
      setData(res)
     
    } catch (error) {
      console.log(error);
    }
  }
  useEffect(()=>{
    getproduct()
  },[])
  return (
    <div id='products'>
      <div className='productsmain'>
        <div className='productheading'><p>PRODUCTS</p></div>
        <div className='productlist'>
          {data.map((e,index)=>(
             <div className="productcard">  <Link to={`/productpage/${index}/${e.product_name.trim().split(" ").join('-')}`}> <div className="cardimg"><img src={e.product_main_img} alt="" /></div></Link> <div className='productcartdetail'><p>{e.product_name}</p> <button className='btn cardbtn'><i class="ri-shopping-cart-2-fill"></i></button></div> </div>
          ))}
            
        </div>

      </div>
    </div>
  )
}

export default Products
