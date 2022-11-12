import React from 'react'
import {useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import {Button} from '../components/Button'
import { get } from '../helpers/crud';
import { useForm } from '../Hooks/useForm';


const LoginEmail = () => {
  const urlUsuarios = `https://mon-pays.fly.dev/usuarios`;

  const { formValue, handleInputChangeName } = useForm({
    email: "",
    password: ""
  });


  const handleSubmit = async(e) => {
    e.preventDefault();
    const getUsuarios = await get(urlUsuarios)
    const findUsuario = getUsuarios.find(e => e.Email.toLowerCase() == formValue.email.toLowerCase() ) //validar si el usuario ya existe 
    if(findUsuario){
      if(findUsuario.password == formValue.password){   //validar si la password es correcta
        sessionStorage.setItem("idUser", findUsuario.id)
        window.location.replace('/')

      }else{

        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'Incorrect password!',
          footer:'Try again'
        })
      }
    }else{

      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'The email is not valid!',
        footer:'Try again'
      })

    }
    
  }

  return (
    <div className='mt-20 '>
        <form onSubmit={e => handleSubmit(e)} className='w-3/4 h-80 bg-white gap-2 rounded-md md:w-3/5 mx-auto lg:w-1/3'>
            <h1 className='p-5 text-2xl font-bold md:pl-7'>Welcome Back</h1>
            <h2 className='pl-5 text-lg font-light text-gray-400 md:pl-7'>Login with email</h2>
            <div className='p-5 flex flex-col gap-3 md:pl-7'>
                <input name='email' onChange={handleInputChangeName} className='h-10 border-2 pl-5 md:w-11/12' placeholder="Email" type="email" required />
                <input name='password' onChange={handleInputChangeName} className='h-10 border-2 pl-5 md:w-11/12' placeholder="Password" type="password" required />
            </div>
            <div className='w-24 mt-5 mx-auto text-center'>
              <Button text={"Sign in"} />
            </div>
        </form>
        <div className='w-3/4 mt-10 text-center md:w-3/5 mx-auto lg:w-1/3'>
            <h1 className='font-semibold text-gray-400 '>Or Create an <a className='font-bold text-gray-500' href="./RegisterEmail">account</a></h1>
        </div>
    </div>
  )
}

export default LoginEmail