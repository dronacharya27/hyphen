import React from 'react'

const OrderReducer = (state,action) => {
  switch (action.type) {
    case 'handleorderdata':
        const {name,value} = action.payload
        return {
            ...state,[name]:value
        }
        break;
  
    default:
        break;
  }
}

export default OrderReducer
