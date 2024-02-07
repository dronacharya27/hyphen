import { createContext, useContext, useReducer } from "react";
import OrderReducer from "../Reducer/OrderReducer";


const OrderContext = createContext()
const initial_order_state = {
    name:'',
    last_name:'',
    mobile_number:'',
    email:'',
    address:'',
    apt:'',
    city:'',
    postcode:''
}
const OrderContextProvider = ({children}) =>{
const [order_state,dispatch] = useReducer(OrderReducer,initial_order_state)
const handleorderdata = (e)=>{
    const {name,value} = e.target
    dispatch({
        type:'handleorderdata',
        payload:{name,value}
    })
}

return (
    <OrderContext.Provider value={{handleorderdata,order_state,initial_order_state}}>
    {children}
    </OrderContext.Provider>

)
   
}

const useOrderContext=()=>{
    return useContext(OrderContext)
}

export {OrderContext,OrderContextProvider,useOrderContext}