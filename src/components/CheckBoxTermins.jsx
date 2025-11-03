import React from 'react'
import { ModalScreen } from './Modals/ModalScreen'

export const CheckBoxTermins = () => {
  return (
    <>
    <div className="flex items-start mb-5">
      <div className="flex items-center h-5 ">
        <input id="terms" type="checkbox" value="terms" 
        className="flex w-4 h-4
        border  
        rounded-lg 
        focus:ring-2 
        focus:ring-sky-500
        dark:focus:ring-sky-300" 
        required />
      </div>
      <label for="terms" 
      className="flex gap-2 ms-2 text-sm
      font-small
      dark:text-gray-500">
        Aceptar 
        <p  
        className="text-sky-300 
        hover:underline 
        dark:text-sky-600">
           <ModalScreen />
        </p>
      </label>
    </div>
    </>
  )
}
