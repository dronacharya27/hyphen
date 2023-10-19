import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { LoginDataContextProvider } from './Context/LoginContext.jsx'


ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
<LoginDataContextProvider>
    <App />
    </LoginDataContextProvider>
</React.StrictMode>
)
