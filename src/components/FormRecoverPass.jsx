import { NavLink } from 'react-router-dom'
import { CheckBoxTermins } from './CheckBoxTermins'
import { IoIosArrowBack } from "react-icons/io";

export const FormRecoverPass = () => {
  return (
    <>
      <div className="flex flex-col items-center justify-center px-1.5 py-10 mx-auto md:h-screen lg:py-0 ">

      <div className="w-full p-5 md:mt-[-86px] mt-[13vh] max-w-100 sm:p-3 border-l-3 ml-1 border-teal-400">
          <h1 className="text-2xl px-1 font-bold leading-tight tracking-tight text-gray-900 md:text-xl dark:text-gray-700">
              Perdiste tú contraseña?
          </h1>
          <p className="flex text-justify font-light text-gray-500 dark:text-gray-600 mt-4">¡No te preocupes! Escribe tu correo electrónico y te enviaremos los pasos para su posterior recuperación.</p>
          <form className="mt-4 space-y-5 lg:mt-4 md:space-y-3 " action="#">
              <div>
                  <label 
                  for="email" 
                  className="block mb-2 
                  text-sm font-medium 
                  text-gray-900
                  dark:text-gray-600">
                    Correo Electrónico
                  </label>

                  <input 
                  type="email" 
                  name="email" 
                  id="emailuser" 
                  className="custom_input input" 
                  placeholder="symplia@company.com" 
                  required
                  />
              </div>

              <div className="items-start mt-5">
                <CheckBoxTermins />
              </div>

              <div>
                <button className='custom_button w-full cursor-pointer'>
                  Recuperar contraseña
                </button>
              </div>

              <NavLink to='/'>
              <div className='flex flex-col items-end px-2 mt-7 mb-4'>
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
