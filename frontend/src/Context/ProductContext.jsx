import ProductReducer from '../Reducer/ProductReducer'
import React, { createContext, useContext, useReducer } from 'react'
import axios from 'axios'
import { useEffect } from 'react'
import { useQuery, useQueryClient } from 'react-query'
import { useLoginDataContext } from './LoginContext'
const ProductContext = createContext()
const initialdata = {products:[]}
const ProductProvider = ({children}) => {
    const[state,dispatch] = useReducer(ProductReducer,initialdata)
    
    const {progress, setProgress} = useLoginDataContext()
    const getproductcache = async()=>{
      const url = 'http://127.0.0.1:8000/api/product/'
      const {data:res} = await axios.get(url)
      console.log(res);
      return res
    }
    const {data:products,isError,isLoading} = useQuery({queryKey:['products'],queryFn: getproductcache,staleTime:10000,cacheTime:100000})
    
    
   
    


  return (
<ProductContext.Provider value={{products,isError,isLoading}}>
    {children}
</ProductContext.Provider>
  )
}

const useProductContext = ()=>{
    return useContext(ProductContext)
}

export {ProductProvider,ProductContext,useProductContext}
