import React from 'react'
import SympliaLogo from '../../assets/imagens/SympliaLogo.png'

export const NavLogo = () => {
  return (
    <div className='absolute'>
          <img className='flex m-3 ml-4 w-11 h-15 cursor-pointer' src={SympliaLogo} alt="Symplia Logo" />
        </div>
  )
}

export default NavLogo