import { createContext, useCallback, useContext,  useEffect,  useReducer } from "react";
import CartReducer from '../Reducer/CartReducer'
import { useCookies } from 'react-cookie';

import LoadingBar from 'react-top-loading-bar';
const CartContext = createContext()

const CartProvider =({children}) =>{
const [cookie,setCookie,removeCookie] = useCookies(['cart'])


const getCartData = useCallback( ()=>{
    // let newCart = cookie.cart
    let newCart = JSON.parse(localStorage.getItem('cart')) 
   
    if(newCart == [] || newCart==null || newCart == undefined){
        return [];
    }else{
        return newCart.cart;
    }
},[])

const initialstate = {
    cart:getCartData(),
    total:0,
    total_price:0
}

const[state,dispatch] = useReducer(CartReducer,initialstate)


useEffect(()=>{
    // setCookie('cart', JSON.stringify(state.cart))
    localStorage.setItem('cart',JSON.stringify(state))
},[state.cart])

useEffect(()=>{
dispatch({
    type:'total_price'
})

},[state.cart])

const add_to_cart = (id,product)=>{
  

    dispatch({
        type:'add_to_cart',
        payload:{id,product}
    })
    

}


const remove_from_cart = (id,product)=>{
    dispatch({
        type:'remove_from_cart',
        payload:{id,product}
    })
}
console.log(state)
return (
    <CartContext.Provider value={{state,add_to_cart,remove_from_cart,cookie}} >
        {children}
    </CartContext.Provider>
)
}

const useCartContext =()=>{
    return useContext(CartContext)
}

export {CartContext,CartProvider,useCartContext}