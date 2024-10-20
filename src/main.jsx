import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import App from './App.jsx'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import {createHashRouter} from 'react-router-dom'
import Home from './Pages/Home.jsx'
import About from './Pages/About.jsx'
import Courses from './Pages/Courses.jsx'
import Contact from './Pages/Contact.jsx'
import Nopage from './Pages/Nopage.jsx'
import Signup from './Pages/Signup.jsx'
import SignIn from './Pages/SignIn.jsx'


const router =createHashRouter([
  {
    path:'/',
    element:<Home/>
  },
  {
    path:'/about',
    element:<About/>
  },
  {
    path:'/courses',
    element:<Courses/>
  },
  {
    path:'/contact',
    element:<Contact/>
  },
  {
    path:'/signup',
    element:<Signup/>
  },
  {
    path:'/signIn',
    element:<SignIn/>
  },
  {
    path:'*',
    element:<Nopage/>
  },
])
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
