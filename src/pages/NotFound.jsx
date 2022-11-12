import React from 'react'
import {BsEmojiDizzy} from 'react-icons/bs'

const NotFound = () => {
  return (
    <div className=' w-full flex justify-center flex-col items-center h-[80%]'>
        <BsEmojiDizzy size={300}/>
        <p className='font-bold text-8xl'>404</p>
        <p className='font-medium text-xl'>Page Not Found</p>
    </div>
  )
}

export default NotFound