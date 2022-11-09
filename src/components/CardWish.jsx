import React from 'react'
import { Button } from './Button'

const CardWish = () => {
  return (
    <>
        <div className='flex flex-col items-center gap-5 justify-center'>
            <h1 className='font-bold text-2xl mt-5'>Wish List</h1>
            <div className='flex flex-col p-10 justify-center items-center md:items-start md:flex-row'>
                <img className='w-2/3' src="https://i.pinimg.com/736x/21/28/4e/21284ec293da6c04197d6c9a1632157a.jpg" alt="list" />
                <div className='flex flex-col text-center gap-5 p-5'>
                    <h1 className='font-semibold text-xl'>Casa de mier** Literalmente esta hecha de eses</h1>
                    <div className='h-24 overflow-y-scroll md:h-2/3 lg:h-44'>
                        <p className='text-sm text-start'>Descripcion de la Descripcion de la Descripcion de la Descripcion de la Descripcion de la Descripcion de la Descripcion de la Descripcion de la Descripcion de la Descripcion de la Descripcion de la Descripcion de la Descripcion</p>
                    </div>
                    <div className='w-1/2 mx-auto'>
                        <Button text={"Get it"} />
                    </div>
                    
                </div>
            </div>
        </div>
    </>
  )
}

export default CardWish