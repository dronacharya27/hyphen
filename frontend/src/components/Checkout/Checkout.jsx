import React, { useState } from 'react'
import './Checkout.css'
import Navbar from '../Navbar/Navbar'
import { useCartContext } from '../../Context/CartContext'
import LoadingBar from 'react-top-loading-bar';

const Checkout = () => {
    const {add_to_cart,remove_from_cart} = useCartContext()
    const [progressch,setProgressch] = useState(33)
  return (
    <div>
        <Navbar home={true}/>
      <div className='checkoutmain'>
        <div className="checkouttop">
            <div className="checkoutleft"> 
            
            <div className="lefttop" style={{position:'relative'}}>
                <div className="checkouttopitems"><div className="checkouticon"><i class="ri-phone-fill"></i></div>Phone</div>
                <div className="checkouttopitems"><div className="checkouticon"><i class="ri-home-heart-line"></i></div>Address</div>
                <div className="checkouttopitems"><div className="checkouticon"><i class="ri-checkbox-line"></i></div>Place Order</div>
                <LoadingBar
                color='#f11946'
                height={3}
                progress={progressch}
                onLoaderFinished={() => setProgressch(0)}
                containerStyle={{position:'absolute',backgroundColor:"gray",top:'63%'}}
                shadow={false}

                />
            </div>

            <div className="leftbottom">
                <div className="phone">
                    <span>Enter Mobile Number</span>
                    <input type="number" name="" id="" pattern="[0-9]{10}"/>
                    <button onClick={()=>setProgressch(66)}>Next</button>
                </div>
                <div className="address">
                <label htmlFor="add">Address:</label> 
                 <textarea name="add" id="" cols="30" rows="10">
                  
                 </textarea>
                 <button onClick={()=>setProgressch(99)}>Next</button>
                </div>

                
            </div>
            </div>

            <div className="checkoutright">

                <div className="righttop">
                    
                <div className="rightcheckoutheading">Order Summary</div>
                <div className="checkoutitemlist">
                {JSON.parse(localStorage.getItem('cart')).cart.length ==0? <div className='empty_cart'>Your Cart Is Empty</div>:JSON.parse(localStorage.getItem('cart')).cart.map((e)=>(

<div className="checkoutitems">
            <div className="checkoutimage"> <img src={e.product_main_img} alt="" /></div>
            <div className="checkoutdetails"> 
            <div className="checkoutproductdetail">{e.product_name}</div>
            <div className="adddelete">
                <div className='quantity'><button className='checkoutbtn' onClick={()=>add_to_cart(e.id,e)}><i class="ri-add-circle-fill"></i></button> <span>{e.product_quantity}</span> <button className='checkoutbtn' onClick={()=>remove_from_cart(e.id,e)}><i class="ri-indeterminate-circle-fill"></i></button></div>
               {e.product_quantity==1?<div className="deleteproduct"><button className='checkoutbtn' onClick={()=>remove_from_cart(e.id,e)}><i class="ri-delete-bin-7-fill"></i></button></div>:<></>}

            </div>
            </div>
            <div className="checkoutitemprice">
            Rs. {e.product_quantity*e.product_price}
            </div>

        </div>

        ))}
                    
                    

                    
                    
                  
                </div>
                </div>

                <div className="rightbottom">
                    <div className="cart_total">
                    <span>TOTAL ITEMS: {JSON.parse(localStorage.getItem('cart')).total}</span>
                    <span>SUBTOTAL:Rs. {JSON.parse(localStorage.getItem('cart')).total_price} </span> 
                     
                    </div>
                </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Checkout
