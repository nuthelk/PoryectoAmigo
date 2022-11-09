import React from 'react'

const LayoutLogout = () => {
  console.log("first")
  return (
    <header className='bg-black h-16'>
        <div className='flex justify-between items-center text-white w-full h-full px-40'>
            <h3 className=' text-2xl font-semibold cursor-pointer'>Ecommerce</h3>
            <div className='flex justify-around items-center gap-8'>
                <p className='cursor-pointer text-xl'>Login</p>
                <p className='cursor-pointer text-xl'>Register</p>
            </div>
        </div>
    </header>
  )
}

export default LayoutLogout