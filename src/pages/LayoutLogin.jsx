import React from 'react'
import { BsCart4 } from 'react-icons/bs'
import { Outlet } from 'react-router-dom'
import { BiSearch } from 'react-icons/bi'

const LayoutLogin = () => {
    return (
        <>
            <header className='bg-black h-16'>
                <div className='flex justify-between items-center text-white w-full h-full px-40'>
                    <div className='flex justify-around items-center gap-8'>
                        <h3 className=' text-2xl font-semibold cursor-pointer'>Ecommerce</h3>
                        <p className='cursor-pointer text-xl font-light'>Shop</p>
                        <p className='cursor-pointer text-xl font-light'>Stories</p>
                        <div className='flex items-center relative'>
                            <BiSearch size={24}  className="absolute ml-2" />
                            <input type="search" placeholder='Search' className='pl-10 py-2 pr-2 border-none bg-black' />
                        </div>

                    </div>


                    <div className='flex justify-around items-center gap-8'>
                        <BsCart4 size={24} className="cursor-pointer" />
                        <p className='cursor-pointer text-xl'>Profile</p>
                    </div>
                </div>
            </header>
            <Outlet />
        </>
    )
}

export default LayoutLogin