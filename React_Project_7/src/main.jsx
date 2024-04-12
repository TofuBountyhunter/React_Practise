import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {Header,Footer,About,Contact,Home,Course,Error} from './components'
import { createRoutesFromElements,RouterProvider,createBrowserRouter ,BrowserRouter,Route,Routes} from 'react-router-dom'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<App/>}>
      <Route path='' element={<Home/>}/>
      <Route path='about' element={<About/>}/>
      <Route path='contact' element={<Contact/>}/>
      <Route path='course' element={<Course/>}/>
      <Route path='*' element={<Error/>}/>
    </Route>
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>     
  </React.StrictMode>,
)
