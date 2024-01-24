import React, { useEffect, useRef, useState } from "react";
import "./ProductPage.css";
import Navbar from "../Navbar/Navbar";
import axios from 'axios'
import { useParams } from "react-router-dom";
import { useProductContext } from "../../Context/ProductContext";
import Footer from "../Footer/Footer";

const ProductPage = () => {
  const {products,isError,isLoading} = useProductContext()
  const params = useParams()
  console.log(params);
  console.log(products)
  
  const [Image, setImage] = useState('');
  
  const productpage = document.querySelector('.productpage')
  

  const url = `http://127.0.0.1:8000/api/product/${params.id}`
useEffect(()=>{
  if (products) {
    products.find((e)=>e.id==params.id).product_img.slice(0,1).map((e,index) => (
      setImage(e.image)
       
     ))
  }
 
},[products])
  
 
 

    const handleImage = (e) => {
      setImage(e.image);
      document.querySelector('.productleft').classList.remove('productleftinitial')
      productpage.style.setProperty('--url',`url(${e.image})`)
      effectImage(e); 
    };
  

  const effectImage = (e) => {
    
    document.querySelector(".proimg").classList.toggle("effectimg");  
    const proimage = products.find((e)=>e.id==params.id).product_img.filter((el)=>el.id==e.id)
    document.querySelector(`.imgli${proimage[0].id}`).classList.add("borderimg");
    const najota = products.find((e)=>e.id==params.id).product_img.filter((el)=>el.id!=e.id)
    najota.map(e=>(
      document.querySelector(`.imgli${e.id}`).classList.remove("borderimg")
    ))
  };
  return (
    <div>
      <Navbar home={false}/>
     
      <div className="productpage">
        <div className="productleft productleftinitial">
          <div className="productimage">
          {
        isLoading?<h1>loading...</h1>:isError?<h1>error</h1>:
        <>
       
         <img className="proimg" src={Image} alt="" />
         </>
       
        }
            
          </div>
          {
        isLoading?<h1>loading...</h1>:isError?<h1>error</h1>:
          <div className="productimagelist">
          
        {products.find((e)=>e.id==params.id).product_img.map((e,index) => (
          
          <>
         
            <div className="productimgitems" key={index}>
              {" "}
              {console.log(`imgli${e.id}`)}
              <img
                className={`imgli imgli${e.id}` }
                src={e.image}
                alt=""
                onClick={() => handleImage(e)}
                key={index}
              />
            </div>
          </>
        ))}
        
            
          </div>}
        </div>
        <div className="productright">
        {
        isLoading?<h1>loading...</h1>:isError?<h1>error</h1>:
        <div className="productdetailpage">
            <div className="productname">
              
              <div className="productheaddiv">
                <div className="producthead">
                  {products.find((e)=>e.id==params.id).product_head_title} <br />
                </div>
                <div className="productsubhead">
                {products.find((e)=>e.id==params.id).product_sub_title}
                </div>
                <div className="productprice">
                <div>Rs. {products.find((e)=>e.id==params.id).product_price}/-</div>
              </div>
              </div>
              
            </div>
            <div className="productdetail">
              <div className="detailsubhead">
              
             
                  <div>
                  <h3>What It Is?</h3>
                 <p>  {products.find((e)=>e.id==params.id).product_what_it} </p>
                </div>
                <div>
                  <h3>What It Does?</h3>
                <p> {products.find((e)=>e.id==params.id).product_what_does}</p>  
                </div>
                <div>
               <h3>How It Does?</h3>
               <p>{products.find((e)=>e.id==params.id).product_how_does}</p>   
                </div>
                
        
               
                
              </div>
             <div className="using">
             <div className="use">
                <div>
                  <h3>How To Use</h3>
                {products.find((e)=>e.id==params.id).product_how_use} 
               
                <h3>When To Use</h3>
                {products.find((e)=>e.id==params.id).product_when_use}
                </div>
              </div>
              <div className="ingredients">
             
              <div>
              <h3> Ingredients</h3>
           
                  
                  <p>{products.find((e)=>e.id==params.id).product_ingredient}</p>
                  </div>
               
               
              </div>
             </div>
             
            </div>
            <div className="productactions">
            <div className="actions">
                <button className="btn">Buy Now</button>
              </div>
              <div className="actions">
                <button className="btn cartbtn">Add to cart</button>
              </div>
              
            </div>
          </div>
        }
          
        </div>
      </div>

      
   
    </div>
  );
};

export default ProductPage;
