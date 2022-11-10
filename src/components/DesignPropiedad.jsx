import React from 'react'

const DesignPropiedad = ({ imagen, precio, nombre, caro, categoria }) => {
  return (
    <div className='cursor-pointer'>
      <div className='h-72 w-72'>
        <img src={imagen} alt={nombre} className="h-full w-full object-cover" />
      </div>
      <div className='flex flex-col  mt-4' >
        <p className='text-lg font-bold'>{nombre}</p>
        <div className='flex items-center justify-between w-full'>
          <div>
            <p className='font-medium'>{precio}</p>
            <p className='font-medium capitalize'>{caro}</p>
          </div>
          
          <p className='text-lg font-bold capitalize'>{categoria}</p>

        </div>


      </div>

    </div>
  )
}

export default DesignPropiedad