import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
import LoadingBar from "react-top-loading-bar";

import { useCookies } from "react-cookie";
import { IoIosArrowBack, IoIosCart, IoIosHome, IoIosInformationCircle, IoMdCart, IoMdHome, IoMdInformation, IoMdLogOut, IoMdPeople, IoMdPerson } from "react-icons/io";
import { FaHome, FaInfoCircle, FaProductHunt, FaShopify, FaShoppingCart, FaWarehouse } from "react-icons/fa";
import { IoIosPeople } from "react-icons/io";
import { LuPackageSearch } from "react-icons/lu";
import Popup from "reactjs-popup";
import "reactjs-popup/dist/index.css";
import { useCartContext } from "../../Context/CartContext";
import { useLoginDataContext } from "../../Context/LoginContext";

const Navbar = ({ home, setLogin, islogin }) => {
  const [cookie, setCookie, removeCookie] = useCookies(["token", "refresh"]);
  const { state, total } = useCartContext();
  const { progress, setProgress,handlelogout } = useLoginDataContext();
  const handleClickScroll = () => {
    const element = document.getElementById("products");
    if (element) {
      // 👇 Will scroll smoothly to the top of the next section
      element.scrollIntoView({ behavior: "smooth" });
      setProgress(100);
    }
  };
  const handleloginclick = () => {
    setLogin(!islogin);
  };
  const handleClickScrollhome = () => {
    const element = document.getElementById("home");
    if (element) {
      // 👇 Will scroll smoothly to the top of the next section
      console.log(element);
      element.scrollIntoView({ behavior: "smooth" });
      setProgress(100);
    }
  };
  let width = window.innerWidth
  return (
    <>
      <LoadingBar
        color="#f11946"
        height={3}
        progress={progress}
        onLoaderFinished={() => setProgress(0)}
      />
      
      {width<768?<>
      {home?<div className="mobilediv">
          <div className="mobiledivcontent">
          <div className="mobilenavitems">
          <Link to="/">
             <IoIosInformationCircle/>
             </Link>
            </div>
            <div className="mobilenavitems" onClick={handleClickScroll}>
            <Link to="/">
              <LuPackageSearch/>
              </Link>
            </div>
           
            <div className="mobilenavitems" onClick={handleClickScrollhome}>
            <Link to="/">
            <IoIosHome/>
            </Link>
            </div>
           
            <div className="mobilenavitems">
            <Link to="/checkout">
              <IoIosCart/>
              </Link>
            </div>
            <div className="mobilenavitems" onClick={handleloginclick}>
            <IoMdPerson/>
            </div>
          </div>

        </div>:<>
        <div className="mobilediv productmobilenav">
        <div className="productmobile">
        <div className="mobilenavitems">
            <Link to="/checkout">
              <IoIosCart/>
              </Link>
            </div>
        </div>
        </div>
        </>}
        
      </>
      

      :
      home ? (
        <div className="mainnav">
          <div className="navcontent">
            <div className="leftnav">
              {" "}
              <Link to="/">
                <img
                  src="/Navbar/hyphennav.png"
                  alt=""
                  onClick={handleClickScrollhome}
                />
              </Link>
            </div>
            <div className="centernav">
              <Link to="/">
                {" "}
                <div className="navitem" onClick={handleClickScrollhome}>
                  Home
                </div>
              </Link>
              <Link to="/">
                {" "}
                <div className="navitem" onClick={handleClickScroll}>
                  Products
                </div>
              </Link>
              <Link to="/">
                {" "}
                <div className="navitem">About Us</div>
              </Link>
            </div>
            <div className="productrightnav">
              {cookie.token ? (
                <>
                <div className="productrightnavitems">
                <Link to="/checkout">
                    <div
                      className="prrightnavitem"
                      onClick={() => setProgress(100)}
                    >
                      <FaShoppingCart />
                      <div className="prtotal">{state.total}</div>
                    </div>
                  </Link>
                  </div>
                  <div className="productrightnavitems">
                  <div className="rightnavitem" onClick={()=>handlelogout()}>
                  <IoMdLogOut />
                </div>
                </div>
                 
                </>
              ) : (
                <>
                <div className="productrightnavitems">
                    <Link to="/checkout">
                    <div
                      className="prrightnavitem"
                      onClick={() => setProgress(100)}
                    >
                      <FaShoppingCart />
                      <div className="prtotal">{state.total}</div>
                    </div>
                  </Link>
                  </div>
                    <div className="productrightnavitems">
                <div className="rightnavitem" onClick={handleloginclick}>
                  <IoMdPerson/>
                </div>
                </div>
                </>
               
              )}
            </div>
          </div>
        </div>
      ) : (
        <div className="productnav">
          <div className="productcenternav">
            <Link to="/">
              {" "}
              <div className="prnavitem" onClick={() => setProgress(100)}>
                <IoIosArrowBack />
              </div>
            </Link>
          </div>
          <div className="productrightnav">
            {" "}
            <div className="productrightnavitems">
            <Link to="/checkout">
              <div className="prrightnavitem" onClick={() => setProgress(100)}>
                <FaShoppingCart />
                <div className="prtotal">{state.total}</div>
              </div>
            </Link>
            </div>
          </div>
        </div>
      )}
      
        
      
      
    </>
  );
};

export default Navbar;
