import React from 'react'
import SympliapLogo from '../../assets/imagens/SympliapLogo.png'

export const NavLogo = () => {
  return (
    <div className='absolute'>
          <img className='flex m-3 ml-4 w-11 h-15 cursor-pointer' src={SympliapLogo} alt="Symplia Logo" />
        </div>
  )
}

export default NavLogo