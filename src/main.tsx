import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

import Home from './Pages/Home/Home';
import Characters from './Pages/Characters/Characters';
import About from './Pages/About/About';
import DescriptionCard from './assets/DescriptionCard/DescriptionCard';


const queryClient = new QueryClient()


const router = createBrowserRouter([
  {
    path: "/",
    element: <Home/>,
  },
  {
    path: "/characters",
    element: <Characters/>,
  },
  {
    path: "/episodes",
    element: <Characters/>,
  },
  {
    path: "/about",
    element: <About/>,
  },
]);

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
    </QueryClientProvider>
  </React.StrictMode>,
)
