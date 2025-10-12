import React from 'react'

export const CheckBoxRemenber = () => {
  return (
    <>
    <div className="flex items-start mb-2 mt-2">
      <div className="flex items-center h-5">
        <input id="terms" type="checkbox" value="terms" 
        className="flex w-5 h-5
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
        Recordar Datos 
      </label>
    </div>
    </>
  )
}