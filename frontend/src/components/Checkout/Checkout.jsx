import React, { useEffect, useState } from "react";
import "./Checkout.css";
import Navbar from "../Navbar/Navbar";
import { useCartContext } from "../../Context/CartContext";
import LoadingBar from "react-top-loading-bar";
import { IoIosArrowBack } from "react-icons/io";
import { useLoginDataContext } from "../../Context/LoginContext";
import { useOrderContext } from "../../Context/OrderContext";
const Checkout = () => {
  const { add_to_cart, remove_from_cart,state } = useCartContext();
  const {handleuser} =useLoginDataContext();
  const [progressch, setProgressch] = useState(33);
  const [isMobile, setIsMobile] = useState(true);
  const [isAdd, setAdd] = useState(false);
  const {handleorderdata,order_state} = useOrderContext()
  const handlemobile=()=>{
    const c1 = document.querySelector('.c1').style.color='gray'
    const c2 = document.querySelector('.c2').style.color='black'
    setProgressch(66);
    setAdd(true);
    setIsMobile(false)
  }
  const handleadd=()=>{
    const c1 = document.querySelector('.c1').style.color='gray'
    const c2 = document.querySelector('.c2').style.color='gray'
    const c3 = document.querySelector('.c3').style.color='black'
    setProgressch(99);
    setAdd(false);
    setIsMobile(false)
  }
  const handleback=()=>{
    const c1 = document.querySelector('.c1').style.color='black'
    const c2 = document.querySelector('.c2').style.color='gray'
    
    setProgressch(33);
    setAdd(false);
    setIsMobile(true)
  }
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  const handleback2=()=>{
    const c1 = document.querySelector('.c1').style.color='gray'
    const c2 = document.querySelector('.c2').style.color='black'
    const c3 = document.querySelector('.c3').style.color='gray'
    
    setProgressch(66);
    setAdd(true);
    setIsMobile(false)
  }

  useEffect(()=>{
    const user = handleuser()
  
  },[order_state])
  return (
    <div>
      <Navbar home={true} />
      <div className="checkoutmain">
        <div className="checkouttop">
          <div className="checkoutleft">
            <div className="lefttop" style={{ position: "relative" }}>
              <div className="checkitemss">

                <div className="checkouttopitems">
                  <div className="checkouticon c1">
                    <i class="ri-phone-fill"></i>Contact Info
                  </div>
                </div>
                <div className="checkouttopitems c2">
                  <div className="checkouticon">
                    <i class="ri-home-heart-line"></i>Address
                  </div>
                </div>
                <div className="checkouttopitems c3">
                  <div className="checkouticon">
                    <i class="ri-checkbox-line"></i>Place Order
                  </div>
                </div>
              </div>

              <LoadingBar
                color="red"
                height={10}
                progress={progressch}
                onLoaderFinished={() => setProgressch(0)}
                style={{ backgroundColor: "#cb7bbd", borderRadius: "10px" }}
                containerStyle={{
                  position: "absolute",
                  backgroundColor: "rgba(228, 226, 226, 1)",
                  borderRadius: "10px",
                  top: "102%",
                }}
                shadow={false}
              />
            </div>

            <div className="leftbottom">
              <div className="orderplace">

                {isMobile?
                <div className="phone checklayer">
                  <div className="inputbtnadd nameinput">
                    <input
                      type="text"
                      name="name"
                      id=""
                      value={order_state.name}
                      onChange={(e)=>handleorderdata(e)}
                      placeholder="First Name"
                      pattern="[0-9]{10}"
                      required
                    />
                    <input
                      type="text"
                      name="last_name"
                      id=""
                      value={order_state.last_name}
                      onChange={(e)=>handleorderdata(e)}
                      placeholder="Last Name"
                      pattern="[0-9]{10}"
                      required
                    />
                  </div>
                  
                  <div className="inputbtnadd">
                    <input
                      type="number"
                      name="mobile_number"
                      value={order_state.mobile_number}
                      onChange={(e)=>handleorderdata(e)}
                      id=""
                      placeholder="Mobile Number"
                      pattern="[0-9]{10}"
                      required
                    />
                  </div>
                  <div className="inputbtnadd">
                    <input
                      type="email"
                      name="email"
                      value={order_state.email}
                      onChange={(e)=>handleorderdata(e)}
                      id=""
                      placeholder="Email"
                      pattern="[0-9]{10}"
                      required
                    />
                  </div>
                  <div className="orderplacebtn">
                  <button
                    onClick={() => {
                        handlemobile()
                    }}
                  >
                    Next
                  </button>
                </div>
                </div>
                
                :
            isAdd?
                <div className="address checklayer">
                    <div className="backplacebtn">
                <button
                  onClick={() => {
                    handleback()
                  }}
                >
                 <IoIosArrowBack/>
                </button>
              </div>
                <div className="inputbtnadd inputadd">
               
                  <input
                    type="text"
                    name="address"
                    value={order_state.address}
                    onChange={(e)=>handleorderdata(e)}
                    id=""
                    placeholder="Address"
                    pattern="[0-9]{10}"
                    required
                  />
                </div>
                <div className="inputbtnadd inputadd">
                  <input
                    type="text"
                    name="apt"
                    value={order_state.apt}
                    onChange={(e)=>handleorderdata(e)}
                    id=""
                    placeholder="Apartment, suite, etc."
                    pattern="[0-9]{10}"
                    required
                  />
                </div>
                <div className="inputbtnadd nameinput">
                  <input
                    type="text"
                    name="city"
                    value={order_state.city}
                    onChange={(e)=>handleorderdata(e)}
                    id=""
                    placeholder="City"
                    pattern="[0-9]{10}"
                    required
                  />
    
                  <input
                    type="number"
                    name="postcode"
                    value={order_state.postcode}
                    onChange={(e)=>handleorderdata(e)}
                    id=""
                    placeholder="Postcode"
                    pattern="[0-9]{10}"
                    required
                  />
                </div>
                <div className="orderplacebtn">
                <button
                  onClick={() => {
                    handleadd()
                  }}
                >
                  Next
                </button>
              </div>
              </div>
              :<div className="address checklayer">
              <div className="backplacebtn">
          <button
            onClick={() => {
              handleback2()
            }}
          >
           <IoIosArrowBack/>
          </button>
        </div>
          <div className="placeorderdetail">
            <div className="placeorderheading">Please Verify Details</div>
            <div className="orderdetailscheck">
            <div className="placeordername">{order_state.name} {order_state.last_name}</div>
            <div className="placeorderemail">{order_state.email}</div>
            <div className="placeordernumber">{order_state.mobile_number}</div>
            <div className="placeordeaddress1">{order_state.address}</div>
            <div className="placeordeaddress2">{order_state.apt}</div>
            <div className="placeordeaddress3">{order_state.city}, {order_state.postcode}</div>
            </div>
            
           
            
          </div>
          <div className="orderplacebtn">
          <button
            onClick={() => {
              handleadd()
            }}
          >
            Place Order
          </button>
        </div>
        </div>}
                
                
              </div>
             
                {/* <div className="phone orderplace">
                  
                  <span>Address</span>

                  <div className="inputbtnadd">
                    <textarea
                      type="text"
                      name=""
                      id=""
                      rows="3"
                      cols="36"
                      required
                    />

                    <button
                      onClick={() => {
                        setProgressch(99), setAdd(true);
                        setIsMobile(false);
                      }}
                    >
                      Next
                    </button>
                  </div>
                </div>
             
            
             
                <div className="order orderplace">
                  {/* <button onClick={()=>{setProgressch(66); setAdd(true); setIsMobile(false)}}><IoIosArrowBack/></button> */}
                

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
              <div className="rightcheckoutheading">
                Order Summary <span>This is Checkout Cart</span>
              </div>
              <div className="checkoutitemlist">
                {JSON.parse(localStorage.getItem("cart")).cart.length == 0 ? (
                  <div className="empty_cart">Your Cart Is Empty</div>
                ) : (
                  JSON.parse(localStorage.getItem("cart")).cart.map((e) => (
                    <div className="checkoutitems">
                      <div className="checkoutimage">
                        {" "}
                        <img src={e.product_main_img} alt="" />
                      </div>
                      <div className="checkoutdetails">
                        <div className="checkoutproductdetail">
                          {e.product_name}
                        </div>
                        <div className="itemprice"> Rs. {e.product_price}</div>
                        <div className="adddelete">
                          <div className="quantity">
                            <button
                              className="checkoutbtn"
                              onClick={() => add_to_cart(e.id, e)}
                            >
                              <i class="ri-add-circle-fill"></i>
                            </button>{" "}
                            <span>{e.product_quantity}</span>{" "}
                            <button
                              className="checkoutbtn"
                              onClick={() => remove_from_cart(e.id, e)}
                            >
                              <i class="ri-indeterminate-circle-fill"></i>
                            </button>
                          </div>
                          {e.product_quantity == 1 ? (
                            <div className="deleteproduct">
                              <button
                                className="checkoutbtn"
                                onClick={() => remove_from_cart(e.id, e)}
                              >
                                <i class="ri-delete-bin-7-fill"></i>
                              </button>
                            </div>
                          ) : (
                            <></>
                          )}
                        </div>
                      </div>
                    </div>
                  ))
                )}
              </div>
            </div>

            <div className="rightbottom">
              <div className="cart_total">
                <div className="totalitem">
                  {" "}
                  <div className="total">Total Items:</div>{" "}
                  <div className="itemtotal">
                    {JSON.parse(localStorage.getItem("cart")).total}
                  </div>{" "}
                </div>
                <div className="totalitem">
                  {" "}
                  <div className="total">Shipping:</div>{" "}
                  <div className="itemtotal">
                    ₹
                    {state.total_price / 100}
                  </div>{" "}
                </div>
                <div className="totalitem">
                  {" "}
                  <div className="total">Taxes:</div>{" "}
                  <div className="itemtotal">
                    ₹
                    {state.total_price *
                      18 /
                      100}
                  </div>{" "}
                </div>
                <div className="totalitem totalamount">
                  {" "}
                  <div className="total">Total Amount:</div>{" "}
                  <div className="itemtotal">
                    {console.log(state.total_price)}
                    ₹{state.total_price}/-
                  </div>{" "}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
