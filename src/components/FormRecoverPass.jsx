import React from 'react'
import { BtnRecoverPass } from '../components/BtnRecoverPass'
import { NavLink } from 'react-router-dom'

export const FormRecoverPass = () => {
  return (
    <>
      <div className="flex flex-col items-center justify-center px-1.5 py-10 mx-auto md:h-screen lg:py-0 ">

      <div className="w-full p-5 md:mt-[-86px] mt-[13vh] max-w-100 sm:p-3 border-l-3 ml-1 border-teal-400 rounded-sm shadow-xl/10">
          <h1 className="text-2xl px-1 font-bold leading-tight tracking-tight text-gray-900 md:text-xl dark:text-gray-700">
              Perdiste tú contraseña?
          </h1>
          <p className="flex text-justify font-light text-gray-500 dark:text-gray-600 mt-4">¡No te preocupes! Escribe tu correo electrónico y te enviaremos un código para restablecer tu contraseña.</p>
          <form className="mt-4 space-y-3 lg:mt-4 md:space-y-3 " action="#">
              <div>
                  <label for="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-600">Correo Electrónico</label>
                  <input type="email" name="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2 dark:bg-gray-100 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="symplia@company.com" required="" />
              </div>
              <div className="flex items-start">
                  <div className="flex items-center h-5">
                    <input id="terms" aria-describedby="terms" type="checkbox" class="w-3 h-3 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800" required="" />
                  </div>
                  <div className="ml-3 text-sm">
                    <label for="terms" className="font-light text-gray-500 dark:text-gray-500">Acepto los <a className="font-medium text-primary-600 hover:underline dark:text-primary-500" required="" >Términos y condiciones</a></label>
                  </div>
              </div>

              <BtnRecoverPass />

              <NavLink to='/'>
              <div className='flex flex-col items-end px-2 mt-2 mb-2'>
                  <p className="text-sm font-light text-gray-500 dark:text-gray-600">
                    Ya tienes una cuenta? <a href="#" className="font-medium text-teal-600 hover:underline dark:text-sky-700">Iniciar Sesión</a>
                  </p>

              </div>
              </NavLink>
          </form>
      </div>
  </div>
 </>

)}

export default FormRecoverPass
