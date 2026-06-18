import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {createBrowserRouter, RouterProvider} from 'react-router-dom';
import './main.css'

import Register from './pages/register/register.jsx'  
import Books from './pages/books/books.jsx'  

const pages = createBrowserRouter([
  {
    path: '/',
    element: <Books/>
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
