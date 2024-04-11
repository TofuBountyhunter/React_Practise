import React from 'react'
import { Link , NavLink} from 'react-router-dom'

function Header() {
  return (
    <>
      <div className='w-full p-3 border-2 border-b-gray-200 font-medium'>
        <div className='flex justify-around '>

          <div className='flex justify-center w-28'><Link to='#'><img src="src\assets\logo.png" alt="BlackBox"/></Link></div>

          <div>
            <ul className='flex justify-between w-80 h-[100%] '>
              <li className='flex items-center'><NavLink to='/'>Home</NavLink></li>
              <li className='flex items-center'><NavLink to='/course'>Course</NavLink></li>
              <li className='flex items-center'><NavLink to='/about'>About</NavLink></li>
              <li className='flex items-center'><NavLink to='/contact'>Contact</NavLink></li>
            </ul>
          </div>

          <div className='flex justify-between w-40'>
            <div className='flex items-center'><button>Cart</button></div>
            <div className='flex items-center'><button className='transition-all duration-200 ease-linear border rounded-md p-2 px-3 border-gray-800 hover:bg-black hover:text-white'>Log in</button></div>
          </div>
          
        </div>
      </div>
    </>
  )
}

export default Header