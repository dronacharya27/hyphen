import ProductReducer from '../Reducer/ProductReducer'
import React, { createContext, useContext, useReducer } from 'react'
import axios from 'axios'
import { useLoginDataContext } from './LoginContext'
import { useQuery } from 'react-query'
const ProductContext = createContext()
const ProductProvider = ({children}) => {
    
    
    const getproductcache = async()=>{
      const url = 'https://dron2708.pythonanywhere.com/api/product/'
      const {data:res} = await axios.get(url)
      console.log(res);
      return res
    }
    
    const {data:products,isLoading,isError} = useQuery(
    {
      queryKey:['products'],
      queryFn: getproductcache,
      staleTime:10000,
      cacheTime:10000

  })
const {progress, setProgress} = useLoginDataContext()
    console.log(products)
    
   
    


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
