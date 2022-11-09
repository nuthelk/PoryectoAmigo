import React from 'react'


const Welcome = () => {
  return (
    <div>
        <main className='mt-20 w-full px-36'>
            <h1 className='text-black font-semibold text-5xl text-center'>GuitarLA</h1>
            <div className='text-center mt-8'>
                <p className='text-[#979797]'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. <br />
                Lorem Ipsum has been the industry's standard dummy text</p>
            </div>
            <div className='border border-black p-2 w-40 h-12 m-auto mt-6 flex justify-center items-center cursor-pointer hover:bg-black hover:text-white transition-all duration-300'>
                <p className='font-semibold'>Show All</p>
            </div>
            
            <div className='flex justify-center  mt-20 h-[400px]  gap-6 '>
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

            <div>
                <div>
                    <img src="" alt="" />
                </div>
            </div>
        </main>
        
    </div>
  )
}

export default Welcome