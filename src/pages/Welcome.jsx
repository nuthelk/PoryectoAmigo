import React from 'react'
import logo4 from '../img/logo4.png'
import logo5 from '../img/logo5.png'
import logo3 from '../img/logo 3.png'
import logo2 from '../img/logo2.png'

const Welcome = () => {
  return (
    <div className=''>
        <main className='md:px-36 mt-20'>
            <h1 className='text-black font-semibold text-5xl text-center'>Mon-Pays</h1>
            <div className='text-center mt-8 w-full'>
                <p className='text-[#979797]'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. <br />
                Lorem Ipsum has been the industry's standard dummy text</p>
            </div>
            <div className=' border border-black p-2 w-40 h-12 m-auto mt-6 flex justify-center items-center cursor-pointer hover:bg-black hover:text-white transition-all duration-300'>
                <p className='font-semibold'>Show All</p>
            </div>
            
            <div className='flex flex-col md:flex-row md:justify-center items-center  mt-16 md:h-[400px] gap-6 '>
                <div className='flex  items-end h-full'>
                    <div className='bg-[#C4C4C4] h-80 w-64  '></div>
                </div>
                <div className='flex  items-start h-full'>
                    <div className='bg-[#C4C4C4] h-80 w-64  '></div>
                </div>
                <div className='flex  items-end h-full'>
                    <div className='bg-[#C4C4C4] h-80 w-64  '></div>
                </div>      
            </div>

            <div className='flex md:gap-16 mt-10 items-center gap-4 justify-center md:flex-row flex-col'>
                <div className='h-14 w-14'>
                    <img src={logo4} alt="logo" className='h-full w-full' />
                </div>
                <div className='h-14 w-14'>
                    <img src={logo5} alt="logo" className='h-full w-full' />
                </div>
                <div className='h-14 w-14'>
                    <img src={logo3} alt="logo" className='h-full w-full' />
                </div>
                <div className='h-14 w-14'>
                    <img src={logo2} alt="logo" className='h-full w-full' />
                </div>
            </div>
            
        </main>

        
    </div>
  )
}

export default Welcome