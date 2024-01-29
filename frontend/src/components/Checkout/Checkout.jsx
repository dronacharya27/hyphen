import React, { useState } from 'react'
import './Checkout.css'
import Navbar from '../Navbar/Navbar'
import { useCartContext } from '../../Context/CartContext'
import LoadingBar from 'react-top-loading-bar';
import { IoIosArrowBack } from "react-icons/io";
const Checkout = () => {
    const {add_to_cart,remove_from_cart} = useCartContext()
    const [progressch,setProgressch] = useState(33)
    const [isMobile, setIsMobile] = useState(false)
    const [isAdd, setAdd] = useState(false)
    
    
  return (
    <div>
        <Navbar home={true}/>
      <div className='checkoutmain'>
        <div className="checkouttop">
            <div className="checkoutleft"> 
            
            <div className="lefttop" style={{position:'relative'}}>
                
                <div className="checkoutheading">Checkout Progress</div>
                <div className='checkitemss'>
                    
                <div className="checkouttopitems"><div className="checkouticon"><i class="ri-phone-fill"></i>Phone</div></div>
                <div className="checkouttopitems"><div className="checkouticon"><i class="ri-home-heart-line"></i>Address</div></div>
                <div className="checkouttopitems"><div className="checkouticon"><i class="ri-checkbox-line"></i>Place Order</div></div>
                

                </div>
                
                <LoadingBar
                color='red'
                height={10}
                progress={progressch}
                onLoaderFinished={() => setProgressch(0)}
                containerStyle={{position:'absolute',backgroundColor:"gray",top:'46%',left:'19%',transform:'rotate(90deg)',width:'27vmax'}}
                shadow={false}
                
                />
            </div>

            <div className="leftbottom">
            <div className="phone orderplace">
                    <span>Enter Mobile Number</span>
                    <div className='inputbtnadd'><input type="number" name="" id="" pattern="[0-9]{10}" required/>
                    <button onClick={()=>{setProgressch(66); setAdd(true)}}>Next</button></div>
                    
                </div>
                {isAdd?<div className="phone orderplace">
                                  <button onClick={()=>{setProgressch(33); setAdd(false); setIsMobile(true)}} style={{display:'none'}}><IoIosArrowBack/></button>
                <span>Address</span>
                
                <div className='inputbtnadd'><textarea type="text" name="" id="" rows="3" cols="36" required/>

                 <button onClick={()=>{setProgressch(99),setAdd(true); setIsMobile(true)}}>Next</button>
                 </div>
                </div>:<></>}
                {isMobile?<div className="order orderplace">
                                  {/* <button onClick={()=>{setProgressch(66); setAdd(true); setIsMobile(false)}}><IoIosArrowBack/></button> */}
                                 <div className='orderconfirm'>Please Confirm Your Order Details </div> 
                                <div className='suborder'>Phone Number: 989898989</div> 
                                 <div className='suborder'>Address: Surat</div> 
                 <button onClick={()=>setProgressch(99)}>Pay Now</button>
                </div>:<></>}
             
                
                
                
                
                <div className="paymentlogo">
                    <div className="support">
                 <p>We Support</p> 
                </div>
                        <div className="logospay">
                        <div className="paylogo">
                      <img src="Payment_Logo/Gpay.png" alt="" srcset="" />
                  </div>
                  
                  <div className="paylogo">
                      <img src="Payment_Logo/visa.png" alt="" srcset="" />
                  </div>
                  <div className="paylogo">
                      <img src="Payment_Logo/apple.png" alt="" srcset="" />
                  </div>
                  <div className="paylogo">
                      <img src="Payment_Logo/Maestro_logo.png" alt="" srcset="" />
                  </div>
                  <div className="paylogo">
                      <img src="Payment_Logo/Rupay-Logo.png" alt="" srcset="" />
                  </div>
                  <div className="paylogo">
                      <img src="Payment_Logo/amazon.png" alt="" srcset="" />
                  </div>
                        </div>
                 
                </div>
               
                

                
            </div>
            </div>

            <div className="checkoutright">
        
                <div className="righttop">
                    
                <div className="rightcheckoutheading">Order Summary <span>This is Checkout Cart</span></div>
                <div className="checkoutitemlist">
                {JSON.parse(localStorage.getItem('cart')).cart.length ==0? <div className='empty_cart'>Your Cart Is Empty</div>:JSON.parse(localStorage.getItem('cart')).cart.map((e)=>(

  <div className="checkoutitems">
            <div className="checkoutimage"> <img src={e.product_main_img} alt="" /></div>
            <div className="checkoutdetails"> 
            <div className="checkoutproductdetail">{e.product_name}</div>
           <div className='itemprice'> Rs. {e.product_price}</div> 
            <div className="adddelete">
                <div className='quantity'><button className='checkoutbtn' onClick={()=>add_to_cart(e.id,e)}><i class="ri-add-circle-fill"></i></button> <span>{e.product_quantity}</span> <button className='checkoutbtn' onClick={()=>remove_from_cart(e.id,e)}><i class="ri-indeterminate-circle-fill"></i></button></div>
               {e.product_quantity==1?<div className="deleteproduct"><button className='checkoutbtn' onClick={()=>remove_from_cart(e.id,e)}><i class="ri-delete-bin-7-fill"></i></button></div>:<></>}

            </div>
            </div>
            

        </div>

        ))}
                    
                    

                    
                    
                  
                </div>
                </div>

                <div className="rightbottom">
                    <div className="cart_total">
                    <div className='totalitem'> <div className="total">Total Items:</div> <div className="itemtotal">{JSON.parse(localStorage.getItem('cart')).total}</div> </div>                     
                    <div className='totalitem'> <div className="total">Shipping:</div> <div className="itemtotal">₹{JSON.parse(localStorage.getItem('cart')).total_price/100}</div> </div>                     
                    <div className='totalitem'> <div className="total">Taxes:</div> <div className="itemtotal">₹{JSON.parse(localStorage.getItem('cart')).total_price*18/100}</div> </div>                     
                    <div className='totalitem totalamount'> <div className="total">Total Amount:</div> <div className="itemtotal">₹{JSON.parse(localStorage.getItem('cart')).total_price}/-</div> </div>                     
                    </div>
                </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Checkout
