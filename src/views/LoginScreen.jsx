import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'
import { NavLogo } from '../components/NavBar/NavLogo'
import {BtnContactanos} from '../components/BtnContactanos'
import { NavLink } from 'react-router-dom'
import { CheckBoxRemenber } from '../components/CheckBoxRemenber';


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
      <section className="flex flex-col items-center">
        <div className='flex flex-col w-full bg-white h-22 shadow-md '>
        <NavLogo />

        <div className='absolute my-6 ms-18'>
          <h1 className='text-2xl sm:text-3xl font-semibold text-sky-950'>Symplia</h1>
        </div>

        <div className='lg:visible xl:visible'>
          <BtnContactanos />
        </div>
        </div>

        <div className="flex max-w-100 mt-[14vh] border-l-3 ml-1.5 border-teal-400 rounded-sm shadow-xl/10 p-1">

          <div className="flex p-2">
            <form className="flex flex-col space-y-5 px-1" action="#" onSubmit={handleSubmit}>
            <h2 className="text-3xl font-semibold text-sky-800">Iniciar Sesión</h2>
            <p className='flex text-justify text-sm text-grey-600'>Symplia Facturación nace con el proposito de hacer tu trabajo más
              simple, sencillo y organizado.
            </p>

            <div className='flex flex-row items-center '>
              <div className="custom_input w-full">
                <svg xmlns="http://www.w3.org/2000/svg" 
                className="svg_icon bi-envelope" 
                viewBox="0 0 16 16">
                  <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4Zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1H2Zm13 2.383-4.708 2.825L15 11.105V5.383Zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741ZM1 11.105l4.708-2.897L1 5.383v5.722Z"></path>
                </svg>
                <input
                id='email' 
                htmlFor="email"
                className="input"  
                placeholder="name@symplia.com" 
                type="email" value={email} 
                onChange={(e) => setEmail(e.target.value)}
                required
                  />
              </div>
            </div>

            <div className='flex flex-row items-center gap-2'>
             <div className="custom_input w-full">
                <svg xmlns="http://www.w3.org/2000/svg" 
                className="svg_icon bi-key" 
                viewBox="0 0 16 16">
                  <path d="M0 8a4 4 0 0 1 7.465-2H14a.5.5 0 0 1 .354.146l1.5 1.5a.5.5 0 0 1 0 .708l-1.5 1.5a.5.5 0 0 1-.708 0L13 9.207l-.646.647a.5.5 0 0 1-.708 0L11 9.207l-.646.647a.5.5 0 0 1-.708 0L9 9.207l-.646.647A.5.5 0 0 1 8 10h-.535A4 4 0 0 1 0 8zm4-3a3 3 0 1 0 2.712 4.285A.5.5 0 0 1 7.163 9h.63l.853-.854a.5.5 0 0 1 .708 0l.646.647.646-.647a.5.5 0 0 1 .708 0l.646.647.646-.647a.5.5 0 0 1 .708 0l.646.647.793-.793-1-1h-6.63a.5.5 0 0 1-.451-.285A3 3 0 0 0 4 5z"></path>
                  <path d="M4 8a1 1 0 1 1-2 0 1 1 0 0 1 2 0z"></path>
                </svg>
                  <input
                  id="password" 
                  htmlFor="password"
                  type="password" 
                  name="password"  
                  value={password} 
                  onChange={(e) => setPassword(e.target.value)}
                  className="input" 
                  required
                  autoComplete="current-password"
                  placeholder="***********" />
                </div>
            </div>


        <div className="flex justify-between">
        <CheckBoxRemenber />
            <NavLink to='/recoverpass'>
              <span className="flex mt-2 text-sm font-medium text-sky-700 hover:underline">Recuperar contraseña</span>   
            </NavLink>
        </div>
        
        <div>
          <button className='custom_button w-full cursor-pointer'>
            Iniciar Sesión
          </button>
        </div>
        
        <NavLink to='/register'>
        <div className="flex flex-row items-end gap-2 text-sm font-medium text-sky-700 dark:text-gray-600 ">
            No tienes una cuenta? <span  
            className="text-sky-700 
            hover:underline 
            dark:text-sky-800
            text-sky-700
            ">Registrarse</span>
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