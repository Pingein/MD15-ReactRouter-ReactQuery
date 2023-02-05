import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

import Home from './Pages/Home/Home';
import Characters from './Pages/Characters/Characters';
import Episodes from './Pages/Episodes/Episodes';
import About from './Pages/About/About';
import DescriptionCard from './assets/DescriptionCard/DescriptionCard';

import Navigation, { links } from './assets/Navigation/Navigation'


const queryClient = new QueryClient()

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <section>
        <Navigation links={links}/>
        <Home/>
      </section>
    ),
  },
  {
    path: "/characters",
    element: (
      <section>
        <Navigation links={links}/>
        <Characters/>
      </section>
    ),
  },
  {
    path: "/episodes",
    element: (
      <section>
        <Navigation links={links}/>
        <Episodes/>
      </section>
    ),
  },
  {
    path: "/about",
    element: (
      <section>
        <Navigation links={links}/>
        <About/>
      </section>
    ),
  },
]);

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
    </QueryClientProvider>
  </React.StrictMode>,
)
