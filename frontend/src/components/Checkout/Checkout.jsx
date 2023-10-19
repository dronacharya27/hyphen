import React from 'react'
import './Checkout.css'
import Navbar from '../Navbar/Navbar'

const Checkout = () => {
   
  return (
    <div>
        <Navbar home={true}/>
      <div className='checkoutmain'>
        <div className="checkouttop">
            <div className="checkoutleft"> 
            
            <div className="lefttop">
                <div className="checkouttopitems"><div className="checkouticon"><i class="ri-phone-fill"></i></div>Phone</div>
                <div className="checkouttopitems"><div className="checkouticon"><i class="ri-home-heart-line"></i></div>Address</div>
                <div className="checkouttopitems"><div className="checkouticon"><i class="ri-checkbox-line"></i></div>Place Order</div>
              
            </div>

            <div className="leftbottom"></div>
            </div>

            <div className="checkoutright">

                <div className="righttop">
                    
                <div className="rightcheckoutheading">Order Summary</div>
                <div className="checkoutitemlist">
                    <div className="checkoutitems">
                        <div className="checkoutimage"> <img src="/Products/product.webp" alt="" /></div>
                        <div className="checkoutdetails"> 
                        <div className="checkoutproductdetail">GOLDEN HOUR GLOW FACE SERUM - 30 ML</div>
                        <div className="adddelete">
                            <div className='quantity'><button className='checkoutbtn'><i class="ri-add-circle-fill"></i></button> <span>1</span> <button className='checkoutbtn'><i class="ri-indeterminate-circle-fill"></i></button></div>
                            <div className="deleteproduct"><button className='checkoutbtn'><i class="ri-delete-bin-7-fill"></i></button></div>

                        </div>
                        </div>
                        <div className="checkoutitemprice">
                            Rs 649
                        </div>

                    </div>
                    <div className="checkoutitems">
                        <div className="checkoutimage"> <img src="/Products/product.webp" alt="" /></div>
                        <div className="checkoutdetails"> 
                        <div className="checkoutproductdetail">GOLDEN HOUR GLOW FACE SERUM - 30 ML</div>
                        <div className="adddelete">
                            <div className='quantity'><button className='checkoutbtn'><i class="ri-add-circle-fill"></i></button> <span>1</span> <button className='checkoutbtn'><i class="ri-indeterminate-circle-fill"></i></button></div>
                            <div className="deleteproduct"><button className='checkoutbtn'><i class="ri-delete-bin-7-fill"></i></button></div>

                        </div>
                        </div>
                        <div className="checkoutitemprice"> Rs 649</div>

                    </div>
                    <div className="checkoutitems">
                        <div className="checkoutimage"> <img src="/Products/product.webp" alt="" /></div>
                        <div className="checkoutdetails"> 
                        <div className="checkoutproductdetail">GOLDEN HOUR GLOW FACE SERUM - 30 ML</div>
                        <div className="adddelete">
                            <div className='quantity'><button className='checkoutbtn'><i class="ri-add-circle-fill"></i></button> <span>1</span> <button className='checkoutbtn'><i class="ri-indeterminate-circle-fill"></i></button></div>
                            <div className="deleteproduct"><button className='checkoutbtn'><i class="ri-delete-bin-7-fill"></i></button></div>

                        </div>
                        </div>
                        <div className="checkoutitemprice"> Rs 649</div>

                    </div>
                    <div className="checkoutitems">
                        <div className="checkoutimage"> <img src="/Products/product.webp" alt="" /></div>
                        <div className="checkoutdetails"> 
                        <div className="checkoutproductdetail">GOLDEN HOUR GLOW FACE SERUM - 30 ML</div>
                        <div className="adddelete">
                            <div className='quantity'><button className='checkoutbtn'><i class="ri-add-circle-fill"></i></button> <span>1</span> <button className='checkoutbtn'><i class="ri-indeterminate-circle-fill"></i></button></div>
                            <div className="deleteproduct"><button className='checkoutbtn'><i class="ri-delete-bin-7-fill"></i></button></div>

                        </div>
                        </div>
                        <div className="checkoutitemprice"> Rs 649</div>

                    </div>
                    
                  
                </div>
                </div>

                <div className="rightbottom"></div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Checkout
