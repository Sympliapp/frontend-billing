import { CheckBoxTermins } from '../components/CheckBoxTermins'
import { FormResetPassword } from '../components/FormResetPassword'
import { BackButton } from '../components/Buttons/BackButton';

export const ResetPassword = () => {
  return (
    <>
    <div>
      <BackButton />
    </div>

    <div className="flex items-center justify-center px-1 py-10 mx-1 md:h-screen lg:py-0">
      <div className="w-full md:mt-0 mt-[20vh] max-w-100 sm:p-3 border-l-3 ml-1 border-teal-400 p-1">
          <h2 className="text-2xl 
          px-1 
          font-bold 
          leading-tight 
          tracking-tight 
          text-gray-900 
          md:text-xl 
          dark:text-gray-700">
            Actualizar Contraseña
          </h2>

          <FormResetPassword />

          <div className='flex flex-wrap w-auto p-4'>
            <p className='text-sm'>Todos los campos 
              <span className='text-red-500'> (*) </span> 
              son requeridos para actualizar tú cuenta.
            </p>
              
          </div>

         <div className='flex ml-3'>
           <CheckBoxTermins />
         </div>

          <div className='flex mb-4 mt-2'>
            <button className='custom_button w-full cursor-pointer'>
              Guardar cambios
            </button>
          </div>

        </div>
      </div>
  </>
  )
}

export default ResetPassword