import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'
import { HiOutlineMail } from "react-icons/hi";
import { HiLockClosed } from "react-icons/hi2";
import { NavLogo } from '../components/NavBar/NavLogo'
import {BtnContactanos} from '../components/BtnContactanos'
import { NavLink } from 'react-router-dom'
import { BtnLogin } from '../components/BtnLogin'

const LoginScreen = () => {

  const navigate = useNavigate ();

  const [email , setEmail ] = useState ('')
  const [password , setPassword ] = useState ('')

  const user = {
    email: 'testing@gmail.com',
    password: '1234'
  };

  // useEffect( () => {
  //  localStorage.removeItem('user');
  //}, []);

  const handleSubmit = (e) => {
    e.preventDefault()

    if (user.email === email && user.password === password) {
      console.log('Iniciaste Sesión Exitosamente');
      localStorage.setItem("user", JSON.stringify(user.email));
      navigate('/', {replace: true} );

    } else {
      alert ('Email o Contraseña Incorrectos');
    }
  };

  return (
    <>
      <section className="flex flex-col items-center  bg-red-0">
        <div className='flex flex-col w-full bg-white h-22 shadow-md '>
        <NavLogo />

        <div className='absolute my-6 ms-18'>
          <h1 className='text-2xl sm:text-3xl font-semibold text-sky-950'>Symplia</h1>
        </div>

        <div className='lg:visible xl:visible'>
          <BtnContactanos />
        </div>
        </div>

        <div class="flex max-w-100 mt-[15vh] border-l-3 ml-1.5 border-teal-400 rounded-sm shadow-xl/10 p-0">

          <div class="flex p-3">
            <form className="flex flex-col space-y-3 px-1" action="#" onSubmit={handleSubmit}>
            <h2 className="text-3xl font-semibold text-sky-800">Iniciar Sesión</h2>
            <p className='flex text-justify text-sm text-grey-600'>Symplia Facturación nace con el proposito de hacer tu trabajo más
              simple, sencillo y organizado.
            </p>

            <div className='flex flex-row items-center gap-2'>
              <HiOutlineMail size={25} color='grey'/>
                <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} className="border border-emerald-700 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-Cyan-500 block w-full p-2 dark:bg-gray-100 dark:border-gray-500 dark:placeholder-gray-400 dark:text-grey-600" placeholder="name@symplia.com" required />
            </div>

            <div className='flex flex-row items-center gap-2'>
              <HiLockClosed size={25} color='grey' />

                <input type="password" name="password" id="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="********" className="border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2 dark:bg-gray-100 dark:border-gray-500 dark:placeholder-gray-400 dark:text-grey-400" required/>
            </div>
            <div className="flex justify-between">
                <div className="flex ">
                    <div className="flex items-center h-5">
                        <input id="remember" type="checkbox" value="" className="w-3 h-3 rounded-sm focus:ring-2 focus:ring-blue-200 dark:bg-gray-400 dark:border-gray-400 dark:focus:ring-blue-400  dark:focus:ring-offset-gray-800" required />
                    </div>
                    <label for="remember" className="ms-2 text-sm font-medium ">Recordar datos</label>
                </div>
                <NavLink to='/recoverpass'>
                  <a href="#" className="text-sm font-medium text-sky-700 hover:underline ">Recuperar contraseña</a>   
                </NavLink>
                
            </div>
            <div>
              <BtnLogin />
            </div>
            
            <NavLink to='/register'>
            <div className="flex flex-row items-end gap-2 text-sm font-medium text-sky-700 dark:text-gray-600 ">
                No tienes una cuenta? <a href="#" 
                className="text-sky-700 
                hover:underline 
                dark:text-sky-800
                text-sky-700
                ">Registrarse</a>
            </div>
            </NavLink>
            <div className='flex mt-4'>
              <a href="resetpassword"><span>Reset Password</span></a>
            </div>
            </form>
          </div>
        </div>

      </section>
    </>
  );
};

export default LoginScreen