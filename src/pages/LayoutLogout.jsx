import React from 'react'

const LayoutLogout = () => {
  console.log("first")
  return (
    <header className='bg-black h-16 sticky'>
        <div className='flex items-center text-white h-full  md:px-40 px-2 sm:px-8 justify-between'>
            <h3 className=' text-2xl font-semibold cursor-pointer'>Mon-Pays</h3>
            <div className='flex justify-around items-center gap-3 sm:gap-8'>
                <p className='cursor-pointer text-lg'>Login</p>
                <p className='cursor-pointer text-lg'>Register</p>
            </div>
        </div>
    </header>
  )
}

export default LayoutLogout