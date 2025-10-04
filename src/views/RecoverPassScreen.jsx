import React from 'react';
import FormRecoverPass from '../components/FormRecoverPass'
import { IoIosArrowBack } from "react-icons/io";
import { NavLink } from 'react-router-dom';

const RecoverPassScreen = () => {
  return (
    <div>
      <NavLink to='/'>
      <IoIosArrowBack size={40} color='grey' className='absolute mx-3 my-6 mt-5 cursor-pointer' />
      </NavLink>
      <FormRecoverPass  />
    </div>
  );
};

export default RecoverPassScreen