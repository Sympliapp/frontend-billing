import React from 'react'

export const FormResetPassword = () => {
  return (
    <>
    <form class="mt-4 p-1 space-y-4 lg:mt-5 md:space-y-3 space-y-6" action="#">
        <div>
            <label 
            forHtml="password" 
            className="
            block 
            mb-1 
            text-sm 
            ml-4 
            text-gray-600
            ">
              Nueva contraseña <span className='text-red-500'>(*)</span>
            </label>
            <input
            forHtml='password'
            id="new-password" 
            type="password" 
            name="new-password" 
            placeholder="********" 
            className="custom_input input" 
            required />
        </div>

        <div>
          <label 
            htmlFor="password" 
            className="
            block 
            mb-1 
            text-sm 
            ml-4 
            text-gray-600
            ">
            Confirmar contraseña <span className='text-red-500'>(*)</span>
          </label>

          <input 
            htmlFor='confirm-password'
            type="password" 
            name="confirm-password" 
            id="confirm-password" 
            placeholder="********" 
            className="custom_input input" 
            required
            />
        </div>

      </form>
    </>
  )
}

export default FormResetPassword