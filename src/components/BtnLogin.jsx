import React from 'react'

export const BtnLogin = () => {
  return (
    <div>
        <button type="submit" 
        className="w-full 
        text-white 
        hover:bg-sky-600 
        focus:ring-4 
        focus:outline-none 
        font-medium rounded-lg 
        text-sm px-5 py-2.5 
        text-center
        cursor-pointer
        bg-sky-800">
        Iniciar Sesión
        </button>
    </div>
  )
}

export default BtnLogin