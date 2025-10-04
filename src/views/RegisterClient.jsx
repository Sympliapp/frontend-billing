import React from 'react';
import FormRegisterUser from '../components/FormRegisterUser'
import { IoIosArrowBack } from "react-icons/io";
import { NavLink } from 'react-router-dom';

const RegisterClient = () => {
  return (
    <div>
      <NavLink to='/'>
      <IoIosArrowBack size={40} color='grey' className='absolute mx-3 my-6 mt-5 cursor-pointer' />
      </NavLink>
       <FormRegisterUser />
    </div>
  );
};

export default RegisterClient