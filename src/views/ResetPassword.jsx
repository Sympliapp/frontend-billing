import React from 'react'
import BtnRestPassword from '../components/BtnRestPassword'
import { IoIosArrowBack } from "react-icons/io";
import { NavLink } from 'react-router-dom';


export const ResetPassword = () => {
  return (
    <>
    <div>
      <NavLink to='/'>
      <IoIosArrowBack size={40} color='grey' className='absolute mx-3 my-6 mt-5 cursor-pointer' />
      </NavLink>
    </div>
  <div class="flex items-center justify-center px-1 py-10 mx-1 md:h-screen lg:py-0">

      <div class="w-full md:mt-0 mt-[20vh] max-w-100 sm:p-3 border-l-3 ml-1 border-teal-400 rounded-sm shadow-xl/10 p-1">
          <h2 class="text-2xl px-1 font-bold leading-tight tracking-tight text-gray-900 md:text-xl dark:text-gray-700">
              Actualizar Contraseña
          </h2>
          <form class="mt-4 p-1 space-y-4 lg:mt-5 md:space-y-3 space-y-6" action="#">
              <div>
                  <label for="password" className="block mb-1 text-sm font-medium text-gray-600 text-md text-grey-600">Nueva contraseña</label>
                  <input type="password" name="password" id="password" placeholder="••••••••" className="border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2 dark:bg-gray-100 dark:border-gray-500 dark:placeholder-gray-400 dark:text-grey-400" required />
              </div>
              <div>
                  <label for="password" className="block mb-1 text-sm font-medium text-gray-600 text-md text-grey-600">Confirmar contraseña</label>
                  <input type="password" name="confirm-password" id="confirm-password" placeholder="••••••••" className="border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2 dark:bg-gray-100 dark:border-gray-500 dark:placeholder-gray-400 dark:text-grey-400" required />
              </div>
              <div className="flex items-start">
                  <div className="flex items-center h-5">
                    <input id="terms" aria-describedby="terms" type="checkbox" className="w-3 h-3 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800" required />
                  </div>
                  <div className="ml-2 text-sm">
                    <label for="terms" className="font-light text-gray-500 dark:text-gray-500">Acepto los <a className="font-medium text-primary-600 hover:underline dark:text-primary-500" required >Términos y condiciones</a></label>
                  </div>
              </div>

              <BtnRestPassword />
              
          </form>
      </div>
  </div>


    </>
  )
}

export default ResetPassword