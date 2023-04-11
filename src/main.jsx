import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from './App'
import './index.css'
import Portfolio from "../src/components/portfolio/portfolio"
import Rick from "../src/components/rick&morty/rick"
import Calculator from './components/calculator/calculator';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/portfolio",
    element: <Portfolio />,
  },
  {
    path: "/calculator",
    element: <Calculator />,
  },
  {
    path: "/rick&morty",
    element: <Rick />,
  },
]);
ReactDOM.createRoot(document.getElementById('root')).render(
 
  <RouterProvider router={router} />
)
