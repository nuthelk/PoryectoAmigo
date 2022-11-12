import React from 'react'
import { Link } from 'react-router-dom'
import { formatterPeso } from '../helpers/formatoMoneda'

const DesignPropiedad = ({ imagen, precio, nombre, categoria }) => {
  return (
    <Link to="/description">
      <div className='cursor-pointer hover:scale-110 transition-all duration-300'>
        <div className='h-72 w-72'>
          <img src={imagen} alt={nombre} className="h-full w-full object-cover" />
        </div>
        <div className='flex flex-col  mt-4' >
          <p className='text-lg font-bold'>{nombre.substr(0,34)}</p>
          <div className='flex items-center justify-between w-full'>
            <div>
              <p className='font-medium'>{formatterPeso.format(precio)}</p>
            </div>

            <p className='text-lg font-bold capitalize'>{categoria}</p>

          </div>


        </div>

      </div>
    </Link>

  )
}

export default DesignPropiedad