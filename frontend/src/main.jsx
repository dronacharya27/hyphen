import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { LoginDataContextProvider } from './Context/LoginContext.jsx'
import { ProductProvider } from './Context/ProductContext.jsx'
import {  QueryClient,QueryClientProvider, useQueryClient,} from 'react-query'
import { CartProvider } from './Context/CartContext.jsx'
import { GoogleOAuthProvider } from '@react-oauth/google';
import { CookiesProvider } from 'react-cookie';
import { OrderContextProvider } from './Context/OrderContext.jsx'
const queryClient = new QueryClient()
ReactDOM.createRoot(document.getElementById('root')).render(
    // <React.StrictMode>
<QueryClientProvider client={queryClient}>
<CookiesProvider defaultSetOptions={{ path: '/' }}>
<GoogleOAuthProvider clientId="436262933103-a2eah2g9rom3qi893nugknfcs4mlukrj.apps.googleusercontent.com">
<OrderContextProvider>
    <LoginDataContextProvider>
    <ProductProvider>
        
    <CartProvider>
    <App />
    </CartProvider>
    
    </ProductProvider>
    </LoginDataContextProvider>
    </OrderContextProvider>
    </GoogleOAuthProvider>
    </CookiesProvider>
</QueryClientProvider>
// {/* </React.StrictMode> */}
)
