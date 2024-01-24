
const CartReducer = (state,action) => {

    switch (action.type) {
        case 'add_to_cart':
            
            const is_exist = state.cart.find(e => e.id == action.payload.id)
            
            if (is_exist){
              
                const updated_cart = state.cart.map(e => {
                    if (e.id == action.payload.id) {
                        return {
                            ...e,product_quantity: e.product_quantity+1
                        } 
                           
                    }
                    else return e
                })
               
                return{
                    ...state,
                    cart: updated_cart,
                    total:state.total + 1
                }
                
            }
            else{
            console.log(state);
            const product = action.payload.product
           
           return {
                ...state,
                cart:[
                    ...state.cart,
                    product
                ],
                total:state.total + 1
  
            }
        }
        case 'remove_from_cart':
            const is_exist2 = state.cart.find(e=> e.id == action.payload.id)
            if (is_exist2 && state.total>0) {
                const updated_cart = state.cart.map(e=>{
                    if(e.id == action.payload.id) {
                        
                            return {...e,product_quantity:e.product_quantity-1}
                        
                        
                    }
                   else return e
                  
                }).filter(e=>e.product_quantity !=0)
                 return {
                    ...state,
                    cart:updated_cart,
                    total:state.total-1
                 }  
                
            }
           
            return state
        

        case 'total_price':
                let {total,total_price} = state.cart.reduce(
                    (accum, curval) =>{
                        let {product_quantity,product_price} = curval;
                        
                        accum.total += product_quantity;
                        let updated_price = product_quantity*product_price
                        accum.total_price +=updated_price;
                       
                        return accum;

                    },
                    {
                        total:0,
                        total_price:0
                    }
                

                )
                return {...state, total, total_price}
            default:
            break;
    }
  
}

export default CartReducer
