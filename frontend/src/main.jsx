import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {createBrowserRouter, RouterProvider} from 'react-router-dom';
import App from './App.jsx'
import './index.css'

import Register from './pages/register/register.jsx'

const pages = createBrowserRouter([
  {
    path: '/',
    element: <App/>
    // children: [
    //   { path: '/book-register', element: <Register/> }
    // ]
  },
  {
    path: '/book-register',
    element: <Register/>
  },
  {
    path: '/book-update/:id',
    element: <Register/>
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={pages} ></RouterProvider>
  </StrictMode>,
)
