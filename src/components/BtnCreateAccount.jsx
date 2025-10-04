import React from 'react'

export const BtnCreateAccount = () => {
  return (
    <div>
        <button type="submit" 
        className="w-full 
        text-white 
        hover:bg-sky-600 
        focus:ring-4 
        focus:outline-none 
        font-medium rounded-lg 
        text-sm px-5 py-3 
        text-center
        cursor-pointer
        mt-4 mb-4
        bg-sky-800">
        Crear cuenta
        </button>
    </div>
  )
}

export default BtnCreateAccount