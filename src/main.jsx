import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './index.css'
import App from './App.jsx'
import {BrowserRouter} from "react-router-dom"
import { CartProvider } from './CartContext/CartContext.jsx';


createRoot(document.getElementById('root')).render(
  <BrowserRouter>
   <CartProvider>
      <App />
    </CartProvider>
  </BrowserRouter>
   
  
)
