import React from 'react'
import { Link, Outlet } from 'react-router-dom'
import logo from '../img/logo.png'

const LayoutLogout = () => {

  return (
    <header className='bg-black h-16 '>
      <div className='flex items-center text-white h-full  md:px-40 px-2 sm:px-8 justify-between'>
        
        <Link to="/">
          <div className='flex items-center gap-4'>
            <img src={logo} alt="logo" className='h-10' />
            <h3 className='text-2xl font-semibold cursor-pointer w-28'>Mon-Pays</h3>
          </div>
        </Link>

        <div className='flex justify-around items-center gap-3 sm:gap-8'>
          <Link to="/loginEmail">
            <p className='cursor-pointer text-xl'>Login</p>
          </Link>
          <Link to="/registerEmail">
            <p className='cursor-pointer text-xl'>Register</p>
          </Link>
        </div>
      </div>
      <Outlet /> 
    </header>
  )
}

export default LayoutLogout