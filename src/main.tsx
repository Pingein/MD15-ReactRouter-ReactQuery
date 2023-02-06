import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

import Home from './Pages/Home/Home';
import Characters from './Pages/Characters/Characters';
import Episodes from './Pages/Episodes/Episodes';
import About from './Pages/About/About';
import DescriptionCard from './assets/DescriptionCard/DescriptionCard';

import Navigation, { links } from './assets/Navigation/Navigation'
import axios from 'axios';
import FullscreenCharacterCard from './assets/FullscreenCard/FullscreenCharacterCard';
import FullscreenEpisodeCard from './assets/FullscreenCard/FullscreenEpisodeCard';



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
    children: [
      {
        path: "/characters/:characterId",
        element: <FullscreenCharacterCard />
      }
    ]
  },
  {
    path: "/episodes",
    element: (
      <section>
        <Navigation links={links}/>
        <Episodes/>
      </section>
    ),
    children: [
      {
        path: "/episodes/:id",
        element: <FullscreenEpisodeCard />
      }
    ]
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
