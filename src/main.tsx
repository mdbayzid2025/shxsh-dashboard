import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'
import { Toaster } from "react-hot-toast";

import './index.css'
import ReduxProvider from './redux/lib/ReduxProvider.tsx'
import router from './components/Router/Routes.tsx'


createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ReduxProvider>
    <Toaster/>
    <RouterProvider router={router}/>    
    </ReduxProvider>
  </StrictMode>,
)
