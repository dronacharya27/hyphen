import React, { useEffect, useState } from 'react'
import './Products.css'
import { Link } from 'react-router-dom'
import { useProductContext } from '../../Context/ProductContext'
import { useQuery, useQueryClient } from 'react-query'
import { useCartContext } from '../../Context/CartContext'
import { useLoginDataContext } from '../../Context/LoginContext'

const Products = () => {

  const {products,data,isError,isLoading} = useProductContext()
  const {add_to_cart,state,cookie} = useCartContext()
  const {progress, setProgress} = useLoginDataContext()
  return (
    <div id='products'>
      <div className='productsmain'>
        <div className='productheading'><p>PRODUCTS</p></div>
        
        {
        isLoading?<h1>loading...</h1>:isError?<h1>error</h1>:
<div className='productlist'>
        {products.map((e,index)=>(
             <div className="productcard" key={index}>  
             <Link to={`/productpage/${e.id}/${e.product_name.trim().split(" ").join('-')}`}> 
             <div className="cardimg"><img src={e.product_main_img} alt="" onClick={()=>setProgress(70)}/></div></Link> 
             <div className='productcartdetail'><p>{e.product_name}</p> 
             <button className='btn cardbtn' onClick={()=>add_to_cart(e.id,e)}><i className="ri-shopping-cart-2-fill"></i></button>
             </div> 
             {console.log()}
             {state.cart.length!=0  && (JSON.parse(localStorage.getItem('cart')).cart.find((f)=>f.id==e.id))? <p>{JSON.parse(localStorage.getItem('cart')).cart.find((f)=>f.id==e.id).product_quantity}</p>:console.log('empty')}
             </div>
          ))}</div> }

          
            
        

      </div>
    </div>
  )
}

export default Products
