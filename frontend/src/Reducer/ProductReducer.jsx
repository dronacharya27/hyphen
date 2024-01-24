import React from 'react'

const ProductReducer = (state,action) => {

    switch (action.type) {
        case 'getproducts':
           console.log(action.payload)
            return {...state,products:action.payload}
            break;
    
        default:
            break;
    }
  
}

export default ProductReducer
