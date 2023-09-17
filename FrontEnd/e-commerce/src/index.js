import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { BrowserRouter, RouterProvider } from 'react-router-dom'
import router from './router';
import { ContextProvider } from './contexts/ContextsProvider';
import { CartProvider } from './contexts/CartContext';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <React.StrictMode>
  <CartProvider>
    <ContextProvider>
      <RouterProvider router={router} />
    </ContextProvider>
  </CartProvider>

  // </React.StrictMode>
);

