import React from 'react'

const DesignPropiedad = ({imagen, precio, nombre}) => {
  return (
    <div className='cursor-pointer'>
        <div className='h-72 w-72'>
            <img src={imagen} alt={nombre} className="h-full w-full object-cover" />
        </div>
        <div className='mt-4'>
            <p className='text-lg font-bold'>{nombre}</p>
            <p className='font-medium'>${precio}</p>
        </div>
    </div>
  )
}

export default DesignPropiedad