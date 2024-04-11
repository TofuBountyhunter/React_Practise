import React, { useState } from 'react'
import {Link,Outlet} from 'react-router-dom'
import {Header,Footer,About,Contact,Home,Course,Error} from './components'


function App() {

  return (
    <>
      <Header/>
      <Outlet/>
      <Footer/>
    </>
  )
}

export default App
