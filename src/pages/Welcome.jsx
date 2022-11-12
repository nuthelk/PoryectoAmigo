import React from 'react'
import casa1 from '../img/casa1.jpg'
import casa2 from '../img/casa2.jpg'
import casa3 from '../img/casa3.jpeg'
import { Link } from 'react-router-dom'


const Welcome = () => {

    const idUser = sessionStorage.getItem('idUser')


    return (
        <div className=''>
            <main className='md:px-36 mt-20'>
                <h1 className='text-black font-semibold text-7xl text-center'>Mon-Pays</h1>
                <div className='text-center mt-8 w-full'>
                    <p className='text-[#979797] text-lg'>Find the property of your dreams or sell your real estate and show the world your beauties</p>
                </div>
                <Link to={`${idUser ? "/shop" : "/loginEmail"}`} >
                    <div className=' border border-black p-2 w-40 h-12 m-auto mt-6 flex justify-center items-center cursor-pointer hover:bg-black hover:text-white transition-all duration-300'>
                        <p className='font-semibold' >Show All</p>
                    </div>
                </Link>


                <div className='flex flex-col md:flex-row md:justify-center items-center  mt-16 md:h-[400px] gap-6 '>
                    <div className='flex items-end h-full hover:scale-110 transition-all duration-300'>
                        <img className=' h-80 w-64 object-cover ' alt="img1" src={casa1} />
                    </div>
                    <div className='flex  items-start h-full hover:scale-110 transition-all duration-300'>
                        <img className=' h-80 w-64 object-cover ' alt="img2" src={casa2} />
                    </div>
                    <div className='flex  items-end h-full hover:scale-110 transition-all duration-300'>
                        <img className=' h-80 w-64 object-cover ' alt="img3" src={casa3} />
                    </div>
                </div>

            </main>
            <footer className='flex  flex-col  text-center bg-white w-full  md:flex-row mt-40 shadow-2xl'>
                <div className='w-full pb-4'>
                    <p className='mt-2 md:mt-6 font-medium italic text-xl font-serif'>2022 MonPays - All rights reserved</p>
                </div>
            </footer>
        </div>
    )
}

export default Welcome