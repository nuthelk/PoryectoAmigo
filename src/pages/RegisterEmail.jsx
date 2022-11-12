import React from 'react'
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import { Button } from '../components/Button'
import { get, post } from '../helpers/crud';
import { useForm } from '../Hooks/useForm';

const RegisterEmail = () => {
  const urlUsuarios = `https://mon-pays.fly.dev/usuarios`;
  const navigate = useNavigate()

  // Este es un custom hook que me permite alamcenar los datos de los inputs en handleInputChangeName, para despues imprimirlos en formValue
  const { formValue, handleInputChangeName } = useForm({
    nombre: "",
    email: "",
    password: "",
    repeatpassword:""
  });

  const HandleSubmit = async(e) => {
    e.preventDefault();
    if(formValue.password !== formValue.repeatpassword){
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'The passwords do not match!',
        footer:'Try again'
      })
    }else{
      const usuario = await get(urlUsuarios)
      const findUsuario= usuario.find(e => e.Email == formValue.email )
      if(findUsuario){
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'Email is already in use!'
        })
      }else{
        const user = {
          nombre:formValue.nombre,
          apellido:"",
          direccion:"",
          Email:formValue.email,
          password:formValue.password,
          favoritos:[]
        }
        post(urlUsuarios, user)
        Swal.fire(
          'Welcome!',
          'You clicked the button!',
          'success'
        )
        navigate("/loginEmail")
      }
    }
  }

  return (
    <div className='mt-20'>
        <form onSubmit={(e) => HandleSubmit(e)} className='w-3/4 pb-5 bg-white gap-2 rounded-md md:w-3/5 mx-auto lg:w-1/3'>
            <h1 className='p-5 text-2xl font-bold md:pl-7'>Welcome Back</h1>
            <h2 className='pl-5 text-lg font-light text-gray-400 md:pl-7'>Sign Up</h2>
            <div className='p-5 flex flex-col gap-3 md:pl-7'>
                <input name="nombre" onChange={handleInputChangeName} className='h-10 border-2 pl-5 md:w-11/12' placeholder="Name" type="text" />
                <input name="email" onChange={handleInputChangeName} className='h-10 border-2 pl-5 md:w-11/12' placeholder="Email" type="email" />
                <input name="password" onChange={handleInputChangeName} className='h-10 border-2 pl-5 md:w-11/12' placeholder="Password" type="password" />
                <input name="repeatpassword" onChange={handleInputChangeName} className='h-10 border-2 pl-5 md:w-11/12' placeholder="Repeat Password" type="password" />
            </div>
            <div className='w-24 mt-5 mx-auto text-center'>
              <Button text={"Sign Up"} />
            </div>
        </form>
        <div className='w-3/4 mt-10 text-center md:w-3/5 mx-auto lg:w-1/3'>
            <h1 className='font-semibold text-gray-400 '>Do you have account ? <a className='font-bold text-gray-500' href="./LoginEmail">Sign in</a></h1>
            
        </div>
    </div>
  )
}

export default RegisterEmail