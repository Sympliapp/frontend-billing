import React from 'react'

export const BtnContactanos = () => {
  return (
    <div className='flex justify-end-safe'>
    <button type="button" 
    className="text-white 
    hover:text-white 
    border 
    border-gray-200 
    hover:bg-teal-500 
    focus:ring-1 
    focus:outline-none 
    focus:ring-gray-100 
    font-large 
    rounded-lg 
    text-md px-2.5 py-2
    text-center 
    me-5 mt-[24px]
    cursor-pointer
    ">Contáctanos</button>
    </div>
  )
}

export default BtnContactanos