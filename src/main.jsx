import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router'
import router from './Component/router'
import AuthProvider from './Provider/AuthProvider'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
   <RouterProvider router={router}
   fallbackElement={<p>Loading....</p>
   }></RouterProvider></AuthProvider>
  </StrictMode>,
)
