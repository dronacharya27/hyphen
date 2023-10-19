import React, { useEffect, useRef, useState } from "react";
import "./ProductPage.css";
import Navbar from "../Navbar/Navbar";
import axios from 'axios'
import { useParams } from "react-router-dom";


const ProductPage = () => {
  const params = useParams()
  console.log(params);
  const[image,setmage] = useState([{id:'',image:''}])
  const [Image, setImage] = useState('');
  const img = document.querySelector(".proimg");
  const productpage = document.querySelector('.productpage')

  const[data,setData]=useState([])
  const url = 'http://127.0.0.1:8000/api/product/'

  const func1 = async()=>{
    try {
      const {data:res} = await axios.get(url)
      console.log(res);
      setData(res[params.id])
      setmage(res[params.id].product_img)
      setImage(`${res[params.id].product_main_img}`)
      
    } catch (error) {
      console.log(error);
    }
      
  }
  useEffect(()=>{
    func1()
    
  },[])


  

  

  
  
    const handleImage = (e) => {
      setImage(e.image);
      document.querySelector('.productleft').classList.remove('productleftinitial')
      productpage.style.setProperty('--url',`url(${e.image})`)
      effectImage(e); 
    };
  

  const effectImage = (e) => {
    
    img.classList.toggle("effectimg");
    const proimage = image.filter((el)=>el.id==e.id)
    document.querySelector(`.imgli${proimage[0].id}`).classList.add("borderimg");
    const najota = image.filter((el)=>el.id!=e.id)
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
            <img className="proimg" src={Image} alt="" />
          </div>
          <div className="productimagelist">
            {image.map((e) => (
              <>
                <div className="productimgitems" >
                  {" "}
                  <img
                    className={`imgli imgli${e.id}` }
                    src={e.image}
                    alt=""
                    onClick={() => handleImage(e)}
                   
                  />
                </div>
              </>
            ))}
          </div>
        </div>
        <div className="productright">
          <div className="productdetailpage">
            <div className="productname">
              <div className="productheaddiv">
                <span className="producthead">
                  {data.product_head_title} <br />
                </span>
                <span className="productsubhead">
                {data.product_sub_title}
                </span>
              </div>
              <div className="productprice">
                <span>Rs. {data.product_price}</span>
              </div>
            </div>
            <div className="productdetail">
              <div className="detailsubhead">
                {data.product_description}
              </div>
            </div>
            <div className="productactions">
              <div className="actions">
                <button className="btn">Add to cart</button>
              </div>
              <div className="actions">
                <button className="btn">Buy Now</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
